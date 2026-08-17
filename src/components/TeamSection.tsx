"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Mail,
  Award,
  ShieldCheck,
  Briefcase,
  X,
  Sparkles,
  ArrowUpRight,
  UserCheck,
  Building2,
  CheckCircle2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.72a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z" />
  </svg>
);

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: "Leadership" | "Corporate Risk" | "Claims & Legal" | "Retail & Health";
  experience: string;
  img?: string;
  bio: string;
  fullBio: string;
  tags: string[];
  achievements: string[];
  linkedin?: string;
  email?: string;
}

const teamMembers: TeamMember[] = [
  {
    id: "kaushal-shah",
    name: "Kaushal Shah",
    role: "Chairman & Managing Director",
    department: "Leadership",
    experience: "22+ Yrs Exp",
    img: "/kaushal-shah.png",
    bio: "3rd generation risk consultant carrying forward a 75+ year family legacy. B.E. (Chemical Engg), Fellow Insurance Institute of India, NMIMS.",
    fullBio:
      "Kaushal Shah leads Fortune 5 Risk Management Solutions LLP, carrying forward a 75+ year family legacy in risk management & advisory. Holding a B.E. in Chemical Engineering, he brings unique analytical and quantitative rigor to risk assessment. He is a Fellow of the Insurance Institute of India, holds an Advanced Diploma in Risk & Insurance Management from NMIMS, and has been a proud MD Club member at Bajaj Allianz since 2003.",
    tags: ["3rd Generation Consultant", "Chemical Engineering Rigor", "FIII Qualified", "MD Club Member"],
    achievements: [
      "Assisted ₹100+ Cr in claims with unwavering client advocacy",
      "Advises 500+ corporate & business portfolios",
      "Fellow of Insurance Institute of India & NMIMS Alum",
    ],
    linkedin: "https://www.linkedin.com/in/kaushal-shah-59765b1b?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    email: "kaushal@fortune5.in",
  },
  {
    id: "ekta-shah",
    name: "Ekta Shah",
    role: "Senior Partner & Multiline Advisor",
    department: "Leadership",
    experience: "15+ Yrs Exp",
    bio: "Winner of 'Best Women Advisor 2026' and 'Best Multiline Insurance Advisor' at GIFI Awards 2026. Specialist in retail, health & SME risk portfolios.",
    fullBio:
      "Ekta Shah is an award-winning senior advisor at Fortune 5, recognized with the prestigious 'Best Women Advisor 2026' and 'Best Multiline Insurance Advisor' honors at GIFI Awards 2026. She specializes in designing comprehensive employee benefit packages, family health floaters, and commercial SME packages with exceptional customer service.",
    tags: ["Best Women Advisor 2026", "Multiline Specialist", "Retail & SME Protection", "Customer Service Award"],
    achievements: [
      "Winner — Best Women Advisor 2026 (GIFI Awards)",
      "Winner — Best Multiline Insurance Advisor 2026",
      "Protects 10,000+ individual and corporate lives",
    ],
    linkedin: "https://linkedin.com",
    email: "ekta@fortune5.in",
  },
  {
    id: "rahul-mehta",
    name: "Rahul Mehta",
    role: "Partner & Head — Corporate Risk",
    department: "Corporate Risk",
    experience: "18+ Yrs Exp",
    bio: "Drives complex Property, Casualty, Cyber, and Liability risk programs for manufacturing and tech enterprises.",
    fullBio:
      "Rahul leads the corporate risk practice at Fortune 5. With 18+ years in corporate risk advisory and commercial underwriting, he specialises in mapping operational risks, designing Directors & Officers (D&O) liability frameworks, and negotiating competitive terms with leading national and international underwriters.",
    tags: ["Property & Casualty", "Cyber Risk", "Industrial All Risk", "D&O Coverage"],
    achievements: [
      "Structured ₹2,500Cr+ property coverage",
      "Spearheaded Cyber Risk advisory division",
      "Advisor to top 50 mid-market corporates",
    ],
    linkedin: "https://linkedin.com",
    email: "rahul.mehta@fortune5.in",
  },
  {
    id: "priya-nair",
    name: "Priya Nair",
    role: "Head — Claims & Legal Advisory",
    department: "Claims & Legal",
    experience: "15+ Yrs Exp",
    bio: "Dedicated risk & legal claims specialist focused on securing zero-friction claim settlements and policy wording reviews.",
    fullBio:
      "Priya heads Fortune 5's dedicated claims resolution wing. With 15+ years of legal and claims advisory experience, she ensures that Fortune 5 clients never navigate claims alone. Her team coordinates directly with insurers and surveyors for fast, transparent payouts.",
    tags: ["Claims Advocacy", "Arbitration & Legal", "Loss Minimisation", "Policy Audit"],
    achievements: [
      "Faster claims assistance across commercial lines",
      "Successfully assisted in ₹100+ Cr of claims",
      "Specialist in industrial & flood loss surveys",
    ],
    linkedin: "https://linkedin.com",
    email: "priya.nair@fortune5.in",
  },
  {
    id: "amit-kulkarni",
    name: "Amit Kulkarni",
    role: "Head — Retail & Employee Benefits",
    department: "Retail & Health",
    experience: "14+ Yrs Exp",
    bio: "Architect of employee wellness programs and Keyman risk solutions protecting 10,000+ lives.",
    fullBio:
      "Amit oversees group employee benefits, Keyman risk protection, and personal line portfolios at Fortune 5. With 14+ years in healthcare risk solutions, he designs customized group mediclaim policies, wellness programs, and high-net-worth individual (HNI) asset protection plans.",
    tags: ["Employee Benefits", "Group Mediclaim", "Keyman Protection", "Wealth Protection"],
    achievements: [
      "Manages 10,000+ insured corporate lives",
      "Designed cashless hospital networks for 200+ firms",
      "HNI portfolio specialist",
    ],
    linkedin: "https://linkedin.com",
    email: "amit.kulkarni@fortune5.in",
  },
  {
    id: "ananya-sen",
    name: "Ananya Sen",
    role: "Lead Risk Analyst & Actuarial Consultant",
    department: "Corporate Risk",
    experience: "10+ Yrs Exp",
    bio: "Expert in quantitative risk profiling, business interruption modeling, and supply chain vulnerability assessments.",
    fullBio:
      "Ananya brings deep quantitative rigor to Fortune 5's risk audit methodology. With a background in actuarial science, she models complex risk exposures, catastrophe losses, and business interruption scenarios to help clients right-size their risk deductibles and coverage limits.",
    tags: ["Actuarial Modeling", "Business Interruption", "Risk Audit", "Supply Chain"],
    achievements: [
      "Audited 300+ industrial facility risk profiles",
      "Reduced client premium costs by avg 18% via risk audits",
      "Certified Risk Management Professional (RMP)",
    ],
    linkedin: "https://linkedin.com",
    email: "ananya.sen@fortune5.in",
  },
  {
    id: "vikramaditya-joshi",
    name: "Vikramaditya Joshi",
    role: "Senior VP — Client Stewardship",
    department: "Leadership",
    experience: "20+ Yrs Exp",
    bio: "Nurtures multi-decadal relationships with family offices, conglomerates, and institutional clients across India.",
    fullBio:
      "Vikramaditya manages key client relationships and strategic alliances. With two decades in financial services and risk management stewardship, he ensures that every client receives white-glove advisory service, annual risk reviews, and rapid emergency support.",
    tags: ["Client Stewardship", "Family Offices", "Marine Cargo", "Strategic Relations"],
    achievements: [
      "98.7% client retention over 15 years",
      "Manages 100+ family office portfolios",
      "Specialist in Marine & Logistics Risk",
    ],
    linkedin: "https://linkedin.com",
    email: "vikram.joshi@fortune5.in",
  },
];

const departments = [
  { id: "All", label: "All Team Members" },
  { id: "Leadership", label: "Executive Leadership" },
  { id: "Corporate Risk", label: "Corporate & Industrial Risk" },
  { id: "Claims & Legal", label: "Claims & Legal Advisory" },
  { id: "Retail & Health", label: "Retail & Employee Benefits" },
] as const;

export default function TeamSection() {
  const [activeTab, setActiveTab] = useState<string>("All");

  const filteredMembers =
    activeTab === "All"
      ? teamMembers
      : teamMembers.filter((member) => member.department === activeTab);

  return (
    <section id="team" className="w-full py-16 sm:py-20 lg:py-24 bg-[#F8F7F3] relative overflow-hidden">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-[#C59B27]/5 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="w-full max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        {/* Header */}
        <ScrollReveal variant="fadeUp" className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-[#B8860B] font-extrabold text-xs sm:text-sm tracking-widest uppercase mb-3">
            <Sparkles className="w-4 h-4 text-[#C59B27]" />
            <span>EXPERT ADVISORS & LEADERSHIP</span>
          </div>
          <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#01327a] tracking-wider uppercase leading-tight">
            MEET THE TEAM BEHIND <span className="text-[#C59B27]">FORTUNE 5</span>
          </h2>
          <div className="flex items-center gap-3 mt-4">
            <span className="h-[1.5px] w-12 sm:w-20 bg-gradient-to-r from-transparent via-[#C59B27] to-transparent inline-block" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#C59B27] border-2 border-white shadow-xs" />
            <span className="h-[1.5px] w-12 sm:w-20 bg-gradient-to-r from-transparent via-[#C59B27] to-transparent inline-block" />
          </div>
          <p className="text-slate-600 text-sm sm:text-base lg:text-lg font-medium leading-relaxed max-w-3xl mt-5">
            A dedicated ensemble of risk strategists, claims advocates, underwriters, and client advisors bringing over seven decades of combined risk management excellence to your service.
          </p>
        </ScrollReveal>

        {/* Filter Tabs */}
        <ScrollReveal variant="fadeUp" delay={0.1} className="flex items-center justify-center mb-10 sm:mb-14">
          <div className="flex items-center flex-wrap justify-center gap-2 sm:gap-3 bg-white/80 backdrop-blur-md p-1.5 sm:p-2 rounded-2xl border border-slate-200/80 shadow-sm">
            {departments.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 sm:px-5 py-2.5 rounded-xl font-extrabold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 ${
                    isActive
                      ? "bg-[#01327a] text-[#C59B27] shadow-md border border-[#C59B27]/40"
                      : "text-slate-600 hover:text-[#01327a] hover:bg-slate-100/70"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          <AnimatePresence mode="popLayout">
            {filteredMembers.map((member) => (
              <motion.div
                key={member.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-white rounded-xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-[#C59B27] transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                  {/* Top Image / Avatar Banner */}
                  <div className="relative h-64 sm:h-72 lg:h-80 bg-gradient-to-br from-[#01327a] via-[#01255e] to-[#01327a] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#01327a]/80 via-transparent to-transparent z-10" />

                    {/* Image or Avatar Display */}
                    {member.img ? (
                      <Image
                        src={member.img}
                        alt={member.name}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105 z-0"
                      />
                    ) : (
                      <div className="relative z-0 flex flex-col items-center justify-center p-4 text-center">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#C59B27] to-[#F5D77F] p-[2px] shadow-md mb-1 group-hover:scale-105 transition-transform duration-300">
                          <div className="w-full h-full rounded-full bg-[#01327a] flex items-center justify-center">
                            <span className="font-cormorant text-lg font-extrabold text-[#C59B27]">
                              {member.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </span>
                          </div>
                        </div>
                        <ShieldCheck className="w-4 h-4 text-[#C59B27]/60 mt-0.5" />
                      </div>
                    )}

                    {/* Experience Badge */}
                    <div className="absolute top-3 right-3 z-20 bg-[#01327a]/90 backdrop-blur-md border border-[#C59B27]/40 text-[#F5D77F] text-[10px] font-extrabold tracking-wider px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
                      <Award className="w-3 h-3 text-[#C59B27]" />
                      <span>{member.experience}</span>
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between">
                    <div>
                      <div className="text-[10px] font-extrabold text-[#B8860B] uppercase tracking-widest mb-1 flex items-center gap-1">
                        <Briefcase className="w-3 h-3 text-[#C59B27]" />
                        <span>{member.department}</span>
                      </div>
                      <h3 className="font-cormorant text-xl font-extrabold text-[#01327a] group-hover:text-[#C59B27] transition-colors leading-tight">
                        {member.name}
                      </h3>
                      <p className="text-[11px] text-slate-500 font-bold mt-0.5 tracking-wide">
                        {member.role}
                      </p>
                    </div>

                    {/* Footer Actions */}
                    <div className="pt-3.5 mt-3.5 border-t border-slate-100 flex items-center justify-end">
                      <div className="flex items-center gap-1.5">
                        {member.linkedin && (
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-7 h-7 rounded-md bg-slate-100 hover:bg-[#01327a] text-slate-600 hover:text-[#C59B27] flex items-center justify-center transition-colors shadow-2xs"
                            title="LinkedIn Profile"
                          >
                            <LinkedinIcon className="w-3.5 h-3.5" />
                          </a>
                        )}
                        {member.email && (
                          <a
                            href={`mailto:${member.email}`}
                            className="w-7 h-7 rounded-md bg-slate-100 hover:bg-[#01327a] text-slate-600 hover:text-[#C59B27] flex items-center justify-center transition-colors shadow-2xs"
                            title="Send Email"
                          >
                            <Mail className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
