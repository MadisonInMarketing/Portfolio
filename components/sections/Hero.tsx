"use client";

import { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-hero-reveal]");
    elements.forEach((el, i) => {
      setTimeout(() => {
        (el as HTMLElement).style.opacity = "1";
        (el as HTMLElement).style.transform = "translate(0, 0)";
      }, 200 + i * 160);
    });
  }, []);

  return (
    <section
      id="hero"
      data-nav-theme="dark"
      className="relative hero-chrome-bg overflow-hidden flex flex-col min-h-[100svh] corner-frame"
    >
      <span className="corner-bl" />
      <span className="corner-br" />

      {/* Chrome ribbon layer */}
      <div className="hero-chrome-layer" aria-hidden="true" />

      {/* Dark veil */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background:
            "linear-gradient(180deg, rgba(26,7,20,0.5) 0%, rgba(37,2,9,0.25) 45%, rgba(26,7,20,0.65) 100%)",
        }}
      />

      {/* ── Editorial top strip ── */}
      <div className="relative z-[3] max-w-[1500px] mx-auto w-full px-10 md:px-16 pt-32 md:pt-36">
        <div className="flex items-start justify-between gap-6">
          <div
            data-hero-reveal
            style={{ opacity: 0, transform: "translateY(14px)", transition: "all 0.9s cubic-bezier(0.16,1,0.3,1)" }}
            className="flex items-center gap-3 font-mono text-[0.65rem] md:text-[0.7rem] font-medium tracking-[0.22em] uppercase text-snow/55"
          >
            <span className="text-berry text-base">✦</span>
            <span>Madison in Marketing</span>
          </div>

          <div
            data-hero-reveal
            style={{ opacity: 0, transform: "translateY(14px)", transition: "all 0.9s cubic-bezier(0.16,1,0.3,1)" }}
            className="font-mono text-[0.6rem] md:text-[0.65rem] font-medium tracking-[0.22em] uppercase text-snow/45 tabular-nums"
          >
            Issue 04 · 2026
          </div>
        </div>
      </div>

      {/* ── CENTERED LOCKUP ── */}
      <div className="relative z-[3] flex-1 flex items-center justify-center px-10 md:px-16 py-16">
        <div className="max-w-[1500px] w-full">
          <h1
            data-hero-reveal
            style={{ opacity: 0, transform: "translateY(32px)", transition: "all 1.1s cubic-bezier(0.16,1,0.3,1)" }}
            className="font-display font-bold text-snow leading-[0.86] tracking-[-0.05em]"
          >
            <span
              className="block"
              style={{ fontSize: "clamp(3.75rem, 13vw, 13rem)" }}
            >
              Madison
            </span>
            <span
              className="block text-berry"
              style={{ fontSize: "clamp(3.75rem, 13vw, 13rem)" }}
            >
              Drennen<span className="text-berry">.</span>
            </span>
          </h1>

          <p
            data-hero-reveal
            style={{ opacity: 0, transform: "translateY(20px)", transition: "all 1.1s cubic-bezier(0.16,1,0.3,1)" }}
            className="mt-10 md:mt-12 font-sans text-base md:text-lg font-normal text-snow/75 leading-relaxed max-w-xl"
          >
            Digital marketer and designer. Brand systems, websites, and the campaigns that carry them.
          </p>
        </div>
      </div>

      {/* ── Bottom row — scroll cue + role tag ── */}
      <div className="relative z-[3] max-w-[1500px] mx-auto w-full px-10 md:px-16 pb-10 md:pb-14">
        <div className="flex items-end justify-between gap-6">
          <div
            data-hero-reveal
            style={{ opacity: 0, transform: "translateY(14px)", transition: "all 0.9s cubic-bezier(0.16,1,0.3,1)" }}
            className="font-mono text-[0.6rem] md:text-[0.65rem] font-medium tracking-[0.22em] uppercase text-snow/50"
          >
            Creative · Marketing · AI
          </div>

          <a
            href="#work"
            data-hero-reveal
            style={{ opacity: 0, transform: "translateY(14px)", transition: "all 0.9s cubic-bezier(0.16,1,0.3,1)" }}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group inline-flex items-center gap-3 font-mono text-[0.6rem] md:text-[0.65rem] font-medium tracking-[0.22em] uppercase text-snow/70 hover:text-berry transition-colors duration-300"
          >
            <span>View the Work</span>
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-snow/25 group-hover:border-berry group-hover:bg-berry group-hover:text-snow transition-all duration-300">
              ↓
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
