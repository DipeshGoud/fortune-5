"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Users,
  Calendar,
  Award,
  Sparkles,
} from "lucide-react";

export interface GalleryItem {
  id: string;
  title: string;
  category: "team" | "events" | "awards";
  categoryLabel: string;
  image: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "1",
    title: "Fortune 5 Advisory Team",
    category: "team",
    categoryLabel: "Team Photo",
    image: "/gallery-team1.png",
  },
  {
    id: "2",
    title: "Kaushal Shah - Principal Consultant",
    category: "team",
    categoryLabel: "Team Photo",
    image: "/kaushal-shah.png",
  },
  {
    id: "3",
    title: "Founding Legacy & Culture",
    category: "team",
    categoryLabel: "Team Photo",
    image: "/founder.png",
  },
  {
    id: "4",
    title: "National Risk Advisory Summit",
    category: "events",
    categoryLabel: "Events",
    image: "/gallery-summit.png",
  },
  {
    id: "5",
    title: "75th Anniversary Gala Celebration",
    category: "events",
    categoryLabel: "Events",
    image: "/gallery-event-gala.png",
  },
  {
    id: "6",
    title: "Corporate Client Forum",
    category: "events",
    categoryLabel: "Events",
    image: "/gallery-advisory.png",
  },
  {
    id: "7",
    title: "Commercial Risk Infrastructure Tour",
    category: "events",
    categoryLabel: "Events",
    image: "/hero-bg.png",
  },
  {
    id: "8",
    title: "Risk Management Excellence Leadership Trophy",
    category: "awards",
    categoryLabel: "Awards",
    image: "/trophy.png",
  },
  {
    id: "9",
    title: "Golden Jubilee Excellence Honor",
    category: "awards",
    categoryLabel: "Awards",
    image: "/gallery-award.png",
  },
  {
    id: "10",
    title: "75 Years Golden Milestone Emblem",
    category: "awards",
    categoryLabel: "Awards",
    image: "/75year-logo.png",
  },
];

const categories = [
  { id: "all", label: "All Photos", icon: Sparkles },
  { id: "team", label: "Team Photos", icon: Users },
  { id: "events", label: "Events", icon: Calendar },
  { id: "awards", label: "Awards", icon: Award },
];

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter items based on active category
  const filteredItems = useMemo(() => {
    return galleryItems.filter(
      (item) => activeCategory === "all" || item.category === activeCategory
    );
  }, [activeCategory]);

  const activeItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1
    );
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0
    );
  };

  return (
    <div className="w-full">
      {/* Category Tabs Header */}
      <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-full text-xs font-extrabold tracking-widest uppercase transition-all duration-300 ${
                isActive
                  ? "bg-[#071a38] text-[#f5d77f] shadow-lg border border-[#c59b27]/40 ring-2 ring-[#c59b27]/20 scale-105"
                  : "bg-white hover:bg-slate-100 text-slate-700 border border-slate-200/80 shadow-sm hover:scale-102"
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? "text-[#f5d77f]" : "text-[#c59b27]"}`} />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Pure Visual Photo Grid - No Info Text Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            onClick={() => setLightboxIndex(index)}
            className="group relative aspect-[4/3] sm:aspect-square w-full overflow-hidden rounded-2xl bg-slate-900 shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer border border-slate-200/80"
          >
            {/* Image */}
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Subtle Gradient Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#071a38]/90 via-[#071a38]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 z-10" />

            {/* Category Tag on Hover (Top Left) */}
            <div className="absolute top-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0">
              <span className="px-3 py-1 rounded-full bg-[#071a38]/90 backdrop-blur-md text-[10px] font-extrabold tracking-widest text-[#f5d77f] uppercase border border-[#c59b27]/40 shadow-sm">
                {item.categoryLabel}
              </span>
            </div>

            {/* Zoom Icon on Hover (Top Right) */}
            <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
              <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-[#f5d77f] flex items-center justify-center border border-white/30 shadow-lg">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>

            {/* Photo Title Overlay (Bottom) */}
            <div className="absolute bottom-4 left-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <h3 className="font-cormorant text-lg font-bold text-white line-clamp-1 leading-snug drop-shadow-md">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
      {lightboxIndex !== null && activeItem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-8"
          onClick={() => setLightboxIndex(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.94 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-w-5xl w-full h-[85vh] bg-[#012257] rounded-2xl overflow-hidden border border-[#c59b27]/40 shadow-2xl flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:p-5 bg-[#071a38] border-b border-slate-800 z-20">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-[#c59b27]/20 border border-[#c59b27]/50 text-[#f5d77f] text-[10px] font-extrabold tracking-widest uppercase">
                  {activeItem.categoryLabel}
                </span>
                <h3 className="font-cormorant text-lg sm:text-xl font-bold text-white truncate max-w-xs sm:max-w-md">
                  {activeItem.title}
                </h3>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setLightboxIndex(null)}
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-[#c59b27] text-white hover:text-[#071a38] flex items-center justify-center transition-all shadow-md"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Image View Area */}
            <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden">
              <Image
                src={activeItem.image}
                alt={activeItem.title}
                fill
                priority
                className="object-contain"
              />

              {/* Navigation Controls */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-[#c59b27] text-white hover:text-[#071a38] flex items-center justify-center transition-all border border-white/20 shadow-2xl"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-7 h-7" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-[#c59b27] text-white hover:text-[#071a38] flex items-center justify-center transition-all border border-white/20 shadow-2xl"
                aria-label="Next photo"
              >
                <ChevronRight className="w-7 h-7" />
              </button>
            </div>

            {/* Modal Footer Bar */}
            <div className="flex items-center justify-between p-4 bg-[#071a38] border-t border-slate-800 text-xs text-slate-300 z-20">
              <span className="font-semibold text-[#f5d77f]">
                {activeItem.title}
              </span>
              <span className="text-slate-400 font-bold uppercase tracking-wider">
                Photo {lightboxIndex + 1} of {filteredItems.length}
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>
    </div>
  );
}
