import Image from "next/image";
import { projects } from "../app/projects/data";

export function ProjectsGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((project) => (
        <article
          key={project.slug}
          className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:border-cyan-300 hover:shadow-md"
        >
          <div className="relative aspect-video border-b border-slate-200 bg-slate-100">
            <Image
              src={`/images/projects/${project.image}.webp`}
              alt=""
              fill
              sizes="(min-width: 1152px) 540px, (min-width: 768px) calc(50vw - 36px), calc(100vw - 48px)"
              className="object-cover"
            />
          </div>
          <div className="space-y-3 p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-cyan-600">
              {project.category}
            </p>
            <h2 className="text-xl font-semibold text-slate-900">
              {project.title}
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              {project.description}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}
