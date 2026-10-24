import type { Metadata } from "next";
import AuthLayout from "@/components/auth/AuthLayout";
import RegisterForm from "@/components/auth/RegisterForm";
import { safeRedirect } from "@/lib/utils/auth";

export const metadata: Metadata = { title: "Create account | Experien" };

type Props = { searchParams: Promise<{ redirect?: string }> };

export default async function RegisterPage({ searchParams }: Props) {
  const { redirect: redirectParam } = await searchParams;
  const redirectTo = safeRedirect(redirectParam);

  return (
    <AuthLayout
      chips={["Create your account", "Industry-focused courses", "Progress tracking"]}
      heroTitle="Build practical project-management skills in the industry you want to work in."
      heroText="Create one account for course enrolment, learning materials, quizzes and progress tracking."
      eyebrow="Account access"
      title="Create your Experien account"
      subtitle="Set up your learner profile to access your courses and start learning."
      cardTitle="Create your Experien account"
      cardText="Set up your learner profile so you can enrol, access course materials and track progress."
      aside={{
        title: "One account for your complete learning journey.",
        text: "Experien keeps course access, module info, quizzes and progress together in one place.",
        points: [
          "Enrol in industry-focused courses",
          "Open course materials after enrolment",
          "Track your quiz results and progress",
        ],
      }}
    >
      <RegisterForm redirectTo={redirectTo} />
    </AuthLayout>
  );
}
