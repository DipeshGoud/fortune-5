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
    "A 75-year, three-generation legacy of trusted risk management advice. Discover the mission, vision, values and leadership behind Fortune 5.",
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
    description: "Deep knowledge across corporate, retail and SME risk lines.",
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

const ourJourneyTimeline = [
  {
    step: "2000",
    title: "Family Legacy",
    text: "Proudly carrying forward a 75+ year family legacy in risk management & protection.",
  },
  {
    step: "Qualifications",
    title: "Professional Qualifications",
    text: "Risk management & underwriting expertise with a strong academic foundation.",
  },
  {
    step: "Recognition",
    title: "Industry Recognition",
    text: "Consistent performance and client trust built over decades of dedicated service.",
  },
  {
    step: "Since 2003",
    title: "MD Club Member",
    text: "Proud MD Club member, Bajaj Allianz continuously since 2003.",
  },
  {
    step: "Leadership",
    title: "Fortune 5 Risk Management Solutions LLP",
    text: "Leading with a claims-first approach and long-term client partnerships.",
  },
];

const stats = [
  { value: "75+", label: "years of legacy" },
  { value: "3", label: "generations of advice" },
  { value: "500+", label: "businesses protected" },
  { value: "10,000+", label: "lives protected" },
];

const founderPrinciples = [
  {
    title: "Our Vision",
    desc: "To make risk management simple, transparent and impactful for every client.",
  },
  {
    title: "Our Philosophy",
    desc: "Right advice. Right protection. Right time.",
  },
  {
    title: "Why Fortune 5 Started",
    desc: "To bridge the gap between complex risk landscapes and real protection with honest guidance.",
  },
  {
    title: "Claims-First Thinking",
    desc: "We don't sell policies. We stand beside our clients when it matters most.",
  },
  {
    title: "Customer-First Approach",
    desc: "Your goals. Your challenges. Our priority. Always.",
  },
];

const founderQualifications = [
  {
    title: "Diploma in Chemical Engineering",
    subtitle: "Technical Foundation",
    desc: "Strong technical grounding in engineering principles and process analysis.",
  },
  {
    title: "B.E. (Chemical Engineering)",
    subtitle: "Engineering Rigor",
    desc: "Engineering background bringing analytical and quantitative rigor to risk assessment.",
  },
  {
    title: "Advance Diploma in Risk and Insurance",
    subtitle: "NMIMS Mumbai",
    desc: "Specialized knowledge and strategic risk management insight.",
  },
  {
    title: "Fellow Institute of India",
    subtitle: "Highest Technical Standard",
    desc: "Recognized risk and underwriting expertise. Committed to professional excellence.",
  },
  {
    title: "MD Club Member (Bajaj Allianz)",
    subtitle: "Member Since 2003",
    desc: "Consistent high-performance recognition and trusted client partnership built over decades.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f7f6f2] text-[#071a38]">
      <TopBar />
      <Navbar />

      {/* Hero Banner */}
      <section className="relative isolate overflow-hidden bg-[#012257] pt-[170px] sm:pt-[190px] lg:pt-[210px] pb-12 sm:pb-20 lg:pb-0">
        <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(245,215,127,0.28)_1px,transparent_1px),linear-gradient(90deg,rgba(245,215,127,0.28)_1px,transparent_1px)] [background-size:58px_58px]" />
        <div className="absolute -left-32 top-28 h-[28rem] w-[28rem] rounded-full bg-[#c59b27]/20 blur-3xl" />
        <div className="absolute right-[-12rem] top-0 h-[38rem] w-[38rem] rounded-full border border-[#c59b27]/20" />
        <div className="absolute right-[-7rem] top-20 h-[27rem] w-[27rem] rounded-full border border-[#c59b27]/15" />

        <div className="relative mx-auto grid w-full max-w-[1380px] grid-cols-1 items-end gap-10 px-5 pb-8 sm:px-8 sm:pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-12 lg:pb-0 xl:px-16">
          <ScrollReveal variant="fadeUp" className="w-full">
          <div className="pb-0 lg:pb-24">
            <nav aria-label="Breadcrumb" className="mb-6 sm:mb-8 flex items-center gap-2 text-xs font-bold tracking-[0.18em] text-slate-300 uppercase">
              <Link href="/" prefetch={false} className="transition-colors hover:text-[#f5d77f]">Home</Link>
              <span className="h-px w-5 bg-[#c59b27]" />
              <span className="text-[#f5d77f] whitespace-nowrap">About Fortune 5</span>
            </nav>

            <p className="mb-4 sm:mb-5 flex items-center gap-3 text-xs font-extrabold tracking-[0.2em] text-[#f5d77f] uppercase">
              <span className="h-px w-9 bg-[#c59b27]" />
              Established in the 1950s
            </p>
            <h1 className="max-w-3xl font-cormorant text-4xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold leading-[1.02] sm:leading-[0.95] tracking-[-0.035em] text-white">
              Risk advice that stays with you, <span className="text-[#f5d77f]">generation after generation.</span>
            </h1>
            <p className="mt-5 sm:mt-7 max-w-xl text-sm sm:text-lg leading-7 sm:leading-8 text-slate-300">
              For more than seven decades, Fortune 5 has brought a human point of view to risk management—turning complex risk into clear, confident decisions.
            </p>
            <div className="mt-7 sm:mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" prefetch={false} className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#f3d47c] px-6 py-3.5 text-xs font-extrabold tracking-[0.13em] text-[#012257] uppercase transition hover:bg-white">
                Speak with an advisor <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a href="#founder" className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3.5 text-xs font-extrabold tracking-[0.13em] text-white uppercase transition hover:border-[#f3d47c] hover:text-[#f3d47c]">
                Founder&apos;s Message
              </a>
            </div>
          </div>
          </ScrollReveal>

          <ScrollReveal variant="fadeLeft" delay={0.15} className="w-full">
          <div className="relative mx-auto flex w-full max-w-[400px] sm:max-w-[540px] justify-center self-end lg:justify-end mt-4 lg:mt-0">
            <div className="absolute bottom-0 h-[82%] w-[78%] rounded-t-[10rem] border border-[#c59b27]/40 bg-gradient-to-b from-[#c59b27]/25 to-transparent z-0" />
            <Image src="/kaushal-shah.webp" alt="Kaushal Shah, Chairman & Managing Director" width={680} height={1050} priority className="relative z-10 h-auto w-[82%] sm:w-[86%] max-w-[360px] sm:max-w-[480px] object-contain drop-shadow-2xl" />
            <div className="absolute bottom-4 sm:bottom-8 right-2 sm:right-2 z-20 rounded-2xl border border-white/15 bg-[#012b6b]/90 px-3.5 py-2.5 sm:px-4 sm:py-3 text-left shadow-2xl backdrop-blur">
              <p className="text-[9px] sm:text-[10px] font-extrabold tracking-[0.18em] text-[#f5d77f] uppercase">Chairman &amp; Managing Director</p>
              <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm font-semibold text-white whitespace-nowrap">Kaushal Shah</p>
            </div>
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative z-10 border-y border-[#d9bd6b]/30 bg-[#f0e4bd]">
        <ScrollReveal variant="fadeUp" className="w-full">
        <div className="mx-auto grid w-full max-w-[1380px] grid-cols-2 divide-x divide-[#b9942a]/25 px-5 sm:grid-cols-4 sm:px-8 lg:px-12 xl:px-16">
          {stats.map((stat) => (
            <div key={stat.label} className="py-6 text-center sm:py-7">
              <p className="font-cormorant text-3xl font-bold leading-none text-[#012b6b] sm:text-4xl">{stat.value}</p>
              <p className="mt-1.5 text-[10px] font-extrabold tracking-[0.12em] text-[#75570d] uppercase sm:text-[11px]">{stat.label}</p>
            </div>
          ))}
        </div>
        </ScrollReveal>
      </section>

      {/* Message from Our Founder Section */}
      <section id="founder" className="scroll-mt-24 py-20 sm:py-24 lg:py-28 bg-[#fdfbf7]">
        <div className="mx-auto w-full max-w-[1380px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <ScrollReveal variant="fadeUp">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <p className="text-xs font-extrabold tracking-[0.2em] text-[#a47a13] uppercase">A Message From Our Founder</p>
              <h2 className="mt-3 font-cormorant text-4xl sm:text-5xl font-bold text-[#01327a] uppercase tracking-tight">
                Building Trust. <span className="text-[#c59b27]">Protecting Futures.</span>
              </h2>
              <div className="flex items-center justify-center gap-3 my-4">
                <span className="h-[1.5px] w-12 sm:w-16 bg-gradient-to-r from-transparent to-[#c59b27] inline-block" />
                <span className="w-2 h-2 rounded-full bg-[#c59b27] inline-block" />
                <span className="h-[1.5px] w-12 sm:w-16 bg-gradient-to-l from-transparent to-[#c59b27] inline-block" />
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Founder Quote & Bio */}
            <ScrollReveal variant="fadeRight" className="lg:col-span-6 bg-white p-8 sm:p-10 rounded-3xl border border-[#e5e1d6] shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#c59b27]/10 rounded-full blur-2xl pointer-events-none" />
              <span className="font-cormorant text-6xl text-[#c59b27] leading-none block">&ldquo;</span>
              <p className="font-cormorant text-2xl sm:text-3xl font-bold text-[#01327a] leading-snug italic mt-1 mb-6">
                Risk management isn&apos;t about selling policies. It&apos;s about protecting dreams, preserving businesses, and standing by people when they need us the most.
              </p>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h3 className="font-cormorant text-2xl font-bold text-[#01327a]">Kaushal Shah</h3>
                  <p className="text-xs font-extrabold text-[#c59b27] tracking-wider uppercase mt-0.5">
                    Chairman &amp; Managing Director
                  </p>
                  <p className="text-xs text-slate-500 font-medium">
                    Fortune 5 Risk Management Solutions LLP
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-slate-500 block">Experience</span>
                  <span className="text-sm font-extrabold text-[#01327a]">22+ Years Prof.</span>
                  <span className="text-xs text-[#c59b27] font-bold block">75+ Years Legacy</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Leadership Principles Grid */}
            <ScrollReveal variant="fadeLeft" delay={0.12} className="lg:col-span-6 space-y-3.5">
              {founderPrinciples.map((item, idx) => (
                <div key={idx} className="p-4 sm:p-5 rounded-2xl bg-white border border-[#e5e1d6] shadow-xs flex items-start gap-4 hover:border-[#c59b27] transition-all">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#01327a] text-[#f3d47c] text-xs font-bold font-cormorant">
                    0{idx + 1}
                  </span>
                  <div>
                    <h4 className="font-sans font-bold text-sm text-[#01327a] uppercase tracking-wider">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </ScrollReveal>
          </div>

          {/* Academic & Professional Rigor Grid */}
          <div className="mt-14 pt-12 border-t border-[#e5e1d6]">
            <ScrollReveal variant="fadeUp">
              <h3 className="text-xs font-extrabold tracking-[0.2em] text-[#a47a13] uppercase text-center mb-8">
                Professional Qualifications &amp; Industry Standing
              </h3>
            </ScrollReveal>
            <StaggerContainer
              staggerChildren={0.12}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5"
            >
              {founderQualifications.map((item, idx) => (
                <StaggerItem key={idx} variant="fadeUp" className="h-full">
                  <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-[#c59b27] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full">
                    <div>
                      <span className="text-[10px] font-extrabold uppercase text-[#c59b27] tracking-wider block mb-2">{item.subtitle}</span>
                      <h4 className="font-sans font-bold text-sm sm:text-base text-[#01327a] mb-2">{item.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-[#012257] py-20 sm:py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.1] [background-image:linear-gradient(rgba(245,215,127,0.28)_1px,transparent_1px),linear-gradient(90deg,rgba(245,215,127,0.28)_1px,transparent_1px)] [background-size:40px_40px]" />
        
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12 xl:px-0 relative z-10">
          <ScrollReveal variant="fadeUp">
            <div className="mb-12 max-w-2xl text-center mx-auto">
              <p className="text-xs font-extrabold tracking-[0.2em] text-[#f3d47c] uppercase">Our Purpose</p>
              <h2 className="mt-3 font-cormorant text-4xl sm:text-5xl font-bold leading-tight">Vision &amp; Mission</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Vision */}
            <ScrollReveal variant="fadeUp">
              <article className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#012b6b] to-[#012257] p-8 sm:p-10 text-white border border-[#c59b27]/40 shadow-2xl h-full flex flex-col justify-between">
                <div className="absolute -right-14 -top-14 h-44 w-44 rounded-full border border-[#c59b27]/25" />
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#f3d47c] text-[#012257] flex items-center justify-center mb-6 shadow-lg">
                    <Eye className="h-6 w-6 stroke-[2.2]" />
                  </div>
                  <p className="text-xs font-extrabold tracking-[0.18em] text-[#f3d47c] uppercase">Our Vision</p>
                  <h3 className="mt-3 font-cormorant text-2xl sm:text-3xl font-bold leading-snug">
                    &ldquo;Protecting businesses, families, and futures through intelligent, unbiased risk management.&rdquo;
                  </h3>
                </div>
                <p className="mt-6 text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                  We empower our clients with transparent, forward-looking guidance so they can operate and live with complete confidence.
                </p>
              </article>
            </ScrollReveal>

            {/* Mission */}
            <ScrollReveal variant="fadeUp" delay={0.12}>
              <article className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#012b6b] to-[#012257] p-8 sm:p-10 text-white border border-[#c59b27]/40 shadow-2xl h-full flex flex-col justify-between">
                <div className="absolute -right-14 -top-14 h-44 w-44 rounded-full border border-[#c59b27]/25" />
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#c59b27] text-[#012257] flex items-center justify-center mb-6 shadow-lg">
                    <Target className="h-6 w-6 stroke-[2.2]" />
                  </div>
                  <p className="text-xs font-extrabold tracking-[0.18em] text-[#f3d47c] uppercase">Our Mission</p>
                  <h3 className="mt-3 font-cormorant text-2xl sm:text-3xl font-bold leading-snug">
                    &ldquo;To deliver end-to-end risk protection — from discovery to claims to renewal — with the integrity of a 75-year legacy and the responsiveness of a dedicated relationship team.&rdquo;
                  </h3>
                </div>
                <p className="mt-6 text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                  We act as long-term allies, negotiating optimal terms and standing by our clients during critical claim events.
                </p>
              </article>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
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

      {/* Our Journey & Legacy Timeline */}
      <section className="overflow-hidden bg-[#071a38] py-20 text-white sm:py-24 lg:py-28">
        <div className="mx-auto w-full max-w-[1380px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <ScrollReveal variant="fadeUp">
            <div className="max-w-2xl">
              <p className="text-xs font-extrabold tracking-[0.2em] text-[#f3d47c] uppercase">
                Our Journey
              </p>
              <h2 className="mt-3 font-cormorant text-4xl font-bold leading-none tracking-[-0.025em] sm:text-5xl">
                A Legacy of Trust. A Future of Protection.
              </h2>
            </div>
          </ScrollReveal>
          <div className="relative mt-12 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-5 md:gap-5">
            <div className="absolute left-0 right-0 top-3 hidden h-px bg-gradient-to-r from-[#c59b27] via-[#f3d47c] to-[#c59b27] md:block" />
            {ourJourneyTimeline.map((item, i) => (
              <ScrollReveal key={item.title} variant="fadeUp" delay={i * 0.08}>
                <article className="relative pt-0 md:pt-10">
                  <span className="absolute left-0 top-0 hidden h-6 w-6 -translate-y-1/2 rounded-full border-[5px] border-[#071a38] bg-[#f3d47c] md:block" />
                  <p className="font-cormorant text-2xl font-bold text-[#f3d47c]">
                    {item.step}
                  </p>
                  <h3 className="mt-3 text-base font-extrabold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-300">
                    {item.text}
                  </p>
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
