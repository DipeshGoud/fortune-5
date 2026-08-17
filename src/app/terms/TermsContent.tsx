"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import {
  ShieldCheck,
  Printer,
  Copy,
  Check,
  ExternalLink,
  Mail,
  Phone,
  ArrowRight,
  Scale,
  Globe,
} from "lucide-react";

const navSections = [
  { id: "intro", title: "Introduction" },
  { id: "website-info", title: "1. Website Information" },
  { id: "insurance-services", title: "2. Insurance Services" },
  { id: "user-info", title: "3. User Information" },
  { id: "third-party", title: "4. Third-Party Links" },
  { id: "availability", title: "5. Website Availability" },
  { id: "liability", title: "6. Liability" },
  { id: "intellectual-property", title: "7. Intellectual Property" },
  { id: "changes", title: "8. Changes" },
  { id: "governing-law", title: "9. Governing Law" },
  { id: "contact-us", title: "10. Contact" },
];

export default function TermsContent() {
  const [activeSection, setActiveSection] = useState("intro");
  const [copiedLink, setCopiedLink] = useState(false);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 110;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  // High-performance scroll listener using requestAnimationFrame for zero-lag smooth tracking
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPos = window.scrollY + 160;
          for (const s of navSections) {
            const el = document.getElementById(s.id);
            if (el) {
              const top = el.offsetTop;
              const height = el.offsetHeight;
              if (scrollPos >= top && scrollPos < top + height) {
                setActiveSection(s.id);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-[#f7f6f2] text-[#071a38] font-sans antialiased selection:bg-amber-100 selection:text-amber-900 print:bg-white print:text-black">
      <div className="print:hidden">
        <TopBar />
        <Navbar />
      </div>

      {/* ===== HERO BANNER ===== */}
      <section className="relative isolate overflow-hidden bg-[#012257] pt-[154px] sm:pt-[172px] lg:pt-[186px] pb-12 sm:pb-16 print:hidden">
        {/* Subtle grid texture & glows */}
        <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(245,215,127,0.28)_1px,transparent_1px),linear-gradient(90deg,rgba(245,215,127,0.28)_1px,transparent_1px)] [background-size:56px_56px]" />
        <div className="absolute -left-28 top-16 h-[26rem] w-[26rem] rounded-full bg-[#c59b27]/18 blur-3xl" />
        <div className="absolute -right-28 top-0 h-[30rem] w-[30rem] rounded-full border border-[#c59b27]/18" />

        <div className="relative mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <ScrollReveal variant="fadeUp">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-bold tracking-[0.18em] text-slate-300 uppercase">
              <Link href="/" className="transition-colors hover:text-[#f5d77f]">
                Home
              </Link>
              <span className="h-px w-5 bg-[#c59b27]" />
              <span className="text-[#f5d77f]">Terms &amp; Conditions</span>
            </nav>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#c59b27]/30 bg-white/5 px-4 py-1.5 backdrop-blur mb-4">
                  <Scale className="h-4 w-4 text-[#f5d77f]" />
                  <span className="text-[10px] font-extrabold tracking-[0.16em] text-[#f5d77f] uppercase">
                    Legal Agreement &amp; Governance
                  </span>
                </div>

                <h1 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl font-bold leading-[0.98] tracking-[-0.03em] text-white">
                  Terms &amp; <span className="text-[#f3d47c]">Conditions</span>
                </h1>

                <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-300">
                  Official terms and conditions governing the access, browsing, and use of Fortune 5 Risk Management Solutions LLP website and services.
                </p>
              </div>

              {/* Utility actions */}
              <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                <button
                  onClick={handlePrint}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2.5 text-xs font-extrabold text-white uppercase tracking-wider backdrop-blur hover:bg-white hover:text-[#012257] transition"
                >
                  <Printer className="w-3.5 h-3.5 text-[#f3d47c]" /> Print / PDF
                </button>
                <button
                  onClick={handleCopyLink}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2.5 text-xs font-extrabold text-white uppercase tracking-wider backdrop-blur hover:bg-white hover:text-[#012257] transition"
                >
                  {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-[#f3d47c]" />}
                  {copiedLink ? "Copied" : "Share"}
                </button>
                <Link
                  href="/privacy"
                  className="inline-flex items-center gap-2 rounded-full bg-[#f3d47c] px-4 py-2.5 text-xs font-extrabold text-[#012257] uppercase tracking-wider hover:bg-white transition"
                >
                  Privacy Policy <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== 2-COLUMN LAYOUT ===== */}
      <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12 xl:px-16 py-10 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start relative">

          {/* ===== LEFT STICKY SIDEBAR (Width 3.5 / 12) ===== */}
          <aside className="lg:col-span-4 xl:col-span-3 sticky top-28 self-start max-h-[calc(100vh-8rem)] overflow-y-auto space-y-6 hidden lg:block print:hidden border-r border-[#e2dcce] pr-6 no-scrollbar">
            <div className="pb-2">
              <p className="text-[11px] font-extrabold tracking-[0.18em] text-[#012257] uppercase mb-4 px-1">
                Terms Navigation
              </p>

              <nav className="space-y-1">
                {navSections.map((sec) => {
                  const isActive = activeSection === sec.id;
                  return (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      onClick={(e) => scrollToSection(e, sec.id)}
                      className={`block py-2 px-3.5 text-xs sm:text-[13px] rounded-xl transition-all duration-150 ${
                        isActive
                          ? "bg-[#012257]/10 text-[#012257] font-bold"
                          : "text-slate-600 hover:text-[#012257] hover:bg-white/60 font-medium"
                      }`}
                    >
                      {sec.title}
                    </a>
                  );
                })}
              </nav>
            </div>

            <div className="pt-2 border-t border-[#e2dcce] space-y-1">
              <Link
                href="/privacy"
                className="flex items-center justify-between py-2 px-3.5 text-xs font-semibold text-slate-700 hover:text-[#012257] rounded-xl hover:bg-white/60 transition"
              >
                <span>Privacy Policy</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#c59b27]" />
              </Link>
              <Link
                href="/contact"
                className="flex items-center justify-between py-2 px-3.5 text-xs font-semibold text-slate-700 hover:text-[#012257] rounded-xl hover:bg-white/60 transition"
              >
                <span>Corporate Legal Desk</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#c59b27]" />
              </Link>
            </div>
          </aside>

          {/* ===== RIGHT CONTENT COLUMN (Width 8.5 / 12) ===== */}
          <div className="lg:col-span-8 xl:col-span-9 max-w-3xl space-y-10">

            {/* HEADER HERO STATEMENT AREA */}
            <section id="intro" className="scroll-mt-32 space-y-5">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#c59b27]">
                FORTUNE 5 TERMS &amp; CONDITIONS
              </p>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-cormorant font-bold text-[#012257] leading-snug tracking-tight">
                Welcome to fortune5.in, the official website of Fortune 5 Risk Management Solutions LLP (&quot;Fortune 5&quot;, &quot;we&quot;, &quot;us&quot; or &quot;our&quot;).
              </h2>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                By using this Website, you agree to the following Terms &amp; Conditions. These terms establish the legal parameters under which Fortune 5 provides website information, risk management audits, advisory communications, and insurance placement coordination.
              </p>

              {/* Legal Governance Card */}
              <div className="rounded-2xl border border-[#ede8d6] bg-white p-5 sm:p-6 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#012257]/5 border border-[#c59b27]/20 text-[#c59b27]">
                    <Scale className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-[#012257]">Terms of Service &amp; Governance</h3>
                    <p className="text-xs text-slate-500">Need specific clarifications regarding our risk advisory engagement?</p>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="shrink-0 inline-flex items-center gap-1.5 text-xs font-extrabold text-[#012257] hover:text-[#c59b27] transition"
                >
                  Contact Legal Desk <ExternalLink className="w-3.5 h-3.5 text-[#c59b27]" />
                </Link>
              </div>

              {/* Metadata Sub-line */}
              <div className="pt-2 text-xs text-slate-500 font-medium flex flex-wrap items-center gap-2">
                <span>Effective Date: <strong className="text-slate-800">18 August 2026</strong></span>
                <span>•</span>
                <span>Last Updated: <strong className="text-slate-800">18 August 2026</strong></span>
                <span>•</span>
                <button onClick={handlePrint} className="text-[#012257] font-bold hover:underline">
                  Download PDF
                </button>
              </div>
            </section>

            <hr className="border-[#ede8d6]" />

            {/* SECTION 1: WEBSITE INFORMATION */}
            <section id="website-info" className="scroll-mt-32 space-y-4">
              <h3 className="text-xl sm:text-2xl font-cormorant font-bold text-[#012257]">
                1. Website Information
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                The information on this Website is provided for general information purposes. While we make reasonable efforts to keep it accurate and updated, Fortune 5 does not guarantee that all information is complete, current or error-free.
              </p>
            </section>

            <hr className="border-[#ede8d6]" />

            {/* SECTION 2: INSURANCE SERVICES */}
            <section id="insurance-services" className="scroll-mt-32 space-y-4">
              <h3 className="text-xl sm:text-2xl font-cormorant font-bold text-[#012257]">
                2. Insurance Services
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                Information on the Website does not guarantee any insurance policy, quotation, premium, coverage or claim outcome. All insurance products and claims are subject to the terms, conditions and approval of the respective insurer.
              </p>
            </section>

            <hr className="border-[#ede8d6]" />

            {/* SECTION 3: USER INFORMATION */}
            <section id="user-info" className="scroll-mt-32 space-y-4">
              <h3 className="text-xl sm:text-2xl font-cormorant font-bold text-[#012257]">
                3. User Information
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                You are responsible for providing accurate and complete information when contacting Fortune 5 or requesting our services.
              </p>
            </section>

            <hr className="border-[#ede8d6]" />

            {/* SECTION 4: THIRD-PARTY LINKS */}
            <section id="third-party" className="scroll-mt-32 space-y-4">
              <h3 className="text-xl sm:text-2xl font-cormorant font-bold text-[#012257]">
                4. Third-Party Links
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                Our Website may contain links to third-party websites, including insurers and service providers. Fortune 5 is not responsible for their content, services or privacy practices.
              </p>
            </section>

            <hr className="border-[#ede8d6]" />

            {/* SECTION 5: WEBSITE AVAILABILITY */}
            <section id="availability" className="scroll-mt-32 space-y-4">
              <h3 className="text-xl sm:text-2xl font-cormorant font-bold text-[#012257]">
                5. Website Availability
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                We aim to keep the Website available and updated but do not guarantee uninterrupted or error-free access.
              </p>
            </section>

            <hr className="border-[#ede8d6]" />

            {/* SECTION 6: LIABILITY */}
            <section id="liability" className="scroll-mt-32 space-y-4">
              <h3 className="text-xl sm:text-2xl font-cormorant font-bold text-[#012257]">
                6. Liability
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                To the maximum extent permitted by applicable law, Fortune 5 shall not be responsible for losses arising from reliance on Website information, technical issues, or actions and decisions of third parties.
              </p>
            </section>

            <hr className="border-[#ede8d6]" />

            {/* SECTION 7: INTELLECTUAL PROPERTY */}
            <section id="intellectual-property" className="scroll-mt-32 space-y-4">
              <h3 className="text-xl sm:text-2xl font-cormorant font-bold text-[#012257]">
                7. Intellectual Property
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                All content, logos, graphics and materials on this Website belong to or are licensed to Fortune 5. Unauthorised use or reproduction is not permitted.
              </p>
            </section>

            <hr className="border-[#ede8d6]" />

            {/* SECTION 8: CHANGES */}
            <section id="changes" className="scroll-mt-32 space-y-4">
              <h3 className="text-xl sm:text-2xl font-cormorant font-bold text-[#012257]">
                8. Changes
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                Fortune 5 may update these Terms &amp; Conditions from time to time. Updates will be published on <strong className="text-[#012257]">fortune5.in</strong>.
              </p>
            </section>

            <hr className="border-[#ede8d6]" />

            {/* SECTION 9: GOVERNING LAW */}
            <section id="governing-law" className="scroll-mt-32 space-y-4">
              <h3 className="text-xl sm:text-2xl font-cormorant font-bold text-[#012257]">
                9. Governing Law
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                These Terms &amp; Conditions are governed by the applicable laws of India. Any disputes shall be subject to the jurisdiction of the competent courts in Mumbai, Maharashtra, subject to applicable law.
              </p>
            </section>

            <hr className="border-[#ede8d6]" />

            {/* SECTION 10: CONTACT */}
            <section id="contact-us" className="scroll-mt-32 space-y-4">
              <h3 className="text-xl sm:text-2xl font-cormorant font-bold text-[#012257]">
                10. Contact
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                For any official inquiries regarding these Terms &amp; Conditions, please contact:
              </p>

              <div className="rounded-2xl border border-[#ede8d6] bg-white p-6 space-y-3 text-sm shadow-sm">
                <p className="font-bold text-[#012257]">Fortune 5 Risk Management Solutions LLP</p>
                <p className="text-slate-600 leading-relaxed">
                  106-107, E-Square, 1st Floor, Subhash Road,<br />
                  Vile Parle (E), Mumbai - 400057, Maharashtra, India.
                </p>

                <div className="pt-3 border-t border-[#ede8d6] flex flex-wrap items-center gap-6 text-xs text-slate-700 font-semibold">
                  <a href="mailto:insure@fortune5.in" className="text-[#012257] hover:text-[#c59b27] flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#c59b27]" /> insure@fortune5.in
                  </a>
                  <a href="tel:+919820710067" className="text-[#012257] hover:text-[#c59b27] flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#c59b27]" /> +91 98207 10067
                  </a>
                  <a href="https://fortune5.in" className="text-[#012257] hover:text-[#c59b27] flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-[#c59b27]" /> fortune5.in
                  </a>
                </div>
              </div>
            </section>

            {/* BOTTOM NAV FOOTER */}
            <div className="pt-8 border-t border-[#ede8d6] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
              <p>© {new Date().getFullYear()} Fortune 5 Risk Management Solutions LLP.</p>
              <Link
                href="/privacy"
                className="inline-flex items-center gap-1.5 text-[#012257] font-bold hover:text-[#c59b27] transition"
              >
                Read Privacy Policy <ArrowRight className="w-3.5 h-3.5 text-[#c59b27]" />
              </Link>
            </div>

          </div>

        </div>
      </div>

      <div className="print:hidden">
        <Footer />
      </div>
    </main>
  );
}
