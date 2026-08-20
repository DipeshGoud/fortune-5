"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Star,
  Quote,
  CheckCircle2,
  ShieldCheck,
  Search,
  Sparkles,
  MessageSquarePlus,
  X,
  Send,
  ArrowRight,
  Loader2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  category: "Corporate" | "Retail & HNI" | "Claims Story" | "Employee Benefits";
  rating: number;
  avatar?: string;
  quote: string;
  fullStory: string;
  policyType: string;
  claimSettledAmount?: string;
  verified: boolean;
}

const testimonialsData: Testimonial[] = [
  {
    id: "test-1",
    name: "Vikramaditya Singhania",
    role: "Managing Director",
    company: "Singhania Industrial Synthetics Ltd.",
    location: "Mumbai, Maharashtra",
    category: "Claims Story",
    rating: 5,
    quote:
      "When a severe electrical fire struck our Bhiwandi chemical facility, Fortune 5's claims team had a senior surveyor on-site within 6 hours. They secured a ₹18.5 Crore settlement with zero disputes.",
    fullStory:
      "During our Bhiwandi factory fire in 2024, we faced massive business interruption losses and property destruction. Kaushal Shah and the Fortune 5 claims advocacy team personally supervised loss estimation, coordinated daily with underwriters, and ensured full claim settlement of ₹18.5 Crores without haircut deduction. Their 75-year legacy is felt in every critical moment.",
    policyType: "Industrial All Risk & Business Interruption",
    claimSettledAmount: "₹18.5 Crores",
    verified: true,
  },
  {
    id: "test-2",
    name: "Rajesh Kulkarni",
    role: "Chief Human Resources Officer",
    company: "Apex TechSolutions Pvt. Ltd.",
    location: "Pune, Maharashtra",
    category: "Employee Benefits",
    rating: 5,
    quote:
      "Managing group mediclaim for 4,500+ employees used to be an administrative nightmare. Fortune 5 restructured our corporate buffer pool, reducing annual premium costs by 16% while raising employee satisfaction.",
    fullStory:
      "Fortune 5 introduced a seamless digital TPA portal and dedicated corporate claims hotline for our 4,500 tech staff across Pune and Hyderabad. Their proactive wellness webinars and cashless hospital network onboarding reduced HR escalation tickets by over 80%.",
    policyType: "Group Health & Personal Accident (GHI/GPA)",
    verified: true,
  },
  {
    id: "test-3",
    name: "Dr. Ananya Merchant",
    role: "Founder & Chief Radiologist",
    company: "Merchant Imaging & Healthcare Centers",
    location: "Thane, Maharashtra",
    category: "Retail & HNI",
    rating: 5,
    quote:
      "From critical illness floaters for my family to professional indemnity for my diagnostic centers, Fortune 5 has provided unbiased, high-touch advice across three generations of our family.",
    fullStory:
      "My late father trusted Kaushal Shah's father back in the 1980s, and today my entire family and hospital chain rely on Fortune 5. They conduct annual policy audits to ensure our coverage limits match current healthcare costs and technological risk exposures.",
    policyType: "Family Floater & Professional Indemnity",
    verified: true,
  },
  {
    id: "test-4",
    name: "Harishchandra Mehta",
    role: "Chairman",
    company: "Mehta Logistics & Maritime Transport",
    location: "JNPT Port, Navi Mumbai",
    category: "Corporate",
    rating: 5,
    quote:
      "Our fleet of 300+ commercial trailers and container vessels demands instant transit claim response. Fortune 5's marine open policies have saved us millions in cargo damage disputes.",
    fullStory:
      "Logistics delays directly impact our bottom line. Fortune 5 designed a marine cargo open policy covering container damage, port theft, and transit delays. Their team handles surveyor appointments globally, keeping our loss ratio exceptionally low.",
    policyType: "Marine Cargo Open Policy & Fleet Motor",
    verified: true,
  },
  {
    id: "test-5",
    name: "Sunil Deshmukh",
    role: "Chief Financial Officer",
    company: "Solapur Textile Mills Corp.",
    location: "Solapur, Maharashtra",
    category: "Claims Story",
    rating: 5,
    quote:
      "A monsoon flood damaged our raw cotton inventory worth ₹4.2 Crores. Fortune 5 fought our case through technical surveyor audits and achieved 100% claim recovery within 45 days.",
    fullStory:
      "Following unprecedented flash floods, our cotton warehouses suffered extensive water damage. Insurers initially disputed stock valuation methods. Priya Nair and the legal claims wing at Fortune 5 presented clear historical purchase logs and secured full payment of ₹4.2 Crores.",
    policyType: "Fire & Flood Stock Package Policy",
    claimSettledAmount: "₹4.2 Crores",
    verified: true,
  },
  {
    id: "test-6",
    name: "Kavita Rao",
    role: "Head of Operations & Administration",
    company: "Zest Retail Chain & Outlets",
    location: "Bengaluru, Karnataka",
    category: "Corporate",
    rating: 5,
    quote:
      "We operate 45 retail stores across South India. Fortune 5 created a consolidated Shopkeeper All Risk package covering counter cash, plate glass, theft, and public liability under a single renewal date.",
    fullStory:
      "Managing 45 separate risk policies was a nightmare. Fortune 5 unified all 45 retail outlets into a single master policy with localized claims assistance. Renewal administration time dropped from weeks to a single afternoon.",
    policyType: "Shopkeeper All Risk & Public Liability",
    verified: true,
  },
  {
    id: "test-7",
    name: "Mahesh Chordia",
    role: "Managing Director",
    company: "Chordia Real Estate & Infrastructure",
    location: "Pune, Maharashtra",
    category: "Corporate",
    rating: 5,
    quote:
      "For our 120-acre commercial IT park construction project, Fortune 5 placed a bulletproof Contractor All Risk (CAR) policy covering site collapse, third-party damage, and machinery breakdown.",
    fullStory:
      "Large-scale construction carries immense civil engineering and third-party liabilities. Fortune 5 audited our site contracts, negotiated zero-deductible terms for surrounding property damage, and coordinated smooth inspection audits throughout construction.",
    policyType: "Contractor All Risk (CAR) & Erection All Risk",
    verified: true,
  },
  {
    id: "test-8",
    name: "Sameer Vora",
    role: "Family Office Trustee",
    company: "Vora Family Wealth Management",
    location: "South Mumbai",
    category: "Retail & HNI",
    rating: 5,
    quote:
      "They manage our family office's art collection, luxury real estate, and global travel protection. Fortune 5 represents the pinnacle of private client risk stewardship in India.",
    fullStory:
      "Private wealth protection requires absolute confidentiality and meticulous attention to detail. Fortune 5 has advised our family office for over 25 years, tailoring risk coverage for high-value artwork, vintage automobiles, and global medical emergencies.",
    policyType: "Private Wealth, Art & Luxury Real Estate",
    verified: true,
  },
];

