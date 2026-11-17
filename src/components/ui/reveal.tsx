import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

/* eslint-disable @typescript-eslint/no-unused-vars */
type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

// Scroll-driven reveal via CSS `animation-timeline: view()`.
// Works in current Chromium browsers; where unsupported the content is simply visible.
export function Reveal({ children, className, delay: _delay, y: _y }: RevealProps) {
  return <div className={cn("reveal", className)}>{children}</div>;
}
