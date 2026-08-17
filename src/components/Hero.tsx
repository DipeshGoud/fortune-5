"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Award, Users } from "lucide-react";
import { motion } from "framer-motion";

import heroBg from "../../public/hero-bg.png";
import heroClipart from "../../public/hero-bg-CLIPART.png";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-[#F9F8F6] flex flex-col justify-between pt-[160px] sm:pt-[190px] lg:pt-[220px] pb-20 sm:pb-32 lg:pb-36">
      {/* Background Image & Clipart Overlay */}
      <div className="absolute inset-x-0 top-6 bottom-0 w-full z-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full h-full"
        >
          {/* Main Background Image */}
          <Image
            src={heroBg}
            alt="Fortune 5 Hero Background"
            fill
            priority
            quality={100}
            className="object-cover object-right-bottom sm:object-right-top pointer-events-none opacity-40 lg:opacity-100"
          />

          {/* Overlapping Bottom Clipart Wave */}
          <Image
            src={heroClipart}
            alt="Hero Background Ribbon"
            fill
            priority
            quality={100}
            className="object-cover object-bottom pointer-events-none z-[1]"
          />
        </motion.div>
      </div>

      {/* Container holding Hero content */}
      <div className="w-full max-w-[1720px] 2xl:max-w-[94vw] 3xl:max-w-[92vw] 4xl:max-w-[2800px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-16 3xl:px-20 relative z-10 my-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.22,
                delayChildren: 0.2,
              },
            },
          }}
          className="flex flex-col items-start space-y-3.5 md:space-y-4 max-w-4xl lg:max-w-5xl 2xl:max-w-6xl 3xl:max-w-7xl 4xl:max-w-[1500px]"
        >
          {/* Tagline Line */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-2 sm:gap-3 text-[#B8860B] text-[11px] sm:text-sm lg:text-base 2xl:text-lg font-extrabold tracking-widest uppercase"
          >
            <span>PEOPLE YOU TRUST, ADVICE THAT WORKS •</span>
            <span className="h-[2px] w-10 sm:w-20 lg:w-28 2xl:w-36 bg-gradient-to-r from-[#C59B27] to-transparent inline-block"></span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 35 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1.25, ease: [0.22, 1, 0.36, 1] }}
            className="font-cormorant text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[50px] 2xl:text-[56px] 3xl:text-[64px] 4xl:text-[72px] font-extrabold text-[#01327a] leading-[1.12] sm:leading-[1.14] tracking-normal uppercase max-w-2xl lg:max-w-3xl 2xl:max-w-4xl 3xl:max-w-5xl"
          >
            PROTECTING BUSINESSES, <br />
            FAMILIES <span className="text-[#D4AF37]">& FUTURES</span> <br />
            THROUGH INTELLIGENT <br />
            RISK MANAGEMENT.
          </motion.h1>

          {/* Action Buttons Row */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 25 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-6 pt-2 w-full sm:w-auto"
          >
            {/* Primary Button */}
            <a
              href="/contact"
              className="group flex items-center justify-center gap-3 bg-[#01327a] hover:bg-[#01255e] text-white font-bold text-xs sm:text-base tracking-wider px-6 sm:px-8 py-3.5 sm:py-4.5 rounded-lg shadow-md hover:shadow-xl transition-all duration-200 uppercase border border-slate-900"
            >
              <span>GET A FREE CONSULTATION</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#F5D77F] group-hover:translate-x-1.5 transition-transform" />
            </a>

            {/* Secondary Button */}
            <a
              href="/services"
              className="group flex items-center justify-center gap-3 bg-white/90 hover:bg-amber-50/70 text-[#966C0F] hover:text-[#7A5606] font-bold text-xs sm:text-base tracking-wider px-6 sm:px-8 py-3.5 sm:py-4.5 rounded-lg border-2 border-[#D4AF37] hover:border-[#F5D77F] shadow-2xs transition-all duration-200 uppercase"
            >
              <span>EXPLORE OUR SOLUTIONS</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#966C0F] group-hover:translate-x-1.5 transition-transform" />
            </a>
          </motion.div>

          {/* Trusted By / Inline Metrics Row */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 25 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="pt-2 sm:pt-4 w-full"
          >
            <span className="text-xs sm:text-sm font-semibold text-slate-400 block mb-2 tracking-wide">
              Trusted by
            </span>

            <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-6 sm:gap-14 lg:gap-16">
              {/* Metric 1 */}
              <div className="flex items-center gap-2.5 sm:gap-4">
                <ShieldCheck className="w-8 h-8 sm:w-12 sm:h-12 text-[#D4AF37] stroke-[1.8] flex-shrink-0" />
                <div>
                  <div className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-[#01327a] font-sans leading-tight">
                    500+
                  </div>
                  <div className="text-xs sm:text-base font-bold text-[#01327a]/90 font-sans">
                    Businesses
                  </div>
                </div>
              </div>

              {/* Metric 2 */}
              <div className="flex items-center gap-2.5 sm:gap-4">
                <Award className="w-8 h-8 sm:w-12 sm:h-12 text-[#D4AF37] stroke-[1.8] flex-shrink-0" />
                <div>
                  <div className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-[#01327a] font-sans leading-tight">
                    75+
                  </div>
                  <div className="text-xs sm:text-base font-bold text-[#01327a]/90 font-sans">
                    Years Legacy
                  </div>
                </div>
              </div>

              {/* Metric 3 */}
              <div className="flex items-center gap-2.5 sm:gap-4 col-span-2 sm:col-span-1">
                <Users className="w-8 h-8 sm:w-12 sm:h-12 text-[#D4AF37] stroke-[1.8] flex-shrink-0" />
                <div>
                  <div className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-[#01327a] font-sans leading-tight">
                    10,000+
                  </div>
                  <div className="text-xs sm:text-base font-bold text-[#01327a]/90 font-sans">
                    Lives Protected
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
