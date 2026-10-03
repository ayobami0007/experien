import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="bg-lime">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-extrabold">Find project management training that fits your field.</h2>
        <p className="mt-2 text-sm">Explore the available industries, review a course and enrol when you are ready.</p>
        <Link href="/industries" className="mt-6 inline-block rounded-md bg-ink px-5 py-3 text-sm font-semibold text-white">Browse industries →</Link>
      </div>
    </section>
  );
}
