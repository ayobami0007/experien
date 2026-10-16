import type { Course } from "@/types/Course";

export default function CourseOverview({ course }: { course: Course }) {
  const glance = [
    ["Industry", course.industry],
    ["Course path", course.title],
    ["Format", course.format],
    ["Duration", course.duration],
    ["Modules", String(course.modules.length)],
    ["Quizzes", `${course.modules.length} module checks`],
  ];

  return (
    <section className="bg-white text-ink">
      <div className="mx-auto max-w-[1400px] px-6 py-12 md:px-16 md:py-14">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#7C9A2B]">Course overview</p>
        <h2 className="mt-2 text-3xl font-medium tracking-tight md:text-4xl">
          What this course helps you do
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-muted md:text-base">{course.overview}</p>

        <div className="mt-8 grid items-start gap-6 md:grid-cols-[1.6fr_1fr]">
          <div className="rounded-2xl bg-[#EAF1E8] p-6">
            <h3 className="text-lg font-medium">What you&apos;ll learn</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {course.objectives.map((o) => (
                <li key={o} className="flex gap-2">
                  <span aria-hidden>✓</span>
                  {o}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-line bg-white p-6">
            <h3 className="text-lg font-medium">At a glance</h3>
            <dl className="mt-4 divide-y divide-line text-sm">
              {glance.map(([label, value]) => (
                <div key={label} className="flex justify-between gap-4 py-2.5 first:pt-0 last:pb-0">
                  <dt className="text-muted">{label}</dt>
                  <dd className="text-right">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}