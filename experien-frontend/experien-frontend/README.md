# Experien Frontend: Technical Setup & Initial Architecture

**Project:** Experien (industry-specific project management training platform)
**Team:** PNA 5
**Role:** Frontend Developer
**Author:** Sarat Ayobami
**Week:** 1 (Project Discovery)
**Deliverable:** Frontend Technical Setup / Initial Architecture

---

## 1. Purpose

This document describes the technical setup and initial architecture of the Experien frontend. The frontend must prove one journey end to end:

**course discovery → payment → enrolment → learning**

In line with the MVP principle, the architecture is kept simple and covers only what is needed to prove the product works.

## 2. Tech Stack

| Tool | Purpose |
|---|---|
| Next.js (App Router) | Application framework, pages, routing and structure |
| React | Reusable, interactive UI components |
| Tailwind CSS | Styling and responsive layouts |
| Git | Version control |
| GitHub | Code hosting and team collaboration |
| Vercel | Deployment and hosting of the frontend |

## 3. Setup Steps

```bash
npx create-next-app@latest experien-frontend
# Options: TypeScript (yes), Tailwind CSS (yes), ESLint (yes), App Router (yes)
cd experien-frontend
npm run dev
```

1. Initialise Git and push to the team GitHub repository.
2. Create a `develop` branch for integration; use feature branches (`feature/industry-selection`) and open pull requests.
3. Import the repository into Vercel for automatic preview and production deployments.
4. Store configuration in environment variables (never committed):

```
NEXT_PUBLIC_API_BASE_URL=
NEXT_PUBLIC_PAYMENT_PUBLIC_KEY=
```

## 4. Page and Route Map

Each route maps to a section of the MVP scope.

| Route | Page | Scope section |
|---|---|---|
| `/` | Landing / start experience | Landing |
| `/industries` | Browse and select an industry | 5.1 Industry Selection |
| `/industries/[industry]` | Courses within the industry | 5.2 Course Discovery |
| `/courses/[slug]` | Course details, curriculum and price | 5.3, 5.4 Course Details and Curriculum |
| `/checkout/[slug]` | Payment and enrolment | 5.5 Payment & Enrolment |
| `/checkout/success` | Payment confirmation | 5.5 |
| `/login`, `/register` | Learner access | Learner registration/access |
| `/dashboard` | Enrolled courses and progress | 5.6 Learner Dashboard |
| `/learn/[course]` | Course curriculum and module list | 5.7 Learning Environment |
| `/learn/[course]/[module]` | Video, documents and quiz for a module | 5.8 to 5.11 |
| `/admin` | Internal content management (if built) | 8 Admin Functionality |

## 5. Folder Structure

```
experien-frontend/
├── app/
│   ├── page.tsx                      # Landing
│   ├── industries/
│   │   ├── page.tsx
│   │   └── [industry]/page.tsx
│   ├── courses/[slug]/page.tsx
│   ├── checkout/
│   │   ├── [slug]/page.tsx
│   │   └── success/page.tsx
│   ├── (auth)/login/page.tsx
│   ├── (auth)/register/page.tsx
│   ├── dashboard/page.tsx
│   ├── learn/[course]/
│   │   ├── page.tsx
│   │   └── [module]/page.tsx
│   └── layout.tsx
├── components/
│   ├── ui/                           # Button, Card, Modal, Input
│   ├── layout/                       # Navbar, Footer
│   ├── industry/                     # IndustryCard, IndustryGrid
│   ├── course/                       # CourseCard, CourseHeader, Curriculum
│   ├── checkout/                     # OrderSummary, PaymentButton
│   ├── dashboard/                    # EnrolledCourseCard, ProgressBar
│   └── learning/                     # VideoPlayer, DocumentViewer, Quiz, ModuleSidebar
├── lib/
│   ├── api/                          # API client and endpoint functions
│   ├── hooks/                        # useAuth, useCourse, useProgress
│   └── utils/                        # formatters and helpers
├── types/                            # Shared TypeScript types
├── public/                           # Static assets
└── .env.local                        # Local environment variables (not committed)
```

## 6. Core Components

| Component | Responsibility |
|---|---|
| `IndustryCard` | Displays an industry and links to its courses |
| `CourseCard` | Course summary in listings: title, industry, duration, price |
| `Curriculum` | Ordered list of modules with their contents |
| `PaymentButton` | Starts payment and handles the result |
| `EnrolledCourseCard` | Dashboard card showing course status and progress |
| `ProgressBar` | Basic progress display (Not Started / In Progress / Completed) |
| `VideoPlayer` | Basic video playback inside the learning environment |
| `DocumentViewer` | Access to PDFs, notes, images and templates |
| `Quiz` | Questions, answer options, submission, basic score and result |
| `ModuleSidebar` | Navigation between modules in a course |

## 7. Data Model (Frontend Types, Draft)

```ts
type Industry = { id: string; name: string; description: string };

type Course = {
  id: string; slug: string; title: string; industryId: string;
  overview: string; objectives: string[]; duration: string;
  requirements: string[]; price: number; modules: Module[];
};

type Module = {
  id: string; title: string;
  videoUrl?: string; documents: { name: string; url: string }[];
  quizId?: string;
};

type Enrolment = {
  courseId: string;
  status: "not_started" | "in_progress" | "completed";
  moduleProgress: Record<string, "not_started" | "in_progress" | "completed">;
};
```

These types are drafts and will be aligned with the backend developers' API and data design.

## 8. Backend Integration Plan

- All API calls go through one client in `lib/api/`, so the base URL, headers and error handling live in one place.
- Until the backend is ready, components use mock data in the same shape as the types above, so switching to real endpoints needs minimal changes.
- Expected endpoints (to be confirmed with the backend team): industries, courses, course details, auth, payment initiation and confirmation, enrolments, progress, and quiz submission.
- Protected pages (`/dashboard`, `/learn/*`) require a logged-in learner with an active enrolment.

## 9. Design and Responsiveness

- Mobile-first with Tailwind breakpoints.
- Designs from the Product Designer will be implemented once the wireframes and high-fidelity designs are approved. Shared tokens (colours, spacing, typography) will go in the Tailwind config.

## 10. Out of Scope

Following the MVP scope, the frontend will not include messaging, live classes, forums, advanced analytics, AI features, gamification, subscriptions or a mobile app.

## 11. Assumptions and Dependencies

| Item | Dependency |
|---|---|
| UI implementation | Approved wireframes and high-fidelity designs from the Product Designer |
| Live data | Backend APIs and data structures from the Backend Developers |
| Payment | Payment provider selected and integrated by the backend team |
| Content | Sample courses, videos and documents for demonstration |

## 12. Next Steps (Week 2)

Produce the **Frontend Implementation Plan**: component build order, task breakdown and timeline aligned to the project phases.
