"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const showcase = [
  {
    src: "/brand/gymrise-website.png",
    project: "GYMRISE",
    category: "Website · Brand · Growth",
    year: "2026",
  },
  {
    src: "/brand/social-mulli-website.png",
    project: "Social Mulli",
    category: "Website · Brand · Web Design",
    year: "2026",
  },
  {
    src: "/brand/social-mulli-brandkit.png",
    project: "Social Mulli",
    category: "Brand Kit · Print System",
    year: "2026",
  },
  {
    src: "/brand/gymrise-brandkit.png",
    project: "GYMRISE",
    category: "Brand Kit · Digital System",
    year: "2026",
  },
  {
    src: "/work/rekmed/01-product.jpg",
    project: "RekMed",
    category: "Product Photography · Brand",
    year: "2025",
  },
  {
    src: "/work/explorations/03-concept.png",
    project: "Peachy HVAC",
    category: "Website · Concept Design",
    year: "Ongoing",
  },
  {
    src: "/brand/email-signatures.png",
    project: "Signature Bundle",
    category: "Email Signature System",
    year: "2026",
  },
];

const ROTATION_MS = 3800;

export default function Hero() {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const elements = document.querySelectorAll("[data-hero-reveal]");
    elements.forEach((el, i) => {
      setTimeout(() => {
        (el as HTMLElement).style.opacity = "1";
        (el as HTMLElement).style.transform = "translate(0, 0)";
      }, 180 + i * 140);
    });
  }, []);

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
      data-nav-theme="light"
      className="relative overflow-hidden hero-chrome-bg corner-frame corner-frame-light flex flex-col justify-center h-[100svh] min-h-[660px] pt-24 pb-8 md:pt-28 md:pb-12"
    >
      <span className="corner-bl" />
      <span className="corner-br" />

      {/* Chrome ribbon layer */}
      <div className="hero-chrome-layer" aria-hidden="true" />

      {/* Very light veil — just enough to soften edges */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,243,242,0.15) 0%, transparent 40%, rgba(255,243,242,0.2) 100%)",
        }}
      />

      {/* ── TOP STRIP (on the frame) ── */}
      <div className="relative z-[3] max-w-[1500px] mx-auto w-full px-6 md:px-12 mb-6 md:mb-8">
        <div className="flex items-start justify-between gap-6">
          <div
            data-hero-reveal
            style={{ opacity: 0, transform: "translateY(14px)", transition: "all 0.9s cubic-bezier(0.16,1,0.3,1)" }}
            className="flex items-center gap-3 font-mono text-[0.65rem] md:text-[0.7rem] font-medium tracking-[0.22em] uppercase text-mahogany-deep/85"
          >
            <span className="text-berry text-base">✦</span>
            <span>Madison Drennen</span>
            <span className="hidden md:inline text-mahogany-deep/35">·</span>
            <span className="hidden md:inline">Portfolio 2026</span>
          </div>

          <div
            data-hero-reveal
            style={{ opacity: 0, transform: "translateY(14px)", transition: "all 0.9s cubic-bezier(0.16,1,0.3,1)" }}
            className="font-mono text-[0.6rem] md:text-[0.65rem] font-medium tracking-[0.22em] uppercase text-mahogany-deep/65 tabular-nums"
          >
            Issue 04
          </div>
        </div>
      </div>

      {/* ── CENTERED SLIDESHOW RECTANGLE ── */}
      <div className="relative z-[3] max-w-[1500px] mx-auto w-full px-6 md:px-12">
        <div
          data-hero-reveal
          className="relative w-full overflow-hidden rounded-[20px] md:rounded-[28px] ring-1 ring-mahogany-deep/15 bg-mahogany-deep/40 shadow-[0_40px_100px_-30px_rgba(37,2,9,0.35),0_20px_50px_-20px_rgba(186,0,109,0.25)]"
          style={{
            opacity: 0,
            transform: "translateY(32px)",
            transition: "all 1s cubic-bezier(0.16,1,0.3,1)",
            aspectRatio: "16 / 9",
          }}
        >
          {showcase.map((s, i) => (
            <div
              key={s.src}
              className="absolute inset-0 transition-all ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                opacity: i === activeIdx ? 1 : 0,
                transform: i === activeIdx ? "scale(1.025)" : "scale(1)",
                transitionDuration:
                  i === activeIdx
                    ? `${ROTATION_MS + 600}ms, 1300ms`
                    : "1300ms, 1300ms",
                transitionProperty: "transform, opacity",
                pointerEvents: i === activeIdx ? "auto" : "none",
              }}
              aria-hidden={i !== activeIdx}
            >
              <Image
                src={s.src}
                alt={`${s.project}, ${s.category}`}
                fill
                priority={i === 0}
                className="object-cover"
                sizes="(min-width: 1500px) 1440px, 100vw"
              />
            </div>
          ))}

          {/* Caption overlay inside the slideshow */}
          <div className="absolute bottom-0 left-0 right-0 z-[5] px-6 md:px-10 py-6 md:py-8 bg-gradient-to-t from-mahogany-deep/95 via-mahogany-deep/55 to-transparent">
            <div className="flex items-end justify-between gap-6">
              <div className="min-w-0">
                <p
                  className="font-mono text-[0.55rem] md:text-[0.6rem] font-medium tracking-[0.22em] uppercase text-berry mb-2 flex items-center gap-2.5 flex-wrap"
                  key={`cat-${activeIdx}`}
                  style={{ animation: "fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) both" }}
                >
                  <span className="w-5 h-px bg-berry hidden sm:inline-block" />
                  <span>{active.category}</span>
                  <span className="text-snow/30 hidden sm:inline">·</span>
                  <span className="text-snow/50 hidden sm:inline">{active.year}</span>
                </p>
                <h2
                  key={`proj-${activeIdx}`}
                  className="font-display font-bold text-snow leading-none tracking-[-0.04em]"
                  style={{
                    fontSize: "clamp(1.75rem, 4vw, 3.5rem)",
                    animation: "fadeUp 0.85s cubic-bezier(0.16,1,0.3,1) 0.08s both",
                  }}
                >
                  {active.project}
                </h2>
              </div>

              <span className="font-mono text-[0.55rem] md:text-[0.6rem] font-medium tracking-[0.22em] uppercase text-snow/60 tabular-nums flex-shrink-0 pb-1">
                <span className="text-snow font-semibold">{String(activeIdx + 1).padStart(2, "0")}</span>
                <span className="mx-1.5 text-snow/30">/</span>
                <span>{String(showcase.length).padStart(2, "0")}</span>
              </span>
            </div>
          </div>
        </div>

        {/* ── BOTTOM: INDICATOR + CTA (on the frame, below slideshow) ── */}
        <div
          data-hero-reveal
          style={{ opacity: 0, transform: "translateY(14px)", transition: "all 0.9s cubic-bezier(0.16,1,0.3,1)" }}
          className="flex items-center justify-between gap-4 pt-5 md:pt-6 px-1"
        >
          <div className="flex items-center gap-2">
            {showcase.map((s, i) => (
              <button
                key={s.src}
                type="button"
                aria-label={`Show ${s.project}`}
                onClick={() => setActiveIdx(i)}
                className="relative h-[3px] overflow-hidden rounded-full transition-all duration-500 cursor-pointer"
                style={{
                  width: i === activeIdx ? 44 : 14,
                  background: "rgba(37,2,9,0.18)",
                }}
              >
                <span
                  className="absolute inset-y-0 left-0 bg-berry rounded-full"
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
            className="group inline-flex items-center gap-3 font-mono text-[0.6rem] md:text-[0.65rem] font-medium tracking-[0.22em] uppercase text-mahogany-deep/75 hover:text-berry transition-colors duration-300"
          >
            <span>View All Work</span>
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-mahogany-deep/25 group-hover:border-berry group-hover:bg-berry text-mahogany-deep group-hover:text-snow transition-all duration-300">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
