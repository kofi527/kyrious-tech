export default function ContactPage() {
  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="max-w-3xl text-slate-300">
          Tell us what you are building and where you need support. We usually
          respond within one business day.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <article className="rounded-xl border border-slate-800 bg-slate-900 p-5">
          <h2 className="text-xl font-semibold text-cyan-300">Email</h2>
          <p className="mt-2 text-slate-400">hello@kyrioustech.com</p>
        </article>
        <article className="rounded-xl border border-slate-800 bg-slate-900 p-5">
          <h2 className="text-xl font-semibold text-cyan-300">Phone</h2>
          <p className="mt-2 text-slate-400">+1 (555) 123-4567</p>
        </article>
        <article className="rounded-xl border border-slate-800 bg-slate-900 p-5">
          <h2 className="text-xl font-semibold text-cyan-300">Location</h2>
          <p className="mt-2 text-slate-400">USA (Remote First)</p>
        </article>
      </div>
    </section>
  );
}
