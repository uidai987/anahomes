"use client";

import { useState, useEffect, useRef } from "react";
import { Home, Building2, Hammer, ArrowRight, ChevronLeft, ChevronRight, Factory, Paintbrush, ClipboardList } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Default services data - in production, this would come from an API/database
const defaultServices = [
  {
    id: 1,
    icon: "Home",
    title: "Residential Construction",
    description: "Custom-built homes designed with care, quality, and expert precision for families.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
  },
  {
    id: 2,
    icon: "Building2",
    title: "Commercial Buildings",
    description: "Smart, scalable commercial spaces that meet business needs and exceed expectations.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
  },
  {
    id: 3,
    icon: "Hammer",
    title: "Renovation & Remodeling",
    description: "Transform your existing spaces with innovative remodeling that adds value and beauty.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
  },
  {
    id: 4,
    icon: "Factory",
    title: "Industrial Projects",
    description: "Heavy-duty industrial facilities built to last with advanced engineering solutions.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80",
  },
  {
    id: 5,
    icon: "Paintbrush",
    title: "Interior Design",
    description: "Creating beautiful interiors that reflect your style and enhance your living experience.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80",
  },
  {
    id: 6,
    icon: "ClipboardList",
    title: "Project Management",
    description: "Expert project management for seamless execution from planning to completion.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
  },
];

const iconMap: { [key: string]: any } = {
  Home,
  Building2,
  Hammer,
  Factory,
  Paintbrush,
  ClipboardList,
};

export default function Services() {
  const [services, setServices] = useState(defaultServices);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Load services from API (simulated)
  useEffect(() => {
    // In production, fetch from: /api/get_services.php
    // For now, use default services
    setServices(defaultServices);
  }, []);

  // Handle responsive items per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-slide functionality (right to left)
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIndex = Math.max(0, services.length - itemsPerView);
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, services.length, itemsPerView]);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    const maxIndex = Math.max(0, services.length - itemsPerView);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const maxIndex = Math.max(0, services.length - itemsPerView);

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
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Comprehensive construction services tailored to meet your unique needs
          </p>
        </motion.div>

        {/* Services Slider */}
        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <motion.div
            ref={sliderRef}
            className="flex gap-6 transition-transform duration-500 ease-out"
            animate={{ x: `-${currentIndex * (100 / itemsPerView + 2)}%` }}
            transition={{ type: "tween", duration: 0.5 }}
          >
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon] || Home;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex-shrink-0"
                  style={{ width: `calc(${100 / itemsPerView}% - ${(itemsPerView - 1) * 24 / itemsPerView}px)` }}
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group h-full">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute -bottom-6 left-4 w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 text-[#002366]" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 pt-8">
                      <h3 className="text-xl font-bold text-[#002366] mb-3">{service.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{service.description}</p>
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2 text-[#FFD700] font-medium text-sm hover:gap-3 transition-all"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
              currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-[#FFD700] hover:scale-110"
            }`}
          >
            <ChevronLeft className="w-6 h-6 text-[#002366]" />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
              currentIndex >= maxIndex ? "opacity-50 cursor-not-allowed" : "hover:bg-[#FFD700] hover:scale-110"
            }`}
          >
            <ChevronRight className="w-6 h-6 text-[#002366]" />
          </button>
        </div>

        {/* Slider Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 bg-[#FFD700]"
                  : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
