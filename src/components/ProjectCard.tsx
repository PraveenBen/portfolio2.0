"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Cpu,
  Layers,
  FileCode,
  ShieldCheck,
  Server,
  Zap,
  ArrowRight,
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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative rounded-2xl glass-panel border border-white/10 hover:border-[#00F0FF]/50 transition-all duration-300 overflow-hidden flex flex-col group shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
    >
      {/* Top electric neon glow bar */}
      <div
        className="h-1 w-full"
        style={{
          background: `linear-gradient(90deg, transparent, ${project.colorAccent}, transparent)`,
        }}
      />

      {/* Header Info */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div className="flex items-center space-x-2">
            <span
              className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold tracking-wider uppercase border"
              style={{
                color: project.colorAccent,
                borderColor: `${project.colorAccent}40`,
                backgroundColor: `${project.colorAccent}10`,
              }}
            >
              {project.category}
            </span>
            <span className="text-zinc-500 text-xs font-mono">
              // {project.period}
            </span>
          </div>

          <span className="text-xs font-mono text-zinc-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
            {project.client}
          </span>
        </div>

        {/* Title & Subtitle */}
        <h3 className="font-mono text-xl sm:text-2xl font-bold text-white group-hover:text-glow-cyan transition-all">
          {project.title}
        </h3>
        <p className="font-mono text-xs text-[#00F0FF] mt-1 mb-4">
          {project.subtitle}
        </p>

        {/* Short Summary */}
        <p className="text-zinc-300 text-sm leading-relaxed mb-6 font-sans">
          {project.shortDescription}
        </p>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
          {project.metrics.map((metric, mIdx) => (
            <div
              key={mIdx}
              className="p-3 rounded-xl bg-black/40 border border-white/5 flex flex-col justify-center"
            >
              <div
                className="font-mono font-bold text-base sm:text-lg"
                style={{ color: project.colorAccent }}
              >
                {metric.value}
              </div>
              <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                {metric.label}
              </div>
              <div className="text-[9px] text-zinc-500 truncate mt-0.5">
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
              className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-zinc-300 text-[11px] font-mono hover:border-[#00F0FF]/40 hover:text-white transition-colors"
            >
              {tech}
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
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="space-y-6 pt-4 border-t border-white/10 overflow-hidden"
            >
              {/* Problem Statement */}
              <div className="p-4 rounded-xl bg-black/50 border border-white/5 space-y-1">
                <div className="flex items-center space-x-1.5 text-xs font-mono font-bold text-[#FFE600] uppercase">
                  <Zap className="w-3.5 h-3.5" />
                  <span>The Engineering Problem</span>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                  {project.problemStatement}
                </p>
              </div>

              {/* Pipeline Stages Breakdown */}
              <div className="space-y-2">
                <div className="flex items-center space-x-1.5 text-xs font-mono font-bold text-[#00F0FF] uppercase">
                  <Layers className="w-3.5 h-3.5" />
                  <span>Pipeline Architecture & Data Flow</span>
                </div>
                <div className="space-y-2">
                  {project.pipelineStages.map((stage, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3 rounded-lg bg-[#0a0a0f] border border-white/5 text-xs font-mono flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                    >
                      <div className="space-y-0.5">
                        <div className="text-white font-semibold">
                          {stage.stage}
                        </div>
                        <div className="text-zinc-400 font-sans text-[11px]">
                          {stage.description}
                        </div>
                      </div>
                      <div className="text-[11px] text-[#00F0FF] px-2 py-0.5 rounded bg-[#00F0FF]/10 border border-[#00F0FF]/20 self-start sm:self-center whitespace-nowrap">
                        {stage.tech}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Technical Highlights */}
              <div className="space-y-2">
                <div className="flex items-center space-x-1.5 text-xs font-mono font-bold text-[#39FF14] uppercase">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified Technical Outcomes</span>
                </div>
                <ul className="space-y-1.5">
                  {project.keyHighlights.map((highlight, hIdx) => (
                    <li
                      key={hIdx}
                      className="flex items-start space-x-2 text-xs text-zinc-300 font-sans"
                    >
                      <span className="text-[#39FF14] font-mono mt-0.5">▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Proofs & Documentation Section */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-3">
                <div className="flex items-center space-x-1.5 text-xs font-mono font-bold text-[#FFE600] uppercase">
                  <FileCode className="w-3.5 h-3.5" />
                  <span>Proofs & Technical Documentation</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.documentation.map((doc, dIdx) => (
                    <a
                      key={dIdx}
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-2.5 rounded-lg bg-black/60 border border-white/10 hover:border-[#00F0FF] hover:bg-[#00F0FF]/10 text-zinc-300 hover:text-white transition-all text-xs font-mono group/doc"
                    >
                      <div className="flex items-center space-x-2 truncate">
                        <GitBranch className="w-3.5 h-3.5 text-[#00F0FF] flex-shrink-0" />
                        <span className="truncate">{doc.title}</span>
                      </div>
                      <ExternalLink className="w-3 h-3 text-zinc-500 group-hover/doc:text-[#00F0FF] flex-shrink-0 ml-2" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle Expand Button */}
        <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center space-x-2 text-xs font-mono font-bold text-[#00F0FF] hover:text-white transition-colors focus:outline-none"
          >
            <span>{isExpanded ? "Collapse Architecture Deep-Dive" : "Inspect Architecture, Flow & Proofs"}</span>
            {isExpanded ? (
              <ChevronUp className="w-4 h-4 text-[#00F0FF]" />
            ) : (
              <ChevronDown className="w-4 h-4 text-[#00F0FF]" />
            )}
          </button>

          <span className="text-[10px] font-mono text-zinc-500">
            ID: {project.id}
          </span>
        </div>
      </div>
    </motion.article>
  );
}
