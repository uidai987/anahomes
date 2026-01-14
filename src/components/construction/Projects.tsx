"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Modern Luxury Villa",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80",
    category: "residential",
  },
  {
    id: 2,
    title: "Corporate Tower",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
    category: "commercial",
  },
  {
    id: 3,
    title: "Contemporary Home",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
    category: "residential",
  },
  {
    id: 4,
    title: "Office Renovation",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    category: "renovation",
  },
  {
    id: 5,
    title: "Manufacturing Plant",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80",
    category: "industrial",
  },
  {
    id: 6,
    title: "Retail Complex",
    image: "https://images.unsplash.com/photo-1567449303078-57ad995bd329?w=600&q=80",
    category: "commercial",
  },
];

const categories = ["all", "residential", "commercial", "industrial", "renovation"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

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
              From high-end homes to modern office spaces, each BuildCraft project
              is a reflection of quality, detail, and client satisfaction.
            </p>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 border-2 border-[#002366] text-[#002366] px-6 py-2.5 rounded-full font-semibold hover:bg-[#002366] hover:text-white transition-colors group"
            >
              View All Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2 rounded-full font-medium capitalize transition-all duration-300 ${
                activeFilter === category
                  ? "bg-[#FFD700] text-[#002366]"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category === "all" ? "All" : category}
            </button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.slice(0, 6).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              layout
              className="relative rounded-xl overflow-hidden group cursor-pointer aspect-[4/3]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 bg-[#FFD700] text-[#002366] text-xs font-semibold rounded-full mb-2 capitalize">
                    {project.category}
                  </span>
                  <h4 className="text-white font-bold text-xl">{project.title}</h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 bg-[#FFD700] text-[#002366] px-8 py-4 rounded-full font-semibold hover:bg-[#002366] hover:text-white transition-colors group"
          >
            View All Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
