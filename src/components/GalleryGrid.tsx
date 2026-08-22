"use client";

import React, { useState, useMemo, useEffect, useCallback, memo } from "react";
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
  category: "events" | "team" | "awards";
  categoryLabel: string;
  image: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "1",
    title: "Fortune 5 75th Platinum Jubilee Stage",
    category: "events",
    categoryLabel: "Events & Celebrations",
    image: "/gallery/gallery-75th-stage.webp",
  },
  {
    id: "2",
    title: "75th Anniversary Celebration Cake",
    category: "events",
    categoryLabel: "Events & Celebrations",
    image: "/gallery/gallery-75th-cake.webp",
  },
  {
    id: "3",
    title: "Founder – Jagdip K. Shah",
    category: "team",
    categoryLabel: "Leadership",
    image: "/team/jagdip-k-shah.webp",
  },
  {
    id: "4",
    title: "Chairman & Managing Director – Kaushal J. Shah",
    category: "team",
    categoryLabel: "Leadership",
    image: "/team/kaushal-j-shah.webp",
  },
  {
    id: "5",
    title: "Chief Executive Officer – Ekta K. Shah",
    category: "team",
    categoryLabel: "Leadership",
    image: "/team/ekta-k-shah.webp",
  },
  {
    id: "6",
    title: "Chief Marketing Officer – Hemal N. Mashruwala",
    category: "team",
    categoryLabel: "Leadership",
    image: "/team/hemal-n-mashruwala.webp",
  },
  {
    id: "7",
    title: "Claims Head – L. N. Shanbhag",
    category: "team",
    categoryLabel: "Leadership",
    image: "/team/l-n-shanbhag.webp",
  },
  {
    id: "8",
    title: "Bajaj Allianz – Largest Conglomerate Award",
    category: "awards",
    categoryLabel: "Awards & Honors",
    image: "/trophies/IMGL1964.webp",
  },
  {
    id: "9",
    title: "Bajaj Allianz MD Club Gold Trophy",
    category: "awards",
    categoryLabel: "Awards & Honors",
    image: "/trophies/IMGL2069.webp",
  },
  {
    id: "10",
    title: "Bajaj Allianz MD Club Dedicated Services Award",
    category: "awards",
    categoryLabel: "Awards & Honors",
    image: "/trophies/IMGL2011.webp",
  },
  {
    id: "11",
    title: "Bajaj Allianz Exceptional Achievement Award (Dubai)",
    category: "awards",
    categoryLabel: "Awards & Honors",
    image: "/trophies/IMGL2044.webp",
  },
  {
    id: "12",
    title: "Bajaj Allianz Outstanding Achievers Award",
    category: "awards",
    categoryLabel: "Awards & Honors",
    image: "/trophies/IMGL1954.webp",
  },
  {
    id: "13",
    title: "LIC MDRT Prestigious Honor – Ekta Kaushal Shah",
    category: "awards",
    categoryLabel: "Awards & Honors",
    image: "/trophies/IMGL2127.webp",
  },
  {
    id: "14",
    title: "Future Generali Certificate of Appreciation",
    category: "awards",
    categoryLabel: "Awards & Honors",
    image: "/trophies/IMGL2089.webp",
  },
  {
    id: "15",
    title: "LIC MDRT Award – Ekta Kaushal Shah",
    category: "awards",
    categoryLabel: "Awards & Honors",
    image: "/trophies/IMGL2118.webp",
  },
];

const categories = [
  { id: "all", label: "All Photos", icon: Sparkles },
  { id: "events", label: "75th Jubilee & Events", icon: Calendar },
  { id: "team", label: "Leadership & Team", icon: Users },
  { id: "awards", label: "Awards & Recognitions", icon: Award },
];

/**
 * Isolated Memoized Gallery Card
 * Handles internal load state without triggering parent re-renders
 */
