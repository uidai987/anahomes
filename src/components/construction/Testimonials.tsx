"use client";

import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const defaultTestimonials = [
  {
    id: 1,
    name: "Martin Roberts",
    role: "Residential Construction",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
    rating: 5,
    text: "BuildCraft built our family home with exceptional quality. The attention to detail and craftsmanship went above and beyond our expectations.",
  },
  {
    id: 2,
    name: "Emily Stark",
    role: "Commercial Project",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
    rating: 5,
    text: "We needed a trusted partner for a complex project — BuildCraft delivered our office space on time, and the quality exceeded expectations.",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "Renovation",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
    rating: 5,
    text: "Professional, reliable, and detail-oriented are the first words that come to mind. BuildCraft made the process smooth and stress-free.",
  },
  {
    id: 4,
    name: "Michael Chen",
    role: "Industrial Project",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80",
    rating: 5,
    text: "Working with BuildCraft on our manufacturing facility was seamless. They delivered on time and within budget. Highly recommend their services.",
  },
  {
    id: 5,
    name: "Jennifer Adams",
    role: "Interior Design",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&q=80",
    rating: 5,
    text: "The interior design team at BuildCraft transformed our space beyond our wildest dreams. Truly exceptional work and attention to detail.",
  },
];

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState(defaultTestimonials);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(2);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Load testimonials from API (simulated)
  useEffect(() => {
    // In production, fetch from: /api/get_testimonials.php
    setTestimonials(defaultTestimonials);
  }, []);

  // Handle responsive items per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else {
        setItemsPerView(2);
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
        const maxIndex = Math.max(0, testimonials.length - itemsPerView);
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length, itemsPerView]);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    const maxIndex = Math.max(0, testimonials.length - itemsPerView);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
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
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#002366]">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Hear from our satisfied customers about their experience with us
          </p>
        </motion.div>

        {/* Testimonials Slider */}
        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <motion.div
            className="flex gap-6 transition-transform duration-500 ease-out"
            animate={{ x: `-${currentIndex * (100 / itemsPerView + 3)}%` }}
            transition={{ type: "tween", duration: 0.5 }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0"
                style={{ width: `calc(${100 / itemsPerView}% - ${(itemsPerView - 1) * 24 / itemsPerView}px)` }}
              >
                <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow relative h-full">
                  {/* Quote Icon */}
                  <Quote className="absolute top-6 right-6 w-12 h-12 text-[#FFD700]/10" />
                  
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg italic">
                    "{testimonial.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-4 border-t">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-[#FFD700]"
                    />
                    <div>
                      <h4 className="font-semibold text-[#002366] text-lg">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
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
