import type { CaseBlock } from './projects';

// Hypotheses explain the design intent; they are not claims of tested effects.
export const steadyTranslations: Record<string, string> = {
  "A suggested session with beginner labels, duration, and a starter-plan entry point.": "Запропоноване тренування з позначкою рівня, тривалістю та переходом до стартової програми.",
  "A suggested workout could make starting simpler than browsing the full library first.": "Запропоноване тренування могло спростити старт порівняно з переглядом усієї бібліотеки.",
  "Choosing a workout can mean checking time, level, equipment, and goals at once. I focused on a clear starting point and enough detail to decide before starting.": "Вибір тренування часто вимагає одночасно перевірити час, рівень, обладнання й цілі. Я зосередилася на зрозумілій відправній точці й деталях для рішення перед стартом.",
  "Choosing today’s session": "Вибір тренування на сьогодні",
  "Continuing the routine": "Продовження рутини",
  "Core need": "Ключова потреба",
  "Decide whether a workout fits the available time and level.": "Зрозуміти, чи підходить тренування за часом і рівнем.",
  "Design response": "Відповідь у дизайні",
  "Design result": "Результат дизайну",
  "Explain the workout before it starts": "Пояснити тренування до старту",
  "Give support its own place": "Дати підтримці окреме місце",
  "Guidance and preferences remain available while workout actions stay clear.": "Підтримка й уподобання залишаються доступними, а дії тренування — зрозумілими.",
  "Hypothesis": "Гіпотеза",
  "I added coach topics, daily nutrition targets, and profile settings for goals and equipment.": "Я додала теми для тренера, щоденні цілі харчування й налаштування цілей та обладнання в профілі.",
  "I brought today’s activity, the current plan, and a suggested workout onto the home screen.": "Я об’єднала активність дня, поточну програму й запропоноване тренування на головному екрані.",
  "I delivered five connected areas with a clear path from choosing a workout to reviewing progress. Shared navigation and cards keep the experience consistent.": "Я створила п’ять пов’язаних розділів зі зрозумілим шляхом від вибору тренування до перегляду прогресу. Спільні навігація й картки зберігають узгоджений досвід.",
  "I designed the navigation, workout flow, progress views, and UI system across home, workouts, AI coach, nutrition, and profile.": "Я спроєктувала навігацію, сценарій тренування, перегляд прогресу й UI-систему для головної, тренувань, ШІ-тренера, харчування й профілю.",
  "I placed these details, the exercise list, and technique previews before the Start Workout action.": "Я розмістила ці деталі, список вправ і підказки техніки перед кнопкою Start Workout.",
  "I used lime for key actions, selected options, and progress. Shared cards and navigation keep the five areas consistent.": "Я використала лаймовий для головних дій, вибраних опцій і прогресу. Спільні картки й навігація об’єднують п’ять розділів.",
  "Keep guidance connected to the routine": "Пов’язати підтримку зі щоденною рутиною",
  "Keep progress, preferences, and supporting guidance accessible.": "Мати доступ до прогресу, уподобань і додаткової підтримки.",
  "Know what is involved before committing to a workout.": "Знати склад тренування перед початком.",
  "Make the next action stand out": "Виділити наступну дію",
  "My role": "Моя роль",
  "Offer a starting point": "Дати відправну точку",
  "One routine, three moments of decision": "Одна рутина — три моменти вибору",
  "Preparing to start": "Підготовка до старту",
  "Separate coach and nutrition views could support the routine without distracting from starting a workout.": "Окремі розділи тренера й харчування могли підтримувати рутину, не відволікаючи від старту тренування.",
  "Showing time, level, and equipment before Start could help users judge whether a session fits.": "Час, рівень і обладнання перед стартом могли допомогти оцінити, чи підходить тренування.",
  "The problem": "Проблема",
  "User context": "Контекст користувача",
  "Users can review the session before committing to it, with exercise guidance nearby.": "Користувачі можуть оцінити тренування перед стартом і бачити підказки до вправ поруч.",
  "Users have a clear next option while keeping the full workout library available.": "Користувачі мають зрозумілий наступний варіант і водночас доступ до всієї бібліотеки.",
  "Visible plan progress, a profile for goals and equipment, and dedicated nutrition and coach views.": "Видимий прогрес програми, профіль цілей та обладнання, окремі розділи харчування й тренера.",
  "What I changed": "Що я змінила",
  "Workout details with duration, equipment, exercise count, and technique previews.": "Деталі з тривалістю, обладнанням, кількістю вправ і підказками техніки."
};

