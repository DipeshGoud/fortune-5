"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, ArrowRight, ShieldCheck, Copy, Check, Building2, Clock } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Footer() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("insure@fortune5.in");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <footer className="w-full bg-gradient-to-b from-[#02132e] via-[#010d21] to-[#000814] text-white relative font-sans overflow-hidden border-t border-[#C59B27]/40 pt-12 sm:pt-16">
      
      {/* FLOATING ELEGANT CTA CARD */}
      <ScrollReveal variant="fadeUp" duration={0.6}>
        <div className="mx-auto w-full max-w-[1720px] 2xl:max-w-[94vw] 3xl:max-w-[92vw] 4xl:max-w-[2800px] px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-16 3xl:px-20">
          <div className="relative overflow-hidden rounded-3xl border border-[#C59B27]/50 bg-gradient-to-r from-[#01327a] via-[#05439e] to-[#01255e] p-8 sm:p-10 lg:p-12 shadow-[0_20px_60px_-15px_rgba(1,50,122,0.6)]">
            {/* Geometric Blueprint Grid Pattern */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.08]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(245,215,127,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(245,215,127,0.6) 1px, transparent 1px)",
                backgroundSize: "36px 36px",
              }}
            />

            {/* Decorative Gold Concentric Circles Pattern */}
            <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full border border-[#C59B27]/25 pointer-events-none" />
            <div className="absolute -right-28 -top-28 w-96 h-96 rounded-full border border-[#C59B27]/15 pointer-events-none" />
            <div className="absolute -left-20 -bottom-20 w-72 h-72 rounded-full border border-[#C59B27]/20 pointer-events-none" />

            {/* Soft decorative background glows */}
            <div className="absolute -left-20 -top-20 w-64 h-64 bg-[#C59B27]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-[#F5D77F]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 text-center md:text-left">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#C59B27]/40 bg-[#001c47]/60 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#F5D77F] mb-3 shadow-xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C59B27]" />
                  <span>3 GENERATIONS OF TRUST</span>
                </span>
                <h3 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Protecting what matters most <span className="text-[#F5D77F]">to you.</span>
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm text-slate-200 font-medium leading-relaxed max-w-xl">
                  Talk to our senior advisory team for unbiased risk audits, insurer negotiation, and 24/7 claims advocacy.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3.5 shrink-0 w-full sm:w-auto">
                <Link
                  href="/contact"
                  prefetch={false}
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#C59B27] via-[#D4AF37] to-[#F5D77F] px-7 py-4 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#01327a] shadow-xl transition-all duration-300 hover:shadow-amber-500/30 hover:scale-[1.02]"
                >
                  <span>REQUEST CONSULTATION</span>
                  <ArrowRight className="h-4 w-4 text-[#01327a] transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href="tel:+919820810067"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl border border-white/25 bg-black/20 hover:bg-black/30 backdrop-blur-sm px-6 py-4 text-xs sm:text-sm font-bold tracking-wider text-white transition-all shadow-sm"
                >
                  <Phone className="h-4 w-4 text-[#C59B27]" />
                  <span>+91 98208 10067</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* 2. MAIN FOOTER COLUMNS */}
      <ScrollReveal variant="fadeUp" delay={0.15} duration={0.8}>
        <div className="w-full max-w-[1720px] 2xl:max-w-[94vw] 3xl:max-w-[92vw] 4xl:max-w-[2800px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-16 3xl:px-20 py-16 sm:py-20 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12">
            
            {/* Column 1: Logo & Company Bio */}
            <div className="lg:col-span-4 flex flex-col space-y-6">
              <div className="inline-block w-fit">
                <Link
                  href="/"
                  prefetch={false}
                  className="inline-flex items-center group cursor-pointer bg-white/95 hover:bg-white px-4 py-2.5 rounded-xl border border-white/30 shadow-lg transition-all duration-300 transform group-hover:scale-[1.02]"
                >
                  <Image
                    src="/logo.png"
                    alt="Fortune 5 Risk Management Solutions LLP"
                    width={450}
                    height={140}
                    priority
                    quality={100}
                    className="h-10 sm:h-12 w-auto object-contain"
                  />
                </Link>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed font-medium max-w-sm">
                People you trust, advice that works. A 3rd generation risk management solutions partner committed to protecting what matters most to you.
              </p>
              <p className="text-xs text-[#F5D77F] font-bold tracking-widest uppercase">
                Your Risk. Our Responsibility.
              </p>

              <div className="flex items-center gap-3 pt-1">
                <a
                  href="https://www.facebook.com/share/19LLUhbPQE/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-full border border-white/15 hover:border-[#C59B27] bg-white/5 hover:bg-[#C59B27] text-slate-300 hover:text-[#01327a] flex items-center justify-center transition-all duration-200 transform hover:scale-105"
                  title="Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
                  </svg>
                </a>

                <a
                  href="https://www.linkedin.com/in/kaushal-shah-59765b1b?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-full border border-white/15 hover:border-[#C59B27] bg-white/5 hover:bg-[#C59B27] text-slate-300 hover:text-[#01327a] flex items-center justify-center transition-all duration-200 transform hover:scale-105"
                  title="LinkedIn"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.75a1.47 1.47 0 1 0 0 2.94 1.47 1.47 0 0 0 0-2.94Z" />
                  </svg>
                </a>

                <a
                  href="https://www.instagram.com/kaushal_f5?igsh=MWpnaHFjZGd6b213ZA%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full border border-white/15 hover:border-[#C59B27] bg-white/5 hover:bg-[#C59B27] text-slate-300 hover:text-[#01327a] flex items-center justify-center transition-all duration-200 transform hover:scale-105"
                  title="Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 2: QUICK LINKS */}
            <div className="lg:col-span-2 flex flex-col space-y-4 border-t lg:border-t-0 lg:border-l border-slate-800 lg:pl-6 pt-6 lg:pt-0">
              <h4 className="font-extrabold text-[#F5D77F] text-xs uppercase tracking-widest">
                QUICK LINKS
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-300 font-medium">
                <li><Link href="/about" prefetch={false} className="hover:text-[#F5D77F] transition-colors">About Us</Link></li>
                <li><Link href="/services" prefetch={false} className="hover:text-[#F5D77F] transition-colors">Our Services</Link></li>
                <li><Link href="/gallery" prefetch={false} className="hover:text-[#F5D77F] transition-colors">Gallery &amp; Media</Link></li>
                <li><Link href="/trophy" prefetch={false} className="hover:text-[#F5D77F] transition-colors">Trophies &amp; Awards</Link></li>
                <li><Link href="/contact" prefetch={false} className="hover:text-[#F5D77F] transition-colors">Contact Us</Link></li>
                <li><Link href="/privacy" prefetch={false} className="hover:text-[#F5D77F] transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" prefetch={false} className="hover:text-[#F5D77F] transition-colors">Terms &amp; Conditions</Link></li>
              </ul>
            </div>

            {/* Column 3: SOLUTIONS */}
            <div className="lg:col-span-2 flex flex-col space-y-4 border-t lg:border-t-0 lg:border-l border-slate-800 lg:pl-6 pt-6 lg:pt-0">
              <h4 className="font-extrabold text-[#F5D77F] text-xs uppercase tracking-widest">
                SOLUTIONS
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-300 font-medium">
                <li><Link href="/services#corporate" prefetch={false} className="hover:text-[#F5D77F] transition-colors">Corporate Risk Solutions</Link></li>
                <li><Link href="/services#retail" prefetch={false} className="hover:text-[#F5D77F] transition-colors">Retail Risk Solutions</Link></li>
                <li><Link href="/services#benefits" prefetch={false} className="hover:text-[#F5D77F] transition-colors">Employee Benefits</Link></li>
                <li><Link href="/services#liability" prefetch={false} className="hover:text-[#F5D77F] transition-colors">Liability Solutions</Link></li>
                <li><Link href="/services#health" prefetch={false} className="hover:text-[#F5D77F] transition-colors">Health Solutions</Link></li>
                <li><Link href="/services#motor" prefetch={false} className="hover:text-[#F5D77F] transition-colors">Motor Protection</Link></li>
              </ul>
            </div>

            {/* Column 4: HEAD OFFICE */}
            <div className="lg:col-span-2 flex flex-col space-y-4 border-t lg:border-t-0 lg:border-l border-slate-800 lg:pl-6 pt-6 lg:pt-0">
              <h4 className="font-extrabold text-[#F5D77F] text-xs uppercase tracking-widest">
                HEAD OFFICE
              </h4>
              <div className="space-y-3.5 text-xs text-slate-300 font-medium">
                <div>
                  <div className="flex items-center gap-1.5 font-bold text-white mb-1">
                    <MapPin className="w-3.5 h-3.5 text-[#C59B27]" />
                    <span>Mumbai Office</span>
                  </div>
                  <p className="text-slate-300 pl-5 text-[11px] leading-relaxed">
                    106-107, E-Square, 1st Floor, Subhash Road, Vile Parle (E), Mumbai 400057, India.
                  </p>
                </div>

                <div className="pt-1 border-t border-slate-800/80">
                  <div className="flex items-center gap-1.5 font-bold text-white mb-1">
                    <Clock className="w-3.5 h-3.5 text-[#C59B27]" />
                    <span>Working Hours</span>
                  </div>
                  <p className="text-slate-300 pl-5 text-[11px] leading-relaxed">
                    Mon – Sat: 10:00 AM – 7:30 PM IST
                  </p>
                </div>
              </div>
            </div>

            {/* Column 5: CONTACT US */}
            <div className="lg:col-span-2 flex flex-col space-y-4 border-t lg:border-t-0 lg:border-l border-slate-800 lg:pl-6 pt-6 lg:pt-0">
              <h4 className="font-extrabold text-[#F5D77F] text-xs uppercase tracking-widest">
                CONTACT US
              </h4>
              <div className="space-y-3 text-xs text-slate-300 font-medium">
                
                {/* Email */}
                <div
                  onClick={handleCopyEmail}
                  className="flex items-start gap-2 cursor-pointer hover:text-[#F5D77F] transition-colors group"
                >
                  <Mail className="w-4 h-4 text-[#C59B27] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold">insure@fortune5.in</span>
                    <span className="text-[10px] text-amber-300 flex items-center gap-1 mt-0.5">
                      {copiedEmail ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      {copiedEmail ? "Copied!" : "Click to copy"}
                    </span>
                  </div>
                </div>

                {/* Phone Numbers: Cell, Support, Board */}
                <div className="flex items-start gap-2">
                  <Phone className="w-4 h-4 text-[#C59B27] flex-shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase font-semibold">Direct / Support:</span>{" "}
                      <a href="tel:+919820810067" className="font-bold text-white hover:text-[#F5D77F] transition-colors">+91-98208 10067</a>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase font-semibold">Board:</span>{" "}
                      <a href="tel:+912226192727" className="font-medium text-slate-300 hover:text-[#F5D77F] transition-colors">+91-22-2619 27 27</a>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-2 pt-1 border-t border-slate-800/80">
                  <MapPin className="w-4 h-4 text-[#C59B27] flex-shrink-0 mt-0.5" />
                  <p className="text-[11px] text-slate-300 leading-relaxed font-normal">
                    106-107, E-Square, 1st Floor, Subhash Road, Vile Parle (E), Mumbai 400057, India.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </ScrollReveal>

      {/* 3. BOTTOM COPYRIGHT & LEGAL BAR */}
      <div className="w-full bg-[#001c47] border-t border-slate-800/80 py-5 relative z-10 text-xs text-slate-400 font-medium">
        <div className="w-full max-w-[1720px] 2xl:max-w-[94vw] 3xl:max-w-[92vw] 4xl:max-w-[2800px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-16 3xl:px-20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Fortune 5 Risk Management Solutions LLP. All Rights Reserved.</p>
          
          <div className="flex items-center gap-4 text-slate-400">
            <Link href="/privacy" prefetch={false} className="hover:text-[#F5D77F] transition-colors">Privacy Policy</Link>
            <span>|</span>
            <Link href="/terms" prefetch={false} className="hover:text-[#F5D77F] transition-colors">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
