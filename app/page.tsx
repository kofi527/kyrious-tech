import Link from "next/link";
import { KyriousLogo } from "../components/KyriousLogo";

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
      <div className="grid gap-8 rounded-2xl border border-slate-800 bg-slate-900/60 p-8 md:grid-cols-[1.4fr_1fr] md:p-10">
        <div className="space-y-6">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
            <KyriousLogo
              size={84}
              title="Kyrious Tech"
              className="shrink-0 drop-shadow-[0_10px_40px_rgba(34,211,238,0.22)] sm:mt-0.5"
            />
            <div className="min-w-0 flex-1 space-y-5">
              <p className="inline-flex rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
                AI, DevOps, and Product Engineering
              </p>
              <h1 className="text-4xl font-bold leading-tight md:text-6xl">
                Your trusted partner for building and scaling modern software.
              </h1>
            </div>
          </div>
          <p className="max-w-2xl text-lg text-slate-300">
            Kyrious Tech helps startups and growing companies move from idea to
            production with reliable engineering, clear communication, and
            business-focused outcomes.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-lg bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Book a free consultation
            </Link>
            <Link
              href="/services"
              className="rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold transition hover:border-cyan-400 hover:text-cyan-300"
            >
              Explore our services
            </Link>
          </div>
        </div>

        <aside className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-6">
          <h2 className="text-xl font-semibold">Why teams choose us</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li>Dedicated cross-functional experts per engagement</li>
            <li>Transparent delivery with weekly progress checkpoints</li>
            <li>Scalable solutions built for long-term ownership</li>
          </ul>
        </aside>
      </div>

      <div className="relative overflow-hidden rounded-2xl border border-emerald-500/25 bg-linear-to-br from-emerald-950/40 via-slate-900 to-slate-900 p-8 md:p-10">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl"
          aria-hidden
        />
        <div className="relative grid gap-8 md:grid-cols-[1.35fr_1fr] md:items-center">
          <div className="space-y-5">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-300">
                New launch
              </span>
              <span className="inline-flex rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">
                Computer vision
              </span>
            </div>
            <h2 className="text-3xl font-bold leading-tight md:text-4xl">
              Meet our new product: vision AI built for real organizational
              problems
            </h2>
            <p className="max-w-2xl text-slate-300">
              We&apos;re launching a computer vision platform that helps teams
              see patterns, catch issues earlier, and automate repetitive visual
              work—without replacing the judgment of your people.
            </p>
            <ul className="space-y-3 text-sm text-slate-300">
              {visionProductPoints.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/contact"
                className="rounded-lg bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
              >
                Request early access
              </Link>
              <Link
                href="/services/ai-integration"
                className="rounded-lg border border-slate-600 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-emerald-400/70 hover:text-emerald-200"
              >
                How we ship AI
              </Link>
            </div>
          </div>
          <aside className="rounded-xl border border-slate-700/80 bg-slate-950/50 p-6 backdrop-blur-sm">
            <p className="text-sm font-medium text-emerald-200/90">
              Built for operations, compliance, and scale
            </p>
            <p className="mt-3 text-sm text-slate-400">
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
            className="rounded-xl border border-slate-800 bg-slate-900 p-6"
          >
            <h2 className="text-xl font-semibold text-cyan-300">{item.title}</h2>
            <p className="mt-3 text-slate-400">{item.description}</p>
          </article>
        ))}
      </div>

      <div className="grid gap-4 rounded-2xl border border-slate-800 bg-slate-900 p-6 md:grid-cols-3 md:p-8">
        {metrics.map((metric) => (
          <article key={metric.label} className="space-y-1">
            <p className="text-3xl font-bold text-cyan-300">{metric.value}</p>
            <p className="text-sm text-slate-400">{metric.label}</p>
          </article>
        ))}
      </div>

      <div className="grid gap-8 rounded-2xl border border-slate-800 p-6 md:grid-cols-[1.2fr_1fr] md:p-8">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">How we work</h3>
          <p className="max-w-2xl text-slate-300">
            We keep delivery simple: align on goals, execute with discipline, and
            continuously improve with your team.
          </p>
        </div>
        <ol className="space-y-3 text-sm text-slate-300">
          {steps.map((step) => (
            <li key={step} className="rounded-lg border border-slate-800 bg-slate-900 p-4">
              {step}
            </li>
          ))}
        </ol>
      </div>

      <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-6">
        <h3 className="text-2xl font-semibold">Ready to launch your next product?</h3>
        <p className="mt-2 max-w-2xl text-slate-300">
          Tell us what you&apos;re building and where you need support. We&apos;ll
          recommend the fastest path from roadmap to reliable delivery.
        </p>
        <Link
          href="/contact"
          className="mt-4 inline-flex rounded-lg bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
        >
          Start the conversation
        </Link>
      </div>
    </section>
  );
}
