import type { Metadata } from "next";
import AuthLayout from "@/components/auth/AuthLayout";
import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";

export const metadata: Metadata = { title: "Forgot password | Experien" };

export default function ForgotPasswordPage() {
  return (
    <AuthLayout
      chips={["Account recovery", "Project skills · Industry context"]}
      heroTitle="Recover access to your learner account."
      heroText="Enter the email linked to your Experien account and we will send a reset link."
      eyebrow="Account access"
      title="Reset your account access"
      subtitle="Request a password-reset link for your Experien learner account."
      cardTitle="Forgot your password?"
      cardText="Enter your account email. If it matches an Experien learner account, you will receive a reset link."
      aside={{
        title: "Simple account recovery.",
        text: "Reset access without affecting your enrolments, course activity or progress.",
        points: [
          "Your course enrolment stays unchanged.",
          "Your learning progress is preserved.",
          "Use the same email linked to your account.",
        ],
      }}
    >
      <ForgotPasswordForm />
    </AuthLayout>
  );
}
