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
} from "lucide-react";

interface PipelineStep {
  id: string;
  name: string;
  icon: any;
  tech: string;
  role: string;
  telemetry: string;
  detail: string;
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
  },
  {
    id: "transport",
    name: "02. Event Ingestion",
    icon: Radio,
    tech: "Apache Kafka (3 Nodes) • Cross-Cloud VPN",
    role: "Fault-Tolerant Distributed Queuing",
    telemetry: "RF=3 • Encrypted Transit • Zero Loss",
    detail: "High-throughput partitioned Kafka clusters securing cross-cloud telemetry through encrypted VPN tunnels with strict network routing.",
  },
  {
    id: "processing",
    name: "03. Stateful Stream Processing",
    icon: Cpu,
    tech: "Apache Flink (5 Nodes) • Beam • RocksDB",
    role: "Exactly-Once Stateful Deduplication",
    telemetry: "Sub-ms state lookups • 21x spike resilience",
    detail: "Sliding window deduplication with RocksDB state backends and Aerospike sub-millisecond cache lookups handling Flipkart Big Billion Days scale.",
  },
  {
    id: "olap-ai",
    name: "04. Real-Time OLAP & AI",
    icon: Server,
    tech: "ClickHouse (9 Nodes) • Gemini 3.5 • Mistral",
    role: "Distributed Columnar Storage & LLM Reasoning",
    telemetry: "<2s end-to-end freshness • SEBI Rule Verified",
    detail: "Distributed 9-node ClickHouse clusters powering instant stage-level queries, combined with Gemini 3.5 & Mistral for automated SEBI compliance.",
  },
  {
    id: "serving",
    name: "05. Observability & BI",
    icon: BarChart3,
    tech: "Grafana • Superset • Databricks Workloads",
    role: "Live Stage Telemetry & Analytics",
    telemetry: "99.9% SLA • Production Dashboards",
    detail: "Real-time Grafana pipeline health monitoring, Apache Superset semantic layers, and automated daily data sanity reconciliation frameworks.",
  },
];

export function ArchitectureDiagram() {
  const [activeStep, setActiveStep] = useState<string>("processing");

  const currentStep =
    PIPELINE_STEPS.find((s) => s.id === activeStep) || PIPELINE_STEPS[2];

  return (
    <div className="rounded-xl bg-[#18181B] p-6 sm:p-8 border border-[#27272A] relative">
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-6 border-b border-[#27272A] gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
            <span className="font-mono text-xs font-semibold text-[#FAFAFA] uppercase tracking-widest">
              Pipeline Topology Simulation
            </span>
          </div>
          <h3 className="font-sans text-xl sm:text-2xl font-semibold tracking-tight text-[#FAFAFA] mt-1">
            End-to-End Enterprise Data Flow
          </h3>
        </div>
        <div className="text-xs font-mono text-[#A1A1AA] bg-[#09090B] px-3 py-1.5 rounded border border-[#27272A] self-start md:self-auto">
          SELECT STAGE TO INSPECT
        </div>
      </div>

      {/* Step Pills Navigation */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 mb-6">
        {PIPELINE_STEPS.map((step) => {
          const Icon = step.icon;
          const isSelected = step.id === activeStep;
          return (
            <button
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={`p-3.5 rounded-lg border text-left transition-colors relative flex flex-col justify-between ${
                isSelected
                  ? "bg-[#09090B] border-[#10B981] text-[#FAFAFA]"
                  : "bg-[#09090B]/60 border-[#27272A] text-[#A1A1AA] hover:border-[#3F3F46] hover:text-[#FAFAFA]"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <Icon
                  className={`w-4 h-4 ${
                    isSelected ? "text-[#10B981]" : "text-[#A1A1AA]"
                  }`}
                />
                {isSelected && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                )}
              </div>
              <div className="font-mono text-xs font-semibold">
                {step.name}
              </div>
              <div className="font-sans text-[11px] text-[#A1A1AA] mt-1 truncate">
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
        transition={{ duration: 0.25 }}
        className="p-5 sm:p-6 rounded-lg bg-[#09090B] border border-[#27272A]"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-2">
            <div className="flex items-center space-x-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium uppercase tracking-wider bg-[#18181B] border border-[#27272A] text-[#10B981]">
                {currentStep.role}
              </span>
              <span className="text-[#A1A1AA] font-mono text-xs">
                TELEMETRY INSPECTOR
              </span>
            </div>

            <h4 className="font-sans text-base sm:text-lg font-semibold tracking-tight text-[#FAFAFA]">
              {currentStep.name}: {currentStep.tech}
            </h4>

            <p className="text-[#A1A1AA] text-xs sm:text-sm leading-relaxed font-sans pt-1">
              {currentStep.detail}
            </p>
          </div>

          <div className="space-y-2 bg-[#18181B] p-4 rounded-lg border border-[#27272A] flex flex-col justify-center">
            <div className="text-[10px] font-mono text-[#A1A1AA] uppercase tracking-wider">
              Telemetry & SLA Guarantee
            </div>
            <div className="font-mono font-semibold text-xs sm:text-sm text-[#FAFAFA]">
              {currentStep.telemetry}
            </div>
            <div className="flex items-center space-x-1.5 text-xs text-[#10B981] pt-2 border-t border-[#27272A] font-mono">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Verified in Production</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
