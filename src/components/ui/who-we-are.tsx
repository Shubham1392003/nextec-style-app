"use client";

import { motion, Variants, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const manifesto = [
  { text: "WE", type: "muted" },
  { text: "ARE", type: "muted" },
  { text: "A", type: "muted" },
  { text: "DIGITAL", type: "dark" },
  { text: "STUDIO", type: "dark" },
  { text: "PUSHING", type: "muted" },
  { text: "THE", type: "muted" },
  { text: "BOUNDARIES", type: "dark" },
  { text: "OF", type: "muted" },
  { text: "WEB", type: "dark" },
  { text: "DESIGN.", type: "dark" },
  { text: "WE", type: "muted" },
  { text: "REJECT", type: "dark" },
  { text: "THE", type: "muted" },
  { text: "ORDINARY", type: "pixel" },
  { text: "AND", type: "muted" },
  { text: "BUILD", type: "muted" },
  { text: "BRUTAL,", type: "teal" },
  { text: "IMMERSIVE,", type: "blue" },
  { text: "DIGITAL", type: "muted" },
  { text: "EXPERIENCES.", type: "coral" },
];

export function WhoWeAre() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yShape1 = useTransform(scrollYProgress, [0, 1], [100, -300]);
  const yShape2 = useTransform(scrollYProgress, [0, 1], [-200, 300]);
  const yShape3 = useTransform(scrollYProgress, [0, 1], [200, -200]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.015, delayChildren: 0.1 },
    },
  };

  const charVariants: Variants = {
    hidden: { opacity: 0, y: 50, filter: "blur(8px)", rotate: -10 },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      rotate: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    },
  };

  return (
    <section ref={containerRef} id="about" className="relative min-h-[120vh] py-32 md:py-48 px-6 md:px-12 bg-background border-b-2 border-foreground overflow-hidden flex flex-col items-center justify-center">
      
      {/* Floating geometric shapes */}
      <motion.div 
        style={{ y: yShape1 }} 
        className="absolute top-[20%] left-[-10%] md:left-[-5%] w-64 h-64 md:w-96 md:h-96 border-4 border-[var(--color-teal)] opacity-40 rotate-12 pointer-events-none"
      />
      <motion.div 
        style={{ y: yShape2 }} 
        className="absolute bottom-[20%] right-[-10%] md:right-[-5%] w-72 h-72 md:w-[500px] md:h-[500px] rounded-full border-4 border-[var(--color-coral)] opacity-30 pointer-events-none"
      />
      <motion.div 
        style={{ y: yShape3, rotate: yShape1 }} 
        className="absolute top-[60%] left-[20%] w-32 h-32 border-[12px] border-[var(--color-blue)] opacity-20 pointer-events-none"
      />

      <div className="max-w-[90rem] mx-auto relative z-10 w-full flex flex-col justify-center h-full">
        <div className="font-mono text-xs md:text-sm uppercase tracking-widest text-[var(--color-blue)] mb-12 md:mb-24 flex items-center gap-4">
          <span className="w-8 h-[2px] bg-[var(--color-blue)]" />
          [ Who We Are ]
        </div>

        <motion.h2 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-[10vw] md:text-[7vw] lg:text-[6vw] leading-[1.1] md:leading-[1.15] uppercase font-heading flex flex-wrap gap-x-[3vw] md:gap-x-[2vw] gap-y-4 md:gap-y-6 max-w-7xl"
        >
          {manifesto.map((wordObj, wordIdx) => {
            const chars = wordObj.text.split("");
            
            const colorClass = 
              wordObj.type === "muted" ? "text-foreground/30 font-light" :
              wordObj.type === "dark" ? "text-foreground font-bold" :
              wordObj.type === "pixel" ? "text-[var(--color-coral)] font-pixel text-[12vw] md:text-[8vw] lg:text-[7vw] tracking-widest mt-[-2vw] md:mt-[-1vw]" :
              wordObj.type === "teal" ? "text-[var(--color-teal)] font-bold" :
              wordObj.type === "blue" ? "text-[var(--color-blue)] font-bold" :
              wordObj.type === "coral" ? "text-[var(--color-coral)] font-bold" : "text-foreground";

            return (
              <span key={wordIdx} className={cn("inline-flex overflow-hidden py-2", colorClass)}>
                {chars.map((char, charIdx) => (
                  <motion.span key={charIdx} variants={charVariants} className="inline-block transform-gpu">
                    {char}
                  </motion.span>
                ))}
              </span>
            );
          })}
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-24 md:mt-40 grid grid-cols-1 md:grid-cols-12 gap-12 font-sans"
        >
          <div className="md:col-span-5 md:col-start-3 text-foreground/70 font-medium text-lg md:text-2xl max-w-lg leading-relaxed">
            We merge brutalist architecture with fluid motion, creating digital spaces that are unapologetic and memorable.
          </div>
          <div className="md:col-span-5 text-foreground/70 font-medium text-lg md:text-2xl max-w-lg leading-relaxed">
            No templates. No boring grids. Every project is an exploration into experimental typography and editorial layouts.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
