"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExperienceItem } from "@/lib/portfolioData";
import { Building2, Calendar, MapPin } from "lucide-react";

export function TimelineItem({
  item,
  index = 0,
}: {
  item: ExperienceItem;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="relative pl-8 sm:pl-10 pb-10 last:pb-0 group"
    >
      {/* Vertical Timeline Track Line */}
      <div className="absolute left-2.5 sm:left-3 top-3 bottom-0 w-[1px] bg-[#27272A] group-last:hidden" />

      {/* Node Bullet */}
      <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-[#09090B] border border-[#27272A] group-hover:border-[#10B981] flex items-center justify-center transition-colors">
        <div className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
      </div>

      {/* Main Experience Card */}
      <div className="p-6 sm:p-7 rounded-xl bg-[#18181B] border border-[#27272A] hover:border-[#3F3F46] transition-colors">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="px-2.5 py-0.5 rounded text-[11px] font-mono tracking-wider uppercase bg-[#09090B] border border-[#27272A] text-[#10B981]">
            {item.badge}
          </span>
          <div className="flex items-center space-x-3 text-xs font-mono text-[#A1A1AA]">
            <span className="flex items-center space-x-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>{item.period}</span>
            </span>
            <span>•</span>
            <span className="flex items-center space-x-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>{item.location}</span>
            </span>
          </div>
        </div>

        <h3 className="font-sans text-xl sm:text-2xl font-semibold tracking-tight text-[#FAFAFA]">
          {item.role}
        </h3>
        <div className="flex items-center space-x-2 text-[#A1A1AA] font-sans text-sm mt-0.5 mb-4">
          <Building2 className="w-4 h-4 text-[#A1A1AA]" />
          <span className="text-[#FAFAFA] font-medium">{item.company}</span>
        </div>

        <p className="text-[#A1A1AA] text-sm font-sans mb-5 leading-relaxed">
          {item.description}
        </p>

        {/* Detailed Bullets */}
        <div className="space-y-2 mb-6">
          {item.bullets.map((bullet, bIdx) => (
            <div
              key={bIdx}
              className="flex items-start space-x-2 text-xs sm:text-sm text-[#A1A1AA] font-sans leading-relaxed"
            >
              <span className="text-[#10B981] font-mono mt-0.5 flex-shrink-0">▹</span>
              <span>{bullet}</span>
            </div>
          ))}
        </div>

        {/* Technologies Pills */}
        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#27272A]">
          {item.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded bg-[#09090B] border border-[#27272A] text-[#A1A1AA] text-[11px] font-mono"
            >
              [{tech}]
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
