"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { KEY_METRICS } from "@/lib/portfolioData";

function CounterItem({
  value,
  prefix = "",
  suffix = "",
  label,
  description,
  delay = 0,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  description: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState<number>(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const duration = 1800; // ms

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(easeOut * value * 10) / 10;
      setDisplayValue(current);

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setDisplayValue(value);
      }
    };

    const timer = setTimeout(() => {
      requestAnimationFrame(animateCount);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [isInView, value, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      className="relative p-5 sm:p-6 rounded-2xl glass-panel glass-panel-hover transition-all duration-300 group overflow-hidden"
    >
      {/* Top accent glow line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00F0FF]/40 to-transparent group-hover:via-[#00F0FF] transition-all" />

      {/* Cyber corner marks */}
      <div className="absolute top-2 right-2 font-mono text-[9px] text-zinc-600 group-hover:text-[#00F0FF] transition-colors">
        [METRIC_INDEX]
      </div>

      <div className="flex items-baseline space-x-1 font-mono font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white group-hover:text-glow-cyan transition-all">
        {prefix && <span className="text-[#00F0FF] text-2xl sm:text-3xl">{prefix}</span>}
        <span>{Number.isInteger(value) ? Math.floor(displayValue) : displayValue.toFixed(1)}</span>
        {suffix && <span className="text-[#00F0FF] text-2xl sm:text-3xl">{suffix}</span>}
      </div>

      <div className="mt-2 font-mono text-xs sm:text-sm font-semibold uppercase tracking-wider text-zinc-200 group-hover:text-[#00F0FF] transition-colors">
        {label}
      </div>

      <p className="mt-1 text-xs text-zinc-400 font-sans leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

export function MetricsCounter() {
  return (
    <section aria-label="Key Engineering Metrics" className="relative z-10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2 mb-6">
          <div className="w-2.5 h-2.5 rounded-full bg-[#00F0FF] animate-pulse" />
          <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-[#00F0FF]">
            Verified Scale & Production Metrics
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
          {KEY_METRICS.map((metric, index) => (
            <CounterItem
              key={metric.id}
              value={metric.value}
              prefix={metric.prefix}
              suffix={metric.suffix}
              label={metric.label}
              description={metric.description}
              delay={index * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
