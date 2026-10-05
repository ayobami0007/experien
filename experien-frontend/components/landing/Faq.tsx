const faqs = [
  {
    q: "How do I find a course for my industry?",
    a: "Start by choosing an industry, then browse its available project management courses and review the curriculum.",
  },
  {
    q: "When can I access a purchased course?",
    a: "Access to the selected course is provided after your payment is successfully confirmed.",
  },
  {
    q: "What learning materials are included?",
    a: "Depending on the course, modules may include videos, documents, images, notes, templates and quizzes.",
  },
  {
    q: "Can I see how far I have progressed?",
    a: "Yes. Your learner dashboard and course modules show basic progress and module status.",
  },
];

export default function Faq() {
  return (
    <section className="bg-[#FBFCFA] ">
      <div className="mx-auto max-w-[1400px] px-6 py-14 md:px-16">
          <h2 className="text-xs ">
        QUESTIONS ABOUT LEARNING
        </h2>
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl mt-3 ">
          Good to know before you enrol
        </h2>

        <div className="mt-8 space-y-5">
          {faqs.map((item) => (
            <div key={item.q} className="rounded-2xl bg-[#F5F5F4] px-7 py-6">
              <h3 className="text-sm font-normal ">{item.q}</h3>
              <p className="mt-2 text-xs ">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}