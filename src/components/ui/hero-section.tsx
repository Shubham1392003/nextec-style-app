"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { AnimatedHeading } from "./animated-heading";
import { BrutalistCard } from "./brutalist-card";

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const y4 = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const cards = [
    { title: "Branding", y: y1, color: "teal", delay: 0.1 },
    { title: "Website", y: y2, color: "default", delay: 0.2 },
    { title: "Desktop App", y: y3, color: "blue", delay: 0.3 },
    { title: "Mobile App", y: y4, color: "coral", delay: 0.4 },
  ];

  return (
    <section ref={ref} className="relative min-h-screen pt-32 pb-24 overflow-hidden border-b-2 border-foreground bg-[var(--color-background)] flex flex-col justify-center">
      {/* Decorative grids */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#111 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.05 }} />

      <div className="max-w-[90rem] mx-auto px-6 md:px-12 w-full relative z-10 flex flex-col items-center">
        
        {/* Typographic Hero */}
        <motion.div style={{ opacity }} className="flex flex-col items-center text-center max-w-5xl mb-24 relative">
          <div className="font-mono text-sm uppercase tracking-[0.3em] text-[var(--color-teal)] mb-8 flex items-center gap-4">
            <span className="w-8 h-[2px] bg-[var(--color-teal)]" />
            Redefining Digital Limits
            <span className="w-8 h-[2px] bg-[var(--color-teal)]" />
          </div>
          
          <h1 className="text-[12vw] md:text-[8vw] font-heading leading-[0.8] uppercase flex flex-col items-center">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-4"
            >
              <span>BRUTAL</span>
              <span className="text-pixel text-[var(--color-coral)] lowercase text-[10vw] md:text-[6vw] tracking-tighter mt-4">&</span>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-4 ml-8 md:ml-24"
            >
              <span className="italic font-sans font-light tracking-tight text-foreground/80">BEAUTIFUL</span>
            </motion.div>

            <AnimatedHeading 
              text="EXPERIENCES" 
              className="mt-2 text-[14vw] md:text-[10vw] text-[var(--color-blue)]"
            />
          </h1>
        </motion.div>

        {/* Floating Cards Array */}
        <div className="w-full relative h-[50vh] md:h-[30vh] mt-8 md:mt-0">
          <div className="absolute inset-0 flex md:justify-between items-start md:items-center gap-4 md:gap-8 px-4 overflow-x-auto md:overflow-visible pb-12 md:pb-0 snap-x snap-mandatory hide-scrollbar">
            {cards.map((card, idx) => (
              <motion.div 
                key={idx}
                style={{ y: card.y }}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 + card.delay, type: "spring", bounce: 0.4 }}
                className="flex-none w-[70vw] md:w-auto md:flex-1 max-w-[250px] snap-center shrink-0"
              >
                <BrutalistCard 
                  color={card.color as any} 
                  className="h-32 md:h-48 flex items-end p-4 md:p-6 group cursor-crosshair hover:bg-foreground hover:text-background"
                >
                  <div className="font-mono text-sm md:text-base uppercase font-bold tracking-widest">
                    <span className="block mb-2 font-pixel text-xs opacity-50">[{idx + 1}]</span>
                    {card.title}
                  </div>
                </BrutalistCard>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
