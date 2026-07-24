import Link from "next/link";
import { AboutHeroImage } from "../../components/AboutHeroImage";

const storyParagraphs = [
  "Kyrious Tech was founded on a simple belief: growing businesses deserve a technology partner who speaks plainly, ships reliably, and stays accountable after launch.",
  "We started by helping small teams turn rough ideas into working products—MVPs, internal tools, and customer-facing platforms that had to earn trust quickly. As our clients scaled, so did the work: websites that needed ongoing care, cloud infrastructure that had to stay stable under load, and practical AI that fit real workflows instead of slide decks.",
  "Today we work with startups and scaling companies across industries, combining product engineering, DevOps, AI integration, and hands-on advisory. Our story is still being written with every engagement—but the through-line is the same: clarity, craftsmanship, and outcomes that matter to your business.",
];

const keyBenefits = [
  {
    title: "Partner mindset, not ticket queue",
    description:
      "You work with engineers and leads who understand your goals, not a rotating support desk. We align on priorities and own delivery end to end.",
  },
  {
    title: "Faster path from idea to production",
    description:
      "Short iterations, clear milestones, and modern tooling—including AI-assisted workflows where they add real leverage—keep momentum high without cutting corners.",
  },
  {
    title: "Built to scale with your business",
    description:
      "Architecture, websites, and cloud setups are designed for growth: maintainable code, observable systems, and maintenance plans that evolve as you do.",
  },
  {
    title: "Transparent communication",
    description:
      "Regular checkpoints, honest trade-offs, and documentation your team can use—so there are no surprises when priorities or requirements shift.",
  },
  {
    title: "Breadth without losing focus",
    description:
      "Product engineering, website development, DevOps, AI, and advisory under one roof—so you spend less time coordinating vendors and more time shipping.",
  },
  {
    title: "Long-term reliability",
    description:
      "We plan for handover, ongoing support, and continuous improvement so what we build remains dependable after the initial launch.",
  },
];

const pillars = [
  {
    title: "Our Mission",
    description:
      "Empower teams with technology that drives growth, efficiency, and long-term business impact.",
  },
  {
    title: "Our Approach",
    description:
      "Collaborate closely, deliver in short iterations, and build solutions that are secure, scalable, and easy to maintain.",
  },
  {
    title: "Our Values",
    description:
      "Clarity, craftsmanship, accountability, and a commitment to real outcomes over vanity metrics.",
  },
];

export default function AboutPage() {
  return (
    <section className="space-y-12">
      <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
        <div
          className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-cyan-100/80 blur-3xl"
          aria-hidden
        />
        <div className="relative grid gap-8 p-8 md:grid-cols-[1.1fr_1fr] md:items-center md:p-10">
          <div className="space-y-5">
            <p className="inline-flex rounded-full bg-cyan-100 px-4 py-2 text-sm text-cyan-700">
              About us
            </p>
            <h1 className="text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
              A technology partner focused on lifting businesses up
            </h1>
            <p className="max-w-xl text-lg text-slate-600">
              We help teams launch and scale products users trust—combining
              product strategy, modern engineering, and cloud expertise to turn
              ambitious ideas into dependable platforms.
            </p>
            <Link
              href="/contact"
              className="inline-flex rounded-lg bg-cyan-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-500"
            >
              Work with us
            </Link>
          </div>
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <AboutHeroImage className="h-auto w-full" />
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
        <h2 className="text-3xl font-bold text-cyan-600">Our Story</h2>
        <div className="mt-6 max-w-3xl space-y-4 text-slate-600">
          {storyParagraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-cyan-600">
            Key Benefits of Engaging Our Company
          </h2>
          <p className="max-w-3xl text-slate-500">
            When you partner with Kyrious Tech, you get more than delivery capacity—you
            get a team invested in your outcomes from discovery through scale.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {keyBenefits.map((benefit) => (
            <article
              key={benefit.title}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-cyan-600">
                {benefit.title}
              </h3>
              <p className="mt-3 text-sm text-slate-600">{benefit.description}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {pillars.map((pillar) => (
          <article
            key={pillar.title}
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <h2 className="text-xl font-semibold text-cyan-600">{pillar.title}</h2>
            <p className="mt-2 text-slate-600">{pillar.description}</p>
          </article>
        ))}
      </div>

      <div className="rounded-xl border border-cyan-200 bg-cyan-50 p-6">
        <h3 className="text-2xl font-semibold text-slate-900">
          Ready to start your next chapter with us?
        </h3>
        <p className="mt-2 max-w-2xl text-slate-600">
          Tell us where you are today and where you want to go. We&apos;ll outline a
          practical path forward—no obligation, just clarity.
        </p>
        <Link
          href="/contact"
          className="mt-4 inline-flex rounded-lg bg-cyan-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-500"
        >
          Get in touch
        </Link>
      </div>
    </section>
  );
}
