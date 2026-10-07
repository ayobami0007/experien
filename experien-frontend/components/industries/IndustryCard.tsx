import Link from "next/link";
import { Industry } from "@/types";

export default function IndustryCard({ industry }: { industry: Industry }) {
  return (
    <Link href={`/industries/${industry.id}`} className="block rounded-lg border p-5 hover:border-brand hover:shadow">
      <h3 className="text-lg font-semibold">{industry.name}</h3>
      <p className="mt-1 text-sm text-brand">{industry.subIndustry}</p>
      <p className="mt-2 text-sm text-gray-600">{industry.description}</p>
    </Link>
  );
}
