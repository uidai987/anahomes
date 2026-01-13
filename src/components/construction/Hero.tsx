"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#002366]/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#FFD700] font-medium mb-4 uppercase tracking-wide text-sm"
          >
            BUILD A BETTER FUTURE
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            Building Your Dreams to Reality
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-300 text-lg mb-8 max-w-xl"
          >
            From custom homes to commercial spaces, Briky delivers quality construction services across
            Austin, Texas – on time, on budget, and built to last.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="bg-[#FFD700] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-[#45a049] transition-colors"
            >
              Inquire Now
            </a>
            <a
              href="#projects"
              className="border-2 border-white text-white px-8 py-3.5 rounded-full font-semibold hover:bg-white hover:text-[#002366] transition-colors"
            >
              View Our Work
            </a>
          </motion.div>
        </div>
      </div>

      {/* Side Labels */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col gap-3 z-10"
      >
        <div className="bg-[#FFD700] text-white text-xs px-3 py-1.5 rounded">
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
            Our Team
          </span>
        </div>
        <div className="bg-white text-[#002366] text-xs px-3 py-1.5 rounded">
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-[#002366] rounded-full"></span>
            View More
          </span>
        </div>
      </motion.div>
    </section>
  );
}
