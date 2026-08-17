"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  HeartPulse,
  Car,
  Plane,
  ShieldAlert,
  Home,
  ShieldCheck,
  Flame,
  Users,
  Ship,
  Building,
  Store,
  Factory,
  HardHat,
  Scale,
  Layers,
  Search,
  ArrowRight,
  CheckCircle2,
  X,
  Sparkles,
  FileText,
  PhoneCall,
  Briefcase,
  User,
  HelpCircle,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

export interface ServiceItem {
  id: string;
  title: string;
  category: "RETAIL" | "CORPORATE";
  icon: React.ElementType;
  img: string;
  shortDesc: string;
  fullDesc: string;
  highlights: string[];
  coverage: string[];
  whoNeedsIt: string;
  claimHighlight: string;
}

const servicesData: ServiceItem[] = [
  // --- CORPORATE INSURANCE SOLUTIONS ---
  {
    id: "fire-insurance",
    title: "Fire Insurance",
    category: "CORPORATE",
    icon: Flame,
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80",
    shortDesc: "Industrial All Risk (IAR) and standard fire protection safeguarding plant, machinery, stock, and commercial assets.",
    fullDesc:
      "Fortune 5 structures comprehensive fire insurance policies tailored for manufacturing plants, industrial premises, warehouses, and corporate facilities. We protect your physical assets against accidental fire, lightning, explosion, storm, flood, and earthquake damage with tailored business interruption add-ons.",
    highlights: ["Industrial All Risk (IAR)", "Stock & Raw Material Valuation", "Business Interruption (FLOP)"],
    coverage: [
      "Fire, Lightning, Explosion & Implosion",
      "Storm, Cyclone, Tempest & Inundation (STFI)",
      "Earthquake, Landslide & Natural Perils",
      "Architect, Surveyor & Consulting Engineer Fees",
      "Debris Removal & Clean-up Expenses",
    ],
    whoNeedsIt: "Manufacturing factories, industrial units, commercial warehouses, storage yards, and corporate complexes.",
    claimHighlight: "Immediate surveyor deputation and technical loss documentation within 24 hours.",
  },
  {
    id: "marine-insurance",
    title: "Marine Insurance",
    category: "CORPORATE",
    icon: Ship,
    img: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=800&auto=format&fit=crop&q=80",
    shortDesc: "Comprehensive inland transit, import-export cargo, and marine freight insurance against loss or damage.",
    fullDesc:
      "Protect your raw materials, finished goods, and machinery during transit via sea, air, rail, or road. We design Marine Open Policies and customized sales turnover policies (STOP) with global cover and seamless claims advocacy.",
    highlights: ["All Risks Open Cargo Policy", "Import / Export Transit Cover", "Inland Road & Rail Logistics"],
    coverage: [
      "Institute Cargo Clauses ICC (A) All Risks",
      "Loading, Unloading & Transshipment Risks",
      "Jettison, Washing Overboard & Piracy",
      "Collision, Overturning, Derailment & Sinking",
      "Customs Duty & Intermediate Storage Cover",
    ],
    whoNeedsIt: "Exporters, importers, manufacturing firms, logistics operators, and global commodity traders.",
    claimHighlight: "Global surveyor network and swift general average assistance across international ports.",
  },
  {
    id: "engineering-insurance",
    title: "Engineering Insurance",
    category: "CORPORATE",
    icon: HardHat,
    img: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?w=800&auto=format&fit=crop&q=80",
    shortDesc: "Contractor All Risk (CAR), Erection All Risk (EAR), and Contractor Plant & Machinery (CPM) protection.",
    fullDesc:
      "Specialized risk management for construction sites, civil engineering developments, and erection of plant machinery. Safeguards developers, EPC contractors, and machinery owners against physical loss, structural damage, and third-party liabilities during execution.",
    highlights: ["Contractor All Risk (CAR)", "Erection All Risk (EAR)", "Machinery Breakdown (MBD)"],
    coverage: [
      "Civil Construction Works & Material Losses",
      "Testing, Commissioning & Maintenance Visits",
      "Contractor Plant & Heavy Equipment Breakdown",
      "Third-Party Bodily Injury & Property Damage",
      "Surrounding Property Damage Protection",
    ],
    whoNeedsIt: "Infrastructure developers, civil contractors, EPC builders, and engineering project owners.",
    claimHighlight: "On-site engineering inspection and milestone-based claim settlement workflows.",
  },
  {
    id: "liability-insurance",
    title: "Liability Insurance",
    category: "CORPORATE",
    icon: Scale,
    img: "https://images.unsplash.com/photo-1450133064473-71024230f91b?w=800&auto=format&fit=crop&q=80",
    shortDesc: "Directors & Officers (D&O), Professional Indemnity, Cyber Risk, Commercial General Liability (CGL).",
    fullDesc:
      "Protect your enterprise, leadership board, and executive officers against costly legal defense fees and third-party financial liability claims arising from operational errors, regulatory disputes, product failures, or cyber breaches.",
    highlights: ["Directors & Officers (D&O)", "Professional Indemnity (PI)", "Commercial General Liability (CGL)"],
    coverage: [
      "Directors & Officers Personal Liability & Defense Costs",
      "Professional Errors & Omissions Indemnity",
      "Public Liability & Commercial General Liability",
      "Product Liability for Domestic & Export Markets",
      "Cyber Crime, Data Breach & Ransomware Response",
    ],
    whoNeedsIt: "Corporate boards, IT companies, financial services, healthcare institutions, and exporters.",
    claimHighlight: "Legal advocacy, panel attorney defense support, and swift settlement negotiations.",
  },
  {
    id: "package-insurance",
    title: "Package Insurance",
    category: "CORPORATE",
    icon: Building,
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop&q=80",
    shortDesc: "Consolidated Office Package and Commercial Establishment policies covering property, assets, cash & liability.",
    fullDesc:
      "A comprehensive multi-peril umbrella policy combining fire, electronic equipment breakdown, money in transit, plate glass, burglary, and visitor public liability into a single streamlined annual insurance contract.",
    highlights: ["Single Master Contract", "Electronic Equipment Protection", "Money & Transit Protection"],
    coverage: [
      "Office Building, Interior Works & Furniture Fire Cover",
      "Computers, Servers & Electronic Breakdown",
      "Money in Safe & Cash in Transit",
      "Third-Party Public Liability for Office Visitors",
      "Plate Glass, Signboard & Fixed Fixture Damage",
    ],
    whoNeedsIt: "Corporate headquarters, IT offices, financial consultancies, retail showrooms, and shared co-working spaces.",
    claimHighlight: "Single-window claim management across all multi-peril loss occurrences.",
  },
  {
    id: "employee-benefits",
    title: "Employee Benefits (GMC/GPA/GTL)",
    category: "CORPORATE",
    icon: Users,
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80",
    shortDesc: "Group Health Insurance (GMC), Group Personal Accident (GPA), and Group Term Life (GTL) for your workforce.",
    fullDesc:
      "Attract and retain talent with tailored employee health and wellness programs. Fortune 5 structures custom group mediclaim policies featuring corporate buffer pools, cashless hospitalization networks, maternity benefits, and workmen compensation compliance.",
    highlights: ["Group Mediclaim (GMC)", "Group Personal Accident (GPA)", "Group Term Life (GTL)"],
    coverage: [
      "Group Mediclaim (GMC) for Employees, Spouses & Children",
      "Group Personal Accident (GPA) 24/7 Worldwide Cover",
      "Group Term Life (GTL) Pure Life Protection",
      "Workmen's Compensation (WC) Act Compliance",
      "Corporate Buffer Pool & Preventive Wellness",
    ],
    whoNeedsIt: "Corporates, IT firms, factories, startups, and institutions managing 10 to 10,000+ employees.",
    claimHighlight: "Dedicated corporate claims desk and HR escalation support for cashless authorizations.",
  },
  {
    id: "industries-insurance",
    title: "Industries Insurance",
    category: "CORPORATE",
    icon: Factory,
    img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80",
    shortDesc: "Bespoke risk management solutions for chemicals, engineering, pharmaceuticals, logistics, and textiles.",
    fullDesc:
      "Industry-specific insurance programs designed for complex industrial verticals. We conduct detailed hazard identification, boiler explosion audits, supply chain vulnerability mapping, and environmental impairment risk reviews.",
    highlights: ["Tailored for Core Industrial Sectors", "Machinery Breakdown & BI", "Hazardous Goods Risk Mapping"],
    coverage: [
      "Chemical, Petrochemical & Pharma Plant Coverage",
      "Boiler & Pressure Vessel Explosion",
      "Machinery Breakdown & Consequential Loss of Profits",
      "Environmental Impairment & Pollution Clean-up",
      "Industrial Bulk Storage & Tank Farm Protection",
    ],
    whoNeedsIt: "Chemical processors, pharmaceutical manufacturers, textile mills, metal fabricators, and heavy industry plants.",
    claimHighlight: "Expert industrial surveyor coordination and salvage optimization for fast recovery.",
  },

  // --- RETAIL INSURANCE SOLUTIONS (PERSONAL LINES) ---
  {
    id: "health-insurance",
    title: "Health Insurance",
    category: "RETAIL",
    icon: HeartPulse,
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80",
    shortDesc: "Comprehensive medical protection for individuals, families, and senior citizens with cashless hospital networks.",
    fullDesc:
      "Our Health Insurance advisory covers comprehensive family floaters, top-up plans, and senior citizen covers. We analyze waiting periods, hospital network availability, room rent capping, and restoration benefits to recommend the optimal plan.",
    highlights: ["10,000+ Cashless Hospitals", "Zero Room Rent Sub-limits", "Restoration of Sum Insured"],
    coverage: [
      "In-patient Hospitalization & ICU Room Charges",
      "Pre-Hospitalization (60 Days) & Post-Hospitalization (180 Days)",
      "Day Care Procedures & Modern Robotic Surgeries",
      "AYUSH & Alternative Medical Treatments",
      "Organ Donor Expenses & Ambulance Charges",
    ],
    whoNeedsIt: "Individuals, salaried professionals, families, and self-employed individuals looking for dependable healthcare security.",
    claimHighlight: "24/7 cashless hospitalization authorization assistance and claims advocacy.",
  },
  {
    id: "motor-insurance",
    title: "Motor Insurance",
    category: "RETAIL",
    icon: Car,
    img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&auto=format&fit=crop&q=80",
    shortDesc: "Comprehensive vehicle protection for private cars, two-wheelers, and commercial fleets with instant claim settlement.",
    fullDesc:
      "Protect your automobile against road accidents, theft, third-party liability, fire, and flood damage. We structure policies with zero-depreciation add-ons, engine and gearbox protection, return to invoice, and 24/7 roadside assistance.",
    highlights: ["Zero Depreciation Add-on", "24/7 Roadside Assistance", "Engine & Gearbox Protection"],
    coverage: [
      "Own Damage (OD) Protection Against Accidents & Calamities",
      "Mandatory Third-Party Property & Bodily Injury Liability",
      "Personal Accident Cover for Owner-Driver",
      "Consumables Cover & Key Replacement",
      "Return to Invoice (RTI) Protection",
    ],
    whoNeedsIt: "Car owners, two-wheeler riders, and commercial vehicle fleet managers seeking cashless garage repairs.",
    claimHighlight: "Instant digital survey coordination and direct cashless network garage settlement.",
  },
  {
    id: "travel-insurance",
    title: "Travel Insurance",
    category: "RETAIL",
    icon: Plane,
    img: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&auto=format&fit=crop&q=80",
    shortDesc: "Worry-free international and domestic travel protection covering overseas medical bills, lost baggage, and flight delays.",
    fullDesc:
      "Travel with absolute peace of mind. Our travel insurance plans safeguard business executives, vacationing families, and students abroad against expensive foreign medical emergencies, passport loss, trip cancellations, and baggage delays.",
    highlights: ["Schengen & Worldwide Approved", "Student Overseas Medical Cover", "Trip Delay & Cancellation Cover"],
    coverage: [
      "Overseas Emergency Medical Treatment & Hospitalization",
      "Loss of Checked Baggage & Passport Reimbursement",
      "Trip Cancellation, Curtailment & Missed Connection",
      "Emergency Medical Evacuation & Repatriation",
      "Personal Liability Abroad",
    ],
    whoNeedsIt: "International business travelers, holidaying families, corporate executives, and overseas students.",
    claimHighlight: "Global cashless medical assistance through international emergency TPA partners.",
  },
  {
    id: "home-insurance",
    title: "Home Insurance",
    category: "RETAIL",
    icon: Home,
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=80",
    shortDesc: "All-in-one protection for home building structure, interior contents, valuables, and burglary risks.",
    fullDesc:
      "Your home is your most valuable personal asset. Home Insurance guards your building structure, furniture, electronic appliances, jewelry, and precious belongings against fire, earthquake, floods, storm, theft, and accidental breakdown.",
    highlights: ["Structure & Content Cover", "Jewelry & Valuables Protection", "Alternate Accommodation Allowance"],
    coverage: [
      "Fire, Flood, Earthquake, Storm & Inundation Damage",
      "Burglary, Housebreaking & Robbery",
      "Breakdown of Home Electronics, TVs & Air Conditioners",
      "Loss/Damage to Gold, Jewelry & Curios",
      "Public Liability for Domestic Accidents on Premises",
    ],
    whoNeedsIt: "Homeowners, apartment owners, landlords, and tenants wanting complete asset security.",
    claimHighlight: "Independent surveyor coordination and rapid loss estimation for structural and content damage.",
  },
  {
    id: "personal-accident-insurance",
    title: "Personal Accident Insurance",
    category: "RETAIL",
    icon: ShieldAlert,
    img: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=800&auto=format&fit=crop&q=80",
    shortDesc: "24/7 worldwide financial shield against accidental death, permanent disablement, and temporary loss of income.",
    fullDesc:
      "Accidents can strike without warning. Personal Accident Insurance provides guaranteed worldwide 24/7 financial support, ensuring your family maintains economic stability in the event of severe injuries, physical disablement, or loss of earning capacity.",
    highlights: ["Worldwide 24/7 Coverage", "Weekly Income Benefit", "Education Grant for Dependent Children"],
    coverage: [
      "Accidental Death Benefit (100% Sum Insured)",
      "Permanent Total Disablement (PTD - Up to 150% Sum Insured)",
      "Permanent Partial Disablement (PPD)",
      "Temporary Total Disablement (Weekly Income Allowance)",
      "Emergency Accidental Medical Expenses & Transportation",
    ],
    whoNeedsIt: "Earning professionals, business owners, frequent commuters, and family breadwinners.",
    claimHighlight: "Fast-track documentation and claim settlement for disability and income loss benefits.",
  },
  {
    id: "critical-illness-insurance",
    title: "Critical Illness Insurance",
    category: "RETAIL",
    icon: ShieldCheck,
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=80",
    shortDesc: "Direct lump sum cash payout upon first diagnosis of major life-threatening illnesses like cancer, stroke, or heart attack.",
    fullDesc:
      "A critical illness diagnosis brings substantial out-of-pocket medical costs, lifestyle adaptations, and loss of income. Unlike basic health insurance, Critical Illness Insurance pays a 100% lump sum amount upon first diagnosis of specified major medical conditions.",
    highlights: ["Lump Sum Cash Payout", "30+ Critical Illnesses Covered", "Zero Restriction on Fund Usage"],
    coverage: [
      "Cancer of Specified Severity",
      "First Heart Attack of Specified Severity",
      "Open Chest CABG & Heart Valve Replacement",
      "Stroke Resulting in Permanent Symptoms",
      "Kidney Failure Requiring Regular Dialysis",
    ],
    whoNeedsIt: "Individuals with family medical histories, corporate executives, self-employed professionals, and breadwinners.",
    claimHighlight: "Hassle-free single diagnostic report claim verification with direct bank payout.",
  },
  {
    id: "term-life-insurance",
    title: "Term Life Insurance",
    category: "RETAIL",
    icon: ShieldCheck,
    img: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&auto=format&fit=crop&q=80",
    shortDesc: "High-cover pure risk term life protection, keyman cover, and estate planning to secure your family's future.",
    fullDesc:
      "Ensure your family's financial independence and lifestyle security against life's uncertainties. We guide you through pure term life policies, terminal illness riders, waiver of premium benefits, and business keyman insurance with complete objectivity.",
    highlights: ["High Sum Assured Pure Risk Cover", "Terminal Illness Acceleration Rider", "Tax Savings Under Sec 80C & 10(10D)"],
    coverage: [
      "Guaranteed Life Cover Payout to Beneficiaries",
      "Accelerated Terminal Illness Lump Sum Benefit",
      "Accidental Death & Permanent Disability Riders",
      "Waiver of Future Premiums on Critical Disability",
      "Keyman & Business Partnership Protection",
    ],
    whoNeedsIt: "Family breadwinners, young parents, business partners, and high-net-worth individuals.",
    claimHighlight: "Compassionate, dedicated claim concierge assistance for nominees during critical times.",
  },
];

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<"ALL" | "RETAIL" | "CORPORATE">("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Filter logic based on active tab and search query
  const filteredServices = useMemo(() => {
    return servicesData.filter((service) => {
      const matchesCategory =
        activeCategory.toUpperCase() === "ALL" ||
        service.category.trim().toUpperCase() === activeCategory.trim().toUpperCase();

      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        service.title.toLowerCase().includes(query) ||
        service.shortDesc.toLowerCase().includes(query) ||
        service.fullDesc.toLowerCase().includes(query) ||
        service.category.toLowerCase().includes(query) ||
        service.highlights.some((h) => h.toLowerCase().includes(query)) ||
        service.coverage.some((c) => c.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const retailCount = useMemo(
    () => servicesData.filter((s) => s.category === "RETAIL").length,
    []
  );
  const corporateCount = useMemo(
    () => servicesData.filter((s) => s.category === "CORPORATE").length,
    []
  );

  return (
    <main className="min-h-screen bg-[#F9F8F6] text-slate-900 flex flex-col selection:bg-amber-100 selection:text-amber-900 overflow-x-hidden">
      <TopBar />
      <Navbar />

      {/* Why Choose Our Expertise Hero Section */}
      <section className="relative w-full overflow-hidden bg-[#F9F8F6] pt-[154px] sm:pt-[172px] lg:pt-[186px] pb-14 sm:pb-16 lg:pb-20 border-b border-slate-200/80">
        {/* Soft Ambient Blueprint Grid Texture with Radial Corner Fade */}
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

        {/* Integrated Soft Radial Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-[#C59B27]/5 rounded-full blur-3xl pointer-events-none z-0" />

        <div className="w-full max-w-4xl lg:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <ScrollReveal variant="fadeUp" className="text-center max-w-3xl mx-auto mb-12">
            <nav aria-label="Breadcrumb" className="mb-6 flex items-center justify-center gap-2 text-xs font-bold tracking-[0.18em] text-slate-400 uppercase">
              <Link href="/" className="transition-colors hover:text-[#B8860B]">
                Home
              </Link>
              <span className="h-px w-5 bg-[#C59B27]" />
              <span className="text-[#B8860B]">Services</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-[#C59B27]/30 text-[#B8860B] font-extrabold text-[11px] sm:text-xs tracking-widest uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#C59B27]" />
              <span>75+ YEARS TRUSTED LEGACY</span>
            </div>
            <h1 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#011331] uppercase tracking-tight leading-[1.05]">
              OUR INSURANCE{" "}
              <span className="text-[#C59B27]">
                SOLUTIONS
              </span>
            </h1>
            <p className="text-slate-600 text-sm sm:text-base lg:text-lg font-medium leading-relaxed max-w-2xl mx-auto mt-4">
              Comprehensive protection for every need. Covering 7 Corporate Solutions and 7 Retail Lines with the integrity of a 75-year legacy.
            </p>
          </ScrollReveal>

          {/* 4 Stat Cards Row */}
          <ScrollReveal variant="fadeUp" delay={0.15} className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12">
            <div className="bg-white rounded-2xl p-6 text-center border border-slate-200/80 shadow-md hover:shadow-xl hover:border-[#C59B27] hover:-translate-y-0.5 transition-all flex flex-col justify-center items-center">
              <span className="font-sans text-3xl sm:text-4xl font-bold text-[#011331] tracking-normal">
                75+
              </span>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-2">
                YEARS LEGACY
              </span>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center border border-slate-200/80 shadow-md hover:shadow-xl hover:border-[#C59B27] hover:-translate-y-0.5 transition-all flex flex-col justify-center items-center">
              <span className="font-sans text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#011331] tracking-normal whitespace-nowrap">
                ₹100+ Cr
              </span>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-2">
                CLAIMS ASSISTED
              </span>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center border border-slate-200/80 shadow-md hover:shadow-xl hover:border-[#C59B27] hover:-translate-y-0.5 transition-all flex flex-col justify-center items-center">
              <span className="font-sans text-3xl sm:text-4xl font-bold text-[#011331] tracking-normal">
                10,000+
              </span>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-2">
                LIVES PROTECTED
              </span>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center border border-slate-200/80 shadow-md hover:shadow-xl hover:border-[#C59B27] hover:-translate-y-0.5 transition-all flex flex-col justify-center items-center">
              <span className="font-sans text-3xl sm:text-4xl font-bold text-[#011331] tracking-normal">
                500+
              </span>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-2">
                BUSINESS PORTFOLIOS
              </span>
            </div>
          </ScrollReveal>

          {/* Infinite Brand Marquee Carousel */}
          <div className="relative w-full overflow-hidden py-3">
            {/* Soft Edge Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#F9F8F6] via-[#F9F8F6]/90 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#F9F8F6] via-[#F9F8F6]/90 to-transparent z-10 pointer-events-none" />

            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 30,
                ease: "linear",
                repeat: Infinity,
              }}
              className="flex items-center gap-4 sm:gap-6 w-max"
            >
              {[
                { name: "Bajaj General", tag: "GENERAL INSURANCE", color: "text-blue-700" },
                { name: "Generali Central", tag: "GLOBAL PARTNER", color: "text-red-700" },
                { name: "ICICI Lombard", tag: "GENERAL INSURANCE", color: "text-amber-800" },
                { name: "HDFC ERGO", tag: "GENERAL INSURANCE", color: "text-red-600" },
                { name: "Digit Insurance", tag: "GENERAL INSURANCE", color: "text-slate-800" },
                { name: "TATA AIG", tag: "GENERAL INSURANCE", color: "text-sky-800" },
                { name: "Oriental Insurance", tag: "GOVT OF INDIA", color: "text-blue-900" },
                { name: "New India Assurance", tag: "GOVT OF INDIA", color: "text-blue-800" },
                { name: "Bajaj Life", tag: "LIFE GOALS DONE", color: "text-blue-700" },
                { name: "HDFC Life", tag: "SAR UTHA KE JIYO", color: "text-red-600" },
                { name: "TATA AIA", tag: "LIFE INSURANCE", color: "text-sky-800" },
                { name: "ICICI Prudential", tag: "LIFE INSURANCE", color: "text-amber-800" },
                { name: "LIC of India", tag: "LIFE INSURANCE", color: "text-blue-900" },
                { name: "Bajaj General", tag: "GENERAL INSURANCE", color: "text-blue-700" },
                { name: "Generali Central", tag: "GLOBAL PARTNER", color: "text-red-700" },
                { name: "ICICI Lombard", tag: "GENERAL INSURANCE", color: "text-amber-800" },
                { name: "HDFC ERGO", tag: "GENERAL INSURANCE", color: "text-red-600" },
                { name: "Digit Insurance", tag: "GENERAL INSURANCE", color: "text-slate-800" },
                { name: "TATA AIG", tag: "GENERAL INSURANCE", color: "text-sky-800" },
                { name: "Oriental Insurance", tag: "GOVT OF INDIA", color: "text-blue-900" },
                { name: "New India Assurance", tag: "GOVT OF INDIA", color: "text-blue-800" },
                { name: "Bajaj Life", tag: "LIFE GOALS DONE", color: "text-blue-700" },
                { name: "HDFC Life", tag: "SAR UTHA KE JIYO", color: "text-red-600" },
                { name: "TATA AIA", tag: "LIFE INSURANCE", color: "text-sky-800" },
                { name: "ICICI Prudential", tag: "LIFE INSURANCE", color: "text-amber-800" },
                { name: "LIC of India", tag: "LIFE INSURANCE", color: "text-blue-900" },
              ].map((partner, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl px-6 py-4 border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col items-center justify-center min-w-[180px] sm:min-w-[200px] h-20 sm:h-22 flex-shrink-0"
                >
                  <span className={`font-extrabold text-xs sm:text-sm tracking-wider uppercase ${partner.color}`}>
                    {partner.name}
                  </span>
                  <span className="text-[9px] font-extrabold text-slate-400 uppercase tracking-widest mt-1">
                    {partner.tag}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Interactive Services Section */}
      <section className="w-full py-14 sm:py-16 lg:py-20 bg-[#F8F7F3] relative overflow-hidden">
        {/* Ambient Subtle Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#C59B27]/5 rounded-full blur-3xl pointer-events-none z-0" />

        <div className="w-full max-w-[1600px] 2xl:max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">

          {/* Interactive Filter Bar & Search */}
          <ScrollReveal variant="fadeUp" delay={0.1} className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 sm:mb-14">
            {/* Segmented Category Buttons */}
            <div className="flex items-center gap-2 bg-white/90 backdrop-blur-md p-1.5 rounded-2xl border border-slate-200/80 shadow-sm w-full md:w-auto justify-center">
              <button
                onClick={() => setActiveCategory("ALL")}
                className={`px-5 py-2.5 rounded-xl font-extrabold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === "ALL"
                    ? "bg-[#011331] text-[#C59B27] shadow-md border border-[#C59B27]/40"
                    : "text-slate-600 hover:text-[#011331] hover:bg-slate-100/70"
                }`}
              >
                <span>All Solutions</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${activeCategory === "ALL" ? "bg-[#C59B27] text-[#011331]" : "bg-slate-200 text-slate-700"}`}>
                  {servicesData.length}
                </span>
              </button>

              <button
                onClick={() => setActiveCategory("RETAIL")}
                className={`px-5 py-2.5 rounded-xl font-extrabold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === "RETAIL"
                    ? "bg-[#011331] text-[#C59B27] shadow-md border border-[#C59B27]/40"
                    : "text-slate-600 hover:text-[#011331] hover:bg-slate-100/70"
                }`}
              >
                <User className="w-3.5 h-3.5 text-[#C59B27]" />
                <span>Retail Solutions</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${activeCategory === "RETAIL" ? "bg-[#C59B27] text-[#011331]" : "bg-slate-200 text-slate-700"}`}>
                  {retailCount}
                </span>
              </button>

              <button
                onClick={() => setActiveCategory("CORPORATE")}
                className={`px-5 py-2.5 rounded-xl font-extrabold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === "CORPORATE"
                    ? "bg-[#011331] text-[#C59B27] shadow-md border border-[#C59B27]/40"
                    : "text-slate-600 hover:text-[#011331] hover:bg-slate-100/70"
                }`}
              >
                <Briefcase className="w-3.5 h-3.5 text-[#C59B27]" />
                <span>Corporate Solutions</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${activeCategory === "CORPORATE" ? "bg-[#C59B27] text-[#011331]" : "bg-slate-200 text-slate-700"}`}>
                  {corporateCount}
                </span>
              </button>
            </div>

            {/* Keyword Search Input */}
            <div className="relative w-full md:w-72 lg:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search services (e.g. Health, Fire, Vehicle)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-slate-200/80 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#C59B27] focus:ring-1 focus:ring-[#C59B27] transition-all shadow-xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </ScrollReveal>

          {/* Services Cards Grid with High Quality Thumbnails */}
          {filteredServices.length > 0 ? (
            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 lg:gap-8">
              <AnimatePresence mode="popLayout">
                {filteredServices.map((service) => {
                  const Icon = service.icon;
                  return (
                    <motion.div
                      key={service.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      className="group relative bg-white rounded-2xl border border-slate-200/80 shadow-md hover:shadow-2xl hover:border-[#C59B27] transition-all duration-300 flex flex-col justify-between overflow-hidden"
                    >
                      {/* Top Card Image Thumbnail with Overlay Badges */}
                        <div className="relative h-48 sm:h-52 w-full bg-slate-900 overflow-hidden">
                          <Image
                            src={service.img}
                            alt={service.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover object-center transition-transform duration-500 group-hover:scale-108"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#011331]/90 via-[#011331]/30 to-transparent" />

                          {/* Category Badge on Top Left */}
                          <div className="absolute top-3.5 left-3.5 z-10">
                            <span
                              className={`text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-md backdrop-blur-md border ${
                                service.category === "RETAIL"
                                  ? "bg-[#011331]/90 text-[#F5D77F] border-[#C59B27]/40"
                                  : "bg-[#C59B27]/90 text-[#011331] border-white/40"
                              }`}
                            >
                              {service.category} SOLUTION
                            </span>
                          </div>

                          {/* Icon Circle on Bottom Right of Image */}
                          <div className="absolute bottom-3.5 right-3.5 z-10 w-11 h-11 rounded-xl bg-[#011331]/90 backdrop-blur-md border border-[#C59B27]/50 text-[#C59B27] flex items-center justify-center shadow-lg group-hover:bg-[#C59B27] group-hover:text-[#011331] transition-colors duration-300">
                            <Icon className="w-5 h-5 stroke-[1.8]" />
                          </div>
                        </div>

                        {/* Card Content Body */}
                        <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
                          <div>
                            {/* Title */}
                            <h3 className="font-cormorant text-2xl font-extrabold text-[#011331] group-hover:text-[#C59B27] transition-colors leading-tight mb-2.5">
                              {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium mb-4 line-clamp-3">
                              {service.shortDesc}
                            </p>

                            {/* Highlights List */}
                            <div className="space-y-2 pt-3 border-t border-slate-100">
                              {service.highlights.map((h, i) => (
                                <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C59B27] flex-shrink-0" />
                                  <span>{h}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Card Footer Action */}
                          <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
                            <button
                              onClick={() => setSelectedService(service)}
                              className="group/btn flex items-center gap-1.5 bg-[#011331] hover:bg-[#071f47] text-[#C59B27] hover:text-white font-extrabold text-xs tracking-widest px-4 py-2.5 rounded-lg border border-[#C59B27]/30 transition-all uppercase"
                            >
                              <span>READ MORE</span>
                              <ChevronRight className="w-3.5 h-3.5 text-[#C59B27] group-hover/btn:translate-x-1 transition-transform" />
                            </button>

                            <Link
                              href={`/contact?service=${encodeURIComponent(service.title)}`}
                              className="text-xs font-bold text-[#011331] hover:text-[#C59B27] transition-colors flex items-center gap-1 uppercase tracking-wider"
                            >
                              <span>GET QUOTE</span>
                              <ArrowRight className="w-3.5 h-3.5 text-[#C59B27]" />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl border border-slate-200/80 p-8 max-w-md mx-auto">
              <HelpCircle className="w-12 h-12 text-[#C59B27] mx-auto mb-3 opacity-60" />
              <h3 className="font-cormorant text-xl font-bold text-[#011331]">No solutions found</h3>
              <p className="text-xs text-slate-500 mt-1">Try adjusting your search keyword or selected category tab.</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("ALL");
                }}
                className="mt-4 text-xs font-extrabold text-[#011331] bg-amber-100/60 px-4 py-2 rounded-lg hover:bg-[#C59B27] hover:text-white transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>



      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#011331]/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl border border-[#C59B27]/40 shadow-2xl overflow-hidden text-slate-900 max-h-[90vh] flex flex-col"
            >
              {/* Header Banner with Image Background */}
              <div className="relative h-44 sm:h-52 bg-slate-900 p-6 sm:p-8 flex items-end">
                <Image
                  src={selectedService.img}
                  alt={selectedService.title}
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#011331] via-[#011331]/70 to-transparent" />

                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-[#011331]/80 hover:bg-[#011331] text-white flex items-center justify-center transition-colors border border-white/20 shadow-lg"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="relative z-10 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#011331] border-2 border-[#C59B27] flex items-center justify-center text-[#C59B27] shadow-xl flex-shrink-0">
                    <selectedService.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="bg-[#C59B27]/20 border border-[#C59B27]/40 text-[#F5D77F] text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full inline-block mb-1">
                      {selectedService.category} SOLUTION
                    </span>
                    <h3 className="font-cormorant text-2xl sm:text-3xl font-extrabold text-white">
                      {selectedService.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                <div>
                  <h4 className="text-xs font-extrabold uppercase text-[#B8860B] tracking-wider mb-2">
                    OVERVIEW & SCOPE
                  </h4>
                  <p className="text-slate-700 text-sm leading-relaxed font-medium">
                    {selectedService.fullDesc}
                  </p>
                </div>

                {/* Detailed Coverage Items */}
                <div>
                  <h4 className="text-xs font-extrabold uppercase text-[#B8860B] tracking-wider mb-3 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#C59B27]" />
                    <span>WHAT IS COVERED</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedService.coverage.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs font-semibold text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-200/70">
                        <CheckCircle2 className="w-4 h-4 text-[#C59B27] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Target Audience */}
                <div className="bg-[#F8F7F3] p-4 rounded-2xl border border-slate-200/80">
                  <h4 className="text-xs font-extrabold uppercase text-[#011331] tracking-wider mb-1">
                    RECOMMENDED FOR
                  </h4>
                  <p className="text-slate-600 text-xs leading-relaxed font-medium">
                    {selectedService.whoNeedsIt}
                  </p>
                </div>

                {/* Claim Support Commitment */}
                <div className="bg-amber-50/60 p-4 rounded-2xl border border-[#C59B27]/30 flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#B8860B] flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-extrabold text-[#011331] uppercase">FORTUNE 5 CLAIM COMMITMENT</h5>
                    <p className="text-slate-700 text-xs font-medium mt-0.5">{selectedService.claimHighlight}</p>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200/80 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-xs font-bold text-slate-600 hover:text-slate-900"
                >
                  Close Window
                </button>
                <Link
                  href={`/contact?service=${encodeURIComponent(selectedService.title)}`}
                  className="flex items-center gap-2 bg-[#011331] hover:bg-[#071f47] text-white font-extrabold text-xs px-6 py-3 rounded-xl border border-slate-900 transition-colors uppercase tracking-wider shadow-md"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-[#C59B27]" />
                  <span>Request Custom Quote</span>
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}
