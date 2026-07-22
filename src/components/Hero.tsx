"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Award, Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-[#F9F8F6] flex flex-col justify-between pt-[80px] sm:pt-[95px] lg:pt-[110px] pb-28 sm:pb-32 lg:pb-36">
      {/* Background Image - Full Coverage pinned to top-right */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <Image
          src="/hero-bg.png"
          alt="Fortune 5 Hero Background"
          fill
          priority
          quality={100}
          className="object-cover object-right-top pointer-events-none"
        />
      </div>

      {/* Container holding Hero content */}
      <div className="w-full max-w-[1720px] 2xl:max-w-[94vw] 3xl:max-w-[92vw] 4xl:max-w-[2800px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-16 3xl:px-20 relative z-10 my-auto">
        <div className="flex flex-col items-start space-y-3.5 md:space-y-4 max-w-4xl lg:max-w-5xl 2xl:max-w-6xl 3xl:max-w-7xl 4xl:max-w-[1500px]">
          
          {/* Tagline Line (Adjusted size & bold weight) */}
          <div className="flex items-center gap-3 text-[#B8860B] text-xs sm:text-sm lg:text-base 2xl:text-lg font-extrabold tracking-widest uppercase">
            <span>PEOPLE YOU TRUST. ADVICE THAT WORKS. •</span>
            <span className="h-[2px] w-14 sm:w-20 lg:w-28 2xl:w-36 bg-gradient-to-r from-[#C59B27] to-transparent inline-block"></span>
          </div>

          {/* Main Headline */}
          <h1 className="font-cormorant text-2xl sm:text-3xl md:text-4xl lg:text-[44px] xl:text-[50px] 2xl:text-[56px] 3xl:text-[64px] 4xl:text-[72px] font-extrabold text-[#011331] leading-[1.14] tracking-normal uppercase max-w-2xl lg:max-w-3xl 2xl:max-w-4xl 3xl:max-w-5xl">
            PROTECTING BUSINESSES, <br />
            FAMILIES <span className="text-[#C59B27]">& FUTURES</span> <br />
            THROUGH INTELLIGENT <br />
            RISK MANAGEMENT.
          </h1>

          {/* Action Buttons Row */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
            {/* Primary Button */}
            <a
              href="#consultation"
              className="group flex items-center gap-3 bg-[#011331] hover:bg-[#071f47] text-white font-bold text-sm sm:text-base tracking-wider px-7 sm:px-8 py-4 sm:py-4.5 rounded-lg shadow-md hover:shadow-xl transition-all duration-200 uppercase border border-slate-900"
            >
              <span>GET A FREE CONSULTATION</span>
              <ArrowRight className="w-5 h-5 text-[#C59B27] group-hover:translate-x-1.5 transition-transform" />
            </a>

            {/* Secondary Button */}
            <a
              href="#solutions"
              className="group flex items-center gap-3 bg-white/90 hover:bg-amber-50/70 text-[#8A600B] font-bold text-sm sm:text-base tracking-wider px-7 sm:px-8 py-4 sm:py-4.5 rounded-lg border-2 border-[#D4AF37] hover:border-[#C59B27] shadow-2xs transition-all duration-200 uppercase"
            >
              <span>EXPLORE OUR SOLUTIONS</span>
              <ArrowRight className="w-5 h-5 text-[#8A600B] group-hover:translate-x-1.5 transition-transform" />
            </a>
          </div>

          {/* Trusted By / Inline Metrics Row (Tighter spacing so icons clear gold curve) */}
          <div className="pt-0 sm:pt-1 w-full">
            <span className="text-xs sm:text-sm font-semibold text-slate-400 block mb-1.5 tracking-wide">
              Trusted by
            </span>

            <div className="flex flex-wrap items-center gap-10 sm:gap-14 lg:gap-16">
              {/* Metric 1 */}
              <div className="flex items-center gap-3.5 sm:gap-4">
                <ShieldCheck className="w-10 h-10 sm:w-12 sm:h-12 text-[#C59B27] stroke-[1.8] flex-shrink-0" />
                <div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#011331] font-sans leading-tight">
                    500+
                  </div>
                  <div className="text-sm sm:text-base font-bold text-[#011331]/90 font-sans">
                    Businesses
                  </div>
                </div>
              </div>

              {/* Metric 2 */}
              <div className="flex items-center gap-3.5 sm:gap-4">
                <Award className="w-10 h-10 sm:w-12 sm:h-12 text-[#C59B27] stroke-[1.8] flex-shrink-0" />
                <div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#011331] font-sans leading-tight">
                    70+
                  </div>
                  <div className="text-sm sm:text-base font-bold text-[#011331]/90 font-sans">
                    Years Legacy
                  </div>
                </div>
              </div>

              {/* Metric 3 */}
              <div className="flex items-center gap-3.5 sm:gap-4">
                <Users className="w-10 h-10 sm:w-12 sm:h-12 text-[#C59B27] stroke-[1.8] flex-shrink-0" />
                <div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#011331] font-sans leading-tight">
                    50,000+
                  </div>
                  <div className="text-sm sm:text-base font-bold text-[#011331]/90 font-sans">
                    Lives Protected
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
