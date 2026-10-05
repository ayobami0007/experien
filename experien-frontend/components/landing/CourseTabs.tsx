import Link from "next/link";
import { courses, industries } from "@/lib/mock-data";

const cardText: Record<string, { tag: string; description: string }> = {
  technology: {
    tag: "Technology · IT",
    description: "Plan and deliver technology projects with an industry-focused course structure.",
  },
  construction: {
    tag: "Construction",
    description: "Explore planning, coordination and delivery in construction project environments.",
  },
  manufacturing: {
    tag: "Manufacturing",
    description: "Explore project work in manufacturing processes and production settings.",
  },
};

export default function CourseTabs() {
  return (
    <section className="bg-[#F5F2E9]">
      <div className="mx-auto max-w-[1400px] px-6 py-14 md:px-16">
        <p className="text-lg font-medium uppercase">Explore training</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          Project management training, organised by industry
        </h2>
        <p className="mt-3 text-lg">
          Choose the context you want to work in, then review the course overview and curriculum before enrolling.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {industries.map((industry) => {
            const course = courses.find((c) => c.industryId === industry.id);
            const text = cardText[industry.id];
            if (!course || !text) return null;
            return (
              <Link
                key={industry.id}
                href={`/courses/${course.slug}`}
                className="rounded-3xl bg-white p-6 shadow-[0_8px_24px_rgba(18,60,53,0.10)] transition hover:-translate-y-0.5"
              >
                <p className="text-xs font-medium uppercase text-[#B5C35A]">{text.tag}</p>
                <h3 className="mt-4 text-xl font-medium">{course.title}</h3>
                <p className="mt-3 text-sm leading-snug">{text.description}</p>
                <p className="mt-4 text-xs">6 weeks · Self-paced online</p>
                <p className="mt-3 text-xs">View details →</p>
              </Link>
            );
          })}
        </div>

        <Link
          href="/industries"
          className="mt-8 inline-block rounded-xl border border-ink bg-white px-6 py-3 text-sm font-medium hover:bg-ink hover:text-white"
        >
          Explore industries →
        </Link>
      </div>
    </section>
  );
}