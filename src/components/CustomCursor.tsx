"use client";

import React, { useEffect, useRef } from "react";

export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable on touch devices
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) return;

    let isHovered = false;

    const onMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // Update inner dot instantly without lag or jump
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      // Update outer ring with browser-native smooth compositor ease
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      // Check hover state efficiently
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest(
          "a, button, input, select, textarea, [role='button'], .group"
        );
        if (interactive && !isHovered) {
          isHovered = true;
          ringRef.current?.classList.add("cursor-hover-scale");
        } else if (!interactive && isHovered) {
          isHovered = false;
          ringRef.current?.classList.remove("cursor-hover-scale");
        }
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden">
      {/* Outer Gold Ring - Compositor Smooth CSS Transition (0.08s ease-out) */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-7 h-7 -ml-3.5 -mt-3.5 rounded-full border-[1.5px] border-[#C59B27] bg-[#C59B27]/10 pointer-events-none will-change-transform transition-[transform,border-color,background-color,box-shadow] duration-100 ease-out origin-center"
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
      />

      {/* Inner Precision Gold Dot - Instant 0ms Tracker */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 rounded-full bg-[#C59B27] shadow-[0_0_8px_#C59B27] pointer-events-none will-change-transform transition-colors duration-100 origin-center"
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
      />

      <style jsx global>{`
        .cursor-hover-scale {
          border-width: 2px !important;
          border-color: #f5d77f !important;
          background-color: rgba(197, 155, 39, 0.2) !important;
          box-shadow: 0 0 15px rgba(197, 155, 39, 0.4) !important;
        }
      `}</style>
    </div>
  );
}
