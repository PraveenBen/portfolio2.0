"use client";

import React from "react";
import {
  Briefcase,
  GraduationCap,
  FileDown,
} from "lucide-react";
import {
  EXPERIENCES,
  EDUCATION,
  CERTIFICATIONS,
} from "@/lib/portfolioData";
import { TimelineItem } from "@/components/TimelineItem";
import { HybridSkillMatrix } from "@/components/HybridSkillMatrix";

export default function ExperiencePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Page Header */}
      <div className="space-y-3 max-w-3xl">
        <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded bg-[#18181B] border border-[#27272A] text-[#10B981] text-xs font-mono">
          <Briefcase className="w-3.5 h-3.5" />
          <span>CAREER TRAJECTORY & COMPETENCIES</span>
        </div>
        <h1 className="font-sans text-3xl sm:text-5xl font-semibold text-[#FAFAFA] tracking-tight">
          Production Experience & Credentials.
        </h1>
        <p className="text-[#A1A1AA] text-sm sm:text-base leading-relaxed font-sans">
          A track record spanning enterprise stream engineering at DataSturdy (Tata Power, Flipkart Ads,
          Bajaj Broking), frontier LLM red-teaming & RLHF at Outlier.AI, and healthcare BI at AffordPlan.
        </p>
      </div>

      {/* Vertical Animated Timeline */}
      <section aria-label="Professional Experience Timeline" className="space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-[#27272A]">
          <div className="flex items-center space-x-2 text-xs font-mono text-[#FAFAFA] uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
            <span>Chronological Production Roles</span>
          </div>
          <a
            href="/Praveen_T_FlowCV_Resume_2026-10-01 (1).pdf"
            download="Praveen_T_Data_Engineer_Resume.pdf"
            className="flex items-center space-x-1.5 text-xs font-mono text-[#FAFAFA] hover:text-[#10B981] transition-colors"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>Download Official Resume PDF</span>
          </a>
        </div>

        <div className="relative pl-1 sm:pl-2">
          {EXPERIENCES.map((exp, idx) => (
            <TimelineItem key={exp.company} item={exp} index={idx} />
          ))}
        </div>
      </section>

      {/* Core Technical Competencies */}
      <HybridSkillMatrix />

      {/* Education & Certifications Grid */}
      <section aria-label="Education and Certifications" className="space-y-6">
        <div className="pb-3 border-b border-[#27272A]">
          <h2 className="font-sans text-xl sm:text-2xl font-semibold tracking-tight text-[#FAFAFA] flex items-center space-x-2">
            <GraduationCap className="w-5 h-5 text-[#A1A1AA]" />
            <span>Education & Verified Credentials</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Education Column */}
          <div className="space-y-3">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#FAFAFA]">
              // Academic Background
            </h3>
            <div className="space-y-3">
              {EDUCATION.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-[#18181B] border border-[#27272A] space-y-1.5 hover:border-[#3F3F46] transition-colors"
                >
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#10B981]">{edu.period}</span>
                    <span className="text-[#A1A1AA]">{edu.location}</span>
                  </div>
                  <h4 className="font-sans text-base font-semibold text-[#FAFAFA] tracking-tight">
                    {edu.degree}
                  </h4>
                  <div className="text-xs font-mono text-[#A1A1AA]">
                    {edu.institution}
                  </div>
                  <p className="text-xs text-[#A1A1AA] font-sans pt-1">
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div className="space-y-3">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#FAFAFA]">
              // Professional Certifications
            </h3>
            <div className="space-y-3">
              {CERTIFICATIONS.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#18181B] border border-[#27272A] flex flex-col justify-between hover:border-[#3F3F46] transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono mb-1">
                      <span className="text-[#A1A1AA]">{cert.issuer}</span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#09090B] text-[#FAFAFA] border border-[#27272A]">
                        {cert.badge}
                      </span>
                    </div>
                    <h4 className="font-sans text-sm font-semibold tracking-tight text-[#FAFAFA]">
                      {cert.name}
                    </h4>
                    <p className="text-xs text-[#A1A1AA] font-sans mt-1">
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
