"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { usePathname } from "next/navigation";

export function GlobalCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    // Determine if device has a touch screen
    if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) return;

    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    // Use QuickSetter for optimal GSAP performance
    const cursorSetX = gsap.quickSetter(cursor, "x", "px");
    const cursorSetY = gsap.quickSetter(cursor, "y", "px");

    const onMouseMove = (e: MouseEvent) => {
      cursorSetX(e.clientX);
      cursorSetY(e.clientY);
      
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.8,
        ease: "power4.out"
      });
    };

    window.addEventListener("mousemove", onMouseMove);

    // Magnetic / Hover Effect Logic
    const handleHover = () => {
      gsap.to(follower, { 
        scale: 2.5, 
        backgroundColor: "var(--color-teal)", 
        borderWidth: 0,
        mixBlendMode: "normal", 
        opacity: 0.5, 
        duration: 0.4,
        ease: "power2.out"
      });
    };
    
    const handleUnhover = () => {
      gsap.to(follower, { 
        scale: 1, 
        backgroundColor: "transparent", 
        borderWidth: 1,
        mixBlendMode: "difference", 
        opacity: 1, 
        duration: 0.4,
        ease: "power2.out"
      });
    };

    // Re-bind hover states when pathname changes
    const bindInteractiveElements = () => {
      const interactiveElements = document.querySelectorAll("a, button, input, [role='button']");
      interactiveElements.forEach(el => {
        el.addEventListener("mouseenter", handleHover);
        el.addEventListener("mouseleave", handleUnhover);
      });
      return interactiveElements;
    };

    // Give the DOM a tiny bit of time to paint the new route
    const timeout = setTimeout(bindInteractiveElements, 100);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("mousemove", onMouseMove);
      const interactiveElements = document.querySelectorAll("a, button, input, [role='button']");
      interactiveElements.forEach(el => {
        el.removeEventListener("mouseenter", handleHover);
        el.removeEventListener("mouseleave", handleUnhover);
      });
    };
  }, [pathname]);

  return (
    <>
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-2 h-2 bg-foreground rounded-full pointer-events-none z-[9999] mix-blend-difference -translate-x-1/2 -translate-y-1/2 hidden md:block"
      />
      <div 
        ref={followerRef} 
        className="fixed top-0 left-0 w-10 h-10 border border-foreground/50 rounded-full pointer-events-none z-[9998] mix-blend-difference -translate-x-1/2 -translate-y-1/2 hidden md:block"
      />
    </>
  );
}
