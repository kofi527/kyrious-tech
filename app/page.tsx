import Link from "next/link";
import { HomeHero } from "../components/HomeHero";
import { ServicesHeroImage } from "../components/ServicesHeroImage";
import { services } from "./services/data";

const highlights = [
  {
    title: "Build digital products with speed",
    description:
      "From product discovery to launch, we design and ship web and mobile experiences users trust.",
  },
  {
    title: "Scale infrastructure with confidence",
    description:
      "Cloud-native architectures, CI/CD, and observability practices that keep delivery stable as you grow.",
  },
  {
    title: "Embed practical AI into workflows",
    description:
      "We integrate AI assistants and automations that reduce manual effort and improve team productivity.",
  },
];

const steps = [
  "Discover goals, users, and technical constraints",
  "Design and deliver in short, measurable iterations",
  "Handover with documentation and ongoing support",
];

const metrics = [
  { label: "Projects delivered", value: "40+" },
  { label: "Average response time", value: "<24h" },
  { label: "Partnership model", value: "Remote-first" },
];

const visionProductPoints = [
  "Automate visual inspection, counting, and quality checks on the floor or in the field",
  "Turn camera feeds and image archives into structured data your teams already use",
  "Deploy with privacy and governance in mind—on-premise, hybrid, or cloud",
];

export default function Home() {
  return (
    <section className="space-y-14">
      <HomeHero />

      <div className="relative overflow-hidden rounded-2xl border border-emerald-200 bg-linear-to-br from-emerald-50 via-white to-cyan-50 p-8 md:p-10">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-emerald-100/80 blur-3xl"
          aria-hidden
        />
        <div className="relative grid gap-8 md:grid-cols-[1.35fr_1fr] md:items-center">
          <div className="space-y-5">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">
                New launch
              </span>
              <span className="inline-flex rounded-full bg-cyan-100 px-3 py-1 text-xs text-cyan-700">
                Computer vision
              </span>
            </div>
            <h2 className="text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
              Meet our new product: vision AI built for real organizational
              problems
            </h2>
            <p className="max-w-2xl text-slate-600">
              We&apos;re launching a computer vision platform that helps teams
              see patterns, catch issues earlier, and automate repetitive visual
              work—without replacing the judgment of your people.
            </p>
            <ul className="space-y-3 text-sm text-slate-600">
              {visionProductPoints.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/contact"
                className="rounded-lg bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-500"
              >
                Request early access
              </Link>
              <Link
                href="/services/ai-integration"
                className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-emerald-500 hover:text-emerald-700"
              >
                How we ship AI
              </Link>
            </div>
          </div>
          <aside className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-emerald-800">
              Built for operations, compliance, and scale
            </p>
            <p className="mt-3 text-sm text-slate-600">
              Whether you run manufacturing, logistics, facilities, or
              document-heavy processes, we tailor models and pipelines to your
              environment—not generic demos.
            </p>
          </aside>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {highlights.map((item) => (
          <article
            key={item.title}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h2 className="text-xl font-semibold text-cyan-600">{item.title}</h2>
            <p className="mt-3 text-slate-600">{item.description}</p>
          </article>
        ))}
      </div>

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 md:p-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl space-y-3">
            <p className="inline-flex rounded-full bg-cyan-100 px-4 py-2 text-sm text-cyan-700">
              Our work
            </p>
            <h2 className="text-3xl font-bold text-slate-900">
              Projects we&apos;ve delivered
            </h2>
            <p className="text-slate-600">
              Cloud migration, mobile maintenance, hazard-detection AI, and
              platform APIs—see how we help teams ship and scale.
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex shrink-0 rounded-lg bg-cyan-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-500"
          >
            View all projects
          </Link>
        </div>
      </div>

      <div
        id="services"
        className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50"
      >
        <div
          className="pointer-events-none absolute -left-20 bottom-0 h-48 w-48 rounded-full bg-cyan-100/80 blur-3xl"
          aria-hidden
        />
        <div className="relative grid gap-8 p-8 md:grid-cols-[1fr_1.05fr] md:items-center md:p-10">
          <div className="order-2 space-y-6 md:order-1">
            <p className="inline-flex rounded-full bg-cyan-100 px-4 py-2 text-sm text-cyan-700">
              Our services
            </p>
            <h2 className="text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
              Full-stack support from build to scale
            </h2>
            <p className="max-w-xl text-slate-600">
              Product engineering, website development and maintenance, DevOps,
              AI integration, and technical advisory—delivered with clear
              communication and outcomes your team can own.
            </p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="block rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm transition hover:border-cyan-400 hover:text-cyan-700"
                  >
                    <span className="font-medium text-cyan-600">
                      {service.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/services"
              className="inline-flex rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-cyan-600 hover:text-cyan-600"
            >
              View all services
            </Link>
          </div>
          <div className="order-1 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm md:order-2">
            <ServicesHeroImage className="h-auto w-full" />
          </div>
        </div>
      </div>

      <div className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-3 md:p-8">
        {metrics.map((metric) => (
          <article key={metric.label} className="space-y-1">
            <p className="text-3xl font-bold text-cyan-600">{metric.value}</p>
            <p className="text-sm text-slate-500">{metric.label}</p>
          </article>
        ))}
      </div>

      <div className="grid gap-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-[1.2fr_1fr] md:p-8">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-slate-900">How we work</h3>
          <p className="max-w-2xl text-slate-600">
            We keep delivery simple: align on goals, execute with discipline, and
            continuously improve with your team.
          </p>
        </div>
        <ol className="space-y-3 text-sm text-slate-600">
          {steps.map((step) => (
            <li key={step} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              {step}
            </li>
          ))}
        </ol>
      </div>

      <div className="rounded-xl border border-cyan-200 bg-cyan-50 p-6">
        <h3 className="text-2xl font-semibold text-slate-900">
          Ready to launch your next product?
        </h3>
        <p className="mt-2 max-w-2xl text-slate-600">
          Tell us what you&apos;re building and where you need support. We&apos;ll
          recommend the fastest path from roadmap to reliable delivery.
        </p>
        <Link
          href="/contact"
          className="mt-4 inline-flex rounded-lg bg-cyan-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-500"
        >
          Start the conversation
        </Link>
      </div>
    </section>
  );
}
