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
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/${href}`;
    }
  };

  return (
    <>
      <div
        className="scroll-progress"
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-xl ${
          scrolled
            ? "bg-mahogany-deep/92 border-b border-snow/8 py-4"
            : "bg-mahogany-deep/55 py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" aria-label="Madison Drennen — Home">
            <Logo variant="dark" />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => handleNav("#about")}
              className="font-mono text-[0.65rem] font-medium tracking-[0.22em] uppercase text-snow/65 hover:text-snow transition-colors duration-300 link-underline"
            >
              About
            </button>

            <div
              className="relative"
              onMouseEnter={() => setWorkOpen(true)}
              onMouseLeave={() => setWorkOpen(false)}
            >
              <button
                onClick={() => handleNav("#work")}
                className="flex items-center gap-1.5 font-mono text-[0.65rem] font-medium tracking-[0.22em] uppercase text-snow/65 hover:text-snow transition-colors duration-300"
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

              <div
                className={`absolute left-1/2 -translate-x-1/2 top-full pt-4 transition-all duration-300 ${
                  workOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-1 pointer-events-none"
                }`}
              >
                <div className="min-w-[240px] glass-tile overflow-hidden py-2">
                  <span className="block px-5 pt-2 pb-2.5 font-mono text-[0.52rem] font-medium tracking-[0.3em] uppercase text-berry">
                    ✦ &nbsp; Case Studies
                  </span>
                  {projects.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/work/${p.slug}`}
                      className="group flex items-center justify-between px-5 py-2.5 font-display text-base font-semibold text-snow/85 hover:text-snow hover:bg-berry/15 transition-colors duration-200"
                    >
                      {p.label}
                      <span className="text-berry opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-sm">
                        →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={() => handleNav("#contact")}
              className="font-mono text-[0.65rem] font-medium tracking-[0.22em] uppercase text-snow/65 hover:text-snow transition-colors duration-300 link-underline"
            >
              Contact
            </button>
          </nav>

          <a
            href="mailto:madison.drennen7@gmail.com"
            className="hidden md:inline-flex btn-primary px-5 py-2.5 text-[0.6rem]"
          >
            Let&apos;s Talk
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 w-7 h-5 justify-center"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-full h-px bg-snow transition-all duration-300 origin-center ${
                menuOpen ? "rotate-45 translate-y-[4px]" : ""
              }`}
            />
            <span
              className={`block w-full h-px bg-snow transition-all duration-300 ${
                menuOpen ? "opacity-0 -translate-x-2" : ""
              }`}
            />
            <span
              className={`block w-full h-px bg-snow transition-all duration-300 origin-center ${
                menuOpen ? "-rotate-45 -translate-y-[4px]" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 sweep-bg flex flex-col justify-center items-center gap-6 transition-all duration-500 overflow-y-auto py-24 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-mahogany-deep/70 pointer-events-none" />
        <div className="relative z-10 flex flex-col items-center gap-6">
          <div className="mb-2 text-center">
            <Logo variant="dark" />
          </div>
          <div className="w-8 h-px bg-berry/70 mb-1" />

          <button
            onClick={() => handleNav("#about")}
            className="font-display text-4xl font-bold text-snow hover:text-berry transition-colors duration-300 tracking-[-0.03em]"
          >
            About<span className="text-berry">.</span>
          </button>

          <button
            onClick={() => handleNav("#work")}
            className="font-display text-4xl font-bold text-snow hover:text-berry transition-colors duration-300 tracking-[-0.03em]"
          >
            Work<span className="text-berry">.</span>
          </button>
          <div className="flex flex-col items-center gap-3 -mt-1">
            {projects.map((p) => (
              <Link
                key={p.slug}
                href={`/work/${p.slug}`}
                onClick={() => setMenuOpen(false)}
                className="font-mono text-xs font-medium tracking-[0.22em] uppercase text-snow/55 hover:text-berry transition-colors duration-300"
              >
                {p.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => handleNav("#contact")}
            className="font-display text-4xl font-bold text-snow hover:text-berry transition-colors duration-300 tracking-[-0.03em]"
          >
            Contact<span className="text-berry">.</span>
          </button>

          <a
            href="mailto:madison.drennen7@gmail.com"
            className="mt-4 font-mono text-xs font-medium tracking-[0.22em] uppercase text-berry"
          >
            madison.drennen7@gmail.com
          </a>
        </div>
      </div>
    </>
  );
}
