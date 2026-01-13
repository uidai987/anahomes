"use client";

import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                alt="Modern Architecture"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#FFD700]/10 rounded-2xl -z-10"></div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-[#FFD700] font-medium mb-3 uppercase tracking-wide text-sm">
              About Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#002366] mb-6 leading-tight">
              Trusted Local Construction Partner in Austin.
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              At Briky, we're proud to serve Austin's needs with reliable, high-quality construction
              services. With over a decade of experience in residential and commercial projects, we ensure
              every project is done right. We build with integrity, craftsmanship, and a
              commitment to excellence.
            </p>

            <div className="space-y-4 mb-8">
              {["100+ Projects", "Licensed & ISO Certified", "Experienced Team"].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-[#FFD700]" />
                  <span className="text-[#002366] font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.7 }}
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#FFD700] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#45a049] transition-colors"
            >
              Learn More
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Side Labels */}
      <div className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 flex-col gap-3 z-40">
        <div className="bg-[#FFD700] text-white text-xs px-3 py-1.5 rounded">
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
            Commercial
          </span>
        </div>
        <div className="bg-white shadow text-[#002366] text-xs px-3 py-1.5 rounded">
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-[#002366] rounded-full"></span>
            Residential
          </span>
        </div>
      </div>
    </section>
  );
}
