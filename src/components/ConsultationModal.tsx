"use client";

import React, { useState } from "react";
import Link from "next/link";
import { X, Send, CheckCircle2, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export default function ConsultationModal({
  isOpen,
  onClose,
  defaultService = "",
}: ConsultationModalProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: defaultService || "Corporate Risk Solutions",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Full name is required";
    if (!form.email.trim()) newErrors.email = "Email address is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Enter a valid email address";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setForm({
          name: "",
          email: "",
          phone: "",
          service: "Corporate Risk Solutions",
          message: "",
        });
        onClose();
      }, 2500);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999999] flex items-center justify-center p-4 sm:p-6 bg-[#01327a]/80 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-lg bg-white rounded-2xl border border-[#C59B27]/40 shadow-2xl overflow-hidden text-slate-900"
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#01327a] via-[#01327a] to-[#01327a] p-6 sm:p-7 text-white relative">
              <button
                onClick={onClose}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/20"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-[#F5D77F] font-bold text-xs uppercase tracking-widest mb-1">
                <ShieldCheck className="w-4 h-4 text-[#C59B27]" />
                <span>EXPERT RISK ADVISORY</span>
              </div>
              <h3 className="font-cormorant text-2xl sm:text-3xl font-extrabold text-white">
                Book a Free Consultation
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mt-1">
                Speak directly with senior risk experts. Tailored solutions for your business & family.
              </p>
            </div>

            {/* Modal Form */}
            <div className="p-6 sm:p-7">
              {submitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-cormorant text-2xl font-bold text-[#01327a]">
                    Consultation Requested!
                  </h4>
                  <p className="text-sm text-slate-600 max-w-xs mx-auto">
                    Thank you. One of our senior advisors will reach out to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="e.g. Kaushal Shah"
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#C59B27] focus:ring-1 focus:ring-[#C59B27] transition-all"
                    />
                    {errors.name && (
                      <p className="text-[11px] text-red-500 font-semibold mt-1">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email & Phone grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="name@company.com"
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#C59B27] focus:ring-1 focus:ring-[#C59B27] transition-all"
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-500 font-semibold mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 98208 10067"
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#C59B27] focus:ring-1 focus:ring-[#C59B27] transition-all"
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-red-500 font-semibold mt-1">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Service of Interest
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#C59B27] focus:ring-1 focus:ring-[#C59B27] transition-all"
                    >
                      <optgroup label="Corporate Risk Solutions">
                        <option value="Corporate Risk Solutions">Corporate Risk Solutions (General)</option>
                        <option value="Fire Risk Solutions">Fire Risk Solutions</option>
                        <option value="Marine & Transit Risk Solutions">Marine & Transit Risk Solutions</option>
                        <option value="Engineering & Project Risk Solutions">Engineering & Project Risk Solutions</option>
                        <option value="Corporate Liability & Governance Risk">Corporate Liability & Governance Risk</option>
                        <option value="Commercial Package Risk Solutions">Commercial Package Risk Solutions</option>
                        <option value="Employee Benefits">Employee Benefits (GMC/GPA/GTL)</option>
                        <option value="Industrial Sector Risk Solutions">Industrial Sector Risk Solutions</option>
                      </optgroup>
                      <optgroup label="Retail Protection Solutions">
                        <option value="Health & Medical Protection">Health & Medical Protection</option>
                        <option value="Motor & Fleet Risk Protection">Motor & Fleet Risk Protection</option>
                        <option value="Travel & International Protection">Travel & International Protection</option>
                        <option value="Home & Property Protection">Home & Property Protection</option>
                        <option value="Personal Accident Protection">Personal Accident Protection</option>
                        <option value="Critical Illness Protection">Critical Illness Protection</option>
                        <option value="Term Life & Wealth Protection">Term Life & Wealth Protection</option>
                      </optgroup>
                      <option value="General Risk Advisory">General Risk Audit & Advisory</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Additional Details (Optional)
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us briefly about your risk management requirements..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-[#C59B27] focus:ring-1 focus:ring-[#C59B27] transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-[#01327a] hover:bg-[#01255e] text-white font-extrabold text-xs sm:text-sm tracking-wider px-6 py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 border border-slate-800 uppercase flex items-center justify-center gap-2 mt-2"
                  >
                    <span>SUBMIT REQUEST</span>
                    <Send className="w-4 h-4 text-[#C59B27]" />
                  </button>

                  <p className="text-[10px] text-center text-slate-500 font-medium pt-1">
                    By submitting, you agree to our{" "}
                    <Link href="/privacy" onClick={onClose} className="text-[#01327a] underline hover:text-[#C59B27] transition-colors">
                      Privacy Policy
                    </Link>{" "}
                    &amp;{" "}
                    <Link href="/terms" onClick={onClose} className="text-[#01327a] underline hover:text-[#C59B27] transition-colors">
                      Terms &amp; Conditions
                    </Link>.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
