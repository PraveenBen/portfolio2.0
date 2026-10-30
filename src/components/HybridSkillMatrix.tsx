"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { HYBRID_SKILLS } from "@/lib/portfolioData";
import { Database, Cpu, Cloud, Server, Layers } from "lucide-react";

const ICON_MAP: Record<string, any> = {
  Database,
  Cpu,
  Cloud,
  Server,
};

export function HybridSkillMatrix() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const activeCategory = HYBRID_SKILLS[activeCategoryIndex];

  return (
    <section
      aria-label="Core Data and AI Engineering Competencies"
      className="relative z-10 py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded bg-[#18181B] border border-[#27272A] text-[#10B981] text-xs font-mono mb-3">
            <span>CORE ARCHITECTURE & SPECIALIZATION</span>
          </div>
          <h2 className="font-sans text-2xl sm:text-4xl font-semibold text-[#FAFAFA] tracking-tight">
            Data Engineering <span className="text-[#10B981]">×</span> Frontier AI Systems
          </h2>
          <p className="text-[#A1A1AA] text-sm mt-3 font-sans leading-relaxed">
            High-throughput distributed stream processing, real-time CDC topologies,
            and enterprise OLAP platforms alongside adversarial frontier LLM red-teaming and multi-modal RLHF.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          {HYBRID_SKILLS.map((category, index) => {
            const Icon = ICON_MAP[category.iconName] || Layers;
            const isSelected = activeCategoryIndex === index;
            return (
              <button
                key={category.title}
                onClick={() => setActiveCategoryIndex(index)}
                className={`p-4 rounded-xl border text-left transition-colors relative flex flex-col justify-between ${
                  isSelected
                    ? "bg-[#09090B] border-[#10B981] text-[#FAFAFA]"
                    : "bg-[#18181B] border-[#27272A] text-[#A1A1AA] hover:border-[#3F3F46] hover:text-[#FAFAFA]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 rounded-lg bg-[#09090B] border border-[#27272A] text-[#10B981]">
                      <Icon className="w-4 h-4" />
                    </div>
                    {isSelected && (
                      <span className="text-[10px] font-mono text-[#10B981] font-semibold">
                        ACTIVE
                      </span>
                    )}
                  </div>
                  <h3 className="font-sans text-sm font-semibold tracking-tight">
                    {category.title}
                  </h3>
                </div>
                <p className="text-[11px] text-[#A1A1AA] mt-2 line-clamp-2 font-sans">
                  {category.tagline}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Category Skill Matrix */}
        <motion.div
          key={activeCategory.title}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="rounded-xl bg-[#18181B] p-6 sm:p-8 border border-[#27272A]"
        >
          <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#27272A]">
            <div>
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                <span className="font-mono text-xs font-medium uppercase tracking-wider text-[#10B981]">
                  {activeCategory.tagline}
                </span>
              </div>
              <h3 className="font-sans text-xl sm:text-2xl font-semibold tracking-tight text-[#FAFAFA] mt-1">
                {activeCategory.title}
              </h3>
            </div>
            <p className="text-xs text-[#A1A1AA] font-sans max-w-md">
              {activeCategory.description}
            </p>
          </div>

          {/* Skill Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {activeCategory.skills.map((skill, sIdx) => (
              <div
                key={sIdx}
                className="p-4 rounded-lg bg-[#09090B] border border-[#27272A] flex flex-col justify-between"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h4 className="font-sans text-sm font-semibold text-[#FAFAFA] tracking-tight">
                    {skill.name}
                  </h4>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono text-[#A1A1AA] bg-[#18181B] border border-[#27272A] whitespace-nowrap">
                    {skill.level}
                  </span>
                </div>
                <p className="text-xs text-[#A1A1AA] font-sans leading-relaxed">
                  {skill.context}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
