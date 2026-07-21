export const LINKS = {
  github: "https://github.com/nishka1152",
  linkedin: "https://www.linkedin.com/in/nishka-jain-96896034a",
  email: "mailto:nishkaj@uci.edu",
  emailPlain: "nishkaj@uci.edu",
  resume: "/resume.pdf",
} as const;

export interface ExperienceRole {
  role: string;
  org: string;
  location?: string;
  period: string;
  bullets: string[];
  stack: string[];
}

export const EXPERIENCE: ExperienceRole[] = [
  {
    role: "Software Engineering Intern",
    org: "GrapheneAI (Singapore)",
    location: "Bengaluru, India",
    period: "June 2026 — Aug 2026",
    bullets: [
      "Built and maintained AI automation workflows across three Amazon product pipelines, integrating LLM-based agents into production systems — using LangFuse to trace and debug LLM calls end-to-end and LiteLLM to manage requests across multiple model providers.",
      "Owned prompt engineering and evaluation for the team's LLM-facing features, using Promptfoo to systematically test prompt variations against real-world edge cases and improve reliability before pipelines went into production.",
      "Designed and built a classification/scoring model to power a product-scoring feature, working through the full loop of defining evaluation criteria, iterating on features, and validating outputs against real product data — with a focus on interpretability, not just accuracy.",
      "Worked at the intersection of traditional ML and modern LLM tooling, gaining hands-on experience with the practical tradeoffs of LLMs versus purpose-built ML models in production (cost, latency, reliability).",
    ],
    stack: ["LangFuse", "LiteLLM", "Promptfoo", "LLM Agents", "Prompt Engineering", "Microsoft Azure", "Supabase"],
  },
  {
    role: "Lab Coordinator & Software Lead",
    org: "Design and Partnership Lab (DAPLab), UC Irvine",
    period: "Sept 2025 — Present",
    bullets: [
      "Promoted from research assistant to Lab Coordinator & Software Lead within a year — now the primary technical point of contact under Dr. June Ahn, driving all lab software from research prototype to deployment.",
      "Engineered a full-stack prompt evaluation platform (Next.js, TypeScript, Prisma) with automated LLM testing pipelines and Ollama-powered models that extract soft skills from student reflections.",
      "Coordinates across AI, web, and UX teams to keep engineering execution aligned with research goals.",
    ],
    stack: ["Next.js", "TypeScript", "Prisma", "Ollama", "LLM Pipelines"],
  },
  {
    role: "Research Assistant, Computational Team",
    org: "Computational Cognitive Neuroscience Lab, UC Irvine",
    period: "March 2026 — Present",
    bullets: [
      "Investigates how LLMs perform on contextual bandit tasks derived from human cognitive experiments, evaluating cross-model behavioral differences with reinforcement learning frameworks (Q-learning).",
      "Benchmarks LLM behavior against the Centaur model by reformatting psychological tasks into LLM-interpretable inputs to assess alignment with human decision-making.",
      "Participates in weekly journal clubs on patch foraging theory and reward-based decision-making under Dr. Aaron Bornstein.",
    ],
    stack: ["Python", "Reinforcement Learning", "Q-learning", "LLM Evaluation"],
  },
  {
    role: "Web Developer, Tech Team",
    org: "Google Developer Group on Campus at UCI",
    period: "April 2026 — Present",
    bullets: [
      "Builds full-stack student-facing applications from the ground up with React and Python, integrating Firebase and Gemini APIs.",
      "Facilitates hands-on workshops on modern web development and helps organize the Google Solution Challenge to build software addressing real-world community problems.",
    ],
    stack: ["React", "Python", "Firebase", "Gemini API"],
  },
];

export interface Project {
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  note: string;
}

export const PROJECTS: Project[] = [
  {
    title: "ResuMatch",
    tagline: "Semantic resume–job matching with NLP",
    description:
      "Full-stack web app built in under 36 hours at VenusHacks 2025 that semantically matches resumes to job descriptions — keyword intent matching with SentenceTransformers, resume parsing with PyMuPDF, and classification and scoring models trained on limited labeled data.",
    tech: ["Flask", "Python", "NLTK", "SentenceTransformers", "WordNet", "PyMuPDF"],
    github: "https://github.com/nishka1152",
    note: "VenusHacks 2025 · 36-hour build",
  },
  {
    title: "Mazdoor Sahay",
    tagline: "Connecting migrant workers to opportunity",
    description:
      "Multilingual platform connecting migrant workers to job opportunities across India — an accessible UI managing dynamic job listings via CMS with external data integrations, built and maintained over two and a half years.",
    tech: ["Wix CMS", "Velo", "Google Sheets"],
    live: "https://nishkajain152.wixsite.com/mazdoor-sahay",
    note: "Jan 2022 — Aug 2024",
  },
];

export const SKILLS: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["C++", "Java", "Python", "TypeScript", "JavaScript", "SQL", "R", "MIPS Assembly"] },
  { group: "Frameworks & Libraries", items: ["React", "Next.js", "Prisma ORM", "TailwindCSS", "HTML/CSS"] },
  { group: "Tools & Platforms", items: ["PostgreSQL", "REST APIs", "Git"] },
];
