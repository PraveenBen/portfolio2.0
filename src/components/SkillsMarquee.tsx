"use client";

import React from "react";
import { SKILLS_MARQUEE } from "@/lib/portfolioData";
import { Cpu, Terminal, Zap, Layers, Sparkles } from "lucide-react";

export function SkillsMarquee() {
  const row1 = SKILLS_MARQUEE.slice(0, 11);
  const row2 = SKILLS_MARQUEE.slice(11);

  return (
    <section aria-label="Core Engineering Technologies" className="relative z-10 py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Zap className="w-4 h-4 text-[#FFE600] animate-bounce" />
            <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-[#FFE600]">
              Technology & Creative Stack Marquee
            </h2>
          </div>
          <span className="text-[11px] font-mono text-zinc-500 hidden sm:inline">
            // STREAMING • OLAP • LLM RED-TEAMING • DESIGN
          </span>
        </div>
      </div>

      {/* Row 1 - Left to Right Scroll */}
      <div className="relative w-full overflow-hidden py-2">
        {/* Left & Right Gradient Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center space-x-4">
          {[...row1, ...row1, ...row1].map((skill, idx) => (
            <div
              key={`row1-${idx}`}
              className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-[#0f0f12] border border-white/10 hover:border-[#00F0FF]/60 hover:bg-[#00F0FF]/10 text-zinc-200 hover:text-white transition-all duration-200 group cursor-default whitespace-nowrap shadow-md"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] group-hover:shadow-[0_0_8px_#00F0FF]" />
              <span className="font-mono text-xs font-semibold tracking-wide">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 - Right to Left Scroll */}
      <div className="relative w-full overflow-hidden py-2 mt-2">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee-reverse flex items-center space-x-4">
          {[...row2, ...row2, ...row2].map((skill, idx) => (
            <div
              key={`row2-${idx}`}
              className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-[#0f0f12] border border-white/10 hover:border-[#FFE600]/60 hover:bg-[#FFE600]/10 text-zinc-200 hover:text-white transition-all duration-200 group cursor-default whitespace-nowrap shadow-md"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFE600] group-hover:shadow-[0_0_8px_#FFE600]" />
              <span className="font-mono text-xs font-semibold tracking-wide">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
