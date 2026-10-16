const materials = [
  {
    label: "Video",
    title: "Guided video lessons",
    text: "Short lessons introduce each topic and demonstrate practical project scenarios.",
    foot: "Lesson detail",
  },
  {
    label: "PDF",
    title: "Course notes and reading",
    text: "Downloadable notes reinforce key concepts from each module.",
    foot: "PDF resources",
  },
  {
    label: "Templates",
    title: "Reusable project templates",
    text: "Use scope, schedule and risk templates during the learning journey.",
    foot: "Practical resources",
  },
];

export default function LearningMaterials() {
  return (
    <section className="bg-white text-ink">
      <div className="mx-auto max-w-[1400px] px-6 py-12 md:px-16 md:py-14">
        <p className="text-xs font-semibold uppercase tracking-wider">Learning materials</p>
        <h2 className="mt-3 text-3xl font-medium tracking-tight md:text-4xl">
          What you&apos;ll work with during the course
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {materials.map((m) => (
            <div key={m.title} className="rounded-xl border border-line p-5">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-[#7C9A2B]">
                {m.label}
              </p>
              <h3 className="mt-3 text-base font-medium">{m.title}</h3>
              <p className="mt-2 text-sm text-muted">{m.text}</p>
              <p className="mt-4 text-xs text-muted">{m.foot}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}