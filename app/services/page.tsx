import Link from "next/link";
import { ServicesHeroImage } from "../../components/ServicesHeroImage";
import { services } from "./data";

export default function ServicesPage() {
  return (
    <section className="space-y-12">
      <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60">
        <div
          className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl"
          aria-hidden
        />
        <div className="relative grid gap-8 p-8 md:grid-cols-[1.1fr_1fr] md:items-center md:p-10">
          <div className="space-y-5">
            <p className="inline-flex rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
              Services
            </p>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              Engineering services built for teams that need to scale
            </h1>
            <p className="max-w-xl text-lg text-slate-300">
              From product engineering and website development to DevOps, AI
              integration, and technical advisory—we help you launch faster,
              improve reliability, and grow with confidence.
            </p>
            <Link
              href="/contact"
              className="inline-flex rounded-lg bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Discuss your project
            </Link>
          </div>
          <div className="overflow-hidden rounded-xl border border-slate-700/80 bg-slate-950/50 shadow-lg shadow-cyan-500/5">
            <ServicesHeroImage className="h-auto w-full" />
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-cyan-300">What we offer</h2>
          <p className="max-w-3xl text-slate-400">
            Explore each service to see outcomes, delivery approach, and how we
            can support your next initiative.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <Link
              key={service.title}
              href={`/services/${service.slug}`}
              className="group rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-500/70"
            >
              <h3 className="text-2xl font-semibold text-cyan-300">
                {service.title}
              </h3>
              <p className="mt-3 text-slate-400">{service.description}</p>
              <p className="mt-4 text-sm font-medium text-cyan-300 transition group-hover:text-cyan-200">
                View service details →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
