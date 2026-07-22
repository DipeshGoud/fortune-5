"use client";

import React from "react";
import { Shield, Award, Users, Briefcase, UserCheck } from "lucide-react";

export default function StatsBar() {
  return (
    <section className="relative z-30 w-full max-w-[1720px] 2xl:max-w-[94vw] 3xl:max-w-[92vw] 4xl:max-w-[2800px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-16 3xl:px-20 -mt-10 sm:-mt-12 lg:-mt-14 mb-10">
      <div className="bg-white rounded-2xl shadow-xl border border-slate-100/90 p-4 sm:p-6 lg:p-7 xl:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-0 lg:divide-x lg:divide-slate-100">
          
          {/* Card 1: 70+ Years Legacy */}
          <div className="flex items-center gap-3.5 sm:gap-4 px-2 lg:px-5 xl:px-6 py-2 group">
            <Shield className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#C59B27] stroke-[1.8] flex-shrink-0" />
            <div className="flex flex-col">
              <div className="font-sans font-extrabold text-lg sm:text-xl lg:text-2xl xl:text-3xl text-[#011331] leading-tight flex items-baseline">
                <span>70+</span>
              </div>
              <span className="font-sans text-xs sm:text-sm font-semibold text-slate-600 tracking-wide mt-0.5">
                Years Legacy
              </span>
            </div>
          </div>

          {/* Card 2: ₹100 Cr+ Claims Assisted */}
          <div className="flex items-center gap-3.5 sm:gap-4 px-2 lg:px-5 xl:px-6 py-2 group">
            <Award className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#C59B27] stroke-[1.8] flex-shrink-0" />
            <div className="flex flex-col">
              <div className="font-sans font-extrabold text-lg sm:text-xl lg:text-2xl xl:text-3xl text-[#011331] leading-tight flex items-baseline whitespace-nowrap">
                <span>₹100 Cr+</span>
              </div>
              <span className="font-sans text-xs sm:text-sm font-semibold text-slate-600 tracking-wide mt-0.5">
                Claims Assisted
              </span>
            </div>
          </div>

          {/* Card 3: 50,000+ Lives Protected */}
          <div className="flex items-center gap-3.5 sm:gap-4 px-2 lg:px-5 xl:px-6 py-2 group">
            <Users className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#C59B27] stroke-[1.8] flex-shrink-0" />
            <div className="flex flex-col">
              <div className="font-sans font-extrabold text-lg sm:text-xl lg:text-2xl xl:text-3xl text-[#011331] leading-tight flex items-baseline">
                <span>50,000+</span>
              </div>
              <span className="font-sans text-xs sm:text-sm font-semibold text-slate-600 tracking-wide mt-0.5">
                Lives Protected
              </span>
            </div>
          </div>

          {/* Card 4: 150+ Business Portfolios */}
          <div className="flex items-center gap-3.5 sm:gap-4 px-2 lg:px-5 xl:px-6 py-2 group">
            <Briefcase className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#C59B27] stroke-[1.8] flex-shrink-0" />
            <div className="flex flex-col">
              <div className="font-sans font-extrabold text-lg sm:text-xl lg:text-2xl xl:text-3xl text-[#011331] leading-tight flex items-baseline">
                <span>150+</span>
              </div>
              <span className="font-sans text-xs sm:text-sm font-semibold text-slate-600 tracking-wide mt-0.5">
                Business Portfolios
              </span>
            </div>
          </div>

          {/* Card 5: 3rd Generation Insurance Experts */}
          <div className="flex items-center gap-3.5 sm:gap-4 px-2 lg:px-5 xl:px-6 py-2 group">
            <UserCheck className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#C59B27] stroke-[1.8] flex-shrink-0" />
            <div className="flex flex-col">
              <div className="font-sans font-extrabold text-base sm:text-lg lg:text-xl xl:text-2xl text-[#011331] leading-snug">
                <span>3rd Generation</span>
              </div>
              <span className="font-sans text-xs sm:text-sm font-semibold text-slate-600 tracking-wide mt-0.5">
                Insurance Experts
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