export const steadyStory: CaseBlock[] = [
  {
    "type": "image",
    "image": {
      "src": "fitness-01.png",
      "alt": "Fitness app dashboard with AI coach, daily activity and workouts",
      "width": 3200,
      "height": 2400
    }
  },
  {
    "type": "heading",
    "level": 2,
    "text": "The problem"
  },
  {
    "type": "paragraph",
    "text": "Before a workout begins, there is already a decision to make. Does the session fit the time available? Is the level right? Is equipment needed? Steady is a fitness app designed to help people answer those questions and take a manageable next step."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "My role and design focus"
  },
  {
    "type": "paragraph",
    "text": "As the lead designer, I worked with developers and the project manager on navigation, the workout flow, progress views, and the UI system. I connected home, workouts, AI coach, nutrition, and profile around the daily routine."
  },
  {
    "type": "table",
    "title": "One routine, three moments of decision",
    "columns": [
      "User context",
      "Core need",
      "Design response"
    ],
    "rows": [
      [
        "Choosing today’s session",
        "Decide whether a workout fits the available time and level.",
        "A suggested session with beginner labels, duration, and a starter-plan entry point."
      ],
      [
        "Preparing to start",
        "Know what is involved before committing to a workout.",
        "Workout details with duration, equipment, exercise count, and technique previews."
      ],
      [
        "Continuing the routine",
        "Keep progress, preferences, and supporting guidance accessible.",
        "Visible plan progress, a profile for goals and equipment, and dedicated nutrition and coach views."
      ]
    ]
  },
  {
    "type": "heading",
    "level": 3,
    "text": "Give today a starting point"
  },
  {
    "type": "paragraph",
    "text": "A full workout library offers choice, but it also asks people to choose before they can begin. I expected a suggested session on the home screen to offer a simpler first step."
  },
  {
    "type": "paragraph",
    "text": "I brought today’s activity, the current plan, and a suggested workout together. The library stays available, while the main view gives someone a concrete option for today."
  },
  {
    "type": "heading",
    "level": 3,
    "text": "Explain the commitment before Start"
  },
  {
    "type": "paragraph",
    "text": "A suggestion is only useful if the person can judge whether it fits. I placed duration, level, equipment, the exercise list, and technique previews before the Start Workout action."
  },
  {
    "type": "paragraph",
    "text": "My hypothesis was that seeing the session in advance would support a more informed choice. Progress and beginner labels keep the plan visible without hiding what the actual workout involves."
  },
  {
    "type": "image",
    "image": {
      "src": "fitness-02.png",
      "alt": "Fitness app personalized workout plan and exercise details",
      "width": 3200,
      "height": 2400,
      "caption": "Workout planning and session details explain the commitment before the primary action."
    }
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Keep guidance connected to the routine"
  },
  {
    "type": "heading",
    "level": 3,
    "text": "Support the routine without taking it over"
  },
  {
    "type": "paragraph",
    "text": "Coaching and nutrition can support a workout, but they also add choices. I gave each its own view so the main workout path could stay focused."
  },
  {
    "type": "paragraph",
    "text": "Coach topics provide a place for questions; nutrition shows daily targets and meals; the profile holds goals, equipment, and preferences. I expected these separate entry points to keep support accessible without crowding the next workout action."
  },
  {
    "type": "image",
    "image": {
      "src": "fitness-03.png",
      "alt": "Fitness app AI coach, nutrition tracking and profile",
      "width": 3200,
      "height": 2400
    }
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Use visual focus to support the next step"
  },
  {
    "type": "paragraph",
    "text": "I used lime for primary actions, selected options, and progress against dark surfaces. Repeated cards and navigation connect the five areas. The visual system supports the same priority as the flow: make the next action easy to recognize."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "From choosing a session to following a routine"
  },
  {
    "type": "paragraph",
    "text": "I designed a path from a suggested workout to preparation, activity, and progress, with supporting guidance nearby. My contribution was to connect those moments around a manageable next step, so the user can see what to do today and where to return tomorrow."
  },
  {
    "type": "image",
    "image": {
      "src": "fitness-04.png",
      "alt": "Fitness app interface collection with workouts and nutrition",
      "width": 3200,
      "height": 2400,
      "caption": "The interface collection shows consistent actions, navigation, and progress patterns."
    }
  }
];
