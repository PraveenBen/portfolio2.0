"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Terminal,
  Zap,
  FolderGit2,
  FileDown,
  ShieldAlert,
  Server,
  Database,
  Cpu,
  Mail,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { PERSONAL_INFO, PROJECTS_DATA } from "@/lib/portfolioData";
import { MetricsCounter } from "@/components/MetricsCounter";
import { SkillsMarquee } from "@/components/SkillsMarquee";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { HybridSkillMatrix } from "@/components/HybridSkillMatrix";

export default function HomePage() {
  const featuredProjects = PROJECTS_DATA.filter((p) => p.featured).slice(0, 3);

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* Hero Section */}
      <section
        aria-label="Hero Introduction"
        className="relative min-h-[85vh] flex flex-col justify-center px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12"
      >
        <div className="max-w-6xl mx-auto w-full">
          {/* Top Terminal Status Tag */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/30 text-xs font-mono mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#39FF14] animate-ping" />
            <span className="text-white font-medium">CLUSTER STATUS:</span>
            <span className="text-[#00F0FF]">ACTIVE PIPELINE ORCHESTRATION</span>
            <span className="text-zinc-600 hidden sm:inline">|</span>
            <span className="text-zinc-400 hidden sm:inline">BANGALORE, IN</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-mono text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]"
          >
            Data Engineering & AI Pipelines{" "}
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] via-[#FFE600] to-[#39FF14]">
              Blending Petabyte-Scale Data with Digital Marketing & Design.
            </span>
          </motion.h1>

          {/* Subtext & Terminal Overview */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-zinc-300 text-base sm:text-lg max-w-3xl leading-relaxed font-sans"
          >
            I am <strong className="text-white font-semibold">{PERSONAL_INFO.name}</strong>, a Data & AI Pipeline Engineer with 3+ years architecting production distributed platforms. From provisioning a <strong className="text-[#FFE600]">19-VM HA CDC stack</strong> streaming 24 MSSQL tables in 3 days, to scaling <strong className="text-[#39FF14]">Flipkart Ads through 21x spikes</strong>, and <strong className="text-[#00F0FF]">red-teaming frontier AI models</strong> across 13 enterprise tool environments.
          </motion.p>

          {/* Terminal Command Prompt Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 p-4 rounded-xl bg-black/70 border border-white/10 font-mono text-xs sm:text-sm text-zinc-300 max-w-3xl flex items-center justify-between gap-4 overflow-x-auto shadow-inner"
          >
            <div className="flex items-center space-x-2">
              <span className="text-[#39FF14]">root@praveen:~$</span>
              <span className="text-white">
                pipeline --deploy --stack=Flink,Kafka,ClickHouse,RocksDB --scale=PB
              </span>
            </div>
            <span className="text-[#00F0FF] text-[11px] font-bold whitespace-nowrap bg-[#00F0FF]/10 px-2 py-0.5 rounded border border-[#00F0FF]/20">
              [EXIT CODE 0: HEALTHY]
            </span>
          </motion.div>

          {/* CTA Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/projects"
              className="px-6 py-3.5 rounded-xl bg-[#00F0FF] text-black font-mono font-bold text-sm hover:bg-[#00F0FF]/90 hover:shadow-[0_0_25px_rgba(0,240,255,0.4)] transition-all flex items-center space-x-2 group"
            >
              <FolderGit2 className="w-4 h-4" />
              <span>Explore Engineered Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/experience"
              className="px-6 py-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-white font-mono font-semibold text-sm hover:border-[#00F0FF]/50 hover:bg-white/[0.08] transition-all flex items-center space-x-2"
            >
              <Zap className="w-4 h-4 text-[#FFE600]" />
              <span>Experience & Hybrid Skills</span>
            </Link>

            <a
              href="/Praveen_T_FlowCV_Resume_2026-10-01 (1).pdf"
              download="Praveen_T_Data_Engineer_Resume.pdf"
              className="px-5 py-3.5 rounded-xl bg-black/60 border border-[#FFE600]/40 text-[#FFE600] font-mono font-semibold text-sm hover:bg-[#FFE600]/10 hover:shadow-[0_0_20px_rgba(255,230,0,0.25)] transition-all flex items-center space-x-2"
            >
              <FileDown className="w-4 h-4" />
              <span>Download CV</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Metrics Bar */}
      <MetricsCounter />

      {/* Infinite Skills Marquee */}
      <SkillsMarquee />

      {/* Interactive Topology Visualizer */}
      <section aria-label="Interactive Topology" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ArchitectureDiagram />
      </section>

      {/* Featured Projects Showcase */}
      <section aria-label="Featured Projects" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4 pb-4 border-b border-white/10">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono text-[#00F0FF] uppercase tracking-widest mb-1">
              <FolderGit2 className="w-4 h-4" />
              <span>Mission-Critical Case Studies</span>
            </div>
            <h2 className="font-mono text-2xl sm:text-3xl font-bold text-white">
              High-Impact Engineering Highlights
            </h2>
          </div>
          <Link
            href="/projects"
            className="flex items-center space-x-2 text-xs font-mono text-[#00F0FF] hover:text-white transition-colors"
          >
            <span>View All Projects & Proofs</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="p-6 rounded-2xl glass-panel border border-white/10 flex flex-col justify-between group hover:border-[#00F0FF]/50 transition-all shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono mb-3">
                  <span
                    className="px-2 py-0.5 rounded text-[10px] font-bold"
                    style={{
                      color: project.colorAccent,
                      backgroundColor: `${project.colorAccent}15`,
                      border: `1px solid ${project.colorAccent}30`,
                    }}
                  >
                    {project.category}
                  </span>
                  <span className="text-zinc-500">{project.period}</span>
                </div>
                <h3 className="font-mono text-lg font-bold text-white group-hover:text-glow-cyan transition-colors">
                  {project.title}
                </h3>
                <p className="font-mono text-xs text-[#00F0FF] mt-1 mb-3">
                  {project.client}
                </p>
                <p className="text-zinc-300 text-xs line-clamp-3 leading-relaxed font-sans mb-4">
                  {project.shortDescription}
                </p>
              </div>

              <div>
                <div className="grid grid-cols-2 gap-2 mb-4 pt-3 border-t border-white/5">
                  {project.metrics.slice(0, 2).map((m, mIdx) => (
                    <div key={mIdx} className="bg-black/40 p-2 rounded-lg">
                      <div
                        className="font-mono font-bold text-sm"
                        style={{ color: project.colorAccent }}
                      >
                        {m.value}
                      </div>
                      <div className="text-[9px] font-mono text-zinc-400">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  href="/projects"
                  className="flex items-center justify-between text-xs font-mono font-semibold text-white group-hover:text-[#00F0FF] transition-colors pt-2"
                >
                  <span>Inspect Architecture Spec</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Dual-Brain Hybrid Competencies */}
      <HybridSkillMatrix />

      {/* Generative Engine Optimization (GEO & AEO) Indexing Section */}
      <section
        aria-label="GEO Architecture Index"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="p-8 rounded-2xl bg-black/80 border border-white/10 relative overflow-hidden">
          <div className="flex items-center space-x-2 text-xs font-mono text-[#39FF14] uppercase tracking-wider mb-2">
            <Cpu className="w-4 h-4" />
            <span>Generative Engine Optimization (GEO) & AEO Authority Block</span>
          </div>
          <h2 className="font-mono text-xl sm:text-2xl font-bold text-white mb-4">
            Technical FAQs & LLM Indexing Summary
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-zinc-300 font-sans">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
              <h3 className="font-mono font-bold text-white text-sm text-[#00F0FF]">
                What is Praveen T&apos;s data scale and distributed architecture experience?
              </h3>
              <p className="leading-relaxed">
                Praveen has 3+ years architecting streaming and batch platforms at Flipkart scale, handling 21x traffic spikes with Apache Beam on GKE, stateful RocksDB deduplication, and Aerospike sub-millisecond cache lookups. In renewable energy, he designed and deployed a 19-VM high-availability CDC topology (Debezium, Kafka, Flink, ClickHouse) streaming 24 MSSQL tables in 3 days for Tata Power solar manufacturing.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
              <h3 className="font-mono font-bold text-white text-sm text-[#FFE600]">
                How does Praveen contribute to frontier AI evaluation and red-teaming?
              </h3>
              <p className="leading-relaxed">
                At Outlier.AI, Praveen designs adversarial evaluation harnesses to stress-test frontier LLM agents across 13 simulated enterprise tool environments. He authors deceptive synthetic SQL datasets to probe model reliability under contradictory state records and executes RLHF alignment across text, visual, and audio modalities for Google&apos;s Gemini.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Terminal Call-to-Action */}
      <section
        aria-label="Direct Connect"
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <div className="p-8 sm:p-12 rounded-3xl glass-panel border border-[#00F0FF]/30 space-y-4 shadow-[0_0_50px_rgba(0,240,255,0.15)] relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-zinc-600">
            [SYS_CONNECT]
          </div>
          <h2 className="font-mono text-2xl sm:text-3xl font-extrabold text-white">
            Ready to Build Resilient Petabyte-Scale Pipelines?
          </h2>
          <p className="text-zinc-300 text-sm max-w-xl mx-auto font-sans">
            Whether you need high-throughput CDC topologies, Spark/Flink performance tuning,
            frontier AI red-teaming, or high-impact digital marketing & design.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-[#00F0FF] text-black font-mono font-bold text-sm hover:shadow-[0_0_20px_#00F0FF] transition-all flex items-center space-x-2"
            >
              <Mail className="w-4 h-4" />
              <span>Launch Contact Terminal</span>
            </Link>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-mono text-sm hover:border-[#00F0FF] transition-all"
            >
              Direct Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
