import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <section className="py-12 text-center">
      <h1 className="text-4xl font-bold">Project management training for <span className="text-brand">your industry</span></h1>
      <p className="mx-auto mt-4 max-w-xl text-gray-600">
        Pick your industry, choose a course, pay, and start learning, all in one place.
      </p>
      <div className="mt-6"><Button href="/industries">Browse industries</Button></div>
    </section>
  );
}
