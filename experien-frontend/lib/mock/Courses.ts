import type { Course, CourseModule, ModuleContent } from "@/types/course";

// Builds a module from its lesson list (lesson count and items come from `contents`)
const makeModule = (
  id: string,
  title: string,
  shortTitle: string,
  summary: string,
  contents: ModuleContent[]
): CourseModule => ({
  id,
  title,
  shortTitle,
  summary,
  lessons: contents.length,
  items: contents.map((c) => c.meta),
  contents,
});

export const courses: Course[] = [
  {
    id: "c1",
    slug: "it-project-management",
    title: "IT Project Management",
    industry: "Technology",
    summary:
      "Plan, coordinate and deliver technology projects with a practical curriculum built around real project-management workflows.",
    overview:
      "Build practical project-management habits for technology environments—from defining scope to monitoring delivery and closing a project.",
    objectives: [
      "Define project scope, objectives and success criteria",
      "Identify stakeholders and plan communication",
      "Build schedules, dependencies and milestones",
      "Create and manage a practical risk register",
      "Track delivery and close projects effectively",
    ],
    duration: "6 weeks",
    format: "Self-paced online",
    requirements: [
      "Basic computer literacy",
      "No prior project-management certification is required for this course.",
    ],
    price: 75000,
    modules: [
      {
        id: "m1",
        title: "Foundations of IT project management",
        shortTitle: "Foundations",
        summary:
          "Understand the role of project management in technology delivery and the core concepts used throughout the course.",
        lessons: 4,
        items: [
          "Video lesson · 12 min",
          "Reading / PDF resource",
          "Practical template",
          "Knowledge check · 5 questions",
        ],
        contents: [
          { title: "What project management looks like in technology", meta: "Video · 12 min" },
          { title: "Project lifecycle and delivery stages", meta: "Reading · PDF" },
          { title: "Project roles and responsibilities", meta: "Video · 10 min" },
          { title: "Module 1 knowledge check", meta: "Quiz · 5 questions" },
        ],
      },
      {
        id: "m2",
        title: "Scope, stakeholders and project setup",
        shortTitle: "Project setup",
        summary:
          "Define what the project must deliver, who is involved, and how the work is set up to succeed.",
        lessons: 5,
        items: [
          "Video lessons",
          "Reading / PDF resource",
          "Stakeholder map template",
          "Knowledge check · 5 questions",
        ],
        contents: [
          { title: "Defining scope and objectives", meta: "Video · 11 min" },
          { title: "Identifying and analysing stakeholders", meta: "Video · 9 min" },
          { title: "Stakeholder map template", meta: "Template · PDF" },
          { title: "Setting up your project charter", meta: "Reading · PDF" },
          { title: "Module 2 knowledge check", meta: "Quiz · 5 questions" },
        ],
      },
      {
        id: "m3",
        title: "Planning, scheduling and risk",
        shortTitle: "Planning & risk",
        summary:
          "Turn scope into a schedule, map dependencies and milestones, and manage risk before it becomes a problem.",
        lessons: 5,
        items: [
          "Video lessons",
          "Reading / PDF resource",
          "Risk register template",
          "Knowledge check · 5 questions",
        ],
        contents: [
          { title: "Breaking work into tasks", meta: "Video · 10 min" },
          { title: "Scheduling, dependencies and milestones", meta: "Video · 14 min" },
          { title: "Building a risk register", meta: "Video · 8 min" },
          { title: "Risk register template", meta: "Template · PDF" },
          { title: "Module 3 knowledge check", meta: "Quiz · 5 questions" },
        ],
      },
      {
        id: "m4",
        title: "Delivery, reporting and closeout",
        shortTitle: "Delivery & closeout",
        summary:
          "Track progress, report clearly to stakeholders and close the project with lessons captured.",
        lessons: 4,
        items: [
          "Video lessons",
          "Reading / PDF resource",
          "Status report template",
          "Knowledge check · 5 questions",
        ],
        contents: [
          { title: "Tracking progress and reporting", meta: "Video · 12 min" },
          { title: "Managing change during delivery", meta: "Reading · PDF" },
          { title: "Closing a project and capturing lessons", meta: "Video · 9 min" },
          { title: "Module 4 knowledge check", meta: "Quiz · 5 questions" },
        ],
      },
    ],
  },
  {
    id: "c2",
    slug: "construction-project-management",
    title: "Construction Project Management",
    industry: "Construction",
    summary:
      "Plan, coordinate and deliver building and infrastructure projects from site mobilisation to handover.",
    overview:
      "Build practical project-management habits for construction environments—from planning and procurement to site control and project handover.",
    objectives: [
      "Understand construction project phases and roles",
      "Define scope, procurement and contract responsibilities",
      "Build a programme and control cost and schedule",
      "Manage site risks, quality and safety",
      "Deliver a clean handover and closeout",
    ],
    duration: "6 weeks",
    format: "Self-paced online",
    requirements: [
      "Basic computer literacy",
      "No prior construction or project-management certification is required for this course.",
    ],
    price: 75000,
    modules: [
      makeModule("m1", "Foundations of construction project management", "Foundations",
        "Understand how construction projects are structured and who does what from design to handover.",
        [
          { title: "How construction projects are structured", meta: "Video · 12 min" },
          { title: "Project phases from design to handover", meta: "Reading · PDF" },
          { title: "Roles on site: client, contractor and consultants", meta: "Video · 10 min" },
          { title: "Module 1 knowledge check", meta: "Quiz · 5 questions" },
        ]),
      makeModule("m2", "Scope, procurement and contracts", "Scope & procurement",
        "Define what is being built, how work is procured and who is responsible for what.",
        [
          { title: "Defining scope and deliverables", meta: "Video · 11 min" },
          { title: "Procurement and tendering basics", meta: "Video · 9 min" },
          { title: "Contract types and responsibilities", meta: "Reading · PDF" },
          { title: "Module 2 knowledge check", meta: "Quiz · 5 questions" },
        ]),
      makeModule("m3", "Programme, cost and risk control", "Cost & schedule",
        "Build a construction programme, control the budget and manage risk on site.",
        [
          { title: "Building a construction programme", meta: "Video · 13 min" },
          { title: "Cost estimating and budget control", meta: "Video · 11 min" },
          { title: "Site risk register template", meta: "Template · PDF" },
          { title: "Module 3 knowledge check", meta: "Quiz · 5 questions" },
        ]),
      makeModule("m4", "Site delivery, quality and handover", "Delivery & handover",
        "Track site progress, keep quality and safety under control and close out the project.",
        [
          { title: "Managing site progress and reporting", meta: "Video · 12 min" },
          { title: "Quality control, inspections and site safety", meta: "Reading · PDF" },
          { title: "Handover and project closeout", meta: "Video · 9 min" },
          { title: "Module 4 knowledge check", meta: "Quiz · 5 questions" },
        ]),
    ],
  },
  {
    id: "c3",
    slug: "manufacturing-project-management",
    title: "Manufacturing Project Management",
    industry: "Manufacturing",
    summary:
      "Plan, coordinate and deliver production and supply chain projects with a practical, workflow-based curriculum.",
    overview:
      "Build practical project-management habits for manufacturing environments—from supplier coordination to quality and cost control.",
    objectives: [
      "Understand how projects fit into production environments",
      "Define scope and coordinate suppliers",
      "Plan around capacity, resources and bottlenecks",
      "Manage risk, quality and cost",
      "Close projects and hand over to operations",
    ],
    duration: "6 weeks",
    format: "Self-paced online",
    requirements: [
      "Basic computer literacy",
      "No prior manufacturing or project-management certification is required for this course.",
    ],
    price: 75000,
    modules: [
      makeModule("m1", "Foundations of manufacturing project management", "Foundations",
        "Understand how projects fit into production environments and the teams that deliver them.",
        [
          { title: "How projects fit into production environments", meta: "Video · 12 min" },
          { title: "The project lifecycle in manufacturing", meta: "Reading · PDF" },
          { title: "Roles across plant, supply and quality teams", meta: "Video · 10 min" },
          { title: "Module 1 knowledge check", meta: "Quiz · 5 questions" },
        ]),
      makeModule("m2", "Scope, suppliers and project setup", "Scope & suppliers",
        "Define requirements clearly and set up the supplier relationships the project depends on.",
        [
          { title: "Defining project scope and requirements", meta: "Video · 11 min" },
          { title: "Working with suppliers and vendors", meta: "Video · 9 min" },
          { title: "Supplier coordination template", meta: "Template · PDF" },
          { title: "Module 2 knowledge check", meta: "Quiz · 5 questions" },
        ]),
      makeModule("m3", "Planning, capacity and risk", "Planning & risk",
        "Plan around production schedules, spot bottlenecks early and manage risk.",
        [
          { title: "Planning around production schedules", meta: "Video · 13 min" },
          { title: "Capacity, resources and bottlenecks", meta: "Video · 10 min" },
          { title: "Risk register template", meta: "Template · PDF" },
          { title: "Module 3 knowledge check", meta: "Quiz · 5 questions" },
        ]),
      makeModule("m4", "Delivery, quality and closeout", "Delivery & quality",
        "Track progress, control quality and cost, and hand the result over to operations.",
        [
          { title: "Tracking progress and reporting", meta: "Video · 12 min" },
          { title: "Quality and cost control", meta: "Reading · PDF" },
          { title: "Closing a project and handing over to operations", meta: "Video · 9 min" },
          { title: "Module 4 knowledge check", meta: "Quiz · 5 questions" },
        ]),
    ],
  },
];

export function getCourseBySlug(slug: string) {
  return courses.find((c) => c.slug === slug);
}