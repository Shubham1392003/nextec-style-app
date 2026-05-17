"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setHasScrolled(latest > 50);
  });

  return (
    <>
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-colors duration-300",
        hasScrolled ? "bg-background/80 backdrop-blur-md border-b-2 border-foreground" : "bg-transparent"
      )}
    >
      {/* Logo */}
      <div className="flex-1">
        <a href="/" className="font-heading font-bold text-2xl uppercase tracking-tighter hover:opacity-80 transition-opacity">
          NEXTEC<span className="text-[var(--color-coral)]">.</span>
        </a>
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex items-center gap-8 font-mono text-sm uppercase tracking-widest flex-1 justify-center">
        {["Work", "About", "Studio"].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="relative group overflow-hidden">
            <span className="block transition-transform duration-300 group-hover:-translate-y-full">
              {item}
            </span>
            <span className="absolute inset-0 block transition-transform duration-300 translate-y-full group-hover:translate-y-0 text-[var(--color-teal)]">
              {item}
            </span>
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-foreground origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
          </a>
        ))}
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex items-center justify-end flex-1">
        <button 
          onClick={() => setMobileMenuOpen(true)}
          className="p-2 border-2 border-foreground bg-foreground text-background"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Right Actions */}
      <div className="hidden md:flex items-center gap-6 flex-1 justify-end">
        <div className="hidden lg:flex items-center gap-6 font-mono text-xs uppercase tracking-widest font-bold mr-6 border-r-2 border-foreground pr-6">
          <Link href="/login" className="cursor-pointer hover:text-[var(--color-coral)] transition-colors">ATS Login</Link>
          <Link href="/dashboard" className="cursor-pointer hover:text-[var(--color-teal)] transition-colors">Dashboard</Link>
        </div>
        
        <div className="hidden lg:flex items-center gap-2 font-mono text-xs uppercase tracking-widest font-bold">
          <span className="cursor-pointer hover:text-[var(--color-teal)] transition-colors">EN</span>
          <span className="opacity-30">/</span>
          <span className="opacity-50 cursor-pointer hover:opacity-100 hover:text-[var(--color-teal)] transition-colors">DE</span>
        </div>
        
        <button className="group flex items-center gap-2 brutal-border bg-foreground text-background px-4 py-2 font-mono text-xs uppercase tracking-widest transition-all hover:bg-background hover:text-foreground brutal-shadow">
          <span className="relative overflow-hidden h-[1.2em] inline-block">
            <span className="block transition-transform duration-300 group-hover:-translate-y-full">
              Let's Talk
            </span>
            <span className="absolute inset-0 block transition-transform duration-300 translate-y-full group-hover:translate-y-0">
              Let's Talk
            </span>
          </span>
          <ArrowUpRight className="size-4 transition-transform group-hover:rotate-45" />
        </button>
      </div>
    </motion.nav>

    {/* Mobile Fullscreen Menu */}
    <AnimatePresence>
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] bg-[var(--color-teal)] text-background flex flex-col p-6 overflow-hidden"
        >
          <div className="flex justify-between items-center mb-12">
            <div className="font-heading font-bold text-2xl uppercase tracking-tighter">
              NEXTEC<span className="text-[var(--color-coral)]">.</span>
            </div>
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 border-2 border-background text-background hover:bg-background hover:text-[var(--color-teal)] transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex flex-col gap-6 font-heading text-5xl uppercase tracking-tighter flex-1 justify-center px-4">
            {["Work", "About", "Studio"].map((item, i) => (
              <motion.a 
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + (i * 0.1) }}
                className="hover:text-[var(--color-coral)] transition-colors border-b-2 border-background/20 pb-4"
              >
                {item}
              </motion.a>
            ))}
            <motion.a 
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 font-mono text-xl text-background border-2 border-background p-4 text-center hover:bg-background hover:text-[var(--color-teal)] transition-colors"
            >
              ATS LOGIN
            </motion.a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}
