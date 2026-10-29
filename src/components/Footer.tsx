"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Terminal, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { PERSONAL_INFO } from "@/lib/portfolioData";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#050505]/95 backdrop-blur-xl mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Info & Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-black border border-[#00F0FF]/40 text-[#00F0FF]">
                <Terminal className="w-4 h-4" />
              </div>
              <span className="font-mono text-base font-bold text-white tracking-widest uppercase">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-zinc-400 text-sm max-w-md leading-relaxed font-sans">
              Data & AI Pipeline Engineer specialized in Petabyte-Scale streaming systems,
              real-time CDC for solar manufacturing, and adversarial red-teaming for frontier LLMs.
              Merging deep backend infrastructure with high-end graphic design and algorithmic SEO/GEO.
            </p>
            <div className="flex items-center space-x-3 pt-2 text-xs font-mono text-zinc-400">
              <span className="flex items-center space-x-1.5 text-[#39FF14]">
                <span className="w-2 h-2 rounded-full bg-[#39FF14] animate-ping inline-block" />
                <span>ONLINE FOR OPPORTUNITIES</span>
              </span>
              <span>•</span>
              <span className="flex items-center space-x-1 text-zinc-400">
                <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                <span>{PERSONAL_INFO.location}</span>
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-3">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#00F0FF]">
              Architecture Navigation
            </h3>
            <ul className="space-y-2 text-sm font-mono">
              <li>
                <Link
                  href="/"
                  className="text-zinc-400 hover:text-white hover:text-glow-cyan transition-colors"
                >
                  // 01. Overview & Metrics
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-zinc-400 hover:text-white hover:text-glow-cyan transition-colors"
                >
                  // 02. Case Studies & Proofs
                </Link>
              </li>
              <li>
                <Link
                  href="/experience"
                  className="text-zinc-400 hover:text-white hover:text-glow-cyan transition-colors"
                >
                  // 03. Experience & Hybrid Skills
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-zinc-400 hover:text-white hover:text-glow-cyan transition-colors"
                >
                  // 04. Contact Terminal
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Direct Connect */}
          <div className="space-y-3">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#FFE600]">
              Direct Ingestion
            </h3>
            <ul className="space-y-2.5 text-sm font-mono text-zinc-400">
              <li>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center space-x-2 hover:text-[#00F0FF] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#00F0FF]" />
                  <span className="truncate">{PERSONAL_INFO.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, "")}`}
                  className="flex items-center space-x-2 hover:text-[#FFE600] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#FFE600]" />
                  <span>{PERSONAL_INFO.phone}</span>
                </a>
              </li>
              <li className="flex items-center space-x-3 pt-1">
                <a
                  href={PERSONAL_INFO.gitHub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-[#00F0FF] text-zinc-300 hover:text-white transition-all"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-[#00F0FF] text-zinc-300 hover:text-[#00F0FF] transition-all"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: System Telemetry & SEO Tags */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs font-mono text-zinc-500 gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-zinc-600">GEO INDEX:</span>
            <span className="text-zinc-400">Apache Spark</span>
            <span>•</span>
            <span className="text-zinc-400">Real-Time CDC</span>
            <span>•</span>
            <span className="text-zinc-400">Kafka & Flink</span>
            <span>•</span>
            <span className="text-zinc-400">LLM Red-Teaming</span>
            <span>•</span>
            <span className="text-zinc-400">SEBI Compliance</span>
            <span>•</span>
            <span className="text-zinc-400">AEO/GEO</span>
          </div>

          <div className="flex items-center space-x-2 text-zinc-400">
            <span>© 2026 {PERSONAL_INFO.name}. Built with Next.js & Obsidian Matrix</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
