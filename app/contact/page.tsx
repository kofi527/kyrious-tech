import { ChatWidget } from "../../components/ChatWidget";

export default function ContactPage() {
  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-slate-900">Contact Us</h1>
        <p className="max-w-3xl text-slate-600">
          Tell us what you are building and where you need support. We usually
          respond within one business day.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <div className="grid gap-4 md:grid-cols-1">
          <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-semibold text-cyan-600">Email</h2>
            <p className="mt-2 text-slate-600">hello@kyrioustech.com</p>
          </article>
          <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-semibold text-cyan-600">Phone</h2>
            <p className="mt-2 text-slate-600">+1 (405) 9784603</p>
          </article>
          <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-semibold text-cyan-600">Location</h2>
            <p className="mt-2 text-slate-600">USA (Remote First)</p>
          </article>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-900">Chat with us</h2>
          <p className="text-sm text-slate-500">
            Share your name, email, and project details—we&apos;ll route your
            message to our team.
          </p>
          <ChatWidget embedded />
        </div>
      </div>
    </section>
  );
}
