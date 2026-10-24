"use client";

import { useState } from "react";
import Link from "next/link";
import { resetPassword } from "@/lib/api/auth";
import { ApiError } from "@/lib/api/client";
import { isStrongPassword } from "@/lib/utils/auth";
import AuthField from "./AuthField";

type Errors = Partial<Record<"password" | "confirmPassword", string>>;

const outlineBtn =
  "rounded-lg border border-ink bg-white px-4 py-2 text-xs font-medium hover:bg-[#F6F8F3]";

export default function ResetPasswordForm({ token }: { token: string }) {
  const [errors, setErrors] = useState<Errors>({});
  const [formError, setFormError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const password = String(data.get("password") ?? "");
    const confirmPassword = String(data.get("confirmPassword") ?? "");

    const next: Errors = {};
    if (!isStrongPassword(password)) next.password = "Use 8 or more characters with letters and numbers";
    if (confirmPassword !== password) next.confirmPassword = "Passwords do not match";
    setErrors(next);
    setFormError("");
    if (Object.keys(next).length > 0) return;

    setSubmitting(true);
    try {
      await resetPassword({ token, password });
      setDone(true);
    } catch (err) {
      setFormError(err instanceof ApiError ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <div className="text-center">
        <div className="rounded-lg bg-[#EAF1E8] p-4">
          <p className="text-sm font-medium">Your password has been reset.</p>
          <p className="mt-1 text-xs text-muted">Log in with your new password to continue learning.</p>
        </div>
        <Link
          href="/login"
          className="mt-4 inline-block rounded-lg bg-lime px-5 py-2 text-xs font-medium text-ink hover:brightness-95"
        >
          Log in
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      {formError && (
        <p role="alert" className="rounded-lg bg-red-50 px-3 py-2 text-xs text-red-700">
          {formError}{" "}
          <Link href="/forgot-password" className="underline">
            Request a new link
          </Link>
        </p>
      )}
      <AuthField
        label="New password"
        name="password"
        type="password"
        placeholder="Enter new password"
        autoComplete="new-password"
        hint="Use at least 8 characters with a mix of letters and numbers"
        error={errors.password}
      />
      <AuthField
        label="Confirm new password"
        name="confirmPassword"
        type="password"
        placeholder="Re-enter new password"
        autoComplete="new-password"
        error={errors.confirmPassword}
      />
      <div className="flex flex-wrap justify-center gap-3 pt-1">
        <Link href="/login" className={outlineBtn}>
          Back to log in
        </Link>
        <button
          type="submit"
          disabled={submitting}
          className="rounded-lg bg-lime px-4 py-2 text-xs font-medium text-ink hover:brightness-95 disabled:opacity-60"
        >
          {submitting ? "Resetting..." : "Reset password"}
        </button>
      </div>
    </form>
  );
}
