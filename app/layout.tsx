import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { SiteChat } from "../components/SiteChat";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kyrious Tech",
  description: "AI, DevOps & Product Engineering Company",
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">
        <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-6">
          <header className="border-b border-slate-800 py-5">
            <nav className="flex items-center justify-between">
              <Link href="/" className="text-xl font-semibold text-cyan-400">
                Kyrious Tech
              </Link>
              <div className="flex items-center gap-6 text-sm">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="transition-colors hover:text-cyan-400"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </nav>
          </header>
          <main className="flex-1 py-12">{children}</main>
          <footer className="border-t border-slate-800 py-6 text-sm text-slate-400">
            <p>
              © {new Date().getFullYear()} Kyrious Tech. Building reliable
              digital products.
            </p>
          </footer>
        </div>
        <SiteChat />
      </body>
    </html>
  );
}
