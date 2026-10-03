import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-ink text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-white/70">Project management · Industry-focused</p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">Project management training built for your industry.</h1>
          <p className="mt-4 text-white/80">Find a course for the kind of projects you want to manage.</p>
          <Link href="/industries" className="mt-8 inline-block rounded-md bg-lime px-5 py-3 text-sm font-semibold text-ink hover:brightness-95">
            Browse industries →
          </Link>
        </div>
        <div className="rounded-2xl bg-lime p-6 text-ink">
          <p className="text-xs font-semibold uppercase tracking-wide">Technology</p>
          <p className="mt-2 text-xl font-bold">IT Project Management</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="rounded-lg bg-white/60 px-3 py-2">Module 1 · Foundations</li>
            <li className="rounded-lg bg-white/60 px-3 py-2">Module 2 · Planning</li>
            <li className="rounded-lg bg-white/60 px-3 py-2">Module 3 · Delivery &amp; Control</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