const testimonialCategories = ["All", "Corporate", "Retail & HNI", "Claims Story", "Employee Benefits"] as const;

const proofPoints = [
  { value: "500+", label: "businesses protected" },
  { value: "10,000+", label: "lives protected" },
  { value: "₹100+ Cr", label: "claims assisted" },
  { value: "75+", label: "years of legacy" },
];

export default function TestimonialsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);
  const [showSubmitModal, setShowSubmitModal] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isSubmittingReview, setIsSubmittingReview] = useState<boolean>(false);
  const [submitReviewError, setSubmitReviewError] = useState<string | null>(null);
  const [reviewForm, setReviewForm] = useState({
    name: "",
    company: "",
    role: "",
    testimonial: "",
  });

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: testimonialsData.length };
    testimonialCategories.forEach((cat) => {
      if (cat !== "All") {
        counts[cat] = testimonialsData.filter(
          (t) => t.category.trim().toLowerCase() === cat.trim().toLowerCase()
        ).length;
      }
    });
    return counts;
  }, []);

  const filteredTestimonials = useMemo(() => {
    return testimonialsData.filter((item) => {
      const matchesCategory =
        activeCategory.trim().toLowerCase() === "all" ||
        item.category.trim().toLowerCase() === activeCategory.trim().toLowerCase();
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.company.toLowerCase().includes(query) ||
        item.role.toLowerCase().includes(query) ||
        item.quote.toLowerCase().includes(query) ||
        item.fullStory.toLowerCase().includes(query) ||
        item.policyType.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingReview(true);
    setSubmitReviewError(null);

    try {
      const response = await fetch("https://formsubmit.co/ajax/insure@fortune5.in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          client_name: reviewForm.name,
          company: reviewForm.company,
          role: reviewForm.role,
          review_content: reviewForm.testimonial,
          _subject: `New Client Testimonial Review: ${reviewForm.name} (${reviewForm.company})`,
          _template: "table",
          _captcha: "false",
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setShowSubmitModal(false);
          setReviewForm({ name: "", company: "", role: "", testimonial: "" });
        }, 3000);
      } else {
        setSubmitReviewError("Unable to submit review. Please try again.");
      }
    } catch (err) {
      console.error("Testimonial review submit error:", err);
      setSubmitReviewError("Network error. Please try again.");
    } finally {
      setIsSubmittingReview(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#F9F8F6] text-slate-900 flex flex-col selection:bg-amber-100 selection:text-amber-900 overflow-x-hidden">
      <TopBar />
      <Navbar />

      {/* Testimonials Hero Section with Clean Aesthetics */}
      <section className="relative overflow-hidden bg-[#F9F8F6] pb-16 pt-[170px] sm:pb-20 sm:pt-[190px] lg:pb-24 lg:pt-[210px] border-b border-slate-200/80">
        {/* Soft Ambient Radial Vignette & Central Gold Glow */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(249,248,246,0.4)_0%,rgba(249,248,246,0.85)_65%,rgba(249,248,246,1)_100%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#c59b27]/10 via-[#f5d77f]/20 to-[#c59b27]/10 rounded-full blur-3xl pointer-events-none z-0" />

        {/* Clean Vector Watermark Art (Seamless & Edge-free) */}
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-8 top-1/2 -translate-y-1/2 text-[#c59b27]/12 pointer-events-none hidden lg:block select-none"
        >
          <Quote className="h-64 w-64 stroke-[1]" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0], rotate: [0, -2, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-8 top-1/3 text-[#c59b27]/10 pointer-events-none hidden lg:block select-none transform rotate-180"
        >
          <Quote className="h-56 w-56 stroke-[1]" />
        </motion.div>

        {/* Staggered Floating Micro Testimonial Cards (4 distinct locations around hero) */}
        
        {/* Card 1: Top-Left */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: [0, -7, 0] }}
          transition={{
            opacity: { duration: 0.8, delay: 0.2 },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute left-4 xl:left-8 2xl:left-14 top-48 z-10 hidden lg:flex items-center gap-3 bg-white/95 backdrop-blur-xl p-3.5 pr-5 rounded-2xl border border-[#e5e1d6] shadow-[0_10px_32px_rgba(7,26,56,0.05)] max-w-[260px] transition-all hover:shadow-[0_14px_36px_rgba(197,155,39,0.12)] hover:border-[#c59b27]/40 group"
        >
          <div className="relative h-10 w-10 shrink-0 rounded-full overflow-hidden border border-[#c59b27]/40 shadow-sm transition-transform group-hover:scale-105">
            <Image
              src="/testimonials/client-avatar-1.webp"
              alt="Rajesh Mehta"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div className="flex items-center gap-1 mb-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3 w-3 text-[#c59b27] fill-[#c59b27]" />
              ))}
            </div>
            <p className="text-[11px] font-medium text-slate-800 leading-snug italic">
              &quot;Prompt claim settlement during crisis.&quot;
            </p>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-0.5">
              Rajesh Mehta • CFO
            </p>
          </div>
        </motion.div>

        {/* Card 2: Bottom-Left Staggered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: [0, -8, 0] }}
          transition={{
            opacity: { duration: 0.8, delay: 0.4 },
            y: { duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: 1 },
          }}
          className="absolute left-8 xl:left-14 2xl:left-24 bottom-10 z-10 hidden lg:flex items-center gap-3 bg-white/95 backdrop-blur-xl p-3.5 pr-5 rounded-2xl border border-[#e5e1d6] shadow-[0_10px_32px_rgba(7,26,56,0.05)] max-w-[260px] transition-all hover:shadow-[0_14px_36px_rgba(197,155,39,0.12)] hover:border-[#c59b27]/40 group"
        >
          <div className="relative h-10 w-10 shrink-0 rounded-full overflow-hidden border border-[#c59b27]/40 shadow-sm transition-transform group-hover:scale-105">
            <Image
              src="/testimonials/client-avatar-3.webp"
              alt="Vikramaditya R."
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div className="flex items-center gap-1 mb-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3 w-3 text-[#c59b27] fill-[#c59b27]" />
              ))}
            </div>
            <p className="text-[11px] font-medium text-slate-800 leading-snug italic">
              &quot;Saved 35% on property & asset cover.&quot;
            </p>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-0.5">
              Vikramaditya R. • MD
            </p>
          </div>
        </motion.div>

        {/* Card 3: Top-Right Staggered */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: [0, -6, 0] }}
          transition={{
            opacity: { duration: 0.8, delay: 0.3 },
            y: { duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
          }}
          className="absolute right-4 xl:right-8 2xl:right-14 top-52 z-10 hidden lg:flex items-center gap-3 bg-white/95 backdrop-blur-xl p-3.5 pr-5 rounded-2xl border border-[#e5e1d6] shadow-[0_10px_32px_rgba(7,26,56,0.05)] max-w-[260px] transition-all hover:shadow-[0_14px_36px_rgba(197,155,39,0.12)] hover:border-[#c59b27]/40 group"
        >
          <div className="relative h-10 w-10 shrink-0 rounded-full overflow-hidden border border-[#c59b27]/40 shadow-sm transition-transform group-hover:scale-105">
            <Image
              src="/testimonials/client-avatar-2.webp"
              alt="Ananya Sharma"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div className="flex items-center gap-1 mb-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3 w-3 text-[#c59b27] fill-[#c59b27]" />
              ))}
            </div>
            <p className="text-[11px] font-medium text-slate-800 leading-snug italic">
              &quot;Unmatched corporate risk advisory.&quot;
            </p>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-0.5">
              Ananya Sharma • HR VP
            </p>
          </div>
        </motion.div>

        {/* Card 4: Bottom-Right Staggered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: [0, -7, 0] }}
          transition={{
            opacity: { duration: 0.8, delay: 0.5 },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 },
          }}
          className="absolute right-8 xl:right-14 2xl:right-24 bottom-12 z-10 hidden lg:flex items-center gap-3 bg-white/95 backdrop-blur-xl p-3.5 pr-5 rounded-2xl border border-[#e5e1d6] shadow-[0_10px_32px_rgba(7,26,56,0.05)] max-w-[260px] transition-all hover:shadow-[0_14px_36px_rgba(197,155,39,0.12)] hover:border-[#c59b27]/40 group"
        >
          <div className="relative h-10 w-10 shrink-0 rounded-full overflow-hidden border border-[#c59b27]/40 shadow-sm transition-transform group-hover:scale-105">
            <Image
              src="/testimonials/client-avatar-4.webp"
              alt="Sunita Deshmukh"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div className="flex items-center gap-1 mb-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3 w-3 text-[#c59b27] fill-[#c59b27]" />
              ))}
            </div>
            <p className="text-[11px] font-medium text-slate-800 leading-snug italic">
              &quot;24/7 dedicated claims concierge.&quot;
            </p>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-0.5">
              Sunita D. • Ops Director
            </p>
          </div>
        </motion.div>

        {/* Hero Content Container */}
        <div className="relative z-10 mx-auto w-full max-w-4xl px-5 text-center sm:px-8">
          <nav aria-label="Breadcrumb" className="mb-7 flex items-center justify-center gap-2 text-[11px] font-bold tracking-[0.16em] text-slate-500 uppercase">
            <Link href="/" prefetch={false} className="transition-colors hover:text-[#a47a13]">Home</Link>
            <span className="h-px w-5 bg-[#c59b27]" />
            <span className="text-[#071a38]">Testimonials</span>
          </nav>

          <div className="inline-flex items-center gap-2 mb-5 rounded-full border border-[#c59b27]/30 bg-white/60 px-3.5 py-1.5 backdrop-blur-md shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c59b27] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c59b27]"></span>
            </span>
            <span className="text-[10px] font-extrabold tracking-[0.2em] text-[#a47a13] uppercase">
              Authentic Client Testimonial Stories
            </span>
          </div>

          <h1 className="font-cormorant text-5xl font-bold leading-[1.02] tracking-[-0.035em] text-[#071a38] sm:text-6xl xl:text-7xl">
            Stories behind <span className="text-[#b38618] relative inline-block">
              the confidence.
              <span className="absolute bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#c59b27]/50 to-transparent" />
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            The most meaningful measure of our work is the trust clients place in us before, during and long after a policy is issued.
          </p>

          {/* Social Proof Pill with Subtle Client Avatars */}
          <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-8">
            <div className="inline-flex items-center gap-4 rounded-full border border-[#e5e1d6] bg-white/90 px-6 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.04)] backdrop-blur-md transition-all hover:shadow-[0_8px_30px_rgba(197,155,39,0.12)] hover:border-[#c59b27]/40">
              <div className="flex -space-x-3 overflow-hidden">
                <div className="relative h-9 w-9 rounded-full border-2 border-white overflow-hidden shadow-sm">
                  <Image
                    src="/testimonials/client-avatar-1.webp"
                    alt="Client avatar 1"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-9 w-9 rounded-full border-2 border-white overflow-hidden shadow-sm">
                  <Image
                    src="/testimonials/client-avatar-2.webp"
                    alt="Client avatar 2"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-9 w-9 rounded-full border-2 border-white overflow-hidden shadow-sm">
                  <Image
                    src="/testimonials/executive-handshake.webp"
                    alt="Partnership portrait"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-[#071a38] text-[11px] font-extrabold text-[#f5d77f] shadow-sm">
                  500+
                </div>
              </div>
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-[#c59b27] fill-[#c59b27]" />
                  ))}
                  <span className="ml-1 text-sm font-extrabold text-[#071a38]">5.0 / 5.0</span>
                </div>
                <span className="text-[10px] font-extrabold tracking-wide text-slate-500 uppercase">Trusted by 500+ Enterprises & HNIs</span>
              </div>
            </div>

            <span className="hidden h-6 w-px bg-[#d8d3c4] sm:block" />

            <a href="#client-stories" className="group inline-flex items-center gap-2 rounded-full border border-[#071a38]/10 bg-white/70 px-5 py-3 text-xs font-extrabold tracking-[0.14em] text-[#071a38] uppercase transition hover:bg-[#071a38] hover:text-[#f5d77f] hover:border-[#071a38]">
              Explore stories <ArrowRight className="h-4 w-4 text-[#a47a13] transition-transform group-hover:translate-x-1 group-hover:text-[#f5d77f]" />
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-[#d8d3c4] bg-white">
        <div className="mx-auto grid w-full max-w-[1280px] grid-cols-2 px-5 sm:grid-cols-4 sm:px-8 lg:px-12 xl:px-0">
          {proofPoints.map((point, index) => (
            <div key={point.label} className={`py-6 text-center sm:py-8 ${index < proofPoints.length - 1 ? "border-r border-[#e5e1d6]" : ""}`}>
              <p className="font-cormorant text-3xl font-bold leading-none text-[#071a38] sm:text-4xl">{point.value}</p>
              <p className="mt-2 text-[10px] font-extrabold tracking-[0.1em] text-slate-500 uppercase sm:text-[11px]">{point.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Main Testimonials Section */}
      <section id="client-stories" className="relative w-full scroll-mt-24 overflow-hidden bg-[#f8f7f3] py-20 sm:py-24 lg:py-28">
        {/* Subtle Ambient Background Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#C59B27]/5 rounded-full blur-3xl pointer-events-none z-0" />

        <div className="relative z-10 mx-auto w-full max-w-[1380px] px-5 sm:px-8 lg:px-12 xl:px-16">
          
          {/* Section Introduction */}
          <ScrollReveal variant="fadeUp" className="mb-10 grid grid-cols-1 gap-5 border-b border-[#d8d3c4] pb-10 sm:mb-14 sm:pb-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
            <div>
              <div className="flex items-center gap-2 text-[#a47a13] text-xs font-extrabold tracking-[0.2em] uppercase">
                <Sparkles className="h-4 w-4 text-[#c59b27]" />
                What our clients say
              </div>
              <h2 className="mt-4 font-cormorant text-4xl font-bold leading-[1.02] tracking-[-0.025em] text-[#071a38] sm:text-5xl">
                The words that matter most.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              From claims that needed steady hands to portfolios built for the long term, discover why clients choose to keep Fortune 5 close.
            </p>
          </ScrollReveal>

          {/* Category Filter & Search Bar */}
          <ScrollReveal variant="fadeUp" delay={0.1} className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 sm:mb-14">
            {/* Filter Tabs with Count Badges */}
            <div className="flex items-center gap-2 bg-white/90 backdrop-blur-md p-1.5 rounded-2xl border border-slate-200/80 shadow-sm w-full md:w-auto justify-center flex-wrap">
              {testimonialCategories.map((cat) => {
                const isActive = activeCategory.trim().toLowerCase() === cat.trim().toLowerCase();
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 sm:px-5 py-2 rounded-xl font-extrabold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 flex items-center gap-2 ${
                      isActive
                        ? "bg-[#01327a] text-[#C59B27] shadow-md border border-[#C59B27]/40"
                        : "text-slate-600 hover:text-[#01327a] hover:bg-slate-100/70"
                    }`}
                  >
                    <span>{cat}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${isActive ? "bg-[#C59B27] text-[#01327a]" : "bg-slate-200 text-slate-700"}`}>
                      {categoryCounts[cat] || 0}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Actions: Search & Submit Review Button */}
            <div className="flex items-center gap-3 w-full md:w-auto">
              <div className="relative w-full md:w-64">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search reviews..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white border border-slate-200/80 rounded-xl pl-10 pr-8 py-2.5 text-xs sm:text-sm font-medium text-slate-800 focus:outline-none focus:border-[#C59B27] shadow-xs"
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

              <button
                onClick={() => setShowSubmitModal(true)}
                className="flex items-center gap-2 bg-[#01327a] hover:bg-[#01255e] text-[#C59B27] font-extrabold text-xs tracking-wider px-4 py-2.5 rounded-xl border border-[#C59B27]/40 transition-colors uppercase whitespace-nowrap shadow-md"
              >
                <MessageSquarePlus className="w-4 h-4 text-[#C59B27]" />
                <span className="hidden sm:inline">Share Review</span>
              </button>
            </div>
          </ScrollReveal>

          {/* Testimonial Cards Grid - Equal Heights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            <AnimatePresence mode="popLayout">
              {filteredTestimonials.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="group relative bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-[#C59B27] transition-all duration-300 flex flex-col justify-between overflow-hidden p-6 sm:p-7 h-full"
                >
                  <div>
                    {/* Top Header Row: Category Badge & Stars */}
                    <div className="flex items-center justify-between mb-3.5">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-50 text-[#B8860B] border border-[#C59B27]/30">
                        {item.category}
                      </span>

                      <div className="flex items-center gap-1">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 text-[#C59B27] fill-[#C59B27]" />
                        ))}
                      </div>
                    </div>

                    {/* Claim Amount / Coverage Badge Slot - Guaranteed Uniform Height */}
                    <div className="mb-4 min-h-[36px] flex items-center">
                      {item.claimSettledAmount ? (
                        <div className="w-full bg-[#01327a] text-[#F5D77F] px-3 py-1.5 rounded-xl text-xs font-extrabold flex items-center justify-between border border-[#C59B27]/40 shadow-2xs">
                          <span>Claim Settled:</span>
                          <span className="text-[#C59B27] text-xs font-bold">{item.claimSettledAmount}</span>
                        </div>
                      ) : (
                        <div className="w-full bg-slate-50 text-slate-600 px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center justify-between border border-slate-200/60">
                          <span className="text-slate-500 font-medium text-[11px]">Portfolio Status:</span>
                          <span className="text-[#B8860B] font-bold text-[11px] flex items-center gap-1">
                            <ShieldCheck className="w-3.5 h-3.5 text-[#C59B27]" />
                            <span>Active Verified</span>
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Quote Text Container - Fixed min-height for perfect alignment */}
                    <div className="relative mb-5 min-h-[88px] flex items-center">
                      <Quote className="w-7 h-7 text-[#C59B27]/20 absolute -top-1 -left-1 pointer-events-none" />
                      <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-medium pl-3 italic line-clamp-4">
                        &ldquo;{item.quote}&rdquo;
                      </p>
                    </div>
                  </div>

                  {/* Author Footer Info - Pinned to bottom */}
                  <div className="pt-4 border-t border-slate-100 flex items-end justify-between gap-2">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-cormorant text-base sm:text-lg font-extrabold text-[#01327a] group-hover:text-[#C59B27] transition-colors truncate">
                          {item.name}
                        </h4>
                        {item.verified && (
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C59B27] flex-shrink-0" />
                        )}
                      </div>
                      <p className="text-[11px] text-slate-500 font-bold leading-tight truncate mt-0.5">
                        {item.role} • <span className="text-slate-700">{item.company}</span>
                      </p>
                      <p className="text-[10px] text-[#B8860B] font-semibold mt-1 truncate">
                        {item.policyType}
                      </p>
                    </div>

                    <button
                      onClick={() => setSelectedTestimonial(item)}
                      className="text-[11px] font-extrabold text-[#01327a] hover:text-[#C59B27] uppercase underline underline-offset-2 flex-shrink-0 pb-0.5"
                    >
                      Read Story
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>



      {/* Full Testimonial Detail Modal */}
      <AnimatePresence>
        {selectedTestimonial && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#01327a]/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl border border-[#C59B27]/40 shadow-2xl overflow-hidden text-slate-900 max-h-[90vh] flex flex-col"
            >
              {/* Header */}
              <div className="relative bg-gradient-to-r from-[#01327a] via-[#01255e] to-[#01327a] p-6 sm:p-8 text-white">
                <button
                  onClick={() => setSelectedTestimonial(null)}
                  className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/20"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#01327a] border-2 border-[#C59B27] flex items-center justify-center text-[#C59B27] font-cormorant text-2xl font-extrabold shadow-xl flex-shrink-0">
                    {selectedTestimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <span className="bg-[#C59B27]/20 border border-[#C59B27]/40 text-[#F5D77F] text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full inline-block mb-1">
                      {selectedTestimonial.category} TESTIMONIAL
                    </span>
                    <h3 className="font-cormorant text-2xl sm:text-3xl font-extrabold text-white">
                      {selectedTestimonial.name}
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm font-semibold">
                      {selectedTestimonial.role} • {selectedTestimonial.company}
                    </p>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                <div>
                  <h4 className="text-xs font-extrabold uppercase text-[#B8860B] tracking-wider mb-2">
                    FULL CLIENT CASE STORY
                  </h4>
                  <p className="text-slate-700 text-sm leading-relaxed font-medium">
                    {selectedTestimonial.fullStory}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                  <div>
                    <span className="text-[10px] font-bold uppercase text-slate-500 block">Policy Portfolio</span>
                    <span className="text-xs font-extrabold text-[#01327a]">{selectedTestimonial.policyType}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase text-slate-500 block">Location</span>
                    <span className="text-xs font-extrabold text-[#01327a]">{selectedTestimonial.location}</span>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200/80 flex items-center justify-between">
                <button
                  onClick={() => setSelectedTestimonial(null)}
                  className="text-xs font-bold text-slate-600 hover:text-slate-900"
                >
                  Close Window
                </button>
                <Link
                  href="/contact"
                  prefetch={false}
                  className="flex items-center gap-2 bg-[#01327a] hover:bg-[#01255e] text-white font-extrabold text-xs px-5 py-2.5 rounded-xl border border-slate-900 transition-colors uppercase tracking-wider"
                >
                  <span>Consult Fortune 5 Team</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C59B27]" />
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Submit Testimonial Modal */}
      <AnimatePresence>
        {showSubmitModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#01327a]/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-lg bg-white rounded-3xl border border-[#C59B27]/40 shadow-2xl overflow-hidden text-slate-900 p-6 sm:p-8"
            >
              <button
                onClick={() => setShowSubmitModal(false)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="mb-6">
                <div className="text-[#B8860B] font-extrabold text-xs tracking-widest uppercase mb-1">
                  CLIENT FEEDBACK
                </div>
                <h3 className="font-cormorant text-2xl sm:text-3xl font-extrabold text-[#01327a]">
                  Share Your Experience
                </h3>
                <p className="text-slate-500 text-xs font-medium mt-1">
                  We value your trust. Let us know how Fortune 5 assisted your organization or family.
                </p>
              </div>

              {submitted ? (
                <div className="py-8 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                  <h4 className="font-cormorant text-2xl font-bold text-[#01327a]">Thank You!</h4>
                  <p className="text-xs text-slate-600 font-medium">
                    Your review has been submitted for verification. We appreciate your feedback.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmitReview} className="space-y-4">
                  {submitReviewError && (
                    <div className="rounded-xl border border-red-200 bg-red-50 p-2.5 text-xs font-semibold text-red-700">
                      {submitReviewError}
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] font-extrabold uppercase text-slate-700 block mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={reviewForm.name}
                        onChange={(e) => setReviewForm({ ...reviewForm, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-medium text-slate-800 focus:outline-none focus:border-[#C59B27]"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-extrabold uppercase text-slate-700 block mb-1">Company / Org *</label>
                      <input
                        type="text"
                        required
                        value={reviewForm.company}
                        onChange={(e) => setReviewForm({ ...reviewForm, company: e.target.value })}
                        placeholder="e.g. Apex Corp"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-medium text-slate-800 focus:outline-none focus:border-[#C59B27]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-extrabold uppercase text-slate-700 block mb-1">Role / Designation *</label>
                    <input
                      type="text"
                      required
                      value={reviewForm.role}
                      onChange={(e) => setReviewForm({ ...reviewForm, role: e.target.value })}
                      placeholder="e.g. Chief Risk Officer / Business Owner"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-medium text-slate-800 focus:outline-none focus:border-[#C59B27]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-extrabold uppercase text-slate-700 block mb-1">Your Testimonial *</label>
                    <textarea
                      required
                      rows={4}
                      value={reviewForm.testimonial}
                      onChange={(e) => setReviewForm({ ...reviewForm, testimonial: e.target.value })}
                      placeholder="Describe your experience with Fortune 5 advisory or claims support..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-xs font-medium text-slate-800 focus:outline-none focus:border-[#C59B27]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmittingReview}
                    className="w-full flex items-center justify-center gap-2 bg-[#01327a] hover:bg-[#01255e] text-white font-extrabold text-xs py-3.5 rounded-xl border border-slate-900 uppercase tracking-wider shadow-md transition-colors disabled:opacity-75 disabled:cursor-not-allowed"
                  >
                    {isSubmittingReview ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin text-[#C59B27]" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5 text-[#C59B27]" />
                        <span>Submit Review</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}
