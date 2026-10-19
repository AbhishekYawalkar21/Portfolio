export interface SocialLink {
  label: string;
  href: string;
}

export interface Highlight {
  /** Short lead-in in bold, e.g. "RAG question answering". */
  lead?: string;
  text: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface Role {
  title: string;
  org: string;
  location?: string;
  period: string;
  badge?: string;
  summary?: string;
  highlights: Highlight[];
  tech?: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  award?: string;
  highlights: Highlight[];
  tech: string[];
  links?: SocialLink[];
}

export interface EducationEntry {
  degree: string;
  school: string;
  location?: string;
  period: string;
  coursework: string[];
}

/* ── Profile ────────────────────────────────────────────────────────────── */

export const profile = {
  name: "Abhishek Yawalkar",
  monogram: "AY",
  role: "AI Software Engineer",
  location: "Mumbai, India",
  availability: "Open to AI engineering roles",
  email: "you@example.com",
  resumeFile: "", // optional: drop a PDF in /public and set e.g. "/resume.pdf"
  socials: [
    { label: "GitHub", href: "https://github.com/your-username" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/your-username" },
  ] as SocialLink[],
  summary:
    "I design and ship AI systems end to end — from retrieval pipelines and knowledge graphs to the interfaces people actually use. Currently focused on making generative AI outputs measurable, grounded, and production-ready.",
};

/* ── Hero ───────────────────────────────────────────────────────────────── */

export const hero = {
  eyebrow: "Generative AI · RAG · Knowledge Graphs",
  headline: ["AI systems that hold up", "against real-world data."],
  highlight: "real-world data.",
  description:
    "AI Software Engineer with hands-on experience in generative AI evaluation and end-to-end application delivery. I turn messy documents and records into grounded, queryable systems — and keep them honest with evaluation.",
  primaryCta: { label: "Explore projects", href: "#projects" },
  secondaryCta: { label: "Get in touch", href: "#contact" },
  facts: [
    { label: "Based in", value: "Mumbai, India" },
    { label: "Education", value: "M.Appl.Comp." },
    { label: "Recognition", value: "CS Demo Day · 2nd" },
  ],
  stats: [
    { value: "97%", label: "model accuracy, up from 73%", sub: "Outlier evaluation work" },
    { value: "500+", label: "corporate records resolved", sub: "Supplier risk knowledge graph" },
    { value: "85%", label: "retrieval accuracy", sub: "Hybrid GraphRAG benchmark" },
  ],
};

/* ── About ──────────────────────────────────────────────────────────────── */

export const about = {
  heading: "Evaluation-first engineering",
  paragraphs: [
    "My work sits where applied AI meets software engineering. I build systems that retrieve before they answer, explain how they reached a conclusion, and expose the evidence behind it — because a demo that only works on the happy path is not an engineering result.",
    "That mindset comes from a year of evaluating generated code at Outlier, where I scored, reviewed, and hardened model output across Python, Java, TypeScript, and SQL. Paired with an M.Sc. in Applied Computing and full-stack delivery experience, it means I can own a feature from schema and prompt design through to the interface and its CI pipeline.",
  ],
  principles: [
    {
      title: "Ground it",
      text: "Retrieval, citations, and graph traversal before generation — no unverifiable answers.",
    },
    {
      title: "Measure it",
      text: "Benchmarks and evaluation harnesses decide whether a change ships.",
    },
    {
      title: "Ship it",
      text: "Containerized services, tested pipelines, and interfaces non-engineers can use.",
    },
  ],
};

/* ── Skills ─────────────────────────────────────────────────────────────── */

export const skills: SkillGroup[] = [
  {
    title: "AI & MLOps",
    items: [
      "LangGraph",
      "LangChain",
      "RAG Pipelines",
      "Knowledge Graphs",
      "GraphRAG",
      "Ontology Modeling",
      "Vector Search (pgvector)",
      "Agentic Workflows",
      "Prompt Engineering",
    ],
  },
  {
    title: "Programming Languages",
    items: ["Python", "TypeScript", "JavaScript", "Java", "SQL"],
  },
  {
    title: "Backend & APIs",
    items: ["FastAPI", "Node.js", "Flask", "RESTful APIs"],
  },
  {
    title: "Frontend",
    items: [
      "React.js",
      "React Native",
      "Tailwind CSS",
      "Zustand",
      "AngularJS",
      "HTML5 / CSS3",
    ],
  },
  {
    title: "Databases & Data",
    items: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "SQLAlchemy",
      "Neo4j",
      "Pandas",
      "RapidFuzz",
    ],
  },
  {
    title: "Cloud, DevOps & Testing",
    items: [
      "Docker",
      "AWS",
      "GitHub Actions",
      "CI/CD",
      "Nginx",
      "Git / GitHub / GitLab",
      "PyTest",
      "Jest",
      "Unit & Integration Testing",
    ],
  },
];

/* ── Experience ─────────────────────────────────────────────────────────── */

export const experience: Role[] = [
  {
    title: "AI Software Engineer",
    org: "Outlier",
    location: "Canada · Independent Contractor",
    period: "Jul 2024 — Jun 2026",
    badge: "Quality rating 5/5",
    summary:
      "Project-based evaluation and red-teaming of generative AI coding systems.",
    highlights: [
      {
        lead: "Accuracy lifting",
        text: "Boosted model accuracy from 73% to 97% by designing coding prompts and evaluating generated code in Python, Java, TypeScript, and SQL against internal quality standards.",
      },
      {
        lead: "Defect reduction",
        text: "Contributed to a reported 20% drop in AI-generated code defects, documented in internal evaluation reports, through security audits and peer review.",
      },
      {
        lead: "Training data quality",
        text: "Refined peer-submitted code for correctness, efficiency, and maintainability so submissions met internal evaluation standards.",
      },
    ],
    tech: ["Python", "Java", "TypeScript", "SQL", "Code Review", "Security Audits"],
  },
  {
    title: "IT Assistant",
    org: "Windsor Food Bank",
    location: "Canada · Volunteer",
    period: "Feb 2024 — Jun 2024",
    highlights: [
      {
        text: "Automated inventory tracking and volunteer scheduling with Python scripts and Google Sheets, eliminating manual data-entry errors and cutting administrative overhead.",
      },
      {
        text: "Engineered a web-based donation portal with custom HTML/CSS, centralizing donor intake and streamlining data collection.",
      },
    ],
    tech: ["Python", "Google Sheets API", "HTML/CSS"],
  },
];

/* ── Projects ───────────────────────────────────────────────────────────── */

export const projects: Project[] = [
  {
    id: "documind",
    title: "DocuMind",
    subtitle: "PDF intelligence system",
    period: "Aug 2026 — Oct 2026",
    highlights: [
      {
        text: "Built an agentic document pipeline on a five-node LangGraph workflow with self-hosted Ollama models, automating summarization, entity extraction, and GDPR/PII scanning with zero external API cost.",
      },
      {
        text: "Implemented RAG-based question answering over PostgreSQL and pgvector, enabling semantic retrieval and natural-language queries across multi-page documents.",
      },
      {
        text: "Shipped a containerized FastAPI + React/TypeScript application with GitHub Actions CI for automated tests and Docker build validation.",
      },
    ],
    tech: [
      "LangGraph",
      "Ollama",
      "RAG",
      "pgvector",
      "PostgreSQL",
      "FastAPI",
      "React",
      "TypeScript",
      "Docker",
      "GitHub Actions",
    ],
    links: [{ label: "GitHub Repo", href: "https://github.com/your-username/documind" }],
  },
  {
    id: "supplier-risk",
    title: "Supplier Risk Graph",
    subtitle: "Ontology-driven risk intelligence",
    period: "Jul 2026 — Aug 2026",
    highlights: [
      {
        text: "Mapped risk exposure across 500+ corporate records with an ontology-driven Neo4j graph that resolves entities and traces ownership relationships up to four hops deep.",
      },
      {
        text: "Reached 85% retrieval accuracy across 20 benchmark tests by combining semantic search with Cypher graph traversal in a hybrid GraphRAG pipeline.",
      },
      {
        text: "Enabled 20+ supplier risk scenarios through a FastAPI and Streamlit app that visualizes ownership paths and explains each graph-based connection.",
      },
    ],
    tech: [
      "Neo4j",
      "Cypher",
      "GraphRAG",
      "Ontology Modeling",
      "Semantic Search",
      "FastAPI",
      "Streamlit",
      "Python",
    ],
    links: [
      { label: "GitHub Repo", href: "https://github.com/your-username/supplier-risk-graph" },
    ],
  },
  {
    id: "tomato-vision",
    title: "Tomato Crop Disease ID",
    subtitle: "Mobile computer vision",
    period: "Jan 2024 — Apr 2024",
    award: "CS Demo Day — 2nd Place",
    highlights: [
      {
        text: "Reached 94% detection accuracy by designing and training a CNN on localized crop-leaf datasets for on-device diagnosis.",
      },
      {
        text: "Led a four-engineer team in designing and deploying a scalable, high-availability microservice backend on Google Cloud Platform.",
      },
      {
        text: "Built cross-platform iOS/Android interfaces in React Native, optimizing asset delivery and image payloads for instant classification.",
      },
    ],
    tech: [
      "Python",
      "CNN",
      "Computer Vision",
      "React Native",
      "GCP",
      "Microservices",
    ],
    links: [
      { label: "GitHub Repo", href: "https://github.com/your-username/tomato-crop-disease" },
    ],
  },
];

/* ── Education ──────────────────────────────────────────────────────────── */

export const education: EducationEntry[] = [
  {
    degree: "Master of Applied Computing",
    school: "University of Windsor",
    location: "Canada",
    period: "Jan 2023 — Apr 2024",
    coursework: [
      "Advanced Software Engineering",
      "Advanced Database Topics",
      "Advanced Systems Programming",
      "Internet Application & Distributed Systems",
      "Network and Data Security",
    ],
  },
  {
    degree: "M.Sc. Information Technology — Cloud Computing",
    school: "Mulund College of Commerce",
    location: "India",
    period: "May 2019 — Jun 2021",
    coursework: [
      "Microservices Architecture",
      "Cloud Application Development",
      "Data Science",
    ],
  },
  {
    degree: "B.Sc. Computer Science",
    school: "Mulund College of Commerce",
    location: "India",
    period: "Apr 2016 — Apr 2019",
    coursework: [
      "Core & Advanced Java",
      "Data Structures and Algorithms",
      "Software Engineering",
      "Software Testing",
      "Database Management Systems",
      "Web Development",
    ],
  },
];

/* ── Navigation & footer ────────────────────────────────────────────────── */

export const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const footer = {
  note: "Designed and built from scratch — React, TypeScript, and hand-written CSS.",
  copyright: `© ${new Date().getFullYear()} ${profile.name}`,
};
