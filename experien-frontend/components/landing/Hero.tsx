// import Link from "next/link";

// export default function Hero() {
//   return (
//     <section className="bg-ink text-[#F5F2E9]">
//       <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-6 py-12 md:grid-cols-[1.15fr_1fr] md:gap-16 md:px-20 md:py-14">
//         {/* Left: text */}
//         <div>
//           <p className="text-xs font-medium uppercase tracking-wide text-lime">
//             Project management · Industry-focused
//           </p>

//           <h1 className="mt-5 text-[2.5rem] font-semibold leading-8  sm:text-5xl lg:text-[56px]">
//             Learn project management in the language of your industry.
//           </h1>

//           <p className="mt-7 max-w-xl text-sm font-light leading-snug md:text-lg">
//             Practical courses for technology, construction and manufacturing professionals who
//             want to plan and deliver projects with confidence.
//           </p>

//           <div className="mt-8 flex flex-wrap gap-3">
//             <Link
//               href="/industries"
//               className="rounded-lg bg-[#B5C35A] px-6 py-3.5 text-sm font-medium text-ink hover:brightness-95"
//             >
//               Explore industries
//             </Link>
//             <Link
//               href="/industries"
//               className="rounded-lg bg-white px-6 py-3.5 text-sm font-medium text-ink hover:bg-white/90"
//             >
//               View courses
//             </Link>
//           </div>
//         </div>

//         {/* Right: featured course card */}
//         <Link
//           href="/courses/it-project-management"
//           className="block rounded-[2rem] bg-[#F5F2E9] p-7 text-ink"
//         >
//           <p className="text-xs font-medium uppercase">Featured course</p>
//           <h2 className="mt-3 text-3xl font-bold tracking-tight">IT Project Management</h2>
//           <p className="mt-3 text-sm text-muted">6 weeks · Self-paced online · ₦75,000</p>

//           <div className="mt-4 flex flex-wrap gap-3 text-xs">
//             <span className="rounded-lg bg-[#EDF3EA] px-3 py-1.5">4 modules</span>
//             <span className="rounded-lg bg-[#EDF3EA] px-3 py-1.5">18 lessons</span>
//             <span className="rounded-lg bg-[#EDF3EA] px-3 py-1.5">4 quizzes</span>
//           </div>

//           <div className="mt-5 flex h-44 items-center justify-center rounded-2xl bg-[#EDF4EC] text-lg font-medium md:h-48">
//             Technology project delivery
//           </div>
//         </Link>
//       </div>
//     </section>
//   );
// }


import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-ink text-[#F5F2E9]">
      <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-6 py-12 md:grid-cols-[1.1fr_1fr] md:gap-16 md:px-16 md:py-14">
        {/* Left: text */}
        <div>
          <p className="max-w-[300px] text-sm font-semibold uppercase leading-snug tracking-wider text-lime">
            Project management · Industry-focused
          </p>

          <h1 className="mt-5 text-4xl font-medium leading-[1.2] tracking-tight md:text-5xl">
            Learn project management in the language of your industry.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-snug md:text-xl">
            Practical courses for technology, construction and manufacturing professionals who
            want to plan and deliver projects with confidence.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/industries" className="rounded-xl bg-lime px-5 py-3 text-sm font-medium text-ink hover:brightness-95">
              Explore industries
            </Link>
            <Link href="/industries" className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-ink hover:bg-white/90">
              View courses
            </Link>
          </div>
        </div>

        {/* Right: featured course card */}
        <Link href="/courses/it-project-management" className="block rounded-[2rem] bg-[#F5F2E9] p-7 text-ink">
          <p className="w-24 text-sm font-semibold uppercase leading-tight tracking-wider">Featured course</p>
          <h2 className="mt-3 text-3xl font-medium tracking-tight">IT Project Management</h2>
          <p className="mt-3 text-base text-muted">6 weeks · Self-paced online · ₦75,000</p>

          <div className="mt-4 flex flex-wrap gap-3 text-xs">
            {["4 modules", "18 lessons", "4 quizzes"].map((t) => (
              <span key={t} className="rounded-full bg-[#EAF1E8] px-4 py-1.5">{t}</span>
            ))}
          </div>

          {/* App preview illustration */}
          <div className="mt-5 flex h-48 overflow-hidden rounded-2xl bg-[#EDF4EC]">
            {/* Sidebar */}
            <div className="flex w-[84px] flex-col items-center gap-5 bg-ink py-7">
              <span className="h-3 w-3 rounded-full bg-lime" />
              <span className="h-3 w-3 rounded-full bg-white/50" />
              <span className="h-3 w-3 rounded-full bg-white/50" />
              <span className="h-3 w-3 rounded-full bg-white/50" />
            </div>

            {/* Main area */}
            <div className="flex-1 space-y-3 p-4">
              <div>
                <div className="h-3 w-40 rounded-full bg-ink" />
                <div className="mt-2 h-2 w-24 rounded-full bg-[#D5DDD3]" />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="rounded-xl border border-line bg-white p-3">
                  <div className="h-2 w-8 rounded-full bg-[#D5DDD3]" />
                  <div className="mt-2 h-2.5 w-10 rounded-full bg-ink" />
                  <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-[#E4E9E2]">
                    <div className="h-full w-2/3 rounded-full bg-lime" />
                  </div>
                </div>
                <div className="rounded-xl border border-line bg-white p-3">
                  <div className="h-2 w-8 rounded-full bg-[#D5DDD3]" />
                  <div className="mt-2 h-2.5 w-9 rounded-full bg-ink" />
                </div>
                <div className="rounded-xl border border-line bg-white p-3">
                  <div className="h-2 w-8 rounded-full bg-[#D5DDD3]" />
                  <div className="mt-2 h-2.5 w-5 rounded-full bg-ink" />
                </div>
              </div>

              <div className="flex items-center justify-between rounded-xl border border-line bg-white px-3 py-2.5">
                <div>
                  <div className="h-2.5 w-28 rounded-full bg-ink" />
                  <div className="mt-1.5 h-2 w-16 rounded-full bg-[#D5DDD3]" />
                </div>
                <div className="flex">
                  <span className="h-5 w-5 rounded-full bg-ink" />
                  <span className="-ml-1.5 h-5 w-5 rounded-full bg-lime" />
                  <span className="-ml-1.5 h-5 w-5 rounded-full bg-ink" />
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}