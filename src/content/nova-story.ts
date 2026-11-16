import type { CaseBlock } from './projects';

// Hypotheses explain the design intent; they are not claims of tested effects.
export const novaTranslations: Record<string, string> = {
  "Accounts and cards grouped with freezing, PIN, and spending-limit controls.": "Рахунки й картки поруч із заморожуванням, PIN і лімітами витрат.",
  "Balance and payment shortcuts at the top could help users start common tasks without searching.": "Баланс і швидкі платежі нагорі могли допомогти починати часті завдання без пошуку.",
  "Card settings beside account information could make security controls easier to find.": "Налаштування картки поруч із рахунком могли зробити керування безпекою доступнішим.",
  "Charts and category budgets could help users see patterns that individual payments do not explain.": "Графіки й бюджети категорій могли показати закономірності, яких не видно з окремих платежів.",
  "Core need": "Ключова потреба",
  "Design response": "Відповідь у дизайні",
  "Design result": "Результат дизайну",
  "Everyday banking should make the next action easy to find without hiding money or security details. I focused on balances, transfers, card controls, and spending.": "Щоденний банкінг має робити наступну дію доступною, не приховуючи даних про гроші чи безпеку. Я зосередилася на балансах, переказах, керуванні картками й витратах.",
  "Explain spending beyond a transaction list": "Пояснити витрати за межами списку операцій",
  "Find a card and reach its controls in context.": "Знайти картку та її налаштування у відповідному контексті.",
  "Give payments and settings separate places": "Відділити платежі від налаштувань",
  "Hypothesis": "Гіпотеза",
  "I added period filters, income and expense charts, budget progress, and short insight cards.": "Я додала фільтри періодів, графіки доходів і витрат, прогрес бюджетів і короткі підсумки.",
  "I delivered three core flows—sending money, paying bills, and managing cards—with one UI system. Key details stay beside each action.": "Я створила три основні сценарії — перекази, оплату рахунків і керування картками — зі спільною UI-системою. Ключові деталі залишаються поруч із кожною дією.",
  "I designed the mobile experience from research and wireframes to final screens and reusable components for adults aged 18–50.": "Я спроєктувала мобільний досвід від дослідження й вайрфреймів до фінальних екранів і повторюваних компонентів для людей 18–50 років.",
  "I grouped Freeze Card, View PIN, Spending Limits, and International Use under Accounts and Cards.": "Я зібрала Freeze Card, View PIN, Spending Limits та International Use у розділі рахунків і карток.",
  "I grouped bills, top-ups, saved recipients, and upcoming payments together. Amounts and due dates stay beside the action they explain.": "Я зібрала рахунки, поповнення, збережених одержувачів і майбутні платежі разом. Суми й терміни залишаються поруч із відповідною дією.",
  "I kept personal details, security, notifications, and support in Profile, separate from daily payment tasks.": "Я залишила особисті дані, безпеку, сповіщення й підтримку в профілі, окремо від щоденних платежів.",
  "I kept saved recipients above the amount and repeated both in the Send button. I added search and filters to history.": "Я залишила збережених одержувачів над сумою й повторила обидва значення в кнопці Send. До історії додала пошук і фільтри.",
  "I placed the balance above Send, Receive, Pay Bills, and Scan QR. Cards and recent activity follow below.": "Я розмістила баланс над Send, Receive, Pay Bills і Scan QR. Картки й останні операції — нижче.",
  "I reviewed Monobank, Revolut, and Wise. Research focused on common tasks and navigation. I used five priorities: visible balances, simple transfers, searchable history, clear security controls, and useful spending summaries.": "Я порівняла Monobank, Revolut і Wise. Дослідження стосувалося частих завдань і навігації. Основою стали п’ять пріоритетів: видимі баланси, прості перекази, історія з пошуком, зрозуміла безпека й корисні підсумки витрат.",
  "Keep card controls with the card": "Залишити керування поруч із карткою",
  "Keeping the recipient and amount visible together could support a clearer final check.": "Одержувач і сума поруч могли зробити фінальну перевірку зрозумілішою.",
  "Know the amount, recipient, and available balance before sending.": "Бачити суму, одержувача й доступний баланс перед відправленням.",
  "Make the transfer easy to check": "Спростити перевірку переказу",
  "Making a payment": "Проведення платежу",
  "Managing cards": "Керування картками",
  "Move from a transaction to the broader spending pattern.": "Перейти від окремої операції до загальної картини витрат.",
  "My role": "Моя роль",
  "One customer, different financial tasks": "Один клієнт — різні фінансові завдання",
  "Put common actions first": "Винести часті дії нагору",
  "Recipient selection, a prominent amount, and a send action naming both amount and recipient.": "Вибір одержувача, помітна сума й кнопка, що називає суму та одержувача.",
  "Reviewing spending": "Перегляд витрат",
  "Searchable history, time periods, category budgets, and spending summaries.": "Історія з пошуком, періоди, бюджети категорій і підсумки витрат.",
  "The home screen separates quick actions from the details users may want to review.": "Головний екран розділяє швидкі дії й деталі для перевірки.",
  "The problem": "Проблема",
  "User context": "Контекст користувача",
  "Users can check who receives the money and review past transfers in a separate view.": "Користувачі можуть перевірити одержувача й переглянути попередні перекази в окремому розділі.",
  "Users can review a card and reach its controls from the same section.": "Користувачі можуть переглянути картку й перейти до її налаштувань в одному розділі.",
  "Users have both detailed payment history and a wider view of their spending.": "Користувачі мають детальну історію платежів і загальну картину витрат.",
  "What I changed": "Що я змінила",
  "What shaped my decisions": "Основа моїх рішень"
};

export const novaStory: CaseBlock[] = [
  {
    "type": "image",
    "image": {
      "src": "nova-bank-0.png",
      "alt": "Nova Bank home, spending analytics, and accounts overview",
      "width": 1420,
      "height": 1251
    }
  },
  {
    "type": "heading",
    "level": 2,
    "text": "The problem"
  },
  {
    "type": "paragraph",
    "text": "Opening a banking app often starts with a small question: can I send this amount, which card am I using, or what was that payment? The interface needs to answer quickly while keeping money and security details clear."
  },
  {
    "type": "heading",
    "level": 2,
    "text": "My role and design focus"
  },
  {
    "type": "paragraph",
    "text": "As the lead designer, I worked with developers and the project manager from research and wireframes to final screens and reusable components. I designed for adults aged 18–50, focusing on everyday payments, account control, and understanding spending."
  },
  {
    "type": "table",
    "title": "One customer, different financial tasks",
    "columns": [
      "User context",
      "Core need",
      "Design response"
    ],
    "rows": [
      [
        "Making a payment",
        "Know the amount, recipient, and available balance before sending.",
        "Recipient selection, a prominent amount, and a send action naming both amount and recipient."
      ],
      [
        "Managing cards",
        "Find a card and reach its controls in context.",
        "Accounts and cards grouped with freezing, PIN, and spending-limit controls."
      ],
      [
        "Reviewing spending",
        "Move from a transaction to the broader spending pattern.",
        "Searchable history, time periods, category budgets, and spending summaries."
      ]
    ]
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Choose what needs to be clear first"
  },
  {
    "type": "paragraph",
    "text": "I reviewed Monobank, Revolut, and Wise, alongside research focused on common tasks and navigation. I used that work to set priorities: show balances, make transfers easy to check, support history search, and keep card controls within reach."
  },
  {
    "type": "heading",
    "level": 3,
    "text": "Start with the money and the next action"
  },
  {
    "type": "paragraph",
    "text": "The home screen had to balance an overview with quick access to a task. I expected a visible balance and payment shortcuts to offer a clearer starting point than a long list of banking features."
  },
  {
    "type": "paragraph",
    "text": "I placed the balance above Send, Receive, Pay Bills, and Scan QR. Cards, spending, and recent transactions follow, so people can act first or continue into the details."
  },
  {
    "type": "image",
    "image": {
      "src": "nova-bank-updated-5.png",
      "alt": "Nova Bank home hierarchy: total balance, quick actions, card, spending, and recent transactions",
      "width": 2202,
      "height": 2168
    }
  },
  {
    "type": "heading",
    "level": 3,
    "text": "Make the last check easy"
  },
  {
    "type": "paragraph",
    "text": "A transfer can be a short flow and still leave someone unsure who will receive the money. My hypothesis was that keeping the recipient and amount together would support a clearer final check."
  },
  {
    "type": "paragraph",
    "text": "I placed saved recipients above the amount and repeated both in the Send button. After the payment, a separate history view offers search and filters for finding the transaction again."
  },
  {
    "type": "image",
    "image": {
      "src": "nova-bank-updated-6.png",
      "alt": "Nova Bank send-money screen and transaction history with search and category filters",
      "width": 2202,
      "height": 2168
    }
  },
  {
    "type": "heading",
    "level": 3,
    "text": "Put control next to the card"
  },
  {
    "type": "paragraph",
    "text": "Card details are useful when they lead to an action. I grouped Freeze Card, View PIN, Spending Limits, and International Use under Accounts and Cards, beside the account information."
  },
  {
    "type": "paragraph",
    "text": "I expected this grouping to make controls easier to find in context. Someone reviewing a card can move directly to its settings instead of searching through a general settings menu."
  },
  {
    "type": "image",
    "image": {
      "src": "nova-bank-updated-7.png",
      "alt": "Nova Bank account balances, bank cards, and contextual card controls",
      "width": 2202,
      "height": 2168
    }
  },
  {
    "type": "heading",
    "level": 3,
    "text": "Explain the pattern behind the payments"
  },
  {
    "type": "paragraph",
    "text": "Transaction history answers what happened to one payment. Understanding spending across a month needs a different view. I kept these as related but separate tasks."
  },
  {
    "type": "paragraph",
    "text": "I added period filters, income and expense charts, category budgets, and short insight cards. My hypothesis was that this wider view could help people understand patterns that a transaction list alone does not explain."
  },
  {
    "type": "image",
    "image": {
      "src": "nova-bank-updated-9.png",
      "alt": "Nova Bank spending analytics with periods, income and expenses, category budgets, and insights",
      "width": 2202,
      "height": 2168
    }
  },
  {
    "type": "heading",
    "level": 2,
    "text": "Keep regular payments easy to review"
  },
  {
    "type": "paragraph",
    "text": "Bills, top-ups, saved recipients, and upcoming payments share one area. Amounts and due dates sit beside the action, helping people review the payment context before they continue."
  },
  {
    "type": "image",
    "image": {
      "src": "nova-bank-updated-10.png",
      "alt": "Nova Bank payments with due dates, top-up amounts, saved recipients, and upcoming bills",
      "width": 2202,
      "height": 2168
    }
  },
  {
    "type": "paragraph",
    "text": "I kept personal details, security, notifications, and support in Profile. This gives account settings a predictable place without adding them to the daily payment flow."
  },
  {
    "type": "image",
    "image": {
      "src": "nova-bank-updated-11.png",
      "alt": "Nova Bank profile with personal information, security settings, notifications, and support",
      "width": 2202,
      "height": 2168
    }
  },
  {
    "type": "heading",
    "level": 2,
    "text": "A clear path through everyday banking"
  },
  {
    "type": "paragraph",
    "text": "I delivered connected flows for sending money, paying bills, and managing cards, with one reusable UI system. My contribution was to keep the details needed for a decision close to the action. Each view supports a clear financial task, while shared navigation connects the experience."
  },
  {
    "type": "image",
    "image": {
      "src": "nova-bank-1.png",
      "alt": "Nova Bank sign-in, transfer, and transaction history product screens",
      "width": 1720,
      "height": 914
    }
  }
];
