import type { CaseBlock, ProjectImage } from './projects';

// Each editorial statement is grounded in the supplied boards or Natalia's clarifications.
export const cleanlyTranslations: Record<string, string> = {};
const t = (en: string, uk: string): string => { cleanlyTranslations[en] = uk; return en; };
const heading = (en: string, uk: string): CaseBlock => ({ type: 'heading', level: 2, text: t(en, uk) });
const paragraph = (en: string, uk: string): CaseBlock => ({ type: 'paragraph', text: t(en, uk) });
const image = (src: string, alt: string, width = 3840, height = 1800): ProjectImage => ({ src, alt, width, height });
const evidence = (en: string, uk: string, src: string, alt: string): CaseBlock => ({ type: 'evidence', title: t(en, uk), image: image(src, alt) });
const input = t('Design input', 'Основа рішення');
const choice = t('My decision', 'Моє рішення');
const reasoning = t('Why this approach', 'Логіка рішення');
const decision = (title: string, ukTitle: string, en: string[], uk: string[]): CaseBlock => ({
  type: 'decision', title: t(title, ukTitle),
  items: [input, choice, reasoning].map((label, i) => ({ label, text: t(en[i]!, uk[i]!) })),
});

export const cleanlyStory: CaseBlock[] = [
  { type: 'image', image: image('cleanly-06.png', 'Cleanly request discovery, home dashboard and job details') },
  heading('The coordination problem', 'Проблема координації'),
  paragraph('Cleaners need to find suitable work and understand what happens after they accept it. Cleaning companies need to control which new clients enter their network. Cleanly brings these needs into a mobile workflow connecting the cleaner, client, and manager.', 'Клінерам потрібно знаходити відповідну роботу й розуміти, що відбувається після прийняття заявки. Клінінговим компаніям потрібно контролювати, які нові клієнти потрапляють до їхньої мережі. Cleanly поєднує ці потреби в мобільному процесі для клінера, клієнта та менеджера.'),
  { type: 'metrics', title: t('The case at a glance', 'Кейс у цифрах'), items: [
    { value: '3', label: t('Cleaner interviews', 'Інтерв’ю з клінерами'), detail: t('Research included three cleaners. Manager and client needs were also represented in the persona and workflow artifacts.', 'Дослідження включало трьох клінерів. Потреби менеджера та клієнта також відображені в персонах і сценаріях.') },
    { value: '4', label: t('Products reviewed', 'Проаналізовані продукти'), detail: t('A competitive review explored how existing tools organize requests, assignments, and operational control.', 'Конкурентний аналіз досліджував, як наявні інструменти організовують заявки, призначення та операційний контроль.') },
    { value: '−30%', label: t('Time to find and confirm a job', 'Час пошуку й підтвердження роботи'), detail: t('In the supplied comparison with other applications, a cleaner could find a job and receive confirmation 30% faster. This result concerns that task, rather than total daily operating time.', 'У наданому порівнянні з іншими застосунками клінер міг знайти роботу й отримати підтвердження на 30% швидше. Результат стосується цього сценарію, а не загального часу щоденної роботи.') },
  ] },
  heading('My role and design focus', 'Моя роль і фокус дизайну'),
  paragraph('As the UX/UI & Product Designer, I owned the design direction across research, information architecture, user flows, wireframes, mobile UI, prototyping, the design system, and development handoff. Manager approval for new clients was a business requirement; my analysis shaped how to introduce that control without leaving the cleaner uncertain.', 'Як UX/UI & Product Designer, я відповідала за дизайн: дослідження, інформаційну архітектуру, сценарії, вайрфрейми, мобільний UI, прототипування, дизайн-систему та передачу в розробку. Погодження нових клієнтів менеджером було вимогою бізнесу; мій аналіз допоміг реалізувати цей контроль так, щоб клінер розумів, що відбувається.'),
  heading('Research that framed the workflow', 'Дослідження, що визначило процес'),
  paragraph('The research combined interviews with three cleaners, a review of four competing products, and role-based personas. The needs below summarize the supplied research artifacts. They are design inputs, not direct quotations or a claim that managers and clients were interviewed.', 'Дослідження поєднало інтерв’ю з трьома клінерами, огляд чотирьох конкурентних продуктів і рольові персони. Потреби нижче узагальнюють надані матеріали дослідження. Це основа для дизайну, а не прямі цитати чи твердження про проведені інтерв’ю з менеджерами та клієнтами.'),
  { type: 'table', title: t('Three roles, one shared request', 'Три ролі, одна спільна заявка'), columns: [t('Role', 'Роль'), t('Core need', 'Ключова потреба'), t('Design response', 'Відповідь у дизайні')], rows: [
    [t('Cleaner', 'Клінер'), t('Find available work, assess the location, and trust the client relationship.', 'Знаходити роботу, оцінювати локацію та довіряти клієнту.'), t('Request discovery, verification filters, complete job details, and a visible approval state.', 'Пошук заявок, фільтри верифікації, повні деталі роботи та видимий статус погодження.')],
    [t('Manager', 'Менеджер'), t('Review new client relationships and keep responsibility clear.', 'Перевіряти нових клієнтів і розуміти відповідальність.'), t('A focused review screen with cleaner, client, and job context before approval or rejection.', 'Екран перевірки з інформацією про клінера, клієнта та роботу перед погодженням або відмовою.')],
    [t('Client', 'Клієнт'), t('Understand the request status and communicate with the assigned cleaner.', 'Розуміти статус заявки та спілкуватися з призначеним клінером.'), t('A connected request lifecycle and in-app communication tied to the job.', 'Єдиний життєвий цикл заявки та спілкування в застосунку в контексті роботи.')],
  ] },
  paragraph('My competitive review covered Swept, TaskTor, Clean Scheduler, and KleanFlo. It highlighted established patterns around scheduling, assigned work, customer records, and operational oversight. The opportunity I pursued was a cleaner-led request discovery experience combined with company control over new client relationships.', 'Мій конкурентний аналіз охопив Swept, TaskTor, Clean Scheduler і KleanFlo. Він показав поширені патерни планування, призначення роботи, клієнтських баз та операційного контролю. Я зосередилася на можливості поєднати самостійний пошук заявок клінером із контролем компанії над новими клієнтами.'),
  evidence('Competitive comparison', 'Конкурентне порівняння', 'cleanly-competitor-table.png', 'Original competitive comparison from the Cleanly research'),
  paragraph('The comparison is a snapshot of my project research. It informed the product direction.', 'Порівняння відображає моє дослідження в межах проєкту. Воно допомогло визначити напрям продукту.'),
  heading('From roles to an actionable flow', 'Від ролей до зрозумілого процесу'),
  paragraph('I mapped two confirmation paths before visual design. A verified client in the cleaner’s network can confirm the cleaner’s request directly. A new client outside that network requires verification and approval from the cleaner’s manager before they can work together.', 'Ще до візуального дизайну я визначила два шляхи підтвердження. Перевірений клієнт із мережі клінера може напряму підтвердити запит клінера. Новий клієнт поза мережею потребує перевірки та погодження менеджером клінера, перш ніж вони зможуть працювати разом.'),
  evidence('Cleaner and manager user flows', 'User flows клінера та менеджера', 'cleanly-user-flows.png', 'Original Cleanly user flows for cleaner requests and manager approval'),
  paragraph('Wireframes connected discovery, review, confirmation, waiting, notification, job history, and chat. I also mapped the manager’s notification, review, and decision screens, so the handoff between roles was part of the same system.', 'Вайрфрейми поєднали пошук, перегляд, підтвердження, очікування, сповіщення, історію роботи та чат. Я також опрацювала сповіщення, перевірку й рішення менеджера, щоб передача між ролями була частиною єдиної системи.'),
  evidence('Cleaner and manager wireframes', 'Вайрфрейми клінера та менеджера', 'cleanly-wireframes.png', 'Cleanly wireframes for cleaner and manager workflows'),
  heading('Confirmation depends on the client network', 'Підтвердження залежить від мережі клієнтів'),
  decision('Direct confirmation or manager approval', 'Пряме підтвердження або погодження менеджера', [
    'Verified clients already belong to the cleaner’s network. Working with a new client outside that network requires a manager’s verification and approval, as defined by the business requirement and supported by my analysis.',
    'Give the cleaner two clear paths: receive confirmation directly from a verified network client, or send a request for manager review when the client is new to the network.',
    'Existing client relationships can proceed directly. New relationships retain the required manager check, and the cleaner understands who must confirm the request and what happens next.',
  ], [
    'Перевірені клієнти вже належать до мережі клінера. Робота з новим клієнтом поза мережею потребує перевірки й погодження менеджера — це вимога бізнесу, підкріплена моїм аналізом.',
    'Дати клінеру два зрозумілі шляхи: отримати підтвердження напряму від перевіреного клієнта з мережі або надіслати запит на перевірку менеджеру, якщо клієнт новий.',
    'Наявні клієнтські відносини дозволяють пряме підтвердження. Для нових зберігається необхідна перевірка менеджера, а клінер розуміє, хто має підтвердити запит і що відбуватиметься далі.',
  ]),
  { type: 'image', image: image('cleanly-02.png', 'Manager review with approved and rejected request outcomes') },
  heading('Make waiting a visible state', 'Зробити очікування видимим'),
  decision('Explain what happens next', 'Пояснити наступний крок', [
    'For a new client outside the network, manager review creates a waiting period between the cleaner’s request and confirmation.',
    'Show an explicit pending confirmation, notify the cleaner after a decision, and provide a retry path when sending the approval request fails.',
    'A successful submission is not the same as an approved job. Separate states prevent the interface from suggesting the cleaner is assigned too early.',
  ], [
    'Для нового клієнта поза мережею перевірка менеджером створює період очікування між запитом клінера та підтвердженням.',
    'Показати підтвердження очікування, сповістити клінера після рішення та передбачити повторну спробу, якщо запит на погодження не вдалося надіслати.',
    'Успішне надсилання не означає погоджену роботу. Окремі стани не дають інтерфейсу передчасно повідомляти про призначення.',
  ]),
  { type: 'image', image: image('cleanly-05.png', 'Cleanly approval confirmation, request review and error states') },
  heading('Prepare the cleaner before arrival', 'Підготувати клінера до прибуття'),
  decision('Keep the decision context together', 'Зібрати контекст для рішення', [
    'The cleaner persona needed quick access to location information and a trustworthy client relationship.',
    'Group service type, price, schedule, address, access instructions, client details, and notes within the request details.',
    'The cleaner can assess a job before accepting it and return to the same information during the assignment.',
  ], [
    'Клінеру був потрібен швидкий доступ до інформації про локацію та зрозумілі відносини з клієнтом.',
    'Об’єднати тип послуги, ціну, час, адресу, інструкції доступу, дані клієнта та примітки в деталях заявки.',
    'Клінер може оцінити роботу перед прийняттям і повернутися до цієї ж інформації під час виконання.',
  ]),
  { type: 'image', image: image('cleanly-01.png', 'Cleanly job information, location details and contextual chat') },
  heading('Organize the day around the next action', 'Організувати день навколо наступної дії'),
  paragraph('The home screen separates incoming requests from active jobs. Verification filters help distinguish familiar clients from requests that require review. Within a job, the activity history records the steps already taken, including acceptance and approval, so ownership is visible beyond the latest status label.', 'Головний екран розділяє вхідні заявки й активні роботи. Фільтри верифікації допомагають відрізняти наявних клієнтів від заявок, які потребують перевірки. Історія роботи зберігає вже пройдені кроки, зокрема прийняття та погодження, щоб відповідальність була зрозумілою не лише з поточного статусу.'),
  { type: 'image', image: image('cleanly-04.png', 'Cleanly home, request filtering and job details screens') },
  heading('Keep the conversation in context', 'Зберегти контекст спілкування'),
  paragraph('Chat, photo sharing, and calls sit alongside the job workflow. Access questions, supplies, and cleaning instructions can stay attached to the assignment instead of becoming a separate coordination thread. The cleaner can move from job details to communication without losing the job context.', 'Чат, обмін фото та дзвінки доповнюють робочий процес. Питання доступу, засобів і вимог до прибирання залишаються пов’язаними з роботою, а не перетворюються на окремий ланцюжок узгоджень. Клінер може перейти від деталей до спілкування, зберігаючи контекст.'),
  heading('A visual language rooted in the service', 'Візуальна мова, пов’язана з послугою'),
  paragraph('I used water, light, and freshly cleaned glass as the visual starting point. Blue accents distinguish actions and status; white space and structured cards keep operational details readable. The app uses Plus Jakarta Sans, with deep navy, accent blue, sky blue, soft gray, and white. Liquid glass details connect the interface to the cleaning theme.', 'Візуальною відправною точкою стали вода, світло та щойно очищене скло. Блакитні акценти виділяють дії й статуси; білий простір і структуровані картки допомагають читати операційні деталі. У застосунку використано Plus Jakarta Sans, темно-синій, насичений синій, небесно-блакитний, світло-сірий і білий. Деталі liquid glass пов’язують інтерфейс із темою прибирання.'),
  evidence('Visual direction and inspiration', 'Візуальний напрям і натхнення', 'cleanly-visual-direction.png', 'Cleanly moodboard with app typography, palette and external visual references'),
  paragraph('The moodboard includes external UI inspiration and a glass-wiping motion concept. These references explain the visual exploration; they are separate from the final Cleanly interface shown above.', 'Мудборд містить сторонні UI-референси та концепцію руху під час очищення скла. Вони пояснюють візуальний пошук і відокремлені від фінального інтерфейсу Cleanly, показаного вище.'),
  evidence('Annotated request-to-job flow', 'Деталізований шлях від заявки до роботи', 'cleanly-annotated-flow.png', 'Annotated final Cleanly flow showing cleaner and manager screens and state transitions'),
  heading('Outcome and takeaway', 'Результат і висновок'),
  paragraph('The supplied cross-app comparison reported that a cleaner could find a job and receive confirmation 30% faster in Cleanly. The available evidence does not include participant counts or raw task timings, so the result should be read as a reported comparison for this specific workflow.', 'За наданим порівнянням з іншими застосунками, у Cleanly клінер міг знайти роботу й отримати підтвердження на 30% швидше. Доступні матеріали не містять кількості учасників чи вихідних замірів часу, тому результат слід сприймати як заявлене порівняння для конкретного сценарію.'),
  paragraph('The central design principle was to give the cleaner agency while keeping the approval rule understandable. Discovery, confirmation, manager review, and communication became connected parts of one job lifecycle, with a clear next step for each role.', 'Основний принцип дизайну — дати клінеру самостійність і водночас зробити правило погодження зрозумілим. Пошук, підтвердження, перевірка менеджером і спілкування стали пов’язаними частинами життєвого циклу роботи зі зрозумілим наступним кроком для кожної ролі.'),
  { type: 'image', image: image('cleanly-03.png', 'Cleanly communication and connected request screens') },

];
