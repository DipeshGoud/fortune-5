"use client";

import React, { useState } from "react";
import Logo from "./Logo";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "HOME", href: "#", active: true },
    { name: "ABOUT US", href: "#" },
    { name: "SOLUTIONS", href: "#", hasDropdown: true },
    { name: "INDUSTRIES", href: "#" },
    { name: "CLAIMS SUPPORT", href: "#" },
    { name: "RESOURCES", href: "#", hasDropdown: true },
    { name: "CONTACT US", href: "#" },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 w-full z-50 bg-transparent border-none pt-4 sm:pt-6">
      <div className="w-full max-w-[1720px] 2xl:max-w-[94vw] 3xl:max-w-[92vw] 4xl:max-w-[2800px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-16 3xl:px-20">
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Logo Section */}
          <Logo />

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-10 2xl:gap-14 3xl:gap-20 4xl:gap-24">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group py-2">
                <a
                  href={link.href}
                  className={`flex items-center gap-1 text-[13px] xl:text-sm font-bold tracking-wider transition-colors ${
                    link.active
                      ? "text-[#C59B27]"
                      : "text-[#011331] hover:text-[#C59B27]"
                  }`}
                >
                  {link.name}
                  {link.hasDropdown && (
                    <ChevronDown className="w-3.5 h-3.5 text-[#011331] group-hover:text-[#C59B27] transition-transform group-hover:rotate-180 duration-200" />
                  )}
                </a>

                {/* Gold Active Underline Indicator */}
                {link.active && (
                  <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#C59B27] rounded-full" />
                )}
                {!link.active && (
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#011331] transition-all duration-200 group-hover:w-full" />
                )}
              </div>
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden lg:flex items-center">
            <a
              href="#book"
              className="bg-[#011331] hover:bg-[#071f47] text-white text-xs xl:text-sm font-bold tracking-wider px-6 xl:px-7 py-3.5 rounded-md shadow-md hover:shadow-lg transition-all duration-200 border border-slate-800 uppercase"
            >
              BOOK CONSULTATION
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-700 hover:text-[#011331] hover:bg-amber-100/50 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F9F8F6]/95 backdrop-blur-md border-b border-amber-900/10 shadow-xl px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`flex items-center justify-between text-sm font-bold tracking-wider py-2 px-3 rounded-md ${
                  link.active
                    ? "bg-amber-100/60 text-[#C59B27]"
                    : "text-slate-700 hover:bg-amber-100/40 hover:text-[#011331]"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>{link.name}</span>
                {link.hasDropdown && <ChevronDown className="w-4 h-4 text-slate-400" />}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#book"
                className="block text-center bg-[#011331] hover:bg-[#071f47] text-white text-xs font-bold tracking-wider px-5 py-3 rounded-md shadow-md uppercase"
                onClick={() => setMobileMenuOpen(false)}
              >
                BOOK CONSULTATION
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
