const steps = [
  ["Choose an industry", "Browse the industries and pick the one you work in or want to work in."],
  ["Review the course", "Read the overview, objectives, requirements, price and curriculum."],
  ["Complete payment", "Pay for the course and receive your payment confirmation."],
  ["Learn and track progress", "Open your course, learn module by module and complete the quizzes."],
];

export default function EnrolSteps() {
  return (
    <section id="how-it-works" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-2xl font-extrabold">Find your course. Enrol. Start learning.</h2>
      <div className="mt-8 grid gap-4 md:grid-cols-4">
        {steps.map(([t, d], i) => (
          <div key={t} className="rounded-xl border border-line bg-white p-5">
            <span className="text-sm font-bold text-muted">0{i + 1}</span>
            <h3 className="mt-2 font-bold">{t}</h3>
            <p className="mt-1 text-sm text-muted">{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
