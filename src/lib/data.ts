export const HERO = {
  name: "Manu Bhargav Srirangarajan",
  monogram: "MS/",
  role: "Senior Software Engineer",
  tagline: "I try making the web an awesome place.",
  resume: "/assets/resume.pdf",
  location: "Seattle, WA",
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
] as const;

// Text wordmarks for the collaborator marquee. Swap for real SVG logos when available.
export const MARQUEE = [
  { label: "amazon", style: "font-semibold tracking-tight lowercase" },
  { label: "splunk", style: "font-medium lowercase" },
  { label: "cisco", style: "font-semibold lowercase tracking-widest" },
  { label: "Truist", style: "font-semibold" },
  { label: "UL", style: "font-black tracking-tight" },
  { label: "SDSU", style: "font-bold tracking-wide" },
  { label: "Udacity", style: "font-medium" },
  { label: "VTU", style: "font-bold tracking-widest" },
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
    shots: [
      { src: "/projects/boardly-hero.png", caption: "Landing and live demo" },
      { src: "/projects/boardly-board.png", caption: "Kanban board, drag and drop" },
      { src: "/projects/boardly-collab.png", caption: "Multi-user collaboration" },
    ],
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
    shots: [
      { src: "/projects/mood-board-hero.png", caption: "Landing page" },
      { src: "/projects/mood-board-canvas.png", caption: "Canvas and image tools" },
    ],
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
    shots: [
      { src: "/projects/instant-poll-hero.png", caption: "Landing page" },
      { src: "/projects/instant-poll-live.png", caption: "Live results and charts" },
    ],
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
    shots: [
      { src: "/projects/namma-metro-map.png", caption: "Interactive metro map" },
    ],
  },
] as const;

export const EXPERIENCE = [
  {
    role: "Front-end Engineer",
    company: "Amazon",
    location: "Seattle, WA",
    period: "Nov 2024 - Present",
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
    period: "Jun 2023 - Oct 2024",
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
  {
    role: "Engineering Intern",
    company: "UL (Underwriters Laboratories)",
    location: "Bangalore, India",
    period: "2016",
    bullets: [],
    stack: [],
  },
] as const;

export const EDUCATION = [
  {
    role: "Master of Science, Computer Science",
    company: "San Diego State University",
    location: "San Diego, CA",
    period: "Aug 2021 - May 2023",
  },
  {
    role: "Front-End Web Developer Nanodegree",
    company: "Udacity",
    location: "Online",
    period: "2017",
  },
  {
    role: "Bachelor of Engineering, Information Science",
    company: "Visvesvaraya Technological University, Belagavi",
    location: "India",
    period: "Sep 2012 - Jun 2016",
  },
] as const;

// Placeholder frames. Replace files in public/gallery with real photos when ready.
export const GALLERY = [
  { id: "01", src: "/gallery/01.svg", caption: "Moment 01" },
  { id: "02", src: "/gallery/02.svg", caption: "Moment 02" },
  { id: "03", src: "/gallery/03.svg", caption: "Moment 03" },
  { id: "04", src: "/gallery/04.svg", caption: "Moment 04" },
  { id: "05", src: "/gallery/05.svg", caption: "Moment 05" },
  { id: "06", src: "/gallery/06.svg", caption: "Moment 06" },
  { id: "07", src: "/gallery/07.svg", caption: "Moment 07" },
  { id: "08", src: "/gallery/08.svg", caption: "Moment 08" },
] as const;
