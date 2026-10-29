"use client";

import React, { useRef, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Sparkles, Navigation, MapPin, ArrowRight } from "lucide-react";

export default function Contact3DCard() {
  const cardRef = useRef<HTMLDivElement>(null);

  // Normalized mouse coordinates from -0.5 to 0.5
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring configuration for fluid physics without jitter
  const springConfig = { damping: 22, stiffness: 220, mass: 0.6 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // 3D rotation angles (degrees)
  // When cursor is at top (negative Y), card tilts back to face cursor (positive rotateX)
  // When cursor is at right (positive X), card tilts right to face cursor (positive rotateY)
  const rotateX = useTransform(springY, [-0.5, 0.5], [13, -13]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-13, 13]);

  // Ambient shadow offset shifts dynamically opposite to tilt
  const shadowX = useTransform(springX, [-0.5, 0.5], [16, -16]);
  const shadowY = useTransform(springY, [-0.5, 0.5], [22, -10]);

  // Specular light reflection state
  const [glare, setGlare] = useState({ x: 50, y: 50, active: false });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    if (width === 0 || height === 0) return;

    const posX = e.clientX - rect.left;
    const posY = e.clientY - rect.top;

    const normX = posX / width - 0.5;
    const normY = posY / height - 0.5;

    mouseX.set(normX);
    mouseY.set(normY);

    setGlare({
      x: Math.round((posX / width) * 100),
      y: Math.round((posY / height) * 100),
      active: true,
    });
  }, [mouseX, mouseY]);

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
    setGlare((prev) => ({ ...prev, active: false }));
  }, [mouseX, mouseY]);

  return (
    <div
      className="relative mx-auto w-full max-w-[480px] lg:mx-0 lg:ml-auto"
      style={{ perspective: 1200 }}
    >
      {/* Background ambient golden aura */}
      <div className="pointer-events-none absolute -top-6 -right-6 h-44 w-44 rounded-full bg-[#f3d47c]/20 blur-3xl" />

      {/* Dynamic ambient 3D drop shadow */}
      <motion.div
        style={{
          x: shadowX,
          y: shadowY,
          transform: "translateZ(-20px)",
        }}
        className="pointer-events-none absolute -inset-2 -z-10 rounded-[34px] bg-gradient-to-br from-[#00102b]/80 via-[#011c47]/50 to-transparent blur-2xl transition-opacity duration-300"
      />

      {/* Main 3D Interactive Card */}
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="group relative select-none rounded-[28px] border border-white/15 bg-gradient-to-b from-white/[0.10] to-white/[0.03] p-3 backdrop-blur-md shadow-2xl transition-all duration-200"
      >
        {/* Specular Glare Reflection Sheen */}
        <div
          style={{
            transform: "translateZ(28px)",
            background: glare.active
              ? `radial-gradient(circle 380px at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, 0.45) 0%, rgba(243, 212, 124, 0.18) 32%, transparent 75%)`
              : "none",
            opacity: glare.active ? 1 : 0,
          }}
          className="pointer-events-none absolute inset-0 z-30 rounded-[28px] transition-opacity duration-300"
        />

        {/* Inner White Card */}
        <div
          style={{
            transform: "translateZ(20px)",
            transformStyle: "preserve-3d",
          }}
          className="rounded-[22px] bg-white p-5 shadow-2xl sm:p-6"
        >
          {/* Header row */}
          <div
            style={{ transform: "translateZ(30px)" }}
            className="flex items-start justify-between gap-4"
          >
            <div>
              <p className="inline-flex items-center gap-1.5 text-[10px] font-extrabold tracking-[0.16em] text-[#a47a13] uppercase">
                <Sparkles className="h-3.5 w-3.5" /> Visit us in Mumbai
              </p>
              <h3 className="mt-1 font-cormorant text-2xl font-bold tracking-[-0.02em] text-[#012b6b]">
                Fortune 5 Risk Management
              </h3>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                106-107, E-Square, 1st Floor, Subhash Road,
                <br /> Vile Parle (East), Mumbai 400057, India.
              </p>
            </div>
            <motion.div
              style={{ transform: "translateZ(42px)" }}
              whileHover={{ scale: 1.08, rotate: 12 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#f3d47c] bg-[#012257] text-[#f3d47c] shadow-md sm:flex"
            >
              <Navigation className="h-5 w-5" />
            </motion.div>
          </div>

          {/* Interactive Map Section */}
          <div
            style={{
              transform: "translateZ(25px)",
              transformStyle: "preserve-3d",
            }}
            className="relative mt-5 overflow-hidden rounded-2xl border border-[#e8e2d0] bg-[#f7f6f2]"
          >
            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-[0.7] [background-image:linear-gradient(rgba(11,34,70,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(11,34,70,0.06)_1px,transparent_1px)] [background-size:28px_28px]" />

            <div className="relative h-[168px] w-full" style={{ transformStyle: "preserve-3d" }}>
              {/* Map grid crosshairs */}
              <div className="absolute left-1/2 top-0 h-full w-px bg-[#c59b27]/30" />
              <div className="absolute left-0 top-1/2 h-px w-full bg-[#c59b27]/30" />

              {/* Frosted office building blocks */}
              <div
                style={{ transform: "translateZ(10px)" }}
                className="absolute left-[22%] top-[28%] h-16 w-20 rounded-lg border border-[#c59b27]/30 bg-white/70 backdrop-blur shadow-sm"
              />
              <div
                style={{ transform: "translateZ(10px)" }}
                className="absolute right-[18%] bottom-[18%] h-10 w-28 rounded-lg border border-[#012b6b]/10 bg-white/80 shadow-sm"
              />

              {/* 3D Floating Location Pin with Live Beacon Pulse */}
              <div
                style={{
                  transform: "translateZ(38px)",
                }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none"
              >
                <div className="relative">
                  {/* Expanding beacon radar rings */}
                  <span className="absolute -inset-2.5 rounded-full border border-[#f3d47c]/60 animate-ping opacity-75" />
                  <span className="absolute -inset-3.5 rounded-full bg-[#f3d47c]/35 blur-md animate-pulse" />

                  {/* Pin badge */}
                  <span className="relative flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-[#012257] text-[#f3d47c] shadow-[0_10px_22px_rgba(1,34,87,0.4)]">
                    <MapPin className="h-5 w-5" />
                  </span>
                </div>

                {/* Ground pin shadow on the map */}
                <div className="mx-auto mt-1.5 h-2 w-10 rounded-full bg-black/15 blur-[2px]" />
              </div>
            </div>

            {/* Open in Maps Button */}
            <motion.a
              href="https://www.google.com/maps/search/E-Square+Subhash+Road+Vile+Parle+East+Mumbai"
              target="_blank"
              rel="noreferrer"
              style={{ transform: "translateZ(35px)" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="group absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-[#012b6b] px-3.5 py-2 text-[11px] font-extrabold tracking-[0.08em] text-white shadow-lg transition hover:bg-black"
            >
              Open in Maps{" "}
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </motion.a>
          </div>

          {/* Stats Bar */}
          <div
            style={{ transform: "translateZ(28px)" }}
            className="mt-4 grid grid-cols-3 gap-3 text-center"
          >
            {[
              { v: "10am–7:30pm", k: "Working hours" },
              { v: "24h", k: "Claim hotline" },
              { v: "500+", k: "Businesses" },
            ].map((s) => (
              <motion.div
                key={s.k}
                whileHover={{ y: -2, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 350, damping: 20 }}
                className="rounded-xl border border-[#ede8d6] bg-[#fdfbf3] px-2 py-3 shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-colors hover:border-[#c59b27]/40 hover:shadow-md"
              >
                <p className="font-cormorant text-sm font-bold leading-none text-[#012b6b]">
                  {s.v}
                </p>
                <p className="mt-1 text-[10px] font-extrabold tracking-[0.12em] text-[#8d6a10] uppercase">
                  {s.k}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 3D Elevated Status Pill Badge */}
        <div
          style={{ transform: "translateZ(50px)" }}
          className="absolute -bottom-3 -left-3 hidden items-center gap-2.5 rounded-full border border-[#f3d47c]/50 bg-[#012257]/95 px-4 py-2 text-xs font-bold text-white shadow-[0_12px_28px_rgba(1,34,87,0.35)] backdrop-blur-md sm:inline-flex"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
          </span>
          <span>Typically replies in ~3 hours</span>
        </div>
      </motion.div>
    </div>
  );
}

