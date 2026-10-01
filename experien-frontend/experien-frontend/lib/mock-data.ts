import { Course, Enrolment, Industry } from "@/types";

// Temporary mock data. Replace with real API calls once the backend is ready.
export const industries: Industry[] = [
  { id: "technology", name: "Technology", subIndustry: "IT Project Management", description: "Software, systems and digital delivery projects." },
  { id: "construction", name: "Construction", subIndustry: "Construction Project Management", description: "Building, infrastructure and site-based projects." },
  { id: "manufacturing", name: "Manufacturing", subIndustry: "Manufacturing Project Management", description: "Production, supply chain and plant projects." },
];

const sampleModules = (prefix: string) => [
  {
    id: `${prefix}-m1`,
    title: "Module 1: Foundations",
    documents: [{ name: "Course notes (PDF)", url: "#" }],
    quiz: [
      { id: "q1", question: "What is a project?", options: ["A temporary effort with a defined goal", "An ongoing operation", "A job title"], answerIndex: 0 },
      { id: "q2", question: "Who approves the project scope?", options: ["The sponsor", "No one", "The vendor"], answerIndex: 0 },
    ],
  },
  {
    id: `${prefix}-m2`,
    title: "Module 2: Planning",
    documents: [{ name: "Planning template", url: "#" }],
    quiz: [{ id: "q1", question: "A project plan helps you to...", options: ["Track scope and timeline", "Skip risks", "Avoid reporting"], answerIndex: 0 }],
  },
  {
    id: `${prefix}-m3`,
    title: "Module 3: Delivery & Control",
    documents: [],
    quiz: [{ id: "q1", question: "Risks should be...", options: ["Tracked and managed", "Ignored", "Hidden"], answerIndex: 0 }],
  },
];

export const courses: Course[] = [
  {
    id: "it-pm", slug: "it-project-management", title: "IT Project Management", industryId: "technology",
    overview: "Learn how to plan and deliver software and technology projects.",
    objectives: ["Understand the IT project lifecycle", "Plan and track a software project", "Manage technical risks"],
    duration: "4 weeks", requirements: ["Basic computer skills"], price: 25000, modules: sampleModules("it"),
  },
  {
    id: "con-pm", slug: "construction-project-management", title: "Construction Project Management", industryId: "construction",
    overview: "Manage building and infrastructure projects from site to handover.",
    objectives: ["Understand construction project phases", "Manage cost and schedule", "Handle site risks"],
    duration: "4 weeks", requirements: ["None"], price: 25000, modules: sampleModules("con"),
  },
  {
    id: "man-pm", slug: "manufacturing-project-management", title: "Manufacturing Project Management", industryId: "manufacturing",
    overview: "Deliver projects in production and supply chain environments.",
    objectives: ["Understand production project workflows", "Coordinate suppliers", "Control quality and cost"],
    duration: "4 weeks", requirements: ["None"], price: 25000, modules: sampleModules("man"),
  },
];

export const mockEnrolments: Enrolment[] = [
  { courseId: "it-pm", status: "in_progress", moduleProgress: { "it-m1": "completed", "it-m2": "in_progress", "it-m3": "not_started" } },
];

export const getIndustry = (id: string) => industries.find((i) => i.id === id);
export const getCourse = (slug: string) => courses.find((c) => c.slug === slug);
export const getCoursesByIndustry = (id: string) => courses.filter((c) => c.industryId === id);
