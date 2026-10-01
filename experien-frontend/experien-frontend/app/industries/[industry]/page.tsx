import { notFound } from "next/navigation";
import CourseCard from "@/components/course/CourseCard";
import { getCoursesByIndustry, getIndustry } from "@/lib/mock-data";

export default function IndustryCoursesPage({ params }: { params: { industry: string } }) {
  const industry = getIndustry(params.industry);
  if (!industry) notFound();
  const courses = getCoursesByIndustry(industry.id);

  return (
    <>
      <h1 className="text-2xl font-bold">{industry.name}</h1>
      <p className="mb-6 text-gray-600">{industry.subIndustry}</p>
      <div className="grid gap-4 sm:grid-cols-2">
        {courses.map((c) => <CourseCard key={c.id} course={c} />)}
      </div>
    </>
  );
}
