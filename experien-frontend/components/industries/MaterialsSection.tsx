import { Pathway } from "./pathways";
import { label, wrap } from "./styles";

export default function MaterialsSection({ selected }: { selected: Pathway }) {
  const materials = [
    ["01 · Learn", "Industry examples", `Lessons explain core project-management concepts through realistic, ${selected.situations} situations.`, "Course lessons"],
    ["02 · Apply", "Practical resources", "Use templates, notes and documents to practise the same planning activities covered in each module.", "PDFs · Templates"],
    ["03 · Check", "Quizzes & progress", "Complete module knowledge checks and follow your course completion from the learner dashboard.", "Module quizzes"],
  ];

  return (
    <section className="bg-[#EDF4EC]">
      <div className={`${wrap} py-14`}>
        <p className={label}>What you will work with</p>
        <h2 className="mt-3 text-3xl font-medium tracking-tight md:text-4xl">
          Practical materials built around the industry context.
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {materials.map(([tag, title, text, what]) => (
            <div key={title} className="rounded-2xl border border-line bg-white p-6">
              <p className={`${label} text-[#8FA33A]`}>{tag}</p>
              <h3 className="mt-3 text-xl font-medium">{title}</h3>
              <p className="mt-3 text-base leading-snug">{text}</p>
              <p className="mt-4 text-sm">{what}</p>
              <p className="mt-2 text-sm">Included</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}