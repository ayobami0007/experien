import Link from "next/link";
import { Pathway } from "./pathways";
import { label, wrap } from "./styles";

export default function CourseBanner({ selected }: { selected: Pathway }) {
  return (
    <section className="bg-lime">
      <div className={`${wrap} flex flex-wrap items-center justify-between gap-6 py-10`}>
        <div>
          <p className={label}>{selected.name} selected</p>
          <h2 className="mt-2 text-3xl font-medium tracking-tight">
            Review the {selected.courseTitle} course.
          </h2>
          <p className="mt-2 text-base">
            See the curriculum, requirements and price before you decide to enrol.
          </p>
        </div>
        <Link
          href={`/courses/${selected.slug}`}
          className="rounded-lg bg-ink px-6 py-3.5 text-sm font-medium text-white hover:bg-ink/90"
        >
          Continue to course
        </Link>
      </div>
    </section>
  );
}