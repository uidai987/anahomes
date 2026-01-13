// ==========================================
// PORTFOLIO PAGE SPECIFIC JAVASCRIPT
// ==========================================

let allProjects = [];
let displayedProjects = [];
let currentPage = 1;
const projectsPerPage = 6;
let currentCategory = 'all';
let currentTag = null;
let searchQuery = '';

// Default projects data (used if database is not available)
const defaultProjects = [
    {
        id: 1,
        title: 'Modern Luxury Villa',
        category: 'residential',
        description: 'A stunning 5-bedroom luxury villa featuring contemporary architecture, smart home technology, and sustainable design elements. Located in an exclusive gated community.',
        image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
        location: 'Beverly Hills, CA',
        year: '2023',
        area: '8,500 sq ft',
        budget: '$3.5M',
        tags: ['Modern', 'Luxury', 'Smart Home', 'Sustainable']
    },
    {
        id: 2,
        title: 'Corporate Headquarters',
        category: 'commercial',
        description: 'A state-of-the-art 25-story corporate tower featuring flexible office spaces, green rooftop gardens, and cutting-edge sustainability features.',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
        location: 'Downtown Chicago, IL',
        year: '2023',
        area: '450,000 sq ft',
        budget: '$85M',
        tags: ['High-Rise', 'Office', 'LEED Certified', 'Modern']
    },
    {
        id: 3,
        title: 'Manufacturing Facility',
        category: 'industrial',
        description: 'A large-scale manufacturing plant designed for automotive parts production with advanced automation systems and eco-friendly features.',
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80',
        location: 'Detroit, MI',
        year: '2022',
        area: '320,000 sq ft',
        budget: '$45M',
        tags: ['Manufacturing', 'Automation', 'Industrial', 'Large Scale']
    },
    {
        id: 4,
        title: 'Oceanfront Estate',
        category: 'residential',
        description: 'An elegant beachfront property featuring panoramic ocean views, infinity pool, and seamless indoor-outdoor living spaces.',
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
        location: 'Malibu, CA',
        year: '2023',
        area: '12,000 sq ft',
        budget: '$8.2M',
        tags: ['Beachfront', 'Luxury', 'Pool', 'Modern']
    },
    {
        id: 5,
        title: 'Retail Shopping Center',
        category: 'commercial',
        description: 'A premium lifestyle shopping center featuring 150+ retail stores, entertainment zones, and modern dining experiences.',
        image: 'https://images.unsplash.com/photo-1567449303078-57ad995bd329?w=800&q=80',
        location: 'Austin, TX',
        year: '2022',
        area: '680,000 sq ft',
        budget: '$120M',
        tags: ['Retail', 'Mall', 'Entertainment', 'Mixed-Use']
    },
    {
        id: 6,
        title: 'Distribution Warehouse',
        category: 'industrial',
        description: 'A high-tech logistics center with automated storage systems, loading docks, and efficient distribution infrastructure.',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
        location: 'Phoenix, AZ',
        year: '2023',
        area: '500,000 sq ft',
        budget: '$55M',
        tags: ['Warehouse', 'Logistics', 'Automation', 'Distribution']
    },
    {
        id: 7,
        title: 'Contemporary Family Home',
        category: 'residential',
        description: 'A beautiful 4-bedroom family home with open floor plan, energy-efficient design, and smart home integration.',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
        location: 'Seattle, WA',
        year: '2023',
        area: '4,200 sq ft',
        budget: '$1.8M',
        tags: ['Family Home', 'Modern', 'Energy Efficient', 'Smart Home']
    },
    {
        id: 8,
        title: 'Medical Office Building',
        category: 'commercial',
        description: 'A specialized healthcare facility featuring multiple medical suites, diagnostic centers, and patient amenities.',
        image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=800&q=80',
        location: 'Boston, MA',
        year: '2022',
        area: '85,000 sq ft',
        budget: '$32M',
        tags: ['Healthcare', 'Medical', 'Office', 'Specialized']
    },
    {
        id: 9,
        title: 'Historic Restaurant Renovation',
        category: 'renovation',
        description: 'Complete renovation of a historic building into a upscale restaurant while preserving original architectural elements.',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
        location: 'New Orleans, LA',
        year: '2023',
        area: '6,500 sq ft',
        budget: '$2.1M',
        tags: ['Restaurant', 'Historic', 'Renovation', 'Preservation']
    },
    {
        id: 10,
        title: 'Boutique Hotel',
        category: 'commercial',
        description: 'A charming 50-room boutique hotel with unique design elements, rooftop bar, and personalized guest experiences.',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
        location: 'Miami, FL',
        year: '2022',
        area: '42,000 sq ft',
        budget: '$28M',
        tags: ['Hotel', 'Boutique', 'Hospitality', 'Design']
    },
    {
        id: 11,
        title: 'Food Processing Plant',
        category: 'industrial',
        description: 'A state-of-the-art food processing facility with strict hygiene standards, cold storage, and efficient production lines.',
        image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80',
        location: 'Sacramento, CA',
        year: '2023',
        area: '180,000 sq ft',
        budget: '$38M',
        tags: ['Food Processing', 'Manufacturing', 'Cold Storage', 'Industrial']
    },
    {
        id: 12,
        title: 'Office Building Renovation',
        category: 'renovation',
        description: 'Modern transformation of a 1970s office building into a contemporary co-working space with updated amenities.',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
        location: 'San Francisco, CA',
        year: '2023',
        area: '35,000 sq ft',
        budget: '$8.5M',
        tags: ['Office', 'Renovation', 'Co-working', 'Modern']
    }
];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    setupCategoryFilters();
    setupSearch();
});

