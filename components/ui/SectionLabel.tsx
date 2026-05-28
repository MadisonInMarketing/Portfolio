interface SectionLabelProps {
  label: string;
  className?: string;
}

export default function SectionLabel({ label, className = "" }: SectionLabelProps) {
  return (
    <span
      className={`inline-flex items-center gap-3 text-[0.6rem] font-accent font-600 tracking-[0.3em] uppercase text-accent ${className}`}
    >
      <span className="w-7 h-px bg-accent inline-block" />
      {label}
    </span>
  );
}
