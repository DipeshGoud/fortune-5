"use client";

import React, { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Auto-play video
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }

    // Dismiss splash screen exactly after 5 seconds
    const splashTimer = setTimeout(() => {
      handleDismiss();
    }, 5000);

    return () => {
      clearTimeout(splashTimer);
    };
  }, []);

  const handleDismiss = () => {
    setIsFading(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 700);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.currentTime >= 5) {
      handleDismiss();
    }
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[999999] bg-[#D2D4D4] flex items-center justify-center overflow-hidden transition-opacity duration-700 ease-in-out ${
        isFading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Video Container - Full screen matching video background */}
      <div className="relative w-full h-full flex items-center justify-center bg-[#D2D4D4]">
        <video
          ref={videoRef}
          src="/Fortune 5.mp4"
          autoPlay
          muted
          playsInline
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleDismiss}
          className="w-full h-full object-contain md:object-cover"
        />
      </div>

      {/* Skip Button Pinned to Bottom Right Corner */}
      <button
        onClick={handleDismiss}
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-10 z-[1000000] flex items-center gap-2.5 bg-slate-900/90 hover:bg-[#01327a] text-white font-bold text-xs sm:text-sm tracking-widest px-5 py-3 sm:px-6 sm:py-3.5 rounded-full border border-slate-700/40 shadow-xl backdrop-blur-md uppercase transition-all transform hover:scale-105"
      >
        <span>SKIP INTRO</span>
        <ArrowRight className="w-4 h-4 text-[#C59B27]" />
      </button>
    </div>
  );
}
