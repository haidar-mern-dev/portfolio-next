export const profile = {
  name: "Haidar Ali",
  headline:
    "Senior Software Engineer | Full Stack (MERN) | React.js | Next.js | Node.js | TypeScript",
  titles: [
    "Senior Software Engineer",
    "Full Stack (MERN)",
    "React.js",
    "Next.js",
    "Node.js",
    "TypeScript",
  ],
  location: "Lahore, Pakistan",
  email: "haidar.ali.reactdev@gmail.com",
  phone: "+92 335 4512505",
  linkedin: "https://www.linkedin.com/in/haidar-ali-dev/",
  github: "https://github.com/haidar-mern-dev/",
  summary:
    "Results-driven Senior Full Stack Software Engineer with 5+ years of experience designing, developing, and maintaining scalable web applications, SaaS platforms, and enterprise software solutions using the MERN Stack. Extensive expertise in React.js, Next.js, Node.js, Express.js, TypeScript, JavaScript, MongoDB, PostgreSQL, REST APIs, GraphQL, Redux Toolkit, AWS, Docker, Kubernetes, and CI/CD. Experienced in building high-performance frontend applications, designing secure backend services, integrating third-party APIs, optimizing application performance, and collaborating with cross-functional Agile teams. Passionate about writing clean, maintainable code and delivering scalable cloud-ready applications for global users.",
};

export const stats = [
  { value: "5+", label: "Years of Experience" },
  { value: "4", label: "Roles" },
  { value: "5", label: "Featured Projects" },
  { value: "2", label: "Awards" },
];

export type SkillCategory = {
  title: string;
  icon: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "code",
    skills: [
      "React.js",
      "Next.js",
      "JavaScript (ES6+)",
      "TypeScript",
      "Redux",
      "Redux Toolkit",
      "Context API",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Material UI",
      "Ant Design",
      "Bootstrap",
      "Shadcn UI",
      "Framer Motion",
    ],
  },
  {
    title: "Backend",
    icon: "workflow",
    skills: [
      "Node.js",
      "Express.js",
      "NestJS",
      "REST APIs",
      "GraphQL",
      "JWT Authentication",
      "RBAC",
      "WebSockets",
    ],
  },
  {
    title: "Database",
    icon: "cloud",
    skills: ["MongoDB", "PostgreSQL", "Prisma ORM", "Firebase", "Redis"],
  },
  {
    title: "Cloud & DevOps",
    icon: "server",
    skills: [
      "AWS",
      "Docker",
      "Kubernetes",
      "Git",
      "GitHub",
      "GitHub Actions",
      "CI/CD",
      "Linux",
    ],
  },
  {
    title: "Tools",
    icon: "plug",
    skills: ["VS Code", "Postman", "Jira", "Figma", "npm", "Yarn"],
  },
  {
    title: "Architecture",
    icon: "boxes",
    skills: [
      "Responsive Web Design",
      "Performance Optimization",
      "Authentication & Authorization",
      "System Integration",
    ],
  },
  {
    title: "Collaboration",
    icon: "users",
    skills: [
      "Agile Scrum",
      "Code Review",
      "Problem Solving",
      "Team Collaboration",
    ],
  },
  {
    title: "API Development",
    icon: "plug",
    skills: [
      "REST API Development",
      "GraphQL APIs",
      "Third-party Integrations",
    ],
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  current?: boolean;
  bullets: string[];
  tech: string[];
};

export const experiences: Experience[] = [
  {
    role: "Senior Frontend Developer",
    company: "Programmers Planet",
    period: "Dec 2025 — Present",
    current: true,
    bullets: [
      "Design and develop scalable enterprise-grade frontend applications using React.js, Next.js, and TypeScript.",
      "Build reusable, modular, and maintainable UI components following modern software engineering practices.",
      "Collaborate closely with backend engineers to integrate RESTful APIs and GraphQL services.",
      "Implement responsive interfaces ensuring seamless user experience across desktop, tablet, and mobile devices.",
      "Optimize application performance through lazy loading, code splitting, memoization, and efficient state management.",
      "Improve application accessibility following WCAG standards.",
      "Participate in Agile Scrum ceremonies including sprint planning, standups, retrospectives, and code reviews.",
      "Work closely with UI/UX designers to translate Figma designs into pixel-perfect interfaces.",
      "Maintain high-quality code using Git workflows and peer code reviews.",
      "Troubleshoot production issues and implement long-term scalable solutions.",
    ],
    tech: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "REST APIs",
      "GraphQL",
      "Tailwind CSS",
      "Material UI",
      "Git",
      "Agile",
    ],
  },
  {
    role: "MERN Stack Developer",
    company: "TxLabz",
    period: "May 2023 — Nov 2025",
    bullets: [
      "Developed scalable SaaS products using MERN Stack technologies.",
      "Designed secure REST APIs using Node.js and Express.js.",
      "Built reusable React components improving application maintainability.",
      "Integrated Stripe payment gateway for secure online transactions.",
      "Developed role-based authentication using JWT.",
      "Integrated Firebase Authentication and Firestore.",
      "Implemented Twilio Video APIs.",
      "Configured SendGrid email services.",
      "Optimized MongoDB queries for improved backend performance.",
      "Collaborated with cross-functional development teams in Agile environments.",
      "Participated in production deployments and bug fixing.",
      "Improved application scalability through modular architecture.",
    ],
    tech: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
      "Stripe",
      "Twilio",
      "SendGrid",
      "TypeScript",
    ],
  },
  {
    role: "Software Engineer",
    company: "Arain X Ltd",
    period: "Feb 2022 — Apr 2023",
    bullets: [
      "Developed responsive React.js applications.",
      "Built reusable UI components.",
      "Integrated REST APIs.",
      "Optimized application loading performance.",
      "Used Redux Toolkit for application state management.",
      "Improved frontend maintainability through modular architecture.",
      "Worked closely with QA and backend teams.",
    ],
    tech: ["React.js", "Redux Toolkit", "REST APIs", "Modular Architecture"],
  },
  {
    role: "Frontend Developer",
    company: "RbSol",
    period: "Nov 2021 — May 2022",
    bullets: [
      "Developed responsive user interfaces.",
      "Built reusable React components.",
      "Integrated APIs.",
      "Fixed UI bugs.",
      "Improved website performance.",
      "Participated in Agile software development lifecycle.",
    ],
    tech: ["React.js", "Responsive UI", "API Integration", "Agile"],
  },
];

