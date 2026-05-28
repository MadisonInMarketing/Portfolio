"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedStatProps {
  raw: string;        // e.g. "3+", "150K+", "5 Days/Week"
  label: string;
}

/** Pull the leading integer out of a stat string */
function parseStatValue(value: string): { num: number; suffix: string } | null {
  const match = value.match(/^(\d+)(.*)/);
  if (match) return { num: parseInt(match[1], 10), suffix: match[2] };
  return null;
}

export default function AnimatedStat({ raw, label }: AnimatedStatProps) {
  const parsed = parseStatValue(raw);
  const [display, setDisplay] = useState(parsed ? `0${parsed.suffix}` : raw);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!parsed) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          observer.unobserve(el);

          let start: number | null = null;
          const duration = 1600;
          const { num, suffix } = parsed;

          const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            // Ease-out quart
            const eased = 1 - Math.pow(1 - progress, 4);
            setDisplay(`${Math.floor(eased * num)}${suffix}`);
            if (progress < 1) requestAnimationFrame(step);
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [parsed]);

  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-3xl font-light text-ink tabular-nums">
        {display}
      </p>
      <p className="font-accent text-[0.55rem] font-500 tracking-[0.2em] uppercase text-ink-light mt-1.5 leading-snug">
        {label}
      </p>
    </div>
  );
}
