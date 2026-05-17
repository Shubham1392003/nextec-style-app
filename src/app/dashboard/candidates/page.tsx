"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAtsStore } from "@/store/useAtsStore";
import { BrutalistButton } from "@/components/ui/brutalist-button";
import { Search, Filter, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Candidate } from "@/lib/dummy-data";
import { cn } from "@/lib/utils";
import { CandidateModal } from "@/components/ats/CandidateModal";

const ITEMS_PER_PAGE = 5;

export default function CandidatesPage() {
  const { candidates, searchQuery, statusFilter, setSearchQuery, setStatusFilter } = useAtsStore();
  
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null);

  const filteredCandidates = useMemo(() => {
    return candidates.filter((c) => {
      const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            c.role.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = statusFilter ? c.status === statusFilter : true;
      return matchesSearch && matchesStatus;
    });
  }, [candidates, searchQuery, statusFilter]);

  const totalPages = Math.ceil(filteredCandidates.length / ITEMS_PER_PAGE);
  const paginatedCandidates = filteredCandidates.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="p-6 md:p-12 max-w-7xl mx-auto min-h-screen flex flex-col">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6">
        <div>
          <h1 className="font-heading text-5xl md:text-6xl uppercase tracking-tighter">Candidates</h1>
          <div className="font-pixel text-[var(--color-coral)] text-sm uppercase mt-2">[ Talent Pool ]</div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="brutal-border brutal-shadow bg-background p-4 md:p-6 mb-8 flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 opacity-50" size={18} />
          <input 
            type="text"
            placeholder="SEARCH BY NAME OR ROLE..."
            value={searchQuery}
            onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
            className="w-full pl-12 pr-4 py-3 bg-foreground/5 brutal-border border-2 font-mono text-sm uppercase tracking-widest focus:outline-none focus:bg-foreground/10 transition-colors"
          />
        </div>
        
        <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
          {["All", "New", "Screening", "Interview", "Offer", "Rejected"].map((status) => (
            <button
              key={status}
              onClick={() => { setStatusFilter(status === "All" ? null : status); setCurrentPage(1); }}
              className={cn(
                "whitespace-nowrap px-4 py-3 font-mono text-sm uppercase tracking-widest brutal-border border-2 transition-colors font-bold",
                (statusFilter === status || (status === "All" && !statusFilter))
                  ? "bg-foreground text-background"
                  : "bg-background text-foreground hover:bg-foreground/5"
              )}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Candidate List */}
      <div className="flex-1">
        <div className="grid grid-cols-1 gap-4">
          <AnimatePresence mode="popLayout">
            {paginatedCandidates.map((candidate) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                key={candidate.id}
                onClick={() => setSelectedCandidate(candidate)}
                className="brutal-border bg-background p-4 md:p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:bg-foreground/5 transition-colors cursor-pointer group"
              >
                <div className="flex items-center gap-6">
                  <div className="hidden md:flex w-16 h-16 bg-[var(--color-blue)] rounded-none brutal-border items-center justify-center font-heading text-2xl text-background">
                    {candidate.avatar}
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl uppercase tracking-tighter group-hover:text-[var(--color-coral)] transition-colors">
                      {candidate.name}
                    </h3>
                    <div className="font-mono text-sm opacity-70 mt-1">{candidate.role}</div>
                  </div>
                </div>

                <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end border-t-2 md:border-t-0 border-foreground/10 pt-4 md:pt-0">
                  <div className="flex flex-col items-start md:items-end">
                    <span className="font-mono text-xs uppercase tracking-widest opacity-50">Score</span>
                    <span className={cn(
                      "font-heading text-2xl",
                      candidate.score >= 90 ? "text-[var(--color-teal)]" : candidate.score >= 70 ? "text-[var(--color-blue)]" : "text-[var(--color-coral)]"
                    )}>
                      {candidate.score}/100
                    </span>
                  </div>
                  
                  <span className={cn(
                    "font-mono text-xs uppercase tracking-widest px-3 py-1 brutal-border border-2 font-bold min-w-[100px] text-center",
                    candidate.status === "New" ? "bg-[var(--color-blue)] text-background" : 
                    candidate.status === "Interview" ? "bg-[var(--color-teal)] text-background" : 
                    candidate.status === "Offer" ? "bg-foreground text-background" : 
                    candidate.status === "Rejected" ? "bg-[var(--color-coral)] text-background" : 
                    "bg-transparent text-foreground"
                  )}>
                    {candidate.status}
                  </span>
                </div>
              </motion.div>
            ))}
            
            {paginatedCandidates.length === 0 && (
              <div className="py-24 text-center border-2 border-dashed border-foreground/20 font-mono uppercase tracking-widest text-foreground/50">
                No candidates found.
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-8 flex justify-between items-center border-t-2 border-foreground pt-6">
          <div className="font-mono text-sm uppercase opacity-50">
            Page {currentPage} of {totalPages}
          </div>
          <div className="flex gap-4">
            <button 
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(prev => prev - 1)}
              className="p-2 brutal-border disabled:opacity-30 disabled:cursor-not-allowed hover:bg-foreground/5"
            >
              <ChevronLeft />
            </button>
            <button 
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(prev => prev + 1)}
              className="p-2 brutal-border disabled:opacity-30 disabled:cursor-not-allowed hover:bg-foreground/5"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      )}

      {/* Candidate Details Modal */}
      <AnimatePresence>
        {selectedCandidate && (
          <CandidateModal 
            candidate={selectedCandidate} 
            onClose={() => setSelectedCandidate(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}
