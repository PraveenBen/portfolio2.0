"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExperienceItem } from "@/lib/portfolioData";
import { Building2, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export function TimelineItem({
  item,
  index = 0,
}: {
  item: ExperienceItem;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative pl-8 sm:pl-10 pb-12 last:pb-0 group"
    >
      {/* Vertical Timeline Track Line */}
      <div className="absolute left-2.5 sm:left-3 top-3 bottom-0 w-[2px] bg-gradient-to-b from-[#00F0FF]/60 via-white/10 to-transparent group-last:hidden" />

      {/* Pulsing Node Bullet */}
      <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-black border-2 border-[#00F0FF] flex items-center justify-center group-hover:scale-125 group-hover:shadow-[0_0_15px_#00F0FF] transition-all duration-300">
        <div className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse" />
      </div>

      {/* Main Experience Card */}
      <div className="p-6 sm:p-7 rounded-2xl glass-panel border border-white/10 group-hover:border-[#00F0FF]/40 transition-all duration-300 shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="px-3 py-1 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/30 text-[#00F0FF] text-xs font-mono font-bold tracking-wider uppercase">
            {item.badge}
          </span>
          <div className="flex items-center space-x-3 text-xs font-mono text-zinc-400">
            <span className="flex items-center space-x-1">
              <Calendar className="w-3.5 h-3.5 text-zinc-500" />
              <span>{item.period}</span>
            </span>
            <span>•</span>
            <span className="flex items-center space-x-1">
              <MapPin className="w-3.5 h-3.5 text-zinc-500" />
              <span>{item.location}</span>
            </span>
          </div>
        </div>

        <h3 className="font-mono text-xl sm:text-2xl font-bold text-white group-hover:text-glow-cyan transition-all">
          {item.role}
        </h3>
        <div className="flex items-center space-x-2 text-zinc-300 font-mono text-sm mt-0.5 mb-4">
          <Building2 className="w-4 h-4 text-[#FFE600]" />
          <span className="text-[#FFE600] font-semibold">{item.company}</span>
        </div>

        <p className="text-zinc-300 text-sm font-sans mb-5 leading-relaxed">
          {item.description}
        </p>

        {/* Detailed Bullets */}
        <div className="space-y-2.5 mb-6">
          {item.bullets.map((bullet, bIdx) => (
            <div
              key={bIdx}
              className="flex items-start space-x-2 text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed"
            >
              <span className="text-[#00F0FF] font-mono mt-1 flex-shrink-0">▹</span>
              <span>{bullet}</span>
            </div>
          ))}
        </div>

        {/* Technologies Pills */}
        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
          {item.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-zinc-300 text-[11px] font-mono"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
