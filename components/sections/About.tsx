import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedStat from "@/components/ui/AnimatedStat";

const values = [
  {
    title: "Systems, not one-offs",
    line: "I design pieces that belong together — websites, brand kits, content, and marketing assets that all speak the same language.",
  },
  {
    title: "Built to actually use",
    line: "My work is made to be lived with, not just looked at. Every design has a purpose, a place, and a clear next step.",
  },
  {
    title: "Designed for the AI era",
    line: "I build prompt libraries and brand guidelines into my systems so your voice stays consistent long after the project ends.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-14 md:py-20 bg-cream px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-16 md:gap-10 items-start">

          {/* Left — photo */}
          <div className="md:col-span-5">
            <RevealOnScroll>
              <SectionLabel label="About Me" />
            </RevealOnScroll>

            <RevealOnScroll delay={1} className="mt-8">
              <div className="relative w-full aspect-[1545/1999] bg-cream-dark overflow-hidden group">
                <img
                  src="/headshot.jpg"
                  alt="Madison Drennen"
                  className="absolute inset-0 w-full h-full object-contain"
                />
                <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-accent opacity-40" />
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-accent opacity-40" />
              </div>
            </RevealOnScroll>
          </div>

          {/* Right — headline + stats + values */}
          <div className="md:col-span-7 md:pt-14">
            <RevealOnScroll variant="clip">
              <h2 className="font-display text-display-lg font-light text-ink leading-tight tracking-tight mb-12">
                Hi, I&apos;m Madison.{" "}
                <em className="italic text-ink/45">
                  I build polished brand systems, websites, and marketing assets for businesses ready to show up better.
                </em>
              </h2>
            </RevealOnScroll>

            {/* Stats */}
            <RevealOnScroll delay={1} className="grid grid-cols-3 gap-4 border-t border-b border-ink/8 py-8 mb-12">
              {[
                { raw: "3+", label: "Years in Brand & Marketing" },
                { raw: "5+", label: "Businesses Worked With" },
                { raw: "50+", label: "Assets Delivered" },
              ].map((stat) => (
                <AnimatedStat key={stat.label} raw={stat.raw} label={stat.label} />
              ))}
            </RevealOnScroll>

            {/* Values — tight, no cards */}
            <div className="space-y-7">
              {values.map((v, i) => (
                <RevealOnScroll key={v.title} delay={(i + 1) as 1 | 2 | 3}>
                  <div className="flex gap-4 items-start">
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2"
                      style={{ boxShadow: "0 0 6px rgba(255,79,216,0.5)" }}
                    />
                    <div>
                      <p className="font-sans text-sm font-medium text-ink mb-1">{v.title}</p>
                      <p className="font-sans text-sm font-light text-ink-muted leading-relaxed">{v.line}</p>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
