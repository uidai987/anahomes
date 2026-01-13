"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#FFD700] rounded flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="text-xl font-bold text-[#002366]">Briky</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-[#002366] font-medium hover:text-[#FFD700] transition-colors">Home</a>
            <a href="#about" className="text-gray-600 hover:text-[#FFD700] transition-colors">About</a>
            <a href="#services" className="text-gray-600 hover:text-[#FFD700] transition-colors">Services</a>
            <a href="#projects" className="text-gray-600 hover:text-[#FFD700] transition-colors">Projects</a>
            <a href="#contact" className="text-gray-600 hover:text-[#FFD700] transition-colors">Contact</a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="bg-[#FFD700] text-white px-6 py-2.5 rounded-full font-medium hover:bg-[#45a049] transition-colors"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <a href="#home" className="text-[#002366] font-medium">Home</a>
              <a href="#about" className="text-gray-600">About</a>
              <a href="#services" className="text-gray-600">Services</a>
              <a href="#projects" className="text-gray-600">Projects</a>
              <a href="#contact" className="text-gray-600">Contact</a>
              <a
                href="#contact"
                className="bg-[#FFD700] text-white px-6 py-2.5 rounded-full font-medium text-center"
              >
                Get in Touch
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
