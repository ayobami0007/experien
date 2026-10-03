// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { courses, industries } from "@/lib/mock-data";
// import { formatPrice } from "@/lib/utils/format";

// export default function CourseTabs() {
//   const [active, setActive] = useState(industries[0].id);
//   const list = courses.filter((c) => c.industryId === active);

//   return (
//     <section className="mx-auto max-w-6xl px-6 py-16">
//       <p className="text-xs font-semibold uppercase tracking-widest text-muted">Explore training</p>
//       <h2 className="mt-1 text-2xl font-extrabold">Project management training, organised by industry</h2>
//       <p className="mt-1 text-sm text-muted">Choose the context you work in, then review the course overview and curriculum before enrolling.</p>

//       <div className="mt-6 flex flex-wrap gap-2">
//         {industries.map((i) => (
//           <button
//             key={i.id}
//             onClick={() => setActive(i.id)}
//             className={`rounded-full border px-4 py-2 text-sm font-medium ${active === i.id ? "border-ink bg-ink text-white" : "border-line bg-white"}`}
//           >
//             {i.name}
//           </button>
//         ))}
//       </div>

//       <div className="mt-6 grid gap-4 md:grid-cols-2">
//         {list.map((c) => (
//           <div key={c.id} className="rounded-xl border border-line bg-white p-6">
//             <h3 className="text-lg font-bold">{c.title}</h3>
//             <p className="mt-2 text-sm text-muted">{c.overview}</p>
//             <p className="mt-3 text-xs text-muted">{c.duration} · {c.modules.length} modules · {formatPrice(c.price)}</p>
//             <Link href={`/courses/${c.slug}`} className="mt-4 inline-block rounded-md bg-lime px-3 py-2 text-sm font-semibold">
//               View course details and curriculum
//             </Link>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


import Link from "next/link";
import { courses, industries } from "@/lib/mock-data";

// Text shown on each card (taken from the Figma design)
const cardText: Record<string, { tag: string; description: string; structure: string }> = {
  technology: {
    tag: "Technology · IT",
    description: "Plan and deliver technology projects with an industry-focused course structure.",
    structure: "IT projects • Course overview • Modules",
  },
  construction: {
    tag: "Construction",
    description: "Explore planning, coordination and delivery in construction project environments.",
    structure: "Construction projects • Curriculum • Modules",
  },
  manufacturing: {
    tag: "Manufacturing",
    description: "Explore project work in manufacturing processes and production settings.",
    structure: "Manufacturing projects • Curriculum • Modules",
  },
};

export default function CourseTabs() {
  return (
    <section className="bg-white">
      <div  className="mx-auto max-w-6xl px-6 py-16" >
      <p className="text-[10px] font-semibold uppercase tracking-widest text-muted">
        Explore training
      </p>
      <h2 className="mt-2 text-2xl font-extrabold md:text-3xl">
        Project management training, organised by industry
      </h2>
      <p className="mt-2 text-sm text-muted">
        Choose the context you want to work in, then review the course overview and curriculum
        before enrolling.
      </p>

      {/* Outer panel */}
      <div className="mt-8 rounded-2xl border border-line bg-white p-4 shadow-sm">
        <div className="grid gap-4 md:grid-cols-3">
          {industries.map((industry, index) => {
            const course = courses.find((c) => c.industryId === industry.id);
            const text = cardText[industry.id];
            if (!course || !text) return null;

            return (
              <div key={industry.id} className="space-y-3">
                {/* Column header with placeholder bars */}
                <div className="rounded-xl border border-line bg-paper p-3">
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-muted">
                    {industry.name} {index === 0 && "↑"}
                  </p>
                  <div className="mt-3 flex gap-2">
                    <span className="h-2 w-16 rounded-full bg-line" />
                    <span className="h-2 w-10 rounded-full bg-line" />
                  </div>
                </div>

                {/* Course card */}
                <div className="rounded-xl border border-line bg-white p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-muted">
                    {text.tag}
                  </p>
                  <h3 className="mt-3 text-base font-bold">{course.title}</h3>
                  <p className="mt-1 text-xs text-muted">{text.description}</p>

                  <p className="mt-4 text-[10px] font-semibold uppercase tracking-wide text-muted">
                    Course structure
                  </p>
                  <p className="mt-1 text-xs">{text.structure}</p>

                  <Link
                    href={`/courses/${course.slug}`}
                    className="mt-4 block rounded-md bg-lime px-3 py-2 text-xs font-semibold text-ink hover:brightness-95"
                  >
                    View course details and curriculum →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Link
        href="/industries"
        className="mt-6 inline-block rounded-md bg-lime px-4 py-2 text-sm font-semibold text-ink hover:brightness-95"
      >
        Explore industries →
      </Link>
      </div>
    </section>
  );
}