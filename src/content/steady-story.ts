import type { CaseBlock } from './projects';
export const steadyTranslations: Record<string,string> = {
  "Choosing today’s session": "Вибір тренування на сьогодні",
  "Decide whether a workout fits the available time and level.": "Зрозуміти, чи підходить тренування за часом і рівнем.",
  "A suggested session with beginner labels, duration, and a starter-plan entry point.": "Запропоноване тренування з позначкою рівня, тривалістю та переходом до стартової програми.",
  "Preparing to start": "Підготовка до старту",
  "Know what is involved before committing to a workout.": "Знати склад тренування перед початком.",
  "Workout details with duration, equipment, exercise count, and technique previews.": "Деталі з тривалістю, обладнанням, кількістю вправ і підказками техніки.",
  "Continuing the routine": "Продовження рутини",
  "Keep progress, preferences, and supporting guidance accessible.": "Мати доступ до прогресу, уподобань і додаткової підтримки.",
  "Visible plan progress, a profile for goals and equipment, and dedicated nutrition and coach views.": "Видимий прогрес програми, профіль цілей та обладнання, окремі розділи харчування й тренера.",
  "One routine, three moments of decision": "Одна рутина — три моменти вибору",
  "User context": "Контекст користувача",
  "The opening home screen brings today’s activity, the current plan, and a suggested workout together. The aim is to offer a starting point before asking the user to browse the full workout library.": "Головний екран на початку кейсу поєднує активність дня, поточну програму й запропоноване тренування. Мета — дати відправну точку до того, як користувач почне переглядати всю бібліотеку."
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
    "text": "The idea behind Steady"
  },
  {
    "type": "paragraph",
    "text": "Steady is a mobile fitness companion built around consistency. Workouts, daily activity, nutrition, and an AI coach share one workspace, helping the user move from deciding what to do to taking a manageable next step. The name reflects the direction of the experience: a routine that can be repeated, adjusted, and continued."
  },
  {
    "type": "paragraph",
    "text": "The product direction is simple: make starting clear, make progress visible, and keep the next session approachable.",
    "emphasis": true
  },
  {
    "type": "heading",
    "level": 2,
    "text": "The design problem"
  },
  {
    "type": "paragraph",
    "text": "A fitness experience asks people to make several decisions at once: which workout to choose, whether it matches their level, how long it takes, and how it fits with nutrition and activity. If those decisions arrive without a clear hierarchy, the planning can become more demanding than the first action."
  },
  {
    "type": "paragraph",
    "text": "I framed the interface around three questions: What should I do today? What will this session involve? How does it connect to my routine? These questions set the priorities for the home screen, workout details, and supporting guidance."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "My role as UX/UI & Product Designer"
  },
  {
    "type": "paragraph",
    "text": "As the UX/UI & Product Designer, I owned the design direction and the relationship between the core screens. My focus was the information hierarchy, navigation, workout discovery, progress presentation, and a consistent visual system across home, workouts, the AI coach, nutrition, and profile."
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
    "level": 2,
    "text": "A daily loop rather than disconnected features"
  },
  {
    "type": "paragraph",
    "text": "The opening home screen brings today’s activity, the current plan, and a suggested workout together. The aim is to offer a starting point before asking the user to browse the full workout library."
  },
  {
    "type": "paragraph",
    "text": "The home screen gives daily activity and a suggested workout a shared context. It offers a starting point without requiring the user to explore every section first. Navigation keeps workouts, guidance, nutrition, and profile available without giving every option equal visual weight."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Explain the commitment before the start"
  },
  {
    "type": "paragraph",
    "text": "Workout discovery highlights a starter plan, progress, and beginner-oriented categories. The details screen brings together duration, level, equipment, exercise count, and the routine before the primary Start Workout action. The user can judge whether the session fits the time and resources available."
  },
  {
    "type": "paragraph",
    "text": "This hierarchy makes the decision concrete: first understand the session, then commit to it. Supporting technique cues stay with the relevant exercise rather than competing with the overall plan."
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
    "type": "paragraph",
    "text": "The AI coach is presented as a place for questions about workouts and nutrition. Suggested topics make the entry point specific, while the conversation remains separate from the primary workout action. This gives guidance a clear place without turning every screen into a chat interface."
  },
  {
    "type": "paragraph",
    "text": "Nutrition shows the daily calorie target, macronutrients, and planned meals together. The profile holds goals, equipment, frequency, and preferences. These views keep the user’s broader routine available alongside individual sessions."
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
    "text": "Use contrast to direct attention"
  },
  {
    "type": "paragraph",
    "text": "Dark surfaces give the content a stable base. Lime identifies primary actions, selected options, and progress; white carries the main content, while quieter text supports secondary detail. Reusable cards, navigation, and action patterns connect the different sections into one system."
  },
  {
    "type": "paragraph",
    "text": "The same accent does not need to make every element prominent. Its job is to help the user distinguish the next action from the information that explains it.",
    "emphasis": true
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Design outcome"
  },
  {
    "type": "paragraph",
    "text": "Steady brings the daily overview, workout selection, session details, guidance, nutrition, and profile into a connected mobile experience. The design result is a clear route from intention to action, supported by visible progress and consistent interaction patterns."
  },
  {
    "type": "paragraph",
    "text": "The central principle is to make the routine feel repeatable. Each screen should answer the immediate question and make the next step easier to understand."
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
