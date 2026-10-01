import Link from "next/link";
import { Course } from "@/types";
import { formatPrice } from "@/lib/utils/format";

export default function CourseCard({ course }: { course: Course }) {
  return (
    <Link href={`/courses/${course.slug}`} className="block rounded-lg border p-5 hover:border-brand hover:shadow">
      <h3 className="text-lg font-semibold">{course.title}</h3>
      <p className="mt-2 text-sm text-gray-600">{course.overview}</p>
      <div className="mt-3 flex justify-between text-sm">
        <span>{course.duration}</span>
        <span className="font-semibold">{formatPrice(course.price)}</span>
      </div>
    </Link>
  );
}
