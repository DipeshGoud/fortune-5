import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Eye,
  Handshake,
  HeartHandshake,
  Scale,
  ShieldCheck,
  Target,
} from "lucide-react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About Us | Fortune 5 Risk Management Solutions LLP",
  description:
    "A 75-year, three-generation legacy of trusted insurance advice. Discover the mission, vision, values and leadership behind Fortune 5.",
};

const values = [
  {
    number: "01",
    title: "Integrity",
    icon: Scale,
    description: "Advice that is clear, unbiased and always aligned to your interests.",
  },
  {
    number: "02",
    title: "Trust",
    icon: ShieldCheck,
    description: "Relationships strengthened across three generations and every promise kept.",
  },
  {
    number: "03",
    title: "Expertise",
    icon: Award,
    description: "Deep knowledge across corporate, retail and specialised risk lines.",
  },
  {
    number: "04",
    title: "Partnership",
    icon: Handshake,
    description: "A committed ally at placement, renewal and the moment a claim arises.",
  },
  {
    number: "05",
    title: "Care",
    icon: HeartHandshake,
    description: "Protection designed around the people and ambitions behind every policy.",
  },
  {
    number: "06",
    title: "Excellence",
    icon: Target,
    description: "A relentless pursuit of better coverage, value and client outcomes.",
  },
];

const timeline = [
  {
    year: "1950s",
    title: "A promise takes root",
    text: "A family insurance practice begins with one conviction: protection should feel personal.",
  },
  {
    year: "1980s",
    title: "Business risk, understood",
    text: "The practice expands into corporate risk advisory and broking across Maharashtra.",
  },
  {
    year: "2000s",
    title: "A broader brief",
    text: "Employee benefits, health and bespoke liability solutions join the portfolio.",
  },
  {
    year: "Today",
    title: "Fortune 5 LLP",
    text: "A full-spectrum risk partner trusted by 500+ businesses and 50,000+ lives.",
  },
];

const stats = [
  { value: "75+", label: "years of legacy" },
  { value: "3", label: "generations of advice" },
  { value: "500+", label: "businesses protected" },
  { value: "50K+", label: "lives insured" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f7f6f2] text-[#071a38]">
      <TopBar />
      <Navbar />

      <section className="relative isolate overflow-hidden bg-[#041735] pt-[170px] sm:pt-[190px] lg:pt-[210px] pb-12 sm:pb-20 lg:pb-0">
        <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(245,215,127,0.28)_1px,transparent_1px),linear-gradient(90deg,rgba(245,215,127,0.28)_1px,transparent_1px)] [background-size:58px_58px]" />
        <div className="absolute -left-32 top-28 h-[28rem] w-[28rem] rounded-full bg-[#c59b27]/20 blur-3xl" />
        <div className="absolute right-[-12rem] top-0 h-[38rem] w-[38rem] rounded-full border border-[#c59b27]/20" />
        <div className="absolute right-[-7rem] top-20 h-[27rem] w-[27rem] rounded-full border border-[#c59b27]/15" />

        <div className="relative mx-auto grid w-full max-w-[1380px] grid-cols-1 items-end gap-10 px-5 pb-8 sm:px-8 sm:pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-12 lg:pb-0 xl:px-16">
          <ScrollReveal variant="fadeUp" className="w-full">
          <div className="pb-0 lg:pb-24">
            <nav aria-label="Breadcrumb" className="mb-6 sm:mb-8 flex items-center gap-2 text-xs font-bold tracking-[0.18em] text-slate-300 uppercase">
              <Link href="/" className="transition-colors hover:text-[#f5d77f]">Home</Link>
              <span className="h-px w-5 bg-[#c59b27]" />
              <span className="text-[#f5d77f]">About Fortune 5</span>
            </nav>

            <p className="mb-4 sm:mb-5 flex items-center gap-3 text-xs font-extrabold tracking-[0.2em] text-[#f5d77f] uppercase">
              <span className="h-px w-9 bg-[#c59b27]" />
              Established in the 1950s
            </p>
            <h1 className="max-w-3xl font-cormorant text-4xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold leading-[1.02] sm:leading-[0.95] tracking-[-0.035em] text-white">
              Risk advice that stays with you, <span className="text-[#f5d77f]">generation after generation.</span>
            </h1>
            <p className="mt-5 sm:mt-7 max-w-xl text-sm sm:text-lg leading-7 sm:leading-8 text-slate-300">
              For more than seven decades, Fortune 5 has brought a human point of view to insurance—turning complex risk into clear, confident decisions.
            </p>
            <div className="mt-7 sm:mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#f3d47c] px-6 py-3.5 text-xs font-extrabold tracking-[0.13em] text-[#041735] uppercase transition hover:bg-white">
                Speak with an advisor <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a href="#our-story" className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3.5 text-xs font-extrabold tracking-[0.13em] text-white uppercase transition hover:border-[#f3d47c] hover:text-[#f3d47c]">
                Our story
              </a>
            </div>
          </div>
          </ScrollReveal>

          <ScrollReveal variant="fadeLeft" delay={0.15} className="w-full">
          <div className="relative mx-auto flex w-full max-w-[400px] sm:max-w-[540px] justify-center self-end lg:justify-end mt-4 lg:mt-0">
            <div className="absolute bottom-0 h-[82%] w-[78%] rounded-t-[10rem] border border-[#c59b27]/40 bg-gradient-to-b from-[#c59b27]/25 to-transparent z-0" />
            <Image src="/kaushal-shah.png" alt="Kaushal Shah, Fortune 5 Principal Consultant" width={680} height={1050} priority className="relative z-10 h-auto w-[82%] sm:w-[86%] max-w-[360px] sm:max-w-[480px] object-contain drop-shadow-2xl" />
            <div className="absolute bottom-4 sm:bottom-8 right-2 sm:right-2 z-20 rounded-2xl border border-white/15 bg-[#0c254d]/90 px-3.5 py-2.5 sm:px-4 sm:py-3 text-left shadow-2xl backdrop-blur">
              <p className="text-[9px] sm:text-[10px] font-extrabold tracking-[0.18em] text-[#f5d77f] uppercase">A family legacy</p>
              <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm font-semibold text-white whitespace-nowrap">Kaushal Shah</p>
            </div>
          </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative z-10 border-y border-[#d9bd6b]/30 bg-[#f0e4bd]">
        <ScrollReveal variant="fadeUp" className="w-full">
        <div className="mx-auto grid w-full max-w-[1380px] grid-cols-2 divide-x divide-[#b9942a]/25 px-5 sm:grid-cols-4 sm:px-8 lg:px-12 xl:px-16">
          {stats.map((stat) => (
            <div key={stat.label} className="py-6 text-center sm:py-7">
              <p className="font-cormorant text-3xl font-bold leading-none text-[#0b2246] sm:text-4xl">{stat.value}</p>
              <p className="mt-1.5 text-[10px] font-extrabold tracking-[0.12em] text-[#75570d] uppercase sm:text-[11px]">{stat.label}</p>
            </div>
          ))}
        </div>
        </ScrollReveal>
      </section>

      <section id="our-story" className="scroll-mt-24 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-12 xl:px-0">
          <ScrollReveal variant="fadeRight">
          <div>
            <p className="text-xs font-extrabold tracking-[0.2em] text-[#a47a13] uppercase">The Fortune 5 difference</p>
            <h2 className="mt-4 font-cormorant text-4xl font-bold leading-[1.02] tracking-[-0.025em] text-[#071a38] sm:text-5xl">
              Insurance is a promise. We make it feel like one.
            </h2>
          </div>
          </ScrollReveal>
          <ScrollReveal variant="fadeLeft" delay={0.12}>
          <div className="border-l border-[#c59b27]/40 pl-6 sm:pl-9">
            <p className="text-lg leading-8 text-slate-700 sm:text-xl">
              We began as a small family practice, helping people protect the things they had worked hard to build. Today, we advise businesses, families and institutions with the same responsibility and care.
            </p>
            <p className="mt-5 text-base leading-8 text-slate-600">
              We do more than arrange policies. We examine your exposure, shape the right portfolio, negotiate with strong insurers and stand beside you when a claim puts that protection to the test.
            </p>
            <Link href="/services" className="group mt-7 inline-flex items-center gap-2 text-xs font-extrabold tracking-[0.14em] text-[#071a38] uppercase hover:text-[#a47a13]">
              Explore our approach <ArrowUpRight className="h-4 w-4 text-[#a47a13] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </Link>
          </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[#ebe9e1] py-20 sm:py-24">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12 xl:px-0">
          <ScrollReveal variant="fadeUp">
          <div className="mb-10 max-w-2xl sm:mb-12">
            <p className="text-xs font-extrabold tracking-[0.2em] text-[#a47a13] uppercase">Our point of view</p>
            <h2 className="mt-3 font-cormorant text-4xl font-bold leading-none tracking-[-0.025em] text-[#071a38] sm:text-5xl">Protection with a purpose.</h2>
          </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <ScrollReveal variant="fadeUp">
            <article className="relative overflow-hidden rounded-2xl bg-[#071a38] p-7 text-white sm:p-9">
              <div className="absolute -right-14 -top-14 h-44 w-44 rounded-full border border-[#c59b27]/25" />
              <Target className="h-7 w-7 text-[#f3d47c]" />
              <p className="mt-8 text-xs font-extrabold tracking-[0.18em] text-[#f3d47c] uppercase">Our mission</p>
              <h3 className="mt-3 font-cormorant text-3xl font-bold leading-tight sm:text-4xl">Clarity when it matters most.</h3>
              <p className="mt-4 max-w-lg text-sm leading-7 text-slate-300 sm:text-base">To shield businesses, families and futures with intelligent, independent advice and unwavering claim-time support.</p>
            </article>
            </ScrollReveal>
            <ScrollReveal variant="fadeUp" delay={0.12}>
            <article className="rounded-2xl border border-[#d8d3c4] bg-[#f9f8f5] p-7 sm:p-9">
              <Eye className="h-7 w-7 text-[#a47a13]" />
              <p className="mt-8 text-xs font-extrabold tracking-[0.18em] text-[#a47a13] uppercase">Our vision</p>
              <h3 className="mt-3 font-cormorant text-3xl font-bold leading-tight text-[#071a38] sm:text-4xl">A more confident future.</h3>
              <p className="mt-4 max-w-lg text-sm leading-7 text-slate-600 sm:text-base">To be India&apos;s most trusted risk partner—measured by promises honoured, resilient relationships and the confidence our clients carry forward.</p>
            </article>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12 xl:px-0">
          <ScrollReveal variant="fadeUp">
          <div className="mb-11 flex flex-col justify-between gap-5 sm:mb-14 md:flex-row md:items-end">
            <div className="max-w-xl">
              <p className="text-xs font-extrabold tracking-[0.2em] text-[#a47a13] uppercase">What guides us</p>
              <h2 className="mt-3 font-cormorant text-4xl font-bold leading-none tracking-[-0.025em] text-[#071a38] sm:text-5xl">Built on values that outlast markets.</h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-slate-600">They shape every conversation, from a first risk review to the resolution of a complex claim.</p>
          </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 border-t border-[#d6d0c0] sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <ScrollReveal key={value.title} variant="fadeUp" delay={Math.min(i * 0.06, 0.3)}>
                <article className="group border-b border-[#d6d0c0] py-7 pr-5 sm:pr-8 lg:py-9 lg:pr-10">
                  <div className="flex items-start justify-between">
                    <span className="font-cormorant text-xl font-bold text-[#c59b27]">{value.number}</span>
                    <Icon className="h-5 w-5 text-[#8d6a10] transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="mt-7 text-lg font-extrabold text-[#071a38]">{value.title}</h3>
                  <p className="mt-2 max-w-xs text-sm leading-6 text-slate-600">{value.description}</p>
                </article>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#071a38] py-20 text-white sm:py-24 lg:py-28">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12 xl:px-0">
          <ScrollReveal variant="fadeUp">
          <div className="max-w-2xl">
            <p className="text-xs font-extrabold tracking-[0.2em] text-[#f3d47c] uppercase">The legacy, in chapters</p>
            <h2 className="mt-3 font-cormorant text-4xl font-bold leading-none tracking-[-0.025em] sm:text-5xl">75 years, with our eyes on what&apos;s next.</h2>
          </div>
          </ScrollReveal>
          <div className="relative mt-12 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-4 md:gap-5">
            <div className="absolute left-0 right-0 top-3 hidden h-px bg-gradient-to-r from-[#c59b27] via-[#f3d47c] to-[#c59b27]/20 md:block" />
            {timeline.map((item, i) => (
              <ScrollReveal key={item.year} variant="fadeUp" delay={i * 0.08}>
              <article className="relative pt-0 md:pt-10">
                <span className="absolute left-0 top-0 hidden h-6 w-6 -translate-y-1/2 rounded-full border-[5px] border-[#071a38] bg-[#f3d47c] md:block" />
                <p className="font-cormorant text-2xl font-bold text-[#f3d47c]">{item.year}</p>
                <h3 className="mt-3 text-base font-extrabold text-white">{item.title}</h3>
                <p className="mt-2 max-w-xs text-sm leading-6 text-slate-300">{item.text}</p>
              </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <TeamSection />
      <Footer />
    </main>
  );
}
