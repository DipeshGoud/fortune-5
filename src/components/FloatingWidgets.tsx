"use client";

import React, { useState, useEffect } from "react";
import { Mail, X, Check, ShieldCheck, Send, ArrowUp } from "lucide-react";

export default function FloatingWidgets() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    // Automatically show form modal after 20 seconds of website loading
    const popupTimer = setTimeout(() => {
      setIsFormOpen(true);
    }, 20000);

    // Scroll listener for Move to Top button
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(popupTimer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsFormOpen(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 3000);
  };

  return (
    <>
      {/* 1. LEFT SIDE FLOATING FORM ICON BUTTON */}
      <div className="fixed bottom-6 left-6 z-40 flex items-center gap-3">
        <button
          onClick={handleOpenForm}
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#011331] text-[#F5D77F] border-2 border-[#C59B27] shadow-2xl hover:bg-[#071f47] hover:scale-110 transition-all duration-300"
          aria-label="Open Inquiry Form"
        >
          {/* Subtle Pulse Animation Ring */}
          <span className="absolute inset-0 rounded-full bg-[#C59B27]/30 animate-ping opacity-75 pointer-events-none" />
          
          <Mail className="w-6 h-6 text-[#F5D77F] group-hover:scale-110 transition-transform" />

          {/* Tooltip on Hover */}
          <span className="absolute left-full ml-3 px-3 py-1.5 bg-[#011331] border border-[#C59B27] text-[#F5D77F] text-xs font-bold rounded-lg shadow-xl whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none">
            Connect With Us
          </span>
        </button>
      </div>

      {/* 2. RIGHT SIDE FLOATING WIDGETS (MOVE TO TOP + WHATSAPP) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3.5">
        
        {/* Scroll to Top Button (Vibrant Gold Theme) */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="group relative flex items-center justify-center w-13 h-13 rounded-full bg-[#E5B842] hover:bg-[#FADB6A] text-[#011331] shadow-[0_4px_20px_rgba(229,184,66,0.45)] border border-[#D4AF37] transition-all duration-300 transform hover:scale-110 animate-fadeIn"
          >
            <ArrowUp className="w-6 h-6 text-[#011331] stroke-[2.8] group-hover:-translate-y-1 transition-transform" />
            
            {/* Tooltip on Hover */}
            <span className="absolute right-full mr-3 px-3 py-1.5 bg-[#011331] border border-[#C59B27] text-[#F5D77F] text-xs font-bold rounded-lg shadow-xl whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none">
              Back to Top
            </span>
          </button>
        )}

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919820810067?text=Hello%20Fortune%205%2C%20I%20would%20like%20to%20inquire%20about%20your%20risk%20management%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl hover:bg-[#20ba5a] hover:scale-110 transition-all duration-300"
          aria-label="Chat on WhatsApp"
        >
          {/* Notification Green Dot Badge */}
          <span className="absolute top-0 right-0 w-4 h-4 bg-emerald-300 rounded-full border-2 border-white animate-pulse" />

          {/* WhatsApp SVG Icon */}
          <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>

          {/* Tooltip on Hover */}
          <span className="absolute right-full mr-3 px-3 py-1.5 bg-[#011331] border border-[#C59B27] text-[#F5D77F] text-xs font-bold rounded-lg shadow-xl whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none">
            Chat on WhatsApp
          </span>
        </a>
      </div>

      {/* 3. TIMED & INTERACTIVE LEAD FORM MODAL ("Connect With Us") */}
      {isFormOpen && (
        <div className="fixed inset-0 z-[999999] flex items-center justify-center p-4 sm:p-6 bg-[#011331]/80 backdrop-blur-md animate-fadeIn">
          
          {/* Modal Backdrop Overlay Click to Close */}
          <div
            onClick={handleCloseForm}
            className="absolute inset-0 cursor-pointer"
          />

          {/* Form Modal Box */}
          <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border-2 border-[#C59B27] overflow-hidden z-10 transform transition-all animate-scaleUp">
            
            {/* Top Navy Header */}
            <div className="bg-[#011331] text-white p-6 sm:p-7 relative border-b border-[#C59B27]/40">
              
              {/* Close Button */}
              <button
                onClick={handleCloseForm}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-800/80 hover:bg-[#C59B27] text-white hover:text-[#011331] flex items-center justify-center transition-colors"
                aria-label="Close Form"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-[#C59B27] text-xs font-extrabold uppercase tracking-widest mb-1.5">
                <ShieldCheck className="w-4 h-4" />
                <span>Fortune 5 Advisory Desk</span>
              </div>

              <h3 className="font-cormorant text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                Connect With <span className="text-[#C59B27]">Us</span>
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mt-1 font-medium">
                Schedule a consultation with our 3rd-generation risk experts.
              </p>
            </div>

            {/* Form Body / Success Screen */}
            <div className="p-6 sm:p-8 bg-[#F9F8F6]">
              {submitted ? (
                <div className="py-8 flex flex-col items-center text-center space-y-3">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 border-2 border-emerald-500 flex items-center justify-center text-emerald-600">
                    <Check className="w-8 h-8" />
                  </div>
                  <h4 className="font-cormorant font-extrabold text-2xl text-[#011331]">
                    Thank You!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-xs font-medium">
                    Your request has been received. Our senior risk consultants will get in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#011331] uppercase tracking-wider mb-1.5">
                        Name <span className="text-amber-600">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your Full Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#C59B27] focus:ring-1 focus:ring-[#C59B27] font-medium shadow-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#011331] uppercase tracking-wider mb-1.5">
                        Email Id <span className="text-amber-600">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#C59B27] focus:ring-1 focus:ring-[#C59B27] font-medium shadow-xs"
                      />
                    </div>
                  </div>

                  {/* Contact Number */}
                  <div>
                    <label className="block text-xs font-bold text-[#011331] uppercase tracking-wider mb-1.5">
                      Contact Number <span className="text-amber-600">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#C59B27] focus:ring-1 focus:ring-[#C59B27] font-medium shadow-xs"
                    />
                  </div>

                  {/* Requirement Message */}
                  <div>
                    <label className="block text-xs font-bold text-[#011331] uppercase tracking-wider mb-1.5">
                      Message / Insurance Needs
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Briefly describe your insurance or risk requirement..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#C59B27] focus:ring-1 focus:ring-[#C59B27] font-medium shadow-xs resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-[#011331] hover:bg-[#071F47] text-[#F5D77F] font-bold text-xs sm:text-sm tracking-widest py-3.5 px-6 rounded-lg border border-[#C59B27] shadow-lg transition-all transform hover:scale-[1.01] uppercase mt-2"
                  >
                    <span>SUBMIT INQUIRY</span>
                    <Send className="w-4 h-4 text-[#C59B27]" />
                  </button>

                  <p className="text-[11px] text-slate-500 text-center font-medium pt-1">
                    Your details are kept 100% confidential under our privacy policy.
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>
      )}
    </>
  );
}
