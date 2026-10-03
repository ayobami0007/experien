import Link from "next/link";
import { industries } from "@/lib/mock-data";

const labels: Record<string, string> = {
  technology: "Technology delivery teams",
  construction: "Construction project sites",
  manufacturing: "Manufacturing operations",
};

export default function IndustryCards() {
  return (
    <section className="  bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16" >
      <h2 className="text-2xl font-extrabold">Choose your industry</h2>
      <p className="mt-1 text-sm text-muted">Explore project management courses grounded in your field.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {industries.map((i) => (
          <Link key={i.id} href={`/industries/${i.id}`} className="rounded-xl border border-line bg-white p-5 transition hover:shadow-md">
            <p className="text-xs text-muted">{labels[i.id]}</p>
            <h3 className="mt-3 text-lg font-bold">{i.name}</h3>
            <p className="text-sm text-muted">{i.subIndustry}</p>
            <p className="mt-4 text-sm font-semibold">Explore courses →</p>
          </Link>
        ))}
      </div>
      </div>
    </section>
  );
}
