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
    "text": "HR managers worked across two systems and still needed spreadsheets and notes alongside them. Information got lost between those places, and keeping everyday work up to date took time."
  },
  {
    "type": "paragraph",
    "text": "Employees faced a different kind of friction: parts of the old system were hard to understand, and people forgot to track their time. The brief was to build a new platform from scratch that brought HR and employees into one workspace."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "My role and design focus"
  },
  {
    "type": "paragraph",
    "text": "As the sole designer, I worked with the project manager and four developers across 450+ screens. I connected research, information architecture, flows, and reusable UI through implementation."
  },
  {
    "type": "paragraph",
    "text": "My main design decision was to combine the work in one system while using roles and permissions to control what each person sees. A large platform still needed to feel focused during a small daily task."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Research that shaped the structure"
  },
  {
    "type": "paragraph",
    "text": "I analysed feedback from 50 employees, grouped it by product area, and compared priorities with the effort needed to address them. HR managers also took part in usability and task-speed testing, adding context from their daily work."
  },
  {
    "type": "list",
    "items": [
      "Employees did not understand some parts of the systems they already used.",
      "Time tracking was easy to forget during the working day.",
      "HR still depended on spreadsheets and notes outside the two systems, making information harder to keep together."
    ]
  },
  {
    "type": "paragraph",
    "text": "The findings pointed to two connected needs: bring scattered work into one platform, then keep each workspace relevant to its role. I used the analysis and requirements map to connect those needs to the platform structure."
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
    "text": "Bring the work together before designing the pages"
  },
  {
    "type": "paragraph",
    "text": "Before designing individual pages, I mapped employee information, recruitment, documents, requests, time tracking, and settings. The shared structure connected tasks that HR had previously managed across separate tools."
  },
  {
    "type": "paragraph",
    "text": "I developed the broad map into a detailed architecture. This gave the project team a common reference for where information belongs and how people move between related tasks."
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
    "level": 2,
    "text": "Let the role define the workspace"
  },
  {
    "type": "paragraph",
    "text": "HR managers and employees use different sets of functions. I used roles and permissions to define which functions appear in each workspace, keeping the shared system focused on the work each person needs to do."
  },
  {
    "type": "table",
    "title": "One platform, different responsibilities",
    "columns": [
      "Role",
      "Core need",
      "Design response"
    ],
    "rows": [
      [
        "HR manager",
        "Keep employee information and daily HR work together.",
        "Connected employee profiles, requests, schedules, and processes, with access defined by role."
      ],
      [
        "Employee",
        "Understand where to complete personal tasks without a crowded interface.",
        "A focused view of the information and actions available to their role."
      ]
    ]
  },
  {
    "type": "paragraph",
    "text": "I expected role-based views to make the shared platform easier to navigate. I mapped role setup as a sequence: create or copy a role, choose permissions, then assign employees now or later."
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
    "text": "I separated permission setup from assigning people so the rules can be reviewed first. The flow also covers temporary access and role removal, keeping later changes part of the design."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Map recurring processes before building the screens"
  },
  {
    "type": "paragraph",
    "text": "I also mapped how recurring HR processes use documents, surveys, and tasks. The map distinguishes a process from its reusable templates, giving the later interface a structure to follow."
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
    "type": "heading",
    "level": 2,
    "text": "Help time tracking become a daily habit"
  },
  {
    "type": "paragraph",
    "text": "Employees told us they forgot to track their time. I added reminders, a calendar tracker on the dashboard, and rewards for regular tracking throughout the week."
  },
  {
    "type": "paragraph",
    "text": "The calendar brings tracking progress into the employee’s everyday workspace. My hypothesis was that reminders could prompt the action, while visible progress and weekly rewards could encourage a more regular habit."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Keep the employee record close to the action"
  },
  {
    "type": "paragraph",
    "text": "With the structure defined, I used the employee profile to connect HR’s recurring tasks. Contact details, leave balances, requests, reports, and comments sit within the same record, giving HR a clear place to begin."
  },
  {
    "type": "paragraph",
    "text": "I placed contact details and leave balances first, with tabs for the longer record. HR can check the essentials and open a related task while keeping the employee context in view."
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
    "type": "heading",
    "level": 2,
    "text": "Give requests their team context"
  },
  {
    "type": "paragraph",
    "text": "A leave request is about one person, but the decision also depends on who else is away. I used request lists for individual details and a team timeline for overlapping dates. Each view supports a different part of the same decision."
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
    "text": "I kept tasks, calendar events, and mood reports in focused views within the shared workspace. Bringing information together did not require every type of information to appear on the same page."
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
    "level": 2,
    "text": "Scale the system, not just the screen count"
  },
  {
    "type": "paragraph",
    "text": "The process map also shaped the final template picker. Onboarding and reviews can use documents, surveys, and tasks, so I kept reusable content separate from the sequence that puts it to work."
  },
  {
    "type": "paragraph",
    "text": "Search, categories, and template types help HR choose the content. The process defines the order. I expected this separation to support different routines while allowing the team to reuse the same building blocks."
  },
  {
    "type": "paragraph",
    "text": "I reused UI patterns where the task was the same, while keeping layouts suited to their content: structured fields for assets, cards and filters for the knowledge base, and a searchable template picker. This helped me keep the growing platform consistent."
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
    "text": "One implemented system for daily HR work"
  },
  {
    "type": "paragraph",
    "text": "The platform was implemented. After the first month of testing, project analytics recorded 45% less time spent on routine HR administration and 7% less time spent on onboarding, compared with the previous workflow across several systems, spreadsheets, and notes."
  },
  {
    "type": "paragraph",
    "text": "These are project-level outcomes, separate from the research with 50 employees and the count of 450+ designed screens. My contribution was a shared structure for information and workflows, with role-based access keeping each person’s view focused."
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
