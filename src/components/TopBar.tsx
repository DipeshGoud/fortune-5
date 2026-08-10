"use client";

import React from "react";

export default function TopBar() {
  const marqueeItems = [
    "Fortune 5 Insurance Solutions",
    "Email: insure@fortune5.in",
    "Cell: +91-98208 10067",
    "Hours: Monday to Saturday 10:00 AM - 7:30 PM",
    "Office Address: 106-107, E-Square, Subhash Road, Vile Parle (E), Mumbai 400057",
    "YOUR RISK. OUR RESPONSIBILITY.",
    "75+ Years Legacy of Trust",
    "50,000+ Lives Insured • ₹100+ Cr Claims Assisted",
  ];

  return (
    <div className="fixed top-0 left-0 w-full h-10 bg-[#011331] text-white text-xs sm:text-sm border-b border-[#C59B27]/40 z-50 overflow-hidden font-sans shadow-xs flex items-center">
      <div className="w-full flex items-center whitespace-nowrap animate-marquee">
        {marqueeItems.concat(marqueeItems).concat(marqueeItems).map((item, index) => (
          <span key={index} className="flex items-center mx-6 sm:mx-8 text-slate-100 font-semibold tracking-wide">
            <span className="text-[#C59B27] mr-3 text-sm">◆</span>
            {item}
          </span>
        ))}
      </div>

      {/* Marquee Animation Styles - 55s for smooth, readable slower speed */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 55s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
