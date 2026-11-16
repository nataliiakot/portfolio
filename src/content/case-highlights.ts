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
    contribution: t('I connected job search, client checks, and manager approval so each role can see what happens next.', 'Я пов’язала пошук роботи, перевірку клієнтів і погодження менеджером, щоб кожна роль бачила наступний крок.'),
    metrics: [
      { value: '−30%', kind: outcome, label: t('Time to find and confirm a job', 'Час пошуку й підтвердження роботи'), note: t('Reported comparison with other apps for this specific task.', 'Заявлене порівняння з іншими застосунками для цього сценарію.') },
      { value: '3', kind: scope, label: t('Roles connected in one workflow', 'Ролі в одному спільному сценарії'), note: t('Cleaner, manager, and client.', 'Клінер, менеджер і клієнт.') },
    ],
  },
  'hr-boost': {
    contribution: t('I connected employee data, requests, and templates in one UI system, while guiding the design team across 450+ screens.', 'Я об’єднала дані співробітників, запити й шаблони в єдину UI-систему та координувала дизайн-команду в роботі над 450+ екранами.'),
    metrics: [
      { value: '−45%', kind: outcome, label: t('Routine HR administration time', 'Час рутинного HR-адміністрування'), note: t('Recorded in project measurements.', 'За замірами проєкту.') },
      { value: '−7%', kind: outcome, label: t('Employee onboarding time', 'Час онбордингу співробітників'), note: t('Recorded in project measurements.', 'За замірами проєкту.') },
      { value: '450+', kind: scope, label: t('High-fidelity screens', 'Деталізованих екранів'), note: t('One consistent interface system.', 'Єдина узгоджена система інтерфейсу.') },
    ],
  },
  fleeto: {
    contribution: t('I brought vehicle status, trips, and driver shifts into one workspace so teams can review the details behind each decision.', 'Я об’єднала статуси авто, поїздки й зміни водіїв в одному просторі, щоб команда могла перевіряти деталі перед рішенням.'),
    metrics: [
      { value: '3', kind: scope, label: t('Operational roles supported', 'Робочі ролі в системі'), note: t('Dispatcher, fleet manager, and administrator.', 'Диспетчер, менеджер автопарку й адміністратор.') },
    ],
  },
  'nova-bank': {
    contribution: t('I designed transfers, bill payments, and card controls with the key details next to each action.', 'Я спроєктувала перекази, оплату рахунків і керування картками з ключовими деталями поруч із кожною дією.'),
    metrics: [
      { value: '3', kind: scope, label: t('Core banking flows designed', 'Основні банківські сценарії'), note: t('Sending money, paying bills, and managing cards.', 'Переказ коштів, оплата рахунків і керування картками.') },
    ],
  },
  'fitness-app': {
    contribution: t('I designed a clear path from choosing a workout to starting it, with progress and guidance in the same app.', 'Я спроєктувала зрозумілий шлях від вибору тренування до старту, з прогресом і підтримкою в тому самому застосунку.'),
    metrics: [
      { value: '5', kind: scope, label: t('Connected product areas', 'Пов’язаних розділів продукту'), note: t('Home, workouts, AI coach, nutrition, and profile.', 'Головна, тренування, ШІ-тренер, харчування й профіль.') },
    ],
  },
};
