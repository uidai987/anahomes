"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import EnquiryModal from "./EnquiryModal";

export default function ContactBanner() {
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);

  return (
    <>
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
              className="lg:w-1/2 text-center lg:text-left"
            >
              <p className="text-[#002366]/70 font-medium mb-2 uppercase tracking-wide text-sm">
                Ready to Start Your Project?
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#002366] leading-tight">
                From Idea to Reality,<br />Let's Begin
              </h2>
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-1/2 lg:text-right text-center"
            >
              <p className="text-[#002366]/80 mb-6">
                Have a project in mind? Whether it's a cozy home makeover or a full-scale
                commercial build, we're ready to turn your dreams into reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
                <button
                  onClick={() => setShowEnquiryModal(true)}
                  className="inline-flex items-center justify-center gap-2 bg-[#002366] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-[#001a4d] transition-colors group"
                >
                  <MessageCircle className="w-5 h-5" />
                  Let's Talk
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => setShowEnquiryModal(true)}
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#002366] px-8 py-3.5 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Get in Touch
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <EnquiryModal isOpen={showEnquiryModal} onClose={() => setShowEnquiryModal(false)} />
    </>
  );
}
