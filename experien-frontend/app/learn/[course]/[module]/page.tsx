import { notFound } from "next/navigation";
import VideoPlayer from "@/components/learning/VideoPlayer";
import Quiz from "@/components/learning/Quiz";
import { getCourse } from "@/lib/mock-data";

export default function ModulePage({ params }: { params: { course: string; module: string } }) {
  const course = getCourse(params.course);
  const mod = course?.modules.find((m) => m.id === params.module);
  if (!course || !mod) notFound();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">{mod.title}</h1>
      <VideoPlayer src={mod.videoUrl} />

      <section>
        <h2 className="mb-2 text-lg font-semibold">Materials</h2>
        {mod.documents.length === 0 ? (
          <p className="text-sm text-gray-500">No documents for this module.</p>
        ) : (
          <ul className="list-disc pl-5 text-sm">
            {mod.documents.map((d) => <li key={d.name}><a href={d.url} className="text-brand underline">{d.name}</a></li>)}
          </ul>
        )}
      </section>

      <section>
        <h2 className="mb-2 text-lg font-semibold">Quiz</h2>
        <Quiz questions={mod.quiz} />
      </section>
    </div>
  );
}
