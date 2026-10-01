import { notFound } from "next/navigation";
import Button from "@/components/ui/Button";
import Curriculum from "@/components/course/Curriculum";
import { getCourse, getIndustry } from "@/lib/mock-data";
import { formatPrice } from "@/lib/utils/format";

export default function CourseDetailsPage({ params }: { params: { slug: string } }) {
  const course = getCourse(params.slug);
  if (!course) notFound();
  const industry = getIndustry(course.industryId);

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm text-brand">{industry?.name}</p>
        <h1 className="text-3xl font-bold">{course.title}</h1>
        <p className="mt-2 text-gray-600">{course.overview}</p>
      </div>

      <section>
        <h2 className="mb-2 text-lg font-semibold">Objectives</h2>
        <ul className="list-disc pl-5 text-sm">{course.objectives.map((o) => <li key={o}>{o}</li>)}</ul>
      </section>

      <section>
        <h2 className="mb-2 text-lg font-semibold">Curriculum</h2>
        <Curriculum modules={course.modules} />
      </section>

      <section className="text-sm">
        <p><strong>Duration:</strong> {course.duration}</p>
        <p><strong>Requirements:</strong> {course.requirements.join(", ")}</p>
        <p><strong>Price:</strong> {formatPrice(course.price)}</p>
      </section>

      <Button href={`/checkout/${course.slug}`}>Enrol now</Button>
    </div>
  );
}
