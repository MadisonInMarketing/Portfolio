"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "@/components/ui/Logo";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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
    if (el) el.scrollIntoView({ behavior: "smooth" });
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
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="font-sans text-[0.75rem] font-medium tracking-widest uppercase text-ink-muted hover:text-ink transition-colors duration-300 link-underline"
              >
                {link.label}
              </button>
            ))}
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
        className={`fixed inset-0 z-40 bg-cream flex flex-col justify-center items-center gap-8 transition-all duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Mobile menu logo */}
        <div className="mb-4 text-center">
          <Logo variant="compact" />
        </div>
        <div className="w-8 h-px bg-accent/50 mb-2" />

        {navLinks.map((link, i) => (
          <button
            key={link.href}
            onClick={() => handleNav(link.href)}
            className="font-display text-4xl font-light text-ink hover:text-accent transition-colors duration-300"
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            {link.label}
          </button>
        ))}
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
