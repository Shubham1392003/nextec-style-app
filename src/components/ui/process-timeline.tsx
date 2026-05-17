"use client";

import { motion, useScroll, useSpring, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const processSteps = [
  {
    id: "01",
    title: "GETTING TO KNOW",
    description: "We dive deep into your brand, understanding your goals, audience, and market position to lay a brutal foundation.",
    keywords: ["Discovery", "Strategy", "Workshops"],
  },
  {
    id: "02",
    title: "DESIGN",
    description: "Our team crafts an experimental visual identity. We reject the ordinary and prioritize bold, oversized typography and unique motion.",
    keywords: ["Wireframes", "UI/UX", "Prototyping"],
  },
  {
    id: "03",
    title: "DEVELOPMENT",
    description: "Bringing the vision to life with bleeding-edge web technologies. Smooth scrolling, interactive shaders, and performant code.",
    keywords: ["React", "WebGL", "Framer Motion"],
  },
  {
    id: "04",
    title: "LAUNCH",
    description: "We rigorously test, optimize, and deploy the final product, ensuring it makes a massive impact upon release.",
    keywords: ["QA", "Deployment", "Maintenance"],
  },
];

export function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"],
  });

  const scaleY = useSpring(scrollYProgress, { 
    stiffness: 100, 
    damping: 30, 
    restDelta: 0.001 
  });

  return (
    <section ref={containerRef} className="relative w-full bg-[var(--color-background)] border-b-2 border-foreground text-foreground">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12 flex flex-col md:flex-row">
        
        {/* LEFT STICKY SECTION */}
        <div className="w-full md:w-1/3 relative">
          <div className="md:sticky top-0 h-auto md:h-screen flex flex-col justify-center py-16 md:py-24">
            <h2 className="font-pixel text-[var(--color-coral)] text-7xl md:text-[8vw] lg:text-[7rem] tracking-widest uppercase leading-none">
              PRO<br/>CESS
            </h2>
            
            {/* Progress Bar */}
            <div className="hidden md:block mt-16 w-1 h-64 bg-foreground/10 relative">
              <motion.div 
                className="absolute top-0 left-0 w-full bg-[var(--color-teal)] origin-top"
                style={{ scaleY, height: "100%" }}
              />
            </div>
          </div>
        </div>

        {/* RIGHT SCROLLING CONTENT */}
        <div className="w-full md:w-2/3 py-12 md:py-64 flex flex-col gap-32 md:gap-64">
          {processSteps.map((step, index) => (
            <ProcessStep key={step.id} step={step} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}

function ProcessStep({ step, index }: { step: any, index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-40% 0px -40% 0px" });

  return (
    <motion.div 
      ref={ref} 
      className="relative"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className={cn("transition-all duration-700 border-t-2 border-foreground pt-8", isInView ? "opacity-100 scale-100" : "opacity-30 md:opacity-30 md:scale-[0.98]")}>
        <div className="font-pixel text-xl md:text-3xl text-[var(--color-blue)] mb-6 md:mb-8">[{step.id}]</div>
        
        <h3 className="font-heading text-4xl md:text-7xl uppercase mb-8 tracking-tighter">
          {step.title}
        </h3>
        
        <p className="font-sans text-lg md:text-2xl text-foreground/80 max-w-2xl leading-relaxed mb-12">
          {step.description}
        </p>
        
        <div className="flex flex-wrap gap-4 font-mono text-xs md:text-sm uppercase tracking-widest">
          {step.keywords.map((kw: string) => (
            <span key={kw} className="brutal-border border-foreground/20 px-4 py-2 bg-background hover:bg-foreground hover:text-background transition-colors cursor-default">
              {kw}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
