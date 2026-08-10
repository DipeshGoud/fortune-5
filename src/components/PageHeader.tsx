"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface PageHeaderProps {
  title: React.ReactNode;
  subtitle?: string;
  breadcrumb: string;
  bgImage?: string;
}

export default function PageHeader({ title, subtitle, breadcrumb, bgImage }: PageHeaderProps) {
  return (
    <section className="relative w-full overflow-hidden bg-[#011331] text-white pt-[200px] sm:pt-[220px] lg:pt-[240px] pb-16 sm:pb-20 lg:pb-24">
      {/* Background Image if provided */}
      {bgImage && (
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src={bgImage}
            alt="Page Header Background"
            fill
            priority
            quality={90}
            className="object-cover object-center opacity-25 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#011331]/90 via-[#011331]/80 to-[#011331]" />
        </div>
      )}

      {/* Ambient gold glows */}
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#C59B27]/10 rounded-full blur-3xl pointer-events-none z-1" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#F5D77F]/5 rounded-full blur-3xl pointer-events-none z-1" />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none z-1"
        style={{
          backgroundImage:
            "linear-gradient(rgba(197,155,39,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(197,155,39,0.4) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="w-full max-w-[1600px] 2xl:max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10 text-center flex flex-col items-center">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide text-slate-300 mb-5">
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-[#F5D77F] transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#C59B27]" />
          <span className="text-[#F5D77F] uppercase tracking-widest">{breadcrumb}</span>
        </nav>

        {/* Title */}
        <h1 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold uppercase leading-[1.1] tracking-tight">
          {title}
        </h1>

        {/* Gold ornament divider */}
        <div className="flex items-center gap-3 mt-5">
          <span className="h-[2px] w-16 sm:w-24 bg-gradient-to-r from-transparent to-[#C59B27] inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#C59B27] border-2 border-[#011331] shadow-xs" />
          <span className="h-[2px] w-16 sm:w-24 bg-gradient-to-l from-transparent to-[#C59B27] inline-block" />
        </div>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-slate-300 text-sm sm:text-base lg:text-lg font-medium leading-relaxed max-w-2xl mt-6">
            {subtitle}
          </p>
        )}
      </div>

      {/* Bottom gold curve */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#C59B27] to-transparent z-10" />
    </section>
  );
}
