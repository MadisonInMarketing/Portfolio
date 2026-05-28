"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const showcase = [
  {
    src: "/brand/gymrise-website.png",
    project: "GYMRISE",
    category: "Website · Brand & Growth",
  },
  {
    src: "/brand/social-mulli-website.png",
    project: "Social Mulli",
    category: "Website · Brand & Web Design",
  },
  {
    src: "/work/explorations/03-concept.png",
    project: "Peachy HVAC",
    category: "Website · Concept Design",
  },
  {
    src: "/brand/social-mulli-brandkit.png",
    project: "Social Mulli",
    category: "Brand Kit · Print System",
  },
  {
    src: "/work/rekmed/01-product.jpg",
    project: "RekMed",
    category: "Product Photography · Brand System",
  },
  {
    src: "/brand/gymrise-brandkit.png",
    project: "GYMRISE",
    category: "Brand Kit · Digital System",
  },
  {
    src: "/brand/email-signatures.png",
    project: "Signature Bundle",
    category: "Email Signature System",
  },
];

const ROTATION_MS = 4800;

export default function Hero() {
  const [activeIdx, setActiveIdx] = useState(0);

  // Initial element reveals
  useEffect(() => {
    const elements = document.querySelectorAll("[data-hero-reveal]");
    elements.forEach((el, i) => {
      setTimeout(() => {
        (el as HTMLElement).style.opacity = "1";
        (el as HTMLElement).style.transform = "translate(0, 0)";
      }, 200 + i * 140);
    });
  }, []);

  // Auto-rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx((i) => (i + 1) % showcase.length);
    }, ROTATION_MS);
    return () => clearInterval(interval);
  }, []);

  const active = showcase[activeIdx];

  return (
    <section
      id="hero"
      className="relative bg-cream overflow-hidden flex flex-col"
    >
      {/* Subtle ambient warm wash */}
      <div className="absolute top-[12%] right-[-10%] w-[55vw] h-[55vw] rounded-full bg-accent/[0.05] blur-[120px] -z-10" />

      {/* ── GALLERY STAGE ── */}
      <div className="relative z-[2] flex flex-col items-center justify-center max-w-[1500px] mx-auto w-full px-6 pt-24 pb-4">

        {/* MASSIVE image stage */}
        <div
          data-hero-reveal
          style={{ opacity: 0, transform: "translateY(40px)", transition: "all 1s cubic-bezier(0.16,1,0.3,1)" }}
          className="relative w-full"
        >
          <div
            className="relative w-full overflow-hidden rounded-[6px] ring-1 ring-ink/8 bg-cream-dark/30"
            style={{
              aspectRatio: "16/9",
              boxShadow:
                "0 60px 120px -30px rgba(17,17,17,0.35), 0 25px 50px -20px rgba(255,79,216,0.10)",
            }}
          >
            {showcase.map((s, i) => (
              <div
                key={s.src}
                className="absolute inset-0 transition-all ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{
                  opacity: i === activeIdx ? 1 : 0,
                  transform: i === activeIdx ? "scale(1.02)" : "scale(1)",
                  transitionDuration: i === activeIdx ? `${ROTATION_MS + 600}ms, 1300ms` : "1300ms, 1300ms",
                  transitionProperty: "transform, opacity",
                  pointerEvents: i === activeIdx ? "auto" : "none",
                }}
              >
                <Image
                  src={s.src}
                  alt={`${s.project} — ${s.category}`}
                  fill
                  priority={i === 0}
                  className="object-cover"
                  sizes="(min-width: 1500px) 1440px, 100vw"
                />
              </div>
            ))}

            {/* Editorial corner ticks */}
            <span className="absolute top-4 left-4 w-5 h-5 border-t-2 border-l-2 border-cream/70 z-10" />
            <span className="absolute top-4 right-4 w-5 h-5 border-t-2 border-r-2 border-cream/70 z-10" />
            <span className="absolute bottom-4 left-4 w-5 h-5 border-b-2 border-l-2 border-cream/70 z-10" />
            <span className="absolute bottom-4 right-4 w-5 h-5 border-b-2 border-r-2 border-cream/70 z-10" />

            {/* Top identity overlay */}
            <div className="absolute top-0 left-0 right-0 z-[5] px-6 md:px-10 pt-7 md:pt-9 pb-12 bg-gradient-to-b from-ink/85 via-ink/40 to-transparent">
              <div className="flex items-start justify-between gap-6">
                {/* Left: name + roles */}
                <div>
                  <h1
                    className="font-display font-light text-cream leading-none tracking-tight mb-3"
                    style={{ fontSize: "clamp(1.75rem, 3.4vw, 2.75rem)" }}
                  >
                    Madison Drennen
                  </h1>
                  <p className="font-accent text-[0.55rem] md:text-[0.6rem] font-700 tracking-[0.32em] uppercase text-cream/75 flex flex-wrap items-baseline gap-x-3">
                    <span>Brand Designer</span>
                    <span className="text-cream/35">·</span>
                    <span>Digital Marketer</span>
                    <span className="text-cream/35">·</span>
                    <span>Content Creator</span>
                  </p>
                </div>

                {/* Right: portfolio chip + counter */}
                <div className="flex flex-col items-end gap-2.5 flex-shrink-0">
                  <span className="font-accent text-[0.55rem] md:text-[0.6rem] font-700 tracking-[0.32em] uppercase text-accent flex items-center gap-2">
                    <span className="w-4 h-px bg-accent" />
                    Portfolio · 2026
                  </span>
                  <span className="font-accent text-[0.5rem] md:text-[0.55rem] font-500 tracking-[0.28em] uppercase text-cream/55 tabular-nums">
                    <span className="text-cream font-700">{String(activeIdx + 1).padStart(2, "0")}</span>
                    <span className="mx-1.5 text-cream/30">/</span>
                    <span>{String(showcase.length).padStart(2, "0")}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom caption overlay */}
            <div className="absolute bottom-0 left-0 right-0 z-[5] px-6 md:px-10 py-7 md:py-9 bg-gradient-to-t from-ink/90 via-ink/55 to-transparent">
              <div className="flex items-end justify-between gap-6">
                <div>
                  <p
                    className="font-accent text-[0.55rem] md:text-[0.6rem] font-700 tracking-[0.32em] uppercase text-accent mb-2"
                    style={{ animation: "fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) both" }}
                    key={`cat-${activeIdx}`}
                  >
                    {active.category}
                  </p>
                  <h1
                    key={`proj-${activeIdx}`}
                    className="font-display font-light text-cream leading-none tracking-tight"
                    style={{
                      fontSize: "clamp(2.5rem, 5.5vw, 5rem)",
                      animation: "fadeUp 0.85s cubic-bezier(0.16,1,0.3,1) 0.08s both",
                    }}
                  >
                    {active.project}
                  </h1>
                </div>
                <a
                  href="#work"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="group hidden md:inline-flex items-center gap-3 font-accent text-[0.6rem] font-700 tracking-[0.28em] uppercase text-cream/85 hover:text-accent transition-colors duration-300 flex-shrink-0 pb-1"
                >
                  View Case Study
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-cream/30 group-hover:border-accent group-hover:bg-accent transition-all duration-300">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Indicator row beneath stage */}
          <div className="flex items-center justify-between gap-4 mt-3 px-1">
            <div className="flex items-center gap-2">
              {showcase.map((s, i) => (
                <button
                  key={s.src}
                  type="button"
                  aria-label={`Show ${s.project}`}
                  onClick={() => setActiveIdx(i)}
                  className="relative h-[3px] overflow-hidden rounded-full transition-all duration-500"
                  style={{
                    width: i === activeIdx ? 44 : 14,
                    background: "rgba(17,17,17,0.12)",
                  }}
                >
                  <span
                    className="absolute inset-y-0 left-0 bg-accent rounded-full"
                    style={{
                      width: i === activeIdx ? "100%" : 0,
                      transition:
                        i === activeIdx
                          ? `width ${ROTATION_MS}ms linear`
                          : "width 0.3s",
                    }}
                  />
                </button>
              ))}
            </div>
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group inline-flex items-center justify-center gap-3 font-sans text-[0.7rem] font-medium tracking-widest uppercase cursor-pointer rounded-[4px] border border-ink/30 text-ink px-7 py-3 hover:border-accent hover:text-accent hover:bg-accent/5 transition-all duration-300"
            >
              See My Work
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}
