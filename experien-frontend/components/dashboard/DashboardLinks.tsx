import Link from "next/link";

export default function DashboardLinks({
  slug,
  moduleCount,
  pct,
}: {
  slug: string;
  moduleCount: number;
  pct: number;
}) {
  const card = "block rounded-xl border border-line bg-white p-4";
  const eyebrow = "text-[10px] font-semibold uppercase tracking-wider text-[#7C9A2B]";

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Link href={`/courses/${slug}/curriculum`} className={card}>
        <p className={eyebrow}>Curriculum</p>
        <p className="mt-2 text-base font-medium">Course modules</p>
        <p className="mt-1 text-xs text-muted">Review all {moduleCount} modules and lesson sequence.</p>
        <p className="mt-2 text-[11px] text-muted">{moduleCount} modules</p>
      </Link>

      <Link href={`/learn/${slug}`} className={card}>
        <p className={eyebrow}>Resources</p>
        <p className="mt-2 text-base font-medium">Course files</p>
        <p className="mt-1 text-xs text-muted">
          Open PDFs, notes, images and practical templates.
        </p>
        <p className="mt-2 text-[11px] text-muted">Learning materials</p>
      </Link>

      <div id="progress-overview" className={card}>
        <p className={eyebrow}>Activity</p>
        <p className="mt-2 text-base font-medium">Progress overview</p>
        <p className="mt-1 text-xs text-muted">
          See completed lessons, documents and quizzes.
        </p>
        <p className="mt-2 text-[11px] text-muted">{pct}% complete</p>
      </div>
    </div>
  );
}
