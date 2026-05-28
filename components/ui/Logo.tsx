interface LogoProps {
  variant?: "compact" | "full";
  className?: string;
}

/**
 * Madison Drennen wordmark — recreated from brand identity.
 *
 * compact  → stacked two-line mark for the Navbar
 * full     → large editorial lockup with ghost MD watermark (hero / brand kit use)
 */
export default function Logo({ variant = "compact", className = "" }: LogoProps) {
  if (variant === "full") {
    return (
      <div className={`relative select-none ${className}`}>
        {/* Ghost MD watermark */}
        <div
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <span
            className="font-display font-bold text-ink leading-none tracking-tighter"
            style={{ fontSize: "clamp(8rem, 30vw, 18rem)", opacity: 0.05 }}
          >
            MD
          </span>
        </div>

        {/* Wordmark */}
        <div className="relative text-center py-16 px-12">
          <p className="font-accent text-[0.52rem] font-600 tracking-[0.32em] uppercase text-accent mb-8">
            Primary Logo
          </p>
          <h1
            className="font-display font-semibold text-ink leading-[0.88] tracking-tight"
            style={{ fontSize: "clamp(4rem, 12vw, 8rem)" }}
          >
            Madison
            <br />
            Drennen
          </h1>
          <p className="font-accent text-[0.62rem] font-500 tracking-[0.42em] uppercase text-ink/55 mt-5">
            Brand &amp; Web Design
          </p>
        </div>
      </div>
    );
  }

  /* ── Compact / Navbar ── */
  return (
    <div className={`flex flex-col leading-none group ${className}`}>
      <span className="font-display text-[1.15rem] font-semibold text-ink leading-none tracking-tight group-hover:text-accent transition-colors duration-300">
        Madison Drennen
      </span>
      <span className="font-accent text-[0.44rem] font-500 tracking-[0.3em] uppercase text-ink/40 mt-[3px]">
        Brand &amp; Web Design
      </span>
    </div>
  );
}
