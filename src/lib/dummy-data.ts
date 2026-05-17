export type JobStatus = "Active" | "Closed" | "Draft";
export type CandidateStatus = "New" | "Screening" | "Interview" | "Offer" | "Rejected";

export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  status: JobStatus;
  applicants: number;
}

export interface Candidate {
  id: string;
  name: string;
  email: string;
  role: string;
  status: CandidateStatus;
  score: number;
  appliedDate: string;
  avatar: string;
  experience: string;
  notes: string;
}

export const DUMMY_JOBS: Job[] = [
  { id: "J-01", title: "Senior Frontend Engineer", department: "Engineering", location: "Remote", type: "Full-time", status: "Active", applicants: 142 },
  { id: "J-02", title: "Product Designer", department: "Design", location: "New York, NY", type: "Full-time", status: "Active", applicants: 89 },
  { id: "J-03", title: "Marketing Director", department: "Marketing", location: "London, UK", type: "Full-time", status: "Closed", applicants: 215 },
  { id: "J-04", title: "DevOps Specialist", department: "Engineering", location: "Remote", type: "Contract", status: "Active", applicants: 45 },
  { id: "J-05", title: "Copywriter", department: "Content", location: "Remote", type: "Draft", status: "Draft", applicants: 0 },
];

export const DUMMY_CANDIDATES: Candidate[] = [
  { id: "C-01", name: "Alice Freeman", email: "alice.f@example.com", role: "Senior Frontend Engineer", status: "Interview", score: 92, appliedDate: "2026-05-10", avatar: "AF", experience: "6 years", notes: "Strong React skills. Awwwards experience." },
  { id: "C-02", name: "Bob Smith", email: "bob.s@example.com", role: "Product Designer", status: "Offer", score: 96, appliedDate: "2026-05-08", avatar: "BS", experience: "8 years", notes: "Incredible portfolio. Brutalist design master." },
  { id: "C-03", name: "Charlie Davis", email: "charlie.d@example.com", role: "Marketing Director", status: "Rejected", score: 45, appliedDate: "2026-05-01", avatar: "CD", experience: "2 years", notes: "Lacks enterprise SaaS experience." },
  { id: "C-04", name: "Diana Prince", email: "diana.p@example.com", role: "Senior Frontend Engineer", status: "Screening", score: 85, appliedDate: "2026-05-15", avatar: "DP", experience: "5 years", notes: "Good animation background. Testing Framer Motion." },
  { id: "C-05", name: "Evan Wright", email: "evan.w@example.com", role: "DevOps Specialist", status: "New", score: 78, appliedDate: "2026-05-16", avatar: "EW", experience: "4 years", notes: "AWS Certified. Needs Kubernetes check." },
  { id: "C-06", name: "Fiona Gallagher", email: "fiona.g@example.com", role: "Product Designer", status: "Interview", score: 88, appliedDate: "2026-05-12", avatar: "FG", experience: "7 years", notes: "Great design systems knowledge." },
  { id: "C-07", name: "George Mason", email: "george.m@example.com", role: "Senior Frontend Engineer", status: "Rejected", score: 60, appliedDate: "2026-05-09", avatar: "GM", experience: "3 years", notes: "Failed technical screening." },
  { id: "C-08", name: "Hannah Abbott", email: "hannah.a@example.com", role: "DevOps Specialist", status: "Offer", score: 95, appliedDate: "2026-05-05", avatar: "HA", experience: "9 years", notes: "Exceptional system architecture skills." },
];

export const PIPELINE_DATA = [
  { name: "New", count: 45 },
  { name: "Screening", count: 32 },
  { name: "Interview", count: 18 },
  { name: "Offer", count: 5 },
  { name: "Hired", count: 12 },
];

export const APPLICATION_TREND_DATA = [
  { name: "Mon", apps: 12 },
  { name: "Tue", apps: 19 },
  { name: "Wed", apps: 15 },
  { name: "Thu", apps: 22 },
  { name: "Fri", apps: 30 },
  { name: "Sat", apps: 8 },
  { name: "Sun", apps: 5 },
];
