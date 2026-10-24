import type { Metadata } from "next";
import AuthLayout from "@/components/auth/AuthLayout";
import VerifyEmailForm from "@/components/auth/VerifyEmailForm";
import { safeRedirect } from "@/lib/utils/auth";

export const metadata: Metadata = { title: "Verify email | Experien" };

type Props = { searchParams: Promise<{ email?: string; redirect?: string }> };

export default async function VerifyEmailPage({ searchParams }: Props) {
  const { email = "", redirect: redirectParam } = await searchParams;
  const redirectTo = safeRedirect(redirectParam);

  return (
    <AuthLayout
      centered
      chips={["Email verification", "Project skills · Industry context"]}
      heroTitle="Verify the email connected to your learner account."
      heroText="Enter the six-digit code sent to your email address."
      eyebrow="Account access"
      title="Confirm your email address"
      subtitle="Enter the verification code to activate your Experien learner account."
      cardTitle="Verify your email"
      cardText={
        email
          ? `We sent a verification code to ${email}. Enter it below to activate your learner account.`
          : "We sent a verification code to your email. Enter it below to activate your learner account."
      }
      aside={{
        title: "Verification keeps your account connected.",
        text: "A verified email helps protect access to enrolments, payments and course progress.",
        points: [
          "Confirm your learner account email.",
          "Receive account recovery messages.",
          "Keep your course access linked correctly.",
        ],
      }}
    >
      <VerifyEmailForm email={email} redirectTo={redirectTo} />
    </AuthLayout>
  );
}