const GalleryCard = memo(function GalleryCard({
  item,
  index,
  onSelect,
}: {
  item: GalleryItem;
  index: number;
  onSelect: () => void;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      onClick={onSelect}
      className="group relative aspect-[4/3] sm:aspect-square w-full overflow-hidden rounded-2xl bg-slate-900 shadow-md hover:shadow-2xl transition-shadow duration-300 cursor-pointer border border-slate-200/80 transform-gpu"
    >
      {/* Shimmer skeleton placeholder */}
      {!loaded && (
        <div className="absolute inset-0 bg-slate-800 animate-pulse flex items-center justify-center z-10">
          <div className="w-7 h-7 rounded-full border-2 border-[#f5d77f]/40 border-t-[#f5d77f] animate-spin" />
        </div>
      )}

      {/* Optimized Image */}
      <Image
        src={item.image}
        alt={item.title}
        fill
        loading={index < 4 ? "eager" : "lazy"}
        priority={index < 2}
        decoding="async"
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        onLoad={() => setLoaded(true)}
        className={`object-cover object-center transition-transform duration-500 ease-out will-change-transform group-hover:scale-105 transform-gpu ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* High-Performance Gradient Overlay on Hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#01327a]/90 via-[#01327a]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 z-20 pointer-events-none" />

      {/* Category Tag on Hover (Top Left) */}
      <div className="absolute top-4 left-4 z-30 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0 pointer-events-none">
        <span className="px-3 py-1 rounded-full bg-[#01327a]/95 text-[10px] font-extrabold tracking-widest text-[#f5d77f] uppercase border border-[#c59b27]/40 shadow-md">
          {item.categoryLabel}
        </span>
      </div>

      {/* Zoom Icon on Hover (Top Right) */}
      <div className="absolute top-4 right-4 z-30 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100 pointer-events-none">
        <div className="w-9 h-9 rounded-full bg-white/25 text-[#f5d77f] flex items-center justify-center border border-white/30 shadow-lg">
          <Maximize2 className="w-4 h-4" />
        </div>
      </div>

      {/* Photo Title Overlay (Bottom) */}
      <div className="absolute bottom-4 left-4 right-4 z-30 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 pointer-events-none">
        <h3 className="font-cormorant text-lg font-bold text-white line-clamp-1 leading-snug drop-shadow-md">
          {item.title}
        </h3>
      </div>
    </div>
  );
});

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

  const handlePrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1
    );
  }, [lightboxIndex, filteredItems.length]);

  const handleNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0
    );
  }, [lightboxIndex, filteredItems.length]);

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    if (lightboxIndex === null) return;

    // Prevent background scrolling while modal is open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxIndex, handlePrev, handleNext]);

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
              className={`flex items-center gap-2.5 px-6 py-3 rounded-full text-xs font-extrabold tracking-widest uppercase transition-colors duration-200 cursor-pointer ${
                isActive
                  ? "bg-[#01327a] text-[#f5d77f] shadow-lg border border-[#c59b27]/40 ring-2 ring-[#c59b27]/20"
                  : "bg-white hover:bg-slate-100 text-slate-700 border border-slate-200/80 shadow-sm"
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? "text-[#f5d77f]" : "text-[#c59b27]"}`} />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Visual Photo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
        {filteredItems.map((item, index) => (
          <GalleryCard
            key={item.id}
            item={item}
            index={index}
            onSelect={() => setLightboxIndex(index)}
          />
        ))}
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-6 backdrop-blur-sm"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Close Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex(null);
              }}
              className="absolute top-5 right-5 z-50 rounded-full bg-white/15 p-2.5 text-white hover:bg-white/30 transition-colors duration-200 cursor-pointer"
              aria-label="Close image viewer"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 rounded-full bg-white/15 p-3 text-white hover:bg-white/30 transition-colors duration-200 cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 rounded-full bg-white/15 p-3 text-white hover:bg-white/30 transition-colors duration-200 cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Active Image Box */}
            <motion.div
              key={activeItem.id}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.18 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[88vh] max-w-[90vw] overflow-hidden rounded-2xl bg-black/60 border border-white/10 shadow-2xl flex flex-col"
            >
              <div className="relative h-[65vh] w-[85vw] max-w-[900px]">
                <Image
                  src={activeItem.image}
                  alt={activeItem.title}
                  fill
                  className="object-contain"
                  sizes="90vw"
                  priority
                  decoding="async"
                />
              </div>

              {/* Caption Bottom Bar */}
              <div className="bg-[#01327a] px-6 py-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-extrabold tracking-widest text-[#f5d77f] uppercase">
                    {activeItem.categoryLabel}
                  </span>
                  <h4 className="font-cormorant text-xl font-bold text-white mt-0.5">
                    {activeItem.title}
                  </h4>
                </div>
                <span className="text-xs text-slate-300 font-medium">
                  {lightboxIndex! + 1} / {filteredItems.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
