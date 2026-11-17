export const HERO = {
  name: "Manu Bhargav Srirangarajan",
  role: "Senior Software Engineer",
  tagline: "I try making the web an awesome place.",
  resume: "/assets/resume.pdf",
  location: "Seattle, WA",
  email: "manubhargav27@gmail.com",
} as const;

export const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/Manubhargav/",
    handle: "github.com/Manubhargav",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/manubhargav/",
    handle: "linkedin.com/in/manubhargav",
    icon: "linkedin",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/manubhargav/",
    handle: "@manubhargav",
    icon: "instagram",
  },
  {
    label: "Twitter / X",
    href: "https://twitter.com/manubhargav27",
    handle: "@manubhargav27",
    icon: "x",
  },
  {
    label: "Medium",
    href: "https://medium.com/@manubhargav",
    handle: "@manubhargav",
    icon: "book-open",
  },
  {
    label: "Email",
    href: "mailto:manubhargav27@gmail.com",
    handle: "manubhargav27@gmail.com",
    icon: "mail",
  },
] as const;

export const PROJECTS = [
  {
    id: "boardly",
    title: "Boardly",
    subtitle: "Real-time collaborative Kanban board",
    description:
      "Drag-and-drop Kanban board with live multi-user collaboration, built with React, TypeScript, Vite, Tailwind CSS, Firebase, Zustand, and @dnd-kit.",
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Firebase",
      "Zustand",
      "@dnd-kit",
    ],
    link: "https://boardly-henna.vercel.app",
    repo: "https://github.com/Manubhargav/boardly",
    screenshot: "/projects/boardly.png",
  },
  {
    id: "mood-board",
    title: "Mood Board Creator",
    subtitle: "Canvas-based mood board with real-time collaboration",
    description:
      "Visual mood board application with canvas-based image manipulation and real-time collaboration, built with React, TypeScript, Tailwind CSS, Konva.js, Firebase, Zustand, and Framer Motion.",
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Konva.js",
      "Firebase",
      "Zustand",
      "Framer Motion",
    ],
    link: "https://mood-board-jet.vercel.app/",
    repo: "https://github.com/Manubhargav/mood-board",
    screenshot: "/projects/mood-board.png",
  },
  {
    id: "instant-poll",
    title: "InstantPoll",
    subtitle: "Real-time polling app with live results and dynamic charts",
    description:
      "Real-time polling app with live results and dynamic charts, built with React, TypeScript, Tailwind CSS, Firebase, Zustand, and Framer Motion.",
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Firebase",
      "Zustand",
      "Framer Motion",
    ],
    link: "https://instant-poll-coral.vercel.app/",
    repo: "https://github.com/Manubhargav/instant-poll",
    screenshot: "/projects/instant-poll.png",
  },
  {
    id: "namma-metro",
    title: "Namma Metro Map",
    subtitle: "Interactive Bengaluru metro map",
    description:
      "Sleek, interactive map interface showing operational Metro Rapid Transit in Bengaluru, built with JavaScript, jQuery, Knockout JS, and Leaflet.js.",
    tech: ["JavaScript", "jQuery", "Knockout JS", "Leaflet.js"],
    link: "https://manubhargav.github.io/NammaMetroMap/",
    repo: "https://github.com/Manubhargav/NammaMetroMap",
    screenshot: "/projects/namma-metro.png",
  },
] as const;

