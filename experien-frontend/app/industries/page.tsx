import IndustryCard from "@/components/industry/IndustryCard";
import { industries } from "@/lib/mock-data";

export default function IndustriesPage() {
  return (
    <>
      <h1 className="mb-6 text-2xl font-bold">Select your industry</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((i) => <IndustryCard key={i.id} industry={i} />)}
      </div>
    </>
  );
}
