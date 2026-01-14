"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/construction/Navbar";
import Footer from "@/components/construction/Footer";
import { 
  Search, MapPin, Calendar, DollarSign, Maximize2, X, 
  ArrowRight, Filter, Grid, List, Home, Building2, Factory, Hammer
} from "lucide-react";

const defaultProjects = [
  {
    id: 1,
    title: "Modern Luxury Villa",
    category: "residential",
    description: "A stunning 5-bedroom luxury villa featuring contemporary architecture, smart home technology, and sustainable design elements. Located in an exclusive gated community.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    location: "Beverly Hills, CA",
    year: "2023",
    area: "8,500 sq ft",
    budget: "$3.5M",
    tags: ["Modern", "Luxury", "Smart Home", "Sustainable"],
  },
  {
    id: 2,
    title: "Corporate Headquarters",
    category: "commercial",
    description: "A state-of-the-art 25-story corporate tower featuring flexible office spaces, green rooftop gardens, and cutting-edge sustainability features.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    location: "Downtown Chicago, IL",
    year: "2023",
    area: "450,000 sq ft",
    budget: "$85M",
    tags: ["High-Rise", "Office", "LEED Certified", "Modern"],
  },
  {
    id: 3,
    title: "Manufacturing Facility",
    category: "industrial",
    description: "A large-scale manufacturing plant designed for automotive parts production with advanced automation systems and eco-friendly features.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
    location: "Detroit, MI",
    year: "2022",
    area: "320,000 sq ft",
    budget: "$45M",
    tags: ["Manufacturing", "Automation", "Industrial", "Large Scale"],
  },
  {
    id: 4,
    title: "Oceanfront Estate",
    category: "residential",
    description: "An elegant beachfront property featuring panoramic ocean views, infinity pool, and seamless indoor-outdoor living spaces.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    location: "Malibu, CA",
    year: "2023",
    area: "12,000 sq ft",
    budget: "$8.2M",
    tags: ["Beachfront", "Luxury", "Pool", "Modern"],
  },
  {
    id: 5,
    title: "Retail Shopping Center",
    category: "commercial",
    description: "A premium lifestyle shopping center featuring 150+ retail stores, entertainment zones, and modern dining experiences.",
    image: "https://images.unsplash.com/photo-1567449303078-57ad995bd329?w=800&q=80",
    location: "Austin, TX",
    year: "2022",
    area: "680,000 sq ft",
    budget: "$120M",
    tags: ["Retail", "Mall", "Entertainment", "Mixed-Use"],
  },
  {
    id: 6,
    title: "Distribution Warehouse",
    category: "industrial",
    description: "A high-tech logistics center with automated storage systems, loading docks, and efficient distribution infrastructure.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    location: "Phoenix, AZ",
    year: "2023",
    area: "500,000 sq ft",
    budget: "$55M",
    tags: ["Warehouse", "Logistics", "Automation", "Distribution"],
  },
  {
    id: 7,
    title: "Contemporary Family Home",
    category: "residential",
    description: "A beautiful 4-bedroom family home with open floor plan, energy-efficient design, and smart home integration.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    location: "Seattle, WA",
    year: "2023",
    area: "4,200 sq ft",
    budget: "$1.8M",
    tags: ["Family Home", "Modern", "Energy Efficient", "Smart Home"],
  },
  {
    id: 8,
    title: "Medical Office Building",
    category: "commercial",
    description: "A specialized healthcare facility featuring multiple medical suites, diagnostic centers, and patient amenities.",
    image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=800&q=80",
    location: "Boston, MA",
    year: "2022",
    area: "85,000 sq ft",
    budget: "$32M",
    tags: ["Healthcare", "Medical", "Office", "Specialized"],
  },
  {
    id: 9,
    title: "Historic Restaurant Renovation",
    category: "renovation",
    description: "Complete renovation of a historic building into an upscale restaurant while preserving original architectural elements.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    location: "New Orleans, LA",
    year: "2023",
    area: "6,500 sq ft",
    budget: "$2.1M",
    tags: ["Restaurant", "Historic", "Renovation", "Preservation"],
  },
  {
    id: 10,
    title: "Boutique Hotel",
    category: "commercial",
    description: "A charming 50-room boutique hotel with unique design elements, rooftop bar, and personalized guest experiences.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    location: "Miami, FL",
    year: "2022",
    area: "42,000 sq ft",
    budget: "$28M",
    tags: ["Hotel", "Boutique", "Hospitality", "Design"],
  },
  {
    id: 11,
    title: "Food Processing Plant",
    category: "industrial",
    description: "A state-of-the-art food processing facility with strict hygiene standards, cold storage, and efficient production lines.",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80",
    location: "Sacramento, CA",
    year: "2023",
    area: "180,000 sq ft",
    budget: "$38M",
    tags: ["Food Processing", "Manufacturing", "Cold Storage", "Industrial"],
  },
  {
    id: 12,
    title: "Office Building Renovation",
    category: "renovation",
    description: "Modern transformation of a 1970s office building into a contemporary co-working space with updated amenities.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    location: "San Francisco, CA",
    year: "2023",
    area: "35,000 sq ft",
    budget: "$8.5M",
    tags: ["Office", "Renovation", "Co-working", "Modern"],
  },
];

const categories = [
  { value: "all", label: "All Projects", icon: Grid },
  { value: "residential", label: "Residential", icon: Home },
  { value: "commercial", label: "Commercial", icon: Building2 },
  { value: "industrial", label: "Industrial", icon: Factory },
  { value: "renovation", label: "Renovation", icon: Hammer },
];

