"use client";

import { motion } from "framer-motion";

const partners = [
  { name: "LogoIpsum" },
  { name: "LogoIpsum" },
  { name: "LogoIpsum" },
  { name: "LogoIpsum" },
  { name: "LogoIpsum" },
  { name: "LogoIpsum" },
];

export default function Stats() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#FFD700] font-medium mb-3 uppercase tracking-wide text-sm">
              Mission & Trust
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#002366] mb-6 leading-tight">
              Backed by Results,<br />Built on Relationships
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Briky has become a name homeowners trust. Whether it's new construction or
              custom renovation, each brand partnership reflects the quality and ethics we uphold.
              Strong partnerships are a reflection of the confidence our clients place in us —
              project after project.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <div className="text-3xl font-bold text-[#002366]">100+</div>
                <p className="text-sm text-gray-500">Satisfied Clients</p>
                <p className="text-xs text-gray-400 mt-1">Over 100 projects built with trust and excellence.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <div className="text-3xl font-bold text-[#002366]">10 Yrs.</div>
                <p className="text-sm text-gray-500">Structural Warranty</p>
                <p className="text-xs text-gray-400 mt-1">Structural coverage & quality you can measure.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="bg-[#FFD700] rounded-lg p-4 text-white"
              >
                <div className="text-lg font-bold">Long-Term Reliability</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                alt="Happy Clients"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Partners */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 pt-12 border-t"
        >
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-50">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="text-xl font-bold text-gray-400"
              >
                ⬡ {partner.name}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
