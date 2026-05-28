"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "@/components/ui/Logo";

const projects = [
  { label: "GYMRISE", slug: "gymrise" },
  { label: "Social Mulli", slug: "social-mulli" },
  { label: "RekMed", slug: "rekmed" },
  { label: "Explorations", slug: "explorations" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const total = document.body.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    // If we're not on the homepage, anchor links won't resolve — let the browser handle "/#hash"
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/${href}`;
    }
  };

  return (
    <>
      {/* ── Scroll progress bar ── */}
      <div
        className="scroll-progress"
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-cream/90 backdrop-blur-md border-b border-ink/5 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" aria-label="Madison Drennen — Home">
            <Logo variant="compact" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {/* About */}
            <button
              onClick={() => handleNav("#about")}
              className="font-sans text-[0.75rem] font-medium tracking-widest uppercase text-ink-muted hover:text-ink transition-colors duration-300 link-underline"
            >
              About
            </button>

            {/* Work — with dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setWorkOpen(true)}
              onMouseLeave={() => setWorkOpen(false)}
            >
              <button
                onClick={() => handleNav("#work")}
                className="flex items-center gap-1.5 font-sans text-[0.75rem] font-medium tracking-widest uppercase text-ink-muted hover:text-ink transition-colors duration-300"
              >
                Work
                <span
                  className={`inline-block text-[0.6rem] transition-transform duration-300 ${
                    workOpen ? "rotate-180" : ""
                  }`}
                >
                  ▾
                </span>
              </button>

              {/* Dropdown */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 top-full pt-4 transition-all duration-300 ${
                  workOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-1 pointer-events-none"
                }`}
              >
                <div className="min-w-[220px] bg-cream/95 backdrop-blur-md border border-ink/8 rounded-[6px] shadow-[0_20px_50px_-12px_rgba(17,17,17,0.18)] overflow-hidden py-2">
                  <span className="block px-5 pt-2 pb-2.5 font-accent text-[0.5rem] font-700 tracking-[0.3em] uppercase text-accent">
                    Case Studies
                  </span>
                  {projects.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/work/${p.slug}`}
                      className="group flex items-center justify-between px-5 py-2.5 font-display text-base font-light text-ink/80 hover:text-ink hover:bg-accent/[0.05] transition-colors duration-200"
                    >
                      {p.label}
                      <span className="text-accent opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-sm">
                        →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact */}
            <button
              onClick={() => handleNav("#contact")}
              className="font-sans text-[0.75rem] font-medium tracking-widest uppercase text-ink-muted hover:text-ink transition-colors duration-300 link-underline"
            >
              Contact
            </button>
          </nav>

          {/* CTA */}
          <a
            href="mailto:madison.drennen7@gmail.com"
            className="hidden md:inline-flex btn-primary px-5 py-2.5"
          >
            Let&apos;s Talk
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 w-7 h-5 justify-center"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-full h-px bg-ink transition-all duration-300 origin-center ${
                menuOpen ? "rotate-45 translate-y-[4px]" : ""
              }`}
            />
            <span
              className={`block w-full h-px bg-ink transition-all duration-300 ${
                menuOpen ? "opacity-0 -translate-x-2" : ""
              }`}
            />
            <span
              className={`block w-full h-px bg-ink transition-all duration-300 origin-center ${
                menuOpen ? "-rotate-45 -translate-y-[4px]" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-cream flex flex-col justify-center items-center gap-6 transition-all duration-500 overflow-y-auto py-24 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Mobile menu logo */}
        <div className="mb-2 text-center">
          <Logo variant="compact" />
        </div>
        <div className="w-8 h-px bg-accent/50 mb-1" />

        <button
          onClick={() => handleNav("#about")}
          className="font-display text-4xl font-light text-ink hover:text-accent transition-colors duration-300"
        >
          About
        </button>

        {/* Work + nested projects */}
        <button
          onClick={() => handleNav("#work")}
          className="font-display text-4xl font-light text-ink hover:text-accent transition-colors duration-300"
        >
          Work
        </button>
        <div className="flex flex-col items-center gap-3 -mt-1">
          {projects.map((p) => (
            <Link
              key={p.slug}
              href={`/work/${p.slug}`}
              onClick={() => setMenuOpen(false)}
              className="font-sans text-sm font-medium tracking-[0.2em] uppercase text-ink/55 hover:text-accent transition-colors duration-300"
            >
              {p.label}
            </Link>
          ))}
        </div>

        <button
          onClick={() => handleNav("#contact")}
          className="font-display text-4xl font-light text-ink hover:text-accent transition-colors duration-300"
        >
          Contact
        </button>

        <a
          href="mailto:madison.drennen7@gmail.com"
          className="mt-4 font-sans text-sm font-medium tracking-widest uppercase text-accent"
        >
          madison.drennen7@gmail.com
        </a>
      </div>
    </>
  );
}
