"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

const SECTIONS = [
  { id: "intro", label: "Intro" },
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "gallery", label: "Gallery" },
  { id: "socials", label: "Socials" },
  { id: "contact", label: "Contact" },
];

function useActiveSection() {
  const [active, setActive] = useState("intro");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-35% 0px -60% 0px", threshold: 0 }
    );
    for (const s of SECTIONS) {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return active;
}

export function Nav() {
  const active = useActiveSection();

  return (
    <nav
      aria-label="Section navigation"
      className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-0.5"
    >
      {SECTIONS.map((s) => {
        const isActive = active === s.id;
        return (
          <motion.a
            key={s.id}
            href={`#${s.id}`}
            aria-current={isActive ? "true" : undefined}
            className="group flex items-center gap-2.5 py-1.5"
            whileHover={{ backgroundColor: "primary/10", borderColor: "primary" }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
          >
            <span
              className={cn(
                "block h-px transition-all duration-300",
                isActive
                  ? "w-8 bg-primary"
                  : "w-4 bg-border group-hover:w-6 group-hover:bg-muted"
              )}
            />
            <span
              className={cn(
                "text-[11px] tracking-wide whitespace-nowrap transition-all duration-300",
                isActive
                  ? "text-primary font-semibold opacity-100"
                  : "text-muted-foreground opacity-60 group-hover:opacity-100"
              )}
            >
              {s.label}
            </span>
          </motion.a>
        );
      })}
    </nav>
  );
}

export function MobileNav() {
  const active = useActiveSection();

  return (
    <nav
      aria-label="Section navigation"
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden border-t border-border bg-card/90 backdrop-blur"
    >
      <div className="no-scrollbar flex overflow-x-auto">
        {SECTIONS.map((s) => {
          const isActive = active === s.id;
          return (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={cn(
                "flex-1 min-w-[76px] px-2 py-2.5 text-center text-[10px] tracking-wide transition-colors",
                isActive
                  ? "text-primary font-semibold"
                  : "text-muted-foreground opacity-60 hover:opacity-100"
              )}
            >
              {s.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
