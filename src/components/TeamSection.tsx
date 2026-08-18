"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Award,
  Briefcase,
  X,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  experience: string;
  img: string;
  bio: string;
  fullBio: string[];
  achievements: string[];
}

export const teamMembers: TeamMember[] = [
  {
    id: "jagdip-k-shah",
    name: "Jagdip K. Shah",
    role: "Founder",
    department: "Founding Leadership",
    experience: "50+ Yrs Exp",
    img: "/Team/jagdip-k-shah.png",
    bio: "Guiding force behind Fortune 5's foundation with 50+ years of insurance industry experience. Retired as Deputy Zonal Head at The Oriental Insurance Co. Ltd. after a 35+ year career.",
    fullBio: [
      "With over five decades of experience in the insurance industry, Jagdip K. Shah is the Founder of Fortune 5 Risk Management Solutions LLP and the guiding force behind its foundation and values.",
      "He retired as Deputy Zonal Head at The Oriental Insurance Co. Ltd., after a distinguished 35+ year career, gaining extensive expertise across general insurance, risk assessment, underwriting and claims.",
      "His deep industry knowledge, professional relationships and practical understanding of complex insurance risks laid the foundation for Fortune 5’s client-centric approach. His vision continues to shape the firm’s commitment to integrity, personalised risk solutions and long-term client relationships.",
    ],
    achievements: [
      "Over five decades of distinguished experience in the insurance industry",
      "Retired as Deputy Zonal Head at The Oriental Insurance Co. Ltd. (35+ year career)",
      "Extensive expertise across general insurance, risk assessment, underwriting and claims",
      "Guiding force behind Fortune 5’s foundation, core values, and client-centric approach",
    ],
  },
  {
    id: "kaushal-j-shah",
    name: "Kaushal J. Shah",
    role: "Chairman & Managing Director",
    department: "Executive Leadership",
    experience: "22+ Yrs Exp",
    img: "/Team/kaushal-j-shah.png",
    bio: "3rd-generation insurance professional with 22+ years of experience. Advises HNIs, MSMEs and corporates on commercial, health, property and casualty insurance.",
    fullBio: [
      "A 3rd-generation insurance professional with 22+ years of experience, Kaushal J. Shah is the Chairman & Managing Director of Fortune 5 Risk Management Solutions LLP. He advises HNIs, MSMEs and corporates on commercial, health, property and casualty insurance.",
      "A Chemical Engineer and Fellow of the Insurance Institute of India, he combines technical expertise with deep insurance knowledge to develop practical, tailored risk solutions that protect businesses, strengthen risk management and support long-term stability.",
    ],
    achievements: [
      "MD Club Member – Bajaj General Insurance (Since 2003)",
      "DGC Committee Advisor – Bajaj General Insurance",
      "Court of the Table (COT) – LIC",
      "Diploma & B.E. in Chemical Engineering",
      "Advanced Diploma in Insurance & Risk Management (ADRIM)",
      "Fellow, Insurance Institute of India (General Insurance)",
    ],
  },
  {
    id: "ekta-k-shah",
    name: "Ekta K. Shah",
    role: "Chief Executive Officer",
    department: "Executive Leadership",
    experience: "20+ Yrs Exp",
    img: "/Team/ekta-k-shah.png",
    bio: "With over two decades of insurance experience, she drives Fortune 5's growth, culture and client-first philosophy. Generali Central Top 30 Worldwide Advisor (2025 & 2026).",
    fullBio: [
      "With over two decades of experience in the insurance industry, Ekta K. Shah is the Chief Executive Officer of Fortune 5 Risk Management Solutions LLP, playing a pivotal role in driving the organisation’s growth, culture and client-first philosophy.",
      "Her leadership combines deep insurance expertise with a strong focus on people, relationships and organisational excellence. She has been recognised among Generali Central’s Top 30 Advisors Worldwide in 2025 and 2026 and has received the Best Health Insurance Adviser and Best Woman Insurance Adviser recognition at the Global Insurance Excellence Awards 2025 for Asia & MENA.",
      "Known for her relationship-driven approach and commitment to excellence, Ekta continues to strengthen Fortune 5’s foundation of trust, integrity and long-term partnerships.",
    ],
    achievements: [
      "Generali Central’s Top 30 Advisors Worldwide (2025 and 2026)",
      "Best Woman Insurance Adviser – Global Insurance Excellence Awards 2025 (Asia & MENA)",
      "Best Health Insurance Adviser – Global Insurance Excellence Awards 2025 (Asia & MENA)",
      "Pivotal leader driving Fortune 5's organisational growth, culture, and client-first philosophy",
    ],
  },
  {
    id: "hemal-n-mashruwala",
    name: "Hemal N Mashruwala",
    role: "Chief Marketing Officer",
    department: "Marketing & Growth",
    experience: "20+ Yrs Exp",
    img: "/Team/hemal-n-mashruwala.png",
    bio: "20+ years of insurance expertise with ADRIM from NMIMS Mumbai. Drives brand expansion, strategic marketing and relationship-driven client growth.",
    fullBio: [
      "With over two decades of experience in the insurance industry and an Advanced Diploma in Insurance & Risk Management (ADRIM) from NMIMS Mumbai, Hemal brings a distinctive blend of insurance expertise, strategic thinking and relationship-driven marketing to Fortune 5.",
      "Known for his personable approach, natural charm and strong client relationships, he combines an understanding of client needs with creative marketing strategies to build trust, create meaningful connections and drive business growth.",
      "As Chief Marketing Officer, Hemal plays a key role in strengthening the Fortune 5 brand, expanding its market presence and building lasting relationships with clients and partners.",
    ],
    achievements: [
      "Advanced Diploma in Insurance & Risk Management (ADRIM) – NMIMS Mumbai",
      "Over two decades of insurance industry and risk advisory experience",
      "Spearheads brand expansion, market presence, and strategic partnerships for Fortune 5",
      "Architect of relationship-driven marketing strategies building long-term client trust",
    ],
  },
  {
    id: "l-n-shanbhag",
    name: "L. N. Shanbhag",
    role: "Claims Head",
    department: "Claims Advocacy",
    experience: "30+ Yrs Exp",
    img: "/Team/l-n-shanbhag.png",
    bio: "Fellow III & Associate Member of London Insurance Institute. Renowned industry authority in resolving complex, high-value Fire, Marine, and Engineering claims.",
    fullBio: [
      "L. N. Shanbhag (LN) is a highly respected name in India’s General Insurance industry, particularly known for his expertise in handling complex and high-value claims.",
      "A Fellow Member of the Insurance Institute of India and an Associate Member of the London Insurance Institute, LN brings extensive experience in claims management across Fire, Marine Cargo, Engineering and Miscellaneous lines of business.",
      "Having worked with leading public and private sector insurance companies, he brings deep technical knowledge, strategic insight and a practical understanding of claims — helping clients navigate complex situations and achieve fair and effective claim outcomes.",
    ],
    achievements: [
      "Fellow Member of the Insurance Institute of India (FIII)",
      "Associate Member of the London Insurance Institute",
      "Extensive claims leadership across leading public and private sector insurers",
      "Specialist in complex and high-value claims across Fire, Marine Cargo, Engineering, and Miscellaneous lines",
    ],
  },
];

export default function TeamSection() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedMember(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="team" className="w-full py-16 sm:py-20 lg:py-24 bg-[#F8F7F3] relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#C59B27]/5 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        {/* Header */}
        <ScrollReveal variant="fadeUp" className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-[#B8860B] font-extrabold text-xs sm:text-sm tracking-widest uppercase mb-3">
            <Sparkles className="w-4 h-4 text-[#C59B27]" />
            <span>LEADERSHIP &amp; CORE ADVISORS</span>
          </div>
          <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#01327a] tracking-wider uppercase leading-tight">
            MEET THE TEAM BEHIND <span className="text-[#C59B27] inline-block whitespace-nowrap">FORTUNE 5</span>
          </h2>
          <div className="flex items-center gap-3 mt-4">
            <span className="h-[1.5px] w-12 sm:w-20 bg-gradient-to-r from-transparent via-[#C59B27] to-transparent inline-block" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#C59B27] border-2 border-white shadow-xs" />
            <span className="h-[1.5px] w-12 sm:w-20 bg-gradient-to-r from-transparent via-[#C59B27] to-transparent inline-block" />
          </div>
          <p className="text-slate-600 text-sm sm:text-base lg:text-lg font-medium leading-relaxed max-w-3xl mt-5">
            Carrying forward a 75-year legacy of integrity, technical acumen, and dedicated claims advocacy to protect your enterprise and family.
          </p>
        </ScrollReveal>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 sm:gap-6">
          {teamMembers.map((member, idx) => (
            <ScrollReveal key={member.id} variant="fadeUp" delay={idx * 0.08}>
              <div
                onClick={() => setSelectedMember(member)}
                className="group relative h-full bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-2xl hover:border-[#C59B27] transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
              >
                {/* Portrait Image Banner */}
                <div className="relative aspect-[4/5] bg-gradient-to-b from-[#0a2550] via-[#01327a] to-[#01255e] flex items-center justify-center overflow-hidden">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 20vw"
                    className="object-contain object-center sm:object-cover sm:object-center transition-transform duration-700 group-hover:scale-105 z-0"
                  />

                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#01327a]/90 via-transparent to-transparent z-10 pointer-events-none" />

                  {/* Experience Badge */}
                  <div className="absolute top-3 right-3 z-20 bg-[#01327a]/90 backdrop-blur-md border border-[#C59B27]/50 text-[#F5D77F] text-[10px] font-extrabold tracking-wider px-2.5 py-1 rounded-full shadow-lg flex items-center gap-1">
                    <Award className="w-3 h-3 text-[#C59B27]" />
                    <span>{member.experience}</span>
                  </div>

                  {/* Department Tag on Image Bottom */}
                  <div className="absolute bottom-3 left-3 right-3 z-20">
                    <div className="inline-flex items-center gap-1 bg-[#01327a]/90 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/15 text-[10px] font-extrabold uppercase tracking-wider text-[#F5D77F]">
                      <Briefcase className="w-3 h-3 text-[#C59B27]" />
                      <span className="truncate">{member.department}</span>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between bg-white">
                  <div>
                    <h3 className="font-cormorant text-xl sm:text-2xl font-extrabold text-[#01327a] group-hover:text-[#C59B27] transition-colors leading-tight">
                      {member.name}
                    </h3>
                    <p className="text-xs font-bold text-[#b8860b] uppercase tracking-wider mt-1">
                      {member.role}
                    </p>

                    <p className="text-xs text-slate-600 leading-relaxed font-medium mt-3 line-clamp-3">
                      {member.bio}
                    </p>
                  </div>

                  {/* Action Link */}
                  <div className="pt-3.5 mt-4 border-t border-slate-100">
                    <div className="w-full py-2 px-3 rounded-xl bg-slate-50 group-hover:bg-[#01327a] text-[#01327a] group-hover:text-[#F5D77F] border border-slate-200/80 group-hover:border-[#C59B27]/50 font-bold text-xs uppercase tracking-wider flex items-center justify-between transition-all duration-300">
                      <span>View Executive Bio</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#C59B27]" />
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Clean, Fully-Responsive Executive Bio Modal */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 lg:p-8 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="fixed inset-0 bg-[#01142e]/85 backdrop-blur-sm"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="relative w-full max-w-4xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col md:flex-row border border-slate-200 my-auto"
            >
              {/* Close Button - Always visible & high contrast */}
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-3 right-3 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-all duration-200 shadow-xl backdrop-blur-md"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Column: Full-Height Portrait (Fully responsive on mobile & desktop) */}
              <div className="relative w-full aspect-[4/5] sm:aspect-[4/5] md:aspect-auto md:w-5/12 md:min-h-[520px] bg-gradient-to-b from-[#041838] via-[#01255e] to-[#01142e] flex items-center justify-center overflow-hidden shrink-0">
                <Image
                  src={selectedMember.img}
                  alt={selectedMember.name}
                  fill
                  priority
                  className="object-contain object-center p-1 sm:p-2 md:p-0"
                  sizes="(max-width: 768px) 100vw, 420px"
                />
                
                {/* Subtle Gradient Shadow */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#01142e]/85 via-transparent to-transparent pointer-events-none" />

                {/* Experience & Department Pill on photo */}
                <div className="absolute bottom-3 left-3 right-3 z-10 flex justify-center">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#01142e]/90 backdrop-blur-md border border-[#C59B27]/40 text-[#F5D77F] text-[11px] sm:text-xs font-bold shadow-lg">
                    <Award className="w-3.5 h-3.5 text-[#C59B27] shrink-0" />
                    <span>{selectedMember.experience}</span>
                    <span className="text-slate-400 font-normal">|</span>
                    <span className="text-white font-medium truncate">{selectedMember.department}</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Editorial Bio & Highlights */}
              <div className="w-full md:w-7/12 p-5 sm:p-7 md:p-8 lg:p-9 flex flex-col justify-between overflow-y-auto max-h-[60vh] md:max-h-[85vh]">
                <div>
                  {/* Header */}
                  <div>
                    <h3 className="font-cormorant text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#01327a] tracking-tight leading-tight">
                      {selectedMember.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-extrabold text-[#b8860b] uppercase tracking-wider mt-1">
                      {selectedMember.role}
                    </p>
                  </div>

                  <div className="h-px w-full bg-slate-100 my-3 sm:my-4" />

                  {/* Bio Narrative */}
                  <div className="text-slate-700 text-xs sm:text-sm md:text-[15px] leading-relaxed space-y-2.5 sm:space-y-3 font-normal">
                    {selectedMember.fullBio.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>

                  {/* Highlights & Credentials */}
                  {selectedMember.achievements.length > 0 && (
                    <div className="mt-5 pt-4 sm:pt-5 border-t border-slate-100">
                      <p className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-widest text-[#01327a] mb-2.5">
                        Key Highlights &amp; Credentials
                      </p>
                      <ul className="space-y-2">
                        {selectedMember.achievements.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-xs sm:text-[13px] text-slate-700 leading-snug"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27] mt-1.5 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
