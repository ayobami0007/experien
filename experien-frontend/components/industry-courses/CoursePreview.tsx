import Link from "next/link";
import { Pathway } from "@/components/industries/pathways";
import { label, wrap } from "@/components/industries/styles";

const cards = [
  ["Curriculum", "4 structured modules", "Foundations, project setup, planning and risk, then delivery and closeout.", "18 lessons · 4 quizzes"],
  ["Materials", "Practical course resources", "Learn with videos, PDFs, images, notes and reusable project templates.", "Video · PDF · Templates"],
  ["Requirements", "Ready to start", "Basic computer literacy and an interest in technology project delivery are enough to begin.", "Beginner friendly"],
];

export default function CoursePreview({ selected }: { selected: Pathway }) {
  return (
    <section className="bg-[#F5F2E9]">
      <div className={`${wrap} py-14`}>
        <p className={label}>Before you open the course</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-medium leading-tight tracking-tight md:text-4xl">
          Preview the curriculum, learning materials and requirements.
        </h2>
        <p className="mt-4 max-w-3xl font-extralight text-base">
          Use these details to confirm that the course matches your learning needs before you
          continue to the full course page.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {cards.map(([tag, title, text, meta]) => (
            <div key={title} className="rounded-2xl bg-white p-6">
              <p className={`${label} text-[#8FA33A]`}>{tag}</p>
              <h3 className="mt-3 text-lg font-medium">{title}</h3>
              <p className="mt-3 text-sm leading-snug">{text}</p>
              <p className="mt-4 text-xs">{meta}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href={`/courses/${selected.slug}#curriculum`} className="rounded-lg bg-[#B5C35A] px-5 py-3 text-sm font-medium text-ink hover:brightness-95">
            View full curriculum
          </Link>
          <Link href={`/courses/${selected.slug}`} className="rounded-lg border border-ink px-5 py-3 text-sm font-medium hover:bg-ink hover:text-white">
            View course details
          </Link>
        </div>
      </div>
    </section>
  );
}