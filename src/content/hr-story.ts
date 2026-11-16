import type { CaseBlock } from './projects';

// Hypotheses explain the design intent; they are not claims of tested effects.
export const hrTranslations: Record<string, string> = {
  "A shared UI system across the HR platform.": "Спільна UI-система для HR-платформи.",
  "A shared timeline could help HR assess a leave request alongside team availability.": "Спільна шкала часу могла допомогти HR оцінювати відпустку з урахуванням доступності команди.",
  "A step-by-step flow could make access rules easier to review before assigning people.": "Покроковий сценарій міг спростити перевірку доступів до призначення людей.",
  "Build processes from shared templates": "Будувати процеси зі спільних шаблонів",
  "Core need": "Ключова потреба",
  "Design response": "Відповідь у дизайні",
  "Design result": "Результат дизайну",
  "Give each task a clear place": "Дати кожному завданню зрозуміле місце",
  "HR can review a person’s details and open their related work from the same profile.": "HR може переглянути дані людини й перейти до пов’язаних завдань із того самого профілю.",
  "HR can review permissions before the role changes an employee’s access.": "HR може перевірити права до того, як роль змінить доступи співробітника.",
  "HR tasks depend on connected information: a leave request needs dates and a balance; a planned action needs an owner. I focused on keeping this context together.": "HR-завдання залежать від пов’язаних даних: запиту на відпустку потрібні дати й баланс, запланованій дії — відповідальний. Я зосередилася на збереженні цього контексту.",
  "Hypothesis": "Гіпотеза",
  "I designed a team schedule and kept company structure and working-hour reports in separate views.": "Я спроєктувала розклад команди й відділила структуру компанії та звіти робочих годин в окремі представлення.",
  "I gave tasks, calendar events, and mood reports separate views, so each page answers one main question.": "Я відділила задачі, події календаря й звіти настрою, щоб кожна сторінка відповідала на одне головне питання.",
  "I grouped feedback from 50 employees by product area and ranked improvements by priority and effort. Separately, HR managers tested how easily and quickly they could complete tasks.": "Я згрупувала відгуки 50 співробітників за розділами продукту й розставила пріоритети покращень за важливістю та зусиллями. Окремо HR-менеджери тестували зручність і швидкість виконання завдань.",
  "I mapped company data, documents, recruitment, time tracking, and settings into clear navigation groups. This gave the team a shared structure before detailed UI work.": "Я об’єднала дані компанії, документи, наймання, облік часу й налаштування у зрозумілі групи навігації. Це дало команді спільну структуру до роботи над детальним UI.",
  "I mapped creating or copying a role, selecting permissions, and adding people now or later.": "Я пропрацювала створення або копіювання ролі, вибір доступів і додавання людей одразу або пізніше.",
  "I placed contact details and leave balances first, with tabs for actions, requests, reports, and comments.": "Я винесла контакти й баланс відпустки нагору та додала вкладки дій, запитів, звітів і коментарів.",
  "I separated templates from full processes and designed a picker with search, categories, and template types.": "Я відділила шаблони від повних процесів і спроєктувала вибір із пошуком, категоріями й типами.",
  "I worked on research, navigation, user flows, web UI, the design system, and handoff. I also guided the design team across 450+ screens.": "Я працювала над дослідженням, навігацією, сценаріями, вебінтерфейсом, дизайн-системою й передачею в розробку. Також я координувала дизайн-команду в роботі над 450+ екранами.",
  "Keep employee tasks together": "Об’єднати завдання співробітника",
  "Keeping balances and requests in one profile could reduce switching between pages.": "Баланси й запити в одному профілі могли зменшити переходи між сторінками.",
  "Make role setup easier to follow": "Зробити налаштування ролей зрозумілим",
  "My role": "Моя роль",
  "Onboarding and reviews can use the same building blocks, with a consistent way to create them.": "Онбординг і оцінювання можуть використовувати спільні елементи з узгодженим способом створення.",
  "Project measurement for employee onboarding.": "Заміри онбордингу співробітників у проєкті.",
  "Project measurement for routine HR tasks.": "Заміри рутинних HR-завдань у проєкті.",
  "Project measurements recorded 45% less time on routine HR administration and 7% less time on onboarding. My design work connected daily HR tasks through shared profiles, flows, and UI patterns.": "Заміри проєкту зафіксували на 45% менше часу на рутинне HR-адміністрування й на 7% — на онбординг. Мій дизайн пов’язав щоденні HR-завдання через спільні профілі, сценарії й UI-патерни.",
  "Research that shaped the structure": "Дослідження, що визначило структуру",
  "Result": "Результат",
  "Reusable documents, surveys, and tasks could support different HR processes without starting from scratch.": "Повторювані документи, опитування й задачі могли підтримувати різні HR-процеси без створення всього з нуля.",
  "Role": "Роль",
  "Scale the system, not just the screen count": "Масштабувати систему, а не лише кількість екранів",
  "Show the team behind each request": "Показати командний контекст запиту",
  "The case at a glance": "Кейс у цифрах",
  "The problem": "Проблема",
  "The schedule gives team context; reports provide the detail for a different task.": "Розклад дає командний контекст, а звіти — деталі для іншого завдання.",
  "What I changed": "Що я змінила",
  "For example, an HR manager reviewing leave needs to see both the person’s balance and the team’s schedule. I designed around these connected tasks, rather than treating profiles, requests, and calendars as separate features with no clear path between them.": "Наприклад, HR-менеджеру для перевірки відпустки потрібні баланс людини й розклад команди. Я будувала дизайн навколо цих пов’язаних завдань, замість окремих профілів, запитів і календарів без зрозумілого переходу між ними.",
  "At this scale, my role was also to keep decisions consistent across the product. A table, form, or status should be familiar when HR moves to another section. Shared components helped the team extend the system without redesigning every screen from the beginning.": "За такого масштабу я також відповідала за узгодженість рішень у продукті. Таблиця, форма чи статус мають бути знайомими при переході HR до іншого розділу. Спільні компоненти допомагали команді розширювати систему без створення кожного екрана з нуля.",
  "I used the analysis board to connect feedback with specific product areas and possible changes. The HR requirements table added another level of detail: which pages, sections, and actions the system needed. Together, they helped turn a broad feature list into clear design tasks.": "Я використала дошку аналізу, щоб пов’язати відгуки з конкретними розділами й можливими змінами. Таблиця HR-вимог додала деталей: потрібні сторінки, секції й дії. Разом вони допомогли перетворити широкий список функцій на зрозумілі дизайн-задачі.",
  "I worked from the main navigation to the detail of each section. The broad map helped explain the product to the team; the detailed structure showed where each page and action belonged. This gave us a common reference while building the UI.": "Я рухалася від основної навігації до деталей розділів. Загальна карта допомагала пояснити продукт команді, а детальна структура — визначити місце кожної сторінки й дії. Це стало спільною основою під час роботи над UI.",
  "In the interface, I placed the leave balance and contact details above the longer employee record. Tabs keep actions, requests, and reports close without showing all their content at once. This balances quick reference with access to the full employee history.": "В інтерфейсі я розмістила баланс відпустки й контакти над довшим записом співробітника. Вкладки тримають дії, запити й звіти поруч, не показуючи весь вміст одночасно. Це поєднує швидкий огляд із доступом до повної історії людини.",
  "A list works well for reviewing individual requests, but it does not show overlapping dates as clearly as a timeline. I used both views for different decisions. The timeline gives team context, while the list keeps request details and review actions easy to scan.": "Список зручний для перевірки окремих запитів, але перетини дат наочніші на шкалі часу. Я використала обидва представлення для різних рішень. Шкала дає командний контекст, а список — деталі запиту й дії для перевірки.",
  "The role flow includes two choices that matter during setup: create a new role or copy a similar one, then add employees now or later. I made these options part of the flow so admins can prepare access rules before applying them to people.": "Сценарій ролей містить два важливі вибори: створити нову роль або скопіювати схожу, а потім додати людей одразу чи пізніше. Я включила ці опції в процес, щоб адміністратори могли підготувати правила до призначення співробітникам.",
  "The journey map also covers temporary access and role removal. These steps helped me consider the full life of a role, not only its creation. The goal was to make changes to access understandable before they affect an employee.": "Карта шляху також охоплює тимчасові доступи й видалення ролей. Це допомогло врахувати весь життєвий цикл ролі, а не лише її створення. Мета — пояснювати зміни доступів до того, як вони вплинуть на співробітника.",
  "A business process brings several pieces together: a document, a survey, and tasks assigned to people. Keeping those pieces reusable means the same template can support onboarding, a review, or another HR process. The process defines the order; the template defines the content.": "Бізнес-процес поєднує кілька елементів: документ, опитування й задачі для людей. Повторне використання дозволяє застосовувати той самий шаблон в онбордингу, оцінюванні чи іншому HR-процесі. Процес задає порядок, а шаблон — зміст.",
  "The screens below show how this structure reaches other parts of the product. Template selection uses search and clear types; assets use structured fields; the knowledge base uses cards and filters. I kept shared patterns where they helped, while giving each task the layout it needed.": "Екрани нижче показують, як структура працює в інших частинах продукту. Вибір шаблону використовує пошук і чіткі типи, майно — структуровані поля, а база знань — картки й фільтри. Я зберігала спільні патерни там, де вони корисні, й адаптувала макет до завдання.",
  "These project outcomes are separate from the research with 50 employees and the count of 450+ screens. My contribution was the design structure behind the daily work: employee context, clear steps, and reusable patterns that connect the platform’s many areas.": "Ці результати проєкту відокремлені від дослідження з 50 співробітниками й обсягу в 450+ екранів. Мій внесок — структура щоденної роботи: контекст співробітника, зрозумілі кроки й повторювані патерни, що пов’язують розділи платформи."
};

export const hrStory: CaseBlock[] = [
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
    "level": 2,
    "text": "The problem"
  },
  {
    "type": "paragraph",
    "text": "HR tasks depend on connected information: a leave request needs dates and a balance; a planned action needs an owner. I focused on keeping this context together."
  },
  {
    "type": "paragraph",
    "text": "For example, an HR manager reviewing leave needs to see both the person’s balance and the team’s schedule. I designed around these connected tasks, rather than treating profiles, requests, and calendars as separate features with no clear path between them."
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
    "level": 2,
    "text": "My role"
  },
  {
    "type": "paragraph",
    "text": "I worked on research, navigation, user flows, web UI, the design system, and handoff. I also guided the design team across 450+ screens."
  },
  {
    "type": "paragraph",
    "text": "At this scale, my role was also to keep decisions consistent across the product. A table, form, or status should be familiar when HR moves to another section. Shared components helped the team extend the system without redesigning every screen from the beginning."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Research that shaped the structure"
  },
  {
    "type": "paragraph",
    "text": "I grouped feedback from 50 employees by product area and ranked improvements by priority and effort. Separately, HR managers tested how easily and quickly they could complete tasks."
  },
  {
    "type": "paragraph",
    "text": "I used the analysis board to connect feedback with specific product areas and possible changes. The HR requirements table added another level of detail: which pages, sections, and actions the system needed. Together, they helped turn a broad feature list into clear design tasks."
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
    "level": 2,
    "text": "Give each task a clear place"
  },
  {
    "type": "paragraph",
    "text": "I mapped company data, documents, recruitment, time tracking, and settings into clear navigation groups. This gave the team a shared structure before detailed UI work."
  },
  {
    "type": "paragraph",
    "text": "I worked from the main navigation to the detail of each section. The broad map helped explain the product to the team; the detailed structure showed where each page and action belonged. This gave us a common reference while building the UI."
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
    "type": "decision",
    "title": "Keep employee tasks together",
    "items": [
      {
        "label": "Hypothesis",
        "text": "Keeping balances and requests in one profile could reduce switching between pages."
      },
      {
        "label": "What I changed",
        "text": "I placed contact details and leave balances first, with tabs for actions, requests, reports, and comments."
      },
      {
        "label": "Design result",
        "text": "HR can review a person’s details and open their related work from the same profile."
      }
    ]
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
    "text": "In the interface, I placed the leave balance and contact details above the longer employee record. Tabs keep actions, requests, and reports close without showing all their content at once. This balances quick reference with access to the full employee history."
  },
  {
    "type": "decision",
    "title": "Show the team behind each request",
    "items": [
      {
        "label": "Hypothesis",
        "text": "A shared timeline could help HR assess a leave request alongside team availability."
      },
      {
        "label": "What I changed",
        "text": "I designed a team schedule and kept company structure and working-hour reports in separate views."
      },
      {
        "label": "Design result",
        "text": "The schedule gives team context; reports provide the detail for a different task."
      }
    ]
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
    "text": "A list works well for reviewing individual requests, but it does not show overlapping dates as clearly as a timeline. I used both views for different decisions. The timeline gives team context, while the list keeps request details and review actions easy to scan."
  },
  {
    "type": "paragraph",
    "text": "I gave tasks, calendar events, and mood reports separate views, so each page answers one main question."
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
    "type": "decision",
    "title": "Make role setup easier to follow",
    "items": [
      {
        "label": "Hypothesis",
        "text": "A step-by-step flow could make access rules easier to review before assigning people."
      },
      {
        "label": "What I changed",
        "text": "I mapped creating or copying a role, selecting permissions, and adding people now or later."
      },
      {
        "label": "Design result",
        "text": "HR can review permissions before the role changes an employee’s access."
      }
    ]
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
    "type": "paragraph",
    "text": "The role flow includes two choices that matter during setup: create a new role or copy a similar one, then add employees now or later. I made these options part of the flow so admins can prepare access rules before applying them to people."
  },
  {
    "type": "paragraph",
    "text": "The journey map also covers temporary access and role removal. These steps helped me consider the full life of a role, not only its creation. The goal was to make changes to access understandable before they affect an employee."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Scale the system, not just the screen count"
  },
  {
    "type": "decision",
    "title": "Build processes from shared templates",
    "items": [
      {
        "label": "Hypothesis",
        "text": "Reusable documents, surveys, and tasks could support different HR processes without starting from scratch."
      },
      {
        "label": "What I changed",
        "text": "I separated templates from full processes and designed a picker with search, categories, and template types."
      },
      {
        "label": "Design result",
        "text": "Onboarding and reviews can use the same building blocks, with a consistent way to create them."
      }
    ]
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
    "text": "A business process brings several pieces together: a document, a survey, and tasks assigned to people. Keeping those pieces reusable means the same template can support onboarding, a review, or another HR process. The process defines the order; the template defines the content."
  },
  {
    "type": "paragraph",
    "text": "The screens below show how this structure reaches other parts of the product. Template selection uses search and clear types; assets use structured fields; the knowledge base uses cards and filters. I kept shared patterns where they helped, while giving each task the layout it needed."
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
    "level": 2,
    "text": "Result"
  },
  {
    "type": "metrics",
    "title": "The case at a glance",
    "items": [
      {
        "value": "−45%",
        "label": "Routine HR administration time",
        "detail": "Project measurement for routine HR tasks."
      },
      {
        "value": "−7%",
        "label": "Employee onboarding time",
        "detail": "Project measurement for employee onboarding."
      },
      {
        "value": "450+",
        "label": "High-fidelity screens",
        "detail": "A shared UI system across the HR platform."
      }
    ]
  },
  {
    "type": "paragraph",
    "text": "Project measurements recorded 45% less time on routine HR administration and 7% less time on onboarding. My design work connected daily HR tasks through shared profiles, flows, and UI patterns."
  },
  {
    "type": "paragraph",
    "text": "These project outcomes are separate from the research with 50 employees and the count of 450+ screens. My contribution was the design structure behind the daily work: employee context, clear steps, and reusable patterns that connect the platform’s many areas."
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
];
