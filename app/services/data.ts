export type Service = {
  slug: string;
  title: string;
  description: string;
  overview: string;
  outcomes: string[];
  process: string[];
};

export const services: Service[] = [
  {
    slug: "product-engineering",
    title: "Product Engineering",
    description:
      "End-to-end design and development of web and mobile applications using modern frameworks and scalable architecture.",
    overview:
      "We design and build digital products from the ground up, helping your team move from idea validation to production-ready releases with high engineering standards.",
    outcomes: [
      "Working MVPs and production releases delivered in short iterations",
      "Scalable frontend and backend architecture aligned to business goals",
      "Clean codebases with strong maintainability and documentation",
    ],
    process: [
      "Product discovery, roadmap alignment, and technical planning",
      "UX/UI and feature delivery through agile sprint cycles",
      "Quality assurance, launch readiness, and post-release improvement",
    ],
  },
  {
    slug: "devops-cloud",
    title: "DevOps & Cloud",
    description:
      "Infrastructure setup, CI/CD pipelines, containerization, and observability for stable and efficient delivery.",
    overview:
      "Our DevOps and cloud services streamline software delivery, reduce deployment risk, and improve reliability across environments.",
    outcomes: [
      "Automated build, test, and deployment pipelines",
      "Reliable cloud infrastructure with monitoring and alerting",
      "Faster release cycles with reduced operational overhead",
    ],
    process: [
      "Current environment assessment and architecture planning",
      "Pipeline, IaC, and observability implementation",
      "Security hardening and team enablement for ongoing operations",
    ],
  },
  {
    slug: "ai-integration",
    title: "AI Integration",
    description:
      "Practical AI features such as intelligent assistants, workflow automation, and insight generation using your business data. We use AI agents including Manus, Claude, Cursor, Codex, and similar tools to keep our own delivery workflow fast and rigorous.",
    overview:
      "We build and integrate AI capabilities that solve practical business challenges, from internal productivity to customer-facing intelligence. Our team uses leading AI agents—Manus, Claude, Cursor, Codex, and comparable platforms—to accelerate research, implementation, and review without sacrificing quality.",
    outcomes: [
      "AI features tailored to specific workflows and user needs",
      "Automated tasks that reduce repetitive manual effort",
      "Actionable insights generated from your internal business data",
    ],
    process: [
      "Use-case discovery and data readiness assessment",
      "Model or API integration with your existing applications, with AI agents such as Manus, Claude, Cursor, and Codex supporting our engineering workflow where they add leverage",
      "Evaluation, guardrails, and optimization for production use",
    ],
  },
  {
    slug: "technical-advisory",
    title: "Technical Advisory",
    description:
      "Architecture reviews, team enablement, and roadmap planning to reduce risk and accelerate execution.",
    overview:
      "We provide strategic technical guidance to help leadership and engineering teams make better architecture, delivery, and scaling decisions.",
    outcomes: [
      "Clear engineering roadmaps with realistic delivery milestones",
      "Reduced technical risk through architecture and process reviews",
      "Higher team effectiveness through practical coaching and standards",
    ],
    process: [
      "Stakeholder interviews and current-state technical audit",
      "Prioritized recommendations with implementation guidance",
      "Ongoing advisory support during execution and scale-up",
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
