"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type SkeletonProps = {
  className?: string;
  width?: string | number;
  height?: string | number;
};

export function Skeleton({ className, width, height, ...props }: SkeletonProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-md bg-[#182318] animate-shimmer",
        className
      )}
      style={{ width, height }}
      {...props}
    >
      <div
        className="absolute inset-0 w-full h-full [background-image:linear-gradient(90deg,transparent,rgba(76,175,80,0.08),transparent)] animate-[shimmer_1.6s_ease-in-out_infinite]"
      />
    </div>
  );
}

export function SkeletonCircle({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-full bg-[#182318] animate-shimmer",
        className
      )}
      style={{ width: "48px", height: "48px" }}
    >
      <div
        className="absolute inset-0 w-full h-full [background-image:linear-gradient(90deg,transparent,rgba(76,175,80,0.08),transparent)] animate-[shimmer_1.6s_ease-in-out_infinite]"
      />
    </div>
  );
}

export function SkeletonText({ count = 3, lastWidth = "60%" }: { count?: number; lastWidth?: string }) {
  return (
    <div className="space-y-2">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "h-4 rounded bg-[#182318] animate-shimmer",
            i === count - 1 ? `w-[${lastWidth}]` : "w-full"
          )}
        >
          <div
            className="absolute inset-0 w-full h-full [background-image:linear-gradient(90deg,transparent,rgba(76,175,80,0.08),transparent)] animate-[shimmer_1.6s_ease-in-out_infinite]"
          />
        </div>
      ))}
    </div>
  );
}
