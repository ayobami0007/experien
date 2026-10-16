"use client";

import { useState } from "react";
import Link from "next/link";
import type { Course } from "@/types/Course";

const pad = (n: number) => String(n).padStart(2, "0");

export default function CurriculumExplorer({ course }: { course: Course }) {
  const [active, setActive] = useState(0);
  const current = course.modules[active];

  return (
    <section className="bg-[#EAF1E8] text-ink">
      <div className="mx-auto grid max-w-[1400px] items-start gap-6 px-6 py-10 md:px-16 md:py-12 lg:grid-cols-[260px_1fr]">
        {/* Sidebar */}
        <aside className="rounded-xl border border-line bg-white p-4 lg:sticky lg:top-6">
          <p className="text-[11px] font-semibold uppercase tracking-wider">Course outline</p>
          <p className="mt-2 text-base font-medium">{course.title}</p>

          <ul className="mt-4 space-y-2">
            {course.modules.map((m, i) => (
              <li key={m.id}>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-current={i === active}
                  className={`w-full rounded-lg border px-3 py-2.5 text-left ${
                    i === active ? "border-line bg-[#EAF1E8]" : "border-transparent hover:bg-[#F6F8F3]"
                  }`}
                >
                  <span className="text-sm font-medium">
                    {pad(i + 1)} {m.shortTitle}
                  </span>
                  <span className="mt-0.5 block text-[11px] text-muted">{m.lessons} lessons</span>
                </button>
              </li>
            ))}
          </ul>

          <Link
            href={`/courses/${course.slug}`}
            className="mt-4 inline-block rounded-lg border border-line px-3 py-1.5 text-xs font-medium hover:bg-[#F6F8F3]"
          >
            Back to course details
          </Link>
        </aside>

        {/* Main */}
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wider text-muted">
            Module {pad(active + 1)} · Expanded
          </p>
          <h2 className="mt-2 text-2xl font-medium tracking-tight md:text-3xl">{current.title}</h2>
          <p className="mt-3 max-w-2xl text-sm text-muted">{current.summary}</p>

          <div className="mt-5 rounded-xl border border-line bg-white p-4">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-[#7C9A2B]">
              Module contents
            </p>
            <ul className="mt-3 space-y-2">
              {current.contents.map((c, i) => (
                <li
                  key={c.title}
                  className="flex items-center gap-3 rounded-lg bg-[#F1F6EE] px-3 py-2.5 text-sm"
                >
                  <span className="rounded-full bg-lime/70 px-2 py-0.5 text-[10px] font-semibold">
                    {active + 1}.{i + 1}
                  </span>
                  <span className="flex-1">{c.title}</span>
                  <span className="text-xs text-muted">{c.meta}</span>
                </li>
              ))}
            </ul>
          </div>

          <ul className="mt-3 space-y-3">
            {course.modules.map((m, i) =>
              i === active ? null : (
                <li key={m.id}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    className="flex w-full items-center gap-3 rounded-xl border border-line bg-white px-4 py-4 text-left"
                  >
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-lime/70 text-[10px] font-semibold">
                      {pad(i + 1)}
                    </span>
                    <span className="flex-1 text-sm font-medium">{m.title}</span>
                    <span className="text-xs text-muted">{m.lessons} lessons</span>
                  </button>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}