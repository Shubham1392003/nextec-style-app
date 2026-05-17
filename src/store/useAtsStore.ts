import { create } from "zustand";
import { Candidate, DUMMY_CANDIDATES } from "@/lib/dummy-data";

interface AtsState {
  candidates: Candidate[];
  searchQuery: string;
  statusFilter: string | null;
  setSearchQuery: (query: string) => void;
  setStatusFilter: (status: string | null) => void;
  updateCandidateStatus: (id: string, newStatus: Candidate["status"]) => void;
}

export const useAtsStore = create<AtsState>((set) => ({
  candidates: DUMMY_CANDIDATES,
  searchQuery: "",
  statusFilter: null,
  setSearchQuery: (query) => set({ searchQuery: query }),
  setStatusFilter: (status) => set({ statusFilter: status }),
  updateCandidateStatus: (id, newStatus) => 
    set((state) => ({
      candidates: state.candidates.map(c => 
        c.id === id ? { ...c, status: newStatus } : c
      )
    })),
}));
