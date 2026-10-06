interface LogoProps {
  variant?: "compact" | "full" | "dark";
  className?: string;
}

/**
 * Madison Drennen., official v4 wordmark.
 * Instrument Sans bold with berry "Drennen." accent (per HomeScreen.jsx).
 */
export default function Logo({ variant = "compact", className = "" }: LogoProps) {
  if (variant === "full") {
    return (
      <div className={`relative select-none ${className}`}>
        <div className="relative text-center py-16 px-12">
          <p className="font-mono text-[0.55rem] font-medium tracking-[0.3em] uppercase text-berry mb-8">
            ✦ &nbsp; Primary Lockup
          </p>
          <h1
            className="font-display font-bold text-snow leading-[0.86] tracking-[-0.05em]"
            style={{ fontSize: "clamp(4rem, 12vw, 9rem)" }}
          >
            Madison <span className="text-berry">Drennen<span className="text-berry">.</span></span>
          </h1>
          <p className="font-mono text-[0.62rem] font-medium tracking-[0.3em] uppercase text-snow/55 mt-5">
            Creative · Marketing · AI
          </p>
        </div>
      </div>
    );
  }

  // Compact, tuned for the dark navbar
  const nameColor = variant === "dark" ? "text-snow" : "text-ink";

  return (
    <div className={`flex flex-col leading-none group ${className}`}>
      <span
        className={`font-display text-[1.15rem] font-bold ${nameColor} leading-none tracking-[-0.03em] transition-colors duration-300 group-hover:text-berry`}
      >
        Madison <span className="text-berry">Drennen<span className="text-berry">.</span></span>
      </span>
      <span
        className={`font-mono text-[0.52rem] font-medium tracking-[0.3em] uppercase ${
          variant === "dark" ? "text-snow/55" : "text-ink/55"
        } mt-[5px]`}
      >
        ✦ &nbsp; In Marketing
      </span>
    </div>
  );
}
