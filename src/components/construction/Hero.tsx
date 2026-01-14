"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play, Building2, Award, Users, Clock } from "lucide-react";
import EnquiryModal from "./EnquiryModal";

const stats = [
  { icon: Building2, value: "500+", label: "Projects" },
  { icon: Award, value: "15+", label: "Years" },
  { icon: Users, value: "100%", label: "Satisfaction" },
  { icon: Clock, value: "50+", label: "Experts" },
];

export default function Hero() {
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);

  return (
    <>
      <section id="home" className="relative min-h-screen flex items-center pt-20">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=90')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#002366]/95 via-[#002366]/80 to-[#002366]/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[#FFD700] font-medium mb-4 uppercase tracking-wider text-sm flex items-center gap-2"
            >
              <span className="w-8 h-0.5 bg-[#FFD700]"></span>
              Building Dreams Into Reality
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              Building Your Dreams{" "}
              <span className="text-[#FFD700]">Into Reality</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-300 text-lg mb-8 max-w-xl leading-relaxed"
            >
              We deliver excellence in construction with innovative solutions, superior craftsmanship, 
              and unwavering commitment to quality. From residential to commercial projects, we build to last.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={() => setShowEnquiryModal(true)}
                className="bg-[#FFD700] text-[#002366] px-8 py-4 rounded-full font-semibold hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <Link
                href="/about"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#002366] transition-all duration-300 flex items-center justify-center gap-2"
              >
                Learn More
              </Link>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-[#FFD700] mb-1">{stat.value}</div>
                <p className="text-white/70 text-sm uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Side Labels */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col gap-3 z-10"
        >
          <div className="bg-[#FFD700] text-[#002366] text-xs px-4 py-2 rounded-lg font-medium">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#002366] rounded-full animate-pulse"></span>
              Commercial
            </span>
          </div>
          <div className="bg-white text-[#002366] text-xs px-4 py-2 rounded-lg font-medium shadow-lg">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#FFD700] rounded-full"></span>
              Residential
            </span>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 bg-[#FFD700] rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      <EnquiryModal isOpen={showEnquiryModal} onClose={() => setShowEnquiryModal(false)} />
    </>
  );
}
