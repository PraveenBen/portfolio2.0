"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Clock,
  Terminal,
  Mail,
  FileDown,
  ArrowRight,
  Copy,
  Check,
  Zap,
  User,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { PERSONAL_INFO } from "@/lib/portfolioData";

export function StartupFitSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const goodFirstProjects = [
    {
      title: "Pipeline Audit",
      description: "Identify lag, serialization overhead, Spark shuffle spills, and memory grant bottlenecks.",
    },
    {
      title: "CDC Setup",
      description: "Move operational tables into analytics stores with Debezium without losing or duplicating records.",
    },
    {
      title: "ClickHouse Migration",
      description: "Cluster setup, partition tuning, and materialization for sub-second analytical querying.",
    },
    {
      title: "Data-Quality Framework",
      description: "Automated cross-system checks across MySQL, ClickHouse, Druid, and cloud object storage.",
    },
    {
      title: "Spark Cost Reduction",
      description: "Executor memory, shuffle partitions, and cluster sizing to cut cloud compute waste.",
    },
  ];

  return (
    <section
      id="startup-fit"
      aria-label="How I Work With Startups and Direct Connection"
      className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
    >
      {/* About Block */}
      <div className="mb-14 p-6 sm:p-8 rounded-2xl bg-[#18181B] border border-[#27272A]">
        <div className="flex items-center space-x-2 text-xs font-mono text-[#10B981] uppercase tracking-wider mb-3">
          <User className="w-3.5 h-3.5" />
          <span>ABOUT</span>
        </div>
        <h3 className="font-sans text-xl sm:text-2xl font-semibold text-[#FAFAFA] tracking-tight mb-3">
          Engineering Background
        </h3>
        <p className="text-sm sm:text-base text-[#A1A1AA] font-sans font-normal leading-relaxed max-w-3xl">
          I’m a data engineer based in Bangalore. I started in BI and SQL reporting, moved into production streaming work at Flipkart scale, and now build data platforms and LLM-powered pipelines for enterprise clients. I care about systems that stay correct when load, schema, or traffic changes, and I document what I build so the next engineer can take it over.
        </p>
      </div>

      {/* How I Work With Startups Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 pb-6 border-b border-[#27272A]">
        <div>
          <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded bg-[#18181B] border border-[#27272A] text-[#10B981] text-xs font-mono mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>HOW I WORK WITH STARTUPS</span>
          </div>
          <h2 className="font-sans text-2xl sm:text-3xl font-semibold text-[#FAFAFA] tracking-tight">
            Startup Engagements
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-[#A1A1AA] max-w-md font-sans font-normal leading-relaxed">
          High-velocity engineering designed for US and UK startups. Autonomous execution, clean handover documentation, and dependable availability.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-14">
        {/* Left Column: Engagement Details (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          <div className="p-6 rounded-xl bg-[#18181B] border border-[#27272A] space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#27272A] text-xs font-mono">
              <span className="flex items-center space-x-1.5 text-[#FAFAFA]">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                <span>AVAILABILITY</span>
              </span>
              <span className="text-[#A1A1AA]">AVAILABLE IMMEDIATELY</span>
            </div>

            <div className="space-y-3.5 text-xs font-sans">
              <div>
                <span className="font-mono text-[10px] uppercase text-[#A1A1AA] tracking-wider block">
                  Engagements
                </span>
                <p className="font-medium text-sm text-[#FAFAFA] mt-0.5">
                  Remote contract (fixed scope or monthly) or full-time
                </p>
              </div>

              <div>
                <span className="font-mono text-[10px] uppercase text-[#A1A1AA] tracking-wider block">
                  Time Zone &amp; Overlap
                </span>
                <p className="text-[#FAFAFA] text-xs mt-0.5 font-normal">
                  Based in IST (Bangalore, UTC+5:30)
                </p>
                <p className="text-[#A1A1AA] text-xs mt-1 leading-relaxed font-normal">
                  Overlap of 4–5 hours with UK time and 3–4 hours with US East/West time.
                </p>
              </div>

              <div>
                <span className="font-mono text-[10px] uppercase text-[#A1A1AA] tracking-wider block">
                  Start Date
                </span>
                <p className="text-[#FAFAFA] text-xs mt-0.5 font-normal">
                  Available immediately (no notice period delay)
                </p>
              </div>

              <div className="pt-2 border-t border-[#27272A] flex items-center justify-between font-mono text-[11px] text-[#A1A1AA]">
                <span className="flex items-center space-x-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>Response Time</span>
                </span>
                <span className="text-[#FAFAFA] font-normal">
                  Within 1 business day
                </span>
              </div>
            </div>
          </div>

          {/* Quick Connect Channels */}
          <div className="p-5 rounded-xl bg-[#18181B] border border-[#27272A] space-y-3">
            <div className="text-xs font-mono text-[#A1A1AA] uppercase tracking-wider">
              Verified Profiles
            </div>
            <div className="grid grid-cols-2 gap-2.5 font-mono text-xs">
              <a
                href={PERSONAL_INFO.gitHub}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-[#09090B] border border-[#27272A] hover:border-[#A1A1AA] text-[#A1A1AA] hover:text-[#FAFAFA] flex items-center space-x-2 transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-[#FAFAFA]" />
                <span className="font-normal">GitHub</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-[#09090B] border border-[#27272A] hover:border-[#A1A1AA] text-[#A1A1AA] hover:text-[#FAFAFA] flex items-center space-x-2 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 text-[#FAFAFA]" />
                <span className="font-normal">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Good First Projects (7 cols) */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-7 rounded-xl bg-[#18181B] border border-[#27272A] h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-5 border-b border-[#27272A]">
                <span className="font-mono text-xs font-medium text-[#FAFAFA] uppercase tracking-wider">
                  // Good First Projects
                </span>
                <span className="font-mono text-[10px] text-[#10B981] px-2 py-0.5 rounded bg-[#09090B] border border-[#27272A]">
                  HIGH ROI
                </span>
              </div>

              <div className="space-y-3">
                {goodFirstProjects.map((proj, pIdx) => (
                  <div
                    key={pIdx}
                    className="p-3.5 rounded-lg bg-[#09090B] border border-[#27272A] hover:border-[#3F3F46] transition-colors"
                  >
                    <div className="flex items-center justify-between text-xs font-mono text-[#A1A1AA] mb-1">
                      <span className="text-[#10B981] font-medium">0{pIdx + 1}</span>
                      <span className="text-[#FAFAFA] font-medium font-sans text-xs">
                        {proj.title}
                      </span>
                    </div>
                    <p className="font-sans text-xs text-[#A1A1AA] leading-relaxed font-normal">
                      {proj.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-[#27272A] text-xs font-mono text-[#A1A1AA] font-normal">
              Direct slack integration, git PRs, and written architecture summaries included.
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA Card */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="rounded-2xl bg-[#18181B] border border-[#27272A] p-7 sm:p-10 relative overflow-hidden"
      >
        <div className="max-w-3xl mx-auto space-y-6 text-center sm:text-left">
          {/* Terminal Top Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-[#27272A]">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#27272A]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27272A]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27272A]" />
              <span className="font-mono text-xs text-[#A1A1AA] ml-2">
                terminal // direct-dispatch
              </span>
            </div>
            <span className="font-mono text-xs text-[#10B981] bg-[#09090B] px-2.5 py-0.5 rounded border border-[#27272A]">
              READY
            </span>
          </div>

          {/* Heading & Text */}
          <div>
            <h3 className="font-sans text-2xl sm:text-3xl font-semibold text-[#FAFAFA] tracking-tight">
              Got a pipeline that’s slow, expensive, or fragile?
            </h3>
            <p className="mt-3 text-sm sm:text-base text-[#A1A1AA] font-sans font-normal leading-relaxed max-w-2xl">
              Send me two lines on what you’re running and what’s hurting. I’ll reply within 1 business day with how I’d approach it.
            </p>
          </div>

          {/* Interactive Code Console Display */}
          <div className="p-4 rounded-xl bg-[#09090B] border border-[#27272A] font-mono text-xs sm:text-sm text-left overflow-x-auto space-y-1">
            <div className="flex items-center space-x-2 text-[#FAFAFA]">
              <span className="text-[#10B981]">$</span>
              <span>praveen --connect --role=&quot;Data &amp; AI Pipeline Engineer&quot;</span>
            </div>
            <div className="text-[#A1A1AA] text-xs">
              &gt; Host: Bangalore (IST / UTC+5:30) | Remote Overlap: US (EST/PST) &amp; UK
            </div>
            <div className="text-[#A1A1AA] text-xs flex items-center space-x-2">
              <span>&gt; Dispatch channel:</span>
              <span className="text-[#10B981]">{PERSONAL_INFO.email}</span>
              <span className="w-1.5 h-3.5 bg-[#10B981] inline-block animate-pulse ml-0.5" />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3.5 pt-2">
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-lg bg-[#10B981] text-[#09090B] font-sans font-medium text-sm hover:opacity-90 transition-opacity flex items-center space-x-2"
            >
              <Terminal className="w-4 h-4" />
              <span>Contact form</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <button
              onClick={handleCopyEmail}
              className="px-4 py-2.5 rounded-lg bg-[#09090B] border border-[#27272A] text-[#FAFAFA] font-mono text-xs hover:border-[#10B981] transition-colors flex items-center space-x-2"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#10B981]" />
                  <span className="text-[#10B981]">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#A1A1AA]" />
                  <span>Copy Email</span>
                </>
              )}
            </button>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="px-4 py-2.5 rounded-lg bg-[#09090B] border border-[#27272A] text-[#A1A1AA] font-mono text-xs hover:text-[#FAFAFA] hover:border-[#A1A1AA] transition-colors flex items-center space-x-2"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email directly</span>
            </a>

            <a
              href="/Praveen_T_FlowCV_Resume_2026-10-01 (1).pdf"
              download="Praveen_T_Data_Engineer_Resume.pdf"
              className="px-4 py-2.5 rounded-lg bg-[#09090B] border border-[#27272A] text-[#A1A1AA] font-mono text-xs hover:text-[#FAFAFA] hover:border-[#A1A1AA] transition-colors flex items-center space-x-2"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume PDF</span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
