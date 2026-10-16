const steps = [
  {
    title: "Payment confirmation",
    text: "Your transaction status is confirmed before course access is activated.",
  },
  {
    title: "Course added to dashboard",
    text: "The purchased course appears in your learner dashboard.",
  },
  {
    title: "Start learning",
    text: "Open Module 1 and begin working through lessons, resources and quizzes.",
  },
];

export default function AfterPayment() {
  return (
    <section className="bg-white text-ink">
      <div className="mx-auto max-w-[1400px] px-6 py-12 md:px-16 md:py-14">
        <h2 className="text-3xl font-medium tracking-tight">What happens after payment?</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.title} className="rounded-xl border border-line p-5">
              <p className="text-[11px] font-semibold tracking-wider text-[#7C9A2B]">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-base font-medium">{s.title}</h3>
              <p className="mt-2 text-sm text-muted">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}