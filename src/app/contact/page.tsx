"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Terminal,
  Clock,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { PERSONAL_INFO } from "@/lib/portfolioData";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    projectScope: "Data Engineering / Streaming",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate immediate ingestion
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Page Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/30 text-[#00F0FF] text-xs font-mono">
          <Terminal className="w-3.5 h-3.5" />
          <span>INGESTION PROTOCOL // CONTACT TERMINAL</span>
        </div>
        <h1 className="font-mono text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Initialize Pipeline Connection, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] via-[#FFE600] to-[#39FF14]">
            Start a High-Impact Collaboration
          </span>
        </h1>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-sans">
          Available for senior Data Engineering, Streaming Architecture (Spark, Flink, Kafka),
          Frontier AI Red-Teaming, and hybrid technical design projects.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Credentials & Status (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Status HUD Panel */}
          <div className="p-6 rounded-2xl glass-panel border border-[#00F0FF]/30 space-y-4 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono">
              <span className="text-[#39FF14] flex items-center space-x-1.5 font-bold">
                <span className="w-2 h-2 rounded-full bg-[#39FF14] animate-ping" />
                <span>STATUS: {PERSONAL_INFO.status}</span>
              </span>
              <span className="text-zinc-500">PORT: 443 [TLS 1.3]</span>
            </div>

            <p className="text-zinc-300 text-sm font-sans leading-relaxed">
              Based in Bangalore, India. Rapid turnaround on architecture reviews,
              distributed system audits, and high-throughput pipeline design.
            </p>

            <div className="flex items-center space-x-2 text-xs font-mono text-zinc-400 pt-1">
              <Clock className="w-3.5 h-3.5 text-[#FFE600]" />
              <span>Response Window: Typically &lt; 4 hours</span>
            </div>
          </div>

          {/* Direct Details Grid */}
          <div className="space-y-3 font-mono text-xs">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-4 rounded-xl glass-panel border border-white/10 hover:border-[#00F0FF] hover:bg-[#00F0FF]/5 flex items-center space-x-3 text-zinc-300 hover:text-white transition-all group"
            >
              <div className="p-2.5 rounded-lg bg-black/60 border border-white/10 text-[#00F0FF]">
                <Mail className="w-4 h-4" />
              </div>
              <div className="flex-1 truncate">
                <div className="text-[10px] text-zinc-500 uppercase">Primary Ingestion Email</div>
                <div className="font-bold text-sm text-white group-hover:text-[#00F0FF] transition-colors truncate">
                  {PERSONAL_INFO.email}
                </div>
              </div>
            </a>

            <a
              href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, "")}`}
              className="p-4 rounded-xl glass-panel border border-white/10 hover:border-[#FFE600] hover:bg-[#FFE600]/5 flex items-center space-x-3 text-zinc-300 hover:text-white transition-all group"
            >
              <div className="p-2.5 rounded-lg bg-black/60 border border-white/10 text-[#FFE600]">
                <Phone className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <div className="text-[10px] text-zinc-500 uppercase">Direct Secure Line</div>
                <div className="font-bold text-sm text-white group-hover:text-[#FFE600] transition-colors">
                  {PERSONAL_INFO.phone}
                </div>
              </div>
            </a>

            <div className="p-4 rounded-xl glass-panel border border-white/10 flex items-center space-x-3 text-zinc-300">
              <div className="p-2.5 rounded-lg bg-black/60 border border-white/10 text-[#39FF14]">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <div className="text-[10px] text-zinc-500 uppercase">Location Coordinate</div>
                <div className="font-bold text-sm text-white">
                  {PERSONAL_INFO.location}
                </div>
              </div>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="p-5 rounded-2xl glass-panel border border-white/10 space-y-3">
            <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
              Network Profiles & Repositories
            </div>
            <div className="grid grid-cols-2 gap-3 font-mono text-xs">
              <a
                href={PERSONAL_INFO.gitHub}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-black/60 border border-white/10 hover:border-[#00F0FF] hover:bg-[#00F0FF]/10 text-zinc-300 hover:text-white flex items-center space-x-2 transition-all"
              >
                <GithubIcon className="w-4 h-4 text-[#00F0FF]" />
                <span className="font-semibold">GitHub Repo</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-black/60 border border-white/10 hover:border-[#00F0FF] hover:bg-[#00F0FF]/10 text-zinc-300 hover:text-white flex items-center space-x-2 transition-all"
              >
                <LinkedinIcon className="w-4 h-4 text-[#00F0FF]" />
                <span className="font-semibold">LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Terminal Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-white/10 relative">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
              <div className="flex items-center space-x-2">
                <Terminal className="w-4 h-4 text-[#00F0FF]" />
                <h2 className="font-mono text-base font-bold text-white">
                  Message Ingestion Protocol
                </h2>
              </div>
              <span className="text-[10px] font-mono text-zinc-500">
                JSON PAYLOAD SINK
              </span>
            </div>

            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-[#39FF14]/10 border border-[#39FF14]/40 text-[#39FF14] flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(57,255,20,0.3)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-mono text-2xl font-bold text-white">
                    Payload Dispatched Successfully!
                  </h3>
                  <p className="text-zinc-300 text-sm max-w-md mx-auto font-sans leading-relaxed">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Your inquiry has been routed into Praveen&apos;s primary inbox. You will receive a response shortly.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setIsSuccess(false);
                        setFormData({
                          name: "",
                          email: "",
                          subject: "",
                          projectScope: "Data Engineering / Streaming",
                          message: "",
                        });
                      }}
                      className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 font-mono text-xs text-white hover:border-[#00F0FF] transition-all"
                    >
                      Send Another Message
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="block font-mono text-xs text-zinc-400">
                        // YOUR NAME / SENDER ID <span className="text-[#00F0FF]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Alex Mercer"
                        className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white placeholder-zinc-600 font-mono text-xs focus:outline-none focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF] transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="block font-mono text-xs text-zinc-400">
                        // RETURN EMAIL ADDRESS <span className="text-[#00F0FF]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="alex@enterprise.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white placeholder-zinc-600 font-mono text-xs focus:outline-none focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Project Scope */}
                    <div className="space-y-1.5">
                      <label className="block font-mono text-xs text-zinc-400">
                        // ARCHITECTURE DOMAIN
                      </label>
                      <select
                        value={formData.projectScope}
                        onChange={(e) =>
                          setFormData({ ...formData, projectScope: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl bg-[#0a0a0f] border border-white/10 text-white font-mono text-xs focus:outline-none focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF] transition-all"
                      >
                        <option value="Data Engineering / Streaming">
                          Data Engineering / Streaming (Spark, Flink, Kafka)
                        </option>
                        <option value="Change Data Capture (CDC)">
                          Change Data Capture (Debezium, MSSQL, ClickHouse)
                        </option>
                        <option value="Frontier AI & Red-Teaming">
                          Frontier AI & Multi-Tool Red-Teaming (RLHF)
                        </option>
                        <option value="Database Performance Tuning">
                          Database Performance Tuning (MSSQL Stored Procs)
                        </option>
                        <option value="Digital Marketing / GEO / SEO">
                          Digital Marketing / GEO / SEO / Visual Design
                        </option>
                        <option value="Other High-Impact Project">
                          Full-Time Role / Advisory / Other
                        </option>
                      </select>
                    </div>

                    {/* Subject */}
                    <div className="space-y-1.5">
                      <label className="block font-mono text-xs text-zinc-400">
                        // SUBJECT LINE <span className="text-[#00F0FF]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        placeholder="e.g. Scaling Real-Time CDC Pipeline"
                        className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white placeholder-zinc-600 font-mono text-xs focus:outline-none focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF] transition-all"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="block font-mono text-xs text-zinc-400">
                      // MESSAGE PAYLOAD & CONTEXT <span className="text-[#00F0FF]">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Outline your data scale, current bottlenecks, infrastructure requirements, or role specifications..."
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder-zinc-600 font-mono text-xs focus:outline-none focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF] transition-all resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-[#00F0FF] text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-[#00F0FF]/90 hover:shadow-[0_0_25px_rgba(0,240,255,0.4)] disabled:opacity-50 transition-all flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-3.5 h-3.5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        <span>Transmitting Packet...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Dispatch Ingestion Payload</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
