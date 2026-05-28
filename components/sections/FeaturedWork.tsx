"use client";

import Link from "next/link";
import { projects } from "@/lib/projects";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SectionLabel from "@/components/ui/SectionLabel";

export default function FeaturedWork() {
  return (
    <section id="work" className="pt-16 md:pt-20 pb-28 md:pb-32 bg-ink px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <RevealOnScroll>
            <SectionLabel label="Featured Work" className="text-accent" />
          </RevealOnScroll>
          <RevealOnScroll delay={1} variant="clip">
            <h2 className="font-display text-display-xl font-light text-cream leading-tight tracking-tight mt-4">
              Work that{" "}
              <em className="italic text-cream/40">speaks for itself.</em>
            </h2>
          </RevealOnScroll>
        </div>

        {/* Editorial project rows */}
        <div className="space-y-20 md:space-y-28">
          {projects.map((project, index) => (
            <ProjectRow key={project.slug} project={project} index={index} />
          ))}
        </div>

        {/* CTA */}
        <RevealOnScroll className="mt-24 text-center">
          <p className="font-sans text-sm font-light text-cream/40 mb-5">
            More work, process notes, and explorations — happy to share.
          </p>
          <a
            href="mailto:madison.drennen7@gmail.com"
            className="group btn-outline px-8 py-4"
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
          {/* ── Image preview ── */}
          <div className="md:col-span-7 relative">
            <div
              className="relative w-full overflow-hidden rounded-[4px] ring-1 ring-cream/8 transition-all duration-500 group-hover:ring-accent/40"
              style={{
                aspectRatio: "4/3",
                background: `${project.accentColor}10`,
                boxShadow: "0 30px 80px -20px rgba(0,0,0,0.5)",
              }}
            >
              {previewImage ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={previewImage}
                  alt={`${project.title} — preview`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                />
              ) : (
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ background: `${project.accentColor}10` }}
                >
                  <span
                    className="font-display text-[12rem] font-light italic opacity-15 text-cream leading-none"
                  >
                    {project.title.charAt(0)}
                  </span>
                </div>
              )}

              {/* Top-left index badge */}
              <span className="absolute top-4 left-4 z-10 font-accent text-[0.55rem] font-700 tracking-[0.32em] uppercase px-2.5 py-1.5 rounded-[2px] bg-ink/85 backdrop-blur-sm text-cream">
                Project · 0{index + 1}
              </span>

              {/* Top-right "view project" pill (hover) */}
              <span
                className="absolute top-4 right-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full text-[0.55rem] font-accent font-700 tracking-[0.22em] uppercase opacity-0 group-hover:opacity-100 transition-all duration-400"
                style={{
                  background: project.accentColor,
                  color: "#fff",
                  boxShadow: `0 8px 24px ${project.accentColor}55`,
                }}
              >
                View Project
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
              </span>

              {/* Corner ticks */}
              <span className="absolute top-3 left-3 w-3 h-3 border-t border-l border-cream/30 z-[1]" />
              <span className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-cream/30 z-[1]" />

              {/* Subtle gradient veil */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent pointer-events-none" />
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
                  boxShadow: `0 0 10px ${project.accentColor}90`,
                }}
              />
              <span
                className="font-accent text-[0.6rem] font-700 tracking-[0.32em] uppercase"
                style={{ color: project.accentColor }}
              >
                {project.category}
              </span>
            </div>

            {/* Title */}
            <h3
              className="font-display font-light text-cream leading-[0.95] tracking-tight mb-5 transition-colors duration-400 group-hover:text-cream"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              {project.title}
            </h3>

            {/* Description */}
            <p className="font-sans text-base font-light text-cream/60 leading-relaxed mb-7 max-w-lg group-hover:text-cream/80 transition-colors duration-400">
              {project.shortDescription}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-accent text-[0.6rem] font-700 tracking-[0.22em] uppercase px-3 py-1.5 rounded-[3px] border transition-all duration-300"
                  style={{
                    borderColor: `${project.accentColor}50`,
                    color: project.accentColor,
                    background: `${project.accentColor}10`,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA link */}
            <div className="flex items-center gap-3 pt-6 border-t border-cream/10">
              <span className="font-accent text-[0.65rem] font-700 tracking-[0.28em] uppercase text-cream group-hover:text-accent transition-colors duration-300">
                View Case Study
              </span>
              <span
                className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-cream/20 group-hover:border-accent group-hover:bg-accent text-cream/60 group-hover:text-cream transition-all duration-300"
                style={{
                  transition: "all 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 24px rgba(255,79,216,0.45)";
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
