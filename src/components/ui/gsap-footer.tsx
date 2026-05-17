"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function GsapFooter() {
  const footerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      if (!footerRef.current || !textRef.current || !linksRef.current) return;

      // Parallax text reveal
      gsap.fromTo(textRef.current, 
        { y: "100%", opacity: 0 },
        { 
          y: "0%", 
          opacity: 1, 
          duration: 1.5, 
          ease: "power4.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
            end: "bottom bottom",
            scrub: 1.2
          }
        }
      );

      // Staggered links reveal
      gsap.fromTo(linksRef.current.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="border-t-2 border-foreground py-16 px-4 md:px-8 bg-[var(--color-teal)] text-background overflow-hidden relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        
        <div className="md:col-span-2 overflow-hidden">
          <h2 ref={textRef} className="text-[14vw] md:text-[8vw] font-heading leading-[0.8] mb-6 uppercase tracking-tighter">
            NEXTEC<span className="text-[var(--color-coral)]">.</span>
          </h2>
          <p className="font-mono text-sm max-w-sm border-l-2 border-background pl-4 opacity-80">
            An independent digital product studio crafting award-winning brutalist web experiences.
          </p>
        </div>
        
        <div ref={linksRef} className="flex flex-col gap-4 font-mono uppercase text-sm col-span-2 md:col-span-2 grid grid-cols-2">
          <div className="flex flex-col gap-4">
            <div className="font-bold mb-2 text-background/50">Socials</div>
            <a href="#" className="hover:text-[var(--color-coral)] transition-colors w-fit">Instagram</a>
            <a href="#" className="hover:text-[var(--color-coral)] transition-colors w-fit">Twitter (X)</a>
            <a href="#" className="hover:text-[var(--color-coral)] transition-colors w-fit">Awwwards</a>
            <a href="#" className="hover:text-[var(--color-coral)] transition-colors w-fit">LinkedIn</a>
          </div>
          
          <div className="flex flex-col gap-4">
            <div className="font-bold mb-2 text-background/50">Offices</div>
            <div className="hover:opacity-100 opacity-80 transition-opacity">New York, NY<br/>100 Brutal St.</div>
            <div className="mt-4 hover:opacity-100 opacity-80 transition-opacity">London, UK<br/>Creative Dist.</div>
          </div>
        </div>
        
      </div>
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center font-mono text-xs uppercase opacity-50">
        <div>© {new Date().getFullYear()} Nextec Studio. All rights reserved.</div>
        <div className="mt-4 md:mt-0">Designed & Developed with purpose.</div>
      </div>
    </footer>
  );
}
