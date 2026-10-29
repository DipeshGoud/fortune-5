"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Car,
  Plane,
  HeartPulse,
  ShieldAlert,
  ShieldCheck,
  Phone,
  Clock,
  Scale,
  Search,
  Copy,
  Check,
  ExternalLink,
  ArrowUpRight,
  ChevronRight,
  Sparkles,
  ArrowRight,
  FileCheck2,
  AlertCircle,
  FileText,
  AlertTriangle,
  Printer,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";
import {
  GOLDEN_RULES,
  CLAIM_CATEGORIES,
  DISPUTE_ESCALATION_LEVELS,
  MASTER_INSURERS_DIRECTORY,
  ClaimCategoryData,
  type InsurerHelpline,
} from "@/data/claimsData";

const categoryIconMap: Record<string, React.ElementType> = {
  Car,
  Plane,
  HeartPulse,
  ShieldAlert,
  ShieldCheck,
};

type ClaimSubTab = "process" | "checklist" | "helplines" | "traps";

interface ContactCardProps {
  insurer: InsurerHelpline;
  copyKey: string;
  copiedItem: string | null;
  onCopy: (text: string, identifier: string) => void;
}

function InsurerContactCard({ insurer, copyKey, copiedItem, onCopy }: ContactCardProps) {
  const primary = insurer.tollFree || insurer.regularPhone;
  const primaryLabel = insurer.tollFree ? "Toll-free helpline" : "Claims helpline";
  const primaryTel = primary?.split("(")[0].replace(/[^0-9+]/g, "") ?? "";
  const copied = copiedItem === `${copyKey}-primary`;

  const secondaryContacts: {
    label: string;
    value: string;
    href?: string;
    highlight?: boolean;
  }[] = [];

  if (insurer.tollFree && insurer.regularPhone) {
    secondaryContacts.push({ label: "Alternate", value: insurer.regularPhone });
  }
  if (insurer.roadsideAssistance) {
    secondaryContacts.push({ label: "Roadside", value: insurer.roadsideAssistance });
  }
  if (insurer.abroadPhone) {
    secondaryContacts.push({ label: "Overseas 24×7", value: insurer.abroadPhone });
  }
  if (insurer.seniorCitizenPhone) {
    secondaryContacts.push({ label: "Senior citizens", value: insurer.seniorCitizenPhone });
  }
  if (insurer.whatsapp) {
    secondaryContacts.push({ label: "WhatsApp", value: insurer.whatsapp, highlight: true });
  }
  if (insurer.sms) {
    secondaryContacts.push({ label: "SMS", value: insurer.sms });
  }
  if (insurer.email) {
    secondaryContacts.push({ label: "Email", value: insurer.email, href: `mailto:${insurer.email}` });
  }

  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C59B27] hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h4 className="text-sm font-extrabold leading-snug text-[#01327a]">{insurer.name}</h4>
          <span className="mt-1.5 inline-flex rounded-md border border-amber-200/60 bg-amber-50 px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-[#966c0f]">
            {insurer.category} insurance
          </span>
        </div>
        <a
          href={insurer.website}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${insurer.name} official portal`}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-400 transition-colors hover:border-[#C59B27] hover:text-[#01327a]"
        >
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>

      {primary && (
        <div className="mt-4 rounded-xl bg-gradient-to-br from-[#01327a] to-[#01255e] p-3.5 text-white">
          <div className="flex items-center justify-between gap-3">
            <div className="min-w-0">
              <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-300">
                {primaryLabel}
              </p>
              <p className="mt-0.5 break-words text-[13px] font-extrabold leading-snug text-[#F5D77F] sm:text-sm" title={primary}>
                {primary}
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-1.5">
              <button
                type="button"
                onClick={() => onCopy(primary, `${copyKey}-primary`)}
                aria-label={`Copy ${insurer.name} helpline number`}
                className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg bg-white/10 text-slate-200 transition-colors hover:bg-white/20 hover:text-white"
              >
                {copied ? (
                  <Check className="h-3.5 w-3.5 text-emerald-300" />
                ) : (
                  <Copy className="h-3.5 w-3.5" />
                )}
              </button>
              <a
                href={`tel:${primaryTel}`}
                aria-label={`Call ${insurer.name} helpline`}
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#C59B27] text-[#01327a] transition-colors hover:bg-[#F5D77F]"
              >
                <Phone className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}

      {secondaryContacts.length > 0 && (
        <div className="mt-3 space-y-1.5">
          {secondaryContacts.map((contact, idx) => (
            <div
              key={`${contact.label}-${idx}`}
              className="flex items-start justify-between gap-3 text-[11px] leading-snug"
            >
              <span className="shrink-0 text-slate-500">{contact.label}</span>
              {contact.href ? (
                <a
                  href={contact.href}
                  className="max-w-[65%] break-words text-right font-semibold text-[#01327a] hover:underline"
                >
                  {contact.value}
                </a>
              ) : (
                <span
                  className={`max-w-[65%] break-words text-right font-semibold ${
                    contact.highlight ? "text-emerald-700" : "text-slate-700"
                  }`}
                >
                  {contact.value}
                </span>
              )}
            </div>
          ))}
        </div>
      )}

      <div className="mt-auto pt-4">
        <div className="flex items-center justify-between gap-2 border-t border-slate-100 pt-3">
          <a
            href={insurer.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-wider text-[#C59B27] transition-colors hover:text-[#01327a]"
          >
            <span>Official portal</span>
            <ExternalLink className="h-3 w-3" />
          </a>
          {insurer.notes && (
            <span
              title={insurer.notes}
              className="max-w-[50%] truncate text-[9px] italic text-slate-400"
            >
              {insurer.notes}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

// Emergency quick scenarios for Hero
const HERO_EMERGENCY_SCENARIOS = [
  {
    id: "motor",
    title: "Vehicle Accident / Tow",
    icon: Car,
    tag: "Motor Emergency",
    actionTitle: "Do Not Move or Crank Engine",
    steps: [
      "Photograph all damage, scene & registration plates",
      "Call insurer motor helpline BEFORE towing to garage",
      "Never crank the engine in flood water (avoids engine seizure)",
    ],
    helpline: "1800 2666 / 1800-209-5858",
    hotlineLink: "tel:18002666",
  },
  {
    id: "health",
    title: "Hospital Admission",
    icon: HeartPulse,
    tag: "Health / Cashless",
    actionTitle: "1-Hour IRDAI Cashless Pre-Auth",
    steps: [
      "Show Health E-Card & photo ID at hospital TPA desk",
      "Emergency: Intimate within 24 hrs | Planned: 48-72 hrs prior",
      "IRDAI mandate: Pre-auth in ≤1 hr, discharge in ≤3 hrs",
    ],
    helpline: "1800-103-2529 / 1800-258-4242",
    hotlineLink: "tel:18001032529",
  },
  {
    id: "travel",
    title: "Travel Emergency",
    icon: Plane,
    tag: "Overseas Medical / Delay",
    actionTitle: "Call 24/7 Overseas Assistance",
    steps: [
      "Abroad: Call assistance number BEFORE hospital visit for cashless",
      "Flight delay: Secure written Delay Certificate from airline",
      "Lost baggage: Obtain PIR report from airport baggage counter",
    ],
    helpline: "+91 124 4498778 / +91-124-6174720",
    hotlineLink: "tel:+911244498778",
  },
  {
    id: "life",
    title: "Life / Nominee Claim",
    icon: ShieldCheck,
    tag: "Life Claim",
    actionTitle: "15-Day Statutory Settlement",
    steps: [
      "Nominee intimates insurer via helpline, portal, or branch",
      "Keep original municipal death certificate & policy bond",
      "Clean claims settled in ≤15 days under IRDAI 2024 circular",
    ],
    helpline: "022-6844 6530 / 1860 266 7766",
    hotlineLink: "tel:02268446530",
  },
];

export default function ClaimsPage() {
  const [activeCategorySlug, setActiveCategorySlug] = useState<string>("motor");
  const [activeSubTab, setActiveSubTab] = useState<ClaimSubTab>("process");
  const [activeEmergencyIndex, setActiveEmergencyIndex] = useState<number>(0);
  const [directorySearch, setDirectorySearch] = useState<string>("");
  const [directoryCategory, setDirectoryCategory] = useState<"ALL" | "General" | "Life">("ALL");
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [checkedDocs, setCheckedDocs] = useState<Record<string, boolean>>({});
  const [modalOpen, setModalOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<number>(0);

  // Active Category Data
  const currentCategory: ClaimCategoryData = useMemo(() => {
    return (
      CLAIM_CATEGORIES.find((c) => c.slug === activeCategorySlug) ||
      CLAIM_CATEGORIES[0]
    );
  }, [activeCategorySlug]);

  const handleCopy = (text: string, identifier: string) => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(text);
      setCopiedItem(identifier);
      setTimeout(() => setCopiedItem(null), 2000);
    }
  };

  const toggleCheckDoc = (id: string) => {
    setCheckedDocs((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Checked count for active category
  const checkedCount = useMemo(() => {
    return currentCategory.checklist.reduce((acc, _, idx) => {
      const key = `${currentCategory.id}-doc-${idx}`;
      return acc + (checkedDocs[key] ? 1 : 0);
    }, 0);
  }, [checkedDocs, currentCategory]);

  // Directory filter logic
  const filteredDirectory = useMemo(() => {
    return MASTER_INSURERS_DIRECTORY.filter((ins) => {
      const matchesCat =
        directoryCategory === "ALL" || ins.category === directoryCategory;
      const q = directorySearch.trim().toLowerCase();
      const matchesSearch =
        !q ||
        ins.name.toLowerCase().includes(q) ||
        (ins.tollFree && ins.tollFree.toLowerCase().includes(q)) ||
        (ins.regularPhone && ins.regularPhone.toLowerCase().includes(q)) ||
        (ins.email && ins.email.toLowerCase().includes(q)) ||
        (ins.website && ins.website.toLowerCase().includes(q));
      return matchesCat && matchesSearch;
    });
  }, [directorySearch, directoryCategory]);

  const subTabs: { id: ClaimSubTab; label: string; icon: React.ElementType }[] = [
    { id: "process", label: "Step-by-Step Procedure", icon: FileText },
    {
      id: "checklist",
      label: `Document Checklist (${checkedCount}/${currentCategory.checklist.length})`,
      icon: FileCheck2,
    },
    { id: "helplines", label: "Insurer Helplines", icon: Phone },
    { id: "traps", label: "Traps & Common Exclusions", icon: AlertTriangle },
  ];

  return (
    <main className="min-h-screen bg-[#F9F8F6] text-slate-900 flex flex-col selection:bg-amber-100 selection:text-amber-900 overflow-x-hidden">
      <TopBar />
      <Navbar />

      {/* ── 1. REDESIGNED LUXURY HERO SECTION ── */}
      <section className="relative w-full bg-[#F9F8F6] pt-[154px] sm:pt-[172px] lg:pt-[186px] pb-16 sm:pb-20 border-b border-slate-200/80 overflow-hidden">
        {/* Soft Ambient Blueprint Grid Texture with Radial Fade */}
        <div
          className="absolute inset-0 opacity-100 pointer-events-none z-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(197,155,39,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(197,155,39,0.12) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%)",
          }}
        />

        {/* Ambient Gold Radial Blob */}
        <div className="absolute -top-10 right-10 w-[600px] h-[600px] bg-[#C59B27]/10 rounded-full blur-3xl pointer-events-none z-0" />
        <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-[#F5D77F]/15 rounded-full blur-3xl pointer-events-none z-0" />

        {/* Skyline / Hero Clipart Watermark */}
        <div className="absolute right-0 bottom-0 w-[450px] lg:w-[680px] h-auto opacity-15 pointer-events-none z-0 flex items-end justify-end">
          <Image
            src="/hero-bg.webp"
            alt="Fortune 5 Background Pattern"
            width={720}
            height={480}
            priority
            className="object-contain object-right-bottom"
          />
        </div>

        <div className="mx-auto w-full max-w-[1480px] px-5 sm:px-8 lg:px-10 xl:px-12 relative z-10">
          {/* Breadcrumb & Tagline */}
          <div className="mb-6 flex flex-wrap items-center gap-3 text-xs font-bold tracking-[0.16em] uppercase">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-slate-400">
              <Link href="/" prefetch={false} className="transition-colors hover:text-[#B8860B]">
                Home
              </Link>
              <span className="h-px w-4 bg-[#C59B27]" />
              <span className="text-[#B8860B]">Claim</span>
            </nav>
            <span className="hidden sm:inline text-slate-300">•</span>
            <div className="flex items-center gap-2 text-[#966c0f] font-extrabold text-[11px] sm:text-xs tracking-wider">
              <span>PEOPLE YOU TRUST, ADVICE THAT WORKS</span>
              <span className="h-[2px] w-12 bg-gradient-to-r from-[#C59B27] to-transparent inline-block" />
            </div>
          </div>

          {/* Two-Column Hero Grid: Left Content + Right Interactive Quick Emergency Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
            {/* Left Column: Heading, Value Prop, Actions */}
            <div className="lg:col-span-7 flex flex-col space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-[#C59B27]/30 text-[#966c0f] font-extrabold text-[11px] sm:text-xs tracking-widest uppercase w-fit shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#C59B27]" />
                <span>75+ YEARS OF DEDICATED CLAIM ADVOCACY</span>
              </div>

              <h1 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl xl:text-[68px] font-extrabold text-[#01327a] uppercase tracking-tight leading-[1.06]">
                INSURANCE CLAIM <br />
                <span className="text-[#C59B27]">ASSISTANCE &amp; ADVOCACY</span>
              </h1>

              <p className="text-slate-600 text-sm sm:text-base lg:text-lg font-medium leading-relaxed max-w-2xl">
                Clear guidance to fast-track your settlement. Access direct insurer helplines, documentation checklists, IRDAI timelines, and 24/7 advocate support across Motor, Travel, Health, Personal Accident, and Life claims.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <button
                  onClick={() => setModalOpen(true)}
                  className="inline-flex items-center justify-center gap-3 bg-[#01327a] hover:bg-[#01255e] text-white font-bold text-xs sm:text-sm tracking-wider px-7 py-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 uppercase cursor-pointer"
                >
                  <span>CONNECT WITH CLAIMS DESK</span>
                  <ArrowRight className="h-4 w-4" />
                </button>

                <a
                  href="tel:+919820810067"
                  className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-slate-300 hover:border-[#C59B27] bg-white hover:bg-amber-50/50 px-6 py-4 text-xs sm:text-sm font-bold tracking-wider text-[#01327a] transition-all shadow-xs"
                >
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <Phone className="h-4 w-4 text-[#C59B27]" />
                  <span>DIRECT DESK: +91 98208 10067</span>
                </a>
              </div>

              {/* Trust badges row */}
              <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-500 font-semibold">
                <span className="flex items-center gap-1.5 text-slate-700">
                  <Check className="w-4 h-4 text-emerald-600 stroke-[3]" /> Zero Upfront Fee
                </span>
                <span className="flex items-center gap-1.5 text-slate-700">
                  <Check className="w-4 h-4 text-emerald-600 stroke-[3]" /> Surveyor Coordination
                </span>
                <span className="flex items-center gap-1.5 text-slate-700">
                  <Check className="w-4 h-4 text-emerald-600 stroke-[3]" /> Free Ombudsman Support
                </span>
              </div>
            </div>

            {/* Right Column: Interactive Emergency Claim Intimation Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl border border-[#C59B27]/40 bg-white/95 backdrop-blur-md p-6 sm:p-7 shadow-[0_20px_50px_-15px_rgba(1,50,122,0.15)]">
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#966c0f] flex items-center gap-1.5">
                      <AlertCircle className="w-3.5 h-3.5 text-[#C59B27]" />
                      NEED IMMEDIATE HELP?
                    </span>
                    <h3 className="font-cormorant text-2xl font-bold text-[#01327a] mt-0.5">
                      Emergency Intimation Protocol
                    </h3>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-full">
                    Active 24/7
                  </span>
                </div>

                {/* Scenario Switcher Buttons */}
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {HERO_EMERGENCY_SCENARIOS.map((item, idx) => {
                    const Icon = item.icon;
                    const isSelected = activeEmergencyIndex === idx;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setActiveEmergencyIndex(idx)}
                        className={`flex items-center gap-2 p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                          isSelected
                            ? "bg-[#01327a] text-white border-[#01327a] shadow-xs"
                            : "bg-slate-50 hover:bg-slate-100/80 text-slate-700 border-slate-200"
                        }`}
                      >
                        <Icon className={`w-4 h-4 shrink-0 ${isSelected ? "text-[#F5D77F]" : "text-[#C59B27]"}`} />
                        <span className="text-xs font-bold leading-tight truncate">
                          {item.title}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Active Scenario Quick Steps */}
                {(() => {
                  const current = HERO_EMERGENCY_SCENARIOS[activeEmergencyIndex];
                  return (
                    <div className="mt-5 p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80">
                      <div className="flex items-center justify-between mb-2.5">
                        <span className="text-[11px] font-extrabold text-[#966c0f] uppercase tracking-wide">
                          {current.tag}
                        </span>
                        <span className="text-[11px] font-bold text-[#01327a]">
                          {current.actionTitle}
                        </span>
                      </div>

                      <div className="space-y-1.5 text-xs text-slate-700 font-medium">
                        {current.steps.map((step, sIdx) => (
                          <div key={sIdx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27] mt-1.5 shrink-0" />
                            <span className="leading-snug">{step}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-4 pt-3 border-t border-amber-200/70 flex items-center justify-between">
                        <span className="text-[11px] text-slate-500 font-medium">
                          Emergency Helpline:
                        </span>
                        <a
                          href={current.hotlineLink}
                          className="font-extrabold text-xs text-[#01327a] hover:underline flex items-center gap-1"
                        >
                          <Phone className="w-3.5 h-3.5 text-[#C59B27]" />
                          <span>{current.helpline.split("/")[0]}</span>
                        </a>
                      </div>
                    </div>
                  );
                })()}

                {/* Bottom link to view full guide */}
                <div className="mt-4 flex items-center justify-between text-xs">
                  <a
                    href="#category-hub"
                    className="font-bold text-[#C59B27] hover:text-[#01327a] flex items-center gap-1"
                  >
                    <span>View full step-by-step checklist</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={() => setModalOpen(true)}
                    className="text-slate-500 hover:text-[#01327a] font-semibold underline cursor-pointer"
                  >
                    Assistance Desk
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Grounding Stat Cards Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-14 pt-8 border-t border-slate-200">
            {[
              { value: "₹100+ Cr", label: "CLAIMS ASSISTED", sub: "Since Inception" },
              { value: "75+ Years", label: "FAMILY LEGACY", sub: "Three Generations" },
              { value: "10,000+", label: "LIVES PROTECTED", sub: "Retail & Corporate" },
              { value: "≤ 1 Hour", label: "IRDAI PRE-AUTH", sub: "Cashless Mandate" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 text-center shadow-xs hover:border-[#C59B27] hover:shadow-md transition-all"
              >
                <div className="font-cormorant text-2xl sm:text-3xl font-extrabold text-[#01327a]">
                  {stat.value}
                </div>
                <div className="text-[11px] sm:text-xs font-bold text-slate-700 tracking-wider uppercase mt-1">
                  {stat.label}
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. HOW FORTUNE 5 CAN HELP (CLEAR 3-PILLAR VISUAL STRIP) ── */}
      <section className="relative w-full py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="mx-auto w-full max-w-[1480px] px-5 sm:px-8 lg:px-10 xl:px-12">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-[#C59B27]/30 text-[#966c0f] font-extrabold text-[11px] uppercase tracking-widest mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C59B27]" />
              TRANSPARENT ADVISORY CHARTER
            </span>
            <h2 className="font-cormorant text-3xl sm:text-4xl font-bold text-[#01327a]">
              How Fortune 5 Stands Beside You
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-2">
              <strong>Fortune 5 is a consulting firm.</strong> We do not decide or settle claims — settlement is executed by your insurance company under your policy contract. Our role is dedicated advocacy to protect your rightful interest.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 flex flex-col justify-between hover:border-[#C59B27] hover:bg-white hover:shadow-md transition-all">
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-100/70 border border-amber-300 flex items-center justify-center text-[#C59B27] mb-4">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="font-cormorant text-xl font-bold text-[#01327a] mb-2">
                  1. Immediate Registration
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  We assist in registering the claim directly with your insurer on Day 1, ensuring zero delay in claim intimation numbers.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] font-bold text-[#C59B27]">
                Prompt Intimation Assistance
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 flex flex-col justify-between hover:border-[#C59B27] hover:bg-white hover:shadow-md transition-all">
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-100/70 border border-amber-300 flex items-center justify-center text-[#C59B27] mb-4">
                  <FileCheck2 className="w-5 h-5" />
                </div>
                <h3 className="font-cormorant text-xl font-bold text-[#01327a] mb-2">
                  2. Documentation Guidance
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  Detailed checklists and document audits before submission. We review medical files, bills, FIRs, and estimates to eliminate query loops.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] font-bold text-[#C59B27]">
                Error-Free Dossier Assembly
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 flex flex-col justify-between hover:border-[#C59B27] hover:bg-white hover:shadow-md transition-all">
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-100/70 border border-amber-300 flex items-center justify-center text-[#C59B27] mb-4">
                  <Scale className="w-5 h-5" />
                </div>
                <h3 className="font-cormorant text-xl font-bold text-[#01327a] mb-2">
                  3. Technical Follow-Up
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  Active coordination with surveyors, TPAs, and insurer grievance cells on your behalf to minimize unjustified deductions and expedite release.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] font-bold text-[#C59B27]">
                End-to-End Resolution Follow-Up
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. FIVE GOLDEN RULES (VISUAL BENTO / FLOW CARDS) ── */}
      <section className="relative w-full py-16 bg-[#F9F8F6] border-b border-slate-200">
        <div className="mx-auto w-full max-w-[1480px] px-5 sm:px-8 lg:px-10 xl:px-12">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-[#C59B27]/30 text-[#966c0f] font-extrabold text-[11px] uppercase tracking-widest mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#C59B27]" />
              UNIVERSAL PROTOCOL
            </span>
            <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#01327a] uppercase tracking-tight">
              FIVE RULES FOR <span className="text-[#C59B27]">EVERY CLAIM</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm font-medium mt-2">
              No matter what insurance policy you hold, adhering to these five fundamental rules protects your claim from disputes or reductions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {GOLDEN_RULES.map((rule) => (
              <div
                key={rule.step}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-xs hover:border-[#C59B27] hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-cormorant text-3xl font-extrabold text-[#C59B27]">
                      {rule.step}
                    </span>
                    <span className="text-[10px] font-extrabold tracking-wider uppercase px-2 py-0.5 rounded-md bg-amber-50 text-[#966c0f] border border-amber-200/60">
                      {rule.tag}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-[#01327a] mb-2 leading-snug">
                    {rule.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {rule.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-[10px] font-extrabold text-[#C59B27] uppercase tracking-wider">
                  <span>Mandatory Step</span>
                  <ChevronRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. IRDAI 2024 REGULATORY COUNTDOWN STRIP ── */}
      <section className="relative w-full py-10 bg-[#01255e] text-white border-b border-[#C59B27]/30">
        <div className="mx-auto w-full max-w-[1480px] px-5 sm:px-8 lg:px-10 xl:px-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="max-w-md text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#001c47] border border-[#C59B27]/40 text-[#F5D77F] font-extrabold text-[10px] tracking-wider uppercase mb-2">
                <Clock className="w-3 h-3 text-[#C59B27]" />
                IRDAI MASTER CIRCULARS 2024
              </span>
              <h3 className="font-cormorant text-2xl font-bold text-white">
                Statutory Timelines Insurers Must Meet
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                Binding regulatory response limits designed to eliminate wrongful settlement delays.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full lg:w-auto">
              {[
                { time: "≤ 1 Hour", event: "Health Cashless Pre-Auth Decision" },
                { time: "≤ 3 Hours", event: "Hospital Final Discharge Approval" },
                { time: "≤ 15 Days", event: "Clean Life Death Claim Settlement" },
                { time: "≤ 14 Days", event: "Insurer Grievance Redressal Resolution" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-white/15 bg-white/5 p-4 text-center backdrop-blur-xs hover:border-[#C59B27]/60 transition-all"
                >
                  <div className="text-xl sm:text-2xl font-extrabold text-[#F5D77F] font-cormorant">
                    {item.time}
                  </div>
                  <div className="text-[11px] font-medium text-slate-200 mt-1 leading-tight">
                    {item.event}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. INTERACTIVE CLAIMS HUB (IMAGE-DRIVEN, TABBED WORKSPACE) ── */}
      <section id="category-hub" className="relative w-full py-16 sm:py-20 bg-[#F9F8F6]">
        <div className="mx-auto w-full max-w-[1480px] px-5 sm:px-8 lg:px-10 xl:px-12">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-[#C59B27]/30 text-[#966c0f] font-extrabold text-[11px] uppercase tracking-widest mb-2">
              <FileCheck2 className="w-3.5 h-3.5 text-[#C59B27]" />
              INTERACTIVE STEP-BY-STEP ADVISORY
            </span>
            <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#01327a] uppercase tracking-tight">
              SELECT YOUR <span className="text-[#C59B27]">CLAIM TYPE</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm font-medium mt-2">
              Switch categories to view streamlined procedures, interactive document checklists, direct helplines, and trap prevention tips.
            </p>
          </div>

          {/* Category Switcher with Visual Images */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-10">
            {CLAIM_CATEGORIES.map((cat) => {
              const Icon = categoryIconMap[cat.iconName] || FileText;
              const isSelected = activeCategorySlug === cat.slug;

              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategorySlug(cat.slug);
                    setOpenAccordion(0);
                  }}
                  className={`group relative overflow-hidden rounded-2xl border text-left p-4 transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? "border-[#C59B27] bg-[#01327a] text-white shadow-xl scale-[1.02] ring-2 ring-[#C59B27]/30"
                      : "border-slate-200 bg-white hover:border-[#C59B27]/60 hover:bg-slate-50 text-slate-800 shadow-xs"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                        isSelected
                          ? "bg-white/10 text-[#F5D77F]"
                          : "bg-amber-50 text-[#C59B27] group-hover:bg-[#01327a] group-hover:text-white"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    {isSelected && (
                      <span className="text-[10px] font-extrabold bg-[#C59B27] text-[#01327a] px-2 py-0.5 rounded-md uppercase">
                        Active
                      </span>
                    )}
                  </div>

                  <div className="font-bold text-sm sm:text-base leading-snug">
                    {cat.title.replace(" Insurance Claims", "").replace(" Claims", "")}
                  </div>
                  <div
                    className={`text-[11px] mt-1 line-clamp-1 ${
                      isSelected ? "text-slate-300" : "text-slate-500"
                    }`}
                  >
                    {cat.badge}
                  </div>
                </button>
              );
            })}
          </div>

          {/* ── ACTIVE CATEGORY WORKSPACE CARD ── */}
          <div className="rounded-3xl border border-slate-200 bg-white shadow-xl overflow-hidden">
            {/* Visual Header Banner with Image & Key Directive */}
            <div className="relative bg-gradient-to-r from-[#01327a] via-[#01255e] to-[#021b44] text-white p-6 sm:p-8 lg:p-10 overflow-hidden">
              {/* Background category image watermark */}
              <div className="absolute right-0 top-0 bottom-0 w-1/2 lg:w-2/5 overflow-hidden opacity-25 pointer-events-none">
                <Image
                  src={currentCategory.image}
                  alt={currentCategory.title}
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#01327a] via-[#01327a]/80 to-transparent" />
              </div>

              <div className="relative z-10 max-w-3xl space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#001c47] border border-[#C59B27]/40 text-[#F5D77F] font-extrabold text-[11px] uppercase tracking-wider">
                  <span>{currentCategory.badge}</span>
                </div>

                <h3 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight">
                  {currentCategory.title}
                </h3>

                <p className="text-slate-200 text-xs sm:text-sm font-medium leading-relaxed">
                  {currentCategory.tagline}
                </p>

                {/* Directive Callout */}
                <div className="rounded-xl border border-[#C59B27]/40 bg-[#001c47]/80 backdrop-blur-xs p-4 flex items-start gap-3">
                  <AlertCircle className="w-4 h-4 text-[#F5D77F] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-slate-100 font-semibold leading-relaxed">
                    {currentCategory.keyRule}
                  </p>
                </div>
              </div>
            </div>

            {/* Sub-Tabs Bar: Process / Checklist / Helplines / Traps */}
            <div className="flex border-b border-slate-200 bg-slate-50/80 px-4 sm:px-8 overflow-x-auto">
              {subTabs.map((subTab) => {
                const Icon = subTab.icon;
                const isCurrent = activeSubTab === subTab.id;

                return (
                  <button
                    key={subTab.id}
                    onClick={() => setActiveSubTab(subTab.id)}
                    className={`flex items-center gap-2 py-4 px-4 sm:px-6 text-xs sm:text-sm font-bold tracking-wider uppercase whitespace-nowrap transition-all border-b-2 cursor-pointer ${
                      isCurrent
                        ? "border-[#01327a] text-[#01327a] bg-white font-extrabold"
                        : "border-transparent text-slate-500 hover:text-[#01327a]"
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isCurrent ? "text-[#C59B27]" : "text-slate-400"}`} />
                    <span>{subTab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Dynamic Tab Body */}
            <div className="p-6 sm:p-8 lg:p-10">
              {/* TAB 1: Step-by-Step Procedure (Accordion style to reduce scroll weight) */}
              {activeSubTab === "process" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Click sections to expand specific claim scenarios
                    </span>
                    <button
                      onClick={() => setModalOpen(true)}
                      className="text-xs font-extrabold text-[#C59B27] hover:underline"
                    >
                      Need custom guidance? Request consultation
                    </button>
                  </div>

                  {currentCategory.subsections.map((sub, sIdx) => {
                    const isOpen = openAccordion === sIdx;

                    return (
                      <div
                        key={sIdx}
                        className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-xs transition-all"
                      >
                        <button
                          onClick={() => setOpenAccordion(isOpen ? -1 : sIdx)}
                          className="w-full flex items-center justify-between p-5 sm:p-6 bg-slate-50/60 hover:bg-slate-100/70 text-left transition-colors cursor-pointer"
                        >
                          <div className="flex items-center gap-3">
                            <span className="w-7 h-7 rounded-lg bg-[#01327a] text-white flex items-center justify-center font-cormorant font-bold text-sm">
                              0{sIdx + 1}
                            </span>
                            <span className="font-cormorant text-xl sm:text-2xl font-bold text-[#01327a]">
                              {sub.title}
                            </span>
                          </div>
                          <ChevronDown
                            className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${
                              isOpen ? "rotate-180 text-[#C59B27]" : ""
                            }`}
                          />
                        </button>

                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.25 }}
                              className="p-5 sm:p-6 border-t border-slate-100 bg-white"
                            >
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                                {sub.points.map((pt, pIdx) => (
                                  <div
                                    key={pIdx}
                                    className={`p-4 rounded-xl border text-xs sm:text-sm ${
                                      pt.highlight
                                        ? "bg-amber-50/80 border-amber-300 text-amber-950 font-medium"
                                        : "bg-slate-50 border-slate-200/80 text-slate-700"
                                    }`}
                                  >
                                    {pt.headline && (
                                      <div className="font-bold text-[#01327a] mb-1 flex items-center gap-1.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27]" />
                                        <span>{pt.headline}</span>
                                      </div>
                                    )}
                                    <p className="leading-relaxed font-normal">{pt.text}</p>
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* TAB 2: Interactive Checklist */}
              {activeSubTab === "checklist" && (
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 mb-6">
                    <div>
                      <h4 className="font-cormorant text-2xl font-bold text-[#01327a]">
                        Required Documents for {currentCategory.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-1">
                        Tick items as you gather them. Incomplete files cause 80% of claim delays.
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="text-xs font-bold text-[#01327a]">
                          {checkedCount} of {currentCategory.checklist.length} Prepared
                        </div>
                        <div className="w-32 bg-slate-200 h-2 rounded-full overflow-hidden mt-1">
                          <div
                            className="bg-emerald-500 h-full transition-all duration-300"
                            style={{
                              width: `${(checkedCount / currentCategory.checklist.length) * 100}%`,
                            }}
                          />
                        </div>
                      </div>

                      <button
                        onClick={() => window.print()}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-[#01327a] border border-slate-300 rounded-xl px-3 py-2 bg-white shadow-xs cursor-pointer"
                        title="Print this checklist"
                      >
                        <Printer className="w-3.5 h-3.5 text-[#C59B27]" />
                        <span>Print</span>
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {currentCategory.checklist.map((item, cIdx) => {
                      const itemKey = `${currentCategory.id}-doc-${cIdx}`;
                      const isChecked = !!checkedDocs[itemKey];

                      return (
                        <div
                          key={cIdx}
                          onClick={() => toggleCheckDoc(itemKey)}
                          className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-all select-none ${
                            isChecked
                              ? "bg-emerald-50 border-emerald-300 text-emerald-900"
                              : "bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700"
                          }`}
                        >
                          <div
                            className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                              isChecked
                                ? "bg-emerald-600 border-emerald-600 text-white"
                                : "border-slate-400 bg-white"
                            }`}
                          >
                            {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          </div>
                          <span
                            className={`text-xs sm:text-sm leading-snug font-medium ${
                              isChecked ? "line-through opacity-75" : ""
                            }`}
                          >
                            {item}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* TAB 3: Helplines */}
              {activeSubTab === "helplines" && (
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                    <div>
                      <h4 className="font-cormorant text-2xl font-bold text-[#01327a]">
                        Direct Helplines for {currentCategory.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-1">
                        Call directly or click to copy numbers to your mobile dialer.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {currentCategory.helplines.map((insurer, hIdx) => (
                      <InsurerContactCard
                        key={`${currentCategory.id}-${insurer.name}-${hIdx}`}
                        insurer={insurer}
                        copyKey={`active-${currentCategory.id}-${insurer.name}-${hIdx}`}
                        copiedItem={copiedItem}
                        onCopy={handleCopy}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 4: Traps & Exclusions */}
              {activeSubTab === "traps" && (
                <div>
                  <div className="mb-6">
                    <h4 className="font-cormorant text-2xl font-bold text-rose-950 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-rose-600" />
                      <span>Traps That Trigger Claim Deductions or Rejections</span>
                    </h4>
                    <p className="text-xs text-slate-500 mt-1">
                      Be aware of these critical clauses before filing to protect your full settlement.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentCategory.rejectionReasons ? (
                      currentCategory.rejectionReasons.map((reason, rIdx) => (
                        <div
                          key={rIdx}
                          className="flex items-center gap-3 rounded-2xl border border-rose-200 bg-rose-50/70 p-4 sm:p-5"
                        >
                          <span className="h-2 w-2 shrink-0 rounded-full bg-rose-500" />
                          <p className="text-xs sm:text-sm text-rose-900 font-semibold leading-relaxed">
                            {reason}
                          </p>
                        </div>
                      ))
                    ) : (
                      <div className="col-span-2 rounded-2xl border border-amber-200 bg-amber-50/70 p-5">
                        <p className="text-xs sm:text-sm text-amber-900 font-semibold">
                          Always ensure all supporting evidence, bills with doctor requisitions, and statutory reports (e.g., FIR/MLC or PIR) are in order. Late notice and lack of original receipts remain the primary reasons for claim cuts.
                        </p>
                      </div>
                    )}

                    <div
                      className={`flex flex-col justify-between rounded-2xl border border-[#C59B27]/40 bg-gradient-to-br from-amber-50 to-white p-5 ${
                        currentCategory.rejectionReasons ? "" : "md:col-span-2"
                      }`}
                    >
                      <div>
                        <span className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-[#966c0f]">
                          Free claim review
                        </span>
                        <h5 className="mt-1 font-cormorant text-xl font-bold leading-tight text-[#01327a]">
                          Claim reduced unexpectedly?
                        </h5>
                        <p className="mt-1 text-[11px] leading-relaxed text-slate-600">
                          Share your rejection or deduction letter. Our claims desk
                          will review it and explain your options at no cost.
                        </p>
                      </div>
                      <button
                        onClick={() => setModalOpen(true)}
                        className="mt-4 inline-flex w-fit cursor-pointer items-center gap-2 rounded-lg bg-[#01327a] px-4 py-2.5 text-[10px] font-extrabold uppercase tracking-wider text-white transition-colors hover:bg-[#01255e]"
                      >
                        <span>Request document review</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. DISPUTE & ESCALATION MATRIX (OMBUDSMAN & IRDAI) ── */}
      <section className="relative w-full py-16 sm:py-20 bg-white border-t border-slate-200">
        <div className="mx-auto w-full max-w-[1480px] px-5 sm:px-8 lg:px-10 xl:px-12">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-[#C59B27]/30 text-[#966c0f] font-extrabold text-[11px] uppercase tracking-widest mb-2">
              <Scale className="w-3.5 h-3.5 text-[#C59B27]" />
              STATUTORY POLICYHOLDER RIGHTS
            </span>
            <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#01327a] uppercase tracking-tight">
              IF YOUR CLAIM IS <span className="text-[#C59B27]">DELAYED OR DISPUTED</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm font-medium mt-2">
              You are never powerless. If an insurer delays or unfairly denies your claim, follow these four legally binding tiers of escalation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DISPUTE_ESCALATION_LEVELS.map((esc, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 flex flex-col justify-between hover:border-[#C59B27] hover:bg-white hover:shadow-lg transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-cormorant text-2xl font-extrabold text-[#C59B27]">
                      {esc.level}
                    </span>
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md bg-blue-50 text-[#01327a] border border-blue-200/70">
                      {esc.turnaround}
                    </span>
                  </div>
                  <h3 className="font-bold text-base text-[#01327a] mb-2 leading-snug">
                    {esc.authority}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {esc.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-200 text-xs font-extrabold text-[#C59B27] flex items-center gap-1">
                  <span>{esc.action}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>

          {/* Ombudsman Spotlight Callout Card */}
          <div className="mt-10 rounded-3xl border border-[#C59B27]/40 bg-gradient-to-r from-[#01327a] via-[#05439e] to-[#01255e] p-6 sm:p-8 text-white shadow-xl">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-3xl">
                <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#001c47] border border-[#C59B27]/50 text-[#F5D77F] font-extrabold text-[10px] uppercase tracking-wider">
                  <ShieldCheck className="w-3 h-3 text-[#C59B27]" />
                  KEY CONSUMER ADVOCACY FACT
                </span>
                <h4 className="font-cormorant text-2xl sm:text-3xl font-bold">
                  The Insurance Ombudsman is 100% Free &amp; Legally Binding on Insurers
                </h4>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  No lawyer needed. The Insurance Ombudsman handles claims up to ₹50 Lakh. If the insurer rejects your complaint or stays silent for 30 days, approach the Ombudsman within 1 year. If the award is in your favor, the insurer must comply.
                </p>
              </div>

              <a
                href="https://cioins.co.in"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#C59B27] via-[#D4AF37] to-[#F5D77F] text-[#01327a] px-6 py-3.5 text-xs font-extrabold uppercase tracking-wider shadow-lg hover:scale-105 transition-all"
              >
                <span>VISIT CIOINS.CO.IN</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. MASTER SEARCHABLE INSURER HELPLINES DIRECTORY ── */}
      <section id="helplines-directory" className="relative w-full py-16 bg-[#F9F8F6] border-t border-slate-200">
        <div className="mx-auto w-full max-w-[1480px] px-5 sm:px-8 lg:px-10 xl:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-[#C59B27]/30 text-[#966c0f] font-extrabold text-[11px] uppercase tracking-widest mb-2">
                <Phone className="w-3.5 h-3.5 text-[#C59B27]" />
                CENTRAL DIRECTORY
              </span>
              <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#01327a] uppercase tracking-tight">
                MASTER INSURER <span className="text-[#C59B27]">HELPLINE DIRECTORY</span>
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm font-medium mt-1">
                Direct helplines, emails, and portals for major general, health, and life insurers.
              </p>
            </div>

            {/* Live Search & Filter Pills */}
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search insurer name, toll-free..."
                  value={directorySearch}
                  onChange={(e) => setDirectorySearch(e.target.value)}
                  className="w-full sm:w-64 pl-9 pr-4 py-2.5 rounded-xl border border-slate-300 bg-white text-xs sm:text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#C59B27] shadow-xs"
                />
              </div>

              <div className="flex items-center bg-white rounded-xl border border-slate-300 p-1 shadow-xs">
                {(["ALL", "General", "Life"] as const).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setDirectoryCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase transition-all cursor-pointer ${
                      directoryCategory === cat
                        ? "bg-[#01327a] text-white"
                        : "text-slate-600 hover:text-[#01327a]"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between gap-3">
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
              Showing {filteredDirectory.length} insurer
              {filteredDirectory.length === 1 ? "" : "s"}
            </p>
            <p className="hidden text-[10px] text-slate-400 sm:block">
              Compiled from publicly available sources · subject to change
            </p>
          </div>

          {/* Directory Grid */}
          {filteredDirectory.length > 0 ? (
            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
              {filteredDirectory.map((insurer, idx) => (
                <InsurerContactCard
                  key={`directory-${insurer.name}-${idx}`}
                  insurer={insurer}
                  copyKey={`directory-${insurer.name}-${idx}`}
                  copiedItem={copiedItem}
                  onCopy={handleCopy}
                />
              ))}
            </div>
          ) : (
            <div className="mt-4 flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-14 text-center shadow-xs">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                <Search className="h-6 w-6" />
              </span>
              <h3 className="mt-3 font-cormorant text-xl font-bold text-[#01327a]">
                No insurers matched your search
              </h3>
              <p className="mt-1 max-w-sm text-xs text-slate-500">
                Try a different company name, phone number, or clear the category filter.
              </p>
              <button
                onClick={() => {
                  setDirectorySearch("");
                  setDirectoryCategory("ALL");
                }}
                className="mt-4 cursor-pointer rounded-lg bg-[#01327a] px-4 py-2 text-[10px] font-extrabold uppercase tracking-wider text-white transition-colors hover:bg-[#01255e]"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── 8. FRAUD WARNING & REGULATORY DISCLAIMER ── */}
      <section className="relative w-full py-12 bg-white border-t border-slate-200">
        <div className="mx-auto w-full max-w-[1480px] px-5 sm:px-8 lg:px-10 xl:px-12 space-y-6">
          {/* Zero-Fee Scam Warning Card */}
          <div className="rounded-2xl border-2 border-rose-300 bg-rose-50/70 p-5 sm:p-6 flex items-start gap-4 shadow-sm">
            <AlertTriangle className="w-6 h-6 text-rose-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-cormorant text-xl font-bold text-rose-950 uppercase tracking-tight mb-1">
                Security Alert: No Fee, OTP, or Password Requested
              </h4>
              <p className="text-xs sm:text-sm text-rose-900 font-semibold leading-relaxed">
                No insurer, TPA, IRDAI official, or Fortune 5 representative will EVER ask for any processing fee, commission, OTP, or password to approve or settle an insurance claim.
              </p>
            </div>
          </div>

          {/* General Disclaimer */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 sm:p-7 text-slate-600 text-xs leading-relaxed space-y-2">
            <h5 className="font-bold text-slate-800 uppercase tracking-wider text-[11px]">
              Regulatory &amp; Advisory Notice
            </h5>
            <p>
              This guide is general information provided by Fortune 5 Risk Management Solutions LLP for client convenience. It is not legal advice and does not alter any insurance contract.
            </p>
            <p>
              Fortune 5 is a consulting firm. It is not an insurer and does not decide or settle claims. Claim admissibility and quantum are decided solely by the insurance company under the policy wording, exclusions, deductibles, and sub-limits.
            </p>
          </div>
        </div>
      </section>

      {/* ── 9. CONSULTATION MODAL ── */}
      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultService="Claims Assistance & Advocacy"
      />

      <Footer />
    </main>
  );
}
