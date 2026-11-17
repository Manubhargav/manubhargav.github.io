"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { SOCIALS } from "@/lib/data";
import { Skeleton } from "@/components/ui/skeleton";
import {
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
  XIcon,
  MediumIcon,
} from "@/components/ui/icons";
import { Mail } from "lucide-react";

const ICONS: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement> & { size?: number }>> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  instagram: InstagramIcon,
  x: XIcon,
  "book-open": MediumIcon,
  mail: Mail,
};

export function Socials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="socials" className="px-6 py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-foreground">Socials</h2>
          <p className="text-muted-foreground mt-2">
            Follow along, callout style.
          </p>
        </motion.div>

        {!isInView ? (
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <SocialCardSkeleton key={i} />
            ))}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SOCIALS.map((social, i) => (
              <motion.div
                key={social.label}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ delay: i * 0.08, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <SocialCard social={social} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function SocialCard({ social }: { social: (typeof SOCIALS)[number] }) {
  const Icon = ICONS[social.icon] || Mail;
  return (
    <a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 hover:bg-card-hover hover:border-primary transition-colors"
    >
      <div className="shrink-0 text-primary">
        <Icon size={22} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-medium text-foreground">{social.label}</div>
        <div className="text-xs text-muted-foreground truncate">
          {social.handle}
        </div>
      </div>
      <div className="text-muted-foreground">→</div>
    </a>
  );
}

function SocialCardSkeleton() {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-5">
      <Skeleton className="w-10 h-10 rounded-full" />
      <div className="flex-1">
        <Skeleton className="h-4 w-24 mb-2" />
        <Skeleton className="h-3 w-full" />
      </div>
    </div>
  );
}
