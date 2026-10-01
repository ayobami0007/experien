export type Progress = "not_started" | "in_progress" | "completed";

export type Industry = {
  id: string;
  name: string;
  description: string;
  subIndustry: string;
};

export type QuizQuestion = {
  id: string;
  question: string;
  options: string[];
  answerIndex: number;
};

export type Module = {
  id: string;
  title: string;
  videoUrl?: string;
  documents: { name: string; url: string }[];
  quiz: QuizQuestion[];
};

export type Course = {
  id: string;
  slug: string;
  title: string;
  industryId: string;
  overview: string;
  objectives: string[];
  duration: string;
  requirements: string[];
  price: number;
  modules: Module[];
};

export type Enrolment = {
  courseId: string;
  status: Progress;
  moduleProgress: Record<string, Progress>;
};
