// ==========================================
// ADMIN DASHBOARD JAVASCRIPT
// ==========================================

// Demo Data (Replace with actual API calls)
let inquiriesData = [
    { id: 1, name: 'John Smith', email: 'john@example.com', phone: '+1 234 567 8901', service: 'residential', message: 'I need to build a new house with 4 bedrooms.', status: 'new', date: '2024-01-15' },
    { id: 2, name: 'Sarah Johnson', email: 'sarah@example.com', phone: '+1 234 567 8902', service: 'commercial', message: 'Looking for commercial building renovation.', status: 'contacted', date: '2024-01-14' },
    { id: 3, name: 'Mike Wilson', email: 'mike@example.com', phone: '+1 234 567 8903', service: 'renovation', message: 'Want to renovate my kitchen and bathroom.', status: 'approved', date: '2024-01-13' },
    { id: 4, name: 'Emily Davis', email: 'emily@example.com', phone: '+1 234 567 8904', service: 'interior', message: 'Need interior design for my apartment.', status: 'new', date: '2024-01-12' },
    { id: 5, name: 'Robert Brown', email: 'robert@example.com', phone: '+1 234 567 8905', service: 'industrial', message: 'Building a new warehouse facility.', status: 'new', date: '2024-01-11' },
];

let servicesData = [
    { id: 1, title: 'Residential Construction', description: 'Building dream homes with precision and quality craftsmanship.', icon: 'home', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80', active: true },
    { id: 2, title: 'Commercial Construction', description: 'State-of-the-art commercial buildings that inspire success.', icon: 'building', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80', active: true },
    { id: 3, title: 'Renovation Services', description: 'Transforming spaces with modern renovation solutions.', icon: 'tools', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80', active: true },
];

let portfolioData = [
    { id: 1, title: 'Modern Luxury Villa', category: 'residential', description: 'A stunning 5-bedroom luxury villa.', image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80', location: 'Beverly Hills, CA', year: '2023', area: '8,500 sq ft', budget: '$3.5M', tags: ['Modern', 'Luxury'] },
    { id: 2, title: 'Corporate Headquarters', category: 'commercial', description: 'A 25-story corporate tower.', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80', location: 'Chicago, IL', year: '2023', area: '450,000 sq ft', budget: '$85M', tags: ['High-Rise', 'Office'] },
];

let testimonialsData = [
    { id: 1, name: 'John Smith', position: 'CEO, Tech Corp', text: 'BuildCraft exceeded our expectations in every way.', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80', rating: 5 },
    { id: 2, name: 'Sarah Johnson', position: 'Homeowner', text: 'Our dream home became a reality thanks to BuildCraft.', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80', rating: 5 },
];

let adminsData = [
    { id: 1, name: 'Admin User', email: 'admin@buildcraft.com', role: 'super_admin', created: '2023-01-01' },
    { id: 2, name: 'John Manager', email: 'john@buildcraft.com', role: 'admin', created: '2023-06-15' },
];

let selectedInquiries = [];

// ==========================================
// INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    checkAuth();
    initializeNavigation();
    loadDashboardData();
    initializeFilters();
});

function checkAuth() {
    // In production, check if user is authenticated
    // For demo, we'll assume authenticated
    const adminName = localStorage.getItem('adminName') || 'Admin User';
    document.getElementById('adminName').textContent = adminName;
}

// ==========================================
// NAVIGATION
// ==========================================
function initializeNavigation() {
    document.querySelectorAll('[data-page]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.dataset.page;
            navigateToPage(page);
        });
    });
}

function navigateToPage(page) {
    // Update sidebar active state
    document.querySelectorAll('.sidebar-nav a').forEach(a => {
        a.classList.remove('active');
        if (a.dataset.page === page) {
            a.classList.add('active');
        }
    });

    // Hide all pages
    document.querySelectorAll('.page-content').forEach(p => {
        p.classList.remove('active');
    });

    // Show selected page
    const pageElement = document.getElementById(`${page}Page`);
    if (pageElement) {
        pageElement.classList.add('active');
        loadPageData(page);
    }
}

function loadPageData(page) {
    switch (page) {
        case 'dashboard':
            loadDashboardData();
            break;
        case 'inquiries':
            loadInquiries();
            break;
        case 'services':
            loadServices();
            break;
        case 'portfolio':
            loadPortfolio();
            break;
        case 'testimonials':
            loadTestimonials();
            break;
        case 'admins':
            loadAdmins();
            break;
    }
}

// ==========================================
// SIDEBAR TOGGLE
// ==========================================
function toggleSidebar() {
    const sidebar = document.getElementById('adminSidebar');
    sidebar.classList.toggle('collapsed');
    sidebar.classList.toggle('active');
}

// ==========================================
// PROFILE DROPDOWN
// ==========================================
function toggleProfileMenu() {
    document.getElementById('profileDropdown').classList.toggle('active');
}

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    const profile = document.querySelector('.admin-profile');
    const dropdown = document.getElementById('profileDropdown');
    if (profile && !profile.contains(e.target)) {
        dropdown.classList.remove('active');
    }
});

