"use client";

import React, { useState, useMemo, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trophy,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Sparkles,
} from "lucide-react";
import { TrophyImage, trophyImages } from "@/data/trophies";

const PAGE_SIZE = 24;

export default function TrophyGallery() {
  const [visibleCount, setVisibleCount] = useState<number>(PAGE_SIZE);
  const [selectedImage, setSelectedImage] = useState<TrophyImage | null>(null);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  const visibleImages = useMemo(() => {
    return trophyImages.slice(0, visibleCount);
  }, [visibleCount]);

  const hasMore = visibleCount < trophyImages.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + PAGE_SIZE, trophyImages.length));
  };

  const handleLoadAll = () => {
    setVisibleCount(trophyImages.length);
  };

  // Keyboard navigation for Lightbox
  const handlePrev = useCallback(() => {
    if (!selectedImage) return;
    const currentIndex = trophyImages.findIndex((t) => t.id === selectedImage.id);
    const prevIndex =
      currentIndex > 0 ? currentIndex - 1 : trophyImages.length - 1;
    setSelectedImage(trophyImages[prevIndex]);
  }, [selectedImage]);

  const handleNext = useCallback(() => {
    if (!selectedImage) return;
    const currentIndex = trophyImages.findIndex((t) => t.id === selectedImage.id);
    const nextIndex =
      currentIndex < trophyImages.length - 1 ? currentIndex + 1 : 0;
    setSelectedImage(trophyImages[nextIndex]);
  }, [selectedImage]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      if (e.key === "Escape") setSelectedImage(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, handlePrev, handleNext]);

  const handleImageLoaded = (id: string) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className="w-full">
      {/* ── TOP INFO BAR ── */}
      <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-200/80">
        <div className="flex items-center gap-2">
          <Trophy className="w-5 h-5 text-[#C59B27]" />
          <span className="text-sm font-extrabold text-[#01327a] uppercase tracking-wider">
            All Trophies ({trophyImages.length})
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Sparkles className="w-3.5 h-3.5 text-[#C59B27]" />
          <span>Click any image to view full size</span>
        </div>
      </div>

      {/* ── TROPHIES IMAGE GRID ── */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6">
        {visibleImages.map((item, idx) => {
          const isLoaded = loadedImages[item.id];
          return (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#C59B27] transition-all duration-300 flex flex-col overflow-hidden cursor-pointer transform hover:-translate-y-1.5"
            >
              {/* Aspect Ratio Image Container */}
              <div className="relative aspect-[3/4] w-full p-3 sm:p-4 flex items-center justify-center bg-radial from-slate-50 to-[#F9F8F6]/70 overflow-hidden">
                {/* Shimmer skeleton */}
                {!isLoaded && (
                  <div className="absolute inset-3 rounded-xl bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100 animate-pulse flex items-center justify-center">
                    <Trophy className="w-8 h-8 text-slate-300" />
                  </div>
                )}

                {/* Trophy Image */}
                <Image
                  src={item.src}
                  alt={`Trophy ${item.id}`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 16vw"
                  loading={idx < 12 ? "eager" : "lazy"}
                  priority={idx < 6}
                  quality={85}
                  onLoad={() => handleImageLoaded(item.id)}
                  className={`object-contain p-2 drop-shadow-md transition-all duration-500 group-hover:scale-105 group-hover:drop-shadow-xl ${
                    isLoaded ? "opacity-100" : "opacity-0"
                  }`}
                />

                {/* Hover Overlay with Inspect Icon */}
                <div className="absolute inset-0 bg-[#01327a]/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5D77F] text-[#01327a] shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Maximize2 className="w-5 h-5" />
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── PROGRESS & LOAD MORE ── */}
      {hasMore && (
        <div className="mt-12 flex flex-col items-center gap-4">
          <div className="w-full max-w-xs bg-slate-200 rounded-full h-1.5 overflow-hidden">
            <div
              className="bg-gradient-to-r from-[#01327a] via-[#C59B27] to-[#F5D77F] h-full transition-all duration-300 rounded-full"
              style={{
                width: `${(visibleCount / trophyImages.length) * 100}%`,
              }}
            />
          </div>

          <p className="text-xs text-slate-500 font-medium">
            Showing {visibleCount} of {trophyImages.length} trophies
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={handleLoadMore}
              className="px-7 py-3 rounded-full bg-gradient-to-r from-[#01327a] via-[#084299] to-[#01327a] text-white text-xs font-extrabold tracking-wider uppercase shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer border border-[#C59B27]/40 flex items-center gap-2"
            >
              <Trophy className="w-4 h-4 text-[#F5D77F]" />
              <span>Load More (+{Math.min(PAGE_SIZE, trophyImages.length - visibleCount)})</span>
            </button>

            <button
              onClick={handleLoadAll}
              className="px-6 py-3 rounded-full bg-white hover:bg-amber-50 text-[#01327a] text-xs font-bold tracking-wider uppercase border border-slate-300 hover:border-[#C59B27] shadow-xs transition-all cursor-pointer"
            >
              Show All ({trophyImages.length})
            </button>
          </div>
        </div>
      )}

      {/* ── FULLSCREEN LIGHTBOX MODAL ── */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#000814]/95 backdrop-blur-md p-4 sm:p-6"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl bg-gradient-to-b from-[#011a42] to-[#000d24] rounded-3xl border border-[#C59B27]/40 shadow-2xl overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Bar */}
              <div className="p-4 border-b border-white/10 flex items-center justify-between bg-black/40">
                <div className="flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-[#F5D77F]" />
                  <span className="text-xs font-bold text-slate-200">
                    Trophy {trophyImages.findIndex((t) => t.id === selectedImage.id) + 1} of {trophyImages.length}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  aria-label="Close Lightbox"
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Large Image Container with Prev/Next */}
              <div className="relative p-6 sm:p-12 flex items-center justify-center min-h-[400px] sm:min-h-[550px] bg-radial from-white/[0.05] via-transparent to-black/50">
                {/* Left Arrow */}
                <button
                  onClick={handlePrev}
                  aria-label="Previous"
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-[#C59B27] hover:text-[#01327a] text-white backdrop-blur border border-white/15 transition-all z-20 cursor-pointer"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Main High-Res Image */}
                <div className="relative w-full h-80 sm:h-[480px]">
                  <Image
                    src={selectedImage.src}
                    alt={`Trophy ${selectedImage.id}`}
                    fill
                    sizes="(max-width: 1024px) 90vw, 800px"
                    priority
                    quality={95}
                    className="object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)]"
                  />
                </div>

                {/* Right Arrow */}
                <button
                  onClick={handleNext}
                  aria-label="Next"
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-[#C59B27] hover:text-[#01327a] text-white backdrop-blur border border-white/15 transition-all z-20 cursor-pointer"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Bottom bar */}
              <div className="p-3 bg-black/40 border-t border-white/10 text-center text-xs text-slate-400">
                <span>Use ◄ ► arrow keys or click arrows to browse</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
