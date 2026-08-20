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
  ListChecks,
  Lightbulb,
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
  policyTypes?: string[];
  benefits?: string[];
  keyPoints?: string[];
}

const servicesData: ServiceItem[] = [
  // --- CORPORATE RISK MANAGEMENT SOLUTIONS ---
  {
    id: "fire-burglary-insurance",
    title: "Fire / Burglary Insurance",
    category: "CORPORATE",
    icon: Flame,
    img: "/services/fire-insurance.jpg",
    shortDesc: "Protect your assets from both fire-related incidents and thefts to ensure complete security.",
    fullDesc:
      "Protect your assets from both fire-related incidents and thefts to ensure complete security.",
    highlights: ["Fire & Lightning Protection", "Burglary & Theft Cover", "Business Interruption", "Machinery & Stock Shield"],
    coverage: [
      "Safeguards corporate assets from fire, explosions, lightning, and fire-related damage.",
      "Provides protection against burglary, theft, and malicious damage."
    ],
    benefits: [
      "Covers damage to buildings, machinery, and stock caused by fire.",
      "Compensation for business interruption due to fire or burglary.",
      "Offers coverage for theft, robbery, or damage to property caused during the act of burglary.",
      "Protects both accidental fire and malicious intent fire damage."
    ],
    keyPoints: [
      "Ensure the insured sum covers both fire damage and theft losses adequately.",
      "Check for additional coverage for corporate interruption due to fire or burglary incidents."
    ],
    whoNeedsIt: "Manufacturing factories, industrial premises, warehouses, logistics centers, and commercial properties.",
    claimHighlight: "Immediate surveyor deputation and technical loss adjustment within 24 hours.",
  },
  {
    id: "employee-benefit-policy",
    title: "Employee Benefit Policy",
    category: "CORPORATE",
    icon: Users,
    img: "/services/employee-benefit-policy.webp",
    shortDesc: "Provide your employees with comprehensive coverage and secure their well-being with tailored benefit policies that cover health, accidents, and life risks.",
    fullDesc:
      "Provide your employees with comprehensive coverage and secure their well-being with tailored benefit policies that cover health, accidents, and life risks.",
    highlights: ["Group Health (GMC)", "Personal Accident (GPA)", "Group Term Life (GTL)", "Employee Compensation"],
    policyTypes: [
      "Group Health Insurance (GMC): Covers medical expenses for employees, including hospitalization, OPD treatments, maternity cover, and modern treatment methods.",
      "Group Personal Accident (GPA): Provides coverage for accidental death, disability, and injury for employees.",
      "Group Term Life (GTL): Offers life coverage to employees, providing a payout in the event of their death during employment.",
      "Employee Compensation: Protects employers by covering liabilities related to workplace accidents or illnesses suffered by employees."
    ],
    benefits: [
      "Extensive health benefits, including cashless treatments, pre-existing condition coverage, and maternity benefits.",
      "Covers accidental death and disability, ensuring financial security for employees' families.",
      "Life insurance to provide financial protection for the employee's family in case of loss of life.",
      "Employee compensation covers legal liabilities for workplace injuries or occupational diseases."
    ],
    coverage: [
      "In-patient Hospitalization & Cashless Treatments",
      "Day Care Procedures & Modern Medical Treatments",
      "Accidental Death & Permanent Disablement",
      "Group Term Life Protection Payouts",
      "Workplace Accident & Occupational Disease Liability"
    ],
    keyPoints: [
      "Choose coverage that suits the unique needs of your employees, balancing health and life risks.",
      "Review policy inclusions like OPD cover, maternity benefits, and modern treatment methods.",
      "Ensure the policy offers coverage for both permanent and contractual employees.",
      "Regularly update coverage to reflect any changes in the workforce size or structure."
    ],
    whoNeedsIt: "Corporates, IT firms, startups, manufacturing plants, and commercial organizations.",
    claimHighlight: "Dedicated corporate claims desk with direct HR escalation support.",
  },
  {
    id: "transit-insurance",
    title: "Transit Insurance",
    category: "CORPORATE",
    icon: Ship,
    img: "/services/transit-insurance.jpg",
    shortDesc: "Protect goods in transit, ensuring secure movement and flexibility with tailored marine policies.",
    fullDesc:
      "Protect goods in transit, ensuring secure movement and flexibility with tailored marine policies.",
    highlights: ["Air, Sea & Road Transit", "Damage & Theft Protection", "Domestic & International", "Loading & Unloading Cover"],
    coverage: [
      "Protects goods in transit (by air, sea, or road) from risks like damage, theft, and accidents."
    ],
    benefits: [
      "Covers damage or loss of goods during transportation",
      "Includes coverage for theft and accidents",
      "Flexibility in coverage for domestic and international transit"
    ],
    keyPoints: [
      "Evaluate the value of goods to choose the sum insured",
      "Confirm if coverage extends to loading and unloading"
    ],
    whoNeedsIt: "Exporters, importers, manufacturing firms, logistics operators, and commodity traders.",
    claimHighlight: "Pan-India and international port surveyor deputation for fast-track transit claim settlement.",
  },
  {
    id: "contractor-all-risk-insurance",
    title: "Contractor All Risk Insurance",
    category: "CORPORATE",
    icon: HardHat,
    img: "/services/contractor-all-risk-insurance.webp",
    shortDesc: "Comprehensive insurance for civil construction projects, covering a broad spectrum of risks.",
    fullDesc:
      "Comprehensive insurance for civil construction projects, covering a broad spectrum of risks.",
    highlights: ["Civil Construction Works", "Equipment Accidental Damage", "Third-Party Liability", "Natural Disasters Cover"],
    coverage: [
      "Comprehensive insurance for civil construction projects, covering against risks like damages, injuries, and accidents during construction."
    ],
    benefits: [
      "Covers accidental damages to construction site, equipment",
      "Includes third-party liability during construction",
      "Provides compensation for delays caused by accidents",
      "Covers natural disasters like earthquakes, floods"
    ],
    keyPoints: [
      "Coverage duration should match the construction timeline",
      "Ensure all contractors and subcontractors are covered"
    ],
    whoNeedsIt: "Infrastructure developers, EPC contractors, civil builders, and construction project principals.",
    claimHighlight: "On-site engineering surveyor inspection and rapid claim settlement.",
  },
  {
    id: "liability-insurance",
    title: "Liability Insurance",
    category: "CORPORATE",
    icon: Scale,
    img: "/services/liability-insurance.webp",
    shortDesc: "Covers corporates and individuals from various legal liabilities, offering protection for a wide range of risks, including damage to property or bodily injury.",
    fullDesc:
      "Covers corporates and individuals from various legal liabilities, offering protection for a wide range of risks, including damage to property or bodily injury.",
    highlights: ["Directors & Officers (D&O)", "Commercial General Liability", "Professional Indemnity", "Public Liability"],
    coverage: [
      "Directors and Officers (D&O) Liability: Protects the personal assets of directors and officers from legal claims related to their corporate roles.",
      "Commercial General Liability (CGL): Provides coverage for general corporate risks, including bodily injury, property damage, and advertising injury.",
      "Professional Indemnity: Protects professionals from claims made by clients for negligence, errors, or omissions in the services provided.",
      "Public Liability: Covers claims from third parties for bodily injury or property damage resulting from corporate operations."
    ],
    benefits: [
      "Covers compensation for third-party claims",
      "Protection against legal costs and settlements",
      "Includes coverage for bodily injury, property damage, and professional mistakes",
      "Can include various liabilities like D&O, CGL, Professional Indemnity, and Public Liability"
    ],
    keyPoints: [
      "Ensure the coverage is tailored to the specific risks of your corporate",
      "Review exclusions for specific industries and operations to ensure comprehensive protection"
    ],
    whoNeedsIt: "Corporate boards, consulting firms, IT companies, financial services, and commercial enterprises.",
    claimHighlight: "Expert legal advocacy, panel defense support, and swift settlement negotiations.",
  },
  {
    id: "miscellaneous-insurance",
    title: "Miscellaneous Insurance",
    category: "CORPORATE",
    icon: Layers,
    img: "/services/miscellaneous-insurance.avif",
    shortDesc: "Cover unique and less conventional risks that don’t fall under standard insurance categories. Miscellaneous Insurance provides protection for specialized needs tailored to individual or corporate-specific risks.",
    fullDesc:
      "Cover unique and less conventional risks that don’t fall under standard insurance categories. Miscellaneous Insurance provides protection for specialized needs tailored to individual or corporate-specific risks.",
    highlights: [ "Fidelity & Liability", "Boiler & Pressure Plant", "Credit Insurance"],
    policyTypes: [
      "Directors & Officers (D&O) Liability: Provides coverage to company directors and officers for legal liabilities arising from their professional actions and decisions.",
      "Fidelity & Liability Insurance: Protects corporates from financial losses caused by fraudulent acts or embezzlement by employees.",
      "Boiler and Pressure Plant Insurance: Covers damage to boilers and pressure plants due to explosions or other incidents.",
      "Credit Insurance: Shields corporates from losses due to non-payment of debts, protecting cash flow and ensuring corporate continuity."
    ],
    benefits: [
      "Offers financial protection for specific risks not typically covered under general insurance policies.",
      "Safeguards corporate leaders and critical infrastructure from unique liabilities and operational risks.",
      "Customizable solutions for industry-specific risks and operations.",
      "Protects against internal fraud, theft, and defaults, ensuring corporate stability."
    ],
    coverage: [
      "Directors & Officers Management Liability",
      "Employee Fraud & Embezzlement Fidelity Losses",
      "Boiler & Pressure Plant Explosion Damage",
      "Credit Risk & Trade Debt Non-Payment",
      "Specialized Industrial & Commercial Risks"
    ],
    keyPoints: [
      "Assess which miscellaneous policies best suit your corporate, especially if operating in high-risk environments or industries with unique liabilities.",
      "Regularly review coverage limits, especially for high-value equipment or liabilities like D&O coverage.",
      "Include specialised coverage as part of a broader risk management strategy to protect against unexpected incidents."
    ],
    whoNeedsIt: "Corporates, manufacturers with heavy machinery, cash/credit intensive businesses, and executive boards.",
    claimHighlight: "Comprehensive specialized risk documentation and quick claim adjustment.",
  },
  {
    id: "office-package-policy",
    title: "Office Comprehensive Package Policy",
    category: "CORPORATE",
    icon: Building,
    img: "/services/office-comprehensive-package-policy.webp",
    shortDesc: "Ensure financial protection for corporates with coverage against various risks such as fire, burglary, and machinery breakdown.",
    fullDesc:
      "Ensure financial protection for corporates with coverage against various risks such as fire, burglary, and machinery breakdown.",
    highlights: ["Property & Assets Cover", "Unexpected Events Shield", "Machinery Repair & Replace", "Custom Add-on Options"],
    coverage: [
      "Protects corporates against fire, burglary, and machinery breakdown."
    ],
    benefits: [
      "Covers damage to corporate property and assets",
      "Protects from financial losses due to unexpected events",
      "Includes compensation for machinery repair or replacement",
      "Offers flexibility with add-ons for specific needs"
    ],
    keyPoints: [
      "Evaluate sum insured based on asset value",
      "Check coverage limits for corporate interruptions"
    ],
    whoNeedsIt: "Corporate offices, IT firms, consultancies, shared workspaces, and commercial premises.",
    claimHighlight: "Single-window claims management across all office asset damage events.",
  },
  {
    id: "shopkeeper-insurance",
    title: "Shopkeeper All Risk Insurance",
    category: "CORPORATE",
    icon: Store,
    img: "/services/shopkeeper-all-risk-insurance.webp",
    shortDesc: "Get peace of mind by protecting your corporate from financial hazards with comprehensive coverage.",
    fullDesc:
      "Get peace of mind by protecting your corporate from financial hazards with comprehensive coverage.",
    highlights: ["Shop Structure & Contents", "Customer Liability", "Theft & Fire Cover", "Machinery Breakdown"],
    coverage: [
      "Comprehensive protection for small corporates against fire, theft, liability, and more."
    ],
    benefits: [
      "Covers damage to shop structure and contents",
      "Includes liability protection for customers",
      "Covers theft, fire, and machinery breakdown"
    ],
    keyPoints: [
      "Ensure policy covers both property and liability risks",
      "Check for optional add-ons like theft and flood coverage"
    ],
    whoNeedsIt: "Retail store owners, shopkeepers, showroom operators, supermarkets, and trade outlets.",
    claimHighlight: "Fast-track retail surveyor coordination and priority settlement for shop inventory.",
  },
  {
    id: "corporate-insurance",
    title: "Corporate Insurance",
    category: "CORPORATE",
    icon: Factory,
    img: "/services/corporate-insurance.avif",
    shortDesc: "Safeguard your corporate assets with specialized coverage designed for corporate entities, protecting against risks like fire, property damage, and liability.",
    fullDesc:
      "Safeguard your corporate assets with specialized coverage designed for corporate entities, protecting against risks like fire, property damage, and liability.",
    highlights: ["Fire & Property Cover", "Corporate Liability", "Asset Protection", "Large Entity Packages"],
    policyTypes: [
      "Fire & Property Insurance: Covers damages to office buildings, equipment, and other assets caused by fire, natural calamities like earthquakes, floods, and other specified risks.",
      "Liability Insurance: Protects your corporate from third-party legal claims, including property damage, bodily injury, and public liability.",
      "Corporate Asset Protection: Secures your office infrastructure, machinery, and essential equipment against unexpected risks."
    ],
    coverage: [
      "Fire & Property Damage to Buildings & Infrastructure",
      "Third-Party Legal Claims, Bodily Injury & Property Damage",
      "Corporate Asset, Plant & Machinery Protection",
      "Natural Calamities like Earthquakes, Storms & Floods"
    ],
    benefits: [
      "Tailored coverage options designed for large corporate entities.",
      "Comprehensive protection against fire, accidental damage, and property loss.",
      "Coverage includes protection against natural disasters like floods, earthquakes, etc.",
      "Liability insurance offers security from third-party claims and legal issues."
    ],
    keyPoints: [
      "Ensure your policy covers all critical corporate assets, such as buildings, machinery, and office equipment.",
      "Regularly review the sum insured to reflect the current replacement costs of your assets.",
      "Liability insurance is essential for protecting against potential third-party claims.",
      "Evaluate claim settlement ratios, details on claims handling, and grievance processes when choosing a provider."
    ],
    whoNeedsIt: "Large corporate entities, industrial enterprises, manufacturing facilities, and commercial organizations.",
    claimHighlight: "Dedicated senior corporate risk consultant and end-to-end claim settlement advocacy.",
  },

  // --- RETAIL RISK MANAGEMENT SOLUTIONS (PERSONAL LINES) ---
  {
    id: "health-insurance",
    title: "Health Insurance",
    category: "RETAIL",
    icon: HeartPulse,
    img: "/services/health-insurance.avif",
    shortDesc: "Comprehensive coverage for individuals and families, taking care of medical expenses, including hospitalisation.",
    fullDesc:
      "Comprehensive coverage for individuals and families, taking care of medical expenses, including hospitalisation.",
    highlights: ["Cashless at Network Hospitals", "Pre-Existing Conditions Cover", "Free Annual Health Check-ups", "Tax Benefits (Sec 80D)"],
    policyTypes: [
      "Base Health Insurance: Covers essential medical costs, including hospitalization, treatment, and surgeries.",
      "Top-up Insurance: Provides additional coverage when your base health insurance limit is exhausted.",
      "OPD Cover: Includes coverage for outpatient department visits.",
      "Maternity Cover: Coverage for maternity-related expenses.",
      "Annual Free Health Check-up: Preventive health check-up annually.",
      "Modern Treatment Cover: Includes new-age treatments and therapies.",
      "Worldwide Coverage: Health insurance policies with international coverage."
    ],
    benefits: [
      "Cashless treatment at network hospitals",
      "Covers pre-existing conditions after waiting period",
      "Add-ons for critical illness, personal accident, and more",
      "Covid-19 treatment and specific policies available",
      "Free annual health check-ups included",
      "Tax benefits under Section 80D of IT Act"
    ],
    coverage: [
      "Hospitalization & In-patient Medical Expenses",
      "Pre & Post-Hospitalization Care",
      "Day Care Procedures & Modern Treatments",
      "ICU & Room Rent Charges",
      "Ambulance & Emergency Expenses",
      "Pre-Existing Diseases (Post Waiting Period)"
    ],
    keyPoints: [
      "Check claim settlement ratios and grievance handling policies.",
      "Review the insurer's claim processes and customer service support.",
      "Ensure the sum insured covers modern treatments and international health needs."
    ],
    whoNeedsIt: "Individuals, families, salaried employees, and senior citizens.",
    claimHighlight: "24/7 cashless hospitalization assistance and claims support.",
  },
  {
    id: "vehicle-insurance",
    title: "Vehicle Insurance",
    category: "RETAIL",
    icon: Car,
    img: "/services/vehicle-insurance.avif",
    shortDesc: "Mandatory motor insurance, protecting your vehicle, driver, and passengers.",
    fullDesc:
      "Mandatory motor insurance, protecting your vehicle, driver, and passengers.",
    highlights: ["Accidental Damage & Theft", "Third-Party Liability", "Zero Depreciation Add-on", "Cashless Network Garages"],
    policyTypes: [
      "Comprehensive Insurance: Complete coverage for own damage and third-party liabilities.",
      "Own Damage Cover: Protects vehicle against accident, fire, theft, and natural perils.",
      "Third-Party Liability: Mandatory legal cover for injury, death, and property damage."
    ],
    benefits: [
      "Covers accidental damage, theft, and fire",
      "Third-party liability coverage",
      "Zero depreciation and other add-on covers available",
      "Cashless repair claims across network garages",
      "No Claim Bonus (NCB) discount retention"
    ],
    coverage: [
      "Accidental Damage & Collision Repair",
      "Theft & Total Vehicle Loss",
      "Fire, Lightning & Natural Calamities",
      "Third-Party Bodily Injury & Property Damage",
      "Personal Accident Cover for Owner-Driver",
      "Zero Depreciation & Roadside Assistance"
    ],
    keyPoints: [
      "Review policy add-ons like zero depreciation.",
      "Check for network garages for cashless claims."
    ],
    whoNeedsIt: "Car owners, two-wheeler owners, and commercial vehicle operators.",
    claimHighlight: "Instant digital survey coordination and cashless garage claims.",
  },
  {
    id: "travel-insurance",
    title: "Travel Insurance",
    category: "RETAIL",
    icon: Plane,
    img: "/services/travel-insurance.avif",
    shortDesc: "Secure your journeys with coverage for medical emergencies, loss of baggage, and more.",
    fullDesc:
      "Secure your journeys with coverage for medical emergencies, loss of baggage, and more.",
    highlights: ["Medical Emergency Abroad", "Lost Baggage Compensation", "Trip Delay & Cancellation", "Embassy & Visa Approved"],
    policyTypes: [
      "International Travel Insurance: Emergency medical, baggage, and trip cancellation cover abroad.",
      "Student Travel Insurance: Comprehensive medical and tuition fee protection for study abroad.",
      "Domestic Travel Insurance: Protection for domestic trips, cancellations, and lost baggage."
    ],
    benefits: [
      "Medical emergency coverage abroad",
      "Compensation for lost baggage and trip cancellation",
      "Includes coverage for delays and disruptions",
      "Cashless hospitalization through global assistance partners",
      "Personal liability coverage during travel"
    ],
    coverage: [
      "Overseas Emergency Medical & Hospitalization",
      "Loss of Checked Baggage & Passport",
      "Trip Cancellation & Missed Connections",
      "Flight Delays & Journey Disruptions",
      "Emergency Medical Evacuation",
      "Personal Liability Abroad"
    ],
    keyPoints: [
      "Ensure sufficient medical coverage for international trips.",
      "Check visa-mandated medical insurance requirements."
    ],
    whoNeedsIt: "International travelers, holidaying families, corporate professionals, and overseas students.",
    claimHighlight: "Global emergency medical assistance and 24/7 cashless claims support.",
  },
  {
    id: "personal-accident",
    title: "Personal Accident",
    category: "RETAIL",
    icon: ShieldAlert,
    img: "/services/personal-accident.avif",
    shortDesc: "Protect your family from financial hardships due to accidental death, disability, or loss of income.",
    fullDesc:
      "Protect your family from financial hardships due to accidental death, disability, or loss of income.",
    highlights: ["24/7 Worldwide Coverage", "No Medical Checkups Required", "Income Loss Compensation", "Accidental Death & Disability"],
    policyTypes: [
      "Individual Accident Cover: Direct protection for the primary earning family member.",
      "Family Accident Cover: Combined cover for self, spouse, and dependent children.",
      "Group Personal Accident: Employee accidental coverage for companies."
    ],
    benefits: [
      "Covers accidental death, partial/full disability",
      "Compensation for temporary loss of income",
      "Provides coverage without medical checkups",
      "Worldwide 24/7 financial protection",
      "Education fund support for dependent children"
    ],
    coverage: [
      "Accidental Death (100% Sum Insured)",
      "Permanent Total Disablement (PTD)",
      "Permanent Partial Disablement (PPD)",
      "Temporary Total Disablement (Weekly Income)",
      "Accidental Medical Expenses Reimbursement",
      "Emergency Transportation & Ambulance Cover"
    ],
    keyPoints: [
      "Choose sum insured based on income replacement needs.",
      "Ensure coverage for permanent and temporary disabilities."
    ],
    whoNeedsIt: "Salaried professionals, business owners, daily commuters, and family breadwinners.",
    claimHighlight: "Fast-track documentation and direct claim payout settlement.",
  },
  {
    id: "householder-insurance",
    title: "Householder Insurance",
    category: "RETAIL",
    icon: Home,
    img: "/services/householder-insurance.avif",
    shortDesc: "Comprehensive protection for your home, safeguarding the structure, contents, jewelry, and more from potential risks.",
    fullDesc:
      "Comprehensive protection for your home, safeguarding the structure, contents, jewelry, and more from potential risks.",
    highlights: ["Structure & Contents Cover", "Jewelry & Valuables Protection", "Natural Calamity & Fire Shield", "Burglary & Theft Protection"],
    policyTypes: [
      "Home Building Cover: Safeguards walls, structure, roof, and fixtures.",
      "Home Contents Cover: Protects furniture, appliances, electronics, and valuables.",
      "Comprehensive Package: Combined cover for building structure, contents, and liability."
    ],
    benefits: [
      "Protects home structure and contents from fire, theft, natural calamities, and other covered risks",
      "Ensures coverage for valuable items such as jewelry, antiques, and personal belongings",
      "Includes protection against burglary and accidental damage",
      "Option for additional coverage against natural disasters and unforeseen events",
      "Coverage against burglary, fire, and accidental damage to household items",
      "Includes liability coverage for third-party claims and employee compensation for domestic help"
    ],
    coverage: [
      "Fire, Lightning, Storm, Flood & Earthquake Damage",
      "Burglary, Theft & Housebreaking",
      "Electrical & Mechanical Breakdown of Appliances",
      "Jewelry, Gold & Valuables All-Risk Cover",
      "Plate Glass & Sanitary Fittings Damage",
      "Third-Party Liability on Premises"
    ],
    keyPoints: [
      "Check the coverage limits on high-value items such as jewelry and other valuables.",
      "Ensure the sum insured reflects the current replacement cost of your home's structure and interior contents.",
      "Review the policy for specific terms on claims, including settlement ratio, grievances, and the insurer's claim handling approach."
    ],
    whoNeedsIt: "Homeowners, apartment owners, landlords, and tenants.",
    claimHighlight: "Quick surveyor assistance and loss assessment for structural and content damage.",
  },
  {
    id: "life-insurance",
    title: "Life Insurance",
    category: "RETAIL",
    icon: ShieldCheck,
    img: "/services/life-insurance.avif",
    shortDesc: "Ensure the financial stability of your family with our tailored life insurance solutions.",
    fullDesc:
      "Secure Your Loved Ones' Future. Ensure the financial stability of your family with our tailored life insurance solutions. From term plans to whole life policies, we offer a variety of options to meet your needs at every stage of life.",
    highlights: ["Term, Whole Life & ULIP", "Children's & Pension Plans", "Critical Illness & Disability", "Tax Benefits (Sec 80C & 10D)"],
    policyTypes: [
      "Term Insurance: Provides death benefit for family security",
      "Whole Life Plans: Lifetime coverage with wealth growth",
      "Endowment Plan: Combines savings and life insurance",
      "Children's Plan: Provides financial security for children's education and life milestones",
      "Pension Plans: Guaranteed annuities for retirement",
      "ULIP: Combines life insurance with market-linked returns"
    ],
    benefits: [
      "Financial stability and protection for your family",
      "Coverage for death, permanent disability, and critical illness",
      "Wealth growth and savings combination options",
      "Guaranteed annuities for retirement planning",
      "Tax benefits under Section 80C and Section 10(10D)"
    ],
    coverage: [
      "Death Benefit & Guaranteed Family Protection",
      "Permanent Total & Partial Disability Cover",
      "Critical Illness Rider Acceleration",
      "Accidental Death Benefit",
      "Waiver of Future Premiums on Disablement",
      "Retirement Annuity & Maturity Returns"
    ],
    keyPoints: [
      "Consider long-term goals like retirement or education.",
      "Review market performance for ULIP plans."
    ],
    whoNeedsIt: "Family breadwinners, parents planning for children's education, and individuals planning for retirement.",
    claimHighlight: "Dedicated nominee claims support and prompt settlement assistance.",
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

  const LUXURY_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

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
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.6, 0.9, 0.6],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-[#C59B27]/5 rounded-full blur-3xl pointer-events-none z-0"
        />

        <div className="w-full max-w-4xl lg:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <ScrollReveal variant="fadeUp" className="text-center max-w-3xl mx-auto mb-12">
            <nav aria-label="Breadcrumb" className="mb-6 flex items-center justify-center gap-2 text-xs font-bold tracking-[0.18em] text-slate-400 uppercase">
              <Link href="/" prefetch={false} className="transition-colors hover:text-[#B8860B]">
                Home
              </Link>
              <span className="h-px w-5 bg-[#C59B27]" />
              <span className="text-[#B8860B]">Services</span>
            </nav>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: LUXURY_EASE }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-[#C59B27]/30 text-[#B8860B] font-extrabold text-[11px] sm:text-xs tracking-widest uppercase mb-3 shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C59B27]" />
              <span>75+ YEARS TRUSTED LEGACY</span>
            </motion.div>
            <h1 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#01327a] uppercase tracking-tight leading-[1.05]">
              OUR RISK MANAGEMENT{" "}
              <span className="text-[#C59B27]">
                SOLUTIONS
              </span>
            </h1>
            <p className="text-slate-600 text-sm sm:text-base lg:text-lg font-medium leading-relaxed max-w-2xl mx-auto mt-4">
              Comprehensive protection for every need. Covering 9 Corporate Solutions and 6 Retail Solutions with the integrity of a 75-year legacy.
            </p>
          </ScrollReveal>

          {/* 4 Stat Cards Row with Staggered Entrance & Micro Lift */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.15,
                },
              },
            }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12"
          >
            {[
              { value: "75+", label: "YEARS LEGACY" },
              { value: "₹100+ Cr", label: "CLAIMS ASSISTED", customClass: "whitespace-nowrap lg:text-[34px]" },
              { value: "10,000+", label: "LIVES PROTECTED" },
              { value: "500+", label: "BUSINESS PORTFOLIOS" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.85, ease: LUXURY_EASE }}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.25, ease: LUXURY_EASE },
                }}
                className="bg-white rounded-2xl p-6 text-center border border-slate-200/80 shadow-md hover:shadow-xl hover:border-[#C59B27] transition-all flex flex-col justify-center items-center cursor-default"
              >
                <span className={`font-sans text-3xl sm:text-4xl font-bold text-[#01327a] tracking-normal ${stat.customClass || ""}`}>
                  {stat.value}
                </span>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-2">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Infinite Brand Marquee Carousel */}
          <div className="relative w-full overflow-hidden py-3">
            {/* Soft Edge Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#F9F8F6] via-[#F9F8F6]/90 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#F9F8F6] via-[#F9F8F6]/90 to-transparent z-10 pointer-events-none" />

            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 34,
                ease: "linear",
                repeat: Infinity,
              }}
              className="flex items-center gap-4 sm:gap-5 w-max"
            >
              {[
                { name: "Bajaj Allianz General", logo: "/partners/bajaj-general.png" },
                { name: "Generali Central", logo: "/partners/generali-central.svg" },
                { name: "ICICI Lombard", logo: "/partners/icici-lombard.webp" },
                { name: "HDFC ERGO", logo: "/partners/hdfc-ergo.webp" },
                { name: "Digit General", logo: "/partners/digit-insurance.webp" },
                { name: "Tata AIG", logo: "/partners/tata-aig.png" },
                { name: "Oriental Insurance", logo: "/partners/oriental-insurance.webp" },
                { name: "New India Assurance", logo: "/partners/new-india-assurance.webp" },
                { name: "Bajaj Allianz Life", logo: "/partners/bajaj-life.png" },
                { name: "HDFC Life", logo: "/partners/hdfc-life.webp" },
                { name: "Tata AIA Life", logo: "/partners/tata-aia-life.webp" },
                { name: "ICICI Prudential Life", logo: "/partners/icici-prudential.webp" },
                { name: "LIC of India", logo: "/partners/lic.png" },
                { name: "Bajaj Allianz General", logo: "/partners/bajaj-general.png" },
                { name: "Generali Central", logo: "/partners/generali-central.svg" },
                { name: "ICICI Lombard", logo: "/partners/icici-lombard.webp" },
                { name: "HDFC ERGO", logo: "/partners/hdfc-ergo.webp" },
                { name: "Digit General", logo: "/partners/digit-insurance.webp" },
                { name: "Tata AIG", logo: "/partners/tata-aig.png" },
                { name: "Oriental Insurance", logo: "/partners/oriental-insurance.webp" },
                { name: "New India Assurance", logo: "/partners/new-india-assurance.webp" },
                { name: "Bajaj Allianz Life", logo: "/partners/bajaj-life.png" },
                { name: "HDFC Life", logo: "/partners/hdfc-life.webp" },
                { name: "Tata AIA Life", logo: "/partners/tata-aia-life.webp" },
                { name: "ICICI Prudential Life", logo: "/partners/icici-prudential.webp" },
                { name: "LIC of India", logo: "/partners/lic.png" },
              ].map((partner, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -3, scale: 1.03 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-2xl px-5 py-3.5 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-[#C59B27] transition-all flex items-center justify-center min-w-[170px] sm:min-w-[190px] md:min-w-[210px] h-20 sm:h-22 flex-shrink-0 group cursor-default"
                >
                  <div className="relative w-full h-full flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={170}
                      height={55}
                      className="max-h-10 sm:max-h-12 w-auto max-w-[90%] object-contain"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Interactive Services Section */}
      <section className="w-full py-14 sm:py-16 lg:py-20 bg-[#F8F7F3] relative overflow-hidden">
        {/* Ambient Subtle Glow */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#C59B27]/5 rounded-full blur-3xl pointer-events-none z-0"
        />

        <div className="w-full max-w-[1600px] 2xl:max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">

          {/* Interactive Filter Bar & Search */}
          <ScrollReveal variant="fadeUp" delay={0.1} className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 sm:mb-14">
            {/* Segmented Category Buttons with Animated Highlight */}
            <div className="flex items-center gap-2 bg-white/90 backdrop-blur-md p-1.5 rounded-2xl border border-slate-200/80 shadow-sm w-full md:w-auto justify-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActiveCategory("ALL")}
                className={`relative px-5 py-2.5 rounded-xl font-extrabold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === "ALL"
                    ? "bg-[#01327a] text-[#F5D77F] shadow-md border border-[#D4AF37]/50"
                    : "text-slate-600 hover:text-[#01327a] hover:bg-slate-100/70 border border-transparent"
                }`}
              >
                <span>All Solutions</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActiveCategory("RETAIL")}
                className={`relative px-5 py-2.5 rounded-xl font-extrabold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === "RETAIL"
                    ? "bg-[#01327a] text-[#F5D77F] shadow-md border border-[#D4AF37]/50"
                    : "text-slate-600 hover:text-[#01327a] hover:bg-slate-100/70 border border-transparent"
                }`}
              >
                <User className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Retail Solutions</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActiveCategory("CORPORATE")}
                className={`relative px-5 py-2.5 rounded-xl font-extrabold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === "CORPORATE"
                    ? "bg-[#01327a] text-[#F5D77F] shadow-md border border-[#D4AF37]/50"
                    : "text-slate-600 hover:text-[#01327a] hover:bg-slate-100/70 border border-transparent"
                }`}
              >
                <Briefcase className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Corporate Solutions</span>
              </motion.button>
            </div>

            {/* Keyword Search Input */}
            <div className="relative w-full md:w-72 lg:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search services (e.g. Health, Fire, Vehicle)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-slate-200/80 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all shadow-xs"
              />
              <AnimatePresence>
                {searchQuery && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.7 }}
                    transition={{ duration: 0.15 }}
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5 rounded-md"
                  >
                    <X className="w-4 h-4" />
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
          </ScrollReveal>

          {/* Services Cards Grid with High Quality Thumbnails */}
          {filteredServices.length > 0 ? (
            <StaggerContainer
              key={activeCategory + searchQuery}
              staggerChildren={0.1}
              amount={0.08}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 lg:gap-8"
            >
              {filteredServices.map((service) => {
                const Icon = service.icon;
                return (
                  <StaggerItem key={service.id} variant="slideUp" className="h-full">
                    <div
                      className="group relative bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-[#D4AF37] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between overflow-hidden h-full"
                    >
                      {/* Top Card Image Thumbnail with Overlay Badges */}
                      <div className="relative h-56 sm:h-64 w-full bg-slate-900 overflow-hidden">
                        <Image
                          src={service.img}
                          alt={service.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                        />
                        {/* Subtle soft vignette at bottom edge for contrast */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

                        {/* Category Badge on Top Left */}
                        <div className="absolute top-3.5 left-3.5 z-10">
                          <span
                            className={`text-[10px] font-black uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm backdrop-blur-md border ${
                              service.category === "RETAIL"
                                ? "bg-[#01327a]/90 text-[#F5D77F] border-[#D4AF37]/50"
                                : "bg-gradient-to-r from-[#D4AF37] via-[#F5D77F] to-[#D4AF37] text-[#01327a] border-[#F5D77F]/80 shadow-sm"
                            }`}
                          >
                            {service.category} SOLUTION
                          </span>
                        </div>

                        {/* Icon Circle on Bottom Right of Image */}
                        <div className="absolute bottom-3.5 right-3.5 z-10 w-11 h-11 rounded-xl bg-[#01327a]/90 backdrop-blur-md border border-[#D4AF37]/50 text-[#F5D77F] flex items-center justify-center shadow-md group-hover:bg-gradient-to-r group-hover:from-[#D4AF37] group-hover:to-[#F5D77F] group-hover:text-[#01327a] transition-all duration-300">
                          <Icon className="w-5 h-5 stroke-[1.8]" />
                        </div>
                      </div>

                      {/* Card Content Body */}
                      <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between">
                        <div>
                          {/* Title */}
                          <h3 className="font-cormorant text-2xl font-extrabold text-[#01327a] group-hover:text-[#D4AF37] transition-colors leading-tight mb-2">
                            {service.title}
                          </h3>

                          {/* Description */}
                          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium mb-3 line-clamp-3">
                            {service.shortDesc}
                          </p>

                          {/* Highlights List */}
                          <div className="space-y-1.5 pt-3 border-t border-slate-100">
                            {service.highlights.map((h, i) => (
                              <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0" />
                                <span>{h}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Card Footer Action */}
                        <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                          <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => setSelectedService(service)}
                            className="group/btn flex items-center gap-1.5 bg-[#01327a] hover:bg-[#01255e] text-[#F5D77F] hover:text-white font-extrabold text-xs tracking-widest px-4 py-2.5 rounded-lg border border-[#D4AF37]/40 hover:border-[#F5D77F] shadow-sm transition-all uppercase cursor-pointer"
                          >
                            <span className="text-[#F5D77F] group-hover/btn:text-white transition-colors">READ MORE</span>
                            <ChevronRight className="w-3.5 h-3.5 text-[#F5D77F] group-hover/btn:text-white group-hover/btn:translate-x-1 transition-transform" />
                          </motion.button>

                          <Link
                            href={`/contact?service=${encodeURIComponent(service.title)}`}
                            prefetch={false}
                            className="group/link text-xs font-bold text-[#01327a] hover:text-[#D4AF37] transition-colors flex items-center gap-1 uppercase tracking-wider"
                          >
                            <span>GET QUOTE</span>
                            <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover/link:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: LUXURY_EASE }}
              className="text-center py-16 bg-white rounded-2xl border border-slate-200/80 p-8 max-w-md mx-auto shadow-sm"
            >
              <HelpCircle className="w-12 h-12 text-[#C59B27] mx-auto mb-3 opacity-60" />
              <h3 className="font-cormorant text-xl font-bold text-[#01327a]">No solutions found</h3>
              <p className="text-xs text-slate-500 mt-1">Try adjusting your search keyword or selected category tab.</p>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("ALL");
                }}
                className="mt-4 text-xs font-extrabold text-[#01327a] bg-amber-100/60 px-4 py-2 rounded-lg hover:bg-[#C59B27] hover:text-white transition-colors"
              >
                Reset Filters
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: LUXURY_EASE }}
            onClick={() => setSelectedService(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#01327a]/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 30 }}
              transition={{ duration: 0.35, ease: LUXURY_EASE }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-white rounded-3xl border border-[#C59B27]/40 shadow-2xl overflow-hidden text-slate-900 max-h-[90vh] flex flex-col"
            >
              {/* Header Banner with Image Background */}
              <div className="relative h-52 sm:h-60 bg-slate-900 p-6 sm:p-8 flex items-end">
                <Image
                  src={selectedService.img}
                  alt={selectedService.title}
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#01327a] via-[#01327a]/70 to-transparent" />

                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedService(null)}
                  className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-[#01327a]/80 hover:bg-[#01327a] text-white flex items-center justify-center transition-colors border border-white/20 shadow-lg cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </motion.button>

                <div className="relative z-10 flex items-center gap-4">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.4, ease: LUXURY_EASE }}
                    className="w-14 h-14 rounded-2xl bg-[#01327a] border-2 border-[#C59B27] flex items-center justify-center text-[#C59B27] shadow-xl flex-shrink-0"
                  >
                    <selectedService.icon className="w-7 h-7" />
                  </motion.div>
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

                {/* Types of Policy (if available) */}
                {selectedService.policyTypes && selectedService.policyTypes.length > 0 && (
                  <div>
                    <h4 className="text-xs font-extrabold uppercase text-[#B8860B] tracking-wider mb-3 flex items-center gap-2">
                      <ListChecks className="w-4 h-4 text-[#C59B27]" />
                      <span>TYPES OF POLICY & PLANS</span>
                    </h4>
                    <div className="space-y-2">
                      {selectedService.policyTypes.map((type, idx) => {
                        const parts = type.split(":");
                        const title = parts[0];
                        const desc = parts.slice(1).join(":");
                        return (
                          <div key={idx} className="bg-slate-50 p-3 rounded-xl border border-slate-200/70 text-xs">
                            <span className="font-bold text-[#01327a] block sm:inline sm:mr-1.5">{title}:</span>
                            <span className="text-slate-600 font-medium">{desc}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Key Benefits (if available) */}
                {selectedService.benefits && selectedService.benefits.length > 0 && (
                  <div>
                    <h4 className="text-xs font-extrabold uppercase text-[#B8860B] tracking-wider mb-3 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#C59B27]" />
                      <span>KEY BENEFITS & ADVANTAGES</span>
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {selectedService.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs font-medium text-slate-700 bg-amber-50/40 p-2.5 rounded-lg border border-[#C59B27]/20">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

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

                {/* Key Points to Remember / Advisory Insights (if available) */}
                {selectedService.keyPoints && selectedService.keyPoints.length > 0 && (
                  <div className="bg-[#01327a]/5 border border-[#01327a]/15 rounded-2xl p-4 sm:p-5">
                    <h4 className="text-xs font-extrabold uppercase text-[#01327a] tracking-wider mb-3 flex items-center gap-2">
                      <Lightbulb className="w-4 h-4 text-[#C59B27]" />
                      <span>KEY ADVISORY POINTS TO REMEMBER</span>
                    </h4>
                    <div className="space-y-2">
                      {selectedService.keyPoints.map((point, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27] mt-1.5 flex-shrink-0" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Target Audience */}
                <div className="bg-[#F8F7F3] p-4 rounded-2xl border border-slate-200/80">
                  <h4 className="text-xs font-extrabold uppercase text-[#01327a] tracking-wider mb-1">
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
                    <h5 className="text-xs font-extrabold text-[#01327a] uppercase">FORTUNE 5 CLAIM COMMITMENT</h5>
                    <p className="text-slate-700 text-xs font-medium mt-0.5">{selectedService.claimHighlight}</p>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200/80 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-xs font-bold text-slate-600 hover:text-slate-900 cursor-pointer"
                >
                  Close Window
                </button>
                <Link
                  href={`/contact?service=${encodeURIComponent(selectedService.title)}`}
                  prefetch={false}
                  className="group flex items-center gap-2 bg-[#01327a] hover:bg-[#01255e] text-white font-extrabold text-xs px-6 py-3 rounded-xl border border-slate-900 transition-colors uppercase tracking-wider shadow-md"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-[#C59B27]" />
                  <span>Request Custom Quote</span>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}
