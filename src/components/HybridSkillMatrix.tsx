"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { HYBRID_SKILLS } from "@/lib/portfolioData";
import {
  Database,
  Cpu,
  TrendingUp,
  Palette,
  CheckCircle2,
  Sparkles,
  Layers,
  Search,
} from "lucide-react";

const ICON_MAP: Record<string, any> = {
  Database,
  Cpu,
  TrendingUp,
  Palette,
};

export function HybridSkillMatrix() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const activeCategory = HYBRID_SKILLS[activeCategoryIndex];

  return (
    <section
      aria-label="Hybrid Engineering and Design Competencies"
      className="relative z-10 py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FFE600]/10 border border-[#FFE600]/30 text-[#FFE600] text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE DUAL-BRAIN ADVANTAGE</span>
          </div>
          <h2 className="font-mono text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Hardcore Data Pipelines{" "}
            <span className="text-[#00F0FF]">×</span> Creative Design & GEO
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-3 font-sans leading-relaxed">
            Bridging distributed stream processing, Kafka/Flink architectures, and frontier LLM
            red-teaming with high-end digital marketing (SEO/AEO/GEO) and graphic design (Photoshop & Illustrator).
          </p>
        </div>

        {/* Category Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {HYBRID_SKILLS.map((category, index) => {
            const Icon = ICON_MAP[category.iconName] || Layers;
            const isSelected = activeCategoryIndex === index;
            return (
              <button
                key={category.title}
                onClick={() => setActiveCategoryIndex(index)}
                className={`p-4 rounded-xl border text-left transition-all duration-300 relative flex flex-col justify-between group ${
                  isSelected
                    ? "bg-black/90 border-[#00F0FF] shadow-[0_0_25px_rgba(0,240,255,0.2)]"
                    : "bg-[#0d0d11]/70 border-white/5 hover:border-white/20 hover:bg-white/[0.04]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className="p-2 rounded-lg"
                      style={{
                        backgroundColor: `${category.color}15`,
                        border: `1px solid ${category.color}30`,
                      }}
                    >
                      <Icon className="w-5 h-5" style={{ color: category.color }} />
                    </div>
                    {isSelected && (
                      <span className="text-[10px] font-mono text-[#00F0FF] font-bold">
                        ACTIVE
                      </span>
                    )}
                  </div>
                  <h3 className="font-mono text-sm font-bold text-white group-hover:text-glow-cyan">
                    {category.title}
                  </h3>
                </div>
                <p className="text-[11px] text-zinc-400 mt-2 line-clamp-2 font-sans">
                  {category.tagline}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Category Skill Matrix Breakdown */}
        <motion.div
          key={activeCategory.title}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="rounded-2xl glass-panel p-6 sm:p-8 border border-white/10 relative overflow-hidden"
        >
          {/* Top highlight bar */}
          <div
            className="absolute top-0 left-0 right-0 h-1"
            style={{ backgroundColor: activeCategory.color }}
          />

          <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-white/10">
            <div>
              <div className="flex items-center space-x-2">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: activeCategory.color }}
                />
                <span
                  className="font-mono text-xs font-bold uppercase tracking-wider"
                  style={{ color: activeCategory.color }}
                >
                  {activeCategory.tagline}
                </span>
              </div>
              <h3 className="font-mono text-xl sm:text-2xl font-bold text-white mt-1">
                {activeCategory.title}
              </h3>
            </div>
            <p className="text-xs text-zinc-300 font-sans max-w-md">
              {activeCategory.description}
            </p>
          </div>

          {/* Skill items grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activeCategory.skills.map((skill, sIdx) => (
              <div
                key={sIdx}
                className="p-4 rounded-xl bg-black/60 border border-white/5 hover:border-white/15 transition-all group flex flex-col justify-between"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h4 className="font-mono text-sm font-bold text-white group-hover:text-[#00F0FF] transition-colors">
                    {skill.name}
                  </h4>
                  <span
                    className="px-2 py-0.5 rounded text-[10px] font-mono font-medium whitespace-nowrap"
                    style={{
                      color: activeCategory.color,
                      backgroundColor: `${activeCategory.color}15`,
                      border: `1px solid ${activeCategory.color}30`,
                    }}
                  >
                    {skill.level}
                  </span>
                </div>
                <p className="text-xs text-zinc-400 font-sans leading-relaxed">
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
