"use client";

import { Clock, Award, Layers } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Clock,
    title: "On Time",
    description: "We respect your time with planning and predictable project timelines.",
  },
  {
    icon: Award,
    title: "ISO Certified",
    description: "Our standards align with certification levels and predictable project timelines.",
  },
  {
    icon: Layers,
    title: "Quality Materials",
    description: "We use top-grade materials and modern & innovative suited for Texas conditions.",
  },
];

export default function FeatureCards() {
  return (
    <section className="relative z-20 -mt-16 md:-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
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
    </section>
  );
}
