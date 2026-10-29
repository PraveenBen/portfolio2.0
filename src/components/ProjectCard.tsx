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
}: {
  project: ProjectItem;
  index?: number;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="rounded-xl bg-[#18181B] border border-[#27272A] hover:border-[#3F3F46] transition-colors flex flex-col group overflow-hidden"
    >
      {/* Header Info */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div className="flex items-center space-x-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-mono tracking-wider uppercase bg-[#09090B] border border-[#27272A] text-[#A1A1AA]">
              {project.category}
            </span>
            <span className="text-[#A1A1AA] text-xs font-mono">
              // {project.period}
            </span>
          </div>

          <span className="text-xs font-mono text-[#A1A1AA] bg-[#09090B] px-2.5 py-1 rounded border border-[#27272A]">
            {project.client}
          </span>
        </div>

        {/* Title & Subtitle */}
        <h3 className="font-sans text-xl sm:text-2xl font-bold tracking-tight text-[#FAFAFA]">
          {project.title}
        </h3>
        <p className="font-mono text-xs text-[#10B981] mt-1 mb-4">
          {project.subtitle}
        </p>

        {/* Short Summary */}
        <p className="text-[#A1A1AA] text-sm leading-relaxed mb-6 font-sans">
          {project.shortDescription}
        </p>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
          {project.metrics.map((metric, mIdx) => (
            <div
              key={mIdx}
              className="p-3 rounded-lg bg-[#09090B] border border-[#27272A] flex flex-col justify-center"
            >
              <div className="font-mono font-bold text-base sm:text-lg text-[#FAFAFA]">
                {metric.value}
              </div>
              <div className="text-[10px] font-mono text-[#A1A1AA] uppercase tracking-wider">
                {metric.label}
              </div>
              <div className="text-[9px] font-sans text-[#A1A1AA]/80 truncate mt-0.5">
                {metric.subtext}
              </div>
            </div>
          ))}
        </div>

        {/* Technology Badges */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded bg-[#09090B] border border-[#27272A] text-[#A1A1AA] text-[11px] font-mono"
            >
              [{tech}]
            </span>
          ))}
        </div>

        {/* Expandable Architecture & Proofs Section */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="space-y-6 pt-5 border-t border-[#27272A] overflow-hidden"
            >
              {/* Problem Statement */}
              <div className="p-4 rounded-lg bg-[#09090B] border border-[#27272A] space-y-1">
                <div className="flex items-center space-x-1.5 text-xs font-mono font-medium text-[#FAFAFA] uppercase">
                  <Zap className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>The Engineering Problem</span>
                </div>
                <p className="text-xs text-[#A1A1AA] leading-relaxed font-sans">
                  {project.problemStatement}
                </p>
              </div>

              {/* Pipeline Stages Breakdown */}
              <div className="space-y-2">
                <div className="flex items-center space-x-1.5 text-xs font-mono font-medium text-[#FAFAFA] uppercase">
                  <Layers className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>Pipeline Architecture & Flow</span>
                </div>
                <div className="space-y-2">
                  {project.pipelineStages.map((stage, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3 rounded-lg bg-[#09090B] border border-[#27272A] text-xs font-mono flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                    >
                      <div className="space-y-0.5">
                        <div className="text-[#FAFAFA] font-medium font-sans">
                          {stage.stage}
                        </div>
                        <div className="text-[#A1A1AA] font-sans text-[11px]">
                          {stage.description}
                        </div>
                      </div>
                      <div className="text-[11px] text-[#FAFAFA] px-2 py-0.5 rounded bg-[#18181B] border border-[#27272A] self-start sm:self-center whitespace-nowrap">
                        {stage.tech}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Technical Highlights */}
              <div className="space-y-2">
                <div className="flex items-center space-x-1.5 text-xs font-mono font-medium text-[#FAFAFA] uppercase">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>Verified Technical Outcomes</span>
                </div>
                <ul className="space-y-1.5">
                  {project.keyHighlights.map((highlight, hIdx) => (
                    <li
                      key={hIdx}
                      className="flex items-start space-x-2 text-xs text-[#A1A1AA] font-sans"
                    >
                      <span className="text-[#10B981] font-mono mt-0.5">▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Proofs & Documentation Section */}
              <div className="p-4 rounded-lg bg-[#09090B] border border-[#27272A] space-y-3">
                <div className="flex items-center space-x-1.5 text-xs font-mono font-medium text-[#FAFAFA] uppercase">
                  <FileCode className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>Proofs & Technical Documentation</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.documentation.map((doc, dIdx) => (
                    <a
                      key={dIdx}
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-2.5 rounded-lg bg-[#18181B] border border-[#27272A] hover:border-[#10B981] text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors text-xs font-mono group/doc"
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
        <div className="mt-4 pt-4 border-t border-[#27272A] flex items-center justify-between">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center space-x-2 text-xs font-mono text-[#FAFAFA] hover:text-[#10B981] transition-colors focus:outline-none"
          >
            <span>{isExpanded ? "Collapse Architecture Deep-Dive" : "Inspect Architecture, Flow & Proofs"}</span>
            {isExpanded ? (
              <ChevronUp className="w-4 h-4 text-[#10B981]" />
            ) : (
              <ChevronDown className="w-4 h-4 text-[#A1A1AA]" />
            )}
          </button>

          <span className="text-[10px] font-mono text-[#A1A1AA]">
            ID: {project.id}
          </span>
        </div>
      </div>
    </motion.article>
  );
}
