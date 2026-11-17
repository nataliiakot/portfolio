import type { CaseBlock } from './projects';

// Hypotheses explain the design intent; they are not claims of tested effects.
export const fleetoTranslations: Record<string, string> = {
  "A clear overview could help operators find issues before opening detailed records.": "Зрозумілий огляд міг допомогти операторам знаходити проблеми до відкриття детальних записів.",
  "A shared permission view could make role differences easier to check.": "Спільний огляд доступів міг спростити перевірку відмінностей між ролями.",
  "A vehicle location alone is not enough to plan work. Dispatchers also need its driver, trip, status, and last update. I brought these details into a connected workspace.": "Однієї локації авто недостатньо для планування роботи. Диспетчеру потрібні водій, поїздка, статус і час оновлення. Я об’єднала ці дані в пов’язаному робочому просторі.",
  "A weekly view could make gaps easier to spot than a shift list alone.": "Тижневий огляд міг показати прогалини зрозуміліше, ніж лише список змін.",
  "Administrator": "Адміністратор",
  "Admins can compare role permissions and check account status before changing access.": "Адміністратори можуть порівняти права ролей і перевірити статус акаунта до зміни доступів.",
  "An overview dashboard, vehicle records, shift coverage, and overtime trends.": "Дашборд, записи автомобілів, покриття змін і тенденції понаднормової роботи.",
  "Connect the map to the trip": "Пов’язати мапу з поїздкою",
  "Core need": "Ключова потреба",
  "Design response": "Відповідь у дизайні",
  "Design result": "Результат дизайну",
  "Dispatcher": "Диспетчер",
  "Find a vehicle, understand its status, and inspect the current trip.": "Знайти автомобіль, зрозуміти його стан і перевірити поточну поїздку.",
  "Fleet manager": "Менеджер автопарку",
  "Hypothesis": "Гіпотеза",
  "I added vehicle search, status filters, and a detail card with driver, speed, and current trip.": "Я додала пошук авто, фільтри статусів і картку з водієм, швидкістю й поточною поїздкою.",
  "I combined fleet totals, a map, recent events, and a vehicle table on the dashboard.": "Я поєднала загальні показники, мапу, останні події й таблицю автомобілів на дашборді.",
  "I delivered a shared UI for live tracking, trip review, shifts, and permissions. Three roles use the same filters, statuses, and table patterns.": "Я створила спільний UI для моніторингу, перегляду поїздок, змін і доступів. Три ролі використовують однакові фільтри, статуси й патерни таблиць.",
  "I designed a role matrix, reusable permission profiles, and clear user status labels.": "Я спроєктувала матрицю ролей, повторювані профілі доступу й зрозумілі статуси користувачів.",
  "I placed a coverage heatmap and overtime chart above shifts linked to drivers and vehicles.": "Я розмістила теплову карту покриття й графік понаднормових годин над змінами з водіями й авто.",
  "Live tracking with a searchable vehicle list, status filters, and a map detail card.": "Моніторинг зі списком автомобілів, пошуком, фільтрами стану та карткою на мапі.",
  "Make access rules visible": "Зробити правила доступу видимими",
  "Manage users across organizations and control what each role can do.": "Керувати користувачами різних організацій і правами кожної ролі.",
  "Managers can review the weekly pattern and inspect the shifts behind it.": "Менеджери можуть переглянути картину тижня й конкретні зміни за нею.",
  "Move from overview to action": "Перейти від огляду до дії",
  "My role": "Моя роль",
  "Operators have an overview and a direct path to the vehicle or trip they need.": "Оператори мають загальний огляд і прямий шлях до потрібного авто чи поїздки.",
  "Review fleet activity, vehicle availability, and driver coverage.": "Оцінити активність автопарку, доступність автомобілів і покриття змін водіями.",
  "Role": "Роль",
  "Show gaps in driver coverage": "Показати прогалини в покритті змін",
  "Showing driver and trip details beside a vehicle could make live tracking more useful.": "Дані водія й поїздки поруч з авто могли зробити моніторинг кориснішим.",
  "The map and trip records share identifiers and statuses, so users can follow the same vehicle across views.": "Мапа й записи поїздок мають спільні ідентифікатори та статуси, тож користувач може стежити за тим самим авто в різних представленнях.",
  "The problem": "Проблема",
  "Three roles, connected decisions": "Три ролі — пов’язані рішення",
  "User status, organization and role filters, and reusable permission profiles.": "Статуси користувачів, фільтри організації й ролі та повторювані профілі доступу.",
  "What I changed": "Що я змінила"
};

