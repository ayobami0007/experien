import Link from "next/link";
import { notFound } from "next/navigation";
import ProgressBadge from "@/components/dashboard/ProgressBar";
import { getCourse, mockEnrolments } from "@/lib/mock-data";

export default function LearnCoursePage({ params }: { params: { course: string } }) {
  const course = getCourse(params.course);
  if (!course) notFound();
  const enrolment = mockEnrolments.find((e) => e.courseId === course.id);

  return (
    <>
      <h1 className="mb-6 text-2xl font-bold">{course.title}</h1>
      <ol className="space-y-3">
        {course.modules.map((m) => (
          <li key={m.id} className="flex items-center justify-between rounded border p-4">
            <Link href={`/learn/${course.slug}/${m.id}`} className="font-medium hover:text-brand">{m.title}</Link>
            <ProgressBadge status={enrolment?.moduleProgress[m.id] ?? "not_started"} />
          </li>
        ))}
      </ol>
    </>
  );
}
