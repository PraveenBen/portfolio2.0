"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Layers,
  FileCode,
  ShieldCheck,
  Zap,
  GitBranch,
} from "lucide-react";
import { ProjectItem } from "@/lib/portfolioData";

export function ProjectCard({
  project,
  index = 0,
  caseNumber,
}: {
  project: ProjectItem;
  index?: number;
  caseNumber?: string;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
      className="rounded-xl bg-[#18181B] border border-[#27272A] hover:border-[#3F3F46] transition-colors flex flex-col group overflow-hidden"
    >
      {/* Header Info */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div>
          {/* Top Metadata */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <div className="flex items-center space-x-2">
              {caseNumber && (
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium uppercase bg-[#09090B] border border-[#27272A] text-[#10B981]">
                  {caseNumber}
                </span>
              )}
              <span className="px-2 py-0.5 rounded text-[10px] font-mono tracking-wider uppercase bg-[#09090B] border border-[#27272A] text-[#A1A1AA]">
                {project.category}
              </span>
            </div>

            <span className="text-xs font-mono text-[#FAFAFA] bg-[#09090B] px-2.5 py-1 rounded border border-[#27272A] font-medium">
              {project.client}
            </span>
          </div>

          {/* Title & Subtitle */}
          <h3 className="font-sans text-lg sm:text-xl font-semibold tracking-tight text-[#FAFAFA]">
            {project.title}
          </h3>
          <p className="font-mono text-xs text-[#10B981] mt-1 mb-4">
            {project.subtitle}
          </p>

          {/* Structured Case Study Sections: Problem / What I built / Built to hold up */}
          <div className="space-y-3.5 mb-5 text-xs sm:text-sm font-sans font-normal leading-relaxed">
            <div className="p-3.5 rounded-lg bg-[#09090B] border border-[#27272A] space-y-1">
              <span className="font-mono text-[10px] text-[#FAFAFA] uppercase tracking-wider block font-medium">
                // Problem
              </span>
              <p className="text-[#A1A1AA]">{project.problemStatement}</p>
            </div>

            <div className="p-3.5 rounded-lg bg-[#09090B] border border-[#27272A] space-y-1">
              <span className="font-mono text-[10px] text-[#FAFAFA] uppercase tracking-wider block font-medium">
                // What I built
              </span>
              <p className="text-[#A1A1AA]">{project.whatIBuilt}</p>
            </div>

            {project.builtToHoldUp && (
              <div className="p-3.5 rounded-lg bg-[#09090B] border border-[#27272A] space-y-1">
                <span className="font-mono text-[10px] text-[#FAFAFA] uppercase tracking-wider block font-medium">
                  // {project.builtToHoldUpLabel || "Built to hold up"}
                </span>
                <p className="text-[#A1A1AA]">{project.builtToHoldUp}</p>
              </div>
            )}
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
            {project.metrics.map((metric, mIdx) => (
              <div
                key={mIdx}
                className="p-2.5 rounded-lg bg-[#09090B] border border-[#27272A] flex flex-col justify-center"
              >
                <div className="font-mono font-semibold text-sm sm:text-base text-[#FAFAFA]">
                  {metric.value}
                </div>
                <div className="text-[10px] font-mono text-[#A1A1AA] uppercase tracking-wider">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* Stack Display (formatted with · dividers) */}
          <div className="pt-3 border-t border-[#27272A] flex items-center space-x-2 text-xs font-mono">
            <span className="text-[#A1A1AA] uppercase text-[10px] tracking-wider whitespace-nowrap">
              Stack:
            </span>
            <div className="text-[#FAFAFA] truncate">
              {project.technologies.join(" · ")}
            </div>
          </div>
        </div>

        {/* Expandable Architecture & Proofs Section */}
        <div>
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="space-y-4 pt-5 mt-4 border-t border-[#27272A] overflow-hidden"
              >
                {/* Pipeline Stages Breakdown */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-1.5 text-xs font-mono font-medium text-[#FAFAFA] uppercase">
                    <Layers className="w-3.5 h-3.5 text-[#10B981]" />
                    <span>Pipeline Architecture &amp; Flow</span>
                  </div>
                  <div className="space-y-1.5">
                    {project.pipelineStages.map((stage, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-2.5 rounded-lg bg-[#09090B] border border-[#27272A] text-xs font-mono flex flex-col sm:flex-row sm:items-center justify-between gap-1.5"
                      >
                        <div className="space-y-0.5">
                          <div className="text-[#FAFAFA] font-medium font-sans text-xs">
                            {stage.stage}
                          </div>
                          <div className="text-[#A1A1AA] font-sans text-[11px] font-normal">
                            {stage.description}
                          </div>
                        </div>
                        <div className="text-[10px] text-[#FAFAFA] px-2 py-0.5 rounded bg-[#18181B] border border-[#27272A] self-start sm:self-center whitespace-nowrap">
                          {stage.tech}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Technical Highlights */}
                <div className="space-y-1.5">
                  <div className="flex items-center space-x-1.5 text-xs font-mono font-medium text-[#FAFAFA] uppercase">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
                    <span>Key Verification Points</span>
                  </div>
                  <ul className="space-y-1">
                    {project.keyHighlights.map((highlight, hIdx) => (
                      <li
                        key={hIdx}
                        className="flex items-start space-x-2 text-xs text-[#A1A1AA] font-sans font-normal"
                      >
                        <span className="text-[#10B981] font-mono mt-0.5">▹</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Proofs & Documentation Section */}
                <div className="p-3 rounded-lg bg-[#09090B] border border-[#27272A] space-y-2">
                  <div className="flex items-center space-x-1.5 text-xs font-mono font-medium text-[#FAFAFA] uppercase">
                    <FileCode className="w-3.5 h-3.5 text-[#10B981]" />
                    <span>Documentation &amp; Blueprints</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.documentation.map((doc, dIdx) => (
                      <a
                        key={dIdx}
                        href={doc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-2 rounded-lg bg-[#18181B] border border-[#27272A] hover:border-[#10B981] text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors text-xs font-mono group/doc"
                      >
                        <div className="flex items-center space-x-2 truncate">
                          <GitBranch className="w-3.5 h-3.5 text-[#A1A1AA] group-hover/doc:text-[#10B981] flex-shrink-0" />
                          <span className="truncate">{doc.title}</span>
                        </div>
                        <ExternalLink className="w-3 h-3 text-[#A1A1AA] group-hover/doc:text-[#10B981] flex-shrink-0 ml-2" />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Toggle Expand Button */}
          <div className="mt-4 pt-3 border-t border-[#27272A] flex items-center justify-between">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center space-x-1.5 text-xs font-mono text-[#FAFAFA] hover:text-[#10B981] transition-colors focus:outline-none"
            >
              <span>{isExpanded ? "Collapse architecture details" : "Inspect architecture flow &amp; stages"}</span>
              {isExpanded ? (
                <ChevronUp className="w-4 h-4 text-[#10B981]" />
              ) : (
                <ChevronDown className="w-4 h-4 text-[#A1A1AA]" />
              )}
            </button>

            <span className="text-[10px] font-mono text-[#A1A1AA]">
              {project.id}
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
