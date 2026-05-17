"use client";

import { motion } from "framer-motion";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { APPLICATION_TREND_DATA, PIPELINE_DATA } from "@/lib/dummy-data";
import { Users, Briefcase, TrendingUp, Sparkles } from "lucide-react";
import { BrutalistCard } from "@/components/ui/brutalist-card";

export default function DashboardOverview() {
  return (
    <div className="p-6 md:p-12 max-w-7xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <h1 className="font-heading text-5xl md:text-6xl uppercase tracking-tighter">System Overview</h1>
        <Sparkles className="text-[var(--color-coral)]" size={32} />
      </div>
      
      {/* Summary Widgets */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <BrutalistCard color="teal" className="!p-6 flex flex-col justify-between h-40">
          <div className="flex justify-between items-start text-background">
            <span className="font-mono text-sm uppercase tracking-widest font-bold">Total Candidates</span>
            <Users size={20} />
          </div>
          <div className="font-heading text-6xl text-background">1,248</div>
        </BrutalistCard>

        <BrutalistCard color="default" className="!p-6 flex flex-col justify-between h-40 bg-foreground text-background">
          <div className="flex justify-between items-start">
            <span className="font-mono text-sm uppercase tracking-widest font-bold">Active Jobs</span>
            <Briefcase size={20} />
          </div>
          <div className="font-heading text-6xl">14</div>
        </BrutalistCard>

        <BrutalistCard color="coral" className="!p-6 flex flex-col justify-between h-40">
          <div className="flex justify-between items-start text-foreground">
            <span className="font-mono text-sm uppercase tracking-widest font-bold">Time to Hire</span>
            <TrendingUp size={20} />
          </div>
          <div className="flex items-end gap-2 text-foreground">
            <span className="font-heading text-6xl leading-none">18</span>
            <span className="font-mono text-sm pb-1 font-bold">Days</span>
          </div>
        </BrutalistCard>
      </div>

      {/* Charts Container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Trend Chart */}
        <div className="brutal-border brutal-shadow bg-background p-6">
          <div className="font-pixel text-[var(--color-blue)] mb-6 text-sm uppercase">[ Application Velocity ]</div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={APPLICATION_TREND_DATA} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ccc" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontFamily: 'monospace', fontSize: 12 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontFamily: 'monospace', fontSize: 12 }} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#111', border: 'none', borderRadius: 0, color: '#F3ECE7', fontFamily: 'monospace' }}
                  itemStyle={{ color: '#F3ECE7' }}
                />
                <Line type="monotone" dataKey="apps" stroke="var(--color-teal)" strokeWidth={4} dot={{ r: 4, fill: '#111', strokeWidth: 2 }} activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pipeline Chart */}
        <div className="brutal-border brutal-shadow bg-background p-6">
          <div className="font-pixel text-[var(--color-coral)] mb-6 text-sm uppercase">[ Hiring Pipeline ]</div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={PIPELINE_DATA} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ccc" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontFamily: 'monospace', fontSize: 12 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontFamily: 'monospace', fontSize: 12 }} />
                <Tooltip 
                  cursor={{ fill: 'rgba(0,0,0,0.05)' }}
                  contentStyle={{ backgroundColor: '#111', border: 'none', borderRadius: 0, color: '#F3ECE7', fontFamily: 'monospace' }}
                  itemStyle={{ color: '#F3ECE7' }}
                />
                <Bar dataKey="count" fill="var(--color-blue)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  );
}
