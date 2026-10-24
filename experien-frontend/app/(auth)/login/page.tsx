import type { Metadata } from "next";
import AuthLayout from "@/components/auth/AuthLayout";
import LoginForm from "@/components/auth/LoginForm";
import { safeRedirect } from "@/lib/utils/auth";

export const metadata: Metadata = { title: "Log in | Experien" };

type Props = { searchParams: Promise<{ redirect?: string }> };

export default async function LoginPage({ searchParams }: Props) {
  const { redirect: redirectParam } = await searchParams;
  const redirectTo = safeRedirect(redirectParam);

  return (
    <AuthLayout
      chips={["Secure sign in", "Learner account", "Progress saved"]}
      heroTitle="Continue your Experien learning journey."
      heroText="Sign in to your account to continue your active courses, learning materials, quizzes and progress."
      eyebrow="Account access"
      title="Welcome back"
      subtitle="Log in to continue learning and track your course progress."
      cardTitle="Log in to Experien"
      cardText="Use the email address and password connected to your learner account."
      aside={{
        title: "Pick up from where you stopped.",
        text: "Your learner dashboard keeps your current course and activity organised.",
        points: [
          "Continue your active courses",
          "Open course materials and resources",
          "Review progress and results",
        ],
      }}
    >
      <LoginForm redirectTo={redirectTo} />
    </AuthLayout>
  );
}
