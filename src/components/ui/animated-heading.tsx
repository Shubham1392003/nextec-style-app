"use client";

import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedHeadingProps {
  text: string;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export function AnimatedHeading({ text, className, tag = "h1" }: AnimatedHeadingProps) {
  const words = text.split(" ");
  const Tag = tag as any;

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 100,
      rotate: 5,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <Tag className={cn("overflow-hidden flex flex-wrap", className)}>
      <motion.span
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-wrap"
      >
        {words.map((word, index) => (
          <motion.span
            variants={child}
            key={index}
            className="mr-[0.25em] inline-block"
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
}
