const steps = ["Select an industry", "Choose a course", "Enrol and pay", "Start learning"];

export default function LearningJourney() {
  return (
    <section className="bg-[#FBFCFA]">
      <div className="mx-auto max-w-[1400px] px-6 py-12 md:px-16">
        <h2 className="text-2xl font-semibold md:text-3xl">A clear path from discovery to completion.</h2>
        <ol className="mt-6 grid gap-4 text-base  sm:grid-cols-2 md:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s}>
              <span className="mr-3 text-muted">0{i + 1}</span>
              {s}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}