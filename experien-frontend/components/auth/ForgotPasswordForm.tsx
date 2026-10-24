"use client";

import { useState } from "react";
import Link from "next/link";
import { requestPasswordReset } from "@/lib/api/auth";
import { ApiError } from "@/lib/api/client";
import { isEmail } from "@/lib/utils/auth";
import AuthField from "./AuthField";

const outlineBtn =
  "rounded-lg border border-ink bg-white px-4 py-2 text-xs font-medium hover:bg-[#F6F8F3]";

export default function ForgotPasswordForm() {
  const [emailError, setEmailError] = useState("");
  const [formError, setFormError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [sentTo, setSentTo] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = String(new FormData(e.currentTarget).get("email") ?? "").trim();

    setFormError("");
    if (!isEmail(email)) {
      setEmailError("Enter a valid email address");
      return;
    }
    setEmailError("");

    setSubmitting(true);
    try {
      await requestPasswordReset({ email });
      setSentTo(email);
    } catch (err) {
      setFormError(err instanceof ApiError ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (sentTo) {
    return (
      <div>
        <div className="rounded-lg bg-[#EAF1E8] p-4">
          <p className="text-sm font-medium">Check your email</p>
          <p className="mt-1 text-xs text-muted">
            If {sentTo} matches an Experien learner account, a reset link is on its way. It can take a
            few minutes, so check your spam folder too.
          </p>
        </div>
        <div className="mt-4">
          <Link href="/login" className={outlineBtn}>
            Back to log in
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      {formError && (
        <p role="alert" className="rounded-lg bg-red-50 px-3 py-2 text-xs text-red-700">
          {formError}
        </p>
      )}
      <AuthField
        label="Email address"
        name="email"
        type="email"
        placeholder="name@example.com"
        autoComplete="email"
        error={emailError}
      />
      <div className="flex flex-wrap gap-3">
        <Link href="/login" className={outlineBtn}>
          Back to log in
        </Link>
        <button
          type="submit"
          disabled={submitting}
          className="rounded-lg bg-lime px-4 py-2 text-xs font-medium text-ink hover:brightness-95 disabled:opacity-60"
        >
          {submitting ? "Sending..." : "Send reset link"}
        </button>
      </div>
    </form>
  );
}
