export type ModuleContent = {
  title: string;
  meta: string; // e.g. "Video · 12 min", "Reading · PDF", "Quiz · 5 questions"
};

export type CourseModule = {
  id: string;
  title: string;
  shortTitle: string; // used in the curriculum page sidebar
  summary: string; // shown when the module is expanded
  lessons: number;
  items: string[]; // what the module contains, shown in the curriculum preview
  contents: ModuleContent[]; // lesson-level list for the full curriculum page
};

export type Course = {
  id: string;
  slug: string;
  title: string;
  industry: string;
  summary: string; // short line under the title in the hero
  overview: string; // "What this course helps you do"
  objectives: string[];
  duration: string;
  format: string;
  requirements: string[]; // [0] = title, [1] = note
  price: number; // in naira
  modules: CourseModule[];
};