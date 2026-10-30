import React from "react";
import { PROOF_STRIP_METRICS } from "@/lib/portfolioData";
import { ShieldCheck } from "lucide-react";

export function ProofStrip() {
  return (
    <section
      aria-label="Production Performance Proof Strip"
      className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-2 sm:-mt-4"
    >
      <div className="rounded-2xl bg-[#18181B] border border-[#27272A] shadow-2xl p-2 sm:p-3 relative overflow-hidden">
        {/* Subtle Accent Glow Line at top */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#10B981] to-transparent opacity-60" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#27272A]">
          {PROOF_STRIP_METRICS.map((metric, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 flex flex-col justify-between hover:bg-[#09090B]/50 transition-colors rounded-xl"
            >
              {/* Top Badge */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="font-mono text-[10px] tracking-wider uppercase text-[#10B981] px-2 py-0.5 rounded bg-[#09090B] border border-[#27272A]">
                  {metric.badge}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
              </div>

              {/* Main Static Stat in Monospace */}
              <div className="my-1">
                <div className="font-mono text-2xl sm:text-3xl font-semibold text-[#FAFAFA] tracking-tight">
                  {metric.value}
                </div>
              </div>

              {/* Context / Description */}
              <p className="font-mono text-xs text-[#A1A1AA] leading-relaxed mt-2 pt-2 border-t border-[#27272A]/80 font-normal">
                {metric.subtext}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom SLA guarantee footer strip */}
        <div className="mt-2 pt-2.5 pb-1 px-4 border-t border-[#27272A] flex flex-wrap items-center justify-between text-[11px] font-mono text-[#A1A1AA] gap-2">
          <div className="flex items-center space-x-2 text-[#FAFAFA]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
            <span>VERIFIED IN PRODUCTION DEPLOYMENTS</span>
          </div>
          <div className="flex items-center space-x-3 text-[#A1A1AA]">
            <span>ZERO DATA LOSS</span>
            <span>•</span>
            <span>SUB-SECOND OLAP</span>
            <span>•</span>
            <span className="text-[#10B981]">99.9% UPTIME SLA</span>
          </div>
        </div>
      </div>
    </section>
  );
}
