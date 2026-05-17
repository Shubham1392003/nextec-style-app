"use client";

import { motion } from "framer-motion";
import { Candidate } from "@/lib/dummy-data";
import { X, Mail, Briefcase, Calendar, Star } from "lucide-react";
import { useAtsStore } from "@/store/useAtsStore";
import { cn } from "@/lib/utils";
import { BrutalistButton } from "@/components/ui/brutalist-button";

interface CandidateModalProps {
  candidate: Candidate;
  onClose: () => void;
}

export function CandidateModal({ candidate, onClose }: CandidateModalProps) {
  const { updateCandidateStatus } = useAtsStore();

  return (
    <>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-50 cursor-pointer"
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl bg-background brutal-border brutal-shadow z-50 max-h-[90vh] overflow-y-auto"
      >
        <div className="sticky top-0 bg-background border-b-2 border-foreground p-6 flex justify-between items-center z-10">
          <div className="font-pixel text-[var(--color-blue)] uppercase text-sm">[ Profile ]</div>
          <button onClick={onClose} className="p-2 hover:bg-foreground hover:text-background border-2 border-transparent hover:border-foreground transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="p-6 md:p-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
            <div className="w-24 h-24 bg-[var(--color-teal)] border-2 border-foreground flex items-center justify-center font-heading text-4xl text-background shrink-0">
              {candidate.avatar}
            </div>
            <div className="flex-1">
              <h2 className="font-heading text-4xl md:text-5xl uppercase tracking-tighter mb-2">{candidate.name}</h2>
              <div className="font-mono text-sm opacity-70 mb-4">{candidate.role}</div>
              
              <div className="flex flex-wrap gap-4 font-mono text-xs uppercase tracking-widest">
                <div className="flex items-center gap-2 border-2 border-foreground/10 px-3 py-1">
                  <Mail size={14} /> {candidate.email}
                </div>
                <div className="flex items-center gap-2 border-2 border-foreground/10 px-3 py-1">
                  <Briefcase size={14} /> {candidate.experience}
                </div>
                <div className="flex items-center gap-2 border-2 border-foreground/10 px-3 py-1">
                  <Calendar size={14} /> {candidate.appliedDate}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Score */}
            <div className="border-2 border-foreground p-6 bg-foreground/5">
              <div className="font-mono text-sm uppercase tracking-widest opacity-50 mb-4 flex items-center gap-2">
                <Star size={16} /> Evaluation Score
              </div>
              <div className="flex items-end gap-2">
                <span className={cn(
                  "font-heading text-6xl leading-none",
                  candidate.score >= 90 ? "text-[var(--color-teal)]" : candidate.score >= 70 ? "text-[var(--color-blue)]" : "text-[var(--color-coral)]"
                )}>{candidate.score}</span>
                <span className="font-mono text-xl opacity-50 pb-1">/100</span>
              </div>
            </div>

            {/* Current Status */}
            <div className="border-2 border-foreground p-6 bg-foreground/5 flex flex-col justify-between">
              <div className="font-mono text-sm uppercase tracking-widest opacity-50 mb-4">Pipeline Status</div>
              <div className={cn(
                  "font-heading text-4xl uppercase tracking-tighter w-fit px-4 py-2 border-2 border-foreground",
                  candidate.status === "New" ? "bg-[var(--color-blue)] text-background" : 
                  candidate.status === "Interview" ? "bg-[var(--color-teal)] text-background" : 
                  candidate.status === "Offer" ? "bg-foreground text-background" : 
                  candidate.status === "Rejected" ? "bg-[var(--color-coral)] text-background" : 
                  "bg-transparent text-foreground"
                )}>
                  {candidate.status}
              </div>
            </div>
          </div>

          {/* Notes */}
          <div className="mb-12">
            <h3 className="font-heading text-2xl uppercase tracking-tighter mb-4">Interviewer Notes</h3>
            <div className="border-2 border-foreground p-6 font-sans text-lg bg-background leading-relaxed">
              {candidate.notes}
            </div>
          </div>

          {/* Actions */}
          <div className="border-t-2 border-foreground pt-8 flex flex-col md:flex-row gap-4 justify-end">
            <div className="font-mono text-xs uppercase tracking-widest opacity-50 mr-auto self-center">Update Status:</div>
            
            {(["New", "Screening", "Interview", "Offer", "Rejected"] as Candidate["status"][]).map((status) => (
              <button
                key={status}
                onClick={() => updateCandidateStatus(candidate.id, status)}
                disabled={candidate.status === status}
                className={cn(
                  "px-4 py-2 font-mono text-sm uppercase tracking-widest border-2 transition-all",
                  candidate.status === status 
                    ? "bg-foreground text-background border-foreground cursor-default" 
                    : "bg-transparent border-foreground/20 hover:border-foreground hover:bg-foreground/5 text-foreground"
                )}
              >
                {status}
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}
