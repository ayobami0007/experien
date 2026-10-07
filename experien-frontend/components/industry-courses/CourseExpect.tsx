import { Pathway } from "@/components/industries/pathways";
import { label, wrap } from "@/components/industries/styles";

export default function CourseExpect({ selected }: { selected: Pathway }) {
  const cards = [
    ["01 · Context", "Industry scenarios", `Examples are framed around ${selected.situations} situations in ${selected.name.toLowerCase()} delivery.`, `${selected.name} examples`],
    ["02 · Resources", "Reusable resources", "Use planning templates, notes and documents throughout each module.", "PDFs · Templates"],
    ["03 · Progress", "Quizzes & progress", "Complete module knowledge checks and track progress from the learner dashboard.", "Module quizzes"],
  ];

  return (
    <section className="bg-[#EDF4EC]">
      <div className={`${wrap} py-14`}>
        <p className={label}>What you can expect</p>
        <h2 className="mt-3 max-w-4xl text-3xl font-medium leading-tight tracking-tight md:text-4xl">
          A focused course built around practical {selected.name} project work.
        </h2>
        <p className="mt-4 max-w-4xl font-extralight text-base">
          The course combines industry context, practical resources and short knowledge checks
          across the learning journey.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {cards.map(([tag, title, text, meta]) => (
            <div key={title} className="rounded-2xl border border-line bg-white p-6">
              <p className={`${label} text-[#8FA33A]`}>{tag}</p>
              <h3 className="mt-3 text-base font-medium">{title}</h3>
              <p className="mt-3 text-sm leading-snug">{text}</p>
              <p className="mt-4 text-xs">{meta}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}