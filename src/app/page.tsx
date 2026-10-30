"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  FolderGit2,
  FileDown,
  Activity,
  Zap,
  Terminal,
  Cpu,
} from "lucide-react";
import { PERSONAL_INFO, PROJECTS_DATA } from "@/lib/portfolioData";
import { ProofStrip } from "@/components/ProofStrip";
import { CapabilitiesGrid } from "@/components/CapabilitiesGrid";
import { ProjectCard } from "@/components/ProjectCard";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { TechStackCategorical } from "@/components/TechStackCategorical";
import { StartupFitSection } from "@/components/StartupFitSection";

export default function HomePage() {
  // 4 Primary Case Studies:
  // 1. Tata Power, 2. Flipkart Ads, 3. Bajaj Broking, 4. Infosys
  const primaryCases = PROJECTS_DATA.slice(0, 4);

  const caseLabels = [
    "CASE 01 // TATA POWER",
    "CASE 02 // FLIPKART ADS",
    "CASE 03 // BAJAJ BROKING",
    "CASE 04 // INFOSYS",
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      {/* SECTION 1: HERO & PROOF STRIP */}
      <section
        aria-label="Hero Introduction"
        className="relative min-h-[70vh] flex flex-col justify-center px-4 sm:px-6 lg:px-8 pt-8 sm:pt-14"
      >
        <div className="max-w-5xl mx-auto w-full">
          {/* Top Status Tag */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#18181B] border border-[#27272A] text-xs font-mono mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
            <span className="text-[#FAFAFA] font-medium">
              DATA &amp; AI PIPELINE ENGINEER
            </span>
            <span className="text-[#27272A]">|</span>
            <span className="text-[#A1A1AA]">
              BANGALORE, IN (UTC+5:30) • US/UK OVERLAP
            </span>
          </motion.div>

          {/* Main Hero Headline (font-semibold, tighter tracking) */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="font-sans text-4xl sm:text-6xl lg:text-7xl font-semibold text-[#FAFAFA] tracking-tight leading-[1.14]"
          >
            Building streaming data systems that <br />
            <span className="text-[#A1A1AA]">stay correct under peak load.</span>
          </motion.h1>

          {/* Hero Subtext (no bold; highlight phrases by color text-[#FAFAFA] font-medium) */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="mt-6 text-[#A1A1AA] text-base sm:text-lg max-w-3xl leading-relaxed font-sans font-normal"
          >
            Data engineer based in Bangalore. I’ve run streaming systems through{" "}
            <span className="text-[#FAFAFA] font-medium">
              21x sale-day traffic spikes
            </span>{" "}
            at Flipkart, delivered a 19-VM CDC platform for Tata Power{" "}
            <span className="text-[#FAFAFA] font-medium">
              in 3 days
            </span>
            , and built an LLM pipeline for Bajaj Broking that{" "}
            <span className="text-[#FAFAFA] font-medium">
              verifies customer consent
            </span>{" "}
            under SEBI rules. Available for remote contract and full-time roles with US/UK startups.
          </motion.p>

          {/* Terminal Command Line Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="mt-6 p-3.5 rounded-xl bg-[#18181B] border border-[#27272A] font-mono text-xs sm:text-sm text-[#A1A1AA] max-w-3xl flex items-center justify-between gap-4 overflow-x-auto"
          >
            <div className="flex items-center space-x-2">
              <span className="text-[#10B981]">$</span>
              <span className="text-[#FAFAFA]">
                pipeline --deploy --stack=Flink,Kafka,ClickHouse,RocksDB --uptime=99.9
              </span>
              <span className="w-1.5 h-3.5 bg-[#10B981] inline-block animate-pulse ml-0.5" />
            </div>
            <span className="text-[#10B981] text-[11px] whitespace-nowrap bg-[#09090B] px-2.5 py-0.5 rounded border border-[#27272A] font-medium">
              EXIT 0 [STREAMING]
            </span>
          </motion.div>

          {/* Action CTAs: "View case studies" | "What I do" | "Work with me" | "Resume PDF" */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center gap-3.5"
          >
            <a
              href="#case-studies"
              className="px-5 py-2.5 rounded-lg bg-[#10B981] text-[#09090B] font-sans font-medium text-sm hover:opacity-90 transition-opacity flex items-center space-x-2 group"
            >
              <FolderGit2 className="w-4 h-4" />
              <span>View case studies</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>

            <a
              href="#capabilities"
              className="px-5 py-2.5 rounded-lg bg-[#18181B] border border-[#27272A] text-[#FAFAFA] font-sans font-medium text-sm hover:border-[#A1A1AA] transition-colors flex items-center space-x-2"
            >
              <Zap className="w-4 h-4 text-[#10B981]" />
              <span>What I do</span>
            </a>

            <a
              href="#startup-fit"
              className="px-5 py-2.5 rounded-lg bg-[#18181B] border border-[#27272A] text-[#A1A1AA] hover:text-[#FAFAFA] font-sans font-medium text-sm hover:border-[#A1A1AA] transition-colors flex items-center space-x-2"
            >
              <Terminal className="w-4 h-4 text-[#A1A1AA]" />
              <span>Work with me</span>
            </a>

            <a
              href="/Praveen_T_FlowCV_Resume_2026-10-01 (1).pdf"
              download="Praveen_T_Data_Engineer_Resume.pdf"
              className="px-4 py-2.5 rounded-lg bg-[#18181B] border border-[#27272A] text-[#A1A1AA] font-mono text-xs hover:text-[#FAFAFA] hover:border-[#A1A1AA] transition-colors flex items-center space-x-2"
            >
              <FileDown className="w-4 h-4" />
              <span>Resume PDF</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* PROOF STRIP (Static numbers, no fake counting animation) */}
      <ProofStrip />

      {/* SECTION 2: CAPABILITIES ("What I can do for your team" - 6 cards) */}
      <CapabilitiesGrid />

      {/* PIPELINE TOPOLOGY VISUALIZER */}
      <section
        aria-label="Interactive Pipeline Topology"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <ArchitectureDiagram />
      </section>

      {/* SECTION 3: CASE STUDIES & PROJECTS */}
      <section
        id="case-studies"
        aria-label="Case Studies"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12"
      >
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4 pb-6 border-b border-[#27272A]">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono text-[#10B981] uppercase tracking-widest mb-2">
              <Activity className="w-4 h-4" />
              <span>VERIFIED PRODUCTION DEPLOYMENTS</span>
            </div>
            <h2 className="font-sans text-2xl sm:text-3xl font-semibold tracking-tight text-[#FAFAFA]">
              Case Studies
            </h2>
            <p className="text-xs sm:text-sm text-[#A1A1AA] font-sans font-normal mt-1.5 max-w-2xl leading-relaxed">
              Production architectures evaluated under load: from 19-VM cross-cloud CDC platforms to real-time event deduplication through 21x traffic spikes.
            </p>
          </div>

          <Link
            href="/projects"
            className="flex items-center space-x-1.5 text-xs font-mono text-[#FAFAFA] hover:text-[#10B981] transition-colors self-start sm:self-auto font-medium"
          >
            <span>View all engineering proofs</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 4 Primary Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {primaryCases.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              caseNumber={caseLabels[idx]}
            />
          ))}
        </div>

        {/* Frontier AI evaluation (freelance, since 2023) Section */}
        <div className="mt-8 p-6 sm:p-8 rounded-xl bg-[#18181B] border border-[#27272A]">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#27272A] text-xs font-mono">
            <span className="flex items-center space-x-1.5 text-[#10B981] font-medium">
              <Cpu className="w-3.5 h-3.5" />
              <span>FRONTIER AI EVALUATION (FREELANCE, SINCE 2023)</span>
            </span>
            <span className="text-[#A1A1AA] text-[11px]">2023 – PRESENT</span>
          </div>

          <h3 className="font-sans text-lg sm:text-xl font-semibold text-[#FAFAFA] tracking-tight mb-3">
            Adversarial Test Scenarios &amp; Multi-Step Reasoning Evaluation
          </h3>

          <p className="text-sm text-[#A1A1AA] font-sans font-normal leading-relaxed max-w-3xl mb-4">
            I work on LLM evaluation and RLHF, including Google’s Gemini across text, image, and audio. I also design adversarial test scenarios where an agent has to find and cross-check information across email, chat, version control, and project trackers. The data I seed includes distractors and conflicting records, which exposes where models fail at multi-step reasoning. That makes me careful about where LLM output can be trusted in production pipelines.
          </p>

          <div className="pt-3 border-t border-[#27272A] flex items-center space-x-2 text-xs font-mono">
            <span className="text-[#A1A1AA] uppercase text-[10px] tracking-wider whitespace-nowrap">
              Stack:
            </span>
            <span className="text-[#FAFAFA]">
              Gemini · RLHF · Adversarial testing · Python · Synthetic SQL · LLM evaluation
            </span>
          </div>
        </div>

        {/* Case Studies Summary Footer */}
        <div className="mt-6 p-4 sm:p-5 rounded-xl bg-[#18181B] border border-[#27272A] flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs font-mono text-[#A1A1AA]">
          <div className="flex items-center space-x-2.5">
            <span className="w-2 h-2 rounded-full bg-[#10B981]" />
            <span className="font-normal">
              All benchmarks, SLAs, and architecture blueprints are verified against production systems.
            </span>
          </div>
          <a
            href={PERSONAL_INFO.gitHub}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FAFAFA] hover:text-[#10B981] flex items-center space-x-1 whitespace-nowrap transition-colors font-medium"
          >
            <span>Verify source code on GitHub (@PraveenBen)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>

      {/* SECTION 4: TECHNICAL STACK & TOOLING (grouped, no skill-level bars) */}
      <TechStackCategorical />

      {/* SECTION 5: STARTUP FIT, ABOUT & FINAL CTA */}
      <StartupFitSection />
    </div>
  );
}
