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
      "alt": "Cleanly overview: request discovery, cleaner dashboard and job details",
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
    "text": "Cleanly started from scratch with a practical goal: help cleaners and managers find jobs, and help clients find a cleaner. During interviews, a concern emerged: cleaners were afraid to visit people who had not been verified."
  },
  {
    "type": "paragraph",
    "text": "That changed the design question. Finding an available job was only the start. Before agreeing to a visit, the cleaner needed a clearer basis for deciding who to work with."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "My role and design focus"
  },
  {
    "type": "paragraph",
    "text": "I was the lead and sole designer, working with one developer and the project manager from research to implementation. I designed the flows, prototypes, mobile screens, and UI system. My main product proposal was a personal client network for each cleaner."
  },
  {
    "type": "evidence",
    "title": "The starting product scope",
    "image": {
      "src": "cleanly-product-definition.png",
      "alt": "Original Cleanly product definition and responsibilities of manager, client and cleaner",
      "width": 2120,
      "height": 1344
    }
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Researching existing cleaning platforms"
  },
  {
    "type": "paragraph",
    "text": "I reviewed Swept, TaskTor, Clean Scheduler, and KleanFlo for scheduling, job lists, and client records. This comparison informed interface patterns; the interviews informed my proposal for the personal client network."
  },
  {
    "type": "gallery",
    "presentation": "comparison",
    "images": [
      {
        "src": "cleanly-competitor-analysis.png",
        "alt": "Cleanly competitor research: Swept, TaskTor, Clean Scheduler and KleanFlo",
        "width": 2120,
        "height": 2000
      },
      {
        "src": "cleanly-competitor-table.png",
        "alt": "Original competitive comparison from the Cleanly research",
        "width": 2744,
        "height": 3420
      },
      {
        "src": "cleanly-positioning.png",
        "alt": "Original positioning matrix comparing Cleanly with the reviewed products",
        "width": 2120,
        "height": 2168
      }
    ]
  },
  {
    "type": "heading",
    "level": 2,
    "text": "What the interviews changed"
  },
  {
    "type": "paragraph",
    "text": "I interviewed three cleaners. Their concern about unverified people led me to propose a network of approved clients, with manager review before a new person could be added. The network became the link between finding work and feeling ready to accept it."
  },
  {
    "type": "paragraph",
    "text": "My hypothesis was that this review step could give cleaners more confidence when taking work from someone new, while keeping jobs within their existing network straightforward. This was a design hypothesis, separate from the later timing measurement."
  },
  {
    "type": "paragraph",
    "text": "The interviews were with cleaners. I also created role profiles for the manager and client to map how their needs connect within the same request. These profiles guided design decisions; they do not represent additional interview participants."
  },
  {
    "type": "gallery",
    "presentation": "comparison",
    "images": [
      {
        "src": "cleanly-persona-cleaner.png",
        "alt": "Alex: cleaner role profile with goals, concerns and request acceptance needs",
        "width": 2088,
        "height": 1040
      },
      {
        "src": "cleanly-persona-manager.png",
        "alt": "Marcus: manager role profile with approval and coordination needs",
        "width": 2088,
        "height": 1040
      },
      {
        "src": "cleanly-persona-client.png",
        "alt": "Sophia: client role profile with request creation and communication needs",
        "width": 2088,
        "height": 1040
      }
    ]
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Give new contacts a clear route into the network"
  },
  {
    "type": "paragraph",
    "text": "I designed two paths. A client already in the cleaner’s network can confirm the job directly. A new client first needs the manager’s permission to join that network."
  },
  {
    "type": "evidence",
    "title": "Two paths based on the client relationship",
    "image": {
      "src": "cleanly-user-flows.png",
      "alt": "Original Cleanly user flows for cleaner requests and manager approval",
      "width": 5610,
      "height": 3934
    }
  },
  {
    "type": "paragraph",
    "text": "The check is carried out by the manager. In the app, the manager approves or rejects adding the person to the network. I designed the permission flow and its states; the app does not perform that check for them."
  },
  {
    "type": "paragraph",
    "text": "I used wireframes to connect both sides of the request: what the cleaner sees after applying, and what the manager needs when a new client is involved. Each step needed a clear next action and an owner."
  },
  {
    "type": "evidence",
    "title": "From the approval rule to screen structure",
    "image": {
      "src": "cleanly-wireframes.png",
      "alt": "Cleanly wireframes for cleaner and manager workflows",
      "width": 7200,
      "height": 4992
    }
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Support the flow with a shared visual system"
  },
  {
    "type": "paragraph",
    "text": "I reused buttons, cards, spacing, and status patterns across discovery, job details, approval, and communication. Blue supports actions and status; the glass-inspired direction connects the app with cleaning while keeping the job information readable."
  },
  {
    "type": "evidence",
    "title": "Visual references and interface direction",
    "image": {
      "src": "cleanly-visual-direction.png",
      "alt": "Cleanly moodboard with app typography, palette and external visual references",
      "width": 2984,
      "height": 1846
    }
  },
  {
    "type": "heading",
    "level": 3,
    "text": "Show what the manager is approving"
  },
  {
    "type": "paragraph",
    "text": "The review screen brings the cleaner, client, and job details together. I added an explicit message that approval adds a new client to the network, so the action explains the relationship it changes."
  },
  {
    "type": "image",
    "image": {
      "src": "cleanly-02.png",
      "alt": "Manager review and the approved or rejected client-network request",
      "width": 3840,
      "height": 1800
    }
  },
  {
    "type": "paragraph",
    "text": "The approved and rejected outcomes refer back to the same request. This keeps the decision visible to the cleaner instead of leaving them to guess whether they can continue."
  },
  {
    "type": "heading",
    "level": 3,
    "text": "Keep a request separate from a confirmed job"
  },
  {
    "type": "paragraph",
    "text": "Applying for work does not mean the visit is confirmed. I connected the request to a manager notification and clear approval or rejection outcomes, so the cleaner can follow the decision about adding a new client."
  },
  {
    "type": "image",
    "image": {
      "src": "cleanly-05.png",
      "alt": "Manager notification, request review and client-network approval or rejection",
      "width": 3840,
      "height": 1800
    }
  },
  {
    "type": "paragraph",
    "text": "The notification brings the manager into the review. The outcome screens explain whether the client was added to the network and keep the job details visible, connecting the decision back to the original request."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Give the cleaner enough detail to choose"
  },
  {
    "type": "paragraph",
    "text": "Knowing the client relationship is only one part of accepting work. I put price, date, time, address, access notes, and client details on the job screen so the cleaner can review the assignment before requesting it."
  },
  {
    "type": "image",
    "image": {
      "src": "cleanly-01.png",
      "alt": "Job discovery, location details and the manager-approval notice for an unverified client",
      "width": 3840,
      "height": 1800
    }
  },
  {
    "type": "paragraph",
    "text": "The same details remain useful after confirmation, when preparing for the visit. I kept them in one place so the information supporting the first decision also supports the actual job."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Make the network visible while finding work"
  },
  {
    "type": "paragraph",
    "text": "I connected client verification filters with job discovery and kept new requests separate from active jobs. Approval and activity history show how a request moves forward. The network rule is visible throughout the journey, not only on the manager’s screen."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Keep the conversation in context"
  },
  {
    "type": "paragraph",
    "text": "After confirmation, the cleaner may still need to ask about access or cleaning instructions. I linked chat, photos, and calls to the assignment so both people can discuss the same job and return to its details."
  },
  {
    "type": "evidence",
    "title": "The connected cleaner and manager journey",
    "image": {
      "src": "cleanly-annotated-flow.png",
      "alt": "Annotated final Cleanly flow showing cleaner and manager screens and state transitions",
      "width": 9836,
      "height": 2902
    }
  },
  {
    "type": "video",
    "src": "/videos/cleanly-walkthrough.mp4",
    "poster": "/videos/cleanly-walkthrough-poster.jpg",
    "title": "Cleanly prototype walkthrough",
    "width": 1418,
    "height": 1566
  },
  {
    "type": "heading",
    "level": 2,
    "text": "From the first request to a launched app"
  },
  {
    "type": "paragraph",
    "text": "The app was implemented. During its first month of use, analytics recorded 30% less time from opening the app to receiving confirmation from the client, compared with similar apps the users had previously used."
  },
  {
    "type": "paragraph",
    "text": "This measures the complete path to confirmation, including the response from the client. It is a project outcome, rather than a separate test of the network feature. My contribution was to turn the concern raised in interviews into a clear way to introduce new clients and keep the request moving."
  },
  {
    "type": "image",
    "image": {
      "src": "cleanly-04.png",
      "alt": "Cleanly brand screen, cleaner dashboard and verified or unverified request filters",
      "width": 3840,
      "height": 1800
    }
  }
];
