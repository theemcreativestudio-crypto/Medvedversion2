import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

interface StickyPanelProps {
  children: ReactNode;
  /** Paint order within the stack; higher sits on top of earlier panels. */
  index?: number;
  /** Background class for the panel, so it fully covers the one behind it. */
  bgClass?: string;
  /** Extra classes for the inner panel. */
  className?: string;
  /** How much the panel recedes as the next section slides over it. */
  scaleAmount?: number;
  /** How dark the panel becomes as it is covered (0–1). */
  dimAmount?: number;
}

/**
 * A single pinned panel for a selective scroll-overlap moment. On desktop the
 * panel pins to the top of the viewport (min-h-screen) while the following
 * sibling section slides up and over it; the panel subtly shrinks and dims as
 * it gets covered for a premium, layered feel. The outer wrapper must sit in a
 * shared container together with the section that covers it.
 *
 * On small screens the panel degrades to normal flow, and the recede effect is
 * skipped entirely for reduced-motion users.
 */
export default function StickyPanel({
  children,
  index = 0,
  bgClass = "bg-background-50",
  className = "",
  scaleAmount = 0.04,
  dimAmount = 0.5,
}: StickyPanelProps) {
  const outerRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const shadeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outer = outerRef.current;
    const panel = panelRef.current;
    if (!outer || !panel) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) return;

    let rafId = 0;

    const reset = () => {
      panel.style.transform = "";
      if (shadeRef.current) shadeRef.current.style.opacity = "0";
    };

    const update = () => {
      // The overlap is a desktop-only enhancement; small screens scroll naturally.
      const isDesktop =
        typeof window !== "undefined" &&
        typeof window.matchMedia === "function" &&
        window.matchMedia("(min-width: 768px)").matches;

      if (!isDesktop) {
        reset();
        return;
      }

      const next = outer.nextElementSibling as HTMLElement | null;
      const viewport = window.innerHeight || 1;

      let progress = 0;
      if (next) {
        const rect = next.getBoundingClientRect();
        progress = Math.min(Math.max((viewport - rect.top) / viewport, 0), 1);
      }

      const scale = 1 - progress * scaleAmount;
      panel.style.transform = `scale(${scale.toFixed(4)})`;

      if (shadeRef.current) {
        shadeRef.current.style.opacity = (progress * dimAmount).toFixed(3);
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, [scaleAmount, dimAmount]);

  return (
    <div ref={outerRef} className="relative md:sticky md:top-0" style={{ zIndex: 10 + index }}>
      <div
        ref={panelRef}
        className={`relative flex items-center overflow-hidden will-change-transform md:min-h-screen ${bgClass} ${className}`}
        style={{ transformOrigin: "top center" }}
      >
        <div className="w-full">{children}</div>
        <div
          ref={shadeRef}
          className="pointer-events-none absolute inset-0 bg-foreground-950 opacity-0"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}