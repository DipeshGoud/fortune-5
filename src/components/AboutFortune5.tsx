"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function AboutFortune5() {
  return (
    <section id="about" className="w-full pt-8 sm:pt-10 lg:pt-12 pb-16 sm:pb-20 lg:pb-24 bg-[#F8F7F3] relative overflow-hidden">
      {/* Left Corner Gradient Clipart Watermark */}
      <div className="absolute left-0 bottom-0 w-[380px] sm:w-[480px] md:w-[580px] lg:w-[680px] h-auto opacity-30 pointer-events-none z-0">
        <Image
          src="/gradient-clipart.webp"
          alt="Gradient Ornament Clipart"
          width={700}
          height={700}
          className="object-contain object-left-bottom w-full h-auto"
        />
      </div>

      {/* Right Corner City Skyline Watermark */}
      <div className="absolute right-0 bottom-0 w-[480px] sm:w-[600px] md:w-[750px] lg:w-[900px] h-auto opacity-15 pointer-events-none z-0 flex items-end justify-end">
        <Image
          src="/city-bg.webp"
          alt="City Skyline Background"
          width={900}
          height={450}
          className="object-contain object-right-bottom w-full h-auto"
        />
      </div>

      <div className="w-full max-w-[1600px] 2xl:max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-end">
          
          {/* Founder Portrait with Grounding Arch & Executive Badge */}
          <ScrollReveal
            variant="fadeRight"
            duration={1.2}
            delay={0.1}
            className="order-2 lg:order-1 lg:col-span-5 flex justify-center lg:justify-start items-end z-10 w-full"
          >
            <div className="relative mx-auto lg:mx-0 flex w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[460px] justify-center items-end">
              {/* Luxury Arch Backdrop Pedestal */}
              <div className="absolute bottom-0 h-[84%] w-[88%] rounded-t-[10rem] border border-[#D4AF37]/40 bg-gradient-to-b from-[#D4AF37]/20 via-[#D4AF37]/5 to-transparent shadow-xl pointer-events-none z-0" />
              
              {/* Soft Ambient Gold Glow */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none z-0" />

              {/* Kaushal Shah Portrait */}
              <Image
                src="/kaushal-shah.webp"
                alt="Kaushal Shah - Chairman & Managing Director, Fortune 5"
                width={540}
                height={680}
                priority
                quality={100}
                className="relative z-10 w-full h-auto object-contain drop-shadow-2xl"
              />

              {/* Grounded Floating Executive Badge */}
              <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 lg:left-auto lg:right-0 lg:translate-x-0 z-20 rounded-2xl border border-white/25 bg-[#01327a]/95 px-4 py-2.5 sm:px-5 sm:py-3 text-center lg:text-left shadow-2xl backdrop-blur-md whitespace-nowrap">
                <p className="text-[9px] sm:text-[10px] font-black tracking-[0.18em] text-[#F5D77F] uppercase">
                  Chairman &amp; Managing Director
                </p>
                <p className="mt-0.5 text-xs sm:text-sm font-bold text-white">
                  Kaushal Shah
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Text & Content Column */}
          <ScrollReveal
            variant="fadeLeft"
            duration={1.2}
            delay={0.2}
            className="order-1 lg:order-2 lg:col-span-7 flex flex-col items-start space-y-4 sm:space-y-5 lg:space-y-6 pb-2 lg:pb-12"
          >
            {/* Tagline */}
            <div className="text-[#966C0F] font-extrabold text-xs sm:text-sm tracking-widest uppercase">
              ABOUT <span className="inline-block whitespace-nowrap">FORTUNE 5</span>
            </div>

            {/* Main Headline */}
            <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.12] tracking-tight uppercase">
              <span className="text-[#01327a] block">A LEGACY OF TRUST.</span>
              <span className="text-[#D4AF37] block mt-1">A FUTURE OF PROTECTION.</span>
            </h2>

            {/* Gold Shield Ornament Line Divider */}
            <div className="flex items-center gap-3 py-1">
              <span className="h-[1.5px] w-16 sm:w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent inline-block" />
              <Shield className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]/30" />
              <span className="h-[1.5px] w-16 sm:w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent inline-block" />
            </div>

            {/* Paragraph Description */}
            <p className="text-slate-700 text-sm sm:text-base lg:text-lg font-medium leading-relaxed font-sans max-w-2xl">
              Fortune 5 Risk Management Solutions LLP is a trusted risk management solutions partner with a 75+ year legacy of helping businesses and individuals manage risk, optimise coverage and receive unwavering support when it matters the most.
            </p>

            {/* Read More Button */}
            <div className="pt-3">
              <Link
                href="/about"
                prefetch={false}
                className="group inline-flex items-center gap-3 bg-[#01327a] hover:bg-[#01255e] text-white font-bold text-xs sm:text-sm tracking-widest px-8 py-4 rounded-lg shadow-lg border border-slate-900 uppercase transition-all duration-200 cursor-pointer"
              >
                <span>READ MORE ABOUT US</span>
                <ArrowRight className="w-4 h-4 text-[#F5D77F] group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
