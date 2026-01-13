"use client";

import { motion } from "framer-motion";

const projects = [
  {
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80",
    category: "Residential",
  },
  {
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    category: "Commercial",
  },
  {
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
    category: "Residential",
  },
  {
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80",
    category: "Renovation",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#FFD700] font-medium mb-3 uppercase tracking-wide text-sm">
              Our Portfolio
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#002366] leading-tight">
              Built to Last.<br />Designed to Inspire.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:text-right"
          >
            <p className="text-gray-600 mb-4">
              From high-end homes to modern office spaces, each Briky project
              is a reflection of quality, detail, and client satisfaction.
            </p>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 border-2 border-[#002366] text-[#002366] px-6 py-2.5 rounded-full font-semibold hover:bg-[#002366] hover:text-white transition-colors"
            >
              View All Projects
            </a>
          </motion.div>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-xl overflow-hidden group cursor-pointer ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <img
                src={project.image}
                alt={project.category}
                className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                  index === 0 ? "h-full min-h-[400px]" : "h-48"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4">
                  <span className="text-white font-medium">{project.category}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Side Labels */}
        <div className="hidden lg:flex absolute right-8 flex-col gap-3">
          <div className="bg-[#FFD700] text-white text-xs px-3 py-1.5 rounded">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
              New Build
            </span>
          </div>
          <div className="bg-white shadow text-[#002366] text-xs px-3 py-1.5 rounded">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-[#002366] rounded-full"></span>
              Commercial
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
