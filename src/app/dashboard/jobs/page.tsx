"use client";

import { motion } from "framer-motion";
import { DUMMY_JOBS } from "@/lib/dummy-data";
import { BrutalistButton } from "@/components/ui/brutalist-button";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export default function JobsPage() {
  return (
    <div className="p-6 md:p-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
        <div>
          <h1 className="font-heading text-5xl md:text-6xl uppercase tracking-tighter">Job Listings</h1>
          <div className="font-pixel text-[var(--color-teal)] text-sm uppercase mt-2">[ Active Requisitions ]</div>
        </div>
        <BrutalistButton className="flex items-center gap-2">
          <Plus size={18} />
          New Job
        </BrutalistButton>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {DUMMY_JOBS.map((job, index) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="brutal-border brutal-shadow bg-background p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:bg-foreground/5 transition-colors cursor-pointer group"
          >
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-2">
                <h2 className="font-heading text-2xl md:text-3xl uppercase tracking-tighter group-hover:text-[var(--color-blue)] transition-colors">
                  {job.title}
                </h2>
                <span className={cn(
                  "font-mono text-xs uppercase tracking-widest px-3 py-1 brutal-border border-2 font-bold",
                  job.status === "Active" ? "bg-[var(--color-teal)] text-background" : 
                  job.status === "Closed" ? "bg-foreground text-background" : "bg-transparent text-foreground"
                )}>
                  {job.status}
                </span>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm opacity-70">
                <span>{job.department}</span>
                <span>•</span>
                <span>{job.location}</span>
                <span>•</span>
                <span>{job.type}</span>
              </div>
            </div>
            
            <div className="flex flex-row md:flex-col items-center md:items-end justify-between w-full md:w-auto border-t-2 md:border-t-0 border-foreground/10 pt-4 md:pt-0">
              <div className="font-mono text-sm uppercase tracking-widest opacity-50 mb-1">Applicants</div>
              <div className="font-heading text-4xl">{job.applicants}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
