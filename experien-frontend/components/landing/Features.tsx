const items = [
  ["Course modules", "View the curriculum and move through the course one module at a time."],
  ["Video lessons", "Watch the training videos inside the learning environment."],
  ["Resources and documents", "Read documents, view images and access supporting materials."],
  ["Quizzes and progress", "Complete module quizzes and track your basic progress."],
];

export default function Features() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      
        <h2 className="text-2xl font-extrabold">Everything you need to move through a course</h2>
        <p className="mt-1 text-sm text-muted">After successful payment, your enrolled course opens in a simple module-based learning environment.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {items.map(([t, d], i) => (
            <div key={t} className="rounded-xl border border-line p-5">
              <span className="text-xs text-muted">0{i + 1}</span>
              <h3 className="mt-1 font-bold">{t}</h3>
              <p className="mt-1 text-sm text-muted">{d}</p>
            </div>
          ))}
        </div>

    </section>
  );
}
