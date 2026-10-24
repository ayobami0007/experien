type Props = {
  chips: string[];
  heroTitle: string;
  heroText: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  cardTitle: string;
  cardText: string;
  aside: { title: string; text: string; points: string[] };
  centered?: boolean; // centre the card heading and content (reset password, verify email)
  children: React.ReactNode; // the form
};

export default function AuthLayout({
  chips,
  heroTitle,
  heroText,
  eyebrow,
  title,
  subtitle,
  cardTitle,
  cardText,
  aside,
  centered = false,
  children,
}: Props) {
  return (
    <div>
      <section className="bg-ink text-[#F5F2E9]">
        <div className="mx-auto max-w-[1400px] px-6 py-10 md:px-16 md:py-12">
          <div className="flex flex-wrap gap-2">
            {chips.map((c, i) => (
              <span
                key={c}
                className={`rounded-full px-3 py-1 text-xs font-medium text-ink ${i === 0 ? "bg-lime" : "bg-white"}`}
              >
                {c}
              </span>
            ))}
          </div>
          <h1 className="mt-5 max-w-3xl text-3xl font-medium leading-[1.2] tracking-tight md:text-5xl">
            {heroTitle}
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-[#F5F2E9]/80 md:text-base">{heroText}</p>
        </div>
      </section>

      <section className="bg-[#F8F7F2] text-ink">
        <div className="mx-auto max-w-[1400px] px-6 py-10 md:px-16 md:py-12">
          <p className="text-[11px] font-semibold uppercase tracking-wider">{eyebrow}</p>
          <h2 className="mt-3 text-3xl font-medium tracking-tight md:text-4xl">{title}</h2>
          <p className="mt-2 max-w-2xl text-sm text-muted">{subtitle}</p>

          <div className="mt-8 grid items-start gap-6 lg:grid-cols-[1.9fr_1fr]">
            <div className="rounded-2xl border border-line bg-white p-6 md:p-8">
              <div className={centered ? "text-center" : ""}>
                <h3 className="text-xl font-medium tracking-tight">{cardTitle}</h3>
                <p className="mt-2 text-xs text-muted">{cardText}</p>
              </div>
              <div className={`mt-6 ${centered ? "mx-auto max-w-md" : ""}`}>{children}</div>
            </div>

            <aside className="rounded-2xl border border-line bg-[#F5F2E9] p-6">
              <p className="text-[11px] font-semibold uppercase tracking-wider">Why Experien</p>
              <h3 className="mt-3 text-xl font-medium leading-snug tracking-tight">{aside.title}</h3>
              <p className="mt-2 text-xs text-muted">{aside.text}</p>
              <ul className="mt-5 space-y-2">
                {aside.points.map((p) => (
                  <li key={p} className="flex items-center gap-2.5 rounded-lg bg-white/60 px-3 py-2.5 text-xs">
                    <span
                      aria-hidden
                      className="grid h-4 w-4 shrink-0 place-items-center rounded-full bg-lime text-[9px]"
                    >
                      ✓
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
