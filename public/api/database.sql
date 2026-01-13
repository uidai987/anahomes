-- ==========================================
-- BuildCraft Construction Database Schema
-- ==========================================

-- Create database
CREATE DATABASE IF NOT EXISTS buildcraft_db;
USE buildcraft_db;

-- ==========================================
-- ADMINS TABLE
-- ==========================================
CREATE TABLE IF NOT EXISTS admins (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM('admin', 'super_admin') DEFAULT 'admin',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert default super admin (password: admin123)
INSERT INTO admins (name, email, password, role) VALUES 
('Admin User', 'admin@buildcraft.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'super_admin');

-- ==========================================
-- INQUIRIES TABLE
-- ==========================================
CREATE TABLE IF NOT EXISTS inquiries (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20),
    service VARCHAR(50),
    message TEXT,
    status ENUM('new', 'contacted', 'approved', 'rejected') DEFAULT 'new',
    source VARCHAR(50) DEFAULT 'website',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- ==========================================
-- SERVICES TABLE
-- ==========================================
CREATE TABLE IF NOT EXISTS services (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    icon VARCHAR(50),
    image VARCHAR(255),
    is_active BOOLEAN DEFAULT TRUE,
    sort_order INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert default services
INSERT INTO services (title, description, icon, image, sort_order) VALUES 
('Residential Construction', 'Building dream homes with precision and quality craftsmanship.', 'home', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80', 1),
('Commercial Construction', 'State-of-the-art commercial buildings that inspire success.', 'building', 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80', 2),
('Industrial Projects', 'Heavy-duty industrial facilities built to last.', 'industry', 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80', 3),
('Renovation Services', 'Transforming spaces with modern renovation solutions.', 'tools', 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80', 4),
('Interior Design', 'Creating beautiful interiors that reflect your style.', 'couch', 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80', 5),
('Project Management', 'Expert project management for seamless execution.', 'tasks', 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80', 6);

-- ==========================================
-- PORTFOLIO TABLE
-- ==========================================
CREATE TABLE IF NOT EXISTS portfolio (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    category ENUM('residential', 'commercial', 'industrial', 'renovation') NOT NULL,
    description TEXT,
    image VARCHAR(255),
    location VARCHAR(100),
    year VARCHAR(10),
    area VARCHAR(50),
    budget VARCHAR(50),
    tags JSON,
    is_featured BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert default portfolio items
INSERT INTO portfolio (title, category, description, image, location, year, area, budget, tags) VALUES 
('Modern Luxury Villa', 'residential', 'A stunning 5-bedroom luxury villa featuring contemporary architecture, smart home technology, and sustainable design elements.', 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80', 'Beverly Hills, CA', '2023', '8,500 sq ft', '$3.5M', '["Modern", "Luxury", "Smart Home", "Sustainable"]'),
('Corporate Headquarters', 'commercial', 'A state-of-the-art 25-story corporate tower featuring flexible office spaces, green rooftop gardens, and cutting-edge sustainability features.', 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80', 'Downtown Chicago, IL', '2023', '450,000 sq ft', '$85M', '["High-Rise", "Office", "LEED Certified", "Modern"]'),
('Manufacturing Facility', 'industrial', 'A large-scale manufacturing plant designed for automotive parts production with advanced automation systems.', 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80', 'Detroit, MI', '2022', '320,000 sq ft', '$45M', '["Manufacturing", "Automation", "Industrial", "Large Scale"]'),
('Oceanfront Estate', 'residential', 'An elegant beachfront property featuring panoramic ocean views, infinity pool, and seamless indoor-outdoor living spaces.', 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80', 'Malibu, CA', '2023', '12,000 sq ft', '$8.2M', '["Beachfront", "Luxury", "Pool", "Modern"]'),
('Retail Shopping Center', 'commercial', 'A premium lifestyle shopping center featuring 150+ retail stores, entertainment zones, and modern dining experiences.', 'https://images.unsplash.com/photo-1567449303078-57ad995bd329?w=800&q=80', 'Austin, TX', '2022', '680,000 sq ft', '$120M', '["Retail", "Mall", "Entertainment", "Mixed-Use"]'),
('Distribution Warehouse', 'industrial', 'A high-tech logistics center with automated storage systems, loading docks, and efficient distribution infrastructure.', 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80', 'Phoenix, AZ', '2023', '500,000 sq ft', '$55M', '["Warehouse", "Logistics", "Automation", "Distribution"]');

-- ==========================================
-- TESTIMONIALS TABLE
-- ==========================================
CREATE TABLE IF NOT EXISTS testimonials (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    position VARCHAR(100),
    text TEXT NOT NULL,
    image VARCHAR(255),
    rating INT DEFAULT 5,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert default testimonials
INSERT INTO testimonials (name, position, text, image, rating) VALUES 
('John Smith', 'CEO, Tech Corp', 'BuildCraft exceeded our expectations in every way. The quality of work, attention to detail, and professional approach made our commercial project a huge success.', 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80', 5),
('Sarah Johnson', 'Homeowner', 'Our dream home became a reality thanks to BuildCraft. Their team was incredibly professional, and the final result was beyond what we imagined.', 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80', 5),
('Michael Chen', 'Director, Chen Industries', 'Working with BuildCraft on our industrial facility was seamless. They delivered on time and within budget. Highly recommend their services.', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80', 5),
('Emily Davis', 'Restaurant Owner', 'The renovation of our restaurant was handled with such care and expertise. BuildCraft truly understands their clients'' vision.', 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80', 5);

-- ==========================================
-- SETTINGS TABLE
-- ==========================================
CREATE TABLE IF NOT EXISTS settings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    setting_key VARCHAR(50) NOT NULL UNIQUE,
    setting_value TEXT,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert default settings
INSERT INTO settings (setting_key, setting_value) VALUES 
('site_name', 'BuildCraft Construction'),
('contact_email', 'info@buildcraft.com'),
('phone', '+1 (234) 567-8900'),
('address', '123 Construction Ave, Building City, ST 12345'),
('facebook', '#'),
('twitter', '#'),
('instagram', '#'),
('linkedin', '#');

-- ==========================================
-- INDEXES
-- ==========================================
CREATE INDEX idx_inquiries_status ON inquiries(status);
CREATE INDEX idx_inquiries_date ON inquiries(created_at);
CREATE INDEX idx_portfolio_category ON portfolio(category);
CREATE INDEX idx_services_active ON services(is_active);
