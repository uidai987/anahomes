"use client";

import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
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
            {/* Experience Badge */}
            <div className="absolute -bottom-4 -left-4 md:bottom-8 md:left-8 bg-[#FFD700] text-[#002366] p-4 md:p-6 rounded-xl shadow-xl">
              <div className="text-3xl md:text-4xl font-bold">15+</div>
              <div className="text-sm font-medium">Years of Excellence</div>
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
              We Build With Passion & Precision
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              BuildCraft Construction has been a leader in the construction industry for over 15 years. 
              We specialize in residential, commercial, and industrial projects, delivering exceptional 
              quality and innovative solutions. Our commitment to excellence and customer satisfaction 
              has made us the trusted choice for construction needs.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                "Quality Materials", 
                "Expert Team", 
                "Timely Delivery", 
                "24/7 Support",
                "500+ Projects",
                "100% Satisfaction"
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle className="w-5 h-5 text-[#FFD700] flex-shrink-0" />
                  <span className="text-[#002366] font-medium text-sm">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.7 }}
            >
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-[#FFD700] text-[#002366] px-6 py-3 rounded-full font-semibold hover:bg-[#002366] hover:text-white transition-all duration-300 group"
              >
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Side Labels */}
      <div className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 flex-col gap-3 z-40">
        <div className="bg-[#FFD700] text-[#002366] text-xs px-3 py-1.5 rounded font-medium">
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-[#002366] rounded-full"></span>
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
