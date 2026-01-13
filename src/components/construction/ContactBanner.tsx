"use client";

import { motion } from "framer-motion";

export default function ContactBanner() {
  return (
    <section id="contact" className="py-16 bg-[#FFD700] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <p className="text-white/80 font-medium mb-2 uppercase tracking-wide text-sm">
              Ready to Start Your Project?
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              From Idea to Reality,<br />Let's Begin
            </h2>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2 lg:text-right"
          >
            <p className="text-white/90 mb-6">
              Have a project in mind? Whether it's a cozy home makeover or a full-scale
              commercial build, our experts, and your dreams.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-[#FFD700] px-8 py-3.5 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Let's Talk
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
