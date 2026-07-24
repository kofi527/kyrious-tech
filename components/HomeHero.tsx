import Image from "next/image";
import Link from "next/link";

export function HomeHero() {
  return (
    <div className="space-y-4">
      <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md shadow-slate-200/60">
        <div
          className="pointer-events-none absolute -right-20 -top-20 z-10 h-56 w-56 rounded-full bg-cyan-100/80 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-24 -left-16 z-10 h-48 w-48 rounded-full bg-cyan-50 blur-3xl"
          aria-hidden
        />

        <div className="relative">
          <Image
            src="/hero-landing.png"
            alt="Kyrious Tech — Leave the tech to us. Masters in the technological space."
            width={1024}
            height={575}
            priority
            unoptimized
            className="h-auto w-full object-cover"
            sizes="(max-width: 1152px) 100vw, 1152px"
          />
          <div
            className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-slate-200/80"
            aria-hidden
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-3 sm:justify-start">
        <Link
          href="/services"
          className="rounded-lg bg-cyan-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-500"
        >
          Explore services
        </Link>
        <Link
          href="/contact"
          className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-cyan-600 hover:text-cyan-600"
        >
          Book a consultation
        </Link>
      </div>
    </div>
  );
}
