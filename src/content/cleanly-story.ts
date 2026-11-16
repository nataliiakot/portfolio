import type { CaseBlock } from './projects';

// Hypotheses explain the design intent; they are not claims of tested effects.
export const cleanlyTranslations: Record<string, string> = {
  "A clear next action": "Зрозуміла наступна дія",
  "A clear pending state could help cleaners understand that sending a request does not confirm a job.": "Зрозумілий стан очікування міг пояснити, що надсилання запиту ще не підтверджує роботу.",
  "A clear visual system": "Зрозуміла візуальна система",
  "A review screen with client, cleaner, and job details.": "Екран перевірки з даними клієнта, клінера й роботи.",
  "Annotated request-to-job flow": "Деталізований шлях від заявки до роботи",
  "Cleaner": "Клінер",
  "Cleaner and manager user flows": "User flows клінера та менеджера",
  "Cleaner and manager wireframes": "Вайрфрейми клінера та менеджера",
  "Cleaner interviews": "Інтерв’ю з клінерами",
  "Cleaners can review the job and return to the same details during the assignment.": "Клінери можуть переглянути роботу й повернутися до тих самих деталей під час виконання.",
  "Cleaners need to find work and know when a job is confirmed. The business requires manager approval for new clients outside the cleaner’s network.": "Клінерам потрібно знаходити роботу й знати, коли її підтверджено. Бізнес вимагає погодження менеджером для нових клієнтів поза мережею клінера.",
  "Client": "Клієнт",
  "Competitive comparison": "Конкурентне порівняння",
  "Confirm work and contact the cleaner.": "Підтвердити роботу й зв’язатися з клінером.",
  "Core need": "Ключова потреба",
  "Design response": "Відповідь у дизайні",
  "Design result": "Результат дизайну",
  "Each request shows who needs to confirm it before the cleaner is assigned.": "Кожна заявка показує, хто має підтвердити її до призначення клінера.",
  "Find a suitable job and check its status.": "Знайти відповідну роботу й перевірити її статус.",
  "Help cleaners assess a job": "Допомогти оцінити роботу",
  "Hypothesis": "Гіпотеза",
  "I added pending, approved, and error states, with notifications and a retry action.": "Я додала стани очікування, погодження й помилки, сповіщення та повторне надсилання.",
  "I designed direct client confirmation and a separate manager review for clients outside the network.": "Я спроєктувала пряме підтвердження клієнтом і окрему перевірку менеджером для клієнтів поза мережею.",
  "I designed the research, user flows, mobile screens, prototypes, and UI system. My main task was to make the approval process clear for cleaners, managers, and clients.": "Я працювала над дослідженням, сценаріями, мобільними екранами, прототипами й UI-системою. Головне завдання — зробити процес погодження зрозумілим для клінера, менеджера й клієнта.",
  "I grouped price, time, address, access notes, and client details on the job screen.": "Я зібрала ціну, час, адресу, інструкції доступу й дані клієнта на екрані роботи.",
  "I interviewed three cleaners and reviewed four competing apps. The research and role maps helped me balance independent job search with company control over new clients.": "Я провела інтерв’ю з трьома клінерами й оглянула чотири конкурентні застосунки. Дослідження й карти ролей допомогли поєднати самостійний пошук роботи з контролем компанії над новими клієнтами.",
  "I interviewed three cleaners.": "Я провела інтерв’ю з трьома клінерами.",
  "I linked chat, photos, and calls to the job, so access questions and cleaning notes stay with the assignment.": "Я пов’язала чат, фото й дзвінки з роботою, щоб питання доступу й примітки залишалися поруч із завданням.",
  "I mapped direct confirmation for existing network clients and manager review for new clients. Wireframes connected each step with its status, notification, and next action.": "Я визначила пряме підтвердження для клієнтів мережі й перевірку менеджером для нових. Вайрфрейми пов’язали кожен крок зі статусом, сповіщенням і наступною дією.",
  "I reviewed how four apps handle jobs and client records.": "Я порівняла, як чотири застосунки організовують роботу й дані клієнтів.",
  "I separated new requests from active jobs and added client verification filters. Job history shows who accepted or approved the work.": "Я відділила нові заявки від активних робіт і додала фільтри перевірки клієнтів. Історія показує, хто прийняв або погодив роботу.",
  "I used blue for actions and status, clear cards for job details, and glass-inspired effects to connect the UI with cleaning.": "Я використала синій для дій і статусів, чіткі картки для деталей роботи й скляні ефекти, що пов’язують UI з прибиранням.",
  "Job filters, full details, and clear approval states.": "Фільтри, повні деталі й зрозумілі стани погодження.",
  "Keep existing jobs moving": "Зберегти прямий шлях для наявних клієнтів",
  "Keep the conversation in context": "Зберегти контекст спілкування",
  "Make waiting clear": "Пояснити очікування",
  "Manager": "Менеджер",
  "My role and design focus": "Моя роль і фокус дизайну",
  "Products reviewed": "Проаналізовані продукти",
  "Reported comparison with other apps for finding and confirming a job.": "Заявлене порівняння з іншими застосунками для пошуку й підтвердження роботи.",
  "Request status and chat linked to the job.": "Статус заявки й чат у контексті роботи.",
  "Result": "Результат",
  "Review new clients before work starts.": "Перевіряти нових клієнтів до початку роботи.",
  "Role": "Роль",
  "Separate approval paths could keep existing jobs simple while meeting the business rule for new clients.": "Окремі шляхи могли спростити роботу з наявними клієнтами й зберегти бізнес-правило для нових.",
  "Showing key details together could support a better-informed decision before accepting work.": "Ключові деталі в одному місці могли допомогти оцінити роботу перед прийняттям.",
  "Swept, TaskTor, Clean Scheduler, and KleanFlo informed my review of scheduling, job lists, and client records.": "Swept, TaskTor, Clean Scheduler і KleanFlo стали основою огляду розкладів, списків робіт і клієнтських баз.",
  "The case at a glance": "Кейс у цифрах",
  "The interface separates a sent request from an approved job and shows the next step.": "Інтерфейс розрізняє надісланий запит і погоджену роботу та показує наступний крок.",
  "The moodboard contains external references used during visual exploration.": "Мудборд містить зовнішні референси, використані під час візуального пошуку.",
  "The problem": "Проблема",
  "The project comparison reported 30% less time to find a job and receive confirmation than in other apps. This result applies to that task. My contribution was a connected flow with clear approval rules and next steps.": "Порівняння в межах проєкту показало на 30% менше часу на пошук роботи й отримання підтвердження, ніж в інших застосунках. Результат стосується цього сценарію. Мій внесок — пов’язаний процес зі зрозумілими правилами погодження й наступними кроками.",
  "Three roles, one shared request": "Три ролі, одна спільна заявка",
  "Time to find and confirm a job": "Час пошуку й підтвердження роботи",
  "Two clear approval paths": "Два зрозумілі шляхи погодження",
  "Visual direction and inspiration": "Візуальний напрям і натхнення",
  "What I changed": "Що я змінила",
  "What shaped my decisions": "Основа моїх рішень",
  "The challenge was to support two needs at once: let cleaners choose suitable jobs, and let the company check new client relationships. I treated these as different decisions instead of making every request follow the same approval route.": "Завдання полягало в поєднанні двох потреб: дати клінерам змогу вибирати відповідну роботу й дозволити компанії перевіряти нових клієнтів. Я розділила ці рішення, замість того щоб вести кожен запит однаковим шляхом погодження.",
  "I worked through the full request journey, including the moments between the main screens. Sending a request, waiting for a reply, receiving a decision, and handling an error each needed a clear message and a useful next step.": "Я опрацювала весь шлях заявки, включно з переходами між основними екранами. Надсилання, очікування відповіді, отримання рішення й обробка помилки потребували зрозумілого повідомлення та корисного наступного кроку.",
  "The interviews covered cleaners. I used the role maps to include manager and client needs without treating them as extra interview findings. This kept the cleaner’s daily task central while still accounting for the approval and communication steps around it.": "Інтерв’ю проводилися з клінерами. Карти ролей допомогли врахувати потреби менеджера й клієнта, не подаючи їх як додаткові результати інтерв’ю. Так щоденна задача клінера залишилася в центрі, а погодження й спілкування — частиною процесу.",
  "The review helped me separate common service-management patterns from Cleanly’s main design task. Lists and schedules organize work, but this product also needed to explain how a cleaner’s interest becomes a confirmed job. I used that question to guide the flow.": "Огляд допоміг відділити поширені патерни керування послугами від головної дизайн-задачі Cleanly. Списки й розклади організовують роботу, але продукт також мав пояснювати, як зацікавленість клінера стає підтвердженим завданням. Це питання визначило сценарій.",
  "I used wireframes to connect the cleaner’s actions with the manager’s response. The key check was whether each role could understand the current state and the next step. This helped keep the business rule clear before adding visual detail.": "Я використала вайрфрейми, щоб пов’язати дії клінера з відповіддю менеджера. Головне — чи може кожна роль зрозуміти поточний стан і наступний крок. Це допомогло зробити бізнес-правило зрозумілим ще до візуального оформлення.",
  "The important boundary is between showing interest and receiving permission to work with a new client. I kept that boundary visible: the cleaner can send a request, but the interface does not present it as an assigned job before the required confirmation.": "Важлива межа проходить між зацікавленістю й дозволом працювати з новим клієнтом. Я зробила її видимою: клінер може надіслати запит, але інтерфейс не показує його як призначену роботу до необхідного підтвердження.",
  "I also separated a failed request from a rejected one. A sending error needs a retry action; a manager’s decision needs a clear status update. Using different messages helps users understand what happened without guessing whether the job is still available.": "Я також розділила невдале надсилання й відхилений запит. Помилка надсилання потребує повторної спроби, а рішення менеджера — зрозумілого оновлення статусу. Різні повідомлення пояснюють подію без здогадок про те, чи робота ще доступна.",
  "The detail screen supports the decision before the visit as well as the work itself. Price and timing help assess the request; the address and access notes remain useful after confirmation. I kept both groups in the same place rather than splitting them across the flow.": "Екран деталей підтримує рішення до візиту й саму роботу. Ціна й час допомагають оцінити заявку, а адреса та інструкції доступу потрібні після підтвердження. Я залишила ці дані разом, замість того щоб розділяти їх між різними етапами.",
  "This keeps communication linked to the reason for the conversation. A cleaner can check the request, ask a question, and return to the job details. The aim was to make coordination part of the service flow rather than a separate task.": "Так спілкування залишається пов’язаним із причиною звернення. Клінер може перевірити заявку, поставити питання й повернутися до деталей роботи. Мета — зробити координацію частиною сервісного процесу, а не окремим завданням.",
  "The visual system also had to work across lists, job cards, approval screens, and chat. I reused spacing, buttons, and status patterns so each step felt connected. Decorative effects support the service theme, while the information stays easy to read.": "Візуальна система мала працювати у списках, картках робіт, погодженнях і чаті. Я повторно використовувала відступи, кнопки й патерни статусів, щоб кроки відчувалися пов’язаними. Декоративні ефекти підтримують тему сервісу, а інформація залишається читабельною.",
  "The wider design result is a shared request flow for three roles. Cleaners can assess work, managers can review new clients, and clients can follow the request and contact the cleaner. The approval rule remains in place, with a clear state for each step.": "Ширший результат дизайну — спільний сценарій заявки для трьох ролей. Клінери можуть оцінити роботу, менеджери — перевірити нових клієнтів, а клієнти — стежити за заявкою й зв’язатися з клінером. Правило погодження збережене, а кожен крок має зрозумілий стан."
};

