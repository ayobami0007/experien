import { label, wrap } from "./styles";

export default function IndustriesHero() {
  return (
    <section className="bg-ink text-[#F5F2E9]">   <div className={`${wrap} grid items-center gap-20 py-12 md:grid-cols-[3fr_1.3fr] md:py-20`}>
   
        <div>
          <p className={`${label} text-[#D8F36A] leading-5`}>Home / Industries</p>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.25]  md:text-5xl">
            Find the project-management path that fits your industry.
          </h1>
          <p className="mt-6 max-w-2xl text-base font-extralight leading-snug">
            Choose the environment you want to work in. Experien uses that choice to show the most
            relevant course path, examples and practical project scenarios.
          </p>
        </div>

        <div className="rounded-2xl bg-[#F5F2E9] p-8 text-ink">
          <p className={label}>Step 1 of 3</p>
          <h2 className="mt-2 text-xl font-medium">Choose one industry to begin.</h2>
          <p className="mt-3 text-xs text-muted leading-5 tracking-wide">
            You can change your selection before enrolment. Your choice only changes the industry
            context of the learning experience.
          </p>
        </div>
      </div>
    </section>
  );
}