import Link from "next/link";
import type { Metadata } from "next";
import AuthLayout from "@/components/auth/AuthLayout";
import ResetPasswordForm from "@/components/auth/ResetPasswordForm";
import { isMockApi } from "@/lib/api/client";

export const metadata: Metadata = { title: "Reset password | Experien" };

type Props = { searchParams: Promise<{ token?: string }> };

export default async function ResetPasswordPage({ searchParams }: Props) {
  const { token } = await searchParams;

  // The link in the reset email looks like /reset-password?token=...
  // In mock mode the token is optional so you can test the page directly.
  const missingToken = !token && !isMockApi;

  return (
    <AuthLayout
      centered
      chips={["Set a new password", "Project skills · Industry context"]}
      heroTitle="Create a new password for your Experien account."
      heroText="Choose a secure password and return to your learner dashboard."
      eyebrow="Account access"
      title="Reset your password"
      subtitle="Set a new password and regain access to your Experien learning account."
      cardTitle="Create a new password"
      cardText="Your new password will replace the previous one for this Experien learner account."
      aside={{
        title: "Keep your learning access secure.",
        text: "A new password does not change your course enrolments, materials or progress.",
        points: [
          "Choose a password you do not reuse elsewhere.",
          "Keep your account email private.",
          "You can return to learning immediately after reset.",
        ],
      }}
    >
      {missingToken ? (
        <div className="text-center">
          <p className="rounded-lg bg-red-50 px-3 py-2 text-xs text-red-700">
            This reset link is invalid or has expired.
          </p>
          <Link
            href="/forgot-password"
            className="mt-4 inline-block rounded-lg bg-lime px-5 py-2 text-xs font-medium text-ink hover:brightness-95"
          >
            Request a new link
          </Link>
        </div>
      ) : (
        <ResetPasswordForm token={token ?? ""} />
      )}
    </AuthLayout>
  );
}
