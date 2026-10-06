interface SectionLabelProps {
  label: string;
  className?: string;
  variant?: "light" | "dark";
}

export default function SectionLabel({ label, className = "", variant = "light" }: SectionLabelProps) {
  const color = variant === "dark" ? "text-berry" : "text-berry";
  const barBg = variant === "dark" ? "bg-berry" : "bg-berry";
  return (
    <span
      className={`inline-flex items-center gap-3 text-[0.65rem] font-mono font-medium tracking-[0.22em] uppercase ${color} ${className}`}
    >
      <span className="text-berry">✦</span>
      <span className={`w-7 h-px ${barBg} inline-block`} />
      {label}
    </span>
  );
}
