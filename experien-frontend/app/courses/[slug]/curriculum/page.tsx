import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getCourseBySlug } from "@/lib/mock/Courses";
import CurriculumHero from "@/components/course/Curriculumhero";
import CurriculumExplorer from "@/components/course/Curriculumexplorer";
import LearningMaterials from "@/components/course/Learningmaterials";
import CurriculumCta from "@/components/course/Curriculumcta";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  return { title: course ? `${course.title} curriculum | Experien` : "Course not found" };
}

export default async function CurriculumPage({ params }: Props) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();

  return (
    <div>
      <CurriculumHero course={course} />
      <CurriculumExplorer course={course} />
      <LearningMaterials />
      <CurriculumCta slug={course.slug} />
    </div>
  );
}