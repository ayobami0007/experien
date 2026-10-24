"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { resendVerification, verifyEmail } from "@/lib/api/auth";
import { ApiError } from "@/lib/api/client";

const LENGTH = 6;
const RESEND_SECONDS = 30;

const outlineBtn =
  "rounded-lg border border-ink bg-white px-4 py-2 text-xs font-medium hover:bg-[#F6F8F3] disabled:opacity-50";

export default function VerifyEmailForm({ email, redirectTo }: { email: string; redirectTo: string }) {
  const router = useRouter();
  const [digits, setDigits] = useState<string[]>(Array(LENGTH).fill(""));
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [cooldown, setCooldown] = useState(0);
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (cooldown <= 0) return;
    const t = setTimeout(() => setCooldown((c) => c - 1), 1000);
    return () => clearTimeout(t);
  }, [cooldown]);

  function setDigit(i: number, value: string) {
    const digit = value.replace(/\D/g, "").slice(-1);
    setDigits((prev) => prev.map((d, idx) => (idx === i ? digit : d)));
    if (digit && i < LENGTH - 1) inputs.current[i + 1]?.focus();
  }

  function handleKeyDown(i: number, e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Backspace" && !digits[i] && i > 0) inputs.current[i - 1]?.focus();
    if (e.key === "ArrowLeft" && i > 0) inputs.current[i - 1]?.focus();
    if (e.key === "ArrowRight" && i < LENGTH - 1) inputs.current[i + 1]?.focus();
  }

  function handlePaste(e: React.ClipboardEvent<HTMLInputElement>) {
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, LENGTH);
    if (!pasted) return;
    e.preventDefault();
    setDigits(Array.from({ length: LENGTH }, (_, i) => pasted[i] ?? ""));
    inputs.current[Math.min(pasted.length, LENGTH - 1)]?.focus();
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const code = digits.join("");
    setNotice("");
    if (code.length < LENGTH) {
      setError("Enter the 6-digit code");
      return;
    }
    setError("");

    setSubmitting(true);
    try {
      await verifyEmail({ email, code });
      router.push(redirectTo);
      router.refresh();
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Something went wrong. Please try again.");
      setSubmitting(false);
    }
  }

  async function handleResend() {
    setError("");
    setNotice("");
    try {
      await resendVerification({ email });
      setNotice("A new code has been sent to your email.");
      setCooldown(RESEND_SECONDS);
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Could not resend the code. Try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="flex justify-center gap-2" role="group" aria-label="Verification code">
        {digits.map((d, i) => (
          <input
            key={i}
            ref={(el) => {
              inputs.current[i] = el;
            }}
            value={d}
            onChange={(e) => setDigit(i, e.target.value)}
            onKeyDown={(e) => handleKeyDown(i, e)}
            onPaste={handlePaste}
            inputMode="numeric"
            autoComplete={i === 0 ? "one-time-code" : "off"}
            maxLength={1}
            aria-label={`Digit ${i + 1}`}
            className="h-11 w-10 rounded-lg border border-line bg-white text-center text-lg focus:border-ink focus:outline-none"
          />
        ))}
      </div>

      {error && (
        <p role="alert" className="mt-3 text-center text-[11px] text-red-600">
          {error}
        </p>
      )}
      {notice && <p className="mt-3 text-center text-[11px] text-muted">{notice}</p>}

      <div className="mt-5 text-center">
        <button
          type="submit"
          disabled={submitting}
          className="rounded-lg bg-lime px-5 py-2 text-xs font-medium text-ink hover:brightness-95 disabled:opacity-60"
        >
          {submitting ? "Verifying..." : "Verify email"}
        </button>
      </div>

      <div className="mt-3 flex flex-wrap justify-center gap-3">
        <button type="button" onClick={handleResend} disabled={cooldown > 0} className={outlineBtn}>
          {cooldown > 0 ? `Resend code (${cooldown}s)` : "Resend code"}
        </button>
        <Link href="/register" className={outlineBtn}>
          Change email
        </Link>
      </div>
    </form>
  );
}
