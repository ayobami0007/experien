export default function EnrolInfo({ requirements }: { requirements: string[] }) {
  const cards = [
    {
      label: "Requirements",
      title: requirements[0],
      text: requirements[1],
    },
    {
      label: "Learning materials",
      title: "Practical course resources",
      text: "Videos, PDF notes, images and templates support the module content.",
    },
    {
      label: "Access",
      title: "After payment confirmation",
      text: "Your course appears in the learner dashboard after a successful payment.",
    },
  ];

  return (
    <section className="bg-white text-ink">
      <div className="mx-auto max-w-[1400px] px-6 py-12 md:px-16 md:py-14">
        <p className="text-xs font-semibold uppercase tracking-wider">Before you enrol</p>
        <h2 className="mt-3 text-3xl font-medium tracking-tight md:text-4xl">
          Know what you need before you start
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {cards.map((c) => (
            <div key={c.label} className="rounded-xl border border-line p-5">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-[#7C9A2B]">
                {c.label}
              </p>
              <h3 className="mt-3 text-base font-medium">{c.title}</h3>
              <p className="mt-2 text-sm text-muted">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}