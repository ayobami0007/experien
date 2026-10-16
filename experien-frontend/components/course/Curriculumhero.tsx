import type { Course } from "@/types/Course";

export default function CurriculumHero({ course }: { course: Course }) {
  const lessons = course.modules.reduce((n, m) => n + m.lessons, 0);
  const chips = [
    `${course.modules.length} modules`,
    `${lessons} lessons`,
    `${course.modules.length} quizzes`,
    course.duration,
  ];

  return (
    <section className="bg-[#F6F8F3] text-ink">
      <div className="mx-auto max-w-[1400px] px-6 py-10 md:px-16 md:py-12">
        <p className="text-xs font-semibold uppercase tracking-wider">
          {course.industry} / {course.title} / Curriculum
        </p>
        <h1 className="mt-4 text-3xl font-medium tracking-tight md:text-5xl">
          Explore the full course curriculum
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-muted md:text-base">
          See every module, lesson, resource and knowledge check before you enrol.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {chips.map((c) => (
            <span key={c} className="rounded-full bg-[#EAF1E8] px-3 py-1 text-xs font-medium">
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}