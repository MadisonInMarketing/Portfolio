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
    <section id="contact" className="relative py-28 md:py-36 bg-ivory text-ink px-6 overflow-hidden">
      <div className="chrome-aura chrome-aura--petal top-20 -right-32 w-[36rem] h-[36rem] opacity-55" />
      <div className="chrome-aura chrome-aura--icy bottom-0 -left-32 w-[30rem] h-[30rem] opacity-45" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">
          {/* ── LEFT: photo in glass frame ── */}
          <div className="md:col-span-5">
            <RevealOnScroll>
              <SectionLabel label="Get in Touch" />
            </RevealOnScroll>
            <RevealOnScroll delay={1} className="mt-8">
              <div className="relative glass-tile-light p-3">
                <div className="relative w-full aspect-square overflow-hidden rounded-[18px] bg-petal/20 group">
                  <Image
                    src="/lets-connect.png"
                    alt="Let's connect — Madison Drennen workspace"
                    fill
                    className="object-cover object-center transition-transform duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                    sizes="(min-width: 768px) 460px, 100vw"
                  />
                  <div className="absolute inset-0 bg-berry/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <span className="absolute top-5 right-5 text-berry text-lg spark z-10" aria-hidden="true">
                  ✦
                </span>
              </div>
            </RevealOnScroll>
          </div>

          {/* ── RIGHT: Closing statement + contact ── */}
          <div className="md:col-span-7 md:pt-6">
            <RevealOnScroll variant="clip">
              <h2
                className="font-display font-bold text-ink leading-[0.9] tracking-[-0.05em] mb-8"
                style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
              >
                Let&apos;s make something{" "}
                <span className="text-berry">memorable<span className="text-berry">.</span></span>
              </h2>
            </RevealOnScroll>

            <RevealOnScroll delay={1}>
              <p className="font-sans text-base md:text-lg font-normal text-ink/70 leading-relaxed mb-12 max-w-md">
                Open to freelance work, brand collaborations, and design partnerships.
              </p>
            </RevealOnScroll>

            {/* Featured email */}
            <RevealOnScroll delay={2}>
              <a
                href="mailto:madison.drennen7@gmail.com"
                className="group inline-flex items-baseline gap-4 mb-12 pb-3 border-b-2 border-ink/15 hover:border-berry transition-colors duration-400"
              >
                <span
                  className="font-display font-semibold text-ink group-hover:text-berry transition-colors duration-400 leading-none tracking-[-0.02em]"
                  style={{ fontSize: "clamp(1.3rem, 2.4vw, 2.2rem)" }}
                >
                  madison.drennen7@gmail.com
                </span>
                <span className="inline-block text-berry text-2xl transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-1">
                  →
                </span>
              </a>
            </RevealOnScroll>

            {/* Contact rows */}
            <RevealOnScroll delay={3}>
              <div className="space-y-5 pt-2">
                {socials.map((c) => (
                  <div key={c.label} className="grid grid-cols-[88px_1fr] items-baseline gap-6 pb-3 border-b border-ink/10">
                    <span className="font-mono text-[0.6rem] font-medium tracking-[0.22em] uppercase text-ink/45">
                      {c.label}
                    </span>
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="font-sans text-base font-normal text-ink/75 hover:text-berry transition-colors duration-300 link-underline self-baseline"
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
