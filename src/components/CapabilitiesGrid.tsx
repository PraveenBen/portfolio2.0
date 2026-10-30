"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Activity,
  Database,
  BarChart3,
  CheckCircle2,
  Cpu,
  Bot,
  Layers,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { CAPABILITIES_DATA } from "@/lib/portfolioData";

const ICONS = [Activity, Database, BarChart3, CheckCircle2, Cpu, Bot];

export function CapabilitiesGrid() {
  return (
    <section
      id="capabilities"
      aria-label="What I Can Do For Your Team"
      className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 pb-6 border-b border-[#27272A]">
        <div>
          <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded bg-[#18181B] border border-[#27272A] text-[#10B981] text-xs font-mono mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>WHAT I CAN DO FOR YOUR TEAM</span>
          </div>
          <h2 className="font-sans text-2xl sm:text-3xl font-semibold text-[#FAFAFA] tracking-tight">
            High-Scale Engineering Capabilities
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-[#A1A1AA] max-w-md font-sans font-normal leading-relaxed">
          Production data engineering built for reliability, sub-second latency, and resilience under extreme traffic surges.
        </p>
      </div>

      {/* 6-Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {CAPABILITIES_DATA.map((cap, idx) => {
          const Icon = ICONS[idx % ICONS.length];

          return (
            <motion.div
              key={cap.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="p-6 rounded-xl bg-[#18181B] border border-[#27272A] hover:border-[#3F3F46] flex flex-col justify-between transition-colors group"
            >
              <div>
                {/* Header Tag & Number */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#27272A] text-xs font-mono">
                  <span className="text-[#10B981] flex items-center space-x-1.5 font-medium">
                    <Icon className="w-3.5 h-3.5" />
                    <span>{cap.number}</span>
                  </span>
                  <span className="text-[#A1A1AA] text-[11px] uppercase tracking-wider font-normal">
                    {cap.tagline}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-sans text-base sm:text-lg font-semibold text-[#FAFAFA] tracking-tight group-hover:text-[#10B981] transition-colors">
                  {cap.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#A1A1AA] font-sans font-normal leading-relaxed mt-2.5 mb-5">
                  {cap.description}
                </p>
              </div>

              {/* Technologies in Monospace */}
              <div className="pt-4 border-t border-[#27272A] flex flex-wrap gap-1.5">
                {cap.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#09090B] border border-[#27272A] text-[#A1A1AA]"
                  >
                    [{tech}]
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Quick Action */}
      <div className="mt-8 p-4 sm:p-5 rounded-xl bg-[#18181B] border border-[#27272A] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center space-x-3 text-xs font-mono text-[#A1A1AA]">
          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
          <span className="text-[#FAFAFA] font-normal">
            Need a pipeline audit, CDC setup, or ClickHouse migration?
          </span>
          <span className="hidden md:inline text-[#27272A]">|</span>
          <span className="hidden md:inline font-normal">Initial scope ready within 1 business day</span>
        </div>
        <Link
          href="/contact"
          className="text-xs font-mono text-[#FAFAFA] hover:text-[#10B981] flex items-center space-x-1.5 transition-colors self-start sm:self-auto font-medium"
        >
          <span>Get in touch</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </section>
  );
}
