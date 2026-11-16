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
    "text": "Choosing a workout can mean checking time, level, equipment, and goals at once. I focused on a clear starting point and enough detail to decide before starting."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "My role and design focus"
  },
  {
    "type": "paragraph",
    "text": "As the lead designer, I worked with developers and the project manager. I designed the navigation, workout flow, progress views, and UI system across home, workouts, AI coach, nutrition, and profile."
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
    "type": "decision",
    "title": "Offer a starting point",
    "items": [
      {
        "label": "Hypothesis",
        "text": "A suggested workout could make starting simpler than browsing the full library first."
      },
      {
        "label": "What I changed",
        "text": "I brought today’s activity, the current plan, and a suggested workout onto the home screen."
      },
      {
        "label": "Design result",
        "text": "Users have a clear next option while keeping the full workout library available."
      }
    ]
  },
  {
    "type": "decision",
    "title": "Explain the workout before it starts",
    "items": [
      {
        "label": "Hypothesis",
        "text": "Showing time, level, and equipment before Start could help users judge whether a session fits."
      },
      {
        "label": "What I changed",
        "text": "I placed these details, the exercise list, and technique previews before the Start Workout action."
      },
      {
        "label": "Design result",
        "text": "Users can review the session before committing to it, with exercise guidance nearby."
      }
    ]
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
    "type": "decision",
    "title": "Give support its own place",
    "items": [
      {
        "label": "Hypothesis",
        "text": "Separate coach and nutrition views could support the routine without distracting from starting a workout."
      },
      {
        "label": "What I changed",
        "text": "I added coach topics, daily nutrition targets, and profile settings for goals and equipment."
      },
      {
        "label": "Design result",
        "text": "Guidance and preferences remain available while workout actions stay clear."
      }
    ]
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
    "text": "Make the next action stand out"
  },
  {
    "type": "paragraph",
    "text": "I used lime for key actions, selected options, and progress. Shared cards and navigation keep the five areas consistent."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Design result"
  },
  {
    "type": "paragraph",
    "text": "I delivered five connected areas with a clear path from choosing a workout to reviewing progress. Shared navigation and cards keep the experience consistent."
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
