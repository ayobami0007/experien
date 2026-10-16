import Link from "next/link";

export default function CurriculumCta({ slug }: { slug: string }) {
  return (
    <section className="bg-lime text-ink">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-5 px-6 py-8 md:flex-row md:items-center md:justify-between md:px-16">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wider">Ready to learn?</p>
          <h2 className="mt-2 text-xl font-medium tracking-tight md:text-2xl">
            Enrol and unlock the full learning experience
          </h2>
        </div>
        <Link
          href={`/checkout/${slug}`}
          className="self-start rounded-xl bg-ink px-5 py-2.5 text-sm font-medium text-[#F5F2E9] hover:bg-ink/90 md:self-auto"
        >
          Enrol in this course
        </Link>
      </div>
    </section>
  );
}