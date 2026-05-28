import Image from "next/image";
import Link from "next/link";
import { Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  const socials = [
    { label: "Instagram", href: "https://www.instagram.com/drennenmadison/", Icon: Instagram },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/madison-drennen-465685162/", Icon: Linkedin },
    { label: "Email", href: "mailto:madison.drennen7@gmail.com", Icon: Mail },
  ];

  return (
    <footer className="relative bg-ink text-cream overflow-hidden">
      {/* Subtle pink ambient hue */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[70%] h-[18rem] bg-accent/[0.08] blur-[140px] pointer-events-none" />

      {/* Top hairline gradient */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(255,79,216,0.35) 30%, rgba(255,79,216,0.55) 50%, rgba(255,79,216,0.35) 70%, transparent)",
        }}
      />

      <div className="relative flex flex-col items-center justify-center px-6 py-14 md:py-16">
        {/* Monogram */}
        <Link
          href="#hero"
          aria-label="Back to top"
          className="group inline-flex items-center justify-center w-12 h-12 rounded-full border border-cream/15 hover:border-accent transition-colors duration-400 overflow-hidden mb-5"
        >
          <Image
            src="/logos/logo-monogram.png"
            alt="Madison Drennen monogram"
            width={48}
            height={48}
            className="w-7 h-7 object-contain transition-transform duration-500 group-hover:scale-110"
          />
        </Link>

        {/* Wordmark + tag */}
        <div className="flex flex-col items-center leading-none mb-4">
          <span className="font-display text-xl font-semibold tracking-tight text-cream">
            Madison Drennen
          </span>
          <span className="font-accent text-[0.55rem] font-600 tracking-[0.32em] uppercase text-accent mt-2">
            Brand · Web · Marketing
          </span>
        </div>

        {/* Copyright */}
        <p className="font-sans text-xs text-cream/45 text-center">
          © {year} Madison Drennen. All rights reserved.
        </p>

        {/* Social row */}
        <div className="flex items-center gap-5 mt-6">
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-cream/50 hover:text-accent hover:-translate-y-0.5 transition-all duration-300"
            >
              <Icon size={20} strokeWidth={1.5} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
