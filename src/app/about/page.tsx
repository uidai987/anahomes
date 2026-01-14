"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/construction/Navbar";
import Footer from "@/components/construction/Footer";
import { 
  CheckCircle, Award, Shield, Clock, DollarSign, Users, 
  Leaf, Lightbulb, Handshake, HardHat, Target, Eye, Heart,
  Building, Calendar, Smile, ArrowRight
} from "lucide-react";

const stats = [
  { icon: Building, value: "500+", label: "Projects Completed" },
  { icon: Calendar, value: "15+", label: "Years Experience" },
  { icon: Users, value: "50+", label: "Expert Team Members" },
  { icon: Smile, value: "100%", label: "Client Satisfaction" },
];

const values = [
  { icon: Award, title: "Quality First", description: "We never compromise on quality. Every project receives our full attention and dedication to excellence." },
  { icon: Handshake, title: "Integrity", description: "Honesty and transparency are at the core of our business. We build trust through ethical practices." },
  { icon: Lightbulb, title: "Innovation", description: "We embrace new technologies and methods to deliver better, faster, and more efficient solutions." },
  { icon: HardHat, title: "Safety", description: "The safety of our team and clients is paramount. We maintain strict safety protocols on every site." },
  { icon: Leaf, title: "Sustainability", description: "We are committed to sustainable building practices that protect our environment for future generations." },
  { icon: Users, title: "Teamwork", description: "Our success is built on collaboration. We work together with our clients and partners to achieve greatness." },
];

const team = [
  { name: "Robert Johnson", role: "CEO & Founder", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80" },
  { name: "Sarah Williams", role: "Chief Architect", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80" },
  { name: "Michael Chen", role: "Project Manager", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" },
  { name: "Emily Davis", role: "Interior Designer", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80" },
];

const certifications = [
  { icon: Award, title: "ISO 9001:2015", subtitle: "Quality Management" },
  { icon: Shield, title: "OHSAS 18001", subtitle: "Health & Safety" },
  { icon: Leaf, title: "ISO 14001", subtitle: "Environmental" },
  { icon: CheckCircle, title: "LEED Certified", subtitle: "Green Building" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-[#002366] to-[#001a4d]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80')] bg-cover bg-center opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center py-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h1>
            <nav className="flex items-center justify-center gap-2 text-white/70">
              <Link href="/" className="hover:text-[#FFD700] transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[#FFD700]">About Us</span>
            </nav>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[#FFD700] font-medium mb-3 uppercase tracking-wide text-sm">Our Story</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#002366] mb-6">Building Excellence Since 2009</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                BuildCraft Construction was founded with a simple yet powerful vision: to transform the construction 
                industry through innovation, quality, and unwavering commitment to our clients' dreams.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Over the past 15 years, we have grown from a small local contractor to one of the region's most 
                trusted construction companies. Our journey has been marked by hundreds of successful projects, 
                countless satisfied clients, and a reputation built on integrity and excellence.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we continue to push boundaries, embracing new technologies and sustainable practices while 
                never losing sight of what matters most – delivering exceptional results that exceed expectations.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80" alt="Construction" className="rounded-xl h-48 w-full object-cover" />
              <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&q=80" alt="Workers" className="rounded-xl h-48 w-full object-cover" />
              <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&q=80" alt="Building" className="rounded-xl h-48 w-full object-cover" />
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80" alt="Project" className="rounded-xl h-48 w-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Our Mission", text: "To deliver exceptional construction services that transform our clients' visions into reality, while maintaining the highest standards of quality, safety, and sustainability." },
              { icon: Eye, title: "Our Vision", text: "To be the most trusted and innovative construction company, setting industry standards for excellence and creating lasting value for our clients, employees, and communities." },
              { icon: Heart, title: "Our Values", text: "Integrity, Excellence, Innovation, Safety, and Customer Focus form the foundation of everything we do. These values guide our decisions and define who we are." },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-[#FFD700]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-[#FFD700]" />
                </div>
                <h3 className="text-xl font-bold text-[#002366] mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#002366] relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80')] bg-cover bg-center opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-[#002366]" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <p className="text-white/70">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#FFD700] font-medium mb-3 uppercase tracking-wide text-sm">Our Team</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#002366]">Meet Our Experts</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Dedicated professionals committed to delivering excellence in every project
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="relative rounded-xl overflow-hidden mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002366]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <div className="flex gap-2">
                      <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#002366] hover:bg-[#FFD700] transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                      </a>
                    </div>
                  </div>
                </div>
                <h4 className="font-bold text-[#002366] text-lg">{member.name}</h4>
                <p className="text-gray-500 text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#FFD700] font-medium mb-3 uppercase tracking-wide text-sm">Core Values</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#002366]">What Drives Us</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              The principles that guide our work and define our success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-[#FFD700]/10 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-[#FFD700]" />
                </div>
                <h4 className="font-bold text-[#002366] text-lg mb-2">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#FFD700] font-medium mb-3 uppercase tracking-wide text-sm">Certifications</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#002366]">Industry Recognition</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 border-2 border-gray-200 rounded-xl hover:border-[#FFD700] transition-colors"
              >
                <cert.icon className="w-12 h-12 text-[#FFD700] mx-auto mb-4" />
                <h4 className="font-bold text-[#002366]">{cert.title}</h4>
                <p className="text-gray-500 text-sm">{cert.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#002366] relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80')] bg-cover bg-center opacity-10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-white/70 mb-8 text-lg">
            Let's build something amazing together. Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 bg-[#FFD700] text-[#002366] px-8 py-4 rounded-full font-semibold hover:bg-white transition-colors"
            >
              Get In Touch
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+1234567890"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#002366] transition-colors"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
