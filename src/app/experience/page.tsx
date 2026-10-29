"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Award,
  ExternalLink,
  Sparkles,
  Layers,
  CheckCircle2,
  FileDown,
} from "lucide-react";
import {
  EXPERIENCES,
  EDUCATION,
  CERTIFICATIONS,
  PERSONAL_INFO,
} from "@/lib/portfolioData";
import { TimelineItem } from "@/components/TimelineItem";
import { HybridSkillMatrix } from "@/components/HybridSkillMatrix";

export default function ExperiencePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-20">
      {/* Page Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FFE600]/10 border border-[#FFE600]/30 text-[#FFE600] text-xs font-mono">
          <Briefcase className="w-3.5 h-3.5" />
          <span>CAREER TRAJECTORY & HYBRID COMPETENCIES</span>
        </div>
        <h1 className="font-mono text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Production Experience, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFE600] via-[#00F0FF] to-[#A855F7]">
            Foundations & Certifications
          </span>
        </h1>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-sans">
          A track record spanning enterprise stream engineering at DataSturdy (Tata Power, Flipkart Ads,
          Bajaj Broking), frontier LLM red-teaming & RLHF at Outlier.AI, and healthcare BI at AffordPlan.
        </p>
      </div>

      {/* Vertical Animated Timeline */}
      <section aria-label="Professional Experience Timeline" className="space-y-8">
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center space-x-2 text-xs font-mono text-[#00F0FF] uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse" />
            <span>Chronological Deployments & Production Roles</span>
          </div>
          <a
            href="/Praveen_T_FlowCV_Resume_2026-10-01 (1).pdf"
            download="Praveen_T_Data_Engineer_Resume.pdf"
            className="flex items-center space-x-1.5 text-xs font-mono text-[#FFE600] hover:underline"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>Download Official Resume PDF</span>
          </a>
        </div>

        <div className="relative pl-2 sm:pl-4">
          {EXPERIENCES.map((exp, idx) => (
            <TimelineItem key={exp.company} item={exp} index={idx} />
          ))}
        </div>
      </section>

      {/* Hybrid Skill Showcase */}
      <HybridSkillMatrix />

      {/* Education & Certifications Grid */}
      <section aria-label="Education and Certifications" className="space-y-8">
        <div className="pb-4 border-b border-white/10">
          <h2 className="font-mono text-2xl font-bold text-white flex items-center space-x-2">
            <GraduationCap className="w-5 h-5 text-[#39FF14]" />
            <span>Formal Education & Verified Credentials</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education Column */}
          <div className="space-y-4">
            <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-[#39FF14]">
              // Academic Background
            </h3>
            <div className="space-y-4">
              {EDUCATION.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl glass-panel border border-white/10 space-y-2 hover:border-[#39FF14]/40 transition-colors"
                >
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#39FF14] font-bold">{edu.period}</span>
                    <span className="text-zinc-500">{edu.location}</span>
                  </div>
                  <h4 className="font-mono text-lg font-bold text-white">
                    {edu.degree}
                  </h4>
                  <div className="text-xs font-mono text-zinc-300">
                    {edu.institution}
                  </div>
                  <p className="text-xs text-zinc-400 font-sans pt-2">
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div className="space-y-4">
            <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-[#00F0FF]">
              // Professional Certifications
            </h3>
            <div className="space-y-4">
              {CERTIFICATIONS.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl glass-panel border border-white/10 flex flex-col justify-between hover:border-[#00F0FF]/40 transition-colors group"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono mb-1">
                      <span className="text-zinc-400">{cert.issuer}</span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#00F0FF]/10 text-[#00F0FF] border border-[#00F0FF]/20">
                        {cert.badge}
                      </span>
                    </div>
                    <h4 className="font-mono text-base font-bold text-white group-hover:text-glow-cyan transition-colors">
                      {cert.name}
                    </h4>
                    <p className="text-xs text-zinc-400 font-sans mt-1">
                      {cert.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
