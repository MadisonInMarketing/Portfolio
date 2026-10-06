import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedStat from "@/components/ui/AnimatedStat";

const values = [
  {
    n: "01",
    title: "Systems, not one-offs",
    line: "I design pieces that belong together — websites, brand kits, content, and marketing assets that all speak the same language.",
  },
  {
    n: "02",
    title: "Built to actually use",
    line: "My work is made to be lived with, not just looked at. Every design has a purpose, a place, and a clear next step.",
  },
  {
    n: "03",
    title: "Designed for the AI era",
    line: "I build prompt libraries and brand guidelines into my systems so your voice stays consistent long after the project ends.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-28 bg-ivory text-ink px-6 overflow-hidden">
      {/* Chrome sculpture backdrop — full-bleed, clipped by section overflow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-80 md:opacity-85"
        style={{
          backgroundImage: "url('/brand/v4/bg-chrome-sculpture.png')",
          backgroundSize: "cover",
          backgroundPosition: "right center",
          backgroundRepeat: "no-repeat",
          /* fade left half → ivory so copy on the left reads cleanly */
          maskImage:
            "linear-gradient(to left, black 15%, rgba(0,0,0,0.6) 55%, transparent 85%)",
          WebkitMaskImage:
            "linear-gradient(to left, black 15%, rgba(0,0,0,0.6) 55%, transparent 85%)",
        }}
        aria-hidden="true"
      />
      {/* Soft petal + icy washes layered on top for brand tint */}
      <div className="chrome-aura chrome-aura--petal -top-24 -right-32 w-[32rem] h-[32rem] opacity-30" />
      <div className="chrome-aura chrome-aura--icy bottom-0 -left-32 w-[30rem] h-[30rem] opacity-50" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-16 md:gap-12 items-start">

          {/* Left — photo */}
          <div className="md:col-span-5">
            <RevealOnScroll>
              <SectionLabel label="About Me" />
            </RevealOnScroll>

            <RevealOnScroll delay={1} className="mt-8">
              <div className="relative glass-tile-light p-3">
                <div className="relative w-full aspect-[1545/1999] overflow-hidden rounded-[18px] bg-petal/20 group">
                  <img
                    src="/headshot.jpg"
                    alt="Madison Drennen"
                    className="absolute inset-0 w-full h-full object-contain"
                  />
                  <div className="absolute inset-0 bg-berry/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right — headline + stats + values */}
          <div className="md:col-span-7 md:pt-14">
            <RevealOnScroll variant="clip">
              <h2
                className="font-display font-bold text-ink leading-[1.02] tracking-[-0.04em] mb-10 pb-2"
                style={{ fontSize: "clamp(2rem, 5vw, 4.25rem)" }}
              >
                Somewhere between{" "}
                <span className="text-berry">strategy and design</span>
              </h2>
            </RevealOnScroll>

            <RevealOnScroll delay={1}>
              <p className="font-sans text-base md:text-lg font-normal text-ink/70 leading-relaxed mb-10 max-w-xl">
                I&apos;m Madison. I work in digital marketing — brand systems, websites, and campaign creative for businesses ready to show up better.
              </p>
            </RevealOnScroll>

            {/* Stats */}
            <RevealOnScroll delay={2} className="grid grid-cols-3 gap-4 border-t border-b border-ink/12 py-8 mb-12">
              {[
                { raw: "3+", label: "Years in Brand & Marketing" },
                { raw: "5+", label: "Businesses Worked With" },
                { raw: "50+", label: "Assets Delivered" },
              ].map((stat) => (
                <AnimatedStat key={stat.label} raw={stat.raw} label={stat.label} />
              ))}
            </RevealOnScroll>

            {/* Values — numbered editorial rows */}
            <div className="space-y-0">
              {values.map((v, i) => (
                <RevealOnScroll key={v.title} delay={(i + 1) as 1 | 2 | 3}>
                  <div className="grid grid-cols-[48px_1fr] gap-6 py-6 border-t border-ink/10 items-baseline">
                    <span className="font-mono text-xs font-medium tracking-[0.22em] text-berry">
                      {v.n}
                    </span>
                    <div>
                      <p className="font-display text-xl md:text-2xl font-bold text-ink mb-2 tracking-[-0.02em]">
                        {v.title}
                      </p>
                      <p className="font-sans text-sm md:text-base font-normal text-ink/65 leading-relaxed">
                        {v.line}
                      </p>
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
