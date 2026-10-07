import { Pathway } from "./pathways";
import { label, wrap } from "./styles";

type Props = {
  pathways: Pathway[];
  selectedId: string;
  onSelect: (id: string) => void;
};

export default function IndustryPicker({ pathways, selectedId, onSelect }: Props) {
  return (
    <section id="choose-industry" className="bg-white">
      <div className={`${wrap} py-14`}>
        <p className={label}>Choose your industry</p>
        <h2 className="mt-3 max-w-4xl text-3xl font-medium  md:text-4xl">
          Three industries. One practical project-management foundation.
        </h2>
        <p className="mt-4 text-base">
          Select an industry to preview the course path currently available in the MVP.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {pathways.map((p, i) => {
            const active = p.id === selectedId;
            const style = active
              ? "bg-ink text-white"
              : i === 2
              ? "border border-line bg-white"
              : "bg-[#F5F2E9]";

            return (
              <button
                key={p.id}
                onClick={() => onSelect(p.id)}
                className={`rounded-2xl p-6 text-left transition hover:-translate-y-0.5 ${style}`}
              >
                <p className={`${label} ${active ? "text-lime" : "text-[#8FA33A]"}`}>
                  0{i + 1} · {active ? "Selected" : "Industry"}
                </p>
                <h3 className="mt-4 text-2xl font-medium">{p.name}</h3>
                <p className="mt-3 text-base leading-snug">{p.blurb}</p>
                <p className="mt-4 text-sm">{p.cardPath}</p>
                <p className="mt-2 text-sm font-medium">
                  {active ? "Selected ✓" : "Choose industry →"}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}