"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, SlidersHorizontal, FileQuestion, ArrowRight } from "lucide-react";
import { articles, blogCategories } from "@/data/blog";
import BlogCard from "./BlogCard";

export default function BlogGrid({ initialQuery = "" }: { initialQuery?: string }) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>(initialQuery);

  const filtered = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return articles.filter((a) => {
      const matchesCategory = activeCategory === "all" || a.category === activeCategory;
      const matchesSearch =
        !q ||
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.categoryLabel.toLowerCase().includes(q) ||
        a.tags.some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const counts = useMemo(() => {
    const map: Record<string, number> = { all: articles.length };
    for (const c of blogCategories) if (c.id !== "all") map[c.id] = articles.filter((a) => a.category === c.id).length;
    return map;
  }, []);

  const featured = useMemo(() => filtered.find((a) => a.featured), [filtered]);
  const rest = useMemo(() => filtered.filter((a) => a.slug !== featured?.slug), [filtered, featured]);

  const showFeatured = activeCategory === "all" && !searchQuery && featured;

  return (
    <div className="w-full">
      {/* ── Toolbar ── */}
      <div className="rounded-[1.5rem] border border-slate-200/80 bg-white p-4 shadow-[0_8px_30px_rgba(1,19,49,0.06)] sm:p-5">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <div className="flex flex-wrap items-center gap-2">
              {blogCategories.map((cat) => {
                const Icon = cat.icon;
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`group inline-flex items-center gap-2 rounded-full border px-3.5 py-2.5 text-[11px] font-extrabold tracking-[0.08em] uppercase transition-all sm:px-4 sm:text-xs ${
                      isActive
                        ? "border-[#C59B27]/30 bg-[#01327a] text-[#F5D77F] shadow-md"
                        : "border-slate-200 bg-white text-slate-700 hover:border-[#C59B27]/30 hover:bg-amber-50/60 hover:text-[#01327a]"
                    }`}
                  >
                    <Icon className={`h-3.5 w-3.5 ${isActive ? "text-[#F5D77F]" : "text-[#C59B27]"}`} />
                    <span>{cat.label}</span>
                    <span
                      className={`ml-0.5 rounded-full px-1.5 py-0.5 text-[10px] font-black leading-none ${
                        isActive ? "bg-[#C59B27] text-[#01327a]" : "bg-slate-100 text-slate-600 group-hover:bg-white"
                      }`}
                    >
                      {counts[cat.id] ?? 0}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="w-full xl:w-auto xl:min-w-[320px]">
              <div className="relative">
                <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search articles & topics…"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-full border border-slate-200 bg-slate-50/70 py-3 pl-10 pr-10 text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:border-[#C59B27] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#C59B27]/15 transition"
                />
                {searchQuery ? (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-slate-200 bg-white p-1.5 text-slate-500 shadow hover:text-slate-800"
                    aria-label="Clear search"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                ) : null}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 border-t border-slate-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-600">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#01327a] px-3 py-1.5 text-[11px] font-extrabold tracking-widest text-[#F5D77F] uppercase">
                <SlidersHorizontal className="h-3.5 w-3.5" /> Showing {filtered.length}
                <span className="font-normal normal-case tracking-normal text-white/70">/ {articles.length}</span>
              </span>
              {activeCategory !== "all" && (
                <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-bold text-[#8A6A10]">
                  {blogCategories.find((c) => c.id === activeCategory)?.label}
                  <button
                    onClick={() => setActiveCategory("all")}
                    className="rounded-full border border-amber-200 bg-white p-0.5 hover:bg-amber-100"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </span>
              )}
              {searchQuery && (
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-700">
                  “{searchQuery}”
                  <button onClick={() => setSearchQuery("")} className="rounded-full border bg-white p-0.5 hover:bg-slate-100">
                    <X className="h-3 w-3" />
                  </button>
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              {(activeCategory !== "all" || searchQuery) && (
                <button
                  onClick={() => {
                    setActiveCategory("all");
                    setSearchQuery("");
                  }}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-extrabold tracking-widest text-slate-700 uppercase hover:border-[#C59B27]/30 hover:text-[#01327a]"
                >
                  Clear all
                </button>
              )}
              <span className="hidden text-xs font-medium text-slate-400 sm:inline">Insights from 75 years of advisory</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Editor's pick ── */}
      {showFeatured && featured && (
        <div className="mt-8 grid grid-cols-1 gap-3 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <BlogCard article={featured} index={0} />
          </div>
          <div className="flex flex-col gap-3 lg:col-span-4">
            <div className="flex-1 rounded-[1.4rem] border border-slate-200/80 bg-white p-5 shadow-[0_8px_28px_rgba(1,19,49,0.07)]">
              <p className="text-[10px] font-extrabold tracking-[0.18em] text-[#9A7A1A] uppercase">From the desk of</p>
              <h4 className="mt-2 font-cormorant text-xl font-bold text-[#01327a]">Kaushal Shah & the Fortune 5 advisory team</h4>
              <p className="mt-2 text-[13px] leading-6 text-slate-600">
                Practical, plain-language guidance drawn from three generations of risk advisory, claims advocacy and client outcomes.
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs font-bold text-[#01327a]">
                New articles monthly <span className="h-1.5 w-1.5 rounded-full bg-[#C59B27]" />
              </div>
            </div>
            <div className="flex-1 rounded-[1.4rem] bg-[#01327a] p-5 text-white shadow-[0_8px_28px_rgba(1,19,49,0.2)] relative overflow-hidden">
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#C59B27]/20 blur-2xl" />
              <p className="text-[10px] font-extrabold tracking-[0.18em] text-[#F5D77F] uppercase">Have a risk question?</p>
              <h4 className="mt-2 font-cormorant text-xl font-bold leading-snug">Turn an article into a personal conversation.</h4>
              <p className="mt-2 text-[13px] leading-6 text-slate-300">Book a free consultation — we apply the same thinking to your own portfolio.</p>
              <a
                href="/contact"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#F5D77F] px-4 py-2.5 text-[11px] font-extrabold tracking-widest text-[#01327a] uppercase transition hover:bg-white"
              >
                Book free review <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ── Grid ── */}
      {filtered.length === 0 ? (
        <div className="mt-8 rounded-[1.5rem] border border-dashed border-slate-300 bg-white p-10 text-center sm:p-14">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-200 bg-amber-50 text-[#C59B27]">
            <FileQuestion className="h-7 w-7" />
          </div>
          <h3 className="mt-4 font-cormorant text-2xl font-bold text-[#01327a]">No articles found</h3>
          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
            Try a different category or keyword — try &ldquo;claims&rdquo;, &ldquo;health&rdquo; or &ldquo;cyber&rdquo;.
          </p>
          <button
            onClick={() => {
              setActiveCategory("all");
              setSearchQuery("");
            }}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#01327a] px-6 py-3 text-xs font-extrabold tracking-widest text-[#F5D77F] uppercase hover:bg-[#01327a]"
          >
            Reset filters <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      ) : (
        <motion.div layout className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {rest.map((article, index) => (
              <motion.div
                key={article.slug}
                layout
                initial={{ opacity: 0, y: 18, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.98 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <BlogCard article={article} index={index + (showFeatured ? 1 : 0)} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}