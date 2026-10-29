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
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [displayValue, setDisplayValue] = useState<number>(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const duration = 1600; // ms

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
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
      initial={{ opacity: 0, y: 15 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
      transition={{ duration: 0.4, delay }}
      className="p-5 sm:p-6 rounded-xl bg-[#18181B] border border-[#27272A] hover:border-[#3F3F46] transition-colors flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
          <span className="font-mono text-[10px] text-[#A1A1AA]">
            METRIC
          </span>
        </div>

        <div className="font-mono font-bold text-3xl sm:text-4xl text-[#FAFAFA] tracking-tight">
          {prefix && <span className="text-[#A1A1AA] text-2xl mr-0.5">{prefix}</span>}
          <span>{Number.isInteger(value) ? Math.floor(displayValue) : displayValue.toFixed(1)}</span>
          {suffix && <span className="text-[#10B981] text-2xl ml-0.5">{suffix}</span>}
        </div>
      </div>

      <div className="mt-3">
        <div className="font-mono text-xs font-semibold uppercase tracking-wider text-[#FAFAFA]">
          {label}
        </div>
        <p className="mt-1 text-xs text-[#A1A1AA] font-sans leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export function MetricsCounter() {
  return (
    <section aria-label="Key Engineering Metrics" className="relative z-10 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#10B981]" />
          <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-[#FAFAFA]">
            Scale & Production Metrics
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {KEY_METRICS.map((metric, index) => (
            <CounterItem
              key={metric.id}
              value={metric.value}
              prefix={metric.prefix}
              suffix={metric.suffix}
              label={metric.label}
              description={metric.description}
              delay={index * 0.05}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
