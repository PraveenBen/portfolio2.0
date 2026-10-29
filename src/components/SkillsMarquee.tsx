"use client";

import React from "react";
import { SKILLS_MARQUEE } from "@/lib/portfolioData";

export function SkillsMarquee() {
  const row1 = SKILLS_MARQUEE.slice(0, 11);
  const row2 = SKILLS_MARQUEE.slice(11);

  return (
    <section aria-label="Core Engineering Technologies" className="relative z-10 py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
            <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-[#FAFAFA]">
              Engineering Technologies
            </h2>
          </div>
          <span className="text-[11px] font-mono text-[#A1A1AA] hidden sm:inline">
            STREAMING • OLAP • LLM EVALUATION • CLOUD
          </span>
        </div>
      </div>

      {/* Row 1 */}
      <div className="relative w-full overflow-hidden py-1.5">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#09090B] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#09090B] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center space-x-3">
          {[...row1, ...row1, ...row1].map((skill, idx) => (
            <div
              key={`row1-${idx}`}
              className="flex items-center space-x-2 px-3.5 py-1.5 rounded-lg bg-[#18181B] border border-[#27272A] hover:border-[#A1A1AA] text-[#FAFAFA] transition-colors cursor-default whitespace-nowrap text-xs font-mono"
            >
              <span className="w-1 h-1 rounded-full bg-[#10B981]" />
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 */}
      <div className="relative w-full overflow-hidden py-1.5 mt-1.5">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#09090B] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#09090B] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee-reverse flex items-center space-x-3">
          {[...row2, ...row2, ...row2].map((skill, idx) => (
            <div
              key={`row2-${idx}`}
              className="flex items-center space-x-2 px-3.5 py-1.5 rounded-lg bg-[#18181B] border border-[#27272A] hover:border-[#A1A1AA] text-[#FAFAFA] transition-colors cursor-default whitespace-nowrap text-xs font-mono"
            >
              <span className="w-1 h-1 rounded-full bg-[#A1A1AA]" />
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
