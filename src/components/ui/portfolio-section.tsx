"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: "brand",
    title: "AURA BRANDING",
    category: "Branding",
    year: "2026",
    image: "/portfolio_branding.png",
  },
  {
    id: "web",
    title: "LUMINA WEB",
    category: "Web Design",
    year: "2025",
    image: "/portfolio_web.png",
  },
  {
    id: "mobile",
    title: "NEXUS APP",
    category: "Mobile Apps",
    year: "2026",
    image: "/portfolio_mobile.png",
  },
  {
    id: "saas",
    title: "METRIC DASHBOARD",
    category: "SaaS Platforms",
    year: "2025",
    image: "/portfolio_saas.png",
  },
];

export function PortfolioSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  // Slide left by up to -75% based on scroll
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  // Custom cursor logic
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <>
      <section ref={containerRef} id="work" className="relative h-[300vh] bg-foreground text-background">
        <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
          
          <div className="absolute top-12 md:top-24 left-6 md:left-12 font-mono text-xs uppercase tracking-widest text-background/50 flex items-center gap-4">
            <span className="w-8 h-[2px] bg-background/50" />
            Selected Work
          </div>

          <motion.div style={{ x }} className="flex gap-8 md:gap-16 px-6 md:px-24 items-center h-[65vh] mt-8">
            {projects.map((project) => (
              <motion.div
                layoutId={`project-container-${project.id}`}
                key={project.id}
                onClick={() => setSelectedProject(project)}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className="relative flex-shrink-0 w-[85vw] md:w-[60vw] lg:w-[45vw] h-full flex flex-col cursor-none group"
              >
                {/* Image Container */}
                <div className="relative flex-1 overflow-hidden brutal-border border-background group-hover:border-[var(--color-teal)] transition-colors duration-500 bg-background/5">
                  <motion.div layoutId={`project-image-${project.id}`} className="absolute inset-0">
                    <Image 
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </motion.div>
                </div>
                
                {/* Meta */}
                <motion.div layoutId={`project-meta-${project.id}`} className="mt-6 flex justify-between items-start border-b-2 border-background/20 pb-4">
                  <div>
                    <h3 className="font-heading text-3xl md:text-5xl uppercase tracking-tighter group-hover:text-[var(--color-teal)] transition-colors">
                      {project.title}
                    </h3>
                    <div className="font-mono text-xs md:text-sm uppercase tracking-widest mt-2 opacity-60">
                      {project.category}
                    </div>
                  </div>
                  <div className="font-pixel text-xl opacity-60">
                    [{project.year}]
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

        </div>

        {/* Custom Follow Cursor */}
        <motion.div 
          className="fixed top-0 left-0 w-24 h-24 rounded-full bg-[var(--color-coral)] text-foreground hidden md:flex items-center justify-center font-mono text-xs uppercase tracking-widest pointer-events-none z-50 mix-blend-exclusion"
          animate={{
            x: mousePosition.x - 48,
            y: mousePosition.y - 48,
            scale: isHovering && !selectedProject ? 1 : 0,
            opacity: isHovering && !selectedProject ? 1 : 0,
          }}
          transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.5 }}
        >
          VIEW
        </motion.div>
      </section>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background text-foreground flex items-center justify-center overflow-hidden"
          >
            <motion.div 
              layoutId={`project-container-${selectedProject.id}`}
              className="absolute inset-4 md:inset-12 flex flex-col"
            >
              <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-center mb-6 gap-6">
                <motion.div layoutId={`project-meta-${selectedProject.id}`} className="flex-1">
                  <h3 className="font-heading text-4xl md:text-7xl uppercase tracking-tighter text-[var(--color-teal)]">
                    {selectedProject.title}
                  </h3>
                  <div className="font-mono text-sm uppercase tracking-widest mt-2 md:mt-4 opacity-60 flex gap-4">
                    <span>{selectedProject.category}</span>
                    <span className="font-pixel">[{selectedProject.year}]</span>
                  </div>
                </motion.div>
                
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-colors self-end md:self-auto"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="relative flex-1 overflow-hidden brutal-border border-2">
                <motion.div layoutId={`project-image-${selectedProject.id}`} className="absolute inset-0">
                  <Image 
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
