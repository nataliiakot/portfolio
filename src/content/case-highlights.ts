export interface CaseHighlights {
  contribution: string;
  metrics: { value: string; label: string; kind: string; note?: string }[];
}
export const highlightTranslations: Record<string, string> = {};
const t = (en: string, uk: string) => { highlightTranslations[en] = uk; return en; };
const outcome = t('Reported outcome', 'Заявлений результат');
const scope = t('Design scope', 'Обсяг дизайну');
t('My contribution', 'Мій внесок');
t('Project highlights', 'Ключові показники проєкту');
export const caseHighlights: Record<string, CaseHighlights> = {
  cleanly: {
    contribution: t('I designed Cleanly from scratch and proposed a personal client network, with manager approval for adding new clients.', 'Я пов’язала пошук роботи, перевірку клієнтів і погодження менеджером, щоб кожна роль бачила наступний крок.'),
    metrics: [
      { value: '−30%', kind: outcome, label: t('Time from opening the app to client confirmation', 'Час від відкриття застосунку до підтвердження клієнтом'), note: t('First-month analytics; compared with similar apps the users had used before.', 'Заявлене порівняння з іншими застосунками для цього сценарію.') },
      { value: '3', kind: scope, label: t('Roles connected in one workflow', 'Ролі в одному спільному сценарії'), note: t('Cleaner, manager, and client.', 'Клінер, менеджер і клієнт.') },
    ],
  },
  'hr-boost': {
    contribution: t('I designed one platform for employee records, HR workflows, and everyday employee tasks, with role-based access keeping each workspace focused.', 'Я самостійно спроєктувала HR-платформу з нуля: 450+ екранів, спільну структуру й доступ відповідно до ролі.'),
    metrics: [
      { value: '−45%', kind: outcome, label: t('Routine HR administration time', 'Час рутинного HR-адміністрування'), note: t('First-month analytics; compared with the previous workflow across multiple tools.', 'За аналітикою після першого місяця тестування.') },
      { value: '−7%', kind: outcome, label: t('Employee onboarding time', 'Час онбордингу співробітників'), note: t('First-month analytics; compared with the previous workflow across multiple tools.', 'За аналітикою після першого місяця тестування.') },
      { value: '450+', kind: scope, label: t('High-fidelity screens', 'Деталізованих екранів'), note: t('One consistent interface system.', 'Єдина узгоджена система інтерфейсу.') },
    ],
  },
  fleeto: {
    contribution: t('I designed a fleet management workspace that connects live tracking, trip details, driver shifts, and access controls for different teams.', 'Я об’єднала статуси авто, поїздки й зміни водіїв в одному просторі, щоб команда могла перевіряти деталі перед рішенням.'),
    metrics: [
      { value: '3', kind: scope, label: t('Operational roles supported', 'Робочі ролі в системі'), note: t('Dispatcher, fleet manager, and administrator.', 'Диспетчер, менеджер автопарку й адміністратор.') },
    ],
  },
  'nova-bank': {
    contribution: t('I designed a mobile banking app covering transfers, bill payments, card controls, and spending insights, with key details close to each action.', 'Я спроєктувала перекази, оплату рахунків і керування картками з ключовими деталями поруч із кожною дією.'),
    metrics: [
      { value: '3', kind: scope, label: t('Core banking flows designed', 'Основні банківські сценарії'), note: t('Sending money, paying bills, and managing cards.', 'Переказ коштів, оплата рахунків і керування картками.') },
    ],
  },
  'fitness-app': {
    contribution: t('I designed a fitness app that connects workout planning, progress, nutrition, and coaching around a clear next step.', 'Я спроєктувала зрозумілий шлях від вибору тренування до старту, з прогресом і підтримкою в тому самому застосунку.'),
    metrics: [
      { value: '5', kind: scope, label: t('Connected product areas', 'Пов’язаних розділів продукту'), note: t('Home, workouts, AI coach, nutrition, and profile.', 'Головна, тренування, ШІ-тренер, харчування й профіль.') },
    ],
  },
};
