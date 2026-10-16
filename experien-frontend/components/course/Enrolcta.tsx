import Link from "next/link";

export default function EnrolCta({ title, slug }: { title: string; slug: string }) {
  return (
    <section className="bg-lime text-ink">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider">Ready to start?</p>
          <h2 className="mt-2 text-2xl font-medium tracking-tight md:text-3xl">Enrol in {title}</h2>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href={`/checkout/${slug}`}
            className="rounded-xl bg-ink px-5 py-3 text-sm font-medium text-[#F5F2E9] hover:bg-ink/90"
          >
            Continue to checkout
          </Link>
          <Link
            href={`/courses/${slug}/curriculum`}
            className="rounded-xl border border-line bg-white px-5 py-3 text-sm font-medium text-ink hover:bg-white/90"
          >
            View full curriculum
          </Link>
        </div>
      </div>
    </section>
  );
}