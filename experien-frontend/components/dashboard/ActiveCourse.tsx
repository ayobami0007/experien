import Link from "next/link";
import type { Course, ModuleContent } from "@/types/Course";
import { type LessonRef, lessonDetail, lessonType, pad } from "@/lib/utils/learning";

type Props = {
  course: Course;
  pct: number;
  moduleIndex: number;
  next?: LessonRef;
  resource?: ModuleContent;
  quiz?: ModuleContent;
};

export default function ActiveCourse({ course, pct, moduleIndex, next, resource, quiz }: Props) {
  const mod = course.modules[moduleIndex];

  return (
    <div className="grid items-start gap-6 lg:grid-cols-[2fr_1fr]">
      {/* Active course */}
      <div className="rounded-2xl border border-line bg-white p-6">
        <p className="text-[11px] font-semibold uppercase tracking-wider">{course.industry}</p>
        <h2 className="mt-3 text-2xl font-medium tracking-tight md:text-3xl">{course.title}</h2>
        <p className="mt-1 text-xs text-muted">
          Module {pad(moduleIndex + 1)} · {mod.title}
        </p>

        <p className="mt-4 text-[11px] text-muted">Course progress · {pct}%</p>
        <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-[#E4E9E2]">
          <div className="h-full rounded-full bg-lime" style={{ width: `${pct}%` }} />
        </div>

        {next ? (
          <div className="mt-5 rounded-lg bg-[#F5F2E9] p-4">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-muted">Next lesson</p>
            <p className="mt-2 text-sm font-medium">
              {next.moduleIndex + 1}.{next.lessonIndex + 1} · {next.title}
            </p>
            <p className="mt-1 text-[11px] text-muted">
              {lessonType(next.meta)}
              {lessonDetail(next.meta) && ` · ${lessonDetail(next.meta)}`}
            </p>
          </div>
        ) : (
          <p className="mt-5 rounded-lg bg-[#F5F2E9] p-4 text-sm">
            You have completed every lesson in this course.
          </p>
        )}

        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href={`/learn/${course.slug}`}
            className="rounded-lg bg-ink px-4 py-2 text-xs font-medium text-[#F5F2E9] hover:bg-ink/90"
          >
            Continue learning
          </Link>
          <Link
            href="#progress-overview"
            className="rounded-lg border border-ink px-4 py-2 text-xs font-medium hover:bg-[#F6F8F3]"
          >
            View progress
          </Link>
        </div>
      </div>

      {/* Side cards */}
      <div className="space-y-4">
        {resource && (
          <div className="rounded-xl border border-line bg-white p-4">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-[#7C9A2B]">Next up</p>
            <p className="mt-2 text-base font-medium">{resource.title}</p>
            <p className="mt-1 text-xs text-muted">
              {lessonType(resource.meta) === "Template"
                ? `Open the practical template linked to Module ${pad(moduleIndex + 1)}.`
                : `Read the supporting notes linked to Module ${pad(moduleIndex + 1)}.`}
            </p>
            <p className="mt-2 text-[11px] text-muted">
              {lessonType(resource.meta) === "Template" ? "Document resource" : "PDF resource"}
            </p>
          </div>
        )}
        {quiz && (
          <div className="rounded-xl border border-line bg-white p-4">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-[#7C9A2B]">
              Knowledge check
            </p>
            <p className="mt-2 text-base font-medium">Module {pad(moduleIndex + 1)} quiz</p>
            <p className="mt-1 text-xs text-muted">
              Complete the quiz after the module lessons and resources.
            </p>
            <p className="mt-2 text-[11px] text-muted">{lessonDetail(quiz.meta)}</p>
          </div>
        )}
      </div>
    </div>
  );
}
