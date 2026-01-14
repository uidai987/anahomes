"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  LayoutDashboard, Inbox, Settings, LogOut, Menu, X, Bell, Search,
  Eye, Check, Trash2, Edit, Plus, Mail, Phone, MessageSquare,
  HardHat, Users, Briefcase, Image, Quote, ChevronDown, Filter
} from "lucide-react";

// Demo Data
const initialInquiries = [
  { id: 1, name: "John Smith", email: "john@example.com", phone: "+1 234 567 8901", service: "residential", message: "I need to build a new house with 4 bedrooms.", status: "new", date: "2024-01-15" },
  { id: 2, name: "Sarah Johnson", email: "sarah@example.com", phone: "+1 234 567 8902", service: "commercial", message: "Looking for commercial building renovation.", status: "contacted", date: "2024-01-14" },
  { id: 3, name: "Mike Wilson", email: "mike@example.com", phone: "+1 234 567 8903", service: "renovation", message: "Want to renovate my kitchen and bathroom.", status: "approved", date: "2024-01-13" },
  { id: 4, name: "Emily Davis", email: "emily@example.com", phone: "+1 234 567 8904", service: "interior", message: "Need interior design for my apartment.", status: "new", date: "2024-01-12" },
  { id: 5, name: "Robert Brown", email: "robert@example.com", phone: "+1 234 567 8905", service: "industrial", message: "Building a new warehouse facility.", status: "new", date: "2024-01-11" },
];