export const fleetoStory: CaseBlock[] = [
  {
    "type": "image",
    "image": {
      "src": "fleeto-02.png",
      "alt": "Fleeto vehicle records, fleet dashboard, and route dispatch workspace",
      "width": 3840,
      "height": 1800
    }
  },
  {
    "type": "heading",
    "level": 2,
    "text": "The problem"
  },
  {
    "type": "paragraph",
    "text": "A dispatcher can see a vehicle on the map and still lack the information needed to act. The driver, current trip, status, and last update all matter when deciding what to check next. Fleeto brings that context into one fleet workspace."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "My role and design focus"
  },
  {
    "type": "paragraph",
    "text": "As the sole designer, I worked with the project manager and developers on navigation, task flows, dashboards, and reusable UI. I prepared the screens for development, focusing on the route from overview to action."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Define the decisions before designing the views"
  },
  {
    "type": "paragraph",
    "text": "I structured the work around three responsibilities: dispatchers follow vehicles and trips, managers review fleet coverage, and administrators manage access. This role model guided the navigation and the information each view needs."
  },
  {
    "type": "table",
    "title": "Three roles, connected decisions",
    "columns": [
      "Role",
      "Core need",
      "Design response"
    ],
    "rows": [
      [
        "Dispatcher",
        "Find a vehicle, understand its status, and inspect the current trip.",
        "Live tracking with a searchable vehicle list, status filters, and a map detail card."
      ],
      [
        "Fleet manager",
        "Review fleet activity, vehicle availability, and driver coverage.",
        "An overview dashboard, vehicle records, shift coverage, and overtime trends."
      ],
      [
        "Administrator",
        "Manage users across organizations and control what each role can do.",
        "User status, organization and role filters, and reusable permission profiles."
      ]
    ]
  },
  {
    "type": "paragraph",
    "text": "The core path moves from an overview to a selected vehicle and its trip. Weekly planning and access management support different decisions, so I gave them focused views within the shared workspace."
  },
  {
    "type": "heading",
    "level": 3,
    "text": "First, help the team know where to look"
  },
  {
    "type": "paragraph",
    "text": "I started the interface with a fleet overview. Totals, recent events, and the map help an operator decide which vehicle or issue needs attention before opening a detailed record."
  },
  {
    "type": "paragraph",
    "text": "I connected that overview to a vehicle table. The dashboard gives the operator a starting point, and the table provides a route into the record they need to investigate."
  },
  {
    "type": "image",
    "image": {
      "src": "fleeto-04.png",
      "alt": "Fleeto dashboard with fleet activity map, recent events, vehicle status, and related operational views",
      "width": 3840,
      "height": 1800
    }
  },
  {
    "type": "heading",
    "level": 3,
    "text": "Turn a location into useful context"
  },
  {
    "type": "paragraph",
    "text": "After selecting a vehicle, the dispatcher needs to understand its trip. I placed the driver, speed, status, and current trip in a map card, with search and filters for finding the right vehicle."
  },
  {
    "type": "paragraph",
    "text": "I kept this context beside the location so the operator can review both together. Shared identifiers and statuses connect the map with trip records, carrying the same vehicle through the next step."
  },
  {
    "type": "image",
    "image": {
      "src": "fleeto-06.png",
      "alt": "Fleeto trip list beside live tracking with vehicle status filters and an open map detail card",
      "width": 3840,
      "height": 1800
    }
  },
  {
    "type": "heading",
    "level": 3,
    "text": "Look beyond the current trip"
  },
  {
    "type": "paragraph",
    "text": "Fleet managers also need to plan beyond the current trip. I used a weekly coverage view to show the pattern across shifts, with the shift list available for individual details."
  },
  {
    "type": "paragraph",
    "text": "I placed a coverage heatmap and overtime chart above the shifts. My hypothesis was that the overview could make gaps easier to spot, while nearby driver and vehicle records would help managers investigate them."
  },
  {
    "type": "image",
    "image": {
      "src": "fleeto-01.png",
      "alt": "Fleeto driver list and shifts with weekly coverage heatmap, overtime trend, and assignment table",
      "width": 3840,
      "height": 1800
    }
  },
  {
    "type": "heading",
    "level": 3,
    "text": "Give each role the right access"
  },
  {
    "type": "paragraph",
    "text": "For administrators, the key decision is who can access each part of the workspace. I designed a permission matrix, reusable role profiles, and visible account statuses so access can be reviewed before it changes."
  },
  {
    "type": "paragraph",
    "text": "This keeps administration connected to the same role model used in the operational views. The administrator can compare permissions and check the account status before applying a change."
  },
  {
    "type": "image",
    "image": {
      "src": "fleeto-05.png",
      "alt": "Fleeto user accounts beside a permission matrix for administrator, manager, and driver roles",
      "width": 3840,
      "height": 1800
    }
  },
  {
    "type": "heading",
    "level": 2,
    "text": "One workspace, different decisions"
  },
  {
    "type": "paragraph",
    "text": "I delivered connected views for tracking vehicles, reviewing trips, planning shifts, and managing access. Shared filters, statuses, and tables keep the operation consistent, while each role has a clear route to its next decision."
  },
  {
    "type": "image",
    "image": {
      "src": "fleeto-03.png",
      "alt": "Fleeto connected vehicle, route, organization, and user management interfaces",
      "width": 3840,
      "height": 1800
    }
  }
];
