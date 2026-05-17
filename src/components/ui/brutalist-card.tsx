"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface BrutalistCardProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: "default" | "teal" | "blue" | "coral";
}

export function BrutalistCard({
  children,
  className,
  color = "default",
  ...props
}: BrutalistCardProps) {
  const colors = {
    default: "bg-background",
    teal: "bg-[var(--color-teal)]",
    blue: "bg-[var(--color-blue)]",
    coral: "bg-[var(--color-coral)]",
  };

  return (
    <div
      className={cn(
        "brutal-border brutal-shadow p-6 md:p-8 transition-transform duration-300",
        colors[color],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
