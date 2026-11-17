export const HERO = {
  name: "Manu Srirangarajan",
  monogram: "MS/",
  role: "Senior Software Engineer",
  tagline: "I try making the web an awesome place.",
  resume: "/assets/resume.pdf",
  location: "Seattle, WA",
} as const;

export const SOCIALS = [
  { label: "GitHub", href: "https://github.com/Manubhargav/", handle: "@Manubhargav", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/manubhargav/", handle: "@manubhargav", icon: "linkedin" },
  { label: "Instagram", href: "https://www.instagram.com/manubhargav/", handle: "@manubhargav", icon: "instagram" },
  { label: "Twitter / X", href: "https://twitter.com/manubhargav27", handle: "@manubhargav27", icon: "x" },
  { label: "Medium", href: "https://medium.com/@manubhargav", handle: "@manubhargav", icon: "medium" },
] as const;

export const MARQUEE = [
  { label: "Amazon", icon: "amazon" },
  { label: "Splunk", icon: "splunk" },
  { label: "Cisco", icon: "cisco" },
  { label: "Truist", icon: "truist" },
  { label: "UL", icon: "ul" },
  { label: "SDSU", icon: "sdsu" },
  { label: "Udacity", icon: "udacity" },
  { label: "VTU Belagavi", icon: "vtu" },
] as const;

export const PROJECTS = [
  {
    id: "depthfield",
    title: "Depthfield",
    subtitle: "Live crypto market microstructure viewer",
    description:
      "A browser instrument for reading real-time order books. WebGL depth heatmap, Canvas price ladder, L3 queue, cross-venue checks, and feed-integrity telemetry. No account or key.",
    tech: ["TypeScript", "React", "Vite", "WebGL", "Canvas 2D", "Tailwind CSS", "Zustand", "Vitest"],
    link: "https://depthfield-two.vercel.app/",
    repo: "https://github.com/Manubhargav/depthfield",
    shots: [
      { src: "/projects/depthfield-hero.png", caption: "Live market scanner" },
      { src: "/projects/depthfield-live.png", caption: "BTC-USD live book and studies" },
    ],
  },
  {
    id: "mini-figma",
    title: "Mini Figma",
    subtitle: "Collaborative whiteboard with live cursors",
    description:
      "A collaborative canvas for drawing shapes, text, and freehand strokes with live teammate cursors, undo/redo, layer controls, and PNG/SVG export. Built as a portfolio study in real-time state.",
    tech: ["React", "TypeScript", "Konva.js", "Supabase Realtime", "Zustand", "Tailwind CSS", "shadcn/ui"],
    link: "https://mini-figma-teal.vercel.app/",
    repo: "https://github.com/Manubhargav/mini-figma",
    shots: [
      { src: "/projects/mini-figma-hero.png", caption: "Landing and live demo" },
      { src: "/projects/mini-figma-canvas.png", caption: "Collaborative canvas with tools" },
    ],
  },
  {
    id: "boardly",
    title: "Boardly",
    subtitle: "Real-time collaborative Kanban board",
    description:
      "Drag-and-drop Kanban board with live multi-user collaboration, built with React, TypeScript, Vite, Tailwind CSS, Firebase, Zustand, and @dnd-kit.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Firebase", "Zustand", "@dnd-kit"],
    link: "https://boardly-henna.vercel.app",
    repo: "https://github.com/Manubhargav/boardly",
    shots: [
      { src: "/projects/boardly-hero.png", caption: "Landing and live demo" },
      { src: "/projects/boardly-board.png", caption: "Kanban board, drag and drop" },
    ],
  },
  {
    id: "mood-board",
    title: "Mood Board Creator",
    subtitle: "Canvas-based mood board with real-time collaboration",
    description:
      "Visual mood board application with canvas-based image manipulation and real-time collaboration, built with React, TypeScript, Tailwind CSS, Konva.js, Firebase, Zustand, and Framer Motion.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Konva.js", "Firebase", "Zustand", "Framer Motion"],
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
    subtitle: "Real-time polling app with live results",
    description:
      "Real-time polling with live results and dynamic charts, built with React, TypeScript, Tailwind CSS, Firebase, Zustand, and Framer Motion.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Firebase", "Zustand", "Framer Motion"],
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
      "An interactive map of Bengaluru's operational Metro Rapid Transit, built with JavaScript, jQuery, Knockout JS, and Leaflet.js.",
    tech: ["JavaScript", "jQuery", "Knockout JS", "Leaflet.js"],
    link: "https://manubhargav.github.io/NammaMetroMap/",
    repo: "https://github.com/Manubhargav/NammaMetroMap",
    shots: [
      { src: "/projects/namma-metro-map.png", caption: "Interactive metro map" },
      { src: "/projects/namma-metro-map.png", caption: "Metro lines and stations" },
    ],
  },
] as const;

