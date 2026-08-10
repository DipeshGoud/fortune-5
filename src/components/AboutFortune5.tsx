"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Shield } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function AboutFortune5() {
  return (
    <section id="about" className="w-full pt-8 sm:pt-10 lg:pt-12 pb-16 sm:pb-20 lg:pb-24 bg-[#F8F7F3] relative overflow-hidden">
      {/* Left Corner Gradient Clipart Watermark */}
      <div className="absolute left-0 bottom-0 w-[380px] sm:w-[480px] md:w-[580px] lg:w-[680px] h-auto opacity-30 pointer-events-none z-0">
        <Image
          src="/gradient clipart.png"
          alt="Gradient Ornament Clipart"
          width={700}
          height={700}
          className="object-contain object-left-bottom w-full h-auto"
        />
      </div>

      {/* Right Corner City Skyline Watermark */}
      <div className="absolute right-0 bottom-0 w-[480px] sm:w-[600px] md:w-[750px] lg:w-[900px] h-auto opacity-15 pointer-events-none z-0 flex items-end justify-end">
        <Image
          src="/city png.png"
          alt="City Skyline Background"
          width={900}
          height={450}
          className="object-contain object-right-bottom w-full h-auto"
        />
      </div>

      <div className="w-full max-w-[1600px] 2xl:max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 xl:gap-20 items-end">
          
          {/* Left Column: Borderless Portrait */}
          <ScrollReveal
            variant="fadeRight"
            duration={1.3}
            delay={0.1}
            className="lg:col-span-5 flex justify-center lg:justify-start lg:pl-16 items-end mb-4 sm:-mb-20 lg:-mb-24 z-10"
          >
            <div className="relative w-full max-w-[320px] sm:max-w-lg lg:max-w-[440px]">
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
          </ScrollReveal>

          {/* Right Column: Text & Content */}
          <ScrollReveal
            variant="fadeLeft"
            duration={1.3}
            delay={0.25}
            className="lg:col-span-7 flex flex-col items-start space-y-4 sm:space-y-5 lg:space-y-6 pb-6 sm:pb-16 lg:pb-24"
          >
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

            {/* Paragraph Description */}
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
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
