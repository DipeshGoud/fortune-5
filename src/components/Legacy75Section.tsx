"use client";

import React from "react";
import Image from "next/image";

export default function Legacy75Section() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-[#0D182E] text-white relative overflow-hidden font-sans">
      {/* Subtle Background Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-950/30 via-transparent to-transparent pointer-events-none" />

      <div className="w-full max-w-[1720px] 2xl:max-w-[94vw] 3xl:max-w-[92vw] 4xl:max-w-[2800px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-16 3xl:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 xl:gap-20 items-center">
          
          {/* Left Column: 75-Year Emblem Logo */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group">
              <Image
                src="/75year-logo.png"
                alt="75+ Years of Trust & Excellence"
                width={380}
                height={380}
                priority
                quality={100}
                className="w-56 sm:w-72 md:w-80 lg:w-[380px] xl:w-[420px] h-auto object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.6)] group-hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
          </div>

          {/* Right Column: Clean Content matching Screenshot */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-4 sm:space-y-5 max-w-2xl lg:max-w-3xl">
            
            {/* Gold Badge */}
            <div className="inline-block bg-[#B8860B] text-white font-extrabold text-[11px] sm:text-xs tracking-widest px-4 py-1.5 rounded-full uppercase shadow-xs">
              CELEBRATING EXCELLENCE
            </div>

            {/* Main Headline (Sans-serif font matching reference image exactly) */}
            <h2 className="font-sans text-4xl sm:text-5xl lg:text-6xl xl:text-[64px] font-extrabold text-white leading-[1.1] tracking-tight">
              75 Years of Trust <br />
              &amp; Protection
            </h2>

            {/* Paragraph Description matching screenshot */}
            <p className="text-slate-300 text-base sm:text-lg lg:text-[19px] leading-relaxed font-sans font-normal max-w-xl lg:max-w-2xl">
              For generations, Fortune Five has been a trusted name in insurance and risk management, delivering protection with integrity and care. Join thousands of satisfied clients who have experienced our commitment to excellence.
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}