export const EXPERIENCE = [
  {
    role: "Front-end Engineer",
    company: "Amazon",
    location: "Seattle, WA",
    period: "Nov 2024 - Present",
    summary:
      "I lead frontend work on a security incident response platform serving 5,000+ users, and engineer the Python APIs and AWS services behind it.",
    highlights: ["5,000+ users", "40% faster investigations", "60% Lift score gain"],
    stack: ["React", "TypeScript", "Vite", "Python", "Flask", "AWS", "TanStack Query"],
  },
  {
    role: "Software Engineer",
    company: "Splunk",
    location: "San Jose, CA",
    period: "Jun 2023 - Oct 2024",
    summary:
      "I built a shared component library used by four product teams and shipped real-time security dashboards with WebSocket data.",
    highlights: ["4 teams", "30% less build time", "98% acceptance"],
    stack: ["React", "TypeScript", "Storybook", "Jest", "Cypress", "WebSockets"],
  },
  {
    role: "Senior Software Engineer",
    company: "Truist Financial (via Infosys)",
    location: "Bangalore, India",
    period: "Feb 2017 - Jun 2021",
    summary:
      "I delivered an enterprise financial platform handling millions of daily transactions and mentored seven engineers over four years.",
    highlights: ["10M+ daily transactions", "99.95% uptime", "7 engineers mentored"],
    stack: ["Angular", "TypeScript", "Java Spring Boot", "Node.js", "RxJS"],
  },
  {
    role: "Engineering Intern",
    company: "UL (Underwriters Laboratories)",
    location: "Bangalore, India",
    period: "2016",
    summary:
      "Developed a decoupled Step Functions solution for UL fire safety inspectors to run building-code inspections and flag non-compliance inside building parts.",
    highlights: ["AWS Step Functions", "Fire safety inspections"],
    stack: ["AWS Step Functions", "Building-code compliance"],
  },
] as const;

export const EDUCATION = [
  { role: "Master of Science, Computer Science", company: "San Diego State University", location: "San Diego, CA", period: "Aug 2021 - May 2023" },
  { role: "Front-End Web Developer Nanodegree", company: "Udacity", location: "Online", period: "2017" },
  { role: "Bachelor of Engineering, Information Science", company: "Visvesvaraya Technological University, Belagavi", location: "India", period: "Sep 2012 - Jun 2016" },
] as const;

export const GALLERY = [
  { id: "01", src: "/gallery/01.svg", caption: "Moment 01", tall: true },
  { id: "02", src: "/gallery/02.svg", caption: "Moment 02", tall: false },
  { id: "03", src: "/gallery/03.svg", caption: "Moment 03", tall: true },
  { id: "04", src: "/gallery/04.svg", caption: "Moment 04", tall: false },
  { id: "05", src: "/gallery/05.svg", caption: "Moment 05", tall: true },
  { id: "06", src: "/gallery/06.svg", caption: "Moment 06", tall: false },
  { id: "07", src: "/gallery/07.svg", caption: "Moment 07", tall: true },
  { id: "08", src: "/gallery/08.svg", caption: "Moment 08", tall: false },
] as const;
