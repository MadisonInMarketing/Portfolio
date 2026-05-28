import Image from "next/image";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SectionLabel from "@/components/ui/SectionLabel";

export default function Contact() {
  const socials = [
    { label: "Phone", value: "720.550.0655", href: "tel:+17205500655" },
    { label: "Instagram", value: "@drennenmadison", href: "https://www.instagram.com/drennenmadison/" },
    { label: "LinkedIn", value: "Madison Drennen", href: "https://www.linkedin.com/in/madison-drennen-465685162/" },
  ];

  return (
    <section id="contact" className="relative py-32 md:py-40 bg-cream px-6 overflow-hidden">
      {/* Soft accent wash */}
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-accent/[0.05] blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">
          {/* ── LEFT: Editorial photo ── */}
          <div className="md:col-span-5">
            <RevealOnScroll>
              <SectionLabel label="Get in Touch" />
            </RevealOnScroll>
            <RevealOnScroll delay={1} className="mt-8">
              <div className="relative w-full aspect-square bg-cream-dark overflow-hidden group">
                <Image
                  src="/lets-connect.png"
                  alt="Let's connect — Madison Drennen workspace"
                  fill
                  className="object-cover object-center transition-transform duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                  sizes="(min-width: 768px) 460px, 100vw"
                />
                {/* Editorial corner brackets */}
                <span className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-accent opacity-40" />
                <span className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-accent opacity-40" />
                {/* Soft accent wash on hover */}
                <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </RevealOnScroll>
          </div>

          {/* ── RIGHT: Closing statement + contact ── */}
          <div className="md:col-span-7 md:pt-6">
            <RevealOnScroll variant="clip">
              <h2
                className="font-display font-light text-ink leading-[0.95] tracking-tight mb-8"
                style={{ fontSize: "clamp(2.5rem, 5.5vw, 5rem)" }}
              >
                Let&apos;s create something{" "}
                <em className="italic text-ink/40">memorable.</em>
              </h2>
            </RevealOnScroll>

            <RevealOnScroll delay={1}>
              <p className="font-sans text-base md:text-lg font-light text-ink-muted leading-relaxed mb-12 max-w-md">
                Open to freelance work, brand collaborations, and design partnerships.
              </p>
            </RevealOnScroll>

            {/* Featured email — the hero CTA */}
            <RevealOnScroll delay={2}>
              <a
                href="mailto:madison.drennen7@gmail.com"
                className="group inline-flex items-baseline gap-4 mb-12 pb-3 border-b-2 border-ink/10 hover:border-accent transition-colors duration-400"
              >
                <span
                  className="font-display font-light italic text-ink group-hover:text-accent transition-colors duration-400 leading-none"
                  style={{ fontSize: "clamp(1.5rem, 2.6vw, 2.5rem)" }}
                >
                  madison.drennen7@gmail.com
                </span>
                <span className="inline-block text-accent text-2xl transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-1">
                  →
                </span>
              </a>
            </RevealOnScroll>

            {/* Contact rows */}
            <RevealOnScroll delay={3}>
              <div className="space-y-5 pt-2">
                {socials.map((c) => (
                  <div key={c.label} className="grid grid-cols-[88px_1fr] items-baseline gap-6 pb-3 border-b border-ink/8">
                    <span className="font-accent text-[0.6rem] font-700 tracking-[0.3em] uppercase text-ink/35">
                      {c.label}
                    </span>
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="font-sans text-base font-light text-ink-muted hover:text-accent transition-colors duration-300 link-underline self-baseline"
                    >
                      {c.value}
                    </a>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
