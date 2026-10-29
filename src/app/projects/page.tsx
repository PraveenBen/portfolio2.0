"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FolderGit2,
  Filter,
  Layers,
  Sparkles,
  GitBranch,
  ShieldCheck,
  Search,
} from "lucide-react";
import { PROJECTS_DATA, ProjectItem } from "@/lib/portfolioData";
import { ProjectCard } from "@/components/ProjectCard";

const CATEGORIES = [
  "All Projects",
  "AI & Red-Teaming",
  "Renewable Energy & IoT",
  "FinTech & Trading",
  "E-Commerce & Scale",
  "Enterprise Database",
] as const;

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Projects");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    const matchesCategory =
      selectedCategory === "All Projects" || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((t) =>
        t.toLowerCase().includes(searchQuery.toLowerCase())
      ) ||
      project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.client.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Page Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/30 text-[#00F0FF] text-xs font-mono">
          <FolderGit2 className="w-3.5 h-3.5" />
          <span>PRODUCTION ARCHITECTURE & CASE STUDIES</span>
        </div>
        <h1 className="font-mono text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Engineered Systems, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] via-[#FFE600] to-[#39FF14]">
            Proofs & Telemetry Documentation
          </span>
        </h1>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-sans">
          Deep dives into production distributed topologies: from 19-VM cross-cloud CDC pipelines
          streaming 24 solar manufacturing tables, to RocksDB stateful deduplication scaling through
          21x Flipkart traffic spikes, and adversarial multi-hop red-teaming across 13 mock tools.
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="p-4 rounded-2xl glass-panel border border-white/10 space-y-4">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter by technology (e.g. Flink, RocksDB, Gemini, Kafka)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-black/60 border border-white/10 text-white placeholder-zinc-500 font-mono text-xs focus:outline-none focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF] transition-all"
            />
          </div>

          <div className="text-xs font-mono text-zinc-400">
            SHOWING <span className="text-[#00F0FF] font-bold">{filteredProjects.length}</span> OF{" "}
            <span className="text-white">{PROJECTS_DATA.length}</span> CASE STUDIES
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 ${
                  isSelected
                    ? "bg-[#00F0FF] text-black font-bold shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                    : "bg-white/[0.04] text-zinc-300 hover:text-white hover:bg-white/[0.08] border border-white/5"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredProjects.map((project, idx) => (
          <ProjectCard key={project.id} project={project} index={idx} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-16 p-8 rounded-2xl glass-panel border border-white/10 space-y-3">
          <p className="font-mono text-zinc-400 text-sm">
            No case studies matching query &ldquo;{searchQuery}&rdquo; in category &ldquo;{selectedCategory}&rdquo;.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("All Projects");
              setSearchQuery("");
            }}
            className="text-xs font-mono text-[#00F0FF] underline hover:text-white"
          >
            Reset filters
          </button>
        </div>
      )}

      {/* Dedicated Proofs & Documentation Notice */}
      <div className="p-6 rounded-2xl bg-black/60 border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs font-mono text-zinc-400">
        <div className="flex items-center space-x-3">
          <ShieldCheck className="w-5 h-5 text-[#39FF14] flex-shrink-0" />
          <span>
            All architecture blueprints, benchmark figures, and SLAs are verified against actual production deployments.
          </span>
        </div>
        <a
          href="https://github.com/PraveenBen"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#00F0FF] hover:underline flex items-center space-x-1 whitespace-nowrap"
        >
          <span>Verify on GitHub (@PraveenBen)</span>
          <GitBranch className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