function loadProjects() {
    fetch('api/get_portfolio.php')
        .then(response => response.json())
        .then(data => {
            allProjects = data.length > 0 ? data : defaultProjects;
            initializePortfolio();
        })
        .catch(error => {
            console.error('Error loading portfolio:', error);
            allProjects = defaultProjects;
            initializePortfolio();
        });
}

function initializePortfolio() {
    renderTags();
    filterProjects();
    updateStats();
}

function renderTags() {
    const tagsContainer = document.getElementById('tagsContainer');
    const allTags = new Set();
    
    allProjects.forEach(project => {
        project.tags.forEach(tag => allTags.add(tag));
    });
    
    tagsContainer.innerHTML = Array.from(allTags).map(tag => 
        `<button class="tag-btn" data-tag="${tag}">${tag}</button>`
    ).join('');
    
    // Setup tag click handlers
    document.querySelectorAll('.tag-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tag-btn').forEach(b => b.classList.remove('active'));
            
            if (currentTag === btn.dataset.tag) {
                currentTag = null;
            } else {
                btn.classList.add('active');
                currentTag = btn.dataset.tag;
            }
            
            currentPage = 1;
            filterProjects();
        });
    });
}

function setupCategoryFilters() {
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            currentPage = 1;
            filterProjects();
        });
    });
}

function setupSearch() {
    const searchInput = document.getElementById('portfolioSearch');
    let searchTimeout;
    
    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            searchQuery = e.target.value.toLowerCase();
            currentPage = 1;
            filterProjects();
        }, 300);
    });
}

function filterProjects() {
    displayedProjects = allProjects.filter(project => {
        // Category filter
        if (currentCategory !== 'all' && project.category !== currentCategory) {
            return false;
        }
        
        // Tag filter
        if (currentTag && !project.tags.includes(currentTag)) {
            return false;
        }
        
        // Search filter
        if (searchQuery) {
            const searchableText = `${project.title} ${project.description} ${project.location} ${project.tags.join(' ')}`.toLowerCase();
            if (!searchableText.includes(searchQuery)) {
                return false;
            }
        }
        
        return true;
    });
    
    renderProjects();
    updateLoadMoreButton();
}

function renderProjects() {
    const grid = document.getElementById('portfolioGrid');
    const projectsToShow = displayedProjects.slice(0, currentPage * projectsPerPage);
    
    if (projectsToShow.length === 0) {
        grid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>No Projects Found</h3>
                <p>Try adjusting your filters or search terms</p>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = projectsToShow.map(project => `
        <div class="portfolio-card" data-id="${project.id}">
            <div class="portfolio-card-image">
                <img src="${project.image}" alt="${project.title}">
                <span class="portfolio-badge">${project.category}</span>
            </div>
            <div class="portfolio-card-content">
                <h4>${project.title}</h4>
                <p>${project.description}</p>
                <div class="portfolio-card-tags">
                    ${project.tags.slice(0, 3).map(tag => `<span>${tag}</span>`).join('')}
                </div>
                <div class="portfolio-card-footer">
                    <span class="location">
                        <i class="fas fa-map-marker-alt"></i>
                        ${project.location}
                    </span>
                    <span class="view-project-btn" onclick="openProjectModal(${project.id})">
                        View Details <i class="fas fa-arrow-right"></i>
                    </span>
                </div>
            </div>
        </div>
    `).join('');
}

function updateLoadMoreButton() {
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const totalShown = currentPage * projectsPerPage;
    
    if (totalShown >= displayedProjects.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'inline-flex';
    }
}

function loadMoreProjects() {
    currentPage++;
    renderProjects();
    updateLoadMoreButton();
}

function updateStats() {
    const totalProjects = document.getElementById('totalProjects');
    const residentialCount = document.getElementById('residentialCount');
    const commercialCount = document.getElementById('commercialCount');
    const industrialCount = document.getElementById('industrialCount');
    
    animateCounter(totalProjects, allProjects.length);
    animateCounter(residentialCount, allProjects.filter(p => p.category === 'residential').length);
    animateCounter(commercialCount, allProjects.filter(p => p.category === 'commercial').length);
    animateCounter(industrialCount, allProjects.filter(p => p.category === 'industrial').length);
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 30;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 30);
}

// Project Modal
function openProjectModal(projectId) {
    const project = allProjects.find(p => p.id === projectId);
    if (!project) return;
    
    const modalContent = document.getElementById('projectModalContent');
    modalContent.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="project-modal-image">
        <div class="project-modal-body">
            <div class="project-modal-header">
                <span class="category">${project.category}</span>
                <h2>${project.title}</h2>
                <div class="location">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${project.location}</span>
                </div>
            </div>
            <div class="project-details-grid">
                <div class="detail-item">
                    <div class="label">Year Completed</div>
                    <div class="value">${project.year}</div>
                </div>
                <div class="detail-item">
                    <div class="label">Project Area</div>
                    <div class="value">${project.area}</div>
                </div>
                <div class="detail-item">
                    <div class="label">Budget</div>
                    <div class="value">${project.budget}</div>
                </div>
            </div>
            <div class="project-description">
                <h4>Project Overview</h4>
                <p>${project.description}</p>
            </div>
            <div class="project-tags-section">
                <h4>Project Tags</h4>
                <div class="project-tags-list">
                    ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
                </div>
            </div>
            <div class="project-modal-footer">
                <button class="btn btn-primary" onclick="openEnquiryForm()">Start Similar Project</button>
                <button class="btn btn-outline" onclick="closeProjectModal()">Close</button>
            </div>
        </div>
    `;
    
    document.getElementById('projectModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    document.getElementById('projectModal').classList.remove('active');
    document.body.style.overflow = '';
}

// Close modal on overlay click
document.getElementById('projectModal')?.addEventListener('click', (e) => {
    if (e.target.id === 'projectModal') {
        closeProjectModal();
    }
});
