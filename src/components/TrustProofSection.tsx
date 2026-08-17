"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, Trophy, Building2, Award } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function TrustProofSection() {
  const featuredAward = {
    title: "Global Insurance Excellence Awards",
    sub: "Asia and Mena",
    year: "2026",
  };

  const gifyAwards = [
    { title: "Best Property Insurance Award", year: "2026" },
    { title: "Best Women Advisor", sub: "(Ekta Shah)", year: "2026" },
    { title: "Best Multiline Insurance Advisor", year: "2026" },
    { title: "Best Customer Service Award", year: "2026" },
  ];

  const otherRecognitions = [
    { title: "MD Club Member", sub: "Bajaj General (Since 2003)" },
    { title: "Top 30 Advisors Worldwide", sub: "Generali Central (2025)" },
    { title: "COT CLUB", sub: "LIC of India" },
    { title: "DGC Committee & Advisor", sub: "Bajaj General" },
  ];

  const generalPartners = [
    {
      name: "Bajaj Allianz General",
      logo: "/LOGO Partner/Bajaj-General.png",
    },
    {
      name: "Generali Central",
      logo: "/LOGO Partner/general-central-logo.svg",
    },
    {
      name: "ICICI Lombard",
      logo: "/LOGO Partner/lombard-brand-logo.png",
    },
    {
      name: "HDFC ERGO",
      logo: "/LOGO Partner/HDFO-ERGO-logo.png",
    },
    {
      name: "Digit General",
      logo: "/LOGO Partner/digit-insurance-logo.png",
    },
    {
      name: "Tata AIG",
      logo: "/LOGO Partner/tata-aig-logo-png.png",
    },
    {
      name: "Oriental Insurance",
      logo: "/LOGO Partner/oriental-insurance-Logo.png",
    },
    {
      name: "New India Assurance",
      logo: "/LOGO Partner/the-new-india-assurance-logo.png",
    },
  ];

  const lifePartners = [
    {
      name: "Bajaj Allianz Life",
      logo: "/LOGO Partner/bajaj-life-logo.png",
    },
    {
      name: "HDFC Life",
      logo: "/LOGO Partner/hdfc-life-logo-png.png",
    },
    {
      name: "Tata AIA Life",
      logo: "/LOGO Partner/tata-aia-life-insurance-logo.png",
    },
    {
      name: "ICICI Prudential Life",
      logo: "/LOGO Partner/icici-prudential-life-insurance-logo.png",
    },
    {
      name: "LIC of India",
      logo: "/LOGO Partner/lic-logo.png",
    },
  ];

  const corporateClients = [
    "Harman",
    "Mintifi",
    "Gumpro Fluids",
    "Rossari",
    "AGS Shipping",
    "Hathway",
    "Chembond",
    "AHK",
    "Shubhada",
    "BIS",
    "Mehta API",
    "TORM",
    "Jenburkt",
    "Mosil",
    "HMM",
    "Amal Group",
    "TeamGlobal",
    "Shemaroo",
    "Nextgen Clearing",
    "Sunidhi",
    "Creative Eye",
    "HP Adhesives",
    "eClinicalWorks",
    "Transtar",
    "HAB",
    "PentaFreight",
    "PPFAS Mutual Fund",
    "EVIO",
    "Rodium Realty",
    "Abhay Ispat",
    "Wallem",
    "Baggit",
    "Being Human",
  ];

  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-[#F9F8F6] relative overflow-hidden">
      <div className="w-full max-w-[1720px] 2xl:max-w-[94vw] 3xl:max-w-[92vw] 4xl:max-w-[2800px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-16 3xl:px-20 relative z-10">
        
        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-10">
          
          {/* CARD 1: RECOMMENDED BUSINESS PARTNERS (lg:col-span-5) */}
          <ScrollReveal
            variant="fadeUp"
            delay={0.05}
            duration={0.8}
            className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-xl flex flex-col justify-between hover:border-[#C59B27] transition-all duration-300 h-full"
          >
            <div>
              <div className="flex items-center justify-center gap-2 mb-5">
                <ShieldCheck className="w-5 h-5 text-[#C59B27]" />
                <h3 className="font-cormorant font-extrabold text-2xl text-[#01327a] uppercase tracking-widest text-center">
                  RECOMMENDED PARTNERS
                </h3>
              </div>

              {/* General Insurance */}
              <div className="mb-6">
                <h4 className="text-[11px] font-extrabold text-[#C59B27] uppercase tracking-wider mb-3 text-center border-b border-slate-100 pb-1.5">
                  GENERAL INSURANCE PARTNERS
                </h4>
                <div className="grid grid-cols-2 gap-2.5">
                  {generalPartners.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 bg-[#F9F8F6] rounded-xl border border-slate-200/80 flex items-center justify-center text-center shadow-2xs hover:border-[#C59B27] hover:bg-white transition-all group h-16"
                    >
                      <div className="relative w-full h-full flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
                        <Image
                          src={item.logo}
                          alt={item.name}
                          width={160}
                          height={50}
                          className="max-h-9 sm:max-h-10 w-auto max-w-[92%] object-contain"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Life Insurance */}
              <div>
                <h4 className="text-[11px] font-extrabold text-[#C59B27] uppercase tracking-wider mb-3 text-center border-b border-slate-100 pb-1.5">
                  LIFE INSURANCE PARTNERS
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {lifePartners.map((item, idx) => (
                    <div
                      key={idx}
                      className={`p-2.5 bg-[#F9F8F6] rounded-xl border border-slate-200/80 flex items-center justify-center text-center shadow-2xs hover:border-[#C59B27] hover:bg-white transition-all group h-16 ${idx === 4 ? "col-span-2 sm:col-span-1" : ""}`}
                    >
                      <div className="relative w-full h-full flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
                        <Image
                          src={item.logo}
                          alt={item.name}
                          width={160}
                          height={50}
                          className="max-h-9 sm:max-h-10 w-auto max-w-[92%] object-contain"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* CARD 2: RECENT AWARDS & RECOGNITION (lg:col-span-4) */}
          <ScrollReveal
            variant="fadeUp"
            delay={0.2}
            duration={0.8}
            className="lg:col-span-4 bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-xl flex flex-col justify-between hover:border-[#C59B27] transition-all duration-300 h-full"
          >
            <div>
              <div className="flex items-center justify-center gap-2 mb-5">
                <Trophy className="w-5 h-5 text-[#C59B27]" />
                <h3 className="font-cormorant font-extrabold text-2xl text-[#01327a] uppercase tracking-widest text-center">
                  RECENT AWARDS &amp; RECOGNITION
                </h3>
              </div>

              {/* Featured Major Trophy Badge */}
              <div className="mb-5 p-4 rounded-xl bg-gradient-to-r from-[#01327a] via-[#084299] to-[#01327a] text-white flex items-center gap-4 border border-[#D4AF37]/50 shadow-md">
                <div className="w-14 h-14 shrink-0 relative flex items-center justify-center">
                  <Image
                    src="/trophy.png"
                    alt="Golden Trophy Award"
                    width={70}
                    height={100}
                    priority
                    className="h-14 w-auto object-contain drop-shadow-md"
                  />
                </div>
                <div>
                  <span className="inline-block bg-gradient-to-r from-[#D4AF37] via-[#F5D77F] to-[#D4AF37] text-[#01327a] text-[10px] font-black px-2.5 py-0.5 rounded uppercase tracking-wider mb-1 shadow-xs">
                    {featuredAward.year} Featured
                  </span>
                  <h4 className="font-cormorant font-bold text-base sm:text-lg text-white leading-tight">
                    {featuredAward.title}
                  </h4>
                  <p className="text-xs text-[#F5D77F] font-medium">{featuredAward.sub}</p>
                </div>
              </div>

              {/* GIFI Awards 2026 */}
              <div className="mb-4">
                <h4 className="text-[10px] font-extrabold text-[#D4AF37] uppercase tracking-wider mb-2 border-b border-slate-100 pb-1 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>GIFY AWARDS 2026</span>
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {gifyAwards.map((award, idx) => (
                    <div key={idx} className="p-2.5 bg-[#F9F8F6] rounded-lg border border-slate-200/80 flex flex-col justify-center">
                      <p className="text-[11px] font-bold text-[#01327a] leading-tight">{award.title}</p>
                      {award.sub && <p className="text-[10px] text-[#C59B27] font-semibold mt-0.5">{award.sub}</p>}
                    </div>
                  ))}
                </div>
              </div>

              {/* Other Recognitions */}
              <div>
                <h4 className="text-[10px] font-extrabold text-[#C59B27] uppercase tracking-wider mb-2 border-b border-slate-100 pb-1 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C59B27]" />
                  <span>OTHER RECOGNITIONS</span>
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {otherRecognitions.map((rec, idx) => (
                    <div key={idx} className="p-2.5 bg-[#F9F8F6] rounded-lg border border-slate-200/80 flex flex-col justify-center">
                      <p className="text-[11px] font-bold text-[#01327a] leading-tight">{rec.title}</p>
                      <p className="text-[10px] text-slate-500 font-medium mt-0.5">{rec.sub}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* CARD 3: OUR VALUED CLIENTS (lg:col-span-3) */}
          <ScrollReveal
            variant="fadeUp"
            delay={0.35}
            duration={0.8}
            className="lg:col-span-3 bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-xl flex flex-col justify-between hover:border-[#C59B27] transition-all duration-300 h-full"
          >
            <div>
              <div className="flex items-center justify-center gap-2 mb-4">
                <Building2 className="w-5 h-5 text-[#C59B27]" />
                <h3 className="font-cormorant font-extrabold text-2xl text-[#01327a] uppercase tracking-widest text-center">
                  VALUED CLIENTS
                </h3>
              </div>

              <p className="text-[11px] font-bold text-[#C59B27] uppercase tracking-wider text-center mb-4">
                TRUSTED BY LEADING BUSINESSES
              </p>

              {/* Scrollable / Multi-item Client Pills Grid */}
              <div className="grid grid-cols-2 gap-1.5 max-h-[380px] overflow-y-auto pr-1">
                {corporateClients.map((client, idx) => (
                  <div
                    key={idx}
                    className="p-2 bg-[#F9F8F6] rounded-lg border border-slate-200/80 flex items-center justify-center text-center shadow-2xs hover:border-[#C59B27] hover:bg-white transition-all duration-200 group"
                  >
                    <span className="text-[11px] font-bold text-[#01327a] group-hover:text-[#C59B27] transition-colors leading-tight">
                      {client}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
