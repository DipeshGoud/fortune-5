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
  Shield,
  Globe,
} from "lucide-react";

const navSections = [
  { id: "intro", title: "Introduction" },
  { id: "info-collect", title: "1. Information We Collect" },
  { id: "why-collect", title: "2. How We Use Your Information" },
  { id: "sharing-info", title: "3. Sharing of Information" },
  { id: "cookies-tech", title: "4. Cookies & Third-Party Services" },
  { id: "data-security", title: "5. Data Security" },
  { id: "data-retention", title: "6. Data Retention" },
  { id: "external-links", title: "7. External Links" },
  { id: "about-policy", title: "8. Changes to This Policy" },
  { id: "governing-law", title: "9. Governing Law" },
  { id: "contact-us", title: "10. Contact Us" },
];

export default function PrivacyContent() {
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
              <Link href="/" prefetch={false} className="transition-colors hover:text-[#f5d77f]">
                Home
              </Link>
              <span className="h-px w-5 bg-[#c59b27]" />
              <span className="text-[#f5d77f]">Privacy Policy</span>
            </nav>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#c59b27]/30 bg-white/5 px-4 py-1.5 backdrop-blur mb-4">
                  <ShieldCheck className="h-4 w-4 text-[#f5d77f]" />
                  <span className="text-[10px] font-extrabold tracking-[0.16em] text-[#f5d77f] uppercase">
                    Legal &amp; Data Protection
                  </span>
                </div>

                <h1 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl font-bold leading-[0.98] tracking-[-0.03em] text-white">
                  Privacy <span className="text-[#f3d47c]">Policy</span>
                </h1>

                <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-300">
                  How Fortune 5 Risk Management Solutions LLP collects, handles, and safeguards your corporate and personal information.
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
                  href="/terms"
                  prefetch={false}
                  className="inline-flex items-center gap-2 rounded-full bg-[#f3d47c] px-4 py-2.5 text-xs font-extrabold text-[#012257] uppercase tracking-wider hover:bg-white transition"
                >
                  Terms &amp; Conditions <ArrowRight className="w-3.5 h-3.5" />
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
                Policy Navigation
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
                href="/terms"
                prefetch={false}
                className="flex items-center justify-between py-2 px-3.5 text-xs font-semibold text-slate-700 hover:text-[#012257] rounded-xl hover:bg-white/60 transition"
              >
                <span>Terms of Service</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#c59b27]" />
              </Link>
              <Link
                href="/contact"
                prefetch={false}
                className="flex items-center justify-between py-2 px-3.5 text-xs font-semibold text-slate-700 hover:text-[#012257] rounded-xl hover:bg-white/60 transition"
              >
                <span>Contact Privacy Desk</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#c59b27]" />
              </Link>
            </div>
          </aside>

          {/* ===== RIGHT CONTENT COLUMN (Width 8.5 / 12) ===== */}
          <div className="lg:col-span-8 xl:col-span-9 max-w-3xl space-y-10">

            {/* HEADER HERO STATEMENT AREA */}
            <section id="intro" className="scroll-mt-32 space-y-5">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#c59b27]">
                FORTUNE 5 PRIVACY POLICY
              </p>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-cormorant font-bold text-[#012257] leading-snug tracking-tight">
                When you use our services, you’re trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control.
              </h2>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                Fortune 5 Risk Management Solutions LLP (&quot;Fortune 5&quot;, &quot;we&quot;, &quot;us&quot; or &quot;our&quot;) respects your privacy and is committed to protecting the information you share with us. This Privacy Policy explains how we collect, use and protect your information when you visit <strong className="text-[#012257]">fortune5.in</strong>, contact us, or use our risk management and insurance advisory services.
              </p>

              {/* Privacy Governance Card */}
              <div className="rounded-2xl border border-[#ede8d6] bg-white p-5 sm:p-6 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#012257]/5 border border-[#c59b27]/20 text-[#c59b27]">
                    <Shield className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-[#012257]">Privacy &amp; Data Governance</h3>
                    <p className="text-xs text-slate-500">Have questions regarding your corporate policy data or risk records?</p>
                  </div>
                </div>
                <Link
                  href="/contact"
                  prefetch={false}
                  className="shrink-0 inline-flex items-center gap-1.5 text-xs font-extrabold text-[#012257] hover:text-[#c59b27] transition"
                >
                  Contact Privacy Desk <ExternalLink className="w-3.5 h-3.5 text-[#c59b27]" />
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

            {/* SECTION 1: INFORMATION WE COLLECT */}
            <section id="info-collect" className="scroll-mt-32 space-y-4">
              <h3 className="text-xl sm:text-2xl font-cormorant font-bold text-[#012257]">
                1. Information We Collect
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                We collect information to provide better risk management advisory, obtain accurate insurance quotes, and assist you with claims servicing.
              </p>
              
              <p className="text-sm leading-relaxed text-slate-700">
                We may collect information that you voluntarily provide to us, including:
              </p>

              <ul className="list-disc list-outside pl-5 space-y-1.5 text-sm text-slate-700 marker:text-[#c59b27]">
                <li><strong className="text-slate-900">Name</strong> and contact designation</li>
                <li><strong className="text-slate-900">Mobile number</strong> and telephone contact details</li>
                <li><strong className="text-slate-900">Email address</strong></li>
                <li><strong className="text-slate-900">Company or organisation details</strong></li>
                <li><strong className="text-slate-900">Insurance requirements</strong> and risk specifications</li>
                <li><strong className="text-slate-900">Policy or insurance-related information</strong></li>
                <li><strong className="text-slate-900">Documents or information</strong> you choose to share with us for audits or quotes</li>
              </ul>

              <div className="rounded-xl bg-white border border-[#ede8d6] p-4 text-xs sm:text-sm text-slate-700 leading-relaxed shadow-2xs">
                <strong className="text-[#012257] font-bold block mb-1">Information we collect automatically:</strong>
                We may also automatically collect basic technical information such as IP address, browser type, device information, and Website usage data to maintain platform reliability and cyber security.
              </div>
            </section>

            <hr className="border-[#ede8d6]" />

            {/* SECTION 2: HOW WE USE YOUR INFORMATION */}
            <section id="why-collect" className="scroll-mt-32 space-y-4">
              <h3 className="text-xl sm:text-2xl font-cormorant font-bold text-[#012257]">
                2. How We Use Your Information
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                We use the information we collect from all of our services for the following purposes:
              </p>

              <ul className="list-disc list-outside pl-5 space-y-2 text-sm text-slate-700 marker:text-[#c59b27]">
                <li><strong className="text-slate-900">Respond to enquiries and requests:</strong> Communicating with you regarding inquiries, risk assessments, and consultations.</li>
                <li><strong className="text-slate-900">Provide insurance and risk-management services:</strong> Analyzing risk exposures and recommending suitable coverage structures.</li>
                <li><strong className="text-slate-900">Obtain and communicate insurance quotations:</strong> Working with insurers to secure competitive terms.</li>
                <li><strong className="text-slate-900">Assist with servicing and claims:</strong> Supporting policy endorsements, renewals, documentation, and claims advocacy.</li>
                <li><strong className="text-slate-900">Communicate with you:</strong> Sending notices regarding service updates, policy milestones, or renewal reviews.</li>
                <li><strong className="text-slate-900">Improve our Website and services:</strong> Evaluating site usage to enhance our tools and user experience.</li>
                <li><strong className="text-slate-900">Maintain records:</strong> Keeping necessary business, operational, and regulatory records.</li>
                <li><strong className="text-slate-900">Legal compliance:</strong> Complying with applicable laws, statutory duties, and regulatory directives in India.</li>
              </ul>
            </section>

            <hr className="border-[#ede8d6]" />

            {/* SECTION 3: SHARING OF INFORMATION */}
            <section id="sharing-info" className="scroll-mt-32 space-y-4">
              <h3 className="text-xl sm:text-2xl font-cormorant font-bold text-[#012257]">
                3. Sharing of Information
              </h3>
              
              <div className="rounded-xl border border-emerald-200 bg-emerald-50/70 p-4 text-xs sm:text-sm text-emerald-950 font-semibold flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-600 shrink-0" />
                <span>We do NOT sell your personal information: Fortune 5 does not sell, rent, or trade your personal or business data to third parties.</span>
              </div>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                Where necessary, we may share relevant information with insurers, insurance service providers, claims-related professionals, technology providers, and other parties involved in providing the services requested by you.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                Information may also be disclosed where required by law or by a regulatory authority under Indian jurisdiction.
              </p>
            </section>

            <hr className="border-[#ede8d6]" />

            {/* SECTION 4: COOKIES AND THIRD-PARTY SERVICES */}
            <section id="cookies-tech" className="scroll-mt-32 space-y-4">
              <h3 className="text-xl sm:text-2xl font-cormorant font-bold text-[#012257]">
                4. Cookies and Third-Party Services
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                Our Website may use cookies and similar technologies to improve Website functionality, security, and performance.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                We may also use third-party services such as hosting, analytics, communication, and other technology providers. Their use of information may be governed by their respective privacy policies.
              </p>
            </section>

            <hr className="border-[#ede8d6]" />

            {/* SECTION 5: DATA SECURITY */}
            <section id="data-security" className="scroll-mt-32 space-y-4">
              <h3 className="text-xl sm:text-2xl font-cormorant font-bold text-[#012257]">
                5. Data Security
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                We build security into our systems to protect your information. We take reasonable administrative, physical, and technical measures to protect the information provided to us from unauthorised access, misuse, loss, or disclosure.
              </p>
              <p className="text-xs sm:text-sm text-slate-500 italic bg-white p-3 rounded-lg border border-[#ede8d6]">
                Note: While we employ robust security practices, no method of electronic transmission over the internet or storage can be guaranteed to be completely secure.
              </p>
            </section>

            <hr className="border-[#ede8d6]" />

            {/* SECTION 6: DATA RETENTION */}
            <section id="data-retention" className="scroll-mt-32 space-y-4">
              <h3 className="text-xl sm:text-2xl font-cormorant font-bold text-[#012257]">
                6. Data Retention
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                We retain information only for as long as reasonably necessary for providing our services, maintaining business records, meeting legal or regulatory requirements, resolving disputes, and protecting our legitimate business interests.
              </p>
            </section>

            <hr className="border-[#ede8d6]" />

            {/* SECTION 7: EXTERNAL LINKS */}
            <section id="external-links" className="scroll-mt-32 space-y-4">
              <h3 className="text-xl sm:text-2xl font-cormorant font-bold text-[#012257]">
                7. External Links
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                Our Website may contain links to third-party websites, including insurer websites and other external platforms. Fortune 5 is not responsible for the privacy practices or content of such third-party websites.
              </p>
            </section>

            <hr className="border-[#ede8d6]" />

            {/* SECTION 8: CHANGES TO THIS POLICY */}
            <section id="about-policy" className="scroll-mt-32 space-y-4">
              <h3 className="text-xl sm:text-2xl font-cormorant font-bold text-[#012257]">
                8. Changes to This Policy
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                We may update this Privacy Policy from time to time. Any updated version will be published on <strong className="text-[#012257]">fortune5.in</strong> with the revised &quot;Last Updated&quot; date.
              </p>
            </section>

            <hr className="border-[#ede8d6]" />

            {/* SECTION 9: GOVERNING LAW */}
            <section id="governing-law" className="scroll-mt-32 space-y-4">
              <h3 className="text-xl sm:text-2xl font-cormorant font-bold text-[#012257]">
                9. Governing Law
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                This Privacy Policy shall be governed by the applicable laws of India. Any disputes arising from or in connection with this policy shall be subject to the jurisdiction of competent courts in Mumbai, Maharashtra.
              </p>
            </section>

            <hr className="border-[#ede8d6]" />

            {/* SECTION 10: CONTACT US */}
            <section id="contact-us" className="scroll-mt-32 space-y-4">
              <h3 className="text-xl sm:text-2xl font-cormorant font-bold text-[#012257]">
                10. Contact Us
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                For any questions regarding this Privacy Policy or how your data is handled, please contact:
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
                href="/terms"
                prefetch={false}
                className="inline-flex items-center gap-1.5 text-[#012257] font-bold hover:text-[#c59b27] transition"
              >
                Read Terms of Service <ArrowRight className="w-3.5 h-3.5 text-[#c59b27]" />
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
