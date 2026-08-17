"use client";

import React from "react";
import { Shield, ChevronRight } from "lucide-react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "./ScrollReveal";

export default function HowWeWork() {
  const steps = [
    {
      step: "01",
      title: "Discovery",
      desc: "We understand your needs, goals and current coverage.",
      renderIcon: () => (
        <svg className="w-10 h-10 sm:w-11 sm:h-11 lg:w-10 lg:h-10 xl:w-11 xl:h-11 2xl:w-12 2xl:h-12 transition-transform duration-300 group-hover:scale-105" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="21" cy="20" r="13" stroke="#01327a" strokeWidth="3.2" fill="none" />
          <path d="M30.5 29.5L41 40" stroke="#01327a" strokeWidth="3.8" strokeLinecap="round" />
          <circle cx="21" cy="16" r="3.5" fill="#01327a" />
          <path d="M14.5 24.5C14.5 21.5 17 21 21 21C25 21 27.5 21.5 27.5 24.5" stroke="#01327a" strokeWidth="2.6" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      step: "02",
      title: "Risk Assessment",
      desc: "We identify potential risks and evaluate your protection gaps.",
      renderIcon: () => (
        <svg className="w-10 h-10 sm:w-11 sm:h-11 lg:w-10 lg:h-10 xl:w-11 xl:h-11 2xl:w-12 2xl:h-12 transition-transform duration-300 group-hover:scale-105" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="11" y="8" width="26" height="34" rx="3" stroke="#01327a" strokeWidth="3" fill="none" />
          <path d="M17 5.5C17 4.5 18 3.8 19.2 3.8H28.8C30 3.8 31 4.5 31 5.5V8.5H17V5.5Z" fill="#01327a" />
          <path d="M16 17H28" stroke="#01327a" strokeWidth="2.4" strokeLinecap="round" />
          <path d="M16 23H26" stroke="#01327a" strokeWidth="2.4" strokeLinecap="round" />
          <path d="M16 29H22" stroke="#01327a" strokeWidth="2.4" strokeLinecap="round" />
          <g transform="translate(23, 21)">
            <path d="M11 2L19 5.5V12C19 16.5 15 19.5 11 21C7 19.5 3 16.5 3 12V5.5L11 2Z" fill="#C59B27" stroke="#966C0F" strokeWidth="0.8" />
            <path d="M7 11.5L9.5 14L15 8.5" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      ),
    },
    {
      step: "03",
      title: "Compare Insurers",
      desc: "We compare top insurers to find the best fit for you.",
      renderIcon: () => (
        <svg className="w-10 h-10 sm:w-11 sm:h-11 lg:w-10 lg:h-10 xl:w-11 xl:h-11 2xl:w-12 2xl:h-12 transition-transform duration-300 group-hover:scale-105" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 19C7 10 14.5 4 24 4C33.5 4 41 10 41 19H7Z" fill="#01327a" />
          <path d="M24 4V2" stroke="#01327a" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="24" cy="26" r="3.2" fill="#01327a" />
          <path d="M17.5 37C17.5 32.5 20 32 24 32C28 32 30.5 32.5 30.5 37" stroke="#01327a" strokeWidth="2.4" strokeLinecap="round" />
          <circle cx="13.5" cy="28" r="2.6" fill="#01327a" />
          <path d="M9 37C9 33.5 11.5 33 13.5 33C15.8 33 17 33.5 17.5 35.5" stroke="#01327a" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="34.5" cy="28" r="2.6" fill="#01327a" />
          <path d="M39 37C39 33.5 36.5 33 34.5 33C32.2 33 31 33.5 30.5 35.5" stroke="#01327a" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="39" cy="37.5" r="4.8" fill="#C59B27" />
          <path d="M37 37.5L38.5 39L41.5 36" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      step: "04",
      title: "Policy Issuance",
      desc: "Hassle-free policy issuance with complete transparency.",
      renderIcon: () => (
        <svg className="w-10 h-10 sm:w-11 sm:h-11 lg:w-10 lg:h-10 xl:w-11 xl:h-11 2xl:w-12 2xl:h-12 transition-transform duration-300 group-hover:scale-105" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 5C10 4 11 3 12.5 3H26L38 15V43C38 44 37 45 35.5 45H12.5C11 45 10 44 10 43V5Z" fill="#01327a" />
          <path d="M26 3V15H38" fill="#01327a" />
          <path d="M16 18H23" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M16 24H29" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M16 30H23" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
          <g transform="translate(23, 21)">
            <path d="M11 2L19 5.5V12C19 16.5 15 19.5 11 21C7 19.5 3 16.5 3 12V5.5L11 2Z" fill="#C59B27" stroke="#966C0F" strokeWidth="0.8" />
            <path d="M7 11.5L9.5 14L15 8.5" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      ),
    },
    {
      step: "05",
      title: "Claims Support",
      desc: "We assist you at every step for faster, smoother claims.",
      renderIcon: () => (
        <svg className="w-10 h-10 sm:w-11 sm:h-11 lg:w-10 lg:h-10 xl:w-11 xl:h-11 2xl:w-12 2xl:h-12 transition-transform duration-300 group-hover:scale-105" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 23C8 14.2 15.2 7 24 7C32.8 7 40 14.2 40 23V32C40 34.5 38 36.5 35.5 36.5H33V22H40" stroke="#01327a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="6" y="21" width="6.5" height="14" rx="3" fill="#01327a" />
          <rect x="35.5" y="21" width="6.5" height="14" rx="3" fill="#01327a" />
          <path d="M9 32C9 39.5 15.5 42 22 42H25.5" stroke="#01327a" strokeWidth="2.6" strokeLinecap="round" />
          <circle cx="26.5" cy="42" r="2.6" fill="#01327a" />
          <circle cx="24" cy="23" r="7.5" fill="#C59B27" />
          <path d="M20.5 23L23 25.5L27.5 20.5" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      step: "06",
      title: "Renewals",
      desc: "Timely reminders and best renewal options to keep you covered.",
      renderIcon: () => (
        <svg className="w-10 h-10 sm:w-11 sm:h-11 lg:w-10 lg:h-10 xl:w-11 xl:h-11 2xl:w-12 2xl:h-12 transition-transform duration-300 group-hover:scale-105" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 5C33.5 5 41.5 12.5 41.5 22.5C41.5 26 40.5 29.2 38.5 32" stroke="#01327a" strokeWidth="3" strokeLinecap="round" fill="none" />
          <path d="M41.5 8L41.5 16L33.5 16" stroke="#01327a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M24 43C14.5 43 6.5 35.5 6.5 25.5C6.5 22 7.5 18.8 9.5 16" stroke="#01327a" strokeWidth="3" strokeLinecap="round" fill="none" />
          <path d="M6.5 40L6.5 32L14.5 32" stroke="#01327a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16.5 13C16.5 12 17.5 11 18.5 11H27L32.5 16.5V34C32.5 35 31.5 36 30.5 36H18.5C17.5 36 16.5 35 16.5 34V13Z" fill="#01327a" />
          <path d="M20 19H26.5" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
          <path d="M20 24H26.5" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
          <path d="M20 29H24.5" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
          <circle cx="31" cy="33.5" r="4.5" fill="#C59B27" />
          <path d="M29.2 33.5L30.5 34.8L32.8 32.5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      step: "07",
      title: "Future Enhancement",
      desc: "We help you plan ahead for your future and your loved ones.",
      renderIcon: () => (
        <svg className="w-10 h-10 sm:w-11 sm:h-11 lg:w-10 lg:h-10 xl:w-11 xl:h-11 2xl:w-12 2xl:h-12 transition-transform duration-300 group-hover:scale-105" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="7" y="31" width="5.5" height="12" rx="1.8" fill="#01327a" />
          <rect x="15.5" y="23" width="5.5" height="20" rx="1.8" fill="#01327a" />
          <rect x="24" y="15" width="5.5" height="28" rx="1.8" fill="#01327a" />
          <path d="M7 26L21 12L29 18L41 6" stroke="#C59B27" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M33 6H41V14" stroke="#C59B27" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="38" cy="25.5" r="3.4" fill="#C59B27" />
          <path d="M33 43V35.5C33 33 35 32.5 38 32.5C41 32.5 43 33 43 35.5V43" stroke="#C59B27" strokeWidth="2.4" strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full py-16 sm:py-20 lg:py-28 bg-[#F9F8F6] relative overflow-hidden">
      {/* Background Decorative Crest Watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] pointer-events-none opacity-[0.035]">
        <Shield className="w-full h-full text-[#01327a]" />
      </div>

      <div className="w-full max-w-[1720px] 2xl:max-w-[94vw] 3xl:max-w-[92vw] 4xl:max-w-[2800px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-16 3xl:px-20 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal variant="fadeUp" duration={0.8} className="flex flex-col items-center justify-center text-center mb-14 sm:mb-20">
          <h2 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#01327a] tracking-tight">
            How We <span className="text-[#C59B27]">Work</span>
          </h2>
          
          {/* Gold Accent Divider with Shield Emblem */}
          <div className="flex items-center gap-3 mt-3.5 mb-3">
            <span className="h-[1.5px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#C59B27] inline-block"></span>
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#E2B755] to-[#B8860B] p-[1.5px] flex items-center justify-center shadow-sm">
              <div className="w-full h-full bg-[#01327a] rounded-full flex items-center justify-center">
                <Shield className="w-3.5 h-3.5 text-[#C59B27] fill-[#C59B27]/40" />
              </div>
            </div>
            <span className="h-[1.5px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#C59B27] inline-block"></span>
          </div>

          <p className="text-xs sm:text-sm font-extrabold text-[#01327a] tracking-[0.2em] uppercase font-sans">
            A SIMPLE. TRANSPARENT. CLIENT-FIRST PROCESS.
          </p>
        </ScrollReveal>

        {/* Steps Horizontal Pipeline Stepper */}
        <div className="relative w-full">
          <StaggerContainer
            staggerChildren={0.1}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-y-12 gap-x-6 sm:gap-x-8 lg:gap-x-0 relative z-10"
          >
            {steps.map((item, index) => {
              return (
                <StaggerItem key={item.step} variant="fadeUp">
                  <div className="flex flex-col items-center text-center group relative">
                    
                    {/* Top Step Number with Dot/Line Accent */}
                    <div className="flex flex-col items-center mb-3">
                      <span className="font-cormorant font-bold text-xl sm:text-2xl text-[#C59B27] tracking-wider leading-none">
                        {item.step}
                      </span>
                      <div className="w-4 h-[1.5px] bg-[#C59B27] mt-1.5 mb-1" />
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C59B27]" />
                    </div>

                    {/* Circular Icon Container with Dead-Center Connecting Line & Chevron */}
                    <div className="relative flex items-center justify-center mb-4 w-full">
                      
                      {/* Left Half Connector Line (joins with previous step) */}
                      {index > 0 && (
                        <div className="hidden lg:block absolute left-0 right-1/2 h-[1.5px] bg-[#C59B27]/60 top-1/2 -translate-y-1/2 -z-10" />
                      )}
                      
                      {/* Right Half Connector Line (joins with next step) */}
                      {index < steps.length - 1 && (
                        <div className="hidden lg:block absolute left-1/2 right-0 h-[1.5px] bg-[#C59B27]/60 top-1/2 -translate-y-1/2 -z-10" />
                      )}

                      {/* Connecting Chevron Badge at exact midpoint between columns */}
                      {index < steps.length - 1 && (
                        <div className="hidden lg:flex absolute right-0 translate-x-1/2 top-1/2 -translate-y-1/2 z-20 w-5 h-5 rounded-full bg-gradient-to-br from-[#E2B755] to-[#B8860B] items-center justify-center text-white shadow-xs border border-white">
                          <ChevronRight className="w-3.5 h-3.5 stroke-[2.5]" />
                        </div>
                      )}

                      {/* Circle Badge Node */}
                      <div className="w-20 h-20 sm:w-22 sm:h-22 lg:w-20 lg:h-20 xl:w-24 xl:h-24 2xl:w-26 2xl:h-26 rounded-full bg-white border-2 border-[#C59B27] shadow-[0_6px_20px_rgba(197,155,39,0.18)] flex items-center justify-center relative p-2 transition-all duration-300 group-hover:shadow-[0_10px_28px_rgba(197,155,39,0.3)] group-hover:border-[#E2B755] group-hover:scale-105 ring-4 ring-[#C59B27]/10 z-10">
                        {item.renderIcon()}
                      </div>
                    </div>

                    {/* Step Title */}
                    <h3 className="font-cormorant sm:font-sans font-bold text-base sm:text-[17px] text-[#01327a] leading-tight tracking-tight min-h-[38px] flex items-center justify-center transition-colors duration-300 group-hover:text-[#C59B27] px-1">
                      {item.title}
                    </h3>

                    {/* Step Description */}
                    <p className="mt-2 text-xs sm:text-[13px] text-slate-600 font-sans leading-relaxed max-w-[190px] sm:max-w-[210px] lg:max-w-[165px] xl:max-w-[190px] 2xl:max-w-[210px] px-1">
                      {item.desc}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>

        {/* Bottom Decorative Gold Crest Divider */}
        <div className="mt-16 sm:mt-20 flex flex-col items-center justify-center">
          <div className="w-full max-w-xl h-[1px] bg-gradient-to-r from-transparent via-[#C59B27]/40 to-transparent relative flex items-center justify-center">
            <div className="absolute w-8 h-8 rounded-full bg-gradient-to-b from-[#E2B755] to-[#B8860B] p-[1px] shadow-sm">
              <div className="w-full h-full bg-[#01327a] rounded-full flex items-center justify-center">
                <Shield className="w-4 h-4 text-[#C59B27] fill-[#C59B27]/30" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
