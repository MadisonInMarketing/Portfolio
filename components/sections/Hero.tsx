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

const ROTATION_MS = 5200;

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
      data-nav-theme="dark"
      className="relative overflow-hidden h-[100svh] min-h-[640px] bg-mahogany-deep corner-frame"
    >
      <span className="corner-bl" />
      <span className="corner-br" />

      {/* ── FULL-BLEED SLIDESHOW ── */}
      {showcase.map((s, i) => (
        <div
          key={s.src}
          className="absolute inset-0 transition-all ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            opacity: i === activeIdx ? 1 : 0,
            transform: i === activeIdx ? "scale(1.03)" : "scale(1.0)",
            transitionDuration:
              i === activeIdx
                ? `${ROTATION_MS + 800}ms, 1600ms`
                : "1600ms, 1600ms",
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
            sizes="100vw"
          />
        </div>
      ))}

      {/* ── Dark veil for text contrast ── */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background:
            "linear-gradient(180deg, rgba(26,7,20,0.75) 0%, rgba(26,7,20,0.3) 25%, rgba(26,7,20,0.35) 55%, rgba(26,7,20,0.9) 100%)",
        }}
      />
      {/* Side vignette */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background:
            "radial-gradient(ellipse 110% 90% at 50% 55%, transparent 55%, rgba(26,7,20,0.5) 100%)",
        }}
      />

      {/* ── TOP STRIP ── */}
      <div className="absolute top-0 left-0 right-0 z-[3] px-10 md:px-16 pt-32 md:pt-36">
        <div className="max-w-[1500px] mx-auto flex items-start justify-between gap-6">
          <div
            data-hero-reveal
            style={{ opacity: 0, transform: "translateY(14px)", transition: "all 0.9s cubic-bezier(0.16,1,0.3,1)" }}
            className="flex items-center gap-3 font-mono text-[0.65rem] md:text-[0.7rem] font-medium tracking-[0.22em] uppercase text-snow/75"
          >
            <span className="text-berry text-base">✦</span>
            <span>Madison Drennen</span>
            <span className="hidden md:inline text-snow/30">·</span>
            <span className="hidden md:inline">Portfolio 2026</span>
          </div>

          <div
            data-hero-reveal
            style={{ opacity: 0, transform: "translateY(14px)", transition: "all 0.9s cubic-bezier(0.16,1,0.3,1)" }}
            className="font-mono text-[0.6rem] md:text-[0.65rem] font-medium tracking-[0.22em] uppercase text-snow/55 tabular-nums"
          >
            Issue 04
          </div>
        </div>
      </div>

      {/* ── BOTTOM: ROTATING PROJECT CAPTION + NAV ── */}
      <div className="absolute bottom-0 left-0 right-0 z-[3] px-10 md:px-16 pb-12 md:pb-16">
        <div className="max-w-[1500px] mx-auto">
          {/* Caption */}
          <div className="flex items-end justify-between gap-6 mb-6 md:mb-8">
            <div className="min-w-0 flex-1">
              <p
                data-hero-reveal
                style={{ opacity: 0, transform: "translateY(14px)", transition: "all 0.9s cubic-bezier(0.16,1,0.3,1)" }}
                className="font-mono text-[0.6rem] md:text-[0.65rem] font-medium tracking-[0.22em] uppercase text-berry mb-3 flex items-center gap-3"
                key={`cat-${activeIdx}`}
              >
                <span className="w-6 h-px bg-berry" />
                <span>{active.category}</span>
                <span className="text-snow/30">·</span>
                <span className="text-snow/50">{active.year}</span>
              </p>
              <h1
                data-hero-reveal
                style={{ opacity: 0, transform: "translateY(28px)", transition: "all 1s cubic-bezier(0.16,1,0.3,1)" }}
                key={`proj-${activeIdx}`}
                className="font-display font-bold text-snow leading-[0.9] tracking-[-0.045em] break-words"
              >
                <span
                  className="block"
                  style={{
                    fontSize: "clamp(2.5rem, 8vw, 7.5rem)",
                    animation: "fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) both",
                  }}
                >
                  {active.project}
                </span>
              </h1>
            </div>

            <a
              href="#work"
              data-hero-reveal
              style={{ opacity: 0, transform: "translateY(14px)", transition: "all 0.9s cubic-bezier(0.16,1,0.3,1)" }}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group hidden md:inline-flex items-center gap-3 font-mono text-[0.6rem] md:text-[0.65rem] font-medium tracking-[0.22em] uppercase text-snow/70 hover:text-snow transition-colors duration-300 flex-shrink-0 pb-2"
            >
              <span>View All Work</span>
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-snow/25 group-hover:border-berry group-hover:bg-berry transition-all duration-300">
                →
              </span>
            </a>
          </div>

          {/* Slide indicator rail */}
          <div
            data-hero-reveal
            style={{ opacity: 0, transform: "translateY(14px)", transition: "all 0.9s cubic-bezier(0.16,1,0.3,1)" }}
            className="flex items-center justify-between gap-4 pt-5 border-t border-snow/15"
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
                    width: i === activeIdx ? 48 : 16,
                    background: "rgba(255,243,242,0.2)",
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

            <span className="font-mono text-[0.55rem] md:text-[0.6rem] font-medium tracking-[0.22em] uppercase text-snow/50 tabular-nums">
              <span className="text-snow font-semibold">{String(activeIdx + 1).padStart(2, "0")}</span>
              <span className="mx-1.5 text-snow/30">/</span>
              <span>{String(showcase.length).padStart(2, "0")}</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
