import Link from "next/link";
import { services } from "./data";

export default function ServicesPage() {
  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Our Services</h1>
        <p className="max-w-3xl text-slate-300">
          We provide focused technical services designed to help your team
          launch faster, improve reliability, and scale with confidence.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {services.map((service) => (
          <Link
            key={service.title}
            href={`/services/${service.slug}`}
            className="group rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-500/70"
          >
            <h2 className="text-2xl font-semibold text-cyan-300">
              {service.title}
            </h2>
            <p className="mt-3 text-slate-400">{service.description}</p>
            <p className="mt-4 text-sm font-medium text-cyan-300 transition group-hover:text-cyan-200">
              View service details →
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
