"use client";

import React from "react";
import { Shield, Award, Users, Briefcase, UserCheck } from "lucide-react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "./ScrollReveal";

export default function StatsBar() {
  const stats = [
    {
      icon: Shield,
      value: "75+",
      label: "Years Legacy",
    },
    {
      icon: Award,
      value: "₹100+ Cr",
      label: "Claims Assisted",
    },
    {
      icon: Users,
      value: "10,000+",
      label: "Lives Protected",
    },
    {
      icon: Briefcase,
      value: "500+",
      label: "Business Portfolios",
    },
    {
      icon: UserCheck,
      value: "3rd Generation",
      label: "Insurance Consultants",
      isHeadline: true,
    },
  ];

  return (
    <section className="relative z-30 w-full max-w-[1720px] 2xl:max-w-[94vw] 3xl:max-w-[92vw] 4xl:max-w-[2800px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-16 3xl:px-20 -mt-10 sm:-mt-12 lg:-mt-14 mb-10">
      <ScrollReveal variant="fadeUp" duration={0.8} amount={0.2}>
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100/90 p-4 sm:p-6 lg:p-7 xl:p-8">
          <StaggerContainer
            staggerChildren={0.1}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-0 lg:divide-x lg:divide-slate-100"
          >
            {stats.map((stat, idx) => {
              const IconComp = stat.icon;
              return (
                <StaggerItem key={idx} variant="fadeUp">
                  <div className="flex items-center gap-3.5 sm:gap-4 px-2 lg:px-5 xl:px-6 py-2 group">
                    <IconComp className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#C59B27] stroke-[1.8] flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                    <div className="flex flex-col">
                      <div
                        className={`font-sans font-extrabold text-[#011331] leading-tight flex items-baseline ${
                          stat.isHeadline
                            ? "text-base sm:text-lg lg:text-xl xl:text-2xl"
                            : "text-lg sm:text-xl lg:text-2xl xl:text-3xl whitespace-nowrap"
                        }`}
                      >
                        <span>{stat.value}</span>
                      </div>
                      <span className="font-sans text-xs sm:text-sm font-semibold text-slate-600 tracking-wide mt-0.5">
                        {stat.label}
                      </span>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </ScrollReveal>
    </section>
  );
}
