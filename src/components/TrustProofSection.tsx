"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Trophy, Award, ArrowRight } from "lucide-react";
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
    { title: "Top 30 Advisors Worldwide", sub: "Generali Central (2025 & 2026)" },
    { title: "COT CLUB", sub: "LIC of India" },
    { title: "DGC Committee & Advisor", sub: "Bajaj General (2025 & 2026)" },
  ];

  const generalPartners = [
    {
      name: "Bajaj Allianz General",
      logo: "/partners/bajaj-general.png",
    },
    {
      name: "Generali Central",
      logo: "/partners/generali-central.svg",
    },
    {
      name: "ICICI Lombard",
      logo: "/partners/icici-lombard.png",
    },
    {
      name: "HDFC ERGO",
      logo: "/partners/hdfc-ergo.png",
    },
    {
      name: "Digit General",
      logo: "/partners/digit-insurance.png",
    },
    {
      name: "Tata AIG",
      logo: "/partners/tata-aig.png",
    },
    {
      name: "Oriental Insurance",
      logo: "/partners/oriental-insurance.png",
    },
    {
      name: "New India Assurance",
      logo: "/partners/new-india-assurance.png",
    },
  ];

  const lifePartners = [
    {
      name: "Bajaj Allianz Life",
      logo: "/partners/bajaj-life.png",
    },
    {
      name: "HDFC Life",
      logo: "/partners/hdfc-life.png",
    },
    {
      name: "Tata AIA Life",
      logo: "/partners/tata-aia-life.png",
    },
    {
      name: "ICICI Prudential Life",
      logo: "/partners/icici-prudential.png",
    },
    {
      name: "LIC of India",
      logo: "/partners/lic.png",
    },
  ];

  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-[#F9F8F6] relative overflow-hidden">
      <div className="w-full max-w-[1720px] 2xl:max-w-[94vw] 3xl:max-w-[92vw] 4xl:max-w-[2800px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-16 3xl:px-20 relative z-10">
        
        {/* 2 Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 xl:gap-10">
          
          {/* CARD 1: RECOMMENDED BUSINESS PARTNERS */}
          <ScrollReveal
            variant="fadeUp"
            delay={0.05}
            duration={0.8}
            className="bg-white rounded-2xl p-6 sm:p-7 lg:p-8 border border-slate-200/90 shadow-xl flex flex-col justify-between hover:border-[#C59B27] transition-all duration-300 h-full overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-center gap-2 mb-5">
                <ShieldCheck className="w-5 h-5 text-[#C59B27]" />
                <h3 className="font-cormorant font-extrabold text-2xl text-[#01327a] uppercase tracking-widest text-center">
                  RECOMMENDED PARTNERS
                </h3>
              </div>

              {/* General Risk & Coverage */}
              <div className="mb-6">
                <h4 className="text-[11px] font-extrabold text-[#C59B27] uppercase tracking-wider mb-3 text-center border-b border-slate-100 pb-1.5">
                  GENERAL RISK &amp; COVERAGE PARTNERS
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
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

              {/* Life Protection */}
              <div>
                <h4 className="text-[11px] font-extrabold text-[#C59B27] uppercase tracking-wider mb-3 text-center border-b border-slate-100 pb-1.5">
                  LIFE PROTECTION PARTNERS
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                  {lifePartners.map((item, idx) => (
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
            </div>
          </ScrollReveal>

          {/* CARD 2: RECENT AWARDS & RECOGNITION */}
          <ScrollReveal
            variant="fadeUp"
            delay={0.2}
            duration={0.8}
            className="bg-white rounded-2xl p-6 sm:p-7 lg:p-8 border border-slate-200/90 shadow-xl flex flex-col justify-between hover:border-[#C59B27] transition-all duration-300 h-full overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-5">
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-[#C59B27]" />
                  <h3 className="font-cormorant font-extrabold text-2xl text-[#01327a] uppercase tracking-widest">
                    RECENT AWARDS &amp; RECOGNITION
                  </h3>
                </div>
                <Link
                  href="/trophy"
                  prefetch={false}
                  className="inline-flex items-center gap-1 text-[11px] font-extrabold text-[#9A7A1A] hover:text-[#01327a] uppercase tracking-wider bg-amber-50 hover:bg-amber-100/80 px-2.5 py-1 rounded-full border border-amber-200/80 transition-colors shrink-0"
                >
                  <span>View All</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
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

              {/* View All Trophies Action Button */}
              <div className="mt-5 pt-3.5 border-t border-slate-100">
                <Link
                  href="/trophy"
                  prefetch={false}
                  className="group w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#01327a] via-[#084299] to-[#01327a] hover:from-[#C59B27] hover:via-[#D4AF37] hover:to-[#F5D77F] text-white hover:text-[#01327a] text-xs font-extrabold tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg border border-[#C59B27]/40"
                >
                  <Trophy className="w-4 h-4 text-[#F5D77F] group-hover:text-[#01327a] transition-colors" />
                  <span>View All 100+ Trophies &amp; Awards</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
