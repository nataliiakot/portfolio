import { hrStory } from './hr-story.ts';
import { novaStory } from './nova-story.ts';
import { steadyStory } from './steady-story.ts';
import { fleetoStory } from './fleeto-story.ts';
import { cleanlyStory } from './cleanly-story.ts';
export interface ProjectImage {
  src: string; alt: string; width: number; height: number; caption?: string;
}
export type CaseBlock =
  | { type: 'heading'; text: string; level: 2 | 3 }
  | { type: 'paragraph'; text: string; emphasis?: boolean }
  | { type: 'list'; items: string[] }
  | { type: 'image'; image: ProjectImage }
  | { type: 'gallery'; images: ProjectImage[]; presentation?: 'screens' }
  | { type: 'evidence'; title: string; image: ProjectImage }
  | { type: 'table'; title: string; columns: string[]; rows: string[][] }
  | { type: 'decision'; title: string; items: { label: string; text: string }[] }
  | { type: 'flow'; layout: 'paths' | 'sequence'; title: string; start?: string; end?: string; note?: string; items: { title: string; steps: string[] }[] }
  | { type: 'metrics'; title: string; items: { value: string; label: string; detail: string }[] };
export interface Project {
  headline?: string;
  story?: CaseBlock[];
  slug: string; title: string; category: string; summary: string; draft?: boolean;
  textOnly?: boolean; solution?: string[]; features?: string[]; sourceUrl?: string;
  cover?: ProjectImage; role?: string; scope?: string; team?: string; year?: string; duration?: string;
  context?: string[]; approach?: string[]; visuals?: ProjectImage[]; results?: string[];
}

// Add only real, supplied case studies. See docs/content-guide.md for the data shape.
export const projects: Project[] = [
  {
    "slug": "cleanly",
    "team": "1 designer, 1 project manager, 1 developer.",
    "title": "Cleanly",
    "category": "Facility Services Management",
    "summary": "A cleaning service app designed from scratch. Interviews revealed concern about visiting unverified clients, so I proposed a personal client network with manager approval for new contacts. The app connects job discovery, confirmation, and communication.",
    "scope": "1 designer",
    "approach": [
      "UX research",
      "Information architecture",
      "User flows",
      "Wireframing",
      "UI mobile app design",
      "Role-based approval workflow design",
      "Interactive prototyping",
      "Design system and UI kit",
      "Preparing designs for development"
    ],
    "results": [
      "First-month analytics recorded 30% less time from opening the app to client confirmation, compared with similar apps users had previously used."
    ],
    "textOnly": true,
    "story": cleanlyStory,
    "headline": "A cleaning app built around client trust",
    "role": "UX/UI & Product Designer"
  },
  {
    "slug": "hr-boost",
    "team": "3 designers, 1 project manager, 4 developers.",
    "title": "HR System",
    "category": "Human resources, Employee management",
    "summary": "An HR platform built from scratch to bring work from two systems, spreadsheets, and notes into one workspace. I led the design of connected employee records and HR workflows, with roles and permissions defining what each person sees.",
    "scope": "3 designers",
    "approach": [
      "Supervising and mentoring the design team",
      "UX research",
      "Information architecture",
      "User flows",
      "Wireframing",
      "UI web app design",
      "Dashboard design",
      "Design system and UI kit",
      "Interactive prototyping",
      "Preparing designs for development"
    ],
    "results": [
      "Project analytics recorded 45% less time spent on routine HR administration after the first month of testing.",
      "Project analytics recorded 7% less time spent on employee onboarding after the first month of testing."
    ],
    "textOnly": true,
    "story": hrStory,

    "headline": "One workspace, focused by role",
    "role": "UX/UI & Product Designer"
  },
  {
    "slug": "fleeto",
    "team": "2 designers, a project manager, and developers.",
    "title": "Fleeto",
    "category": "Transportation, Logistics",
    "summary": "A web platform that helps businesses manage fleet operations in one place. Users can monitor vehicle locations, manage drivers and trips, track maintenance and fuel usage, and review operational performance through dashboards and reports.",
    "scope": "2 designers",
    "approach": [
      "Supervising and mentoring the design team",
      "Information architecture",
      "User flows",
      "Wireframing",
      "UI web app design",
      "Dashboard and data visualization design",
      "Design system and UI kit",
      "Preparing designs for development"
],
    "results": ["A connected workspace for fleet monitoring, trip review, driver scheduling, and access administration."],
    "cover": {
      "src": "/assets/projects/fleeto.png",
      "alt": "Fleeto fleet operations dashboard and live vehicle tracking map",
      "width": 283,
      "height": 213
    },
    "textOnly": true,
    "story": fleetoStory,
    "headline": "Fleet operations in one workspace",
    "role": "UX/UI & Product Designer"
  },
  {
    "slug": "nova-bank",
    "team": "Lead designer, project manager, and developers.",
    "title": "Nova Bank",
    "category": "Mobile banking",
    "summary": "Nova Bank is a modern mobile banking application designed to help users manage their finances quickly, securely, and effortlessly. The app combines everyday banking features such as money transfers, bill payments, card management, and spending analytics into one intuitive experience.",
    "role": "UX/UI & Product Designer",
    "context": [
      "Many mobile banking applications are overloaded with complex navigation and lengthy transaction flows, making common financial tasks slower than they should be. Users need fast access to their accounts, payments, and spending insights without sacrificing security."
    ],
    "solution": [
      "The design groups everyday banking tasks into clear modules, with balances, recipients, transaction details, and account controls available in context."
    ],
    "approach": [
      "Designing the end-to-end mobile experience",
      "Wireframing",
      "High-fidelity UI design",
      "Design system components"
],
    "features": [
      "Account management",
      "Card management",
      "Transaction history",
      "Bill payments",
      "Spending analytics"
    ],

    "textOnly": true,
    "story": novaStory,
    "headline": "Everyday banking made clear"
  },
  {
    "slug": "fitness-app",
    "team": "Lead designer, project manager, and developers.",
    "title": "Steady",
    "category": "Fitness",
    "summary": "A mobile fitness companion connecting approachable workouts, daily activity, nutrition, and AI guidance around sustainable habits.",
    "textOnly": true,
    "story": steadyStory,
    "headline": "A fitness app for daily routines",
    "role": "UX/UI & Product Designer"
  }
];

export function publishedProjects(items: readonly Project[]): Project[] {
  const seen = new Set<string>();
  return items.filter((project) => {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(project.slug)) throw new Error(`Invalid project slug: ${project.slug}`);
    if (seen.has(project.slug)) throw new Error(`Duplicate project slug: ${project.slug}`);
    seen.add(project.slug);
    const hasStory = [project.context, project.approach, project.results].some((section) => section?.some((paragraph) => paragraph.trim()))
      || project.story?.some(block => block.type === 'paragraph' ? block.text.trim() : block.type === 'list' && block.items.some(item => item.trim()));
    const cover = project.cover;
    return !project.draft && Boolean(project.title.trim() && project.category.trim() && project.summary.trim()
      && (project.textOnly === true || (cover?.src.trim() && cover.alt.trim() && cover.width > 0 && cover.height > 0)) && hasStory);
  });
}
export const published = publishedProjects(projects);
