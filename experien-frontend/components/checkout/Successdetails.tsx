import Link from "next/link";
import type { Course } from "@/types/Course";

const naira = (n: number) => `₦${n.toLocaleString("en-NG")}`;

export default function SuccessDetails({ course, orderRef }: { course: Course; orderRef: string }) {
  const rows = [
    ["Course price", naira(course.price)],
    ["Payment status", "Confirmed"],
    ["Course access", "Active"],
    ["Order reference", orderRef],
  ];

  return (
    <div className="grid items-start gap-6 lg:grid-cols-[1.9fr_1fr]">
      <div className="rounded-2xl border border-line bg-white p-6">
        <p className="text-[11px] font-semibold uppercase tracking-wider">Enrolment complete</p>
        <h2 className="mt-3 text-2xl font-medium tracking-tight md:text-3xl">{course.title}</h2>
        <p className="mt-2 text-xs text-muted">
          Payment has been confirmed and your learner access has been activated.
        </p>

        <dl className="mt-5 space-y-3 text-xs">
          {rows.map(([label, value]) => (
            <div key={label} className="flex justify-between gap-4">
              <dt className="text-muted">{label}</dt>
              <dd className="text-right">{value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/dashboard"
            className="rounded-lg bg-ink px-4 py-2 text-xs font-medium text-[#F5F2E9] hover:bg-ink/90"
          >
            Go to my learning
          </Link>
          <Link
            href="/dashboard"
            className="rounded-lg border border-ink px-4 py-2 text-xs font-medium hover:bg-[#F6F8F3]"
          >
            View payment record
          </Link>
        </div>
      </div>

      <aside className="rounded-2xl bg-[#F5F2E9] p-6">
        <p className="text-[11px] font-semibold uppercase tracking-wider">What happens next</p>
        <h2 className="mt-3 text-xl font-medium tracking-tight">Start learning when you are ready.</h2>
        <ol className="mt-4 space-y-2 text-xs">
          <li>1. Open My learning</li>
          <li>2. Begin Module 01</li>
          <li>3. Use course PDFs, templates and quizzes</li>
        </ol>
        <p className="mt-4 text-[11px] text-muted">
          Course materials are available after confirmed payment only.
        </p>
      </aside>
    </div>
  );
}