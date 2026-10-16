import Link from "next/link";
import type { Course } from "@/types/course";

export default function CourseHero({ course }: { course: Course }) {
  const lessons = course.modules.reduce((n, m) => n + m.lessons, 0);
  const chips = [
    course.duration,
    course.format,
    `${course.modules.length} modules`,
    `${lessons} lessons`,
  ];

  return (
    <section className="bg-ink text-[#F5F2E9]">
      <div className="mx-auto grid max-w-[1400px] items-start gap-10 px-6 py-12 md:grid-cols-[1.4fr_1fr] md:gap-16 md:px-16 md:py-14">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-lime">
            {course.industry} / {course.title}
          </p>
          <h1 className="mt-5 text-4xl font-medium leading-[1.2] tracking-tight md:text-5xl">
            {course.title}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-snug text-[#F5F2E9]/80 md:text-lg">
            {course.summary}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {chips.map((c) => (
              <span key={c} className="rounded-full bg-white px-3 py-1 text-xs font-medium text-ink">
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* Price card */}
        <div className="rounded-2xl bg-[#F5F2E9] p-6 text-ink md:max-w-sm md:justify-self-end">
          <p className="text-xs font-semibold uppercase tracking-wider">Course price</p>
          <p className="mt-2 text-3xl font-medium tracking-tight">
            ₦{course.price.toLocaleString("en-NG")}
          </p>
          <p className="mt-2 text-sm text-muted">
            One-time payment. Access begins after successful payment confirmation.
          </p>
          <ul className="mt-4 space-y-1.5 text-sm">
            {["Full course access", "Videos, PDFs and templates", "Module quizzes and progress tracking"].map(
              (t) => (
                <li key={t} className="flex gap-2">
                  <span aria-hidden>✓</span>
                  {t}
                </li>
              )
            )}
          </ul>
          <Link
            href={`/checkout/${course.slug}`}
            className="mt-5 inline-block rounded-lg bg-lime px-5 py-2.5 text-sm font-medium text-ink hover:brightness-95"
          >
            Enrol now
          </Link>
        </div>
      </div>
    </section>
  );
}