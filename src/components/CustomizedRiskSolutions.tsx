"use client";

import React from "react";
import Link from "next/link";
import { Handshake, Target, IndianRupee, ArrowRight, ShieldCheck } from "lucide-react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "./ScrollReveal";

export default function CustomizedRiskSolutions() {
  const solutions = [
    {
      id: "01",
      icon: Handshake,
      title: "Risk Inspection & Advisory",
      description:
        "Identify gaps and review policy documents to recommend improvements, ensuring optimal protection and risk mitigation across all your risk coverage plans.",
      link: "/services",
    },
    {
      id: "02",
      icon: Target,
      title: "Risk Solution Advisory & Placement",
      description:
        "We shortlist top-tier insurers and secure competitive quotes to provide you with the best value-driven, tailored coverage for your specific needs.",
      link: "/services",
    },
    {
      id: "03",
      icon: IndianRupee,
      title: "Risk Portfolio Management",
      description:
        "Outsource your comprehensive risk management requirements to us. We design tailored solutions for clients of all sizes, ensuring a streamlined, cost-effective portfolio.",
      link: "/contact",
    },
  ];

  return (
    <section className="w-full py-20 sm:py-24 lg:py-28 bg-[#F9F8F6] relative overflow-hidden">
      {/* Subtle Background Accent Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#C59B27]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1720px] 2xl:max-w-[94vw] 3xl:max-w-[92vw] 4xl:max-w-[2800px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-16 3xl:px-20 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal variant="fadeUp" duration={0.8} className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          {/* Subtitle Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/70 border border-[#C59B27]/30 text-[#8A600B] font-extrabold text-xs tracking-widest uppercase mb-4 shadow-xs">
            <ShieldCheck className="w-4 h-4 text-[#C59B27]" />
            <span>Tailored Risk Management</span>
          </div>

          {/* Main Title */}
          <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#01327a] tracking-tight leading-[1.15] uppercase">
            Customised Risk <span className="text-[#C59B27]">Solutions</span>
          </h2>
          
          {/* Section Divider Line */}
          <div className="flex items-center gap-3 my-4">
            <span className="h-[2px] w-12 sm:w-16 bg-gradient-to-r from-transparent to-[#C59B27] inline-block"></span>
            <span className="w-2 h-2 rounded-full bg-[#C59B27] inline-block" />
            <span className="h-[2px] w-12 sm:w-16 bg-gradient-to-l from-transparent to-[#C59B27] inline-block"></span>
          </div>

          {/* Sub-description */}
          <p className="text-slate-600 text-sm sm:text-base lg:text-lg font-medium leading-relaxed max-w-2xl">
            We provide solutions that shield you from unwanted risks and protect against potential financial losses.
          </p>
        </ScrollReveal>

        {/* 3 Redesigned Cards Grid */}
        <StaggerContainer
          staggerChildren={0.15}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 xl:gap-12"
        >
          {solutions.map((item) => {
            const IconComponent = item.icon;
            return (
              <StaggerItem key={item.id} variant="fadeUp">
                <div className="group relative bg-white rounded-2xl p-8 sm:p-9 lg:p-10 border border-slate-200/80 shadow-lg hover:shadow-2xl hover:border-[#C59B27] transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-2 h-full overflow-hidden">
                  {/* Gold Gradient Top Border Highlight */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C59B27] via-[#F5D77F] to-[#C59B27] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                  <div>
                    {/* Top Row: Icon Container & Number Badge */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-[#01327a] border-2 border-[#C59B27] flex items-center justify-center text-[#C59B27] shadow-md group-hover:bg-[#01255e] group-hover:border-[#F5D77F] group-hover:text-[#F5D77F] transition-all duration-300">
                        <IconComponent className="w-8 h-8 sm:w-9 sm:h-9 stroke-[1.8]" />
                      </div>

                      <span className="font-cormorant font-extrabold text-3xl sm:text-4xl text-slate-300 group-hover:text-[#C59B27] transition-colors duration-300">
                        {item.id}
                      </span>
                    </div>

                    {/* Card Title */}
                    <h3 className="font-sans font-extrabold text-xl sm:text-2xl text-[#01327a] leading-snug tracking-tight mb-4 group-hover:text-[#C59B27] transition-colors duration-300">
                      {item.title}
                    </h3>

                    {/* Card Description */}
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans font-normal mb-8">
                      {item.description}
                    </p>
                  </div>

                  {/* Card Action Link */}
                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#01327a] tracking-wider uppercase group-hover:text-[#C59B27] transition-colors pt-4 border-t border-slate-100"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 text-[#C59B27] group-hover:translate-x-1.5 transition-transform" />
                  </Link>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

      </div>
    </section>
  );
}
