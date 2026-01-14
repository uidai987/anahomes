"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, HardHat, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#002366] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-[#FFD700] rounded-lg flex items-center justify-center">
                <HardHat className="w-6 h-6 text-[#002366]" />
              </div>
              <span className="text-xl font-bold">BuildCraft</span>
            </Link>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Building dreams into reality since 2009. We are committed to delivering excellence in every project we undertake.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FFD700] hover:text-[#002366] transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FFD700] hover:text-[#002366] transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FFD700] hover:text-[#002366] transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FFD700] hover:text-[#002366] transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-6 relative">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[#FFD700]"></span>
            </h4>
            <ul className="space-y-3 mt-4">
              <li><Link href="/" className="text-gray-400 hover:text-[#FFD700] hover:pl-2 transition-all text-sm flex items-center gap-2"><ArrowRight className="w-3 h-3" />Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-[#FFD700] hover:pl-2 transition-all text-sm flex items-center gap-2"><ArrowRight className="w-3 h-3" />About Us</Link></li>
              <li><a href="/#services" className="text-gray-400 hover:text-[#FFD700] hover:pl-2 transition-all text-sm flex items-center gap-2"><ArrowRight className="w-3 h-3" />Services</a></li>
              <li><Link href="/portfolio" className="text-gray-400 hover:text-[#FFD700] hover:pl-2 transition-all text-sm flex items-center gap-2"><ArrowRight className="w-3 h-3" />Portfolio</Link></li>
              <li><a href="/#contact" className="text-gray-400 hover:text-[#FFD700] hover:pl-2 transition-all text-sm flex items-center gap-2"><ArrowRight className="w-3 h-3" />Contact</a></li>
            </ul>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-6 relative">
              Our Services
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[#FFD700]"></span>
            </h4>
            <ul className="space-y-3 mt-4">
              <li><a href="/#services" className="text-gray-400 hover:text-[#FFD700] hover:pl-2 transition-all text-sm flex items-center gap-2"><ArrowRight className="w-3 h-3" />Residential</a></li>
              <li><a href="/#services" className="text-gray-400 hover:text-[#FFD700] hover:pl-2 transition-all text-sm flex items-center gap-2"><ArrowRight className="w-3 h-3" />Commercial</a></li>
              <li><a href="/#services" className="text-gray-400 hover:text-[#FFD700] hover:pl-2 transition-all text-sm flex items-center gap-2"><ArrowRight className="w-3 h-3" />Industrial</a></li>
              <li><a href="/#services" className="text-gray-400 hover:text-[#FFD700] hover:pl-2 transition-all text-sm flex items-center gap-2"><ArrowRight className="w-3 h-3" />Renovation</a></li>
              <li><a href="/#services" className="text-gray-400 hover:text-[#FFD700] hover:pl-2 transition-all text-sm flex items-center gap-2"><ArrowRight className="w-3 h-3" />Interior Design</a></li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-6 relative">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[#FFD700]"></span>
            </h4>
            <ul className="space-y-4 mt-4">
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#FFD700]" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">Call Us</p>
                  <p className="text-sm font-medium">+1 (234) 567-8900</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#FFD700]" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">Email</p>
                  <p className="text-sm font-medium">info@buildcraft.com</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#FFD700]" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">Address</p>
                  <p className="text-sm font-medium">123 Construction Ave, Building City, ST 12345</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-400 text-sm">
            © 2024 BuildCraft Construction. All Rights Reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="text-gray-400 hover:text-[#FFD700] transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-[#FFD700] transition-colors text-sm">Terms & Conditions</a>
            <Link href="/admin" className="text-gray-400 hover:text-[#FFD700] transition-colors text-sm">Admin</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