export const cleanlyStory: CaseBlock[] = [
  {
    "type": "image",
    "image": {
      "src": "cleanly-06.png",
      "alt": "Cleanly request discovery, home dashboard and job details",
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
    "text": "Cleaners need to find work and know when a job is confirmed. The business requires manager approval for new clients outside the cleaner’s network."
  },
  {
    "type": "paragraph",
    "text": "The challenge was to support two needs at once: let cleaners choose suitable jobs, and let the company check new client relationships. I treated these as different decisions instead of making every request follow the same approval route."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "My role and design focus"
  },
  {
    "type": "paragraph",
    "text": "As the lead designer, I worked with developers and the project manager. I designed the research, user flows, mobile screens, prototypes, and UI system. My main task was to make the approval process clear for cleaners, managers, and clients."
  },
  {
    "type": "paragraph",
    "text": "I worked through the full request journey, including the moments between the main screens. Sending a request, waiting for a reply, receiving a decision, and handling an error each needed a clear message and a useful next step."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "What shaped my decisions"
  },
  {
    "type": "paragraph",
    "text": "I interviewed three cleaners and reviewed four competing apps. The research and role maps helped me balance independent job search with company control over new clients."
  },
  {
    "type": "table",
    "title": "Three roles, one shared request",
    "columns": [
      "Role",
      "Core need",
      "Design response"
    ],
    "rows": [
      [
        "Cleaner",
        "Find a suitable job and check its status.",
        "Job filters, full details, and clear approval states."
      ],
      [
        "Manager",
        "Review new clients before work starts.",
        "A review screen with client, cleaner, and job details."
      ],
      [
        "Client",
        "Confirm work and contact the cleaner.",
        "Request status and chat linked to the job."
      ]
    ]
  },
  {
    "type": "paragraph",
    "text": "The interviews covered cleaners. I used the role maps to include manager and client needs without treating them as extra interview findings. This kept the cleaner’s daily task central while still accounting for the approval and communication steps around it."
  },
  {
    "type": "paragraph",
    "text": "Swept, TaskTor, Clean Scheduler, and KleanFlo informed my review of scheduling, job lists, and client records."
  },
  {
    "type": "evidence",
    "title": "Competitive comparison",
    "image": {
      "src": "cleanly-competitor-table.png",
      "alt": "Original competitive comparison from the Cleanly research",
      "width": 3840,
      "height": 1800
    }
  },
  {
    "type": "paragraph",
    "text": "The review helped me separate common service-management patterns from Cleanly’s main design task. Lists and schedules organize work, but this product also needed to explain how a cleaner’s interest becomes a confirmed job. I used that question to guide the flow."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Two clear approval paths"
  },
  {
    "type": "paragraph",
    "text": "I mapped direct confirmation for existing network clients and manager review for new clients. Wireframes connected each step with its status, notification, and next action."
  },
  {
    "type": "evidence",
    "title": "Cleaner and manager user flows",
    "image": {
      "src": "cleanly-user-flows.png",
      "alt": "Original Cleanly user flows for cleaner requests and manager approval",
      "width": 3840,
      "height": 1800
    }
  },
  {
    "type": "paragraph",
    "text": "I used wireframes to connect the cleaner’s actions with the manager’s response. The key check was whether each role could understand the current state and the next step. This helped keep the business rule clear before adding visual detail."
  },
  {
    "type": "evidence",
    "title": "Cleaner and manager wireframes",
    "image": {
      "src": "cleanly-wireframes.png",
      "alt": "Cleanly wireframes for cleaner and manager workflows",
      "width": 3840,
      "height": 1800
    }
  },
  {
    "type": "decision",
    "title": "Keep existing jobs moving",
    "items": [
      {
        "label": "Hypothesis",
        "text": "Separate approval paths could keep existing jobs simple while meeting the business rule for new clients."
      },
      {
        "label": "What I changed",
        "text": "I designed direct client confirmation and a separate manager review for clients outside the network."
      },
      {
        "label": "Design result",
        "text": "Each request shows who needs to confirm it before the cleaner is assigned."
      }
    ]
  },
  {
    "type": "image",
    "image": {
      "src": "cleanly-02.png",
      "alt": "Manager review with approved and rejected request outcomes",
      "width": 3840,
      "height": 1800
    }
  },
  {
    "type": "paragraph",
    "text": "The important boundary is between showing interest and receiving permission to work with a new client. I kept that boundary visible: the cleaner can send a request, but the interface does not present it as an assigned job before the required confirmation."
  },
  {
    "type": "decision",
    "title": "Make waiting clear",
    "items": [
      {
        "label": "Hypothesis",
        "text": "A clear pending state could help cleaners understand that sending a request does not confirm a job."
      },
      {
        "label": "What I changed",
        "text": "I added pending, approved, and error states, with notifications and a retry action."
      },
      {
        "label": "Design result",
        "text": "The interface separates a sent request from an approved job and shows the next step."
      }
    ]
  },
  {
    "type": "image",
    "image": {
      "src": "cleanly-05.png",
      "alt": "Cleanly approval confirmation, request review and error states",
      "width": 3840,
      "height": 1800
    }
  },
  {
    "type": "paragraph",
    "text": "I also separated a failed request from a rejected one. A sending error needs a retry action; a manager’s decision needs a clear status update. Using different messages helps users understand what happened without guessing whether the job is still available."
  },
  {
    "type": "decision",
    "title": "Help cleaners assess a job",
    "items": [
      {
        "label": "Hypothesis",
        "text": "Showing key details together could support a better-informed decision before accepting work."
      },
      {
        "label": "What I changed",
        "text": "I grouped price, time, address, access notes, and client details on the job screen."
      },
      {
        "label": "Design result",
        "text": "Cleaners can review the job and return to the same details during the assignment."
      }
    ]
  },
  {
    "type": "image",
    "image": {
      "src": "cleanly-01.png",
      "alt": "Cleanly job information, location details and contextual chat",
      "width": 3840,
      "height": 1800
    }
  },
  {
    "type": "paragraph",
    "text": "The detail screen supports the decision before the visit as well as the work itself. Price and timing help assess the request; the address and access notes remain useful after confirmation. I kept both groups in the same place rather than splitting them across the flow."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "A clear next action"
  },
  {
    "type": "paragraph",
    "text": "I separated new requests from active jobs and added client verification filters. Job history shows who accepted or approved the work."
  },
  {
    "type": "image",
    "image": {
      "src": "cleanly-04.png",
      "alt": "Cleanly home, request filtering and job details screens",
      "width": 3840,
      "height": 1800
    }
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Keep the conversation in context"
  },
  {
    "type": "paragraph",
    "text": "I linked chat, photos, and calls to the job, so access questions and cleaning notes stay with the assignment."
  },
  {
    "type": "paragraph",
    "text": "This keeps communication linked to the reason for the conversation. A cleaner can check the request, ask a question, and return to the job details. The aim was to make coordination part of the service flow rather than a separate task."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "A clear visual system"
  },
  {
    "type": "paragraph",
    "text": "I used blue for actions and status, clear cards for job details, and glass-inspired effects to connect the UI with cleaning."
  },
  {
    "type": "paragraph",
    "text": "The visual system also had to work across lists, job cards, approval screens, and chat. I reused spacing, buttons, and status patterns so each step felt connected. Decorative effects support the service theme, while the information stays easy to read."
  },
  {
    "type": "evidence",
    "title": "Visual direction and inspiration",
    "image": {
      "src": "cleanly-visual-direction.png",
      "alt": "Cleanly moodboard with app typography, palette and external visual references",
      "width": 3840,
      "height": 1800
    }
  },
  {
    "type": "paragraph",
    "text": "The moodboard contains external references used during visual exploration."
  },
  {
    "type": "evidence",
    "title": "Annotated request-to-job flow",
    "image": {
      "src": "cleanly-annotated-flow.png",
      "alt": "Annotated final Cleanly flow showing cleaner and manager screens and state transitions",
      "width": 3840,
      "height": 1800
    }
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Result"
  },
  {
    "type": "paragraph",
    "text": "The project comparison reported 30% less time to find a job and receive confirmation than in other apps. This result applies to that task. My contribution was a connected flow with clear approval rules and next steps."
  },
  {
    "type": "paragraph",
    "text": "The wider design result is a shared request flow for three roles. Cleaners can assess work, managers can review new clients, and clients can follow the request and contact the cleaner. The approval rule remains in place, with a clear state for each step."
  },
  {
    "type": "image",
    "image": {
      "src": "cleanly-03.png",
      "alt": "Cleanly communication and connected request screens",
      "width": 3840,
      "height": 1800
    }
  }
];
