const steps = [
  ["Choose an industry", "Browse Technology, Construction or Manufacturing and select the field you want to explore."],
  ["Review the course", "Check the course overview, objectives, modules, requirements and pricing."],
  ["Complete payment", "Enrol in the selected course and gain access once your payment is confirmed."],
  ["Learn and track progress", "Watch lessons, use materials, complete quizzes and follow your module status."],
];

export default function EnrolSteps() {
  return (
    <section id="how-it-works" className="bg-white">
      <div className="mx-auto max-w-[1400px] px-6 py-14 md:px-16">
          <h2 className="text-xs  ">
         YOUR PATH FROM DISCOVERY TO LEARNING
        </h2>
        <h2 className="text-3xl font-medium tracking-tight md:text-4xl mt-3">Find your course. Enrol. Start learning.</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(([t, d], i) => (
            <div key={t} className="rounded-2xl border border-line bg-[#F5F2E9] p-6">
              <span className="text-xs text-[#B0C460] font-semibold text-muted">Step 0{i + 1}</span>
              <h3 className="mt-3 text-lg font-semibold">{t}</h3>
              <p className="mt-2 text-sm leading-snug">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}