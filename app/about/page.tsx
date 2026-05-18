export default function AboutPage() {
  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">About Kyrious Tech</h1>
        <p className="max-w-3xl text-slate-300">
          We are a technology partner focused on  and lifting up businesses launch and
          scale products that users love. Our team combines product strategy,
          modern engineering practices, and cloud expertise to turn ambitious
          ideas into dependable platforms.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <article className="rounded-xl border border-slate-800 bg-slate-900 p-5">
          <h2 className="text-xl font-semibold text-cyan-300">Our Mission</h2>
          <p className="mt-2 text-slate-400">
            Empower teams with technology that drives growth, efficiency, and
            long-term business impact.
          </p>
        </article>
        <article className="rounded-xl border border-slate-800 bg-slate-900 p-5">
          <h2 className="text-xl font-semibold text-cyan-300">Our Approach</h2>
          <p className="mt-2 text-slate-400">
            Collaborate closely, deliver in short iterations, and build
            solutions that are secure, scalable, and easy to maintain.
          </p>
        </article>
        <article className="rounded-xl border border-slate-800 bg-slate-900 p-5">
          <h2 className="text-xl font-semibold text-cyan-300">Our Values</h2>
          <p className="mt-2 text-slate-400">
            Clarity, craftsmanship, accountability, and a commitment to real
            outcomes over vanity metrics.
          </p>
        </article>
      </div>
    </section>
  );
}
