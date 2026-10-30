"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
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
    { name: "Projects", href: "/projects", icon: FolderGit2 },
    { name: "Experience", href: "/experience", icon: Briefcase },
    { name: "Contact", href: "/contact", icon: Mail },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-3.5">
      <div className="max-w-7xl mx-auto">
        <nav
          aria-label="Main Navigation"
          className="relative flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-xl bg-[#18181B]/80 border border-[#27272A] backdrop-blur-md shadow-sm"
        >
          {/* Brand & Status */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <Link
              href="/"
              className="flex items-center space-x-2.5 group focus:outline-none"
            >
              <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-[#09090B] border border-[#27272A] p-1 group-hover:border-[#10B981] transition-colors overflow-hidden relative">
                <Image
                  src="/logo.png"
                  alt="Praveen T Logo"
                  width={28}
                  height={28}
                  className="w-full h-full object-contain transition-opacity duration-200 group-hover:opacity-0"
                  priority
                />
                <Image
                  src="/logo-emerald.png"
                  alt=""
                  width={28}
                  height={28}
                  className="w-full h-full object-contain absolute inset-0 p-1 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                  aria-hidden="true"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-sans text-xs font-semibold tracking-tight text-[#FAFAFA] group-hover:text-[#10B981] transition-colors">
                  {PERSONAL_INFO.name}
                </span>
                <span className="text-[10px] font-mono text-[#A1A1AA] tracking-wider hidden sm:inline">
                  DATA & AI PIPELINES
                </span>
              </div>
            </Link>

            {/* Status Telemetry Ticker (Desktop) */}
            <div className="hidden xl:flex items-center space-x-2 pl-3 border-l border-[#27272A] text-[11px] font-mono text-[#A1A1AA]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
              <span className="text-[#FAFAFA]">PIPELINES HEALTHY</span>
              <span className="text-[#27272A]">|</span>
              <span>CDC SYNC: 100%</span>
              <span className="text-[#27272A]">|</span>
              <span>{currentTime || "LIVE"}</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-1.5 rounded-lg text-xs font-sans tracking-tight transition-colors flex items-center space-x-1.5 ${
                    isActive
                      ? "text-[#FAFAFA] font-medium bg-[#27272A]"
                      : "text-[#A1A1AA] hover:text-[#FAFAFA] hover:bg-[#27272A]/50"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{link.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-2 right-2 h-[2px] bg-[#10B981]"
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Actions & Socials */}
          <div className="hidden sm:flex items-center space-x-2">
            <a
              href={PERSONAL_INFO.gitHub}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-1.5 rounded-lg text-[#A1A1AA] hover:text-[#FAFAFA] hover:bg-[#27272A] transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-1.5 rounded-lg text-[#A1A1AA] hover:text-[#FAFAFA] hover:bg-[#27272A] transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="/Praveen_T_FlowCV_Resume_2026-10-01 (1).pdf"
              target="_blank"
              download="Praveen_T_Data_Engineer_Resume.pdf"
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#18181B] border border-[#27272A] text-[#FAFAFA] text-xs font-mono hover:border-[#10B981] hover:text-[#10B981] transition-colors"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>CV</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center space-x-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="p-2 rounded-lg text-[#A1A1AA] hover:text-[#FAFAFA] hover:bg-[#27272A]"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5 text-[#FAFAFA]" /> : <Menu className="w-5 h-5" />}
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
              transition={{ duration: 0.2 }}
              className="sm:hidden mt-2 p-4 rounded-xl bg-[#18181B] border border-[#27272A] space-y-2 shadow-xl"
            >
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#27272A] text-[11px] font-mono text-[#A1A1AA]">
                <span className="flex items-center space-x-1.5 text-[#FAFAFA]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                  <span>OPERATIONAL</span>
                </span>
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
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-sans tracking-tight ${
                      isActive
                        ? "text-[#FAFAFA] bg-[#27272A] font-medium"
                        : "text-[#A1A1AA] hover:text-[#FAFAFA] hover:bg-[#27272A]/50"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{link.name}</span>
                  </Link>
                );
              })}
              <div className="pt-2 border-t border-[#27272A] flex items-center justify-between">
                <div className="flex space-x-2">
                  <a
                    href={PERSONAL_INFO.gitHub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-[#A1A1AA] hover:text-[#FAFAFA] bg-[#09090B]"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={PERSONAL_INFO.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-[#A1A1AA] hover:text-[#FAFAFA] bg-[#09090B]"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                </div>
                <a
                  href="/Praveen_T_FlowCV_Resume_2026-10-01 (1).pdf"
                  download="Praveen_T_Data_Engineer_Resume.pdf"
                  className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#09090B] border border-[#27272A] text-[#FAFAFA] text-xs font-mono hover:border-[#10B981]"
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
