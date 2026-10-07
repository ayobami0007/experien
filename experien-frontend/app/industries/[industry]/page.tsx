import { notFound } from "next/navigation";
import { pathways } from "@/components/industries/pathways";
import CourseHero from "@/components/industry-courses/CourseHero";
import CourseDiscovery from "@/components/industry-courses/CourseDiscovery";
import CoursePreview from "@/components/industry-courses/CoursePreview";
import CourseExpect from "@/components/industry-courses/CourseExpect";
import CourseCta from "@/components/industry-courses/CourseCta";

export default function IndustryCoursesPage({ params }: { params: { industry: string } }) {
  const selected = pathways.find((p) => p.id === params.industry);
  if (!selected) notFound();

  return (
    <>
      <CourseHero selected={selected} />
      <CourseDiscovery selected={selected} />
      <CoursePreview selected={selected} />
      <CourseExpect selected={selected} />
      <CourseCta selected={selected} />
    </>
  );
}