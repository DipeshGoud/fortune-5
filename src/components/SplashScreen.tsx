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
      className={`fixed inset-0 z-[999999] bg-black flex items-center justify-center overflow-hidden transition-opacity duration-700 ease-in-out ${
        isFading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Video Container - Reduced size blending into pure black background */}
      <div className="relative w-full max-w-4xl xl:max-w-5xl 2xl:max-w-6xl px-4 flex items-center justify-center">
        <video
          ref={videoRef}
          src="/Home - Fortune Five - Risk Management Solutions.mp4"
          autoPlay
          muted
          playsInline
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleDismiss}
          className="w-full h-auto max-h-[80vh] object-contain rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.9)]"
        />
      </div>

      {/* Skip Button Pinned to Bottom Right Corner */}
      <button
        onClick={handleDismiss}
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-10 z-[1000000] flex items-center gap-2.5 bg-black/80 hover:bg-[#011331] text-[#F5D77F] font-bold text-xs sm:text-sm tracking-widest px-6 py-3.5 rounded-full border-2 border-[#C59B27] shadow-2xl backdrop-blur-md uppercase transition-all transform hover:scale-105"
      >
        <span>SKIP INTRO</span>
        <ArrowRight className="w-4 h-4 text-[#C59B27]" />
      </button>
    </div>
  );
}
