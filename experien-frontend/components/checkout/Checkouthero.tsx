import type { Course } from "@/types/course";

const steps = ["Details", "Payment", "Access"];

export default function CheckoutHero({ course, current = 1 }: { course: Course; current?: number }) {
  return (
    <section className="bg-[#F6F8F3] text-ink">
      <div className="mx-auto max-w-[1400px] px-6 py-10 md:px-16 md:py-12">
        <p className="text-xs font-semibold uppercase tracking-wider">{course.title} / Checkout</p>
        <h1 className="mt-4 text-3xl font-medium tracking-tight md:text-5xl">Complete your enrolment</h1>
        <p className="mt-3 max-w-2xl text-sm text-muted md:text-base">
          Confirm your learner details, review the course and continue to secure payment.
        </p>
        <ol className="mt-5 flex flex-wrap gap-2">
          {steps.map((s, i) => (
            <li
              key={s}
              aria-current={i + 1 === current ? "step" : undefined}
              className={`rounded-full px-3 py-1 text-xs font-medium ${
                i + 1 === current ? "bg-lime" : "bg-[#EAF1E8]"
              }`}
            >
              {i + 1} {s}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}