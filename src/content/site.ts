export const profile = {
  name: 'Nataliia Kot', wordmark: 'Nataliia Kot', role: 'UX/UI & Product Designer',
  title: 'Nataliia Kot — UX/UI & Product Designer',
  description: 'Nataliia Kot is a UX/UI & Product Designer creating end-to-end experiences for B2B and B2C web and mobile products.',
  hero: 'I design end-to-end experiences for B2B and B2C web and mobile products, combining analytical thinking with modern UI to solve real problems and support product growth.',
  about: [
    'I’m Natalia, a UX/UI & Product Designer working across web and mobile products. I approach design as a business tool: understanding the problem, shaping the experience, and creating interfaces that support both user needs and product goals.',
  ],
  email: 'nataliiakotdesign@gmail.com', linkedin: 'https://www.linkedin.com/in/nataliia-kot-784569318/',
  phone: '+38 099 080 36 93', phoneHref: 'tel:+380990803693',
  telegram: 'https://t.me/NataKot',
  cvPath: 'https://drive.google.com/file/d/1ZkO7tM8xXRr6P7zr8eMA1x0SiUyDPmeN/view?usp=sharing',
  languages: [{ name: 'Ukrainian', level: 'C2' }, { name: 'English', level: 'B2+' }],
};
export const navigation = [
  { label: 'Work', id: 'work' }, { label: 'About', id: 'about' },
];
export const experience = [
  { role: 'UX/UI & Product Designer', company: 'BandaPixels', dates: 'Jan 2025 – Oct 2026', bullets: [
    'Designed end-to-end experiences for B2B and B2C web and mobile products across healthcare, petcare, transfer booking, banking, and HR management.',
    'Initiated and led the adoption of AI tools within the design team, integrating them into daily workflows to improve efficiency and accelerate design processes.',
    'Independently built a design system with reusable components and standards to improve UI consistency and streamline workflows.',
    'Conducted research with real users and translated findings into UX improvements that reduced task completion time by 15%.',
  ] },
  { role: 'UX/UI & Product Designer', company: 'Onix-Systems', dates: 'Sep 2024 – Jan 2025', bullets: [
    'Designed a mobile restaurant reservation app, simplifying restaurant discovery, table selection, and booking.',
    'Streamlined the booking journey through improved navigation and fewer steps, reducing booking time by 30%.',
  ] },
  { role: 'UX/UI & Product Designer', company: 'Project-Based Work', dates: 'Mar 2024 – Aug 2024', bullets: [
    'Delivered end-to-end web and mobile design solutions across healthcare, legal services, and e-commerce.',
    'Designed scalable UX/UI solutions around business models, user needs, and technical constraints.',
    'Worked directly with clients to define project scope, present design decisions, and refine solutions based on feedback.',
  ] },
];
export const expertise = [
  { title: 'End-to-end UX/UI', description: 'From understanding the problem to shaping clear web and mobile experiences' },
  { title: 'User research', description: 'Turning insights from real users into practical interface improvements' },
  { title: 'Design systems', description: 'Building reusable components and standards for consistent, scalable interfaces' },
  { title: 'AI-assisted design workflows', description: 'Integrating AI tools into everyday design work to improve efficiency' },
  { title: 'Client collaboration', description: 'Defining scope, communicating design decisions, and refining solutions through feedback' },
];
export interface Credential { title: string; institution: string; dates?: string; href?: string; }
export const education: Credential[] = [
  { title: 'UX/UI Design', institution: 'Beetroot Academy', dates: 'Feb 2024 – Jul 2024' },
  { title: 'Web Design', institution: 'Projector', dates: 'Jan 2023 – Mar 2024' },
  { title: 'UX/UI Design', institution: 'Shpp', dates: 'Sep 2023 – Dec 2024' },
  { title: 'Entrepreneurship', institution: 'University', dates: '2021–2023' },
];
export const certifications: Credential[] = [
  { title: 'Code For Designers', institution: 'Shpp' },
  { title: 'Claude Code In Action', institution: 'Anthropic' },
  { title: 'UX Writing', institution: 'Beetroot Academy' },
  { title: 'UX/UI Design', institution: 'Creative Practice' },
  { title: 'UX/UI Design', institution: 'Genius.Space' },
];
