import Link from "next/link";
import { Pathway } from "@/components/industries/pathways";
import { label, wrap } from "@/components/industries/styles";

export default function CourseCta({ selected }: { selected: Pathway }) {
  return (
    <section className="bg-[#D8F36A]">
      <div className={`${wrap} flex flex-wrap items-center justify-between gap-6 py-10`}>
        <div>
          <p className={label}>Ready to review the course</p>
          <h2 className="mt-2 text-3xl font-medium ">
            Open {selected.courseTitle} and review the full curriculum.
          </h2>
        </div>
        <Link href={`/courses/${selected.slug}`} className="rounded-lg bg-ink px-6 py-3.5 text-sm font-medium text-white hover:bg-ink/90">
          View course details
        </Link>
      </div>
    </section>
  );
}