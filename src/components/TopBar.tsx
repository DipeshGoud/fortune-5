"use client";

import React from "react";

export default function TopBar() {
  const marqueeItems = [
    "Fortune 5 Risk Management Solutions LLP",
    "Cell: +91-98207 10067",
    "Support: +91-98208 10067",
    "Board: +91-22-2619 27 27",
    "Email: insure@fortune5.in",
    "Hours: Monday to Saturday 10:00 AM - 7:30 PM",
    "Head Office: 106-107, E-Square, 1st Floor, Subhash Road, Vile Parle (E), Mumbai 400057, India",
    "YOUR RISK. OUR RESPONSIBILITY.",
    "PEOPLE YOU TRUST, ADVICE THAT WORKS",
    "75+ Years Legacy of Trust",
    "10,000+ Lives Protected",
    "500+ Business Portfolios",
    "₹100+ Cr Claims Assisted",
  ];

  return (
    <div className="fixed top-0 left-0 w-full h-10 bg-[#011331] text-white text-xs sm:text-sm border-b border-[#C59B27]/40 z-50 overflow-hidden font-sans shadow-xs flex items-center">
      <div className="flex w-max items-center whitespace-nowrap animate-marquee group">
        {/* Track 1 */}
        <div className="flex items-center shrink-0">
          {marqueeItems.map((item, index) => (
            <span key={`track1-${index}`} className="flex items-center mx-6 sm:mx-8 text-slate-100 font-semibold tracking-wide">
              <span className="text-[#C59B27] mr-3 text-sm">◆</span>
              {item}
            </span>
          ))}
        </div>
        {/* Track 2 (Exact Duplicate for 100% seamless zero-jerk infinite loop) */}
        <div className="flex items-center shrink-0">
          {marqueeItems.map((item, index) => (
            <span key={`track2-${index}`} className="flex items-center mx-6 sm:mx-8 text-slate-100 font-semibold tracking-wide">
              <span className="text-[#C59B27] mr-3 text-sm">◆</span>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Seamless Infinite Marquee CSS */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        .animate-marquee {
          animation: marquee 58s linear infinite;
          will-change: transform;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
