"use client";

import React from "react";
import { motion } from "framer-motion";
import { Terminal, Layers } from "lucide-react";
import { TECH_STACK_CATEGORIES } from "@/lib/portfolioData";

export function TechStackCategorical() {
  return (
    <section
      id="tech-stack"
      aria-label="Technical Stack and Tooling"
      className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 pb-6 border-b border-[#27272A]">
        <div>
          <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded bg-[#18181B] border border-[#27272A] text-[#10B981] text-xs font-mono mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>TOOLING TAXONOMY</span>
          </div>
          <h2 className="font-sans text-2xl sm:text-3xl font-semibold text-[#FAFAFA] tracking-tight">
            Tools &amp; Infrastructure
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-[#A1A1AA] max-w-md font-sans font-normal leading-relaxed">
          Production technologies used to build, orchestrate, and observe high-throughput streaming and analytical pipelines.
        </p>
      </div>

      {/* Categorical Display Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {TECH_STACK_CATEGORIES.map((cat, idx) => (
          <motion.div
            key={cat.category}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: idx * 0.05 }}
            className="p-6 rounded-xl bg-[#18181B] border border-[#27272A] hover:border-[#3F3F46] flex flex-col justify-between transition-colors"
          >
            <div>
              <div className="flex items-center space-x-2 text-xs font-mono text-[#10B981] uppercase tracking-wider mb-2">
                <Layers className="w-3.5 h-3.5" />
                <span>Tier // {String(idx + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="font-sans text-base font-semibold text-[#FAFAFA] tracking-tight">
                {cat.category}
              </h3>
              <p className="text-xs text-[#A1A1AA] font-sans font-normal mt-1 mb-4 leading-relaxed">
                {cat.description}
              </p>
            </div>

            {/* Monospace Tags (no skill level bars) */}
            <div className="pt-3 border-t border-[#27272A] flex flex-wrap gap-1.5">
              {cat.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-2.5 py-1 rounded bg-[#09090B] border border-[#27272A] text-[#FAFAFA] text-xs font-mono hover:border-[#10B981] transition-colors"
                >
                  [{tool}]
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
