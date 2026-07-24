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
          className="inline-flex text-sm text-cyan-600 transition hover:text-cyan-700"
        >
          ← Back to services
        </Link>
        <h1 className="text-4xl font-bold text-slate-900">{service.title}</h1>
        <p className="max-w-3xl text-slate-600">{service.overview}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-cyan-600">What you get</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            {service.outcomes.map((outcome) => (
              <li key={outcome}>{outcome}</li>
            ))}
          </ul>
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-cyan-600">How we deliver</h2>
          <ol className="mt-4 space-y-3 text-sm text-slate-600">
            {service.process.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </article>
      </div>

      <div className="rounded-xl border border-cyan-200 bg-cyan-50 p-6">
        <h3 className="text-2xl font-semibold text-slate-900">
          Need this service for your team?
        </h3>
        <p className="mt-2 max-w-2xl text-slate-600">
          Share your goals and current challenges. We&apos;ll suggest the fastest
          practical path to get results.
        </p>
        <Link
          href="/contact"
          className="mt-4 inline-flex rounded-lg bg-cyan-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-500"
        >
          Contact us
        </Link>
      </div>
    </section>
  );
}
