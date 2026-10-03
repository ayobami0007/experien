const steps = ["Select an industry", "Choose a course", "Enrol and pay", "Start learning"];

export default function LearningJourney() {
  return (
    <section className="bg-lime/20">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-xl font-extrabold">Your learning journey</h2>
        <ol className="mt-6 grid gap-4 text-sm font-medium md:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s}><span className="mr-2 text-muted">0{i + 1}</span>{s}</li>
          ))}
        </ol>
      </div>
    </section>
  );
}
