import Link from "next/link";
import ProgressBadge from "@/components/dashboard/ProgressBar";
import { courses, mockEnrolments } from "@/lib/mock-data";

export default function DashboardPage() {
  return (
    <>
      <h1 className="mb-6 text-2xl font-bold">My Learning</h1>
      <div className="space-y-4">
        {mockEnrolments.map((e) => {
          const course = courses.find((c) => c.id === e.courseId);
          if (!course) return null;
          return (
            <div key={e.courseId} className="flex items-center justify-between rounded-lg border p-4">
              <div>
                <p className="font-semibold">{course.title}</p>
                <div className="mt-1"><ProgressBadge status={e.status} /></div>
              </div>
              <Link href={`/learn/${course.slug}`} className="text-sm font-medium text-brand">Continue →</Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
