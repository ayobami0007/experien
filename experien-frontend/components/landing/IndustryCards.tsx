import Link from "next/link";
import { industries } from "@/lib/mock-data";

const labels: Record<string, string> = {
  technology: "Technology delivery teams",
  construction: "Construction project sites",
  manufacturing: "Manufacturing operations",
};

export default function IndustryCards() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1400px] px-6 py-14 md:px-16">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Choose your industry</h2>
        <p className="mt-4 text-lg">Explore project management courses grounded in your field.</p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {industries.map((i) => (
            <Link
              key={i.id}
              href={`/industries/${i.id}`}
              className="rounded-2xl border border-line bg-white p-6 shadow-[0_8px_24px_rgba(18,60,53,0.08)] transition hover:-translate-y-0.5"
            >
              <p className="text-sm">{labels[i.id]}</p>
              <h3 className="mt-4 text-2xl font-medium">{i.name}</h3>
              <p className="mt-3 text-sm">{i.subIndustry.replace("Project Management", "project management")}</p>
              <p className="mt-4 text-sm">Explore courses →</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}