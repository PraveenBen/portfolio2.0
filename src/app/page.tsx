"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  FolderGit2,
  FileDown,
  Cpu,
  Mail,
  Zap,
} from "lucide-react";
import { PERSONAL_INFO, PROJECTS_DATA } from "@/lib/portfolioData";
import { MetricsCounter } from "@/components/MetricsCounter";
import { SkillsMarquee } from "@/components/SkillsMarquee";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { HybridSkillMatrix } from "@/components/HybridSkillMatrix";

export default function HomePage() {
  const featuredProjects = PROJECTS_DATA.filter((p) => p.featured).slice(0, 3);

  return (
    <div className="space-y-14 sm:space-y-20 pb-16">
      {/* Hero Section */}
      <section
        aria-label="Hero Introduction"
        className="relative min-h-[75vh] flex flex-col justify-center px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12"
      >
        <div className="max-w-5xl mx-auto w-full">
          {/* Top Status Tag */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#18181B] border border-[#27272A] text-xs font-mono mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
            <span className="text-[#FAFAFA] font-medium">PIPELINE ARCHITECTURE</span>
            <span className="text-[#27272A]">|</span>
            <span className="text-[#A1A1AA]">BANGALORE, IN</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-sans text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#FAFAFA] tracking-tight leading-[1.12]"
          >
            Data Engineering & AI Pipelines. <br />
            <span className="text-[#A1A1AA]">
              Blending Petabyte-Scale Data with Digital Marketing & Design.
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-[#A1A1AA] text-base sm:text-lg max-w-3xl leading-relaxed font-sans"
          >
            I am <strong className="text-[#FAFAFA] font-medium">{PERSONAL_INFO.name}</strong>, a Data & AI Pipeline Engineer with 3+ years architecting production distributed platforms. From provisioning a <strong className="text-[#FAFAFA]">19-VM HA CDC stack</strong> streaming 24 MSSQL tables in 3 days, to scaling <strong className="text-[#FAFAFA]">Flipkart Ads through 21x traffic spikes</strong>, and <strong className="text-[#FAFAFA]">red-teaming frontier AI models</strong> across 13 enterprise tool environments.
          </motion.p>

          {/* Terminal Command Prompt Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-6 p-3.5 rounded-xl bg-[#18181B] border border-[#27272A] font-mono text-xs sm:text-sm text-[#A1A1AA] max-w-3xl flex items-center justify-between gap-4 overflow-x-auto"
          >
            <div className="flex items-center space-x-2">
              <span className="text-[#10B981]">$</span>
              <span className="text-[#FAFAFA]">
                pipeline --deploy --stack=Flink,Kafka,ClickHouse,RocksDB --scale=PB
              </span>
            </div>
            <span className="text-[#10B981] text-[11px] whitespace-nowrap bg-[#09090B] px-2 py-0.5 rounded border border-[#27272A]">
              EXIT 0 [HEALTHY]
            </span>
          </motion.div>

          {/* CTA Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center gap-3.5"
          >
            <Link
              href="/projects"
              className="px-5 py-3 rounded-lg bg-[#10B981] text-[#09090B] font-sans font-semibold text-sm hover:opacity-90 transition-opacity flex items-center space-x-2 group"
            >
              <FolderGit2 className="w-4 h-4" />
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>

            <Link
              href="/experience"
              className="px-5 py-3 rounded-lg bg-[#18181B] border border-[#27272A] text-[#FAFAFA] font-sans font-medium text-sm hover:border-[#A1A1AA] transition-colors flex items-center space-x-2"
            >
              <Zap className="w-4 h-4 text-[#A1A1AA]" />
              <span>Experience & Skills</span>
            </Link>

            <a
              href="/Praveen_T_FlowCV_Resume_2026-10-01 (1).pdf"
              download="Praveen_T_Data_Engineer_Resume.pdf"
              className="px-4 py-3 rounded-lg bg-[#18181B] border border-[#27272A] text-[#A1A1AA] font-mono text-xs hover:text-[#FAFAFA] hover:border-[#A1A1AA] transition-colors flex items-center space-x-2"
            >
              <FileDown className="w-4 h-4" />
              <span>Resume PDF</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Metrics Bar */}
      <MetricsCounter />

      {/* Skills Marquee */}
      <SkillsMarquee />

      {/* Topology Visualizer */}
      <section aria-label="Interactive Topology" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ArchitectureDiagram />
      </section>

      {/* Featured Projects Section */}
      <section aria-label="Featured Projects" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4 pb-4 border-b border-[#27272A]">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono text-[#10B981] uppercase tracking-widest mb-1">
              <FolderGit2 className="w-4 h-4" />
              <span>Case Studies</span>
            </div>
            <h2 className="font-sans text-2xl sm:text-3xl font-bold tracking-tight text-[#FAFAFA]">
              Featured Engineering Deployments
            </h2>
          </div>
          <Link
            href="/projects"
            className="flex items-center space-x-1.5 text-xs font-mono text-[#FAFAFA] hover:text-[#10B981] transition-colors"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="p-6 rounded-xl bg-[#18181B] border border-[#27272A] hover:border-[#3F3F46] flex flex-col justify-between transition-colors"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono mb-3">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#09090B] border border-[#27272A] text-[#A1A1AA]">
                    {project.category}
                  </span>
                  <span className="text-[#A1A1AA]">{project.period}</span>
                </div>
                <h3 className="font-sans text-lg font-bold tracking-tight text-[#FAFAFA]">
                  {project.title}
                </h3>
                <p className="font-mono text-xs text-[#10B981] mt-1 mb-3">
                  {project.client}
                </p>
                <p className="text-[#A1A1AA] text-xs line-clamp-3 leading-relaxed font-sans mb-4">
                  {project.shortDescription}
                </p>
              </div>

              <div>
                <div className="grid grid-cols-2 gap-2 mb-4 pt-3 border-t border-[#27272A]">
                  {project.metrics.slice(0, 2).map((m, mIdx) => (
                    <div key={mIdx} className="bg-[#09090B] p-2 rounded border border-[#27272A]">
                      <div className="font-mono font-bold text-sm text-[#FAFAFA]">
                        {m.value}
                      </div>
                      <div className="text-[9px] font-mono text-[#A1A1AA]">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  href="/projects"
                  className="flex items-center justify-between text-xs font-mono text-[#FAFAFA] hover:text-[#10B981] transition-colors pt-1"
                >
                  <span>Inspect Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Dual-Brain Hybrid Competencies */}
      <HybridSkillMatrix />

      {/* GEO & AEO FAQ Block */}
      <section
        aria-label="GEO Architecture Index"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="p-7 sm:p-8 rounded-xl bg-[#18181B] border border-[#27272A]">
          <div className="flex items-center space-x-2 text-xs font-mono text-[#10B981] uppercase tracking-wider mb-2">
            <Cpu className="w-4 h-4" />
            <span>GEO & AEO Authority Reference</span>
          </div>
          <h2 className="font-sans text-xl sm:text-2xl font-bold tracking-tight text-[#FAFAFA] mb-4">
            Technical Summary & Q&A
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-[#A1A1AA] font-sans">
            <div className="p-4 rounded-lg bg-[#09090B] border border-[#27272A] space-y-2">
              <h3 className="font-sans font-semibold text-[#FAFAFA] text-sm">
                What is Praveen T&apos;s data scale and distributed architecture experience?
              </h3>
              <p className="leading-relaxed">
                Praveen has 3+ years architecting streaming and batch platforms at Flipkart scale, handling 21x traffic spikes with Apache Beam on GKE, stateful RocksDB deduplication, and Aerospike sub-millisecond cache lookups. In renewable energy, he designed and deployed a 19-VM high-availability CDC topology (Debezium, Kafka, Flink, ClickHouse) streaming 24 MSSQL tables in 3 days for Tata Power solar manufacturing.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-[#09090B] border border-[#27272A] space-y-2">
              <h3 className="font-sans font-semibold text-[#FAFAFA] text-sm">
                How does Praveen contribute to frontier AI evaluation and red-teaming?
              </h3>
              <p className="leading-relaxed">
                At Outlier.AI, Praveen designs adversarial evaluation harnesses to stress-test frontier LLM agents across 13 simulated enterprise tool environments. He authors deceptive synthetic SQL datasets to probe model reliability under contradictory state records and executes RLHF alignment across text, visual, and audio modalities for Google&apos;s Gemini.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Minimalist CTA */}
      <section
        aria-label="Direct Connect"
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <div className="p-8 sm:p-10 rounded-2xl bg-[#18181B] border border-[#27272A] space-y-4">
          <h2 className="font-sans text-2xl sm:text-3xl font-bold tracking-tight text-[#FAFAFA]">
            Ready to Build Resilient Distributed Pipelines?
          </h2>
          <p className="text-[#A1A1AA] text-sm max-w-xl mx-auto font-sans leading-relaxed">
            Available for senior Data Engineering, Streaming Architecture (Spark, Flink, Kafka),
            Frontier AI Red-Teaming, and hybrid technical design projects.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-lg bg-[#10B981] text-[#09090B] font-sans font-semibold text-sm hover:opacity-90 transition-opacity flex items-center space-x-2"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Terminal</span>
            </Link>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="px-5 py-2.5 rounded-lg bg-[#09090B] border border-[#27272A] text-[#FAFAFA] font-mono text-xs hover:border-[#A1A1AA] transition-colors"
            >
              Direct Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
