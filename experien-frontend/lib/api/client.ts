// The single API client. Every request goes through apiFetch so the base URL,
// headers and error handling live in one place.

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "";

// No base URL set = the backend isn't ready yet, so the api functions use mock responses.
export const isMockApi = BASE_URL === "";

export class ApiError extends Error {
  status: number;
  fieldErrors?: Record<string, string>;

  constructor(message: string, status: number, fieldErrors?: Record<string, string>) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.fieldErrors = fieldErrors;
  }
}

type Options = Omit<RequestInit, "body"> & { json?: unknown };

export async function apiFetch<T>(path: string, options: Options = {}): Promise<T> {
  const { json, headers, ...rest } = options;

  let res: Response;
  try {
    res = await fetch(`${BASE_URL}${path}`, {
      ...rest,
      credentials: "include", // send/receive the session cookie
      headers: {
        Accept: "application/json",
        ...(json !== undefined ? { "Content-Type": "application/json" } : {}),
        ...headers,
      },
      body: json !== undefined ? JSON.stringify(json) : undefined,
    });
  } catch {
    throw new ApiError("Could not reach the server. Check your connection and try again.", 0);
  }

  const data = await res.json().catch(() => null);

  if (!res.ok) {
    // Assumed error shape: { message: string, errors?: { field: message } }. Adjust to the backend's.
    throw new ApiError(
      data?.message ?? "Something went wrong. Please try again.",
      res.status,
      data?.errors
    );
  }

  return data as T;
}
