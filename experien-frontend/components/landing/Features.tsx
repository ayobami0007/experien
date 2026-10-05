const items = [
  ["Course modules", "View the curriculum and move through the course one module at a time."],
  ["Video lessons", "Watch the training videos inside the learning environment."],
  ["Resources and documents", "Read documents, view images and access supporting materials."],
  ["Quizzes and progress", "Complete module quizzes and track your basic progress."],
];

export default function Features() {
  return (
    <section className="bg-[#FBFCFA]">
      <div className="mx-auto max-w-[1400px] px-6 py-14 md:px-16">
          <h2 className="text-xs tracking-tight ">
          THE LEARNING EXPERIENCE
        </h2>
        <h2 className="text-2xl font-semibold tracking-tight md:text-4xl mt-3">
          Everything you need to move through a course
        </h2>
        <p className="mt-3 text-base">
          After successful payment, your enrolled course opens in a simple module-based learning environment.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {items.map(([t, d], i) => (
            <div key={t} className="rounded-2xl border border-line bg-white p-6">
              <span className=" text-xs text-[#B0C460] font-semibold text-muted">0{i + 1}</span>
              <h3 className="mt-2 text-lg font-semibold">{t}</h3>
              <p className="mt-2 text-sm">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}