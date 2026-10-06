"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const showcase = [
  { src: "/brand/gymrise-website.png", project: "GYMRISE", category: "Website · Brand & Growth" },
  { src: "/brand/social-mulli-website.png", project: "Social Mulli", category: "Website · Brand & Web Design" },
  { src: "/work/explorations/03-concept.png", project: "Peachy HVAC", category: "Website · Concept Design" },
  { src: "/brand/social-mulli-brandkit.png", project: "Social Mulli", category: "Brand Kit · Print System" },
  { src: "/work/rekmed/01-product.jpg", project: "RekMed", category: "Product Photography · Brand System" },
  { src: "/brand/gymrise-brandkit.png", project: "GYMRISE", category: "Brand Kit · Digital System" },
  { src: "/brand/email-signatures.png", project: "Signature Bundle", category: "Email Signature System" },
];

const ROTATION_MS = 4800;

export default function Hero() {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const elements = document.querySelectorAll("[data-hero-reveal]");
    elements.forEach((el, i) => {
      setTimeout(() => {
        (el as HTMLElement).style.opacity = "1";
        (el as HTMLElement).style.transform = "translate(0, 0)";
      }, 200 + i * 140);
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
      className="relative hero-chrome-bg overflow-hidden flex flex-col pt-32 pb-20 corner-frame"
    >
      <span className="corner-bl" />
      <span className="corner-br" />

      {/* Chrome ribbon image layer */}
      <div className="hero-chrome-layer" aria-hidden="true" />

      {/* Dark veil for text contrast over chrome ribbon */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background:
            "linear-gradient(180deg, rgba(26,7,20,0.4) 0%, rgba(37,2,9,0.2) 35%, rgba(37,2,9,0.45) 100%)",
        }}
      />

      {/* ── Top editorial strip ── */}
      <div className="relative z-[2] max-w-[1500px] mx-auto w-full px-10 md:px-16 mb-10 md:mb-14">
        <div className="flex items-center justify-between gap-6">
          <div
            data-hero-reveal
            style={{ opacity: 0, transform: "translateY(14px)", transition: "all 0.9s cubic-bezier(0.16,1,0.3,1)" }}
            className="flex items-center gap-3 font-mono text-[0.65rem] md:text-[0.7rem] font-medium tracking-[0.22em] uppercase text-snow/60"
          >
            <span className="text-berry text-base">✦</span>
            <span>Brand · Web · Marketing</span>
          </div>

          <div
            data-hero-reveal
            style={{ opacity: 0, transform: "translateY(14px)", transition: "all 0.9s cubic-bezier(0.16,1,0.3,1)" }}
            className="font-mono text-[0.65rem] md:text-[0.7rem] font-medium tracking-[0.22em] uppercase text-snow/55"
          >
            Portfolio · 2026
          </div>
        </div>

        {/* Hairline rule */}
        <div
          data-hero-reveal
          style={{ opacity: 0, transform: "translateY(14px)", transition: "all 0.9s cubic-bezier(0.16,1,0.3,1)" }}
          className="mt-6 h-px w-full"
          aria-hidden="true"

        >
          <div className="h-full w-full bg-gradient-to-r from-transparent via-snow/18 to-transparent" />
        </div>
      </div>

      {/* ── MAIN LOCKUP ── */}
      <div className="relative z-[2] max-w-[1500px] mx-auto w-full px-10 md:px-16 mb-10 md:mb-16">
        <h1
          data-hero-reveal
          style={{ opacity: 0, transform: "translateY(28px)", transition: "all 1s cubic-bezier(0.16,1,0.3,1)" }}
          className="font-display font-bold text-snow leading-[0.9] tracking-[-0.05em]"

        >
          <span style={{ fontSize: "clamp(3.5rem, 11vw, 10.5rem)", display: "block" }}>
            Madison{" "}
            <span className="text-berry">Drennen<span className="text-berry">.</span></span>
          </span>
        </h1>

        <div
          data-hero-reveal
          style={{ opacity: 0, transform: "translateY(28px)", transition: "all 1s cubic-bezier(0.16,1,0.3,1)" }}
          className="mt-8 md:mt-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-6 md:gap-16"
        >
          <p className="font-sans text-base md:text-lg font-normal text-snow/75 leading-relaxed max-w-[42ch]">
            Digital marketer and designer. I make brand systems, websites, campaign creative, and the content that carries them. This is where I keep it all.
          </p>

          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-primary px-6 py-3.5 text-[0.65rem]"
            >
              Recent Work
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-outline px-6 py-3.5 text-[0.65rem]"
            >
              About Me
            </a>
          </div>
        </div>

        {/* Hairline + tag rail */}
        <div
          data-hero-reveal
          style={{ opacity: 0, transform: "translateY(14px)", transition: "all 0.9s cubic-bezier(0.16,1,0.3,1)" }}
          className="mt-10 pt-8 border-t border-snow/12"
        >
          <div className="flex flex-wrap gap-2">
            {[
              "Brand identity",
              "Web design",
              "Paid social",
              "Content design",
              "Creative direction",
              "Packaging",
            ].map((t) => (
              <span key={t} className="tag-dark">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── GLASS-TILE GALLERY ── */}
      <div className="relative z-[2] max-w-[1500px] mx-auto w-full px-10 md:px-16 mt-10">
        <div
          data-hero-reveal
          style={{ opacity: 0, transform: "translateY(40px)", transition: "all 1s cubic-bezier(0.16,1,0.3,1)" }}
          className="relative glass-tile p-3 md:p-4"
        >
          <div
            className="relative w-full overflow-hidden rounded-[18px] bg-mahogany-deep/60"
            style={{ aspectRatio: "16/9" }}
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
                  alt={`${s.project}, ${s.category}`}
                  fill
                  priority={i === 0}
                  className="object-cover"
                  sizes="(min-width: 1500px) 1440px, 100vw"
                />
              </div>
            ))}

            {/* Minimal top-right counter */}
            <div className="absolute top-5 right-5 md:top-6 md:right-7 z-[5]">
              <span className="font-mono text-[0.55rem] md:text-[0.6rem] font-medium tracking-[0.22em] uppercase text-snow/60 tabular-nums bg-mahogany-deep/60 backdrop-blur-sm px-2.5 py-1 rounded-full">
                <span className="text-snow font-semibold">{String(activeIdx + 1).padStart(2, "0")}</span>
                <span className="mx-1.5 text-snow/30">/</span>
                <span>{String(showcase.length).padStart(2, "0")}</span>
              </span>
            </div>

            {/* Bottom caption overlay */}
            <div className="absolute bottom-0 left-0 right-0 z-[5] px-6 md:px-10 py-6 md:py-7 bg-gradient-to-t from-mahogany-deep/95 via-mahogany-deep/55 to-transparent">
              <div className="flex items-end justify-between gap-6">
                <div>
                  <p
                    className="font-mono text-[0.55rem] md:text-[0.6rem] font-medium tracking-[0.22em] uppercase text-berry mb-2"
                    style={{ animation: "fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) both" }}
                    key={`cat-${activeIdx}`}
                  >
                    {active.category}
                  </p>
                  <h3
                    key={`proj-${activeIdx}`}
                    className="font-display font-bold text-snow leading-none tracking-[-0.04em]"
                    style={{
                      fontSize: "clamp(1.75rem, 4vw, 3.5rem)",
                      animation: "fadeUp 0.85s cubic-bezier(0.16,1,0.3,1) 0.08s both",
                    }}
                  >
                    {active.project}
                  </h3>
                </div>
                <a
                  href="#work"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="group hidden md:inline-flex items-center gap-3 font-mono text-[0.6rem] font-medium tracking-[0.22em] uppercase text-snow/85 hover:text-petal transition-colors duration-300 flex-shrink-0 pb-1"
                >
                  View
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-snow/30 group-hover:border-berry group-hover:bg-berry transition-all duration-300">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Indicator row */}
          <div className="flex items-center justify-center gap-2 px-2 mt-4">
            {showcase.map((s, i) => (
              <button
                key={s.src}
                type="button"
                aria-label={`Show ${s.project}`}
                onClick={() => setActiveIdx(i)}
                className="relative h-[3px] overflow-hidden rounded-full transition-all duration-500"
                style={{
                  width: i === activeIdx ? 44 : 14,
                  background: "rgba(255,243,242,0.15)",
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
        </div>
      </div>

    </section>
  );
}
