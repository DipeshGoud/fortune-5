"use client";

import React, { useState } from "react";
import { MapPin, Mail, Clock, Phone, Copy, Check, Building2 } from "lucide-react";

export default function TopBar() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const marqueeItems = [
    "YOUR RISK. OUR RESPONSIBILITY.",
    "Fortune 5 Risk Management Solutions LLP • 70+ Years Legacy of Trust",
    "Head Office: 106-107, E-Square, Subhash Road, Vile Parle (E), Mumbai 400057",
    "Branch Offices: Ghatkopar || Powai",
    "50,000+ Lives Protected • ₹100+ Cr Claims Assisted",
    "Cell: +91-98207 10067 • Direct: +91-22-2619 27 27 • Board: +91-22-2619 37 37 / 47",
  ];

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("info@fortune5.in");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="w-full bg-[#011331] text-white text-xs sm:text-sm border-b border-[#C59B27]/40 py-2.5 relative z-50 overflow-visible font-sans shadow-xs">
      <div className="w-full max-w-[1720px] 2xl:max-w-[94vw] 3xl:max-w-[92vw] 4xl:max-w-[2800px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-16 3xl:px-20 flex flex-wrap items-center justify-between gap-3">
        
        {/* Left Side: Real Contact Info & Address */}
        <div className="hidden lg:flex items-center gap-7 text-slate-100 font-semibold tracking-wide">
          
          {/* Address with Detailed Tooltip Popover */}
          <div className="relative group cursor-pointer">
            <div className="flex items-center gap-2.5 hover:text-[#F5D77F] transition-colors py-0.5">
              <MapPin className="w-4 h-4 text-[#C59B27] flex-shrink-0" />
              <span className="truncate max-w-[340px]">
                106-107, E-Square, Vile Parle (E), Mumbai 400057
              </span>
            </div>

            {/* Address Tooltip Popover */}
            <div className="absolute left-0 top-full mt-2 w-88 p-4 bg-[#011331] border-2 border-[#C59B27] rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 pointer-events-none">
              <div className="flex items-start gap-3">
                <MapPin className="w-4.5 h-4.5 text-[#C59B27] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-extrabold text-[#F5D77F] text-xs uppercase tracking-wider mb-1">
                    Head Office Address
                  </div>
                  <p className="text-xs text-slate-100 leading-relaxed font-medium">
                    Fortune 5 Risk Management Solutions LLP,<br />
                    106-107, E-Square, 1st Floor, Subhash Road,<br />
                    Vile Parle (East), Mumbai - 400057, India.
                  </p>
                  <div className="mt-2.5 pt-2 border-t border-slate-700/60 flex items-center gap-2 text-amber-300 font-bold text-[11px]">
                    <Building2 className="w-3.5 h-3.5 text-[#C59B27]" />
                    <span>Branches: Ghatkopar || Powai</span>
                  </div>
                </div>
              </div>
              {/* Tooltip Pointer Arrow */}
              <div className="absolute -top-1.5 left-6 w-3 h-3 bg-[#011331] border-t-2 border-l-2 border-[#C59B27] transform rotate-45" />
            </div>
          </div>

          {/* Email with Copy Tooltip Popover */}
          <div className="relative group cursor-pointer">
            <div
              onClick={handleCopyEmail}
              className="flex items-center gap-2.5 hover:text-[#F5D77F] transition-colors py-0.5"
            >
              <Mail className="w-4 h-4 text-[#C59B27] flex-shrink-0" />
              <span>info@fortune5.in</span>
            </div>

            {/* Email Tooltip Popover */}
            <div className="absolute left-0 top-full mt-2 w-64 p-3 bg-[#011331] border-2 border-[#C59B27] rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-semibold text-slate-100">
                  {copiedEmail ? "Copied to clipboard!" : "Click to copy email address"}
                </span>
                {copiedEmail ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4 text-[#C59B27]" />
                )}
              </div>
              {/* Tooltip Pointer Arrow */}
              <div className="absolute -top-1.5 left-6 w-3 h-3 bg-[#011331] border-t-2 border-l-2 border-[#C59B27] transform rotate-45" />
            </div>
          </div>

          {/* Operating Hours Tooltip Popover */}
          <div className="relative group cursor-pointer">
            <div className="flex items-center gap-2.5 hover:text-[#F5D77F] transition-colors py-0.5">
              <Clock className="w-4 h-4 text-[#C59B27] flex-shrink-0" />
              <span>Mon - Sat: 9:30 AM - 6:30 PM</span>
            </div>

            {/* Operating Hours Tooltip Popover */}
            <div className="absolute left-0 top-full mt-2 w-68 p-3.5 bg-[#011331] border-2 border-[#C59B27] rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 pointer-events-none">
              <div className="font-extrabold text-[#F5D77F] text-xs uppercase tracking-wider mb-2">
                Office Hours Schedule
              </div>
              <ul className="text-xs text-slate-100 space-y-1.5 font-medium">
                <li className="flex justify-between">
                  <span>Mon - Fri:</span>
                  <span className="font-bold text-white">9:30 AM - 6:30 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="font-bold text-white">10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between text-slate-300">
                  <span>Sunday:</span>
                  <span className="font-bold text-amber-400">Closed (Emergency Only)</span>
                </li>
              </ul>
              {/* Tooltip Pointer Arrow */}
              <div className="absolute -top-1.5 left-6 w-3 h-3 bg-[#011331] border-t-2 border-l-2 border-[#C59B27] transform rotate-45" />
            </div>
          </div>

        </div>

        {/* Center: Continuous Marquee Ticker */}
        <div className="flex-1 max-w-xl mx-auto overflow-hidden relative py-0.5">
          <div className="flex items-center whitespace-nowrap animate-marquee">
            {marqueeItems.concat(marqueeItems).map((item, index) => (
              <span key={index} className="flex items-center mx-5 text-slate-100 font-semibold tracking-wide">
                <span className="text-[#C59B27] mr-2.5 text-sm">◆</span>
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Right Side: Phone Numbers & Balanced Social Icons */}
        <div className="flex items-center gap-4 text-slate-100 font-semibold ml-auto">
          
          {/* Phone Helpline with Tooltip */}
          <div className="relative group cursor-pointer hidden md:flex items-center gap-2 pr-3 border-r border-slate-700/80">
            <Phone className="w-4 h-4 text-[#C59B27]" />
            <a href="tel:+919820710067" className="font-bold hover:text-[#F5D77F] tracking-wide">
              +91-98207 10067
            </a>

            {/* Helpline Tooltip Popover */}
            <div className="absolute right-0 top-full mt-2 w-72 p-3.5 bg-[#011331] border-2 border-[#C59B27] rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 pointer-events-none">
              <div className="font-extrabold text-[#F5D77F] text-xs uppercase tracking-wider mb-2">
                Official Contact Numbers
              </div>
              <ul className="text-xs text-slate-100 space-y-1.5 font-medium">
                <li className="flex justify-between">
                  <span>Cell:</span>
                  <span className="font-bold text-white">+91-98207 10067</span>
                </li>
                <li className="flex justify-between">
                  <span>Direct:</span>
                  <span className="font-bold text-white">+91-22-2619 27 27</span>
                </li>
                <li className="flex justify-between">
                  <span>Board:</span>
                  <span className="font-bold text-white">+91-22-2619 37 37 / 47</span>
                </li>
              </ul>
              {/* Tooltip Pointer Arrow */}
              <div className="absolute -top-1.5 right-6 w-3 h-3 bg-[#011331] border-t-2 border-l-2 border-[#C59B27] transform rotate-45" />
            </div>
          </div>

          {/* Balanced Social Icons (18px - 20px) */}
          <div className="flex items-center gap-3.5 sm:gap-4">
            
            {/* LinkedIn */}
            <div className="relative group">
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-slate-200 hover:text-[#F5D77F] transition-all transform hover:scale-110 block py-1"
              >
                <svg className="w-4.5 h-4.5 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.75a1.47 1.47 0 1 0 0 2.94 1.47 1.47 0 0 0 0-2.94Z" />
                </svg>
              </a>
              <div className="absolute right-0 top-full mt-2 px-2.5 py-1 bg-[#011331] border border-[#C59B27] text-[#F5D77F] text-xs font-bold rounded shadow-lg whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50 pointer-events-none">
                Follow on LinkedIn
              </div>
            </div>

            {/* Twitter / X */}
            <div className="relative group">
              <a
                href="#"
                aria-label="Twitter"
                className="text-slate-200 hover:text-[#F5D77F] transition-all transform hover:scale-110 block py-1"
              >
                <svg className="w-4.5 h-4.5 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <div className="absolute right-0 top-full mt-2 px-2.5 py-1 bg-[#011331] border border-[#C59B27] text-[#F5D77F] text-xs font-bold rounded shadow-lg whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50 pointer-events-none">
                Follow on Twitter / X
              </div>
            </div>

            {/* Facebook */}
            <div className="relative group">
              <a
                href="#"
                aria-label="Facebook"
                className="text-slate-200 hover:text-[#F5D77F] transition-all transform hover:scale-110 block py-1"
              >
                <svg className="w-4.5 h-4.5 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
                </svg>
              </a>
              <div className="absolute right-0 top-full mt-2 px-2.5 py-1 bg-[#011331] border border-[#C59B27] text-[#F5D77F] text-xs font-bold rounded shadow-lg whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50 pointer-events-none">
                Follow on Facebook
              </div>
            </div>

            {/* Instagram */}
            <div className="relative group">
              <a
                href="#"
                aria-label="Instagram"
                className="text-slate-200 hover:text-[#F5D77F] transition-all transform hover:scale-110 block py-1"
              >
                <svg className="w-4.5 h-4.5 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <div className="absolute right-0 top-full mt-2 px-2.5 py-1 bg-[#011331] border border-[#C59B27] text-[#F5D77F] text-xs font-bold rounded shadow-lg whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50 pointer-events-none">
                Follow on Instagram
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Marquee Animation Styles */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 28s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
