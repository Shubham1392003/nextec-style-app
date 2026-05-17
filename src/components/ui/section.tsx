import { cn } from "@/lib/utils";
import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  containerClass?: string;
  grid?: boolean;
}

export function Section({
  children,
  className,
  containerClass,
  grid = false,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "relative w-full border-b-2 border-foreground py-16 md:py-24 lg:py-32",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "mx-auto w-full max-w-7xl px-4 md:px-8",
          grid && "grid grid-cols-1 md:grid-cols-12 gap-8",
          containerClass
        )}
      >
        {children}
      </div>
    </section>
  );
}
