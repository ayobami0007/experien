import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getCourseBySlug } from "@/lib/mock/Courses";
import { enrolments } from "@/lib/mock/learner";
import LearningEnvironment from "@/components/learning/LearningEnvironment";

type Props = { params: Promise<{ course: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { course: slug } = await params;
  const course = getCourseBySlug(slug);
  return { title: course ? `Learn: ${course.title} | Experien` : "Course not found" };
}

export default async function LearnPage({ params }: Props) {
  const { course: slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();

  // TODO: require login + an active enrolment for this course (otherwise redirect to /checkout/[slug]).
  const enrolment = enrolments.find((e) => e.courseSlug === slug);

  return <LearningEnvironment course={course} initialCompleted={enrolment?.completedLessonIds ?? []} />;
}
