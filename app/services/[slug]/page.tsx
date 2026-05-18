import Link from "next/link";
import { notFound } from "next/navigation";
import { getServiceBySlug, services } from "../data";

type ServiceDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <section className="space-y-10">
      <div className="space-y-4">
        <Link
          href="/services"
          className="inline-flex text-sm text-cyan-300 transition hover:text-cyan-200"
        >
          ← Back to services
        </Link>
        <h1 className="text-4xl font-bold">{service.title}</h1>
        <p className="max-w-3xl text-slate-300">{service.overview}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <article className="rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-xl font-semibold text-cyan-300">What you get</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            {service.outcomes.map((outcome) => (
              <li key={outcome}>{outcome}</li>
            ))}
          </ul>
        </article>

        <article className="rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-xl font-semibold text-cyan-300">How we deliver</h2>
          <ol className="mt-4 space-y-3 text-sm text-slate-300">
            {service.process.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </article>
      </div>

      <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-6">
        <h3 className="text-2xl font-semibold">Need this service for your team?</h3>
        <p className="mt-2 max-w-2xl text-slate-300">
          Share your goals and current challenges. We&apos;ll suggest the fastest
          practical path to get results.
        </p>
        <Link
          href="/contact"
          className="mt-4 inline-flex rounded-lg bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
        >
          Contact us
        </Link>
      </div>
    </section>
  );
}
