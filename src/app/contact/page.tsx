"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  Plus,
  Minus,
  MessageCircle,
  Headset,
  Navigation,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface FormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const faqs = [
  {
    question: "What types of insurance does Fortune 5 offer?",
    answer:
      "Fortune 5 offers a wide range of Retail Insurance (Health, Motor, Travel, Home, and Life Insurance) as well as Corporate Risk Solutions (Fire, Employee Benefits, Liability, Marine Cargo, Engineering, and Customized Niche Risk Agreements).",
  },
  {
    question: "How can I purchase an insurance policy from Fortune 5?",
    answer:
      "You can request a consultation by filling out the contact form above, emailing us at insure@fortune5.in, or calling us directly at +91-98208 10067. Our advisors will audit your risks and recommend the best-suited coverage options.",
  },
  {
    question: "How do I file a claim?",
    answer:
      "In case of a claim, contact our dedicated Claim Advocacy team immediately at +91-98208 10067 or email claims@fortune5.in. We will guide you through the process, coordinate with the insurer/surveyor, and manage the documentation to ensure quick approval.",
  },
  {
    question: "What documents are required to file a claim?",
    answer:
      "The standard documents include a completed claim form, the policy schedule, proof of loss/damage, and relevant bills/estimates. Specific details depend on the policy type (e.g., FIR for theft, medical reports for health). Our team will provide a tailored checklist for your specific case.",
  },
  {
    question: "What is a cashless claim, and how does it work?",
    answer:
      "A cashless claim allows you to receive treatments or repairs at network hospitals or garages without paying upfront (except compulsory deductibles). The insurer pays the service provider directly, provided the pre-authorization is approved by the TPA/Insurer.",
  },
];

function ContactInner() {
  const searchParams = useSearchParams();
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    const svc = searchParams.get("service");
    if (svc) setForm((p) => ({ ...p, subject: svc }));
  }, [searchParams]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validate = (): boolean => {
    const next: Partial<FormState> = {};
    if (!form.name.trim()) next.name = "Please enter your name";
    if (!form.email.trim()) next.email = "Please enter your email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Enter a valid email";
    if (!form.phone.trim()) next.phone = "Please enter your phone number";
    if (!form.message.trim()) next.message = "Please enter a message";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    setForm(initialForm);
    setTimeout(() => setSubmitted(false), 6000);
  };

  const labelCls = "block text-[10px] font-extrabold tracking-[0.16em] text-[#0b2246] uppercase mb-2";
  const inputBase =
    "w-full rounded-xl border bg-[#fcfcfb] px-4 py-3.5 text-sm font-medium text-slate-800 placeholder:text-slate-400 outline-none transition focus:bg-white";
  const inputBorder = (hasErr: boolean) =>
    hasErr
      ? "border-red-300 focus:border-red-400 focus:ring-4 focus:ring-red-100"
      : "border-[#d8d3c4] focus:border-[#c59b27] focus:ring-4 focus:ring-[#f3d47c]/40";

  return (
    <main className="min-h-screen bg-[#f7f6f2] text-slate-900 flex flex-col selection:bg-amber-100 selection:text-amber-900 overflow-x-hidden">
      <TopBar />
      <Navbar />

      {/* ===== Contact Hero ===== */}
      <section className="relative isolate overflow-hidden bg-[#041735] pt-[154px] sm:pt-[172px] lg:pt-[186px]">
        {/* subtle texture */}
        <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(245,215,127,0.28)_1px,transparent_1px),linear-gradient(90deg,rgba(245,215,127,0.28)_1px,transparent_1px)] [background-size:56px_56px]" />
        <div className="absolute -left-28 top-16 h-[26rem] w-[26rem] rounded-full bg-[#c59b27]/18 blur-3xl" />
        <div className="absolute -right-28 top-0 h-[30rem] w-[30rem] rounded-full border border-[#c59b27]/18" />

        <div className="relative mx-auto grid w-full max-w-[1380px] grid-cols-1 items-center gap-10 px-5 pb-14 sm:px-8 sm:pb-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12 lg:px-12 lg:pb-20 xl:px-16">
          {/* Left copy */}
          <ScrollReveal variant="fadeUp" className="w-full">
            <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-bold tracking-[0.18em] text-slate-300 uppercase">
              <Link href="/" className="transition-colors hover:text-[#f5d77f]">
                Home
              </Link>
              <span className="h-px w-5 bg-[#c59b27]" />
              <span className="text-[#f5d77f]">Contact Us</span>
            </nav>

            <div className="inline-flex items-center gap-2 rounded-full border border-[#c59b27]/30 bg-white/5 px-4 py-1.5 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#f3d47c] shadow-[0_0_12px_rgba(243,212,124,0.9)]" />
              <span className="text-[10px] font-extrabold tracking-[0.16em] text-[#f5d77f] uppercase">Concierge • Claims • Advisory</span>
            </div>

            <h1 className="mt-6 font-cormorant text-5xl font-bold leading-[0.95] tracking-[-0.035em] text-white sm:text-6xl lg:text-7xl">
              Get in <span className="text-[#f3d47c]">touch.</span>
              <span className="mt-4 block text-[1.6rem] font-normal leading-none tracking-[0.02em] text-slate-300 sm:text-[2rem] lg:text-[2.25rem]">
                We reply within one business day.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
              People you trust. Advice that works. Tell us what you need — a new programme, a renewal review, or urgent claims help.
            </p>

            {/* quick contact chips */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="tel:+919820810067"
                className="group inline-flex items-center gap-2.5 rounded-full bg-[#f3d47c] px-6 py-3 text-xs font-extrabold tracking-[0.12em] text-[#041735] uppercase shadow-lg transition hover:bg-white"
              >
                <Phone className="h-3.5 w-3.5" /> +91-98208 10067 <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="mailto:insure@fortune5.in"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-xs font-extrabold tracking-[0.12em] text-white uppercase backdrop-blur transition hover:border-[#f3d47c]/50 hover:text-[#f3d47c]"
              >
                <Mail className="h-3.5 w-3.5" /> insure@fortune5.in
              </a>
              <a
                href="https://wa.me/919820810067"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-xs font-extrabold tracking-[0.12em] text-white uppercase backdrop-blur transition hover:border-[#f3d47c]/50 hover:text-[#f3d47c]"
              >
                <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
              </a>
            </div>

            {/* micro trust bar */}
            <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-white/10 pt-6 text-xs">
              <span className="inline-flex items-center gap-2 font-semibold text-slate-300">
                <ShieldCheck className="h-4 w-4 text-[#f3d47c]" /> IRDAI Licensed Broker
              </span>
              <span className="hidden h-3 w-px bg-white/15 sm:block" />
              <span className="inline-flex items-center gap-2 font-semibold text-slate-300">
                <Headset className="h-4 w-4 text-[#f3d77f]" /> Claims advocacy included
              </span>
              <span className="hidden h-3 w-px bg-white/15 sm:block" />
              <span className="inline-flex items-center gap-2 font-semibold text-slate-300">
                <Clock className="h-4 w-4 text-[#f3d77f]" /> Mon–Sat, 10am–7:30pm
              </span>
            </div>
          </ScrollReveal>

          {/* Right: contact card preview */}
          <ScrollReveal variant="fadeLeft" delay={0.15} className="w-full">
          <div className="relative mx-auto w-full max-w-[480px] lg:mx-0 lg:ml-auto">
            <div className="absolute -top-6 -right-6 h-40 w-40 rounded-full bg-[#f3d47c]/15 blur-2xl" />
            <div className="relative rounded-[28px] border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-3 backdrop-blur">
              <div className="rounded-[22px] bg-white p-5 shadow-2xl sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="inline-flex items-center gap-1.5 text-[10px] font-extrabold tracking-[0.16em] text-[#a47a13] uppercase">
                      <Sparkles className="h-3.5 w-3.5" /> Visit us in Mumbai
                    </p>
                    <h3 className="mt-1 font-cormorant text-2xl font-bold tracking-[-0.02em] text-[#0b2246]">Fortune 5, Vile Parle (E)</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      106-107, E-Square, 1st Floor, Subhash Road,
                      <br /> Vile Parle (East), Mumbai — 400057
                    </p>
                  </div>
                  <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#f3d47c] bg-[#041735] text-[#f3d47c] sm:flex">
                    <Navigation className="h-5 w-5" />
                  </div>
                </div>

                <div className="relative mt-5 overflow-hidden rounded-2xl border border-[#e8e2d0] bg-[#f7f6f2]">
                  <div className="absolute inset-0 opacity-[0.7] [background-image:linear-gradient(rgba(11,34,70,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(11,34,70,0.06)_1px,transparent_1px)] [background-size:28px_28px]" />
                  <div className="relative h-[168px] w-full">
                    <div className="absolute left-1/2 top-0 h-full w-px bg-[#c59b27]/30" />
                    <div className="absolute left-0 top-1/2 h-px w-full bg-[#c59b27]/30" />
                    <div className="absolute left-[22%] top-[28%] h-16 w-20 rounded-lg border border-[#c59b27]/30 bg-white/70 backdrop-blur" />
                    <div className="absolute right-[18%] bottom-[18%] h-10 w-28 rounded-lg border border-[#0b2246]/10 bg-white/80" />
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="relative">
                        <span className="absolute -inset-3 rounded-full bg-[#f3d47c]/40 blur-md" />
                        <span className="relative flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-[#041735] text-[#f3d47c] shadow-xl">
                          <MapPin className="h-5 w-5" />
                        </span>
                      </div>
                      <div className="mx-auto mt-1 h-2 w-10 rounded-full bg-black/10 blur-[2px]" />
                    </div>
                  </div>
                  <a
                    href="https://www.google.com/maps/search/E-Square+Subhash+Road+Vile+Parle+East+Mumbai"
                    target="_blank"
                    rel="noreferrer"
                    className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-[#0b2246] px-3.5 py-2 text-[11px] font-extrabold tracking-[0.08em] text-white shadow-lg transition hover:bg-black"
                  >
                    Open in Maps <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                  {[
                    { v: "10am–7:30pm", k: "Working hours" },
                    { v: "24h", k: "Claim hotline" },
                    { v: "500+", k: "Businesses" },
                  ].map((s) => (
                    <div key={s.k} className="rounded-xl border border-[#ede8d6] bg-[#fdfbf3] px-2 py-3">
                      <p className="font-cormorant text-sm font-bold leading-none text-[#0b2246]">{s.v}</p>
                      <p className="mt-1 text-[10px] font-extrabold tracking-[0.12em] text-[#8d6a10] uppercase">{s.k}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute -bottom-3 -left-3 hidden items-center gap-2 rounded-full border border-[#f3d47c]/50 bg-[#0b2246] px-4 py-2 text-xs font-bold text-white shadow-xl sm:inline-flex">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" /> Typically replies in ~3 hours
              </div>
            </div>
          </div>
          </ScrollReveal>
        </div>

        {/* bottom gold hairline */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#c59b27]/60 to-transparent" />
      </section>

      {/* ===== Form + Contact Details ===== */}
      <section className="w-full py-14 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-[1380px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-8">
            {/* LEFT: Form */}
            <ScrollReveal variant="fadeUp" className="lg:col-span-7">
              <div className="relative overflow-hidden rounded-[26px] border border-[#e7e0c8] bg-white p-6 shadow-[0_20px_60px_rgba(11,34,70,0.08)] sm:p-8 lg:p-9">
                <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#041735] via-[#c59b27] to-[#f3d47c]" />
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#f3d47c]/12 blur-2xl" />

                <div className="relative">
                  <p className="inline-flex items-center gap-2 text-[11px] font-extrabold tracking-[0.18em] text-[#a47a13] uppercase">
                    <span className="h-px w-7 bg-[#c59b27]" /> Send us a message
                  </p>
                  <h2 className="mt-2 font-cormorant text-3xl font-bold leading-none tracking-[-0.02em] text-[#0b2246] sm:text-4xl">
                    Request a <span className="text-[#a47a13]">consultation</span>
                  </h2>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">
                    Share a few details — we&apos;ll audit your risks and recommend the best-fit cover. No spam, no sharing.
                  </p>
                </div>

                {/* success toast */}
                <AnimatePresence>
                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="relative mt-6 flex items-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-emerald-900"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-white">
                        <CheckCircle2 className="h-4 w-4" />
                      </span>
                      <p className="text-sm font-semibold leading-5">Thank you! Your message is received — we&apos;ll be in touch within one business day.</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <form onSubmit={handleSubmit} noValidate className="relative mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className={labelCls}>
                      Full name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="e.g. Arjun Mehta"
                      className={`${inputBase} ${inputBorder(!!errors.name)}`}
                    />
                    {errors.name && <p className="mt-1.5 text-xs font-semibold text-red-600">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="phone" className={labelCls}>
                      Phone *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 98xxx xxxxx"
                      className={`${inputBase} ${inputBorder(!!errors.phone)}`}
                    />
                    {errors.phone && <p className="mt-1.5 text-xs font-semibold text-red-600">{errors.phone}</p>}
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="email" className={labelCls}>
                      Work email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className={`${inputBase} ${inputBorder(!!errors.email)}`}
                    />
                    {errors.email && <p className="mt-1.5 text-xs font-semibold text-red-600">{errors.email}</p>}
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="subject" className={labelCls}>
                      How can we help?
                    </label>
                    <div className="relative">
                      <select
                        id="subject"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        className={`${inputBase} ${inputBorder(false)} appearance-none pr-10`}
                      >
                        <option value="">Select a topic</option>
                        <option>Corporate Insurance</option>
                        <option>Retail Insurance</option>
                        <option>Employee Benefits</option>
                        <option>Liability Insurance</option>
                        <option>Health Insurance</option>
                        <option>Motor Insurance</option>
                        <option>Claims Support</option>
                        <option>Other</option>
                      </select>
                      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">▾</span>
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="message" className={labelCls}>
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Briefly describe your requirement, existing insurer, and renewal date if any…"
                      className={`${inputBase} ${inputBorder(!!errors.message)} resize-none py-3.5`}
                    />
                    <div className="mt-1.5 flex items-center justify-between">
                      {errors.message ? (
                        <p className="text-xs font-semibold text-red-600">{errors.message}</p>
                      ) : (
                        <p className="text-xs font-medium text-slate-500">We usually respond within 3 hours on working days.</p>
                      )}
                      <span className="text-xs font-medium text-slate-400">{form.message.length}/600</span>
                    </div>
                  </div>

                  <div className="sm:col-span-2 flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
                    <button
                      type="submit"
                      className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#0b2246] px-7 py-4 text-xs font-extrabold tracking-[0.14em] text-white uppercase shadow-[0_12px_30px_rgba(11,34,70,0.25)] transition hover:bg-black sm:w-auto"
                    >
                      Send message <Send className="h-3.5 w-3.5 text-[#f3d47c] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                    <p className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                      <ShieldCheck className="h-3.5 w-3.5 text-[#a47a13]" /> IRDAI-compliant · No spam · Privacy respected
                    </p>
                  </div>
                </form>

                {/* What happens next */}
                <div className="mt-8 grid grid-cols-1 gap-3 rounded-2xl border border-[#ede8d6] bg-[#fdfbf3] p-4 sm:grid-cols-3 sm:p-5">
                  {[
                    { n: "01", t: "We review", d: "An advisor audits your brief same day." },
                    { n: "02", t: "We recommend", d: "Options with coverage & pricing clarity." },
                    { n: "03", t: "We stay", d: "End-to-end support, especially at claims." },
                  ].map((s) => (
                    <div key={s.n} className="flex gap-3">
                      <span className="font-cormorant text-lg font-bold leading-none text-[#c59b27]">{s.n}</span>
                      <div>
                        <p className="text-sm font-extrabold text-[#0b2246]">{s.t}</p>
                        <p className="text-xs leading-5 text-slate-600">{s.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* RIGHT: Details premium card */}
            <ScrollReveal variant="fadeLeft" delay={0.15} className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-[26px] border border-[#0b2246] bg-gradient-to-br from-[#041735] via-[#0b254d] to-[#041735] p-6 text-white shadow-[0_20px_60px_rgba(4,23,53,0.35)] sm:p-7 lg:p-8">
                <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#c59b27]/15 blur-3xl" />
                <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(245,215,127,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(245,215,127,0.5)_1px,transparent_1px)] [background-size:36px_36px]" />

                <div className="relative">
                  <p className="text-[11px] font-extrabold tracking-[0.18em] text-[#f3d47c] uppercase">Contact details</p>
                  <h3 className="mt-2 font-cormorant text-3xl font-bold leading-none tracking-[-0.02em]">
                    We&apos;re close <span className="text-[#f3d47c]">when it counts.</span>
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-6 text-slate-300">
                    Prefer to talk now? Our claims and advisory desks pick up within working hours.
                  </p>
                </div>

                <div className="relative mt-7 space-y-0 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur">
                  {[
                    {
                      icon: MapPin,
                      label: "Office address",
                      lines: ["Fortune 5 Risk Management Solutions LLP,", "106-107, E-Square, 1st Floor, Subhash Road,", "Vile Parle (East), Mumbai — 400057."],
                    },
                    {
                      icon: Phone,
                      label: "Call us",
                      lines: ["+91-98208 10067", "+91-22-2619 27 27"],
                      strong: 0,
                    },
                    {
                      icon: Mail,
                      label: "Email us",
                      lines: ["insure@fortune5.in", "claims@fortune5.in — claims help"],
                      strong: 0,
                    },
                    {
                      icon: Clock,
                      label: "Working hours",
                      lines: ["Monday to Saturday", "10:00 AM – 7:30 PM IST"],
                      strong: 1,
                    },
                  ].map((row) => {
                    const Icon = row.icon;
                    return (
                      <div key={row.label} className="flex gap-4 px-5 py-5">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#f3d47c]/25 bg-[#f3d47c]/10 text-[#f3d77f]">
                          <Icon className="h-4.5 w-4.5" />
                        </span>
                        <div>
                          <p className="text-[10px] font-extrabold tracking-[0.14em] text-[#f3d47c] uppercase">{row.label}</p>
                          {row.lines.map((l, i) => (
                            <p
                              key={l}
                              className={`text-sm leading-6 ${row.strong === i ? "font-bold text-white" : i === 0 && row.label !== "Office address" ? "font-bold text-white" : "font-medium text-slate-200"}`}
                            >
                              {l}
                            </p>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="relative mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <a
                    href="https://www.google.com/maps/search/E-Square+Subhash+Road+Vile+Parle+East+Mumbai"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-[#f3d47c]/30 bg-white/5 px-5 py-3 text-xs font-extrabold tracking-[0.12em] text-white uppercase backdrop-blur transition hover:bg-white hover:text-[#041735]"
                  >
                    <MapPin className="h-3.5 w-3.5" /> Get directions
                  </a>
                  <a
                    href="https://wa.me/919820810067"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f3d47c] px-5 py-3 text-xs font-extrabold tracking-[0.12em] text-[#041735] uppercase transition hover:bg-white"
                  >
                    <MessageCircle className="h-3.5 w-3.5" /> WhatsApp us
                  </a>
                </div>

                <div className="relative mt-6 flex items-center gap-3 rounded-2xl border border-[#f3d47c]/20 bg-black/20 px-4 py-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f3d47c] text-[#041735]">
                    <ShieldCheck className="h-4 w-4" />
                  </span>
                  <p className="text-xs font-semibold leading-5 text-slate-200">
                    <span className="font-extrabold text-white">Trusted for 75+ years.</span> Three generations of independent, insurer-agnostic advice.
                  </p>
                </div>
              </div>

              {/* Secondary compact help bar */}
              <div className="mt-4 flex items-center justify-between gap-4 rounded-2xl border border-[#e7e0c8] bg-[#fdfbf3] px-5 py-4">
                <p className="text-sm font-bold text-[#0b2246]">Need urgent claims help?</p>
                <a
                  href="tel:+919820810067"
                  className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#0b2246] px-4 py-2 text-xs font-extrabold tracking-[0.1em] text-white uppercase transition hover:bg-black"
                >
                  Call now <Phone className="h-3.5 w-3.5 text-[#f3d77f]" />
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== FAQ — premium ===== */}
      <section className="w-full border-t border-[#e7e0c8] bg-[#fdfbf3] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-[1380px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <ScrollReveal variant="fadeUp">
            <div className="text-center">
              <p className="text-[11px] font-extrabold tracking-[0.2em] text-[#a47a13] uppercase">Frequently asked questions</p>
              <h2 className="mt-2 font-cormorant text-4xl font-bold tracking-[-0.02em] text-[#0b2246] sm:text-5xl">Got questions? We&apos;ve got answers.</h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
                Clear answers on cover, claims and how we work — so you can decide with confidence.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={0.1}>
          <div className="mt-10 space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`overflow-hidden border bg-white shadow-[0_8px_24px_rgba(11,34,70,0.06)] transition ${
                    isOpen ? "rounded-2xl border-[#f3d47c]" : "rounded-full border-[#e7e0c8] hover:border-[#d8d3c4]"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left sm:px-7 sm:py-5"
                  >
                    <span className="text-sm font-bold leading-6 text-[#0b2246] sm:text-[15px]">{faq.question}</span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition ${
                        isOpen ? "border-[#f3d47c] bg-[#0b2246] text-[#f3d77f]" : "border-[#e7e0c8] bg-[#fdfbf3] text-[#a47a13]"
                      }`}
                    >
                      {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22, ease: "easeInOut" }}
                      >
                        <div className="border-t border-[#f0e7c8] px-6 pb-5 pt-4 text-sm leading-7 text-slate-600 sm:px-7">{faq.answer}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={0.15}>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 rounded-2xl border border-[#e7e0c8] bg-white px-6 py-5 text-center sm:flex-row sm:justify-between sm:text-left">
            <p className="text-sm font-semibold text-slate-700">
              Still unsure? <span className="font-extrabold text-[#0b2246]">Talk to a human in minutes.</span>
            </p>
            <div className="flex gap-2">
              <a href="tel:+919820810067" className="inline-flex items-center gap-2 rounded-full bg-[#0b2246] px-5 py-2.5 text-xs font-extrabold tracking-[0.12em] text-white uppercase hover:bg-black">
                Call advisory
              </a>
              <a href="mailto:insure@fortune5.in" className="inline-flex items-center gap-2 rounded-full border border-[#e7e0c8] bg-[#fdfbf3] px-5 py-2.5 text-xs font-extrabold tracking-[0.12em] text-[#0b2246] uppercase hover:border-[#c59b27]">
                Email us
              </a>
            </div>
          </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#f7f6f2]" />}>
      <ContactInner />
    </Suspense>
  );
}
