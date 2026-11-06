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
  cover?: ProjectImage; role?: string; scope?: string; year?: string; duration?: string;
  context?: string[]; approach?: string[]; visuals?: ProjectImage[]; results?: string[];
}

// Add only real, supplied case studies. See docs/content-guide.md for the data shape.
export const projects: Project[] = [
  {
    "slug": "cleanly",
    "title": "Cleanly",
    "category": "Facility Services Management",
    "summary": "A mobile service management platform and marketplace that connects cleaners, clients, and managers in one workflow. Cleaners can discover requests, review job and location details, manage assignments, and communicate with clients. Managers approve requests from unverified clients before assignment, keeping new client relationships under company control.",
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
      "In a comparison with other applications, a cleaner could find a job and receive confirmation 30% faster."
    ],
    "textOnly": true,
    "story": cleanlyStory,
    "headline": "mobile platform connecting cleaning company managers, clients, and employees in one operational network",
    "role": "UX/UI & Product Designer"
  },
  {
    "slug": "hr-boost",
    "title": "HR System",
    "category": "Human resources, Employee management",
    "summary": "An HR management platform that centralizes employee information and supports everyday people operations. Users can manage employee profiles, recruitment and onboarding, attendance and leave, performance reviews, and company structure through a unified workspace.",
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
      "Reduced time spent on routine HR administration by 45% through centralized employee records and streamlined workflows.",
      "Shortened employee onboarding time by 7%, helping HR teams support new hires more efficiently."
    ],
    "textOnly": true,
    "story": [
    {
        "type": "image",
        "image": {
            "src": "hr-system-screen-1.png",
            "alt": "HR System — dashboard, employee profile, and absence requests",
            "width": 9440,
            "height": 2048
        }
    },
    {
        "type": "heading",
        "text": "One employee, many connected HR tasks",
        "level": 2
    },
    {
        "type": "paragraph",
        "text": "An employee record rarely answers an HR question on its own. A leave request needs a balance and dates; a planned action needs an employee and an owner. HR System brings these related tasks into one workspace for HR managers and employees."
    },
    {
        "type": "paragraph",
        "text": "My focus was continuity: keep the employee context available as HR moves from information to a decision and then to an action.",
        "emphasis": true
    },
    {
        "type": "table",
        "title": "Two roles, one connected workspace",
        "columns": [
            "Role",
            "Core need",
            "Design response"
        ],
        "rows": [
            [
                "HR manager",
                "Find employee information, review requests, and coordinate team availability.",
                "An employee profile connecting details, balances, actions, and requests, supported by absence lists and a shared schedule."
            ],
            [
                "Employee",
                "Check leave balances, submit requests, and keep track of personal tasks and events.",
                "A personal dashboard with balances, request creation, tasks, and upcoming events."
            ]
        ]
    },
    {
        "type": "heading",
        "text": "My role",
        "level": 2
    },
    {
        "type": "paragraph",
        "text": "As UX/UI & Product Designer, I worked across research, information architecture, user flows, web interface design, the design system, prototyping, and development handoff. The scope included supervising and mentoring the design team."
    },
    {
        "type": "heading",
        "text": "Start with the work people need to do",
        "level": 2
    },
    {
        "type": "paragraph",
        "text": "Quantitative research involved 50 employees who use the system. I processed the responses, grouped feedback by product area, and mapped potential improvements by priority and time. Separately, HR managers took part in usability testing focused on ease of use and task completion speed."
    },
    {
        "type": "paragraph",
        "text": "The analysis board records how the collected information was organized. Beside it, the HR requirements table translates the scope into pages, sections, and actions: reviewing requests, finding absences, managing tasks, and working with candidates."
    },
    {
        "type": "gallery",
        "images": [
            {
                "src": "hr-system-research-analysis.png",
                "alt": "Processing results of quantitative research with 50 employee users: grouped feedback and priority/time mapping",
                "width": 1438,
                "height": 1118
            },
            {
                "src": "hr-system-hr-admin.png",
                "alt": "HR administrator pages, sections, and available actions",
                "width": 3136,
                "height": 7146
            }
        ]
    },
    {
        "type": "heading",
        "text": "Give a broad product a predictable structure",
        "level": 2
    },
    {
        "type": "paragraph",
        "text": "The system covers company information, documents, activities, recruitment, time tracking, and settings. I mapped those areas before detailing individual screens, so each task had a defined place in the product."
    },
    {
        "type": "paragraph",
        "text": "The base structure shows the main navigation groups; the detailed map expands their pages and connections. These are two levels of the same architecture, from an overview to implementation detail."
    },
    {
        "type": "gallery",
        "images": [
            {
                "src": "hr-system-structure.png",
                "alt": "Base information architecture of HR System",
                "width": 4416,
                "height": 2938
            },
            {
                "src": "hr-system-architecture.png",
                "alt": "Detailed HR System architecture and connected modules",
                "width": 12676,
                "height": 3384
            }
        ]
    },
    {
        "type": "heading",
        "text": "Keep employee information close to the next action",
        "level": 2
    },
    {
        "type": "paragraph",
        "text": "For an HR manager, looking up a person is often the beginning of a task. I organized the employee profile around both reference information and ongoing work: personal details, actions, requests, reports, and comments."
    },
    {
        "type": "gallery",
        "images": [
            {
                "src": "hr-system-employee-profile.png",
                "alt": "Employee profile information architecture: personal details, actions, requests, reports, and comments",
                "width": 4416,
                "height": 3098
            }
        ]
    },
    {
        "type": "paragraph",
        "text": "In the opening product screens, the profile places contact details and the leave balance above the detailed information. Tabs provide access to the employee’s actions and requests. The dashboard and absence list beside it show the wider queues from which HR can start work."
    },
    {
        "type": "heading",
        "text": "Put an absence request in its team context",
        "level": 2
    },
    {
        "type": "paragraph",
        "text": "A request contains one person’s dates, while planning involves the whole team. The schedule puts employee absences on a shared timeline. Company structure provides the organizational view, and time statistics provide a separate view of recorded working hours."
    },
    {
        "type": "image",
        "image": {
            "src": "hr-system-screen-2.png",
            "alt": "HR System — company structure, schedule, and working time statistics",
            "width": 9440,
            "height": 2048
        }
    },
    {
        "type": "paragraph",
        "text": "The next views address different questions: what work is in progress, what is scheduled, and how employees report their mood. Keeping tasks, the calendar, and mood statistics distinct gives each type of information its own readable structure."
    },
    {
        "type": "image",
        "image": {
            "src": "hr-system-screen-3.png",
            "alt": "HR System — projects and tasks, calendar, and employee mood statistics",
            "width": 9440,
            "height": 2048
        }
    },
    {
        "type": "heading",
        "text": "Make permissions an explicit workflow",
        "level": 2
    },
    {
        "type": "paragraph",
        "text": "Managing roles requires more than naming a permission set. The journey map follows creating a role, setting permissions, assigning an employee, granting temporary access, and deleting a role. It records actions, goals, friction, and opportunities at each step."
    },
    {
        "type": "paragraph",
        "text": "The flow makes the alternatives explicit: create a new role or duplicate a similar one, choose accessible sections, and assign people now or later. The confirmation path also accounts for changing an employee’s existing role."
    },
    {
        "type": "gallery",
        "images": [
            {
                "src": "hr-system-role-journey.png",
                "alt": "Journey map for role creation, permissions, employee assignment, temporary access, and role deletion",
                "width": 7850,
                "height": 3852
            },
            {
                "src": "hr-system-role-flow.png",
                "alt": "Flow for creating or duplicating a role, configuring permissions, and assigning employees",
                "width": 7620,
                "height": 1000
            }
        ]
    },
    {
        "type": "heading",
        "text": "Build repeated work from reusable templates",
        "level": 2
    },
    {
        "type": "paragraph",
        "text": "Onboarding, reviews, and other HR processes combine documents, surveys, and assigned actions. I separated reusable templates from the processes that bring them together, so the same building blocks could support different workflows."
    },
    {
        "type": "gallery",
        "images": [
            {
                "src": "hr-system-business-processes.png",
                "alt": "Business processes and reusable survey, document, and HR task templates",
                "width": 4192,
                "height": 2400
            }
        ]
    },
    {
        "type": "paragraph",
        "text": "The template picker below brings that structure into the interface: search, categories, template types, and an option to create a template. Alongside it, the asset form and knowledge base show how structured fields and filtering extend to other areas of the system."
    },
    {
        "type": "image",
        "image": {
            "src": "hr-system-screen-4.png",
            "alt": "HR System — reusable templates, asset properties, and knowledge base",
            "width": 9440,
            "height": 2048
        }
    },
    {
        "type": "heading",
        "text": "Outcomes and what the work demonstrated",
        "level": 2
    },
    {
        "type": "metrics",
        "title": "The case at a glance",
        "items": [
            {
                "value": "−45%",
                "label": "Routine HR administration time",
                "detail": "Less time spent on routine HR administration, recorded in project measurements."
            },
            {
                "value": "−7%",
                "label": "Employee onboarding time",
                "detail": "Less time spent on employee onboarding, recorded in project measurements."
            },
            {
                "value": "450+",
                "label": "High-fidelity screens",
                "detail": "Connected workflows across employee management, recruitment, scheduling, documents, and administration."
            }
        ]
    },
    {
        "type": "paragraph",
        "text": "The central design challenge was keeping related work connected while giving different tasks the structure they needed. The profile, schedule, permission flow, and template system show that principle at different scales."
    },
    {
        "type": "paragraph",
        "text": "The type selector distinguishes surveys, documents, HR tasks, and business processes before creation starts. The recruitment screen applies a different structure: candidates move through named stages, with actions available from each candidate card."
    },
    {
        "type": "image",
        "image": {
            "src": "hr-system-screen-5.png",
            "alt": "HR System — template types and recruitment pipeline",
            "width": 6160,
            "height": 2048,
            "caption": "A shared visual language supports the breadth of the HR workspace."
        }
    }
],

    "headline": "Making a large HR platform work as one connected workspace",
    "role": "UX/UI & Product Designer"
  },
  {
    "slug": "fleeto",
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
    "headline": "Turning fleet data into decisions operators can act on",
    "role": "UX/UI & Product Designer"
  },
  {
    "slug": "nova-bank",
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
    "headline": "Making everyday banking easier to navigate without hiding security"
  },
  {
    "slug": "fitness-app",
    "title": "Steady",
    "category": "Fitness",
    "summary": "A mobile fitness companion connecting approachable workouts, daily activity, nutrition, and AI guidance around sustainable habits.",
    "textOnly": true,
    "story": steadyStory,
    "headline": "Build a routine that feels possible to repeat",
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
