import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SectionLabel from "@/components/ui/SectionLabel";

export default function Contact() {
  const socials = [
    { label: "Phone", value: "720.550.0655", href: "tel:+17205500655" },
    { label: "Instagram", value: "@drennenmadison", href: "https://www.instagram.com/drennenmadison/" },
    { label: "LinkedIn", value: "Madison Drennen", href: "https://www.linkedin.com/in/madison-drennen-465685162/" },
  ];

  return (
    <section id="contact" className="relative py-28 md:py-36 bg-ivory text-ink px-6 overflow-hidden">
      <div className="chrome-aura chrome-aura--petal top-20 -right-32 w-[36rem] h-[36rem] opacity-55" />
      <div className="chrome-aura chrome-aura--icy bottom-0 -left-32 w-[30rem] h-[30rem] opacity-45" />

      <div className="relative max-w-5xl mx-auto">
        <RevealOnScroll>
          <SectionLabel label="Get in Touch" />
        </RevealOnScroll>

        <RevealOnScroll variant="clip" className="mt-8">
          <h2
            className="font-display font-bold text-ink leading-[1.0] tracking-[-0.05em] mb-10 pb-2"
            style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
          >
            Let&apos;s make something{" "}
            <span className="text-berry">memorable<span className="text-berry">.</span></span>
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={1}>
          <p className="font-sans text-base md:text-lg font-normal text-ink/70 leading-relaxed mb-14 max-w-xl">
            Open to freelance work, brand collaborations, and design partnerships.
          </p>
        </RevealOnScroll>

        {/* Featured email */}
        <RevealOnScroll delay={2}>
          <a
            href="mailto:madison.drennen7@gmail.com"
            className="group inline-flex items-baseline gap-4 mb-14 pb-3 border-b-2 border-ink/15 hover:border-berry transition-colors duration-400 max-w-full"
          >
            <span
              className="font-display font-semibold text-ink group-hover:text-berry transition-colors duration-400 leading-none tracking-[-0.02em] break-all"
              style={{ fontSize: "clamp(1.3rem, 3vw, 2.75rem)" }}
            >
              madison.drennen7@gmail.com
            </span>
            <span className="inline-block text-berry text-2xl transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-1 flex-shrink-0">
              →
            </span>
          </a>
        </RevealOnScroll>

        {/* Contact rows */}
        <RevealOnScroll delay={3}>
          <div className="grid md:grid-cols-3 gap-6 md:gap-10 pt-6 border-t border-ink/10">
            {socials.map((c) => (
              <div key={c.label} className="flex flex-col gap-2">
                <span className="font-mono text-[0.6rem] font-medium tracking-[0.22em] uppercase text-ink/45">
                  {c.label}
                </span>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="font-display text-xl md:text-2xl font-semibold text-ink hover:text-berry transition-colors duration-300 tracking-[-0.02em]"
                >
                  {c.value}
                </a>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
