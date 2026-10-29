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
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    const accessKey =
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
      "d2c686fa-072b-462d-966b-02cdf2447f22";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: `[Portfolio Inquiry] ${formData.subject} (${formData.projectScope})`,
          domain: formData.projectScope,
          message: formData.message,
          from_name: formData.name,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
      } else {
        setErrorMessage(
          data.message || "Failed to dispatch payload. Please contact directly via email."
        );
      }
    } catch {
      setErrorMessage(
        "Network connection error. Please email praveenbenakannanavar@outlook.com directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      {/* Page Header */}
      <div className="space-y-3 max-w-3xl">
        <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded bg-[#18181B] border border-[#27272A] text-[#10B981] text-xs font-mono">
          <Terminal className="w-3.5 h-3.5" />
          <span>CONTACT TERMINAL</span>
        </div>
        <h1 className="font-sans text-3xl sm:text-5xl font-extrabold text-[#FAFAFA] tracking-tight">
          Initialize Connection.
        </h1>
        <p className="text-[#A1A1AA] text-sm sm:text-base leading-relaxed font-sans">
          Available for senior Data Engineering, Streaming Architecture (Spark, Flink, Kafka),
          Frontier AI Red-Teaming, and hybrid technical design projects.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Credentials & Status (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          {/* Status HUD Panel */}
          <div className="p-6 rounded-xl bg-[#18181B] border border-[#27272A] space-y-3">
            <div className="flex items-center justify-between pb-3 border-b border-[#27272A] text-xs font-mono">
              <span className="text-[#FAFAFA] flex items-center space-x-1.5 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                <span>{PERSONAL_INFO.status}</span>
              </span>
              <span className="text-[#A1A1AA]">BANGALORE</span>
            </div>

            <p className="text-[#A1A1AA] text-sm font-sans leading-relaxed">
              Rapid turnaround on architecture reviews, distributed system audits,
              and high-throughput pipeline design.
            </p>

            <div className="flex items-center space-x-2 text-xs font-mono text-[#A1A1AA] pt-1">
              <Clock className="w-3.5 h-3.5 text-[#10B981]" />
              <span>Response Window: Typically &lt; 4 hours</span>
            </div>
          </div>

          {/* Direct Details Grid */}
          <div className="space-y-2.5 font-mono text-xs">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-4 rounded-xl bg-[#18181B] border border-[#27272A] hover:border-[#3F3F46] flex items-center space-x-3 text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors"
            >
              <div className="p-2.5 rounded-lg bg-[#09090B] border border-[#27272A] text-[#FAFAFA]">
                <Mail className="w-4 h-4" />
              </div>
              <div className="flex-1 truncate">
                <div className="text-[10px] text-[#A1A1AA] uppercase">Email</div>
                <div className="font-semibold text-sm text-[#FAFAFA] truncate">
                  {PERSONAL_INFO.email}
                </div>
              </div>
            </a>

            <a
              href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, "")}`}
              className="p-4 rounded-xl bg-[#18181B] border border-[#27272A] hover:border-[#3F3F46] flex items-center space-x-3 text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors"
            >
              <div className="p-2.5 rounded-lg bg-[#09090B] border border-[#27272A] text-[#FAFAFA]">
                <Phone className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <div className="text-[10px] text-[#A1A1AA] uppercase">Phone</div>
                <div className="font-semibold text-sm text-[#FAFAFA]">
                  {PERSONAL_INFO.phone}
                </div>
              </div>
            </a>

            <div className="p-4 rounded-xl bg-[#18181B] border border-[#27272A] flex items-center space-x-3 text-[#A1A1AA]">
              <div className="p-2.5 rounded-lg bg-[#09090B] border border-[#27272A] text-[#FAFAFA]">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <div className="text-[10px] text-[#A1A1AA] uppercase">Location</div>
                <div className="font-semibold text-sm text-[#FAFAFA]">
                  {PERSONAL_INFO.location}
                </div>
              </div>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="p-5 rounded-xl bg-[#18181B] border border-[#27272A] space-y-3">
            <div className="text-xs font-mono text-[#A1A1AA] uppercase tracking-wider">
              Network Profiles & Code
            </div>
            <div className="grid grid-cols-2 gap-2.5 font-mono text-xs">
              <a
                href={PERSONAL_INFO.gitHub}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-[#09090B] border border-[#27272A] hover:border-[#A1A1AA] text-[#A1A1AA] hover:text-[#FAFAFA] flex items-center space-x-2 transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-[#FAFAFA]" />
                <span className="font-medium">GitHub</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-[#09090B] border border-[#27272A] hover:border-[#A1A1AA] text-[#A1A1AA] hover:text-[#FAFAFA] flex items-center space-x-2 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 text-[#FAFAFA]" />
                <span className="font-medium">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Terminal Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-xl bg-[#18181B] border border-[#27272A]">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#27272A]">
              <div className="flex items-center space-x-2">
                <Terminal className="w-4 h-4 text-[#10B981]" />
                <h2 className="font-sans text-base font-bold tracking-tight text-[#FAFAFA]">
                  Send Message
                </h2>
              </div>
              <span className="text-[10px] font-mono text-[#A1A1AA]">
                DIRECT SINK
              </span>
            </div>

            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-14 h-14 rounded-full bg-[#09090B] border border-[#10B981] text-[#10B981] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="font-sans text-xl font-bold tracking-tight text-[#FAFAFA]">
                    Message Dispatched Successfully
                  </h3>
                  <p className="text-[#A1A1AA] text-sm max-w-md mx-auto font-sans leading-relaxed">
                    Thank you, <strong className="text-[#FAFAFA]">{formData.name}</strong>. Your inquiry has been routed into Praveen&apos;s primary inbox. You will receive a response shortly.
                  </p>
                  <div className="pt-2">
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
                      className="px-4 py-2 rounded-lg bg-[#09090B] border border-[#27272A] font-mono text-xs text-[#FAFAFA] hover:border-[#A1A1AA] transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="block font-mono text-xs text-[#A1A1AA]">
                        // NAME <span className="text-[#10B981]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Your Name"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#09090B] border border-[#27272A] text-[#FAFAFA] placeholder-[#A1A1AA]/50 font-mono text-xs focus:outline-none focus:border-[#10B981] transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="block font-mono text-xs text-[#A1A1AA]">
                        // EMAIL <span className="text-[#10B981]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="you@domain.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#09090B] border border-[#27272A] text-[#FAFAFA] placeholder-[#A1A1AA]/50 font-mono text-xs focus:outline-none focus:border-[#10B981] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {/* Project Scope */}
                    <div className="space-y-1.5">
                      <label className="block font-mono text-xs text-[#A1A1AA]">
                        // DOMAIN
                      </label>
                      <select
                        value={formData.projectScope}
                        onChange={(e) =>
                          setFormData({ ...formData, projectScope: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#09090B] border border-[#27272A] text-[#FAFAFA] font-mono text-xs focus:outline-none focus:border-[#10B981] transition-colors"
                      >
                        <option value="Data Engineering / Streaming">
                          Data Engineering (Spark, Flink, Kafka)
                        </option>
                        <option value="Change Data Capture (CDC)">
                          Change Data Capture (Debezium, MSSQL)
                        </option>
                        <option value="Frontier AI & Red-Teaming">
                          Frontier AI & Red-Teaming (RLHF)
                        </option>
                        <option value="Database Performance Tuning">
                          Database Performance Tuning (MSSQL)
                        </option>
                        <option value="Digital Marketing / GEO / SEO">
                          Digital Marketing / GEO / Visual Design
                        </option>
                        <option value="Other">Full-Time / Advisory / Other</option>
                      </select>
                    </div>

                    {/* Subject */}
                    <div className="space-y-1.5">
                      <label className="block font-mono text-xs text-[#A1A1AA]">
                        // SUBJECT <span className="text-[#10B981]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        placeholder="e.g. Scaling Real-Time CDC"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#09090B] border border-[#27272A] text-[#FAFAFA] placeholder-[#A1A1AA]/50 font-mono text-xs focus:outline-none focus:border-[#10B981] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="block font-mono text-xs text-[#A1A1AA]">
                      // MESSAGE <span className="text-[#10B981]">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Outline your requirements or timeline..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#09090B] border border-[#27272A] text-[#FAFAFA] placeholder-[#A1A1AA]/50 font-mono text-xs focus:outline-none focus:border-[#10B981] transition-colors resize-y"
                    />
                  </div>

                  {/* Error Alert */}
                  {errorMessage && (
                    <div className="p-3 rounded-lg bg-[#09090B] border border-red-500/40 text-red-400 text-xs font-mono">
                      {errorMessage}
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-lg bg-[#10B981] text-[#09090B] font-sans font-semibold text-xs uppercase tracking-wider hover:opacity-90 disabled:opacity-50 transition-opacity flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-3.5 h-3.5 border-2 border-[#09090B] border-t-transparent rounded-full animate-spin" />
                        <span>Transmitting...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Dispatch Message</span>
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
