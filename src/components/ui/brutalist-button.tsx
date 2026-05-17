"use client";

import { cn } from "@/lib/utils";
import React, { forwardRef } from "react";

interface BrutalistButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent";
  size?: "sm" | "md" | "lg";
}

const BrutalistButton = forwardRef<HTMLButtonElement, BrutalistButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const variants = {
      primary: "bg-foreground text-background hover:bg-[#333]",
      secondary: "bg-background text-foreground hover:bg-[#e0d9d4]",
      accent: "bg-[var(--color-coral)] text-foreground hover:bg-[#c96d6d]",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg font-bold",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "brutal-border brutal-shadow font-sans font-medium uppercase tracking-wider transition-all",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

BrutalistButton.displayName = "BrutalistButton";

export { BrutalistButton };
