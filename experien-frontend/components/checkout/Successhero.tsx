import type { Course } from "@/types/course";

export default function SuccessHero({ course, paymentRef }: { course: Course; paymentRef: string }) {
  const chips = ["✓ Payment confirmed", "Access active", `Reference · ${paymentRef}`];

  return (
    <section className="bg-white text-ink">
      <div className="mx-auto max-w-[1400px] px-6 py-10 md:px-16 md:py-12">
        <p className="text-[11px] font-semibold uppercase tracking-wider">Payment status</p>
        <h1 className="mt-3 text-3xl font-medium tracking-tight md:text-5xl">
          Your payment is confirmed.
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-muted md:text-base">
          Your enrolment in {course.title} is active and the course is ready in My learning.
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