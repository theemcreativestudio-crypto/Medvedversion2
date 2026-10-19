import type { ReactNode } from "react";

interface EyebrowProps {
  children: ReactNode;
  className?: string;
  tone?: "primary" | "secondary" | "light";
}

const toneMap: Record<NonNullable<EyebrowProps["tone"]>, string> = {
  primary: "text-primary-600",
  secondary: "text-secondary-600",
  light: "text-primary-300",
};

export default function Eyebrow({ children, className = "", tone = "primary" }: EyebrowProps) {
  return (
    <span className={`inline-flex items-center gap-3 font-label text-[10px] font-medium ${toneMap[tone]} ${className}`}>
      <span className="h-1.5 w-1.5 bg-current" aria-hidden="true" />
      {children}
    </span>
  );
}