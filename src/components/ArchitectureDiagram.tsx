"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Database,
  Radio,
  Cpu,
  Server,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  ShieldAlert,
} from "lucide-react";

interface PipelineStep {
  id: string;
  name: string;
  icon: any;
  tech: string;
  role: string;
  telemetry: string;
  detail: string;
  accent: string;
}

const PIPELINE_STEPS: PipelineStep[] = [
  {
    id: "source",
    name: "01. Source Capture",
    icon: Database,
    tech: "MSSQL (24 Tables) • Telephony Audio • Pub/Sub",
    role: "Transaction Log Mining & CDC",
    telemetry: "0 lock contention • Millisecond capture",
    detail: "Non-locking log-based Change Data Capture via Debezium and streaming audio ingestion pipelines across solar manufacturing and trading.",
    accent: "#00F0FF",
  },
  {
    id: "transport",
    name: "02. Event Ingestion & Transport",
    icon: Radio,
    tech: "Apache Kafka (3 Nodes) • Cross-Cloud VPN",
    role: "Fault-Tolerant Distributed Queuing",
    telemetry: "RF=3 • Encrypted Transit • Zero Loss",
    detail: "High-throughput partitioned Kafka clusters securing cross-cloud telemetry through encrypted VPN tunnels with strict network routing.",
    accent: "#FFE600",
  },
  {
    id: "processing",
    name: "03. Stateful Stream Processing",
    icon: Cpu,
    tech: "Apache Flink (5 Nodes) • Beam • RocksDB",
    role: "Exactly-Once Stateful Deduplication",
    telemetry: "Sub-ms state lookups • 21x spike resilience",
    detail: "Sliding window deduplication with RocksDB state backends and Aerospike sub-millisecond cache lookups handling Flipkart Big Billion Days scale.",
    accent: "#39FF14",
  },
  {
    id: "olap-ai",
    name: "04. Real-Time OLAP & Frontier AI",
    icon: Server,
    tech: "ClickHouse (9 Nodes) • Gemini 3.5 • Mistral",
    role: "Distributed Columnar Storage & LLM Reasoning",
    telemetry: "<2s end-to-end freshness • >98% accuracy",
    detail: "Distributed 9-node ClickHouse clusters powering instant stage-level queries, combined with Gemini 3.5 & Mistral for automated SEBI compliance.",
    accent: "#A855F7",
  },
  {
    id: "serving",
    name: "05. Operational Observability",
    icon: BarChart3,
    tech: "Grafana • Superset • Databricks Workloads",
    role: "Live Stage-Level Telemetry & ML Serving",
    telemetry: "99.9% SLA • Production Dashboards",
    detail: "Real-time Grafana pipeline health monitoring, Apache Superset semantic layers, and automated daily data sanity reconciliation frameworks.",
    accent: "#00F0FF",
  },
];

export function ArchitectureDiagram() {
  const [activeStep, setActiveStep] = useState<string>("processing");

  const currentStep =
    PIPELINE_STEPS.find((s) => s.id === activeStep) || PIPELINE_STEPS[2];

  return (
    <div className="rounded-2xl glass-panel p-6 sm:p-8 border border-white/10 relative overflow-hidden">
      {/* Background Accent Grid */}
      <div className="absolute inset-0 matrix-grid opacity-30 pointer-events-none" />

      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-6 border-b border-white/10 gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#39FF14] animate-ping" />
            <span className="font-mono text-xs font-bold text-[#39FF14] uppercase tracking-widest">
              Live Topology Simulation
            </span>
          </div>
          <h3 className="font-mono text-xl sm:text-2xl font-bold text-white mt-1">
            End-to-End Enterprise Data Pipeline Flow
          </h3>
        </div>
        <div className="text-xs font-mono text-zinc-400 bg-black/60 px-3 py-1.5 rounded-lg border border-white/10 flex items-center space-x-2 self-start md:self-auto">
          <span className="text-[#00F0FF]">TAP A STAGE TO INSPECT TELEMETRY</span>
        </div>
      </div>

      {/* Step Pills Navigation */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
        {PIPELINE_STEPS.map((step) => {
          const Icon = step.icon;
          const isSelected = step.id === activeStep;
          return (
            <button
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={`p-3.5 rounded-xl border text-left transition-all duration-200 relative group flex flex-col justify-between ${
                isSelected
                  ? "bg-black/80 border-[#00F0FF] shadow-[0_0_20px_rgba(0,240,255,0.25)]"
                  : "bg-black/30 border-white/5 hover:border-white/20 hover:bg-white/[0.03]"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <Icon
                  className="w-5 h-5 transition-transform group-hover:scale-110"
                  style={{ color: step.accent }}
                />
                {isSelected && (
                  <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse" />
                )}
              </div>
              <div className="font-mono text-xs font-bold text-white">
                {step.name}
              </div>
              <div className="font-mono text-[10px] text-zinc-400 mt-1 truncate">
                {step.role}
              </div>
            </button>
          );
        })}
      </div>

      {/* Deep-Dive Inspection Card */}
      <motion.div
        key={currentStep.id}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="p-6 rounded-xl bg-black/60 border border-white/10 relative"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center space-x-2">
              <span
                className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold uppercase tracking-wider"
                style={{
                  color: currentStep.accent,
                  backgroundColor: `${currentStep.accent}15`,
                  border: `1px solid ${currentStep.accent}30`,
                }}
              >
                {currentStep.role}
              </span>
              <span className="text-zinc-500 font-mono text-xs">
                TELEMETRY INSPECTOR
              </span>
            </div>

            <h4 className="font-mono text-lg font-bold text-white">
              {currentStep.name}: {currentStep.tech}
            </h4>

            <p className="text-zinc-300 text-sm leading-relaxed font-sans">
              {currentStep.detail}
            </p>
          </div>

          <div className="space-y-3 bg-[#0a0a0f] p-4 rounded-xl border border-white/5 flex flex-col justify-center">
            <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
              Telemetry & SLA Guarantee
            </div>
            <div
              className="font-mono font-bold text-sm"
              style={{ color: currentStep.accent }}
            >
              {currentStep.telemetry}
            </div>
            <div className="flex items-center space-x-2 text-xs text-[#39FF14] pt-2 border-t border-white/5 font-mono">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Verified in Production Deployments</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
