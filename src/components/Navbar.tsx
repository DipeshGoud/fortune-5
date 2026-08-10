"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";
import { ChevronDown, Menu, X } from "lucide-react";
import ConsultationModal from "./ConsultationModal";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Only the homepage uses the transparent-over-hero navbar; inner pages are always solid
  const isInnerPage = pathname !== "/";

  interface NavLink {
    name: string;
    href: string;
    hasDropdown?: boolean;
  }

  const navLinks: NavLink[] = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/about" },
    { name: "SERVICES", href: "/services" },
    { name: "TESTIMONIALS", href: "/testimonials" },
    { name: "BLOG", href: "/blog" },
    { name: "GALLERY", href: "/gallery" },
    { name: "CONTACT US", href: "/contact" },
  ];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const showSolid = scrolled || isInnerPage;

  return (
    <>
      <header
        className={`fixed top-10 left-0 right-0 w-full z-45 py-1 sm:py-2 border-b transition-all duration-300 ${
          showSolid
            ? "bg-[#F9F8F6]/95 backdrop-blur-md shadow-md border-[#C59B27]/20"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="w-full max-w-[1720px] 2xl:max-w-[94vw] 3xl:max-w-[92vw] 4xl:max-w-[2800px] mx-auto px-0">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo Section */}
            <Logo imgClassName="h-12 sm:h-14 md:h-16" />

            {/* Desktop Nav Items */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-10 2xl:gap-14 3xl:gap-20 4xl:gap-24">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <div key={link.name} className="relative group">
                    <Link
                      href={link.href}
                      className={`relative py-2 flex items-center gap-1 text-[13px] xl:text-sm font-bold tracking-wider transition-colors ${
                        active
                          ? "text-[#C59B27]"
                          : "text-[#011331] hover:text-[#C59B27]"
                      }`}
                    >
                      <span>{link.name}</span>
                      {link.hasDropdown && (
                        <ChevronDown className="w-4 h-4 text-[#011331] group-hover:text-[#C59B27] transition-transform group-hover:rotate-180 duration-200" />
                      )}

                      {/* Gold Active Underline Indicator */}
                      {active && (
                        <span className="pointer-events-none absolute bottom-0 left-0 w-full h-[2.5px] bg-[#C59B27] rounded-full" />
                      )}
                      {!active && (
                        <span className="pointer-events-none absolute bottom-0 left-0 w-0 h-[2px] bg-[#011331] transition-all duration-200 group-hover:w-full" />
                      )}
                    </Link>
                  </div>
                );
              })}
            </nav>

            {/* Action Button */}
            <div className="hidden lg:flex items-center">
              <button
                onClick={() => setModalOpen(true)}
                className="bg-[#011331] hover:bg-[#071f47] text-white text-xs xl:text-sm font-bold tracking-wider px-6 xl:px-7 py-3.5 rounded-md shadow-md hover:shadow-lg transition-all duration-200 border border-slate-800 uppercase cursor-pointer"
              >
                BOOK CONSULTATION
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-slate-700 hover:text-[#011331] hover:bg-amber-100/50 focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-7 h-7" />
                ) : (
                  <Menu className="w-7 h-7" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden bg-[#F9F8F6]/95 backdrop-blur-md border-b border-amber-900/10 shadow-xl px-4 pt-3 pb-6"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`flex items-center justify-between text-sm font-bold tracking-wider py-2 px-3 rounded-md ${
                      active
                        ? "bg-amber-100/60 text-[#C59B27]"
                        : "text-slate-700 hover:bg-amber-100/40 hover:text-[#011331]"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>{link.name}</span>
                    {link.hasDropdown && <ChevronDown className="w-4 h-4 text-slate-400" />}
                  </Link>
                );
              })}
              <div className="pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setModalOpen(true);
                  }}
                  className="w-full text-center bg-[#011331] hover:bg-[#071f47] text-white text-xs font-bold tracking-wider px-5 py-3 rounded-md shadow-md uppercase cursor-pointer"
                >
                  BOOK CONSULTATION
                </button>
              </div>
            </div>
          </motion.div>
        )}
        </AnimatePresence>
      </header>

      {/* Consultation Popup Form Modal */}
      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
