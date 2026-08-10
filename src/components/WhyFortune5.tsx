"use client";

import React from "react";
import {
  ShieldCheck,
  Users,
  FileText,
  HeartHandshake,
  Handshake,
  Scale,
  Zap,
  ShieldAlert,
  Shield,
} from "lucide-react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "./ScrollReveal";

const features = [
  {
    id: 1,
    title: "75+ Years Legacy",
    icon: ShieldCheck,
  },
  {
    id: 2,
    title: "3rd Generation Consultants",
    icon: Users,
  },
  {
    id: 3,
    title: "Claims Driven Approach",
    icon: FileText,
  },
  {
    id: 4,
    title: "Dedicated Relationship Team",
    icon: HeartHandshake,
  },
  {
    id: 5,
    title: "Strong Insurer Relationships",
    icon: Handshake,
  },
  {
    id: 6,
    title: "Unbiased Advice",
    icon: Scale,
  },
  {
    id: 7,
    title: "Faster Claim Assistance",
    icon: Zap,
  },
  {
    id: 8,
    title: "End-to-End Risk Management",
    icon: Shield,
  },
];

export default function WhyFortune5() {
  return (
    <section className="w-full py-16 sm:py-20 bg-[#F9F8F6] relative overflow-hidden">
      <div className="w-full max-w-[1720px] 2xl:max-w-[94vw] 3xl:max-w-[92vw] 4xl:max-w-[2800px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-16 3xl:px-20 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal variant="fadeUp" duration={0.7} className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#011331] tracking-wider uppercase">
            WHY FORTUNE 5?
          </h2>
          
          {/* Gold Shield Line Ornament */}
          <div className="flex items-center gap-3 mt-3">
            <span className="h-[1.5px] w-12 sm:w-20 bg-gradient-to-r from-transparent via-[#C59B27] to-transparent inline-block" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#C59B27] border-2 border-white shadow-xs" />
            <span className="h-[1.5px] w-12 sm:w-20 bg-gradient-to-r from-transparent via-[#C59B27] to-transparent inline-block" />
          </div>
        </ScrollReveal>

        {/* 8 Feature Cards Grid with Stagger Animation */}
        <StaggerContainer
          staggerChildren={0.08}
          className="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-8 gap-4 sm:gap-5 lg:gap-6"
        >
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.id} variant="fadeUp">
                <div className="group relative bg-white rounded-2xl border border-slate-200/80 shadow-sm transition-all duration-500 flex flex-col items-center text-center justify-center min-h-[175px] sm:min-h-[200px] cursor-pointer overflow-hidden hover:-translate-y-3 hover:shadow-[0_20px_60px_-10px_rgba(1,19,49,0.35)] hover:border-transparent">
                  {/* Background fill layer: slides up on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#011331] via-[#071f47] to-[#0a2a60] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0" />

                  {/* Gold shimmer sweep on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C59B27]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 delay-100 ease-in-out z-10 pointer-events-none" />

                  {/* Top gold border glow */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C59B27] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 z-20" />

                  {/* Icon container */}
                  <div className="relative z-30 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl mb-4 transition-all duration-400 flex items-center justify-center
                    bg-[#F5EDD4] text-[#B8860B]
                    group-hover:bg-[#C59B27] group-hover:text-[#011331]
                    group-hover:shadow-[0_0_20px_4px_rgba(197,155,39,0.45)]
                    group-hover:scale-110">
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.7] transition-transform duration-300 group-hover:scale-105" />
                  </div>

                  {/* Card Title */}
                  <h3 className="relative z-30 font-sans font-bold text-xs sm:text-sm text-[#011331] group-hover:text-white leading-snug tracking-tight transition-colors duration-300 px-2">
                    {item.title}
                  </h3>

                  {/* Bottom gold line accent */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-3/4 h-[2px] bg-gradient-to-r from-transparent via-[#C59B27] to-transparent transition-all duration-500 delay-150 z-20" />
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

      </div>
    </section>
  );
}
