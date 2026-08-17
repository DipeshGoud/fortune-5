import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Camera,
  Sparkles,
  Quote,
  ShieldCheck,
  Award,
  Building2,
  Users,
} from "lucide-react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import GalleryGrid from "@/components/GalleryGrid";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Gallery & Milestones | Fortune 5 Risk Management Solutions LLP",
  description:
    "Explore 75 years of trust, corporate risk summits, leadership awards, team moments, and milestone events of Fortune 5.",
};

const heroStats = [
  { value: "75+", label: "Years of legacy", sub: "Since 1950" },
  { value: "100+", label: "Events & summits", sub: "Pan-India" },
  { value: "50+", label: "Awards & honours", sub: "National & Global" },
  { value: "10,000+", label: "Lives protected", sub: "And growing" },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F9F8F6] text-[#01327a] selection:bg-amber-100 selection:text-amber-900">
      <TopBar />
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative isolate overflow-hidden bg-[#01327a] pt-[148px] sm:pt-[166px] lg:pt-[182px] pb-20 sm:pb-24 lg:pb-28">
        {/* grid + glows */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(197,155,39,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(197,155,39,0.5) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />
        <div className="absolute -left-24 top-16 h-[34rem] w-[34rem] rounded-full bg-[#C59B27]/10 blur-3xl pointer-events-none" />
        <div className="absolute -right-32 -top-10 h-[40rem] w-[40rem] rounded-full border border-[#C59B27]/10 pointer-events-none" />
        <div className="absolute right-[-5rem] top-24 h-[26rem] w-[26rem] rounded-full border border-white/5 pointer-events-none" />

        <div className="relative mx-auto w-full max-w-[1480px] px-5 sm:px-8 lg:px-10 xl:px-12 grid grid-cols-1 lg:grid-cols-[1.08fr_0.92fr] gap-10 lg:gap-8 xl:gap-12 items-center">
          {/* LEFT: copy */}
          <ScrollReveal variant="fadeUp" className="w-full">
          <div className="max-w-3xl">
            <nav
              aria-label="Breadcrumb"
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 backdrop-blur"
            >
              <Link
                href="/"
                className="text-[11px] font-bold tracking-[0.14em] text-slate-300 hover:text-white uppercase transition-colors"
              >
                Home
              </Link>
              <span className="h-2 w-2 rounded-full bg-[#C59B27]/60" />
              <span className="text-[11px] font-extrabold tracking-[0.14em] text-[#F5D77F] uppercase">
                Gallery &amp; Media
              </span>
            </nav>

            <p className="mb-4 inline-flex items-center gap-3 text-[11px] font-extrabold tracking-[0.2em] text-[#F5D77F] uppercase">
              <span className="h-px w-8 bg-gradient-to-r from-[#C59B27] to-transparent" />
              75 YEARS OF MOMENTS &amp; MILESTONES
              <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-[#C59B27]/15 border border-[#C59B27]/25 px-2.5 py-1 text-[9px] tracking-[0.14em] text-[#F5D77F]">
                <Sparkles className="h-3 w-3" /> EST. 1950
              </span>
            </p>

            <h1 className="font-cormorant text-[2.6rem] font-bold leading-[0.95] tracking-[-0.035em] text-white sm:text-6xl lg:text-[3.8rem] xl:text-[4.6rem]">
              Capturing our journey of
              <span className="block font-light italic tracking-[-0.02em] text-[#F5D77F]">trust, leadership &amp; care.</span>
            </h1>

            <p className="mt-5 max-w-xl text-[15px] leading-7 text-slate-300 sm:text-[16px] sm:leading-8">
              From historic family milestones to national risk summits and team moments — step inside the visual archive that shaped 75 years of Fortune&nbsp;5.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#archive"
                className="group inline-flex items-center gap-2.5 rounded-full bg-[#F5D77F] px-6 py-3.5 text-xs font-extrabold tracking-[0.14em] text-[#01327a] uppercase shadow-[0_10px_30px_rgba(197,155,39,0.25)] transition hover:bg-white"
              >
                Explore archive
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#01327a] text-white transition group-hover:translate-x-0.5">
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </a>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-xs font-extrabold tracking-[0.14em] text-white uppercase backdrop-blur transition hover:border-[#F5D77F]/50 hover:text-[#F5D77F]"
              >
                Our legacy
                <ArrowUpRight className="h-4 w-4 opacity-70" />
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-[11px] font-semibold tracking-wide text-slate-400">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 border border-white/10">
                <Camera className="h-3.5 w-3.5 text-[#C59B27]" /> Curated photo collection
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 border border-white/10">
                <Building2 className="h-3.5 w-3.5 text-[#C59B27]" /> 3 primary categories
              </span>
              <span className="text-slate-500">Updated 2026 • Mumbai</span>
            </div>
          </div>
          </ScrollReveal>

          {/* RIGHT: editorial collage */}
          <ScrollReveal variant="fadeLeft" delay={0.15} className="w-full">
          <div className="relative mx-auto w-full max-w-[520px] lg:ml-auto">
            <div className="absolute inset-0 -rotate-1 rounded-[2rem] border border-[#C59B27]/20 bg-gradient-to-b from-white/[0.06] to-transparent" />
            <div className="absolute -bottom-4 -right-4 hidden h-24 w-24 rounded-2xl border border-[#C59B27]/20 bg-[#C59B27]/10 backdrop-blur sm:block" />

            <div className="relative grid grid-cols-[1.35fr_0.85fr] gap-3 sm:gap-4 p-3 sm:p-4">
              {/* Main large */}
              <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-slate-900 shadow-2xl">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src="/gallery-team1.png"
                    alt="Fortune 5 Advisory Team"
                    fill
                    priority
                    sizes="(max-width: 1024px) 60vw, 420px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#01327a]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 rounded-xl bg-[#01327a]/75 backdrop-blur px-3 py-2.5 border border-white/10">
                    <p className="text-[10px] font-extrabold tracking-[0.14em] text-[#F5D77F] uppercase">Team Photo</p>
                    <p className="mt-1 font-cormorant text-sm font-bold leading-tight text-white">Fortune 5 Advisory Team</p>
                    <p className="text-[11px] text-slate-300">Mumbai • Executive Advisory</p>
                  </div>
                </div>
              </div>

              {/* Stacked side */}
              <div className="flex flex-col gap-3 sm:gap-4">
                <div className="relative overflow-hidden rounded-[1.25rem] border border-white/10 bg-slate-900 shadow-xl">
                  <div className="relative aspect-[4/3.2] w-full">
                    <Image src="/gallery-event-gala.png" alt="Gala Event" fill sizes="220px" className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <span className="absolute left-2.5 top-2.5 rounded-full bg-[#F5D77F] px-2.5 py-1 text-[9px] font-black tracking-widest text-[#01327a] uppercase">
                      Events
                    </span>
                  </div>
                  <div className="bg-[#01327a] px-3 py-2.5">
                    <p className="text-[11px] font-bold leading-tight text-white">75th Anniversary Gala</p>
                    <p className="text-[10px] text-[#F5D77F]">Grand Celebration</p>
                  </div>
                </div>

                <Link href="/trophy" className="group relative overflow-hidden rounded-[1.25rem] border border-white/10 hover:border-[#C59B27]/60 bg-white shadow-xl block transition-all">
                  <div className="relative aspect-[4/3] w-full bg-[#F9F8F6]">
                    <Image src="/trophy.png" alt="Trophy award" fill sizes="220px" className="object-contain p-4 group-hover:scale-105 transition-transform" />
                  </div>
                  <div className="flex items-center justify-between bg-white px-3 py-2.5">
                    <div>
                      <p className="text-[11px] font-extrabold text-[#01327a] group-hover:text-[#C59B27] transition-colors">100+ Trophies &amp; Awards</p>
                      <p className="text-[10px] font-semibold text-slate-500">Explore Showcase →</p>
                    </div>
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#01327a] text-[#F5D77F] group-hover:bg-[#C59B27] group-hover:text-[#01327a] transition-colors">
                      <Sparkles className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              </div>
            </div>

            {/* Floating credibility badge */}
            <div className="absolute -bottom-5 left-2 sm:left-0 flex items-center gap-3 rounded-2xl border border-[#C59B27]/30 bg-white px-4 py-3 shadow-[0_12px_40px_rgba(1,19,49,0.18)]">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#01327a] text-[#F5D77F]">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-extrabold tracking-wide text-[#01327a]">Trusted since 1950</p>
                <p className="text-[11px] font-medium text-slate-500">3 generations • Mumbai</p>
              </div>
              <div className="hidden sm:flex items-center gap-1 pl-2 text-amber-500">
                <Award className="h-4 w-4" />
                <Users className="h-4 w-4" />
              </div>
            </div>
          </div>
          </ScrollReveal>
        </div>

        {/* bottom hairline */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C59B27]/40 to-transparent" />
      </section>

      {/* ── FLOATING STATS ── */}
      <section className="relative z-20 -mt-8 px-5 sm:px-8 lg:px-10 xl:px-12">
        <ScrollReveal variant="fadeUp" className="w-full">
        <div className="mx-auto grid w-full max-w-[1480px] grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {heroStats.map((s) => (
            <div
              key={s.label}
              className="group rounded-2xl border border-slate-200/80 bg-white p-5 sm:p-6 shadow-[0_10px_30px_rgba(1,19,49,0.08)] transition hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(1,19,49,0.12)] hover:border-[#C59B27]/30"
            >
              <p className="font-cormorant text-3xl font-bold tracking-tight text-[#01327a] sm:text-4xl">{s.value}</p>
              <p className="mt-1 text-[11px] font-extrabold tracking-[0.14em] text-[#9A7A1A] uppercase">{s.label}</p>
              <p className="mt-1 text-xs font-medium text-slate-500">{s.sub}</p>
            </div>
          ))}
        </div>
        </ScrollReveal>
      </section>

      {/* ── GALLERY ARCHIVE SECTION ── */}
      <section id="archive" className="py-16 sm:py-24 bg-[#F9F8F6]">
        <div className="mx-auto w-full max-w-[1480px] px-5 sm:px-8 lg:px-10 xl:px-12">
          <ScrollReveal variant="fadeUp">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <p className="text-xs font-extrabold tracking-[0.2em] text-[#a47a13] uppercase">
              Photo Gallery Archive
            </p>
            <h2 className="mt-3 font-cormorant text-4xl font-bold leading-tight tracking-[-0.025em] text-[#071a38] sm:text-5xl">
              Moments that define Fortune 5
            </h2>
          </div>
          </ScrollReveal>

          <GalleryGrid />
        </div>
      </section>

      {/* ── LEGACY QUOTE STRIP ── */}
      <section className="relative overflow-hidden bg-[#01327a] py-10 sm:py-14">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute -left-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#C59B27]/10 blur-3xl" />
          <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-white/[0.04] blur-3xl" />
        </div>
        <ScrollReveal variant="fadeUp" className="w-full">
        <div className="relative mx-auto flex w-full max-w-[1480px] flex-col gap-6 px-5 sm:px-8 lg:px-10 xl:px-12 md:flex-row md:items-center md:justify-between">
          <div className="flex gap-4 max-w-3xl">
            <div className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#C59B27]/30 bg-white/5 text-[#F5D77F]">
              <Quote className="h-6 w-6" />
            </div>
            <div>
              <p className="font-cormorant text-xl font-medium leading-snug text-white sm:text-2xl">
                &ldquo;Protection is not a transaction — it is a promise kept across generations.&rdquo;
              </p>
              <p className="mt-2 text-sm font-semibold tracking-wide text-[#F5D77F]">— Fortune 5 Leadership • Mumbai</p>
            </div>
          </div>
          <Link
            href="/testimonials"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[#C59B27]/30 bg-white/5 px-5 py-3 text-xs font-extrabold tracking-widest text-[#F5D77F] uppercase backdrop-blur transition hover:bg-[#F5D77F] hover:text-[#01327a]"
          >
            Read client stories <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        </ScrollReveal>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#F9F8F6] px-5 py-12 sm:px-8 sm:py-16 lg:px-10">
        <div className="mx-auto w-full max-w-[1480px]">
          <ScrollReveal variant="fadeUp">
            <div className="relative overflow-hidden rounded-[1.8rem] border border-[#C59B27]/20 bg-white p-8 shadow-[0_18px_60px_rgba(1,19,49,0.08)] sm:p-10 lg:p-12">
              <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-[#F5D77F]/20 blur-2xl" />
              <div className="absolute -left-10 -bottom-10 h-64 w-64 rounded-full bg-[#01327a]/5 blur-2xl" />
              <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#01327a] px-3.5 py-1.5 text-[11px] font-extrabold tracking-widest text-[#F5D77F] uppercase">
                    <Sparkles className="h-3.5 w-3.5" /> Partner with us
                  </span>
                  <h2 className="mt-4 font-cormorant text-3xl font-bold leading-tight tracking-tight text-[#01327a] sm:text-4xl lg:text-[2.6rem]">
                    Ready to secure your business with <span className="text-[#B8860B]">75 years of expertise?</span>
                  </h2>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-[15px]">
                    Schedule a personalised risk consultation with Kaushal Shah and our senior advisory team. Unbiased advice, insurer-grade negotiation, claim-time advocacy.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row lg:justify-end lg:items-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#01327a] px-7 py-4 text-xs font-extrabold tracking-widest text-white uppercase shadow-lg transition hover:bg-[#01327a]"
                  >
                    Schedule consultation <ArrowRight className="h-4 w-4 text-[#F5D77F]" />
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-4 text-xs font-extrabold tracking-widest text-[#01327a] uppercase transition hover:border-[#C59B27]/40 hover:text-[#B8860B]"
                  >
                    Explore services
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
