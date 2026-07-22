"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Shield } from "lucide-react";

export default function AboutFortune5() {
  return (
    <section id="about" className="w-full py-16 sm:py-20 lg:py-24 bg-[#F9F8F6] relative overflow-hidden">
      {/* Subtle Right Skyline Watermark Silhouette */}
      <div className="absolute right-0 bottom-0 w-1/3 h-full opacity-10 pointer-events-none flex items-end justify-end pr-6 pb-2">
        <svg className="w-full h-auto text-slate-400 fill-current" viewBox="0 0 500 200">
          <path d="M10 200 V160 H30 V200 H40 V140 H60 V200 H70 V120 H90 V200 H100 V150 H120 V200 H130 V110 H150 V200 H160 V130 H180 V200 H190 V80 H220 V200 H230 V140 H250 V200 H260 V100 H290 V200 H300 V60 H330 V200 H340 V130 H360 V200 H370 V90 H400 V200 H410 V150 H430 V200 H440 V110 H470 V200 Z" />
        </svg>
      </div>

      <div className="w-full max-w-[1720px] 2xl:max-w-[94vw] 3xl:max-w-[92vw] 4xl:max-w-[2800px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-16 3xl:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-end">
          
          {/* Left Column: Borderless Portrait (Standing directly on background) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start items-end">
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-[440px]">
              <Image
                src="/kaushal-shah.png"
                alt="Kaushal Shah - Fortune 5 Risk Management Solutions"
                width={480}
                height={580}
                priority
                quality={100}
                className="w-full h-auto object-contain drop-shadow-xl"
              />
            </div>
          </div>

          {/* Right Column: Text & Content matching screenshot exactly */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-5 lg:space-y-6 pb-4">
            
            {/* Tagline */}
            <div className="text-[#B8860B] font-extrabold text-xs sm:text-sm tracking-widest uppercase">
              ABOUT FORTUNE 5
            </div>

            {/* Main Headline */}
            <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.12] tracking-tight uppercase">
              <span className="text-[#011331] block">A LEGACY OF TRUST.</span>
              <span className="text-[#B8860B] block mt-1">A FUTURE OF PROTECTION.</span>
            </h2>

            {/* Gold Shield Ornament Line Divider */}
            <div className="flex items-center gap-3 py-1">
              <span className="h-[1.5px] w-16 sm:w-24 bg-gradient-to-r from-transparent via-[#C59B27] to-transparent inline-block" />
              <Shield className="w-4 h-4 text-[#C59B27] fill-[#C59B27]/30" />
              <span className="h-[1.5px] w-16 sm:w-24 bg-gradient-to-r from-transparent via-[#C59B27] to-transparent inline-block" />
            </div>

            {/* Paragraph Description matching screenshot */}
            <p className="text-slate-700 text-sm sm:text-base lg:text-lg font-medium leading-relaxed font-sans max-w-2xl">
              Fortune 5 Risk Management Solutions LLP is a trusted insurance consultancy with a 70+ year legacy of helping businesses and individuals manage risk, optimise coverage and receive unwavering support when it matters the most.
            </p>

            {/* Read More Button */}
            <div className="pt-3">
              <a
                href="#read-more"
                className="group flex items-center gap-3 bg-[#011331] hover:bg-[#071f47] text-white font-bold text-xs sm:text-sm tracking-widest px-8 py-4 rounded-lg shadow-lg border border-slate-900 uppercase transition-all duration-200"
              >
                <span>READ MORE ABOUT US</span>
                <ArrowRight className="w-4 h-4 text-[#C59B27] group-hover:translate-x-1.5 transition-transform" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