// ==========================================
// DASHBOARD DATA
// ==========================================
function loadDashboardData() {
    const newCount = inquiriesData.filter(i => i.status === 'new').length;
    const totalCount = inquiriesData.length;
    const connectedCount = inquiriesData.filter(i => i.status === 'approved').length;
    const servicesCount = servicesData.filter(s => s.active).length;

    document.getElementById('newInquiries').textContent = newCount;
    document.getElementById('totalInquiries').textContent = totalCount;
    document.getElementById('connectedInquiries').textContent = connectedCount;
    document.getElementById('totalServices').textContent = servicesCount;
    document.getElementById('newInquiriesBadge').textContent = newCount;
    document.getElementById('notificationCount').textContent = newCount;

    // Load recent inquiries
    const tbody = document.getElementById('recentInquiriesTable');
    tbody.innerHTML = inquiriesData.slice(0, 5).map(inquiry => `
        <tr>
            <td>${inquiry.name}</td>
            <td>${inquiry.email}</td>
            <td>${inquiry.service}</td>
            <td><span class="status ${inquiry.status}">${inquiry.status}</span></td>
            <td>${inquiry.date}</td>
            <td>
                <div class="action-btns">
                    <button class="action-btn view" onclick="viewInquiry(${inquiry.id})">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="action-btn approve" onclick="approveInquiry(${inquiry.id})">
                        <i class="fas fa-check"></i>
                    </button>
                    <button class="action-btn delete" onclick="confirmDelete('inquiry', ${inquiry.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
}

// ==========================================
// INQUIRIES MANAGEMENT
// ==========================================
function loadInquiries(filter = 'all') {
    let filteredData = inquiriesData;
    
    if (filter !== 'all') {
        filteredData = inquiriesData.filter(i => i.status === filter);
    }

    const tbody = document.getElementById('inquiriesTable');
    tbody.innerHTML = filteredData.map(inquiry => `
        <tr data-id="${inquiry.id}">
            <td><input type="checkbox" class="inquiry-checkbox" value="${inquiry.id}" onchange="toggleInquirySelection(${inquiry.id})"></td>
            <td>${inquiry.name}</td>
            <td>${inquiry.email}</td>
            <td>${inquiry.phone}</td>
            <td>${inquiry.service}</td>
            <td><span class="status ${inquiry.status}">${inquiry.status}</span></td>
            <td>${inquiry.date}</td>
            <td>
                <div class="action-btns">
                    <button class="action-btn view" onclick="viewInquiry(${inquiry.id})" title="View">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="action-btn approve" onclick="approveInquiry(${inquiry.id})" title="Approve">
                        <i class="fas fa-check"></i>
                    </button>
                    <button class="action-btn delete" onclick="confirmDelete('inquiry', ${inquiry.id})" title="Delete">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
}

function initializeFilters() {
    document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            loadInquiries(tab.dataset.filter);
        });
    });

    // Search
    const searchInput = document.getElementById('inquirySearch');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            const filtered = inquiriesData.filter(i => 
                i.name.toLowerCase().includes(query) ||
                i.email.toLowerCase().includes(query) ||
                i.service.toLowerCase().includes(query)
            );
            renderFilteredInquiries(filtered);
        });
    }

    // Service filter
    const serviceFilter = document.getElementById('inquiryServiceFilter');
    if (serviceFilter) {
        serviceFilter.addEventListener('change', (e) => {
            const value = e.target.value;
            const filtered = value ? inquiriesData.filter(i => i.service === value) : inquiriesData;
            renderFilteredInquiries(filtered);
        });
    }

    // Select all checkbox
    const selectAll = document.getElementById('selectAllInquiries');
    if (selectAll) {
        selectAll.addEventListener('change', (e) => {
            const checkboxes = document.querySelectorAll('.inquiry-checkbox');
            checkboxes.forEach(cb => {
                cb.checked = e.target.checked;
            });
            selectedInquiries = e.target.checked ? inquiriesData.map(i => i.id) : [];
            updateBulkActions();
        });
    }
}

