import { useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface SectionHeaderProps {
  label: string;
  title: string;
  sub?: string;
  light?: boolean;
  center?: boolean;
}

export function SectionHeader({
  label,
  title,
  sub,
  light = false,
  center = false,
}: SectionHeaderProps) {
  const ref = useScrollReveal() as React.RefObject<HTMLDivElement>;
  return (
    <div ref={ref} className={`reveal mb-14 ${center ? "text-center" : ""}`}>
      <div
        className={`section-number mb-4 ${center ? "flex justify-center" : ""}`}
      >
        <span
          className={`inline-block text-xs font-bold uppercase tracking-[0.25em] ${light ? "text-gold-400" : "text-gold-500"}`}
        >
          {label}
        </span>
      </div>
      <h2
        className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${
          light ? "text-white" : "text-navy-800"
        } ${center ? "max-w-3xl mx-auto" : "max-w-2xl"}`}
      >
        {title}
      </h2>
      {sub && (
        <p
          className={`mt-4 text-base md:text-lg leading-relaxed ${
            light ? "text-steel-300" : "text-steel-500"
          } ${center ? "max-w-2xl mx-auto" : "max-w-xl"}`}
        >
          {sub}
        </p>
      )}
      <div
        className={`mt-6 h-0.5 w-12 bg-gold-500 ${center ? "mx-auto" : ""}`}
      />
    </div>
  );
}
