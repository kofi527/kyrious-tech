import type { Metadata } from "next";
import { ProjectsGrid } from "../../components/ProjectsGrid";

export const metadata: Metadata = {
  title: "Projects | Kyrious Tech",
  description:
    "Recent client work across cloud migration, mobile maintenance, AI hazard detection, and API platform engineering.",
};

export default function ProjectsPage() {
  return (
    <section className="space-y-10">
      <div className="max-w-2xl space-y-4">
        <p className="inline-flex rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
          Our work
        </p>
        <h1 className="text-4xl font-bold">Projects we&apos;ve delivered</h1>
        <p className="text-lg text-slate-300">
          Engagements across cloud, mobile, AI, and platform engineering—each
          tailored to the client&apos;s environment and business goals.
        </p>
      </div>

      <ProjectsGrid />
    </section>
  );
}