export default function PortfolioPage() {
  const [projects, setProjects] = useState(defaultProjects);
  const [filteredProjects, setFilteredProjects] = useState(defaultProjects);
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<typeof defaultProjects[0] | null>(null);
  const [visibleCount, setVisibleCount] = useState(6);

  // Get all unique tags
  const allTags = Array.from(new Set(projects.flatMap((p) => p.tags)));

  // Filter projects
  useEffect(() => {
    let filtered = projects;

    if (activeCategory !== "all") {
      filtered = filtered.filter((p) => p.category === activeCategory);
    }

    if (activeTag) {
      filtered = filtered.filter((p) => p.tags.includes(activeTag));
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.location.toLowerCase().includes(query) ||
          p.tags.some((t) => t.toLowerCase().includes(query))
      );
    }

    setFilteredProjects(filtered);
    setVisibleCount(6);
  }, [activeCategory, activeTag, searchQuery, projects]);

  const stats = {
    total: projects.length,
    residential: projects.filter((p) => p.category === "residential").length,
    commercial: projects.filter((p) => p.category === "commercial").length,
    industrial: projects.filter((p) => p.category === "industrial").length,
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-[#002366] to-[#001a4d]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')] bg-cover bg-center opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center py-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Portfolio</h1>
            <nav className="flex items-center justify-center gap-2 text-white/70">
              <Link href="/" className="hover:text-[#FFD700] transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[#FFD700]">Portfolio</span>
            </nav>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[#FFD700] font-medium mb-3 uppercase tracking-wide text-sm">Our Work</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#002366] mb-4">Explore Our Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our diverse portfolio of construction projects ranging from residential homes to large commercial and industrial facilities.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => {
                  setActiveCategory(cat.value);
                  setActiveTag(null);
                }}
                className={`flex items-center gap-2 px-5 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === cat.value
                    ? "bg-[#FFD700] text-[#002366]"
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                <cat.icon className="w-4 h-4" />
                {cat.label}
              </button>
            ))}
          </motion.div>

          {/* Tags Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2 mb-8"
          >
            <span className="text-gray-500 font-medium mr-2">Filter by tags:</span>
            {allTags.slice(0, 10).map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                className={`px-3 py-1 rounded-full text-sm transition-all duration-300 ${
                  activeTag === tag
                    ? "bg-[#002366] text-white"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-[#002366]"
                }`}
              >
                {tag}
              </button>
            ))}
          </motion.div>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mb-12"
          >
            <div className="relative w-full max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:border-[#FFD700] focus:outline-none focus:ring-2 focus:ring-[#FFD700]/20"
              />
            </div>
          </motion.div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredProjects.slice(0, visibleCount).map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    layout
                    className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-[#FFD700] text-[#002366] text-xs font-semibold rounded-full capitalize">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-[#002366] mb-2">{project.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t">
                        <span className="flex items-center gap-1 text-gray-500 text-sm">
                          <MapPin className="w-4 h-4" />
                          {project.location}
                        </span>
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="text-[#FFD700] font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all"
                        >
                          View Details
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <div className="text-center py-16">
              <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-600 mb-2">No Projects Found</h3>
              <p className="text-gray-500">Try adjusting your filters or search terms</p>
            </div>
          )}

          {/* Load More */}
          {visibleCount < filteredProjects.length && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center mt-12"
            >
              <button
                onClick={() => setVisibleCount((prev) => prev + 6)}
                className="inline-flex items-center gap-2 border-2 border-[#002366] text-[#002366] px-8 py-3 rounded-full font-semibold hover:bg-[#002366] hover:text-white transition-colors"
              >
                Load More Projects
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#002366] relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80')] bg-cover bg-center opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: stats.total, label: "Total Projects" },
              { value: stats.residential, label: "Residential" },
              { value: stats.commercial, label: "Commercial" },
              { value: stats.industrial, label: "Industrial" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-[#FFD700] mb-2">{stat.value}</div>
                <p className="text-white/70">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center z-10 hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-80 object-cover"
              />
              <div className="p-8">
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-[#FFD700] text-[#002366] text-xs font-semibold rounded-full capitalize mb-3">
                    {selectedProject.category}
                  </span>
                  <h2 className="text-3xl font-bold text-[#002366] mb-2">{selectedProject.title}</h2>
                  <div className="flex items-center gap-2 text-gray-500">
                    <MapPin className="w-4 h-4" />
                    {selectedProject.location}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <Calendar className="w-5 h-5 text-[#FFD700] mx-auto mb-2" />
                    <div className="text-sm text-gray-500">Year</div>
                    <div className="font-bold text-[#002366]">{selectedProject.year}</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <Maximize2 className="w-5 h-5 text-[#FFD700] mx-auto mb-2" />
                    <div className="text-sm text-gray-500">Area</div>
                    <div className="font-bold text-[#002366]">{selectedProject.area}</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <DollarSign className="w-5 h-5 text-[#FFD700] mx-auto mb-2" />
                    <div className="text-sm text-gray-500">Budget</div>
                    <div className="font-bold text-[#002366]">{selectedProject.budget}</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-[#002366] mb-3">Project Overview</h4>
                  <p className="text-gray-600 leading-relaxed">{selectedProject.description}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-[#002366] mb-3">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-6 border-t">
                  <Link
                    href="/#contact"
                    className="flex-1 bg-[#FFD700] text-[#002366] py-3 rounded-full font-semibold text-center hover:bg-[#002366] hover:text-white transition-colors"
                  >
                    Start Similar Project
                  </Link>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="flex-1 border-2 border-gray-200 text-gray-600 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
