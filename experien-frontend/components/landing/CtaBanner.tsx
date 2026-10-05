import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="bg-lime">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-16">
          <h2 className="text-xs  ">
        START WITH YOUR INDUSTRY
        </h2>
        <h2 className=" mt-4 text-3xl font-semibold  tracking-normal md:text-[32px]">
          Find project management training that fits your field.
        </h2>
        <p className="mt-4 text-sm tracking-normal">
          Explore the available industries, review a course and enrol when you are ready.
        </p>
        <Link
          href="/industries"
          className="mt-8 inline-block rounded-lg bg-[#B0C460] px-6 py-3.5 text-sm font-medium text-[#123C35]"
        >
          Browse industries →
        </Link>
      </div>
    </section>
  );
}