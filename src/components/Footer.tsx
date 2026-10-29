"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { PERSONAL_INFO } from "@/lib/portfolioData";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-[#27272A] bg-[#09090B] mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Info & Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-[#18181B] border border-[#27272A] text-[#FAFAFA]">
                <Terminal className="w-3.5 h-3.5" />
              </div>
              <span className="font-sans text-sm font-semibold text-[#FAFAFA] tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-[#A1A1AA] text-sm max-w-md leading-relaxed font-sans">
              Data & AI Pipeline Engineer specialized in Petabyte-Scale streaming systems,
              real-time CDC for solar manufacturing, and adversarial red-teaming for frontier LLMs.
            </p>
            <div className="flex items-center space-x-3 pt-2 text-xs font-mono text-[#A1A1AA]">
              <span className="flex items-center space-x-1.5 text-[#FAFAFA]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] inline-block" />
                <span>ONLINE FOR OPPORTUNITIES</span>
              </span>
              <span>•</span>
              <span className="flex items-center space-x-1 text-[#A1A1AA]">
                <MapPin className="w-3.5 h-3.5 text-[#A1A1AA]" />
                <span>{PERSONAL_INFO.location}</span>
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-3">
            <h3 className="font-mono text-xs font-medium uppercase tracking-wider text-[#FAFAFA]">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm font-sans">
              <li>
                <Link
                  href="/"
                  className="text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors"
                >
                  Overview & Metrics
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors"
                >
                  Case Studies & Proofs
                </Link>
              </li>
              <li>
                <Link
                  href="/experience"
                  className="text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors"
                >
                  Experience & Skills
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors"
                >
                  Contact Terminal
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Direct Connect */}
          <div className="space-y-3">
            <h3 className="font-mono text-xs font-medium uppercase tracking-wider text-[#FAFAFA]">
              Contact
            </h3>
            <ul className="space-y-2.5 text-sm font-sans text-[#A1A1AA]">
              <li>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center space-x-2 hover:text-[#FAFAFA] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#A1A1AA]" />
                  <span className="truncate">{PERSONAL_INFO.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, "")}`}
                  className="flex items-center space-x-2 hover:text-[#FAFAFA] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#A1A1AA]" />
                  <span>{PERSONAL_INFO.phone}</span>
                </a>
              </li>
              <li className="flex items-center space-x-2 pt-1">
                <a
                  href={PERSONAL_INFO.gitHub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#18181B] border border-[#27272A] text-[#A1A1AA] hover:text-[#FAFAFA] hover:border-[#A1A1AA] transition-colors"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#18181B] border border-[#27272A] text-[#A1A1AA] hover:text-[#FAFAFA] hover:border-[#A1A1AA] transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-[#27272A] flex flex-col md:flex-row items-center justify-between text-xs font-mono text-[#A1A1AA] gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span>Apache Spark</span>
            <span>•</span>
            <span>Real-Time CDC</span>
            <span>•</span>
            <span>Kafka & Flink</span>
            <span>•</span>
            <span>LLM Red-Teaming</span>
            <span>•</span>
            <span>ClickHouse & OLAP</span>
          </div>

          <div>
            <span>© 2026 {PERSONAL_INFO.name}. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
