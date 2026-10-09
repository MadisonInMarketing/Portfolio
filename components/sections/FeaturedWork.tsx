"use client";

import Link from "next/link";
import { projects } from "@/lib/projects";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SectionLabel from "@/components/ui/SectionLabel";
import { SITE_GRID } from "@/components/ui/grid";

export default function FeaturedWork() {
  return (
    <section id="work" data-nav-theme="dark" className="relative pt-20 md:pt-24 lg:pt-28 pb-20 md:pb-24 plum-bloom overflow-hidden">
      {/* Chrome auras */}
      <div className="chrome-aura chrome-aura--berry top-10 -right-32 w-[36rem] h-[36rem]" />
      <div className="chrome-aura chrome-aura--petal bottom-20 -left-32 w-[32rem] h-[32rem] opacity-30" />

      <div className={`relative ${SITE_GRID}`}>
        {/* Header */}
        <div className="mb-14 md:mb-16 lg:mb-20 flex items-end justify-between flex-wrap gap-6">
          <div className="max-w-[22ch]">
            <RevealOnScroll>
              <SectionLabel label="Recent Work" variant="dark" />
            </RevealOnScroll>
            <RevealOnScroll delay={1} variant="clip">
              <h2
                className="font-display font-bold text-snow leading-[1.0] tracking-[-0.045em] mt-4 pb-1"
                style={{ fontSize: "clamp(2.5rem, 5.4vw, 4.5rem)" }}
              >
                A little look at what I&apos;ve been{" "}
                <span className="text-berry">making lately</span>
              </h2>
            </RevealOnScroll>
          </div>
        </div>

        {/* Project rows */}
        <div className="space-y-16 md:space-y-20 lg:space-y-24">
          {projects.map((project, index) => (
            <ProjectRow key={project.slug} project={project} index={index} />
          ))}
        </div>

        {/* CTA */}
        <RevealOnScroll className="mt-16 md:mt-20 text-center">
          <p className="font-sans text-sm font-normal text-snow/55 mb-5">
            More work, process notes, and explorations, happy to share.
          </p>
          <a
            href="mailto:madison.drennen7@gmail.com"
            className="btn-primary px-8 py-4"
          >
            Say Hi
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </RevealOnScroll>
      </div>
    </section>
  );
}

function ProjectRow({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const reverse = index % 2 === 1;
  const previewImage = project.heroImage;

  return (
    <RevealOnScroll delay={(index % 3) as 0 | 1 | 2}>
      <Link href={`/work/${project.slug}`} className="block group">
        <div
          className={`grid md:grid-cols-12 gap-8 md:gap-12 items-center ${
            reverse ? "md:[&>*:first-child]:order-2" : ""
          }`}
        >
          {/* ── Image preview inside glass tile ── */}
          <div className="md:col-span-7 relative">
            <div className="relative glass-tile p-3 transition-all duration-500 group-hover:scale-[1.01]">
              <div
                className="relative w-full overflow-hidden rounded-[18px]"
                style={{
                  aspectRatio: "4/3",
                  background: `${project.accentColor}22`,
                }}
              >
                {previewImage ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={previewImage}
                    alt={`${project.title}, preview`}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                  />
                ) : (
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ background: `${project.accentColor}18` }}
                  >
                    <span className="font-display text-[12rem] font-bold opacity-20 text-snow leading-none">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                )}

                {/* Top-left index badge */}
                <span className="absolute top-4 left-4 z-10 font-mono text-[0.55rem] font-medium tracking-[0.22em] uppercase px-2.5 py-1.5 rounded-full bg-mahogany-deep/85 backdrop-blur-sm text-snow border border-snow/15">
                  Project · 0{index + 1}
                </span>

                {/* View project pill */}
                <span
                  className="absolute top-4 right-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full text-[0.55rem] font-mono font-medium tracking-[0.22em] uppercase opacity-0 group-hover:opacity-100 transition-all duration-400"
                  style={{
                    background: project.accentColor,
                    color: "#FFF3F2",
                    boxShadow: `0 8px 24px ${project.accentColor}55`,
                  }}
                >
                  View Project
                  <span>→</span>
                </span>
              </div>
            </div>
          </div>

          {/* ── Content ── */}
          <div className="md:col-span-5">
            {/* Category */}
            <div className="flex items-center gap-3 mb-5">
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{
                  background: project.accentColor,
                  boxShadow: `0 0 12px ${project.accentColor}95`,
                }}
              />
              <span
                className="font-mono text-[0.6rem] font-medium tracking-[0.22em] uppercase"
                style={{ color: project.accentColor }}
              >
                {project.category}
              </span>
            </div>

            {/* Title */}
            <h3
              className="font-display font-bold text-snow leading-[0.9] tracking-[-0.045em] mb-5 transition-colors duration-400 group-hover:text-petal"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              {project.title}
            </h3>

            {/* Description */}
            <p className="font-sans text-base font-normal text-snow/65 leading-relaxed mb-7 max-w-lg group-hover:text-snow/85 transition-colors duration-400">
              {project.shortDescription}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <span key={tag} className="tag-dark">
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA link */}
            <div className="flex items-center gap-3 pt-6 border-t border-snow/12">
              <span className="font-mono text-[0.62rem] font-medium tracking-[0.22em] uppercase text-snow group-hover:text-berry transition-colors duration-300">
                View Case Study
              </span>
              <span
                className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-snow/22 group-hover:border-berry group-hover:bg-berry text-snow/70 group-hover:text-snow transition-all duration-300"
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 28px rgba(186,0,109,0.6)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                →
              </span>
            </div>
          </div>
        </div>
      </Link>
    </RevealOnScroll>
  );
}