function renderFilteredInquiries(data) {
    const tbody = document.getElementById('inquiriesTable');
    tbody.innerHTML = data.map(inquiry => `
        <tr data-id="${inquiry.id}">
            <td><input type="checkbox" class="inquiry-checkbox" value="${inquiry.id}" onchange="toggleInquirySelection(${inquiry.id})"></td>
            <td>${inquiry.name}</td>
            <td>${inquiry.email}</td>
            <td>${inquiry.phone}</td>
            <td>${inquiry.service}</td>
            <td><span class="status ${inquiry.status}">${inquiry.status}</span></td>
            <td>${inquiry.date}</td>
            <td>
                <div class="action-btns">
                    <button class="action-btn view" onclick="viewInquiry(${inquiry.id})">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="action-btn approve" onclick="approveInquiry(${inquiry.id})">
                        <i class="fas fa-check"></i>
                    </button>
                    <button class="action-btn delete" onclick="confirmDelete('inquiry', ${inquiry.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
}

function toggleInquirySelection(id) {
    const index = selectedInquiries.indexOf(id);
    if (index > -1) {
        selectedInquiries.splice(index, 1);
    } else {
        selectedInquiries.push(id);
    }
    updateBulkActions();
}

function updateBulkActions() {
    const bulkActions = document.getElementById('bulkActions');
    const selectedCount = document.getElementById('selectedCount');
    
    if (selectedInquiries.length > 0) {
        bulkActions.style.display = 'flex';
        selectedCount.textContent = `${selectedInquiries.length} selected`;
    } else {
        bulkActions.style.display = 'none';
    }
}

function viewInquiry(id) {
    const inquiry = inquiriesData.find(i => i.id === id);
    if (!inquiry) return;

    const content = document.getElementById('inquiryModalContent');
    content.innerHTML = `
        <div class="inquiry-detail-header">
            <h4>${inquiry.name}</h4>
            <span class="status ${inquiry.status}">${inquiry.status}</span>
        </div>
        <div class="inquiry-info-grid">
            <div class="inquiry-info-item">
                <label>Email</label>
                <p>${inquiry.email}</p>
            </div>
            <div class="inquiry-info-item">
                <label>Phone</label>
                <p>${inquiry.phone}</p>
            </div>
            <div class="inquiry-info-item">
                <label>Service</label>
                <p>${inquiry.service}</p>
            </div>
            <div class="inquiry-info-item">
                <label>Date</label>
                <p>${inquiry.date}</p>
            </div>
        </div>
        <div class="inquiry-message">
            <label>Message</label>
            <p>${inquiry.message}</p>
        </div>
        <div class="inquiry-actions">
            <button class="btn btn-success" onclick="approveInquiry(${inquiry.id}); closeModal('inquiryModal');">
                <i class="fas fa-check"></i> Approve
            </button>
            <button class="btn btn-outline" onclick="markContacted(${inquiry.id}); closeModal('inquiryModal');">
                <i class="fas fa-phone"></i> Mark Contacted
            </button>
            <button class="btn btn-danger" onclick="confirmDelete('inquiry', ${inquiry.id}); closeModal('inquiryModal');">
                <i class="fas fa-trash"></i> Delete
            </button>
        </div>
    `;

    openModal('inquiryModal');
}

function approveInquiry(id) {
    const inquiry = inquiriesData.find(i => i.id === id);
    if (inquiry) {
        inquiry.status = 'approved';
        loadInquiries();
        loadDashboardData();
        showToast('success', 'Success', 'Inquiry approved successfully');
    }
}

function markContacted(id) {
    const inquiry = inquiriesData.find(i => i.id === id);
    if (inquiry) {
        inquiry.status = 'contacted';
        loadInquiries();
        loadDashboardData();
        showToast('info', 'Updated', 'Inquiry marked as contacted');
    }
}

function bulkApprove() {
    selectedInquiries.forEach(id => {
        const inquiry = inquiriesData.find(i => i.id === id);
        if (inquiry) inquiry.status = 'approved';
    });
    selectedInquiries = [];
    loadInquiries();
    loadDashboardData();
    updateBulkActions();
    showToast('success', 'Success', 'Selected inquiries approved');
}

function bulkDelete() {
    inquiriesData = inquiriesData.filter(i => !selectedInquiries.includes(i.id));
    selectedInquiries = [];
    loadInquiries();
    loadDashboardData();
    updateBulkActions();
    showToast('success', 'Deleted', 'Selected inquiries deleted');
}

// ==========================================
// SERVICES MANAGEMENT
// ==========================================
function loadServices() {
    const grid = document.getElementById('servicesGrid');
    grid.innerHTML = servicesData.map(service => `
        <div class="admin-card">
            <div class="admin-card-image">
                <img src="${service.image}" alt="${service.title}">
            </div>
            <div class="admin-card-body">
                <h4><i class="fas fa-${service.icon}"></i> ${service.title}</h4>
                <p>${service.description}</p>
            </div>
            <div class="admin-card-footer">
                <span class="status ${service.active ? 'approved' : 'rejected'}">${service.active ? 'Active' : 'Inactive'}</span>
                <div class="action-btns">
                    <button class="action-btn edit" onclick="editService(${service.id})">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="action-btn delete" onclick="confirmDelete('service', ${service.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function openServiceModal(id = null) {
    document.getElementById('serviceModalTitle').textContent = id ? 'Edit Service' : 'Add New Service';
    document.getElementById('serviceForm').reset();
    document.getElementById('serviceId').value = '';
    
    if (id) {
        const service = servicesData.find(s => s.id === id);
        if (service) {
            document.getElementById('serviceId').value = service.id;
            document.getElementById('serviceTitle').value = service.title;
            document.getElementById('serviceDescription').value = service.description;
            document.getElementById('serviceIcon').value = service.icon;
            document.getElementById('serviceImage').value = service.image;
            document.getElementById('serviceActive').checked = service.active;
        }
    }
    
    openModal('serviceModal');
}

function editService(id) {
    openServiceModal(id);
}

function saveService(e) {
    e.preventDefault();
    
    const id = document.getElementById('serviceId').value;
    const serviceData = {
        title: document.getElementById('serviceTitle').value,
        description: document.getElementById('serviceDescription').value,
        icon: document.getElementById('serviceIcon').value,
        image: document.getElementById('serviceImage').value,
        active: document.getElementById('serviceActive').checked
    };
    
    if (id) {
        const index = servicesData.findIndex(s => s.id === parseInt(id));
        servicesData[index] = { ...servicesData[index], ...serviceData };
        showToast('success', 'Updated', 'Service updated successfully');
    } else {
        serviceData.id = servicesData.length + 1;
        servicesData.push(serviceData);
        showToast('success', 'Created', 'Service created successfully');
    }
    
    closeModal('serviceModal');
    loadServices();
    loadDashboardData();
}

// ==========================================
// PORTFOLIO MANAGEMENT
// ==========================================
function loadPortfolio() {
    const grid = document.getElementById('portfolioGrid');
    grid.innerHTML = portfolioData.map(project => `
        <div class="admin-card">
            <div class="admin-card-image">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="admin-card-body">
                <h4>${project.title}</h4>
                <p>${project.description}</p>
                <div style="display: flex; gap: 5px; flex-wrap: wrap; margin-top: 10px;">
                    ${project.tags.map(tag => `<span style="padding: 2px 8px; background: #f1f5f9; border-radius: 10px; font-size: 11px;">${tag}</span>`).join('')}
                </div>
            </div>
            <div class="admin-card-footer">
                <span class="status approved">${project.category}</span>
                <div class="action-btns">
                    <button class="action-btn edit" onclick="editPortfolio(${project.id})">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="action-btn delete" onclick="confirmDelete('portfolio', ${project.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function openPortfolioModal(id = null) {
    document.getElementById('portfolioModalTitle').textContent = id ? 'Edit Project' : 'Add New Project';
    document.getElementById('portfolioForm').reset();
    document.getElementById('portfolioId').value = '';
    
    if (id) {
        const project = portfolioData.find(p => p.id === id);
        if (project) {
            document.getElementById('portfolioId').value = project.id;
            document.getElementById('portfolioTitle').value = project.title;
            document.getElementById('portfolioCategory').value = project.category;
            document.getElementById('portfolioDescription').value = project.description;
            document.getElementById('portfolioLocation').value = project.location;
            document.getElementById('portfolioYear').value = project.year;
            document.getElementById('portfolioArea').value = project.area;
            document.getElementById('portfolioBudget').value = project.budget;
            document.getElementById('portfolioImage').value = project.image;
            document.getElementById('portfolioTags').value = project.tags.join(', ');
        }
    }
    
    openModal('portfolioModal');
}

function editPortfolio(id) {
    openPortfolioModal(id);
}

function savePortfolio(e) {
    e.preventDefault();
    
    const id = document.getElementById('portfolioId').value;
    const projectData = {
        title: document.getElementById('portfolioTitle').value,
        category: document.getElementById('portfolioCategory').value,
        description: document.getElementById('portfolioDescription').value,
        location: document.getElementById('portfolioLocation').value,
        year: document.getElementById('portfolioYear').value,
        area: document.getElementById('portfolioArea').value,
        budget: document.getElementById('portfolioBudget').value,
        image: document.getElementById('portfolioImage').value,
        tags: document.getElementById('portfolioTags').value.split(',').map(t => t.trim())
    };
    
    if (id) {
        const index = portfolioData.findIndex(p => p.id === parseInt(id));
        portfolioData[index] = { ...portfolioData[index], ...projectData };
        showToast('success', 'Updated', 'Project updated successfully');
    } else {
        projectData.id = portfolioData.length + 1;
        portfolioData.push(projectData);
        showToast('success', 'Created', 'Project created successfully');
    }
    
    closeModal('portfolioModal');
    loadPortfolio();
}

// ==========================================
// TESTIMONIALS MANAGEMENT
// ==========================================
function loadTestimonials() {
    const grid = document.getElementById('testimonialsGrid');
    grid.innerHTML = testimonialsData.map(testimonial => `
        <div class="admin-card">
            <div class="admin-card-body">
                <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 15px;">
                    <img src="${testimonial.image}" alt="${testimonial.name}" style="width: 60px; height: 60px; border-radius: 50%; object-fit: cover;">
                    <div>
                        <h4 style="margin-bottom: 3px;">${testimonial.name}</h4>
                        <span style="color: #64748b; font-size: 13px;">${testimonial.position}</span>
                    </div>
                </div>
                <p style="font-style: italic;">"${testimonial.text}"</p>
                <div style="margin-top: 15px; color: #f59e0b;">
                    ${'<i class="fas fa-star"></i>'.repeat(testimonial.rating)}
                </div>
            </div>
            <div class="admin-card-footer">
                <span>${testimonial.rating} Stars</span>
                <div class="action-btns">
                    <button class="action-btn edit" onclick="editTestimonial(${testimonial.id})">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="action-btn delete" onclick="confirmDelete('testimonial', ${testimonial.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function openTestimonialModal(id = null) {
    document.getElementById('testimonialModalTitle').textContent = id ? 'Edit Testimonial' : 'Add New Testimonial';
    document.getElementById('testimonialForm').reset();
    document.getElementById('testimonialId').value = '';
    
    if (id) {
        const testimonial = testimonialsData.find(t => t.id === id);
        if (testimonial) {
            document.getElementById('testimonialId').value = testimonial.id;
            document.getElementById('testimonialName').value = testimonial.name;
            document.getElementById('testimonialPosition').value = testimonial.position;
            document.getElementById('testimonialText').value = testimonial.text;
            document.getElementById('testimonialImage').value = testimonial.image;
            document.getElementById('testimonialRating').value = testimonial.rating;
        }
    }
    
    openModal('testimonialModal');
}

function editTestimonial(id) {
    openTestimonialModal(id);
}

function saveTestimonial(e) {
    e.preventDefault();
    
    const id = document.getElementById('testimonialId').value;
    const testimonialData = {
        name: document.getElementById('testimonialName').value,
        position: document.getElementById('testimonialPosition').value,
        text: document.getElementById('testimonialText').value,
        image: document.getElementById('testimonialImage').value,
        rating: parseInt(document.getElementById('testimonialRating').value)
    };
    
    if (id) {
        const index = testimonialsData.findIndex(t => t.id === parseInt(id));
        testimonialsData[index] = { ...testimonialsData[index], ...testimonialData };
        showToast('success', 'Updated', 'Testimonial updated successfully');
    } else {
        testimonialData.id = testimonialsData.length + 1;
        testimonialsData.push(testimonialData);
        showToast('success', 'Created', 'Testimonial created successfully');
    }
    
    closeModal('testimonialModal');
    loadTestimonials();
}

// ==========================================
// ADMIN USERS MANAGEMENT
// ==========================================
function loadAdmins() {
    const tbody = document.getElementById('adminsTable');
    tbody.innerHTML = adminsData.map(admin => `
        <tr>
            <td>${admin.name}</td>
            <td>${admin.email}</td>
            <td><span class="status ${admin.role === 'super_admin' ? 'approved' : 'contacted'}">${admin.role.replace('_', ' ')}</span></td>
            <td>${admin.created}</td>
            <td>
                <div class="action-btns">
                    <button class="action-btn edit" onclick="editAdmin(${admin.id})">
                        <i class="fas fa-edit"></i>
                    </button>
                    ${admin.id !== 1 ? `
                        <button class="action-btn delete" onclick="confirmDelete('admin', ${admin.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    ` : ''}
                </div>
            </td>
        </tr>
    `).join('');
}

function openAdminModal(id = null) {
    document.getElementById('adminModalTitle').textContent = id ? 'Edit Admin' : 'Register New Admin';
    document.getElementById('adminForm').reset();
    document.getElementById('adminId').value = '';
    
    if (id) {
        const admin = adminsData.find(a => a.id === id);
        if (admin) {
            document.getElementById('adminId').value = admin.id;
            document.getElementById('adminFullName').value = admin.name;
            document.getElementById('adminEmail').value = admin.email;
            document.getElementById('adminRole').value = admin.role;
        }
    }
    
    openModal('adminModal');
}

function editAdmin(id) {
    openAdminModal(id);
}

function saveAdmin(e) {
    e.preventDefault();
    
    const id = document.getElementById('adminId').value;
    const adminData = {
        name: document.getElementById('adminFullName').value,
        email: document.getElementById('adminEmail').value,
        role: document.getElementById('adminRole').value
    };
    
    const password = document.getElementById('adminPassword').value;
    if (password) {
        adminData.password = password; // In production, hash this
    }
    
    if (id) {
        const index = adminsData.findIndex(a => a.id === parseInt(id));
        adminsData[index] = { ...adminsData[index], ...adminData };
        showToast('success', 'Updated', 'Admin updated successfully');
    } else {
        adminData.id = adminsData.length + 1;
        adminData.created = new Date().toISOString().split('T')[0];
        adminsData.push(adminData);
        showToast('success', 'Registered', 'New admin registered successfully');
    }
    
    closeModal('adminModal');
    loadAdmins();
}

// ==========================================
// DELETE CONFIRMATION
// ==========================================
let deleteContext = { type: null, id: null };

function confirmDelete(type, id) {
    deleteContext = { type, id };
    document.getElementById('confirmMessage').textContent = `Are you sure you want to delete this ${type}?`;
    document.getElementById('confirmAction').onclick = executeDelete;
    openModal('confirmModal');
}

function executeDelete() {
    const { type, id } = deleteContext;
    
    switch (type) {
        case 'inquiry':
            inquiriesData = inquiriesData.filter(i => i.id !== id);
            loadInquiries();
            loadDashboardData();
            break;
        case 'service':
            servicesData = servicesData.filter(s => s.id !== id);
            loadServices();
            loadDashboardData();
            break;
        case 'portfolio':
            portfolioData = portfolioData.filter(p => p.id !== id);
            loadPortfolio();
            break;
        case 'testimonial':
            testimonialsData = testimonialsData.filter(t => t.id !== id);
            loadTestimonials();
            break;
        case 'admin':
            adminsData = adminsData.filter(a => a.id !== id);
            loadAdmins();
            break;
    }
    
    closeModal('confirmModal');
    showToast('success', 'Deleted', `${type.charAt(0).toUpperCase() + type.slice(1)} deleted successfully`);
}

// ==========================================
// MODAL UTILITIES
// ==========================================
function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
    document.body.style.overflow = '';
}

// Close modal on overlay click
document.querySelectorAll('.admin-modal-overlay').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});

// ==========================================
// TOAST NOTIFICATIONS
// ==========================================
function showToast(type, title, message) {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <div class="toast-icon">
            <i class="fas fa-${type === 'success' ? 'check' : type === 'error' ? 'times' : 'info'}"></i>
        </div>
        <div class="toast-content">
            <h4>${title}</h4>
            <p>${message}</p>
        </div>
    `;
    
    container.appendChild(toast);
    
    setTimeout(() => toast.classList.add('show'), 100);
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ==========================================
// LOGOUT
// ==========================================
function logout() {
    localStorage.removeItem('adminName');
    localStorage.removeItem('adminToken');
    window.location.href = 'login.html';
}
