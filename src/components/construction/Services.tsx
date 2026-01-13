"use client";

import { Home, Building2, Hammer, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Home,
    title: "Residential Construction",
    description: "Custom-built homes designed with care, quality, and expert precision for families.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
  },
  {
    icon: Building2,
    title: "Commercial Buildings",
    description: "Smart, scalable commercial spaces that meet business needs and exceed expectations.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
  },
  {
    icon: Hammer,
    title: "Renovation & Remodeling",
    description: "Transform your existing spaces with innovative remodeling that adds value and beauty.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#FFD700] font-medium mb-3 uppercase tracking-wide text-sm">
            What We Do
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#002366]">
            Our Full-Spectrum<br />Construction Services
          </h2>
        </motion.div>

        {/* Service Images Grid */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-xl overflow-hidden group"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow text-center"
            >
              <div className="w-14 h-14 bg-[#e8f5e9] rounded-full flex items-center justify-center mx-auto mb-4">
                <service.icon className="w-7 h-7 text-[#FFD700]" />
              </div>
              <h3 className="text-xl font-bold text-[#002366] mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{service.description}</p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-[#FFD700] font-medium text-sm hover:gap-3 transition-all"
              >
                Explore Now
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
