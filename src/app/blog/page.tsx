import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, PenLine, BookOpen, ShieldCheck, Sparkles } from "lucide-react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import BlogGrid from "@/components/BlogGrid";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { articles } from "@/data/blog";

export const metadata: Metadata = {
  title: "Insurance Insights & Articles | Fortune 5 Risk Management Solutions LLP",
  description:
    "Practical articles on risk management, claims advocacy, employee benefits, corporate insurance and health cover from the Fortune 5 advisory team.",
};

const stats = [
  { value: "75+", label: "Years of advisory" },
  { value: "500+", label: "Businesses protected" },
  { value: "50K+", label: "Lives insured" },
  { value: "100+", label: "Lives touched monthly" },
];

export default async function BlogPage({ searchParams }: { searchParams: Promise<{ q?: string | string[] }> }) {
  const { q } = await searchParams;
  const initialQuery = typeof q === "string" ? q : Array.isArray(q) ? q[0] : "";
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F9F8F6] text-[#011331] selection:bg-amber-100 selection:text-amber-900">
      <TopBar />
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative isolate overflow-hidden bg-[#011331] pt-[170px] sm:pt-[190px] lg:pt-[210px] pb-16 sm:pb-20 lg:pb-24">
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(197,155,39,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(197,155,39,0.5) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />
        <div className="absolute -left-24 top-16 h-[34rem] w-[34rem] rounded-full bg-[#C59B27]/10 blur-3xl pointer-events-none" />
        <div className="absolute -right-24 top-4 h-[24rem] w-[24rem] rounded-full border border-[#C59B27]/10 pointer-events-none" />

        <div className="relative mx-auto w-full max-w-[1480px] px-5 sm:px-8 lg:px-10 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] items-center gap-10 lg:gap-14">
            {/* Left Copy Column */}
            <ScrollReveal variant="fadeUp" className="w-full">
            <div>
              <nav
                aria-label="Breadcrumb"
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 backdrop-blur"
              >
                <Link href="/" className="text-[11px] font-bold tracking-[0.14em] text-slate-300 hover:text-white uppercase transition-colors">
                  Home
                </Link>
                <span className="h-2 w-2 rounded-full bg-[#C59B27]/60" />
                <span className="text-[11px] font-extrabold tracking-[0.14em] text-[#F5D77F] uppercase">Blog &amp; Articles</span>
              </nav>

              <p className="mb-4 flex items-center gap-3 text-[11px] font-extrabold tracking-[0.2em] text-[#F5D77F] uppercase">
                <span className="h-px w-8 bg-gradient-to-r from-[#C59B27] to-transparent" />
                ADVICE THAT WORKS, IN BLACK &amp; WHITE
              </p>
              <h1 className="font-cormorant text-[2.6rem] font-bold leading-[0.95] tracking-[-0.035em] text-white sm:text-6xl lg:text-[4rem]">
                Reading that protects <span className="block font-light italic tracking-[-0.02em] text-[#F5D77F]">your next decision.</span>
              </h1>
              <p className="mt-5 max-w-xl text-[15px] leading-7 text-slate-300 sm:text-[16px] sm:leading-8">
                Three generations of risk advisory, distilled into practical articles on coverage, claims and the questions nobody thinks to ask before renewal season.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3 text-[11px] font-semibold tracking-wide text-slate-400">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3.5 py-1.5 border border-white/10 text-white">
                  <PenLine className="h-3.5 w-3.5 text-[#C59B27]" /> {articles.length} articles
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3.5 py-1.5 border border-white/10 text-white">
                  <BookOpen className="h-3.5 w-3.5 text-[#C59B27]" /> 5 collections
                </span>
                <span className="text-slate-400">New issues monthly</span>
              </div>
            </div>
            </ScrollReveal>

            {/* Right Featured Article Highlight Card */}
            <ScrollReveal variant="fadeLeft" delay={0.15} className="w-full">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#C59B27]/40 via-[#F5D77F]/30 to-[#C59B27]/20 blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />
              <Link
                href={`/blog/${articles[0].slug}`}
                className="relative block rounded-2xl border border-[#C59B27]/30 bg-gradient-to-b from-[#051a3d] to-[#011331] p-6 sm:p-7 shadow-2xl transition duration-300 group-hover:border-[#C59B27]/60 overflow-hidden"
              >
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#C59B27]/20 px-3 py-1 border border-[#C59B27]/40 text-[#F5D77F] text-[10px] font-extrabold uppercase tracking-widest">
                    <Sparkles className="w-3 h-3 text-[#F5D77F]" /> FEATURED ARTICLE
                  </span>
                  <span className="text-xs font-semibold text-slate-400">{articles[0].readTime}</span>
                </div>
                <h3 className="font-cormorant text-2xl sm:text-3xl font-bold text-white leading-tight group-hover:text-[#F5D77F] transition-colors mb-3">
                  {articles[0].title}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-medium line-clamp-3 mb-6">
                  {articles[0].excerpt}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#C59B27] text-[#011331] font-bold text-xs flex items-center justify-center">
                      FS
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">{articles[0].author.name}</p>
                      <p className="text-[10px] text-slate-400">{articles[0].author.role}</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#F5D77F] group-hover:translate-x-1 transition-transform uppercase tracking-wider">
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4 text-[#F5D77F]" />
                  </span>
                </div>
              </Link>
            </div>
            </ScrollReveal>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C59B27]/40 to-transparent" />
      </section>

      {/* ── STATS STRIP ── */}
      <section className="relative z-20 -mt-8 px-5 sm:px-8 lg:px-10 xl:px-12">
        <ScrollReveal variant="fadeUp" className="w-full">
        <div className="mx-auto grid w-full max-w-[1480px] grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="group rounded-2xl border border-slate-200/80 bg-white p-5 sm:p-6 shadow-[0_10px_30px_rgba(1,19,49,0.08)] transition hover:-translate-y-1 hover:border-[#C59B27]/30 hover:shadow-[0_16px_40px_rgba(1,19,49,0.12)]"
            >
              <p className="inline-flex items-center gap-2 font-cormorant text-3xl font-bold tracking-tight text-[#011331] sm:text-4xl">
                {s.value}
                <Sparkles className="h-4 w-4 text-[#C59B27]" />
              </p>
              <p className="mt-1 text-[11px] font-extrabold tracking-[0.14em] text-[#9A7A1A] uppercase">{s.label}</p>
            </div>
          ))}
        </div>
        </ScrollReveal>
      </section>

      {/* ── LATEST / ARCHIVE ── */}
      <section id="articles" className="scroll-mt-24 pb-10 pt-14 sm:pb-16 sm:pt-16 lg:pb-20">
        <div className="mx-auto w-full max-w-[1480px] px-5 sm:px-8 lg:px-10 xl:px-12">
          <ScrollReveal variant="fadeUp" className="w-full">
          <div className="mb-8 flex flex-col gap-6 lg:mb-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#C59B27]/20 bg-white px-3 py-1.5 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-[#C59B27] animate-pulse" />
                <span className="text-[11px] font-extrabold tracking-[0.16em] text-[#8A6A10] uppercase">Latest from the advisory desk</span>
              </div>
              <h2 className="mt-4 font-cormorant text-4xl font-bold leading-[0.98] tracking-[-0.025em] text-[#011331] sm:text-5xl">
                Articles worth <span className="font-light italic text-[#B8860B]">a second cup of chai.</span>
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-[15px]">
                Filter by topic or search — every article is free, practical and grounded in real portfolios.
              </p>
            </div>
            <div className="hidden items-center gap-3 text-xs font-semibold text-slate-500 lg:flex">
              <span className="h-px w-12 bg-slate-200" />
              <span>Filter by topic or search</span>
            </div>
          </div>
          </ScrollReveal>

          <BlogGrid initialQuery={initialQuery} />

          {/* trust strip */}
          <ScrollReveal variant="fadeUp" delay={0.1} className="w-full">
          <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-[1.4rem] border border-[#C59B27]/20 bg-white p-5 sm:flex-row sm:p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#011331] text-[#F5D77F]">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-extrabold text-[#011331]">Every article reviewed by the Fortune 5 advisory team</p>
                <p className="text-xs font-medium text-slate-500">Claims experience: ₹100+ crore settled • 98% approval rate</p>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#011331] px-5 py-3 text-xs font-extrabold tracking-widest text-white uppercase transition hover:bg-[#0a2a5e]"
            >
              Ask us a question <ArrowRight className="h-4 w-4 text-[#F5D77F]" />
            </Link>
          </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}