"use client";

import { useEffect, useRef, ReactNode } from "react";

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: 0 | 1 | 2 | 3 | 4 | 5;
  variant?: "fade" | "clip";
}

const delayClass: Record<number, string> = {
  0: "",
  1: "reveal-delay-1",
  2: "reveal-delay-2",
  3: "reveal-delay-3",
  4: "reveal-delay-4",
  5: "reveal-delay-5",
};

export default function RevealOnScroll({
  children,
  className = "",
  delay = 0,
  variant = "fade",
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const baseClass = variant === "clip" ? "reveal-clip" : "reveal";

  return (
    <div
      ref={ref}
      className={`${baseClass} ${delayClass[delay]} ${className}`}
    >
      {children}
    </div>
  );
}
