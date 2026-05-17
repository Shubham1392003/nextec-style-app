"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Loader2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function LoginPage() {
  const router = useRouter();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const validate = () => {
    const newErrors: any = {};
    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email format.";
    }
    
    if (!password) {
      newErrors.password = "Password is required.";
    } else if (password.length < 6) {
      newErrors.password = "Password too short.";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    setIsLoading(true);
    // Simulate authentication
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    
    router.push("/dashboard");
  };

  // Background mouse tracking
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex flex-col items-center justify-center selection:bg-foreground selection:text-background text-foreground">
      
      {/* Animated Background Text */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-5">
        <motion.div 
          animate={{ x: mousePos.x * -0.05, y: mousePos.y * -0.05 }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          className="font-heading text-[30vw] uppercase whitespace-nowrap leading-none tracking-tighter"
        >
          SYSTEM
        </motion.div>
      </div>

      <div className="w-full max-w-lg px-6 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <div className="font-mono text-xs uppercase tracking-widest text-[var(--color-teal)] mb-6 flex items-center gap-4">
            <span className="w-8 h-[2px] bg-[var(--color-teal)]" />
            Restricted Access
          </div>
          <h1 className="font-heading text-6xl md:text-8xl uppercase tracking-tighter leading-[0.85]">
            Secure<br/>Login
          </h1>
        </motion.div>

        <form onSubmit={handleLogin} className="flex flex-col gap-8 w-full" noValidate>
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-2 relative group"
          >
            <label className="font-mono text-sm uppercase tracking-widest font-bold">Identity</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => { setEmail(e.target.value); if (errors.email) setErrors({ ...errors, email: undefined }); }}
              placeholder="NAME@AGENCY.COM"
              className={cn(
                "w-full bg-transparent border-b-4 border-foreground py-4 font-heading text-3xl md:text-4xl uppercase tracking-tighter placeholder:text-foreground/20 focus:outline-none focus:border-[var(--color-teal)] transition-colors rounded-none",
                errors.email ? "border-[var(--color-coral)]" : ""
              )}
            />
            <AnimatePresence>
              {errors.email && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="font-mono text-xs uppercase tracking-widest text-background bg-[var(--color-coral)] px-3 py-1 w-fit mt-2"
                >
                  {errors.email}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-2 relative group"
          >
            <label className="font-mono text-sm uppercase tracking-widest font-bold">Passcode</label>
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => { setPassword(e.target.value); if (errors.password) setErrors({ ...errors, password: undefined }); }}
                placeholder="••••••••"
                className={cn(
                  "w-full bg-transparent border-b-4 border-foreground py-4 font-heading text-3xl md:text-4xl tracking-tighter placeholder:text-foreground/20 focus:outline-none focus:border-[var(--color-teal)] transition-colors rounded-none pr-12",
                  errors.password ? "border-[var(--color-coral)]" : ""
                )}
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-0 top-1/2 -translate-y-1/2 p-2 hover:bg-foreground/5 transition-colors text-foreground/50 hover:text-foreground"
              >
                {showPassword ? <EyeOff size={24} /> : <Eye size={24} />}
              </button>
            </div>
            <AnimatePresence>
              {errors.password && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="font-mono text-xs uppercase tracking-widest text-background bg-[var(--color-coral)] px-3 py-1 w-fit mt-2"
                >
                  {errors.password}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8"
          >
            <button 
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex items-center justify-between brutal-border brutal-shadow bg-foreground text-background px-6 py-6 font-heading text-3xl uppercase tracking-tighter hover:bg-[var(--color-teal)] hover:border-[var(--color-teal)] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-foreground disabled:hover:border-foreground"
            >
              <span>Authenticate</span>
              <span className="relative h-8 w-8 flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="wait">
                  {isLoading ? (
                    <motion.div 
                      key="loader"
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 90 }}
                      className="animate-spin"
                    >
                      <Loader2 size={32} />
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="arrow"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="group-hover:translate-x-1 transition-transform"
                    >
                      <ArrowRight size={32} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </span>
            </button>
          </motion.div>
        </form>

      </div>
    </div>
  );
}