export type Project = {
  title: string;
  description: string;
  link: string;
  highlights: string[];
};

export const projects: Project[] = [
  {
    title: "WheelEasy",
    description:
      "Accessibility mapping platform helping wheelchair users discover accessible locations across Australia.",
    link: "https://wheeleasy.org",
    highlights: [
      "Next.js frontend",
      "Google Places API",
      "Algolia search",
      "MinIO storage",
      "SEO-friendly SSR",
      "Role-based moderation dashboards",
    ],
  },
  {
    title: "LimeLeads",
    description: "B2B lead generation platform.",
    link: "https://app.limeleads.com/",
    highlights: [
      "React frontend",
      "Node.js backend APIs",
      "Redis caching",
      "CRM integrations",
      "Optimized data delivery performance",
    ],
  },
  {
    title: "e-English",
    description:
      "Online learning platform with teacher and student dashboards.",
    link: "https://dev.e-english.com.au/",
    highlights: [
      "Stripe payments",
      "Twilio Video",
      "Firebase Authentication",
      "SendGrid notifications",
    ],
  },
  {
    title: "Swoodle",
    description: "Fundraising marketplace for merchants.",
    link: "https://dev.panel.swoodle.com.au/",
    highlights: [
      "Merchant dashboards",
      "REST APIs",
      "Responsive interfaces",
      "Role-based authentication",
    ],
  },
  {
    title: "PAAQ",
    description: "Verified expert platform with appointment booking.",
    link: "https://www.paaq.app/",
    highlights: [
      "Stripe payments",
      "Secure Node.js APIs",
      "Responsive React frontend",
    ],
  },
  {
    title: "RapidoGate",
    description:
      "Online gate management system for secure access control and monitoring.",
    link: "https://rapidogate.com/",
    highlights: [
      "React frontend",
      "Node.js backend",
      "Access control",
      "Monitoring",
    ],
  },
  {
    title: "Texi Car Rent",
    description: "Car rental platform with booking and payment features.",
    link: "https://texi-car-rent.netlify.app/home",
    highlights: [
      "React frontend",
      "Node.js backend",
      "MongoDB",
      "Booking flows",
    ],
  },
  {
    title: "Ivy Beds & Blinds",
    description:
      "E-commerce platform for beds and blinds with product catalog and checkout.",
    link: "https://ivy-beds-blinds.netlify.app/",
    highlights: ["React frontend", "Node.js backend", "MongoDB", "Checkout"],
  },
  {
    title: "Crockery App",
    description:
      "Online platform for crockery products with shopping cart and payment integration.",
    link: "https://crockery-app.netlify.app/",
    highlights: ["React frontend", "Node.js backend", "MongoDB", "Payments"],
  },
  {
    title: "Restaurant",
    description: "Online restaurant platform with menu and ordering system.",
    link: "https://resturant12.netlify.app/",
    highlights: ["React frontend", "Node.js backend", "MongoDB", "Ordering"],
  },
];

export type Award = {
  title: string;
  issuer: string;
  note: string;
};

export const awards: Award[] = [
  {
    title: "Employee of the Month",
    issuer: "Arain X",
    note: "Recognized for consistent delivery and collaboration.",
  },
  {
    title: "Rising Star Award",
    issuer: "TxLabz",
    note: "Recognized for growth, impact, and contribution to product delivery.",
  },
];

export const education = {
  degree: "Bachelor of Science in Computer Science",
  school: "University of Sargodha · 2017 — 2021",
};
