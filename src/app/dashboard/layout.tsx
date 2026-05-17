"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LayoutDashboard, Briefcase, Users, Settings, LogOut, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

const NAV_ITEMS = [
  { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { name: "Jobs", href: "/dashboard/jobs", icon: Briefcase },
  { name: "Candidates", href: "/dashboard/candidates", icon: Users },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const SidebarContent = () => (
    <>
        <div className="p-6 border-b-2 border-foreground flex justify-between items-center bg-background">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="font-heading font-bold text-2xl uppercase tracking-tighter hover:opacity-80 transition-opacity">
            NEXTEC<span className="text-[var(--color-coral)]">.</span> ATS
          </Link>
          <button className="md:hidden p-2 border-2 border-foreground hover:bg-foreground hover:text-background" onClick={() => setMobileMenuOpen(false)}>
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 p-6 flex flex-col gap-2 overflow-y-auto bg-background">
          <div className="font-pixel text-[var(--color-blue)] text-xs mb-4 opacity-50 uppercase">[ Main Menu ]</div>
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 font-mono text-sm uppercase tracking-widest transition-all brutal-border border-2",
                  isActive 
                    ? "bg-foreground text-background border-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" 
                    : "bg-transparent border-transparent hover:border-foreground/20 hover:bg-foreground/5"
                )}
              >
                <item.icon size={18} />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-6 border-t-2 border-foreground flex flex-col gap-2 bg-background mt-auto">
          <Link href="/dashboard/settings" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 font-mono text-sm uppercase tracking-widest transition-colors hover:bg-foreground/5 brutal-border border-transparent hover:border-foreground/20">
            <Settings size={18} />
            Settings
          </Link>
          <Link href="/login" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 font-mono text-sm uppercase tracking-widest text-[var(--color-coral)] transition-colors hover:bg-[var(--color-coral)]/10 brutal-border border-transparent hover:border-[var(--color-coral)]/20">
            <LogOut size={18} />
            Logout
          </Link>
        </div>
    </>
  );

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-background">
      {/* Mobile Top Bar */}
      <div className="md:hidden flex items-center justify-between p-4 border-b-2 border-foreground bg-background sticky top-0 z-40">
        <div className="font-heading font-bold text-xl uppercase tracking-tighter">
          NEXTEC<span className="text-[var(--color-coral)]">.</span>
        </div>
        <button onClick={() => setMobileMenuOpen(true)} className="p-2 border-2 border-foreground bg-foreground text-background">
          <Menu size={20} />
        </button>
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-64 border-r-2 border-foreground flex-col bg-background z-10 sticky top-0 h-screen">
        <SidebarContent />
      </aside>

      {/* Mobile Off-canvas Sidebar */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.aside 
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="md:hidden fixed inset-0 z-50 flex flex-col w-4/5 max-w-sm border-r-2 border-foreground shadow-[10px_0px_0px_0px_rgba(0,0,0,0.5)] bg-background"
          >
            <SidebarContent />
          </motion.aside>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
            className="md:hidden fixed inset-0 z-40 bg-foreground/20 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 bg-background/50 overflow-y-auto w-full pb-24 md:pb-0">
        {children}
      </main>
    </div>
  );
}
