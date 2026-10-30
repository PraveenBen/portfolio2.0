"use client";

import React, { useState } from "react";
import { FolderGit2, ShieldCheck, Search, GitBranch } from "lucide-react";
import { PROJECTS_DATA } from "@/lib/portfolioData";
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      {/* Page Header */}
      <div className="space-y-3 max-w-3xl">
        <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded bg-[#18181B] border border-[#27272A] text-[#10B981] text-xs font-mono">
          <FolderGit2 className="w-3.5 h-3.5" />
          <span>PRODUCTION ARCHITECTURE & PROOFS</span>
        </div>
        <h1 className="font-sans text-3xl sm:text-5xl font-semibold text-[#FAFAFA] tracking-tight">
          Engineered Systems & Proofs.
        </h1>
        <p className="text-[#A1A1AA] text-sm sm:text-base leading-relaxed font-sans">
          Deep dives into production distributed topologies: from 19-VM cross-cloud CDC pipelines
          streaming 24 solar manufacturing tables, to RocksDB stateful deduplication scaling through
          21x Flipkart traffic spikes, and adversarial multi-hop red-teaming across mock workplace tools.
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="p-4 rounded-xl bg-[#18181B] border border-[#27272A] space-y-3">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-[#A1A1AA] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search technology (Flink, RocksDB, Kafka, Gemini)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-[#09090B] border border-[#27272A] text-[#FAFAFA] placeholder-[#A1A1AA]/60 font-mono text-xs focus:outline-none focus:border-[#10B981] transition-colors"
            />
          </div>

          <div className="text-xs font-mono text-[#A1A1AA]">
            SHOWING <span className="text-[#FAFAFA] font-semibold">{filteredProjects.length}</span> OF{" "}
            <span>{PROJECTS_DATA.length}</span> CASE STUDIES
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#27272A]">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded text-xs font-mono transition-colors ${
                  isSelected
                    ? "bg-[#FAFAFA] text-[#09090B] font-semibold"
                    : "bg-[#09090B] text-[#A1A1AA] hover:text-[#FAFAFA] border border-[#27272A]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredProjects.map((project, idx) => (
          <ProjectCard key={project.id} project={project} index={idx} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12 p-8 rounded-xl bg-[#18181B] border border-[#27272A] space-y-2">
          <p className="font-mono text-[#A1A1AA] text-sm">
            No case studies matching query &ldquo;{searchQuery}&rdquo;.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("All Projects");
              setSearchQuery("");
            }}
            className="text-xs font-mono text-[#10B981] underline"
          >
            Reset filters
          </button>
        </div>
      )}

      {/* Verified Notice */}
      <div className="p-4 sm:p-5 rounded-xl bg-[#18181B] border border-[#27272A] flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs font-mono text-[#A1A1AA]">
        <div className="flex items-center space-x-2.5">
          <ShieldCheck className="w-4 h-4 text-[#10B981] flex-shrink-0" />
          <span>
            All architecture blueprints, benchmark figures, and SLAs are verified against production deployments.
          </span>
        </div>
        <a
          href="https://github.com/PraveenBen"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#FAFAFA] hover:text-[#10B981] flex items-center space-x-1 whitespace-nowrap transition-colors"
        >
          <span>Verify on GitHub (@PraveenBen)</span>
          <GitBranch className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
