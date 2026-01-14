"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, HardHat, Phone, MessageCircle } from "lucide-react";
import EnquiryModal from "./EnquiryModal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm shadow-sm"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#FFD700] rounded-lg flex items-center justify-center">
                <HardHat className="w-6 h-6 text-[#002366]" />
              </div>
              <span className="text-xl font-bold text-[#002366]">BuildCraft</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              <a href="/#home" className="text-[#002366] font-medium hover:text-[#FFD700] transition-colors">Home</a>
              <Link href="/about" className="text-gray-600 hover:text-[#FFD700] transition-colors">About</Link>
              <a href="/#services" className="text-gray-600 hover:text-[#FFD700] transition-colors">Services</a>
              <Link href="/portfolio" className="text-gray-600 hover:text-[#FFD700] transition-colors">Portfolio</Link>
              <a href="/#testimonials" className="text-gray-600 hover:text-[#FFD700] transition-colors">Testimonials</a>
              <a href="/#contact" className="text-gray-600 hover:text-[#FFD700] transition-colors">Contact</a>
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => setShowEnquiryModal(true)}
                className="bg-[#FFD700] text-[#002366] px-5 py-2.5 rounded-full font-semibold hover:bg-[#002366] hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Enquire Now
              </button>
              <button
                onClick={() => setShowEnquiryModal(true)}
                className="border-2 border-[#002366] text-[#002366] px-5 py-2.5 rounded-full font-semibold hover:bg-[#002366] hover:text-white transition-all duration-300 hidden lg:flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Let's Talk
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6 text-[#002366]" /> : <Menu className="w-6 h-6 text-[#002366]" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden py-4 border-t animate-in slide-in-from-top duration-300">
              <div className="flex flex-col gap-3">
                <a href="/#home" onClick={() => setIsOpen(false)} className="text-[#002366] font-medium py-2 px-4 rounded-lg hover:bg-gray-100">Home</a>
                <Link href="/about" onClick={() => setIsOpen(false)} className="text-gray-600 py-2 px-4 rounded-lg hover:bg-gray-100">About</Link>
                <a href="/#services" onClick={() => setIsOpen(false)} className="text-gray-600 py-2 px-4 rounded-lg hover:bg-gray-100">Services</a>
                <Link href="/portfolio" onClick={() => setIsOpen(false)} className="text-gray-600 py-2 px-4 rounded-lg hover:bg-gray-100">Portfolio</Link>
                <a href="/#testimonials" onClick={() => setIsOpen(false)} className="text-gray-600 py-2 px-4 rounded-lg hover:bg-gray-100">Testimonials</a>
                <a href="/#contact" onClick={() => setIsOpen(false)} className="text-gray-600 py-2 px-4 rounded-lg hover:bg-gray-100">Contact</a>
                <div className="flex flex-col gap-2 mt-2 pt-4 border-t">
                  <button
                    onClick={() => { setShowEnquiryModal(true); setIsOpen(false); }}
                    className="bg-[#FFD700] text-[#002366] px-6 py-3 rounded-full font-semibold text-center flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Enquire Now
                  </button>
                  <button
                    onClick={() => { setShowEnquiryModal(true); setIsOpen(false); }}
                    className="border-2 border-[#002366] text-[#002366] px-6 py-3 rounded-full font-semibold text-center flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    Let's Talk
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Enquiry Modal */}
      <EnquiryModal isOpen={showEnquiryModal} onClose={() => setShowEnquiryModal(false)} />
    </>
  );
}
