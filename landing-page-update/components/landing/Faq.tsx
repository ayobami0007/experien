"use client";

import { useState } from "react";

const faqs = [
  ["How do I find a course for my industry?", "Start by choosing an industry, then browse the project management courses available within it and review the curriculum."],
  ["When can I access a purchased course?", "As soon as your payment is confirmed, the course opens in your learning environment."],
  ["What learning materials are included?", "Depending on the course: training videos, documents, images, templates and module quizzes."],
  ["Can I see how far I have progressed?", "Yes. Your learner dashboard and course pages show your progress through each module."],
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="text-2xl font-extrabold">Good to know before you enrol</h2>
      <div className="mt-6 space-y-3">
        {faqs.map(([q, a], i) => (
          <div key={q} className="rounded-xl border border-line bg-white">
            <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-semibold">
              {q}<span>{open === i ? "−" : "+"}</span>
            </button>
            {open === i && <p className="px-5 pb-4 text-sm text-muted">{a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
