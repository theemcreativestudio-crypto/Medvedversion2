import type { ReactNode } from "react";
import Reveal from "@/components/base/Reveal";

interface SectionHeadingProps {
  /** Editorial folio number, e.g. "02". */
  index?: string;
  /** Small uppercase kicker displayed on the rule. */
  label: string;
  title: ReactNode;
  description?: ReactNode;
  /** "dark" = dark ink text on a light canvas; "light" = light text on an ink canvas. */
  tone?: "dark" | "light";
  /** Optional element pinned to the end of the kicker rule (e.g. a "View all" link). */
  actions?: ReactNode;
  className?: string;
}

export default function SectionHeading({
  index,
  label,
  title,
  description,
  tone = "dark",
  actions,
  className = "",
}: SectionHeadingProps) {
  const isLight = tone === "light";
  const kickerColor = isLight ? "text-background-50/65" : "text-foreground-600";
  const indexColor = isLight ? "text-primary-300" : "text-accent-600";

  return (
    <div className={className}>
      <Reveal y={18}>
        <div className="flex items-center gap-4">
          {index && (
            <span className={`font-label text-[11px] tracking-[0.2em] ${indexColor}`}>{index}</span>
          )}
          <span className={`font-label text-[10px] ${kickerColor}`}>{label}</span>
          <span className={isLight ? "rule-light flex-1" : "rule flex-1"} aria-hidden="true" />
          {actions}
        </div>
      </Reveal>

      <Reveal y={26} delay={80}>
        <h2
          className={`mt-6 font-heading text-[2.6rem] font-medium leading-[1.02] tracking-[-0.02em] md:text-[4rem] ${
            isLight ? "text-background-50" : "text-foreground-950"
          }`}
        >
          {title}
        </h2>
      </Reveal>

      {description && (
        <Reveal y={22} delay={140}>
          <p
            className={`mt-6 max-w-xl font-body text-base leading-relaxed ${
              isLight ? "text-background-50/75" : "text-foreground-700"
            }`}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}