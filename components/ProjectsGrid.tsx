import { projects } from "../app/projects/data";
import { ProjectIllustration } from "./ProjectIllustration";

export function ProjectsGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((project) => (
        <article
          key={project.slug}
          className="overflow-hidden rounded-xl border border-slate-800 bg-slate-950/50 transition hover:border-cyan-500/40"
        >
          <div className="border-b border-slate-800">
            <ProjectIllustration
              variant={project.image}
              className="h-auto w-full"
            />
          </div>
          <div className="space-y-3 p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-cyan-400/90">
              {project.category}
            </p>
            <h3 className="text-xl font-semibold text-slate-100">
              {project.title}
            </h3>
            <p className="text-sm leading-relaxed text-slate-400">
              {project.description}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}
