import type { CaseBlock } from './projects';
export const fleetoTranslations: Record<string, string> = {
  "From fleet data to the next operational decision": "Від даних автопарку до наступного робочого рішення",
  "Fleeto brings vehicle locations, trip records, drivers, shifts, and access management into one web platform. The design centers on a practical sequence: understand the fleet’s current state, inspect the relevant record, and coordinate the next action.": "Fleeto об’єднує розташування автомобілів, записи поїздок, водіїв, зміни та керування доступами в одній вебплатформі. Дизайн побудовано навколо практичної послідовності: оцінити поточний стан автопарку, перевірити потрібний запис і скоординувати наступну дію.",
  "A map answers where a vehicle is. Daily coordination also needs to show who is driving, which trip is active, and when the information was last updated.": "Карта відповідає, де автомобіль. Для щоденної координації також потрібно бачити, хто за кермом, яка поїздка триває та коли востаннє оновлювалися дані.",
  "My role and design scope": "Моя роль і обсяг роботи",
  "As UX/UI & Product Designer, I worked on information architecture, user flows, web interfaces, dashboards, data visualization, reusable components, and development handoff. My scope also included coordinating and mentoring the design team.": "Як UX/UI & Product Designer я працювала над інформаційною архітектурою, сценаріями, вебінтерфейсом, дашбордами, візуалізацією даних, повторюваними компонентами й передачею в розробку. Також координувала та менторила дизайн-команду.",
  "Different responsibilities, one operational workspace": "Різні обов’язки — один робочий простір",
  "The interface separates three kinds of responsibility: coordinating live operations, reviewing the fleet, and administering access. These roles explain the organization of the screens below.": "Інтерфейс розділяє три типи відповідальності: координацію поточних операцій, огляд автопарку й адміністрування доступів. Ці ролі пояснюють організацію екранів нижче.",
  "Dispatcher": "Диспетчер",
  "Find a vehicle, understand its status, and inspect the current trip.": "Знайти автомобіль, зрозуміти його стан і перевірити поточну поїздку.",
  "Live tracking with a searchable vehicle list, status filters, and a map detail card.": "Моніторинг зі списком автомобілів, пошуком, фільтрами стану та карткою на мапі.",
  "Fleet manager": "Менеджер автопарку",
  "Review fleet activity, vehicle availability, and driver coverage.": "Оцінити активність автопарку, доступність автомобілів і покриття змін водіями.",
  "An overview dashboard, vehicle records, shift coverage, and overtime trends.": "Дашборд, записи автомобілів, покриття змін і тенденції понаднормової роботи.",
  "Administrator": "Адміністратор",
  "Manage users across organizations and control what each role can do.": "Керувати користувачами різних організацій і правами кожної ролі.",
  "User status, organization and role filters, and reusable permission profiles.": "Статуси користувачів, фільтри організації й ролі та повторювані профілі доступу.",
  "Three roles, connected decisions": "Три ролі — пов’язані рішення",
  "Start with an overview, then narrow the question": "Почати з огляду й уточнити запит",
  "I organized the interface around operational questions rather than one screen containing every dataset. The dashboard provides an overview; dedicated lists handle trips, vehicles, drivers, and users. Search, filters, status labels, and row actions repeat across these areas.": "Я організувала інтерфейс навколо робочих питань, замість того щоб збирати всі дані на одному екрані. Дашборд дає загальний огляд, а окремі списки призначені для поїздок, автомобілів, водіїв і користувачів. Пошук, фільтри, позначки станів і дії в рядках повторюються між розділами.",
  "On the dashboard, fleet totals establish scale, the map provides location context, and recent activity highlights events worth checking. The performance table then adds the vehicle, driver, organization, status, and last update needed to investigate further.": "На дашборді загальні показники задають масштаб, мапа дає географічний контекст, а останні події вказують, що варто перевірити. Таблиця додає автомобіль, водія, організацію, статус і час оновлення для подальшої перевірки.",
  "Connect a location to a specific trip": "Пов’язати місце з конкретною поїздкою",
  "A dispatcher checking a vehicle needs more than a marker. In Live Tracking, the list distinguishes moving, idle, and offline vehicles. Selecting a vehicle exposes its driver, speed, status, current trip, and links to trip history and details.": "Диспетчеру потрібна не лише позначка на мапі. У Live Tracking список розділяє автомобілі в русі, без руху й офлайн. Вибір автомобіля відкриває водія, швидкість, статус, поточну поїздку та переходи до історії й деталей.",
  "The trip list supports a different task: finding a record by status, organization, or driver. Keeping identifiers and status labels visible in both views connects geographic monitoring with structured records.": "Список поїздок підтримує інше завдання: знайти запис за статусом, організацією або водієм. Видимі ідентифікатори й позначки стану в обох представленнях пов’язують моніторинг на мапі зі структурованими записами.",
  "Plan coverage alongside driver records": "Планувати покриття поруч із записами водіїв",
  "Knowing where vehicles are does not answer who can cover the next shift. The driver list brings status, license type, organization, and recent activity together. The shift view connects each assignment to a driver, vehicle, start time, end time, and status.": "Знання місця автомобіля не пояснює, хто може вийти на наступну зміну. Список водіїв поєднує статус, тип ліцензії, організацію й останню активність. Екран змін пов’язує кожне призначення з водієм, автомобілем, початком, завершенням і статусом.",
  "I placed a weekly coverage heatmap and overtime trend above the shift table. The charts summarize the week; the rows provide the assignments behind it. This separates a planning overview from the detail needed to act.": "Я розмістила теплову карту покриття тижня й динаміку понаднормових годин над таблицею змін. Графіки підсумовують тиждень, а рядки показують конкретні призначення. Це розділяє огляд для планування та деталі для дії.",
  "Make access visible and reusable": "Зробити доступи видимими й повторюваними",
  "The user list makes account status, organization, role, and permission profile visible together. This lets an administrator distinguish an invited user from an active or suspended account before changing access.": "Список користувачів показує статус облікового запису, організацію, роль і профіль доступу разом. Адміністратор може відрізнити запрошеного користувача від активного чи призупиненого, перш ніж змінювати права.",
  "The permission matrix puts actions in rows and roles in columns. Reusable profiles make the access rules inspectable in one place, rather than leaving their differences implicit across separate screens.": "Матриця доступів розміщує дії в рядках, а ролі — у стовпцях. Повторювані профілі дозволяють перевірити правила в одному місці, замість того щоб з’ясовувати їхні відмінності на окремих екранах.",
  "What the design brings together": "Що поєднує дизайн",
  "The resulting interface connects three levels of work: a fleet overview, a specific operational record, and the assignments and access rules behind it. Shared table patterns keep navigation familiar, while maps, coverage charts, and permission matrices give different tasks the presentation they need.": "Інтерфейс поєднує три рівні роботи: огляд автопарку, конкретний робочий запис і призначення та правила доступу за ним. Спільні патерни таблиць зберігають знайому навігацію, а мапи, графіки покриття та матриці доступів дають різним завданням потрібне представлення.",
  "The key design principle is a clear path from overview to detail: first locate what needs attention, then expose the information needed for the next decision.": "Головний принцип дизайну — зрозумілий шлях від огляду до деталей: спочатку знайти те, що потребує уваги, а потім відкрити інформацію для наступного рішення."
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
    "text": "From fleet data to the next operational decision"
  },
  {
    "type": "paragraph",
    "text": "Fleeto brings vehicle locations, trip records, drivers, shifts, and access management into one web platform. The design centers on a practical sequence: understand the fleet’s current state, inspect the relevant record, and coordinate the next action."
  },
  {
    "type": "paragraph",
    "text": "A map answers where a vehicle is. Daily coordination also needs to show who is driving, which trip is active, and when the information was last updated.",
    "emphasis": true
  },
  {
    "type": "heading",
    "level": 2,
    "text": "My role and design scope"
  },
  {
    "type": "paragraph",
    "text": "As UX/UI & Product Designer, I worked on information architecture, user flows, web interfaces, dashboards, data visualization, reusable components, and development handoff. My scope also included coordinating and mentoring the design team."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Different responsibilities, one operational workspace"
  },
  {
    "type": "paragraph",
    "text": "The interface separates three kinds of responsibility: coordinating live operations, reviewing the fleet, and administering access. These roles explain the organization of the screens below."
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
    "type": "heading",
    "level": 2,
    "text": "Start with an overview, then narrow the question"
  },
  {
    "type": "paragraph",
    "text": "I organized the interface around operational questions rather than one screen containing every dataset. The dashboard provides an overview; dedicated lists handle trips, vehicles, drivers, and users. Search, filters, status labels, and row actions repeat across these areas."
  },
  {
    "type": "paragraph",
    "text": "On the dashboard, fleet totals establish scale, the map provides location context, and recent activity highlights events worth checking. The performance table then adds the vehicle, driver, organization, status, and last update needed to investigate further."
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
    "level": 2,
    "text": "Connect a location to a specific trip"
  },
  {
    "type": "paragraph",
    "text": "A dispatcher checking a vehicle needs more than a marker. In Live Tracking, the list distinguishes moving, idle, and offline vehicles. Selecting a vehicle exposes its driver, speed, status, current trip, and links to trip history and details."
  },
  {
    "type": "paragraph",
    "text": "The trip list supports a different task: finding a record by status, organization, or driver. Keeping identifiers and status labels visible in both views connects geographic monitoring with structured records."
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
    "level": 2,
    "text": "Plan coverage alongside driver records"
  },
  {
    "type": "paragraph",
    "text": "Knowing where vehicles are does not answer who can cover the next shift. The driver list brings status, license type, organization, and recent activity together. The shift view connects each assignment to a driver, vehicle, start time, end time, and status."
  },
  {
    "type": "paragraph",
    "text": "I placed a weekly coverage heatmap and overtime trend above the shift table. The charts summarize the week; the rows provide the assignments behind it. This separates a planning overview from the detail needed to act."
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
    "level": 2,
    "text": "Make access visible and reusable"
  },
  {
    "type": "paragraph",
    "text": "The user list makes account status, organization, role, and permission profile visible together. This lets an administrator distinguish an invited user from an active or suspended account before changing access."
  },
  {
    "type": "paragraph",
    "text": "The permission matrix puts actions in rows and roles in columns. Reusable profiles make the access rules inspectable in one place, rather than leaving their differences implicit across separate screens."
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
    "text": "What the design brings together"
  },
  {
    "type": "paragraph",
    "text": "The resulting interface connects three levels of work: a fleet overview, a specific operational record, and the assignments and access rules behind it. Shared table patterns keep navigation familiar, while maps, coverage charts, and permission matrices give different tasks the presentation they need."
  },
  {
    "type": "paragraph",
    "text": "The key design principle is a clear path from overview to detail: first locate what needs attention, then expose the information needed for the next decision.",
    "emphasis": true
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
