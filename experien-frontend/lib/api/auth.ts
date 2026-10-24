import type { LoginInput, RegisterInput, User } from "@/types/auth";
import { ApiError, apiFetch, isMockApi } from "./client";

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Endpoint paths and response shapes are drafts until confirmed with the backend team.
// Assumed: each returns { user }, and the session is an httpOnly cookie set by the backend.

export async function login(input: LoginInput): Promise<User> {
  if (isMockApi) {
    await wait(600);
    return { id: "mock-user", fullName: "Amaka Chukwu", email: input.email };
  }
  const data = await apiFetch<{ user: User }>("/auth/login", { method: "POST", json: input });
  return data.user;
}

export async function register(input: RegisterInput): Promise<User> {
  if (isMockApi) {
    await wait(600);
    return { id: "mock-user", fullName: input.fullName, email: input.email };
  }
  const data = await apiFetch<{ user: User }>("/auth/register", { method: "POST", json: input });
  return data.user;
}

export async function logout(): Promise<void> {
  if (isMockApi) return;
  await apiFetch("/auth/logout", { method: "POST" });
}

// Returns the logged-in user, or null when there is no valid session.
export async function getCurrentUser(): Promise<User | null> {
  if (isMockApi) return null;
  try {
    const data = await apiFetch<{ user: User }>("/auth/me");
    return data.user;
  } catch (err) {
    if (err instanceof ApiError && err.status === 401) return null;
    throw err;
  }
}

// ---- Password recovery and email verification (draft endpoints, confirm with the backend) ----

// Should always succeed for the learner, whether or not the email has an account.
export async function requestPasswordReset(input: { email: string }): Promise<void> {
  if (isMockApi) {
    await wait(600);
    return;
  }
  await apiFetch("/auth/forgot-password", { method: "POST", json: input });
}

// `token` comes from the reset link in the email: /reset-password?token=...
export async function resetPassword(input: { token: string; password: string }): Promise<void> {
  if (isMockApi) {
    await wait(600);
    return;
  }
  await apiFetch("/auth/reset-password", { method: "POST", json: input });
}

export async function verifyEmail(input: { email: string; code: string }): Promise<void> {
  if (isMockApi) {
    await wait(600);
    // Mock mode: any code works except 000000, so you can test the error state.
    if (input.code === "000000") throw new ApiError("That code is incorrect or has expired.", 400);
    return;
  }
  await apiFetch("/auth/verify-email", { method: "POST", json: input });
}

export async function resendVerification(input: { email: string }): Promise<void> {
  if (isMockApi) {
    await wait(400);
    return;
  }
  await apiFetch("/auth/resend-verification", { method: "POST", json: input });
}
