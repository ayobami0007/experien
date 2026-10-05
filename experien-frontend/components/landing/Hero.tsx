import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-ink text-[#F5F2E9]">
      <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-6 py-12 md:grid-cols-[1.15fr_1fr] md:gap-16 md:px-20 md:py-14">
        {/* Left: text */}
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-lime">
            Project management · Industry-focused
          </p>

          <h1 className="mt-5 text-[2.5rem] font-semibold leading-8  sm:text-5xl lg:text-[56px]">
            Learn project management in the language of your industry.
          </h1>

          <p className="mt-7 max-w-xl text-sm font-light leading-snug md:text-lg">
            Practical courses for technology, construction and manufacturing professionals who
            want to plan and deliver projects with confidence.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/industries"
              className="rounded-lg bg-[#B5C35A] px-6 py-3.5 text-sm font-medium text-ink hover:brightness-95"
            >
              Explore industries
            </Link>
            <Link
              href="/industries"
              className="rounded-lg bg-white px-6 py-3.5 text-sm font-medium text-ink hover:bg-white/90"
            >
              View courses
            </Link>
          </div>
        </div>

        {/* Right: featured course card */}
        <Link
          href="/courses/it-project-management"
          className="block rounded-[2rem] bg-[#F5F2E9] p-7 text-ink"
        >
          <p className="text-xs font-medium uppercase">Featured course</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight">IT Project Management</h2>
          <p className="mt-3 text-sm text-muted">6 weeks · Self-paced online · ₦75,000</p>

          <div className="mt-4 flex flex-wrap gap-3 text-xs">
            <span className="rounded-lg bg-[#EDF3EA] px-3 py-1.5">4 modules</span>
            <span className="rounded-lg bg-[#EDF3EA] px-3 py-1.5">18 lessons</span>
            <span className="rounded-lg bg-[#EDF3EA] px-3 py-1.5">4 quizzes</span>
          </div>

          <div className="mt-5 flex h-44 items-center justify-center rounded-2xl bg-[#EDF4EC] text-lg font-medium md:h-48">
            Technology project delivery
          </div>
        </Link>
      </div>
    </section>
  );
}