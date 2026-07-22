"use client";

import React from "react";
import {
  Search,
  ShieldAlert,
  GitCompare,
  FileCheck,
  Headphones,
  RefreshCw,
  TrendingUp,
  Shield,
} from "lucide-react";

export default function HowWeWork() {
  const steps = [
    {
      id: 1,
      title: "DISCOVERY",
      icon: Search,
      desc: "Understanding your unique goals & requirements",
    },
    {
      id: 2,
      title: "RISK ASSESSMENT",
      icon: ShieldAlert,
      desc: "Identifying vulnerabilities & exposure areas",
    },
    {
      id: 3,
      title: "COMPARE INSURERS",
      icon: GitCompare,
      desc: "Evaluating top policy options & prices",
    },
    {
      id: 4,
      title: "POLICY ISSUANCE",
      icon: FileCheck,
      desc: "Seamless documentation & policy setup",
    },
    {
      id: 5,
      title: "CLAIMS SUPPORT",
      icon: Headphones,
      desc: "24/7 assistance when you need it most",
    },
    {
      id: 6,
      title: "RENEWALS",
      icon: RefreshCw,
      desc: "Proactive review & timely renewals",
    },
    {
      id: 7,
      title: "FUTURE PLANNING",
      icon: TrendingUp,
      desc: "Long-term wealth & risk growth strategy",
    },
  ];

  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-[#F9F8F6] relative overflow-hidden">
      <div className="w-full max-w-[1720px] 2xl:max-w-[1920px] 3xl:max-w-[2200px] 4xl:max-w-[2400px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-16 3xl:px-20">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16 sm:mb-20">
          <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#011331] tracking-widest uppercase">
            HOW WE WORK
          </h2>
          
          {/* Gold Accent Line with Shield Emblem */}
          <div className="flex items-center gap-3 mt-3">
            <span className="h-[1.5px] w-12 sm:w-16 bg-gradient-to-r from-transparent to-[#C59B27] inline-block"></span>
            <div className="w-6 h-6 rounded-full bg-[#011331] border border-[#C59B27] flex items-center justify-center text-[#C59B27] shadow-sm">
              <Shield className="w-3 h-3 fill-[#C59B27]/20" />
            </div>
            <span className="h-[1.5px] w-12 sm:w-16 bg-gradient-to-l from-transparent to-[#C59B27] inline-block"></span>
          </div>
        </div>

        {/* Steps Timeline Container */}
        <div className="relative w-full">
          {/* Desktop Connecting Line & Dots */}
          <div className="hidden lg:block absolute top-[44px] left-[5%] right-[5%] h-[2px] bg-gradient-to-r from-slate-200 via-amber-200/60 to-slate-200 z-0" />

          {/* Grid Layout for Steps */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 sm:gap-10 lg:gap-4 relative z-10">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={step.id}
                  className="flex flex-col items-center text-center group cursor-pointer relative"
                >
                  {/* Step Circle Container - Stationary (No pop-up movement) */}
                  <div className="relative mb-5">
                    {/* Circle Node */}
                    <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-[#011331] border-2 border-[#C59B27] shadow-md flex items-center justify-center relative overflow-hidden transition-colors duration-300 group-hover:bg-[#071f47] group-hover:border-[#F5D77F]">
                      {/* Icon */}
                      <IconComponent className="w-8 h-8 sm:w-9 sm:h-9 text-[#C59B27] stroke-[1.8] transition-colors duration-300 group-hover:text-[#F5D77F]" />
                    </div>

                    {/* Step Number Badge */}
                    <div className="absolute -bottom-1 -right-1 w-6.5 h-6.5 rounded-full bg-[#C59B27] text-[#011331] font-sans font-bold text-xs flex items-center justify-center shadow-xs border-2 border-white transition-colors duration-300 group-hover:bg-[#F5D77F]">
                      {step.id}
                    </div>
                  </div>

                  {/* Connecting Gold Bead (Desktop view) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-[41px] -right-[15%] transform translate-x-1/2 z-20">
                      <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-r from-[#F5D77F] via-[#C59B27] to-[#966C0F] shadow-sm border border-amber-100" />
                    </div>
                  )}

                  {/* Step Title */}
                  <h3 className="font-sans font-bold text-xs sm:text-sm text-[#011331] tracking-wider uppercase leading-snug max-w-[120px] transition-colors duration-300 group-hover:text-[#C59B27]">
                    {step.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