export const EXPERIENCE = [
  {
    role: "Front-end Engineer",
    company: "Amazon",
    location: "Seattle, WA",
    period: "Nov 2025 - Present",
    bullets: [
      "Led frontend development of a critical security incident response platform serving 5,000+ users, building 15+ complex features including real-time incident tracking, reducing case investigation time by 40% through improved UI/UX workflows.",
      "Engineered full-stack cloud infrastructure (AWS Lambda, S3, DynamoDB, OpenSearch) and Python Flask APIs, enabling real-time incident data processing for 100K+ daily events with sub-second response times and 99.9% availability SLA.",
      "Optimized performance through multi-layered caching (Redis/Valkey, TanStack Query, service worker strategies) and advanced bundling (Vite code splitting, tree-shaking, CSS chunking), achieving 40% bundle reduction, 60% Lighthouse improvement, and sub-500ms Time to Interactive.",
    ],
    stack: [
      "React",
      "TypeScript",
      "Cypress",
      "Vite",
      "TanStack Query",
      "AWS CDK",
      "Lambda",
      "S3",
      "CloudFront",
      "Python",
      "Flask",
      "CQRS",
    ],
  },
  {
    role: "Software Engineer",
    company: "Splunk",
    location: "San Jose, CA",
    period: "May 2022 - Oct 2025",
    bullets: [
      "Architected a shared component library with Storybook documentation and Module Federation, enabling code reuse across 4 product teams, reducing development time by 30% and ensuring 100% design consistency through automated visual regression testing with Cypress and Jest at 90% code coverage, reducing production defects by 60%.",
      "Developed frontend components for a security dashboard optimizing real-time data visualization with WebSocket subscriptions, client-side memoization, and intelligent cache invalidation, enabling security analysts to investigate 500+ daily incidents.",
      "Led design-to-production collaboration for 8 feature releases with UX designers, PMs, and QA across distributed teams, delivering on schedule with a 98% requirement acceptance rate.",
    ],
    stack: [
      "React",
      "TypeScript",
      "Cypress",
      "Jest",
      "React Testing Library",
      "Docusaurus",
      "Styled Components",
      "Docker",
      "ESLint",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Truist Financial (via Infosys)",
    location: "Bangalore, India",
    period: "Feb 2017 - Jun 2021",
    bullets: [
      "Architected and delivered an enterprise financial platform handling 10M+ daily transactions using Angular and Java Spring Boot microservices, achieving 99.95% uptime SLA and supporting 500K+ concurrent users.",
      "Mentored 7 junior engineers over 4 years, establishing Angular/TypeScript code review standards that improved quality scores by 35% and enabled 5 career advancements, including 1 promotion to senior engineer.",
      "Reduced account list rendering time by 75% with a widget-based architecture and achieved a 71% Lighthouse mobile score improvement (52 to 89), increasing user engagement by 28% and reducing bounce rate by 18%.",
    ],
    stack: [
      "Angular",
      "TypeScript",
      "Jasmine",
      "Jest",
      "Bootstrap",
      "Node.js",
      "Webpack",
      "Java",
      "Spring Boot",
      "RxJs",
    ],
  },
] as const;

export const EDUCATION = [
  {
    role: "Master of Science, Computer Science",
    company: "San Diego State University",
    location: "San Diego, CA",
    period: "Aug 2021 - May 2023",
    bullets: [],
    stack: [],
  },
  {
    role: "Bachelor of Engineering, Information Science",
    company: "Visvesvaraya Technological University",
    location: "India",
    period: "Sep 2012 - Jun 2016",
    bullets: [],
    stack: [],
  },
] as const;

export const METRICS = [
  { value: "5,000+", label: "users on the incident response platform" },
  { value: "100K+", label: "daily events processed with sub-second responses" },
  { value: "40%", label: "bundle reduction, 60% Lighthouse improvement" },
  { value: "10M+", label: "daily transactions on the Truist platform" },
] as const;

export const HIGHLIGHTS = [
  {
    title: "Real-time incident platform",
    body: "15+ complex features for a security incident response platform, cutting case investigation time by 40%.",
  },
  {
    title: "Shared component library",
    body: "Storybook plus Module Federation across 4 product teams, reducing development time by 30%.",
  },
  {
    title: "Enterprise scale",
    body: "10M+ daily transactions and 500K+ concurrent users with 99.95% uptime at Truist.",
  },
] as const;
