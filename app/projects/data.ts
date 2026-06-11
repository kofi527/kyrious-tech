export type ProjectImageVariant = "cloud" | "mobile" | "ai" | "api";

export type Project = {
  slug: string;
  title: string;
  description: string;
  category: string;
  image: ProjectImageVariant;
};

export const projects: Project[] = [
  {
    slug: "cloud-migration-private-company",
    title: "Cloud design & migration",
    description:
      "Designed and migrated on-premise systems to a cloud-based platform for a private company—mapping workloads, hardening security, and cutting over with a phased plan that kept business operations running.",
    category: "Cloud & DevOps",
    image: "cloud",
  },
  {
    slug: "mobile-app-maintenance",
    title: "Mobile app maintenance",
    description:
      "Ongoing maintenance for a production mobile application—release management, OS compatibility updates, performance tuning, and defect resolution so users stay on a stable, up-to-date experience.",
    category: "Product engineering",
    image: "mobile",
  },
  {
    slug: "hazard-detection-model-training",
    title: "Hazard detection model training",
    description:
      "Trained and evaluated computer vision models to detect workplace hazards from image and video data—building datasets, tuning accuracy, and preparing models for deployment in safety-critical workflows.",
    category: "AI & computer vision",
    image: "ai",
  },
  {
    slug: "golf-api-system-maintenance",
    title: "Golf platform APIs & maintenance",
    description:
      "Developed REST APIs and provided system maintenance for a golf industry client—supporting integrations, booking flows, and reliable backend operations across releases and peak seasons.",
    category: "API & platform",
    image: "api",
  },
];
