import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-ink text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-white/70">
            Project management · Industry-focused
          </p>
          <h1 className="mt-4 text-2xl font-bold leading-tight md:text-3xl">
            Project management training built for your industry.
          </h1>
          <p className="mt-4 text-white/80">
            Find a course for the kind of projects you want to manage.
          </p>
          <Link
            href="/industries"
            className="mt-8 inline-block rounded-md bg-lime px-5 py-3 text-sm font-semibold text-ink hover:brightness-95"
          >
            Browse industries →
          </Link>
        </div>

        {/* Gradient preview card */}
        <div className="min-h-[220px] rounded-3xl bg-gradient-to-r from-ink to-lime p-5 md:min-h-[300px]">
          <p className="text-xs font-semibold text-white">Experien</p>
          <Link
            href="/courses/it-project-management"
            className="mt-2 block text-xs text-white/90 hover:underline"
          >
            Review the full course here (internal preview) →
          </Link>
        </div>
      </div>
    </section>
  );
}