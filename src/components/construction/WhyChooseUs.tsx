"use client";

import { Lightbulb, Users, PenTool, Target } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Lightbulb,
    title: "Local Knowledge",
    description: "Deep understanding of Austin's building codes, climate factors, and construction standards.",
  },
  {
    icon: Users,
    title: "Pro Team",
    description: "Skilled, well-trained professionals who bring expertise and craftsmanship to every project.",
  },
  {
    icon: PenTool,
    title: "Smart Designs",
    description: "Modern functional designs that balance beauty by comfort, function, and flow.",
  },
  {
    icon: Target,
    title: "Client Focus",
    description: "Transparent processes, clear communication — you're informed every step of the way.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#FFD700] font-medium mb-3 uppercase tracking-wide text-sm">
              Why Briky
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#002366] leading-tight">
              What Sets Us<br />Apart
            </h2>
            <p className="text-gray-600 mt-4">
              We're more than just builders — we're your trusted local partner.
              From smart design to solid delivery, every detail is handled with
              care, attention, and pride.
            </p>
          </motion.div>

          {/* Right Features */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-[#e8f5e9] rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-[#FFD700]" />
                </div>
                <h3 className="text-lg font-bold text-[#002366] mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
