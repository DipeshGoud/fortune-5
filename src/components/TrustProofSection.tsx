"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, Trophy, Building2 } from "lucide-react";

export default function TrustProofSection() {
  const awards = [
    { year: "2016", title: "Excellence in Customer Service" },
    { year: "2018", title: "Rising Insurance Advisor" },
    { year: "2020", title: "Claims Service Leader" },
    { year: "2023", title: "Trusted Partner Award" },
    { year: "2025", title: "Legacy of Trust Award" },
  ];

  const generalPartners = [
    { name: "BAJAJ Allianz", color: "text-[#00529B]", sub: "General Insurance" },
    { name: "ICICI Lombard", color: "text-[#F37021]", sub: "General Insurance" },
    { name: "HDFC ERGO", color: "text-[#ED1C24]", sub: "General Insurance" },
  ];

  const lifePartners = [
    { name: "LIC of India", color: "text-[#003B73]", sub: "Life Insurance" },
    { name: "HDFC Life", color: "text-[#ED1C24]", sub: "Life Insurance" },
    { name: "SBI Life", color: "text-[#2B2A29]", sub: "Life Insurance" },
  ];

  const healthPartners = [
    { name: "STAR Health", color: "text-[#004B87]", sub: "Health Insurance" },
    { name: "Niva Bupa", color: "text-[#00A099]", sub: "Health Insurance" },
    { name: "Care Health", color: "text-[#F8981D]", sub: "Health Insurance" },
  ];

  const corporateClients = [
    { name: "TATA", logo: "TATA", style: "text-[#0054A6] font-black tracking-widest text-lg" },
    { name: "Mahindra", logo: "Mahindra", style: "text-[#E31837] font-extrabold tracking-tight text-lg italic" },
    { name: "Godrej", logo: "Godrej", style: "text-[#C72B57] font-serif font-bold text-xl tracking-wide" },
    { name: "LARSEN & TOUBRO", logo: "L&T", style: "text-[#002D62] font-black tracking-tighter text-base" },
    { name: "DLF", logo: "DLF", style: "text-[#1C2541] font-black text-xl tracking-widest" },
    { name: "accenture", logo: "accenture", style: "text-[#A100FF] font-extrabold text-base tracking-tight" },
  ];

  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-[#F9F8F6] relative overflow-hidden">
      <div className="w-full max-w-[1720px] 2xl:max-w-[94vw] 3xl:max-w-[92vw] 4xl:max-w-[2800px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-16 3xl:px-20 relative z-10">
        
        {/* 3 Columns Grid matching reference screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-10">
          
          {/* CARD 1: OUR PARTNERS (lg:col-span-4) */}
          <div className="lg:col-span-4 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-xl flex flex-col justify-between hover:border-[#C59B27] transition-all duration-300">
            <div>
              <div className="flex items-center justify-center gap-2 mb-6">
                <ShieldCheck className="w-5 h-5 text-[#C59B27]" />
                <h3 className="font-cormorant font-extrabold text-2xl text-[#011331] uppercase tracking-widest text-center">
                  OUR PARTNERS
                </h3>
              </div>

              {/* General Insurance */}
              <div className="mb-6">
                <h4 className="text-[11px] font-extrabold text-[#C59B27] uppercase tracking-wider mb-3 text-center border-b border-slate-100 pb-1.5">
                  GENERAL INSURANCE
                </h4>
                <div className="grid grid-cols-3 gap-2.5">
                  {generalPartners.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-[#F9F8F6] rounded-xl border border-slate-200/80 flex flex-col items-center justify-center text-center shadow-2xs hover:border-[#C59B27] hover:bg-white transition-all group"
                    >
                      <span className={`font-extrabold text-xs leading-tight ${item.color}`}>
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Life Insurance */}
              <div className="mb-6">
                <h4 className="text-[11px] font-extrabold text-[#C59B27] uppercase tracking-wider mb-3 text-center border-b border-slate-100 pb-1.5">
                  LIFE INSURANCE
                </h4>
                <div className="grid grid-cols-3 gap-2.5">
                  {lifePartners.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-[#F9F8F6] rounded-xl border border-slate-200/80 flex flex-col items-center justify-center text-center shadow-2xs hover:border-[#C59B27] hover:bg-white transition-all group"
                    >
                      <span className={`font-extrabold text-xs leading-tight ${item.color}`}>
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Health Insurance */}
              <div>
                <h4 className="text-[11px] font-extrabold text-[#C59B27] uppercase tracking-wider mb-3 text-center border-b border-slate-100 pb-1.5">
                  HEALTH INSURANCE
                </h4>
                <div className="grid grid-cols-3 gap-2.5">
                  {healthPartners.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-[#F9F8F6] rounded-xl border border-slate-200/80 flex flex-col items-center justify-center text-center shadow-2xs hover:border-[#C59B27] hover:bg-white transition-all group"
                    >
                      <span className={`font-extrabold text-xs leading-tight ${item.color}`}>
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CARD 2: AWARDS & RECOGNITION (lg:col-span-5) */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-xl flex flex-col justify-between hover:border-[#C59B27] transition-all duration-300">
            <div>
              <div className="flex items-center justify-center gap-2 mb-6">
                <Trophy className="w-5 h-5 text-[#C59B27]" />
                <h3 className="font-cormorant font-extrabold text-2xl text-[#011331] uppercase tracking-widest text-center">
                  AWARDS &amp; RECOGNITION
                </h3>
              </div>

              {/* 5 Trophy Badges Row with Real Trophy Image */}
              <div className="grid grid-cols-5 gap-2 pt-2">
                {awards.map((award, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center text-center group cursor-default"
                  >
                    {/* Trophy Image Display */}
                    <div className="h-20 sm:h-24 flex items-center justify-center mb-2">
                      <Image
                        src="/trophy.png"
                        alt="Golden Trophy Award"
                        width={60}
                        height={100}
                        priority
                        quality={100}
                        className="h-16 sm:h-20 w-auto object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    {/* Year */}
                    <span className="font-extrabold text-xs text-[#C59B27] mb-0.5">
                      {award.year}
                    </span>

                    {/* Award Title */}
                    <p className="text-[10px] sm:text-[11px] font-semibold text-slate-700 leading-tight max-w-[90px]">
                      {award.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CARD 3: OUR CLIENTS (lg:col-span-3) */}
          <div className="lg:col-span-3 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-xl flex flex-col justify-between hover:border-[#C59B27] transition-all duration-300">
            <div>
              <div className="flex items-center justify-center gap-2 mb-6">
                <Building2 className="w-5 h-5 text-[#C59B27]" />
                <h3 className="font-cormorant font-extrabold text-2xl text-[#011331] uppercase tracking-widest text-center">
                  OUR CLIENTS
                </h3>
              </div>

              {/* Corporate Clients Brand Grid */}
              <div className="grid grid-cols-2 gap-3.5 pt-2">
                {corporateClients.map((client, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-[#F9F8F6] rounded-xl border border-slate-200/80 flex flex-col items-center justify-center text-center shadow-2xs hover:border-[#C59B27] hover:bg-white transition-all duration-200 group h-20"
                  >
                    <span className={client.style}>
                      {client.logo}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
