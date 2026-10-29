"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  Terminal,
  FolderGit2,
  Briefcase,
  Mail,
  Menu,
  X,
  FileDown,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { PERSONAL_INFO } from "@/lib/portfolioData";

export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
          timeZone: "Asia/Kolkata",
        }) + " IST"
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { name: "Overview", href: "/", icon: Terminal },
    { name: "Projects & Architecture", href: "/projects", icon: FolderGit2 },
    { name: "Experience & Hybrid Skills", href: "/experience", icon: Briefcase },
    { name: "Contact Terminal", href: "/contact", icon: Mail },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-3">
      <div className="max-w-7xl mx-auto">
        <nav
          aria-label="Main Navigation"
          className="relative flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-2xl glass-panel border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.8)] backdrop-blur-xl"
        >
          {/* Brand & HUD Status */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <Link
              href="/"
              className="flex items-center space-x-2.5 group focus:outline-none focus:ring-2 focus:ring-[#00F0FF] rounded-lg p-1"
            >
              <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-black border border-[#00F0FF]/40 text-[#00F0FF] group-hover:border-[#00F0FF] group-hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all">
                <span className="font-mono font-bold text-sm">PT</span>
                <span className="absolute -top-1 -right-1 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F0FF] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00F0FF]"></span>
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-xs font-bold tracking-widest text-white uppercase group-hover:text-[#00F0FF] transition-colors">
                  {PERSONAL_INFO.name}
                </span>
                <span className="text-[10px] font-mono text-[#00F0FF] tracking-wider hidden sm:inline">
                  DATA & AI PIPELINE ENG
                </span>
              </div>
            </Link>

            {/* Live Telemetry Ticker (Desktop) */}
            <div className="hidden xl:flex items-center space-x-2 pl-3 border-l border-white/10 text-[11px] font-mono text-zinc-400">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#39FF14] animate-pulse" />
              <span className="text-[#39FF14] font-medium">PIPELINES HEALTHY</span>
              <span className="text-zinc-600">|</span>
              <span className="text-zinc-400">CDC SYNC: 100%</span>
              <span className="text-zinc-600">|</span>
              <span className="text-zinc-300">{currentTime || "LIVE"}</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 rounded-lg text-xs font-mono tracking-wide transition-all duration-200 flex items-center space-x-1.5 ${
                    isActive
                      ? "text-[#00F0FF] bg-[#00F0FF]/10 font-semibold shadow-[0_0_12px_rgba(0,240,255,0.15)] border border-[#00F0FF]/30"
                      : "text-zinc-300 hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{link.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-2 right-2 h-[2px] bg-[#00F0FF]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Actions & Socials */}
          <div className="hidden sm:flex items-center space-x-2.5">
            <a
              href={PERSONAL_INFO.gitHub}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-1.5 rounded-lg text-zinc-400 hover:text-[#00F0FF] hover:bg-white/[0.06] transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="/Praveen_T_FlowCV_Resume_2026-10-01 (1).pdf"
              target="_blank"
              download="Praveen_T_Data_Engineer_Resume.pdf"
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#FFE600]/10 border border-[#FFE600]/40 text-[#FFE600] text-xs font-mono font-medium hover:bg-[#FFE600]/20 hover:shadow-[0_0_15px_rgba(255,230,0,0.3)] transition-all"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center space-x-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="p-2 rounded-lg text-zinc-300 hover:text-white hover:bg-white/10"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5 text-[#00F0FF]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="sm:hidden mt-2 p-4 rounded-xl glass-panel border border-[#00F0FF]/30 space-y-2 shadow-2xl"
            >
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-[11px] font-mono text-[#39FF14]">
                <span>STATUS: OPERATIONAL</span>
                <span>{currentTime}</span>
              </div>
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                const Icon = link.icon;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-mono ${
                      isActive
                        ? "text-[#00F0FF] bg-[#00F0FF]/15 border border-[#00F0FF]/40 font-bold"
                        : "text-zinc-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{link.name}</span>
                  </Link>
                );
              })}
              <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                <div className="flex space-x-2">
                  <a
                    href={PERSONAL_INFO.gitHub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-zinc-400 hover:text-white bg-white/5"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={PERSONAL_INFO.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-zinc-400 hover:text-[#00F0FF] bg-white/5"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                </div>
                <a
                  href="/Praveen_T_FlowCV_Resume_2026-10-01 (1).pdf"
                  download="Praveen_T_Data_Engineer_Resume.pdf"
                  className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#FFE600]/15 border border-[#FFE600]/50 text-[#FFE600] text-xs font-mono"
                >
                  <FileDown className="w-3.5 h-3.5" />
                  <span>Resume</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
