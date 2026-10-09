// import Link from "next/link";
// import { industries } from "@/lib/mock-data";

// const labels: Record<string, string> = {
//   technology: "Technology delivery teams",
//   construction: "Construction project sites",
//   manufacturing: "Manufacturing operations",
// };

// export default function IndustryCards() {
//   return (
//     <section className="bg-white">
//       <div className="mx-auto max-w-[1400px] px-6 py-14 md:px-16">
//         <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Choose your industry</h2>
//         <p className="mt-4 text-lg">Explore project management courses grounded in your field.</p>

//         <div className="mt-8 grid gap-6 md:grid-cols-3">
//           {industries.map((i) => (
//             <Link
//               key={i.id}
//               href={`/industries/${i.id}`}
//               className="rounded-2xl border border-line bg-white p-6 shadow-[0_8px_24px_rgba(18,60,53,0.08)] transition hover:-translate-y-0.5"
//             >
//               <p className="text-sm">{labels[i.id]}</p>
//               <h3 className="mt-4 text-2xl font-medium">{i.name}</h3>
//               <p className="mt-3 text-sm">{i.subIndustry.replace("Project Management", "project management")}</p>
//               <p className="mt-4 text-sm">Explore courses →</p>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import Link from "next/link";
import { industries } from "@/lib/mock-data";

const labels: Record<string, string> = {
  technology: "Technology delivery teams",
  construction: "Construction project sites",
  manufacturing: "Manufacturing operations",
};

const INK = "#123C35";
const LIME = "#D8F36A";
const PANEL = "#EDF4EC";
const SOFT = "#D5DDD3";

function TechArt() {
  return (
    <svg viewBox="0 0 355 84" className="h-auto w-full" role="img" aria-label="Technology illustration">
      <rect width="355" height="84" fill={PANEL} />
      <rect x="22" y="12" width="128" height="50" rx="8" fill={INK} />
      <rect x="34" y="21" width="104" height="32" rx="4" fill="#fff" />
      <rect x="40" y="28" width="22" height="18" rx="3" fill={PANEL} />
      <rect x="70" y="28" width="24" height="18" rx="3" fill={LIME} />
      <rect x="102" y="28" width="28" height="18" rx="3" fill={PANEL} />
      <rect x="12" y="68" width="148" height="5" rx="2.5" fill={INK} />
      <circle cx="264" cy="42" r="14" fill={LIME} />
      <circle cx="297" cy="42" r="14" fill={INK} />
    </svg>
  );
}

function ConstructionArt() {
  return (
    <svg viewBox="0 0 355 84" className="h-auto w-full" role="img" aria-label="Construction illustration">
      <rect width="355" height="84" fill={PANEL} />
      {[26, 38, 50, 62].map((y) => (
        <line key={y} x1="108" x2="345" y1={y} y2={y} stroke={SOFT} strokeWidth="1" />
      ))}
      <rect x="28" y="10" width="80" height="64" rx="5" fill="#fff" stroke={SOFT} />
      {[22, 34, 46].map((y) =>
        [38, 68].map((x) => <rect key={`${x}-${y}`} x={x} y={y} width="16" height="8" rx="2" fill={SOFT} />)
      )}
      <rect x="268" y="26" width="64" height="30" rx="15" fill={LIME} />
      <rect x="258" y="55" width="84" height="6" rx="3" fill={LIME} />
    </svg>
  );
}

function ManufacturingArt() {
  return (
    <svg viewBox="0 0 355 84" className="h-auto w-full" role="img" aria-label="Manufacturing illustration">
      <rect width="355" height="84" fill={PANEL} />
      <path d="M28 28 L48 12 L68 28 L88 12 L108 28 L128 12 L148 28 Z" fill={INK} />
      <rect x="28" y="28" width="170" height="46" fill={INK} />
      <rect x="172" y="6" width="16" height="32" rx="2" fill={INK} />
      <rect x="222" y="40" width="22" height="20" rx="3" fill="#F7F5EC" />
      <rect x="252" y="40" width="24" height="20" rx="3" fill={LIME} />
      <rect x="284" y="40" width="22" height="20" rx="3" fill="#F7F5EC" />
      <rect x="314" y="40" width="24" height="20" rx="3" fill={LIME} />
      <rect x="220" y="66" width="120" height="5" rx="2.5" fill={INK} />
    </svg>
  );
}

const art: Record<string, JSX.Element> = {
  technology: <TechArt />,
  construction: <ConstructionArt />,
  manufacturing: <ManufacturingArt />,
};

export default function IndustryCards() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1400px] px-6 py-14 md:px-16">
        <h2 className="text-3xl font-medium tracking-tight md:text-4xl">Choose your industry</h2>
        <p className="mt-4 text-lg text-muted">Explore project management courses grounded in your field.</p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {industries.map((i) => (
            <Link
              key={i.id}
              href={`/industries/${i.id}`}
              className="rounded-3xl border border-line bg-white p-6 shadow-[0_12px_32px_rgba(18,60,53,0.10)] transition hover:-translate-y-0.5"
            >
              <div className="overflow-hidden rounded-xl border border-line">{art[i.id]}</div>
              <p className="mt-4 text-sm">{labels[i.id]}</p>
              <h3 className="mt-3 text-2xl font-medium">{i.name}</h3>
              <p className="mt-3 text-base">
                {i.subIndustry.replace("Project Management", "project management")}
              </p>
              <p className="mt-4 text-sm font-medium">Explore courses →</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}