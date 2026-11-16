export interface CaseHighlights {
  contribution: string;
  metrics: { value: string; label: string; kind: string; note?: string }[];
}
export const highlightTranslations: Record<string, string> = {};
const t = (en: string, uk: string) => { highlightTranslations[en] = uk; return en; };
const outcome = t('Reported outcome', 'Заявлений результат');
const scope = t('Design scope', 'Обсяг дизайну');
t('My contribution', 'Мій внесок');
t('Results and my contribution', 'Результати та мій внесок');
export const caseHighlights: Record<string, CaseHighlights> = {
  cleanly: {
    contribution: t('I designed the mobile workflow from request discovery to manager approval, assignment, and in-app communication.', 'Я спроєктувала мобільний сценарій від пошуку запиту до погодження менеджером, призначення й спілкування в застосунку.'),
    metrics: [
      { value: '−30%', kind: outcome, label: t('Time to find and confirm a job', 'Час пошуку й підтвердження роботи'), note: t('Reported comparison with other apps for this specific task.', 'Заявлене порівняння з іншими застосунками для цього сценарію.') },
      { value: '3', kind: scope, label: t('Roles connected in one workflow', 'Ролі в одному спільному сценарії'), note: t('Cleaner, manager, and client.', 'Клінер, менеджер і клієнт.') },
    ],
  },
  'hr-boost': {
    contribution: t('I shaped a connected HR workspace: employee profiles, requests, schedules, permissions, and reusable templates across 450+ screens.', 'Я спроєктувала цілісний HR-простір: профілі, запити, розклад, доступи й повторювані шаблони на 450+ екранах.'),
    metrics: [
      { value: '−45%', kind: outcome, label: t('Routine HR administration time', 'Час рутинного HR-адміністрування'), note: t('Recorded in project measurements.', 'За замірами проєкту.') },
      { value: '−7%', kind: outcome, label: t('Employee onboarding time', 'Час онбордингу співробітників'), note: t('Recorded in project measurements.', 'За замірами проєкту.') },
      { value: '450+', kind: scope, label: t('High-fidelity screens', 'Деталізованих екранів'), note: t('One consistent interface system.', 'Єдина узгоджена система інтерфейсу.') },
    ],
  },
  fleeto: {
    contribution: t('I connected fleet monitoring with trip details, driver shifts, and permissions through shared navigation, tables, and status patterns.', 'Я пов’язала моніторинг автопарку з поїздками, змінами водіїв і доступами через спільну навігацію, таблиці й патерни статусів.'),
    metrics: [
      { value: '3', kind: scope, label: t('Operational roles supported', 'Робочі ролі в системі'), note: t('Dispatcher, fleet manager, and administrator.', 'Диспетчер, менеджер автопарку й адміністратор.') },
    ],
  },
  'nova-bank': {
    contribution: t('I designed the mobile banking experience and reusable UI system, keeping balances, recipients, and card controls close to the actions they support.', 'Я спроєктувала мобільний банкінг і повторювану UI-систему, розмістивши баланси, одержувачів і керування картками поруч із відповідними діями.'),
    metrics: [
      { value: '3', kind: scope, label: t('Core banking flows designed', 'Основні банківські сценарії'), note: t('Sending money, paying bills, and managing cards.', 'Переказ коштів, оплата рахунків і керування картками.') },
    ],
  },
  'fitness-app': {
    contribution: t('I designed the hierarchy and navigation around choosing a workout, preparing to start, and continuing a routine, with progress and guidance in context.', 'Я спроєктувала ієрархію й навігацію навколо вибору тренування, підготовки до старту й продовження рутини, з прогресом і підтримкою в контексті.'),
    metrics: [
      { value: '5', kind: scope, label: t('Connected product areas', 'Пов’язаних розділів продукту'), note: t('Home, workouts, AI coach, nutrition, and profile.', 'Головна, тренування, ШІ-тренер, харчування й профіль.') },
    ],
  },
};