const initialServices = [
  { id: 1, title: "Residential Construction", description: "Building dream homes with precision.", icon: "Home", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80", active: true },
  { id: 2, title: "Commercial Construction", description: "Modern commercial buildings.", icon: "Building2", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80", active: true },
  { id: 3, title: "Renovation Services", description: "Transform your existing spaces.", icon: "Hammer", image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80", active: true },
];

const initialAdmins = [
  { id: 1, name: "Admin User", email: "admin@buildcraft.com", role: "super_admin", created: "2023-01-01" },
  { id: 2, name: "John Manager", email: "john@buildcraft.com", role: "admin", created: "2023-06-15" },
];

type PageType = "dashboard" | "inquiries" | "services" | "admins" | "settings";

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState<PageType>("dashboard");
  const [inquiries, setInquiries] = useState(initialInquiries);
  const [services, setServices] = useState(initialServices);
  const [admins, setAdmins] = useState(initialAdmins);
  const [filterStatus, setFilterStatus] = useState("all");
  const [showModal, setShowModal] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [toast, setToast] = useState<{ type: string; message: string } | null>(null);

  // Stats
  const stats = {
    newInquiries: inquiries.filter((i) => i.status === "new").length,
    totalInquiries: inquiries.length,
    connectedInquiries: inquiries.filter((i) => i.status === "approved").length,
    totalServices: services.filter((s) => s.active).length,
  };

  const showToast = (type: string, message: string) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 3000);
  };

  const handleApproveInquiry = (id: number) => {
    setInquiries(inquiries.map((i) => (i.id === id ? { ...i, status: "approved" } : i)));
    showToast("success", "Inquiry approved successfully");
  };

  const handleDeleteInquiry = (id: number) => {
    setInquiries(inquiries.filter((i) => i.id !== id));
    showToast("success", "Inquiry deleted successfully");
  };

  const handleMarkContacted = (id: number) => {
    setInquiries(inquiries.map((i) => (i.id === id ? { ...i, status: "contacted" } : i)));
    showToast("info", "Inquiry marked as contacted");
  };

  const filteredInquiries = filterStatus === "all" 
    ? inquiries 
    : inquiries.filter((i) => i.status === filterStatus);

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-[#002366] text-white transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0 lg:w-20"
        }`}
      >
        <div className="p-6 flex items-center justify-between">
          <Link href="/" className={`flex items-center gap-3 ${!sidebarOpen && "lg:justify-center"}`}>
            <HardHat className="w-8 h-8 text-[#FFD700]" />
            {sidebarOpen && <span className="text-xl font-bold">BuildCraft</span>}
          </Link>
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden">
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="mt-6">
          {[
            { id: "dashboard", icon: LayoutDashboard, label: "Dashboard" },
            { id: "inquiries", icon: Inbox, label: "Inquiries", badge: stats.newInquiries },
            { id: "services", icon: Briefcase, label: "Services" },
            { id: "admins", icon: Users, label: "Admin Users" },
            { id: "settings", icon: Settings, label: "Settings" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id as PageType)}
              className={`w-full flex items-center gap-3 px-6 py-3 transition-colors ${
                currentPage === item.id
                  ? "bg-[#FFD700]/20 text-[#FFD700] border-l-4 border-[#FFD700]"
                  : "text-white/70 hover:bg-white/10"
              } ${!sidebarOpen && "lg:justify-center lg:px-2"}`}
            >
              <item.icon className="w-5 h-5" />
              {sidebarOpen && <span>{item.label}</span>}
              {sidebarOpen && item.badge && item.badge > 0 && (
                <span className="ml-auto bg-[#FFD700] text-[#002366] text-xs px-2 py-0.5 rounded-full font-bold">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <Link
            href="/"
            className={`flex items-center gap-3 text-white/70 hover:text-red-400 transition-colors ${
              !sidebarOpen && "lg:justify-center"
            }`}
          >
            <LogOut className="w-5 h-5" />
            {sidebarOpen && <span>Logout</span>}
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-h-screen">
        {/* Top Bar */}
        <header className="bg-white shadow-sm px-6 py-4 flex items-center justify-between">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-gray-100 rounded-lg">
            <Menu className="w-6 h-6 text-gray-600" />
          </button>

          <div className="flex items-center gap-4">
            <div className="relative">
              <button className="p-2 hover:bg-gray-100 rounded-lg relative">
                <Bell className="w-6 h-6 text-gray-600" />
                {stats.newInquiries > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    {stats.newInquiries}
                  </span>
                )}
              </button>
            </div>
            <div className="flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80"
                alt="Admin"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="hidden md:block">
                <p className="font-medium text-gray-800">Admin User</p>
                <p className="text-xs text-gray-500">Super Admin</p>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-6">
          {/* Dashboard */}
          {currentPage === "dashboard" && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="text-2xl font-bold text-gray-800 mb-2">Dashboard</h1>
              <p className="text-gray-600 mb-8">Welcome back! Here's what's happening today.</p>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {[
                  { label: "New Inquiries", value: stats.newInquiries, icon: Mail, color: "blue" },
                  { label: "Total Inquiries", value: stats.totalInquiries, icon: Inbox, color: "purple" },
                  { label: "Connected", value: stats.connectedInquiries, icon: Check, color: "green" },
                  { label: "Active Services", value: stats.totalServices, icon: Briefcase, color: "yellow" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-sm"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                        stat.color === "blue" ? "bg-blue-100 text-blue-600" :
                        stat.color === "purple" ? "bg-purple-100 text-purple-600" :
                        stat.color === "green" ? "bg-green-100 text-green-600" :
                        "bg-yellow-100 text-yellow-600"
                      }`}>
                        <stat.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
                        <p className="text-sm text-gray-500">{stat.label}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Recent Inquiries */}
              <div className="bg-white rounded-xl shadow-sm">
                <div className="p-6 border-b flex items-center justify-between">
                  <h2 className="text-lg font-bold text-gray-800">Recent Inquiries</h2>
                  <button
                    onClick={() => setCurrentPage("inquiries")}
                    className="text-[#FFD700] font-medium text-sm hover:underline"
                  >
                    View All →
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Email</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Service</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {inquiries.slice(0, 5).map((inquiry) => (
                        <tr key={inquiry.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 font-medium text-gray-800">{inquiry.name}</td>
                          <td className="px-6 py-4 text-gray-600">{inquiry.email}</td>
                          <td className="px-6 py-4 text-gray-600 capitalize">{inquiry.service}</td>
                          <td className="px-6 py-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              inquiry.status === "new" ? "bg-blue-100 text-blue-600" :
                              inquiry.status === "contacted" ? "bg-yellow-100 text-yellow-600" :
                              "bg-green-100 text-green-600"
                            }`}>
                              {inquiry.status}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex gap-2">
                              <button
                                onClick={() => { setSelectedItem(inquiry); setShowModal("viewInquiry"); }}
                                className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100"
                              >
                                <Eye className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => handleApproveInquiry(inquiry.id)}
                                className="p-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100"
                              >
                                <Check className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => handleDeleteInquiry(inquiry.id)}
                                className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}

          {/* Inquiries Page */}
          {currentPage === "inquiries" && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="text-2xl font-bold text-gray-800 mb-2">Inquiries Management</h1>
              <p className="text-gray-600 mb-8">Manage all customer inquiries and leads</p>

              {/* Filter Tabs */}
              <div className="flex flex-wrap gap-3 mb-6">
                {["all", "new", "contacted", "approved"].map((status) => (
                  <button
                    key={status}
                    onClick={() => setFilterStatus(status)}
                    className={`px-4 py-2 rounded-full font-medium capitalize transition-colors ${
                      filterStatus === status
                        ? "bg-[#FFD700] text-[#002366]"
                        : "bg-white text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>

              {/* Inquiries Table */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Email</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Phone</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Service</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Date</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {filteredInquiries.map((inquiry) => (
                        <tr key={inquiry.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 font-medium text-gray-800">{inquiry.name}</td>
                          <td className="px-6 py-4 text-gray-600">{inquiry.email}</td>
                          <td className="px-6 py-4 text-gray-600">{inquiry.phone}</td>
                          <td className="px-6 py-4 text-gray-600 capitalize">{inquiry.service}</td>
                          <td className="px-6 py-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              inquiry.status === "new" ? "bg-blue-100 text-blue-600" :
                              inquiry.status === "contacted" ? "bg-yellow-100 text-yellow-600" :
                              "bg-green-100 text-green-600"
                            }`}>
                              {inquiry.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-gray-600">{inquiry.date}</td>
                          <td className="px-6 py-4">
                            <div className="flex gap-2">
                              <button
                                onClick={() => { setSelectedItem(inquiry); setShowModal("viewInquiry"); }}
                                className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100"
                                title="View"
                              >
                                <Eye className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => handleApproveInquiry(inquiry.id)}
                                className="p-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100"
                                title="Approve"
                              >
                                <Check className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => handleDeleteInquiry(inquiry.id)}
                                className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100"
                                title="Delete"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}

          {/* Services Page */}
          {currentPage === "services" && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h1 className="text-2xl font-bold text-gray-800 mb-2">Services Management</h1>
                  <p className="text-gray-600">Add and manage your construction services</p>
                </div>
                <button
                  onClick={() => { setSelectedItem(null); setShowModal("addService"); }}
                  className="bg-[#FFD700] text-[#002366] px-4 py-2 rounded-lg font-semibold flex items-center gap-2 hover:bg-[#e6c300] transition-colors"
                >
                  <Plus className="w-5 h-5" />
                  Add New Service
                </button>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service) => (
                  <div key={service.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                    <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-800 mb-2">{service.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                      <div className="flex items-center justify-between">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          service.active ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                        }`}>
                          {service.active ? "Active" : "Inactive"}
                        </span>
                        <div className="flex gap-2">
                          <button className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Admin Users Page */}
          {currentPage === "admins" && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h1 className="text-2xl font-bold text-gray-800 mb-2">Admin Users</h1>
                  <p className="text-gray-600">Manage administrator accounts</p>
                </div>
                <button
                  onClick={() => { setSelectedItem(null); setShowModal("addAdmin"); }}
                  className="bg-[#FFD700] text-[#002366] px-4 py-2 rounded-lg font-semibold flex items-center gap-2 hover:bg-[#e6c300] transition-colors"
                >
                  <Plus className="w-5 h-5" />
                  Register New Admin
                </button>
              </div>

              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Email</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Role</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Created</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {admins.map((admin) => (
                        <tr key={admin.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 font-medium text-gray-800">{admin.name}</td>
                          <td className="px-6 py-4 text-gray-600">{admin.email}</td>
                          <td className="px-6 py-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              admin.role === "super_admin" ? "bg-purple-100 text-purple-600" : "bg-blue-100 text-blue-600"
                            }`}>
                              {admin.role.replace("_", " ")}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-gray-600">{admin.created}</td>
                          <td className="px-6 py-4">
                            <div className="flex gap-2">
                              <button className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100">
                                <Edit className="w-4 h-4" />
                              </button>
                              {admin.id !== 1 && (
                                <button className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100">
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}

          {/* Settings Page */}
          {currentPage === "settings" && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="text-2xl font-bold text-gray-800 mb-2">Settings</h1>
              <p className="text-gray-600 mb-8">Configure your website settings</p>

              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-6 pb-4 border-b">General Settings</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Site Name</label>
                      <input
                        type="text"
                        defaultValue="BuildCraft Construction"
                        className="w-full px-4 py-3 border rounded-lg focus:border-[#FFD700] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Contact Email</label>
                      <input
                        type="email"
                        defaultValue="info@buildcraft.com"
                        className="w-full px-4 py-3 border rounded-lg focus:border-[#FFD700] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="text"
                        defaultValue="+1 (234) 567-8900"
                        className="w-full px-4 py-3 border rounded-lg focus:border-[#FFD700] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                      <input
                        type="text"
                        defaultValue="123 Construction Ave, Building City, ST 12345"
                        className="w-full px-4 py-3 border rounded-lg focus:border-[#FFD700] focus:outline-none"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="bg-[#FFD700] text-[#002366] px-6 py-3 rounded-lg font-semibold hover:bg-[#e6c300] transition-colors"
                  >
                    Save Changes
                  </button>
                </form>
              </div>
            </motion.div>
          )}
        </div>
      </main>

      {/* View Inquiry Modal */}
      <AnimatePresence>
        {showModal === "viewInquiry" && selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowModal(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-xl max-w-lg w-full p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-800">Inquiry Details</h3>
                <button onClick={() => setShowModal(null)} className="p-2 hover:bg-gray-100 rounded-lg">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Name</span>
                  <span className="font-medium">{selectedItem.name}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Email</span>
                  <span className="font-medium">{selectedItem.email}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Phone</span>
                  <span className="font-medium">{selectedItem.phone}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Service</span>
                  <span className="font-medium capitalize">{selectedItem.service}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Status</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    selectedItem.status === "new" ? "bg-blue-100 text-blue-600" :
                    selectedItem.status === "contacted" ? "bg-yellow-100 text-yellow-600" :
                    "bg-green-100 text-green-600"
                  }`}>
                    {selectedItem.status}
                  </span>
                </div>
                <div>
                  <span className="text-gray-500 block mb-2">Message</span>
                  <p className="bg-gray-50 p-4 rounded-lg text-gray-700">{selectedItem.message}</p>
                </div>
              </div>

              <div className="flex gap-3 mt-6 pt-6 border-t">
                <button
                  onClick={() => { handleApproveInquiry(selectedItem.id); setShowModal(null); }}
                  className="flex-1 bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
                >
                  <Check className="w-4 h-4" />
                  Approve
                </button>
                <button
                  onClick={() => { handleMarkContacted(selectedItem.id); setShowModal(null); }}
                  className="flex-1 bg-yellow-500 text-white py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Mark Contacted
                </button>
                <button
                  onClick={() => { handleDeleteInquiry(selectedItem.id); setShowModal(null); }}
                  className="flex-1 bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors flex items-center justify-center gap-2"
                >
                  <Trash2 className="w-4 h-4" />
                  Delete
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 50, x: "-50%" }}
            className={`fixed bottom-6 left-1/2 px-6 py-3 rounded-lg shadow-lg flex items-center gap-3 ${
              toast.type === "success" ? "bg-green-500" : "bg-blue-500"
            } text-white`}
          >
            <Check className="w-5 h-5" />
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
