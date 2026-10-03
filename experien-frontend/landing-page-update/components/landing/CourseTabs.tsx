"use client";

import Link from "next/link";
import { useState } from "react";
import { courses, industries } from "@/lib/mock-data";
import { formatPrice } from "@/lib/utils/format";

export default function CourseTabs() {
  const [active, setActive] = useState(industries[0].id);
  const list = courses.filter((c) => c.industryId === active);

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <p className="text-xs font-semibold uppercase tracking-widest text-muted">Explore training</p>
      <h2 className="mt-1 text-2xl font-extrabold">Project management training, organised by industry</h2>
      <p className="mt-1 text-sm text-muted">Choose the context you work in, then review the course overview and curriculum before enrolling.</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {industries.map((i) => (
          <button
            key={i.id}
            onClick={() => setActive(i.id)}
            className={`rounded-full border px-4 py-2 text-sm font-medium ${active === i.id ? "border-ink bg-ink text-white" : "border-line bg-white"}`}
          >
            {i.name}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {list.map((c) => (
          <div key={c.id} className="rounded-xl border border-line bg-white p-6">
            <h3 className="text-lg font-bold">{c.title}</h3>
            <p className="mt-2 text-sm text-muted">{c.overview}</p>
            <p className="mt-3 text-xs text-muted">{c.duration} · {c.modules.length} modules · {formatPrice(c.price)}</p>
            <Link href={`/courses/${c.slug}`} className="mt-4 inline-block rounded-md bg-lime px-3 py-2 text-sm font-semibold">
              View course details and curriculum
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
