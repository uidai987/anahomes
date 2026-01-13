// ==========================================
// NAVBAR SCROLL EFFECT
// ==========================================
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ==========================================
// MOBILE MENU
// ==========================================
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
});

function closeMobileMenu() {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
}

// ==========================================
// ENQUIRY MODAL
// ==========================================
const enquiryModal = document.getElementById('enquiryModal');
const thankYouModal = document.getElementById('thankYouModal');

function openEnquiryForm() {
    enquiryModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeEnquiryForm() {
    enquiryModal.classList.remove('active');
    document.body.style.overflow = '';
}

function closeThankYou() {
    thankYouModal.classList.remove('active');
    document.body.style.overflow = '';
}

// Close modal on overlay click
enquiryModal.addEventListener('click', (e) => {
    if (e.target === enquiryModal) {
        closeEnquiryForm();
    }
});

thankYouModal.addEventListener('click', (e) => {
    if (e.target === thankYouModal) {
        closeThankYou();
    }
});

// ==========================================
// FORM SUBMISSIONS
// ==========================================
function submitEnquiry(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    fetch('api/submit_enquiry.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            closeEnquiryForm();
            thankYouModal.classList.add('active');
            form.reset();
        } else {
            alert(data.message || 'An error occurred. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        // For demo, show thank you modal
        closeEnquiryForm();
        thankYouModal.classList.add('active');
        form.reset();
    });
}

function submitContactForm(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    fetch('api/submit_contact.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            thankYouModal.classList.add('active');
            form.reset();
        } else {
            alert(data.message || 'An error occurred. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        // For demo, show thank you modal
        thankYouModal.classList.add('active');
        form.reset();
    });
}

// ==========================================
// SERVICES SLIDER
// ==========================================
let currentServiceSlide = 0;
let servicesData = [];

// Default services (used if database is not available)
const defaultServices = [
    {
        id: 1,
        title: 'Residential Construction',
        description: 'Building dream homes with precision and quality craftsmanship.',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
        icon: 'home'
    },
    {
        id: 2,
        title: 'Commercial Construction',
        description: 'State-of-the-art commercial buildings that inspire success.',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
        icon: 'building'
    },
    {
        id: 3,
        title: 'Industrial Projects',
        description: 'Heavy-duty industrial facilities built to last.',
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80',
        icon: 'industry'
    },
    {
        id: 4,
        title: 'Renovation Services',
        description: 'Transforming spaces with modern renovation solutions.',
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80',
        icon: 'tools'
    },
    {
        id: 5,
        title: 'Interior Design',
        description: 'Creating beautiful interiors that reflect your style.',
        image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80',
        icon: 'couch'
    },
    {
        id: 6,
        title: 'Project Management',
        description: 'Expert project management for seamless execution.',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
        icon: 'tasks'
    }
];

function loadServices() {
    fetch('api/get_services.php')
        .then(response => response.json())
        .then(data => {
            servicesData = data.length > 0 ? data : defaultServices;
            renderServices();
        })
        .catch(error => {
            console.error('Error loading services:', error);
            servicesData = defaultServices;
            renderServices();
        });
}

function renderServices() {
    const slider = document.getElementById('servicesSlider');
    const dotsContainer = document.getElementById('sliderDots');
    
    slider.innerHTML = servicesData.map(service => `
        <div class="service-card">
            <div class="service-image">
                <img src="${service.image}" alt="${service.title}">
                <div class="service-icon">
                    <i class="fas fa-${service.icon}"></i>
                </div>
            </div>
            <div class="service-content">
                <h4>${service.title}</h4>
                <p>${service.description}</p>
                <a href="#" class="service-link">Learn More <i class="fas fa-arrow-right"></i></a>
            </div>
        </div>
    `).join('');

    // Calculate number of slides based on viewport
    const slidesPerView = getSlidesPerView();
    const totalSlides = Math.ceil(servicesData.length / slidesPerView);
    
    dotsContainer.innerHTML = Array(totalSlides).fill('')
        .map((_, index) => `<div class="slider-dot ${index === 0 ? 'active' : ''}" onclick="goToServiceSlide(${index})"></div>`)
        .join('');
}

function getSlidesPerView() {
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
}

function slideServices(direction) {
    const slider = document.getElementById('servicesSlider');
    const slidesPerView = getSlidesPerView();
    const totalSlides = Math.ceil(servicesData.length / slidesPerView);
    
    if (direction === 'next') {
        currentServiceSlide = (currentServiceSlide + 1) % totalSlides;
    } else {
        currentServiceSlide = (currentServiceSlide - 1 + totalSlides) % totalSlides;
    }
    
    updateServiceSlider();
}

function goToServiceSlide(index) {
    currentServiceSlide = index;
    updateServiceSlider();
}

function updateServiceSlider() {
    const slider = document.getElementById('servicesSlider');
    const slidesPerView = getSlidesPerView();
    const slideWidth = 100 / slidesPerView;
    
    slider.style.transform = `translateX(-${currentServiceSlide * 100}%)`;
    
    // Update dots
    document.querySelectorAll('#sliderDots .slider-dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentServiceSlide);
    });
}

// Auto-slide services
let serviceAutoSlide = setInterval(() => slideServices('next'), 5000);

// Pause auto-slide on hover
document.querySelector('.services-slider-container')?.addEventListener('mouseenter', () => {
    clearInterval(serviceAutoSlide);
});

document.querySelector('.services-slider-container')?.addEventListener('mouseleave', () => {
    serviceAutoSlide = setInterval(() => slideServices('next'), 5000);
});

// ==========================================
// TESTIMONIALS SLIDER
// ==========================================
let currentTestimonialSlide = 0;
let testimonialsData = [];

const defaultTestimonials = [
    {
        id: 1,
        name: 'John Smith',
        position: 'CEO, Tech Corp',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
        text: 'BuildCraft exceeded our expectations in every way. The quality of work, attention to detail, and professional approach made our commercial project a huge success.',
        rating: 5
    },
    {
        id: 2,
        name: 'Sarah Johnson',
        position: 'Homeowner',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
        text: 'Our dream home became a reality thanks to BuildCraft. Their team was incredibly professional, and the final result was beyond what we imagined.',
        rating: 5
    },
    {
        id: 3,
        name: 'Michael Chen',
        position: 'Director, Chen Industries',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
        text: 'Working with BuildCraft on our industrial facility was seamless. They delivered on time and within budget. Highly recommend their services.',
        rating: 5
    },
    {
        id: 4,
        name: 'Emily Davis',
        position: 'Restaurant Owner',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
        text: 'The renovation of our restaurant was handled with such care and expertise. BuildCraft truly understands their clients\' vision.',
        rating: 5
    }
];

function loadTestimonials() {
    fetch('api/get_testimonials.php')
        .then(response => response.json())
        .then(data => {
            testimonialsData = data.length > 0 ? data : defaultTestimonials;
            renderTestimonials();
        })
        .catch(error => {
            console.error('Error loading testimonials:', error);
            testimonialsData = defaultTestimonials;
            renderTestimonials();
        });
}

function renderTestimonials() {
    const slider = document.getElementById('testimonialsSlider');
    const dotsContainer = document.getElementById('testimonialDots');
    
    slider.innerHTML = testimonialsData.map(testimonial => `
        <div class="testimonial-card">
            <i class="fas fa-quote-right testimonial-quote"></i>
            <div class="testimonial-rating">
                ${Array(testimonial.rating).fill('<i class="fas fa-star"></i>').join('')}
            </div>
            <p class="testimonial-text">"${testimonial.text}"</p>
            <div class="testimonial-author">
                <img src="${testimonial.image}" alt="${testimonial.name}">
                <div class="author-info">
                    <h5>${testimonial.name}</h5>
                    <span>${testimonial.position}</span>
                </div>
            </div>
        </div>
    `).join('');

    const slidesPerView = window.innerWidth <= 768 ? 1 : 2;
    const totalSlides = Math.ceil(testimonialsData.length / slidesPerView);
    
    dotsContainer.innerHTML = Array(totalSlides).fill('')
        .map((_, index) => `<div class="slider-dot ${index === 0 ? 'active' : ''}" onclick="goToTestimonialSlide(${index})"></div>`)
        .join('');
}

function slideTestimonials(direction) {
    const slidesPerView = window.innerWidth <= 768 ? 1 : 2;
    const totalSlides = Math.ceil(testimonialsData.length / slidesPerView);
    
    if (direction === 'next') {
        currentTestimonialSlide = (currentTestimonialSlide + 1) % totalSlides;
    } else {
        currentTestimonialSlide = (currentTestimonialSlide - 1 + totalSlides) % totalSlides;
    }
    
    updateTestimonialSlider();
}

function goToTestimonialSlide(index) {
    currentTestimonialSlide = index;
    updateTestimonialSlider();
}

function updateTestimonialSlider() {
    const slider = document.getElementById('testimonialsSlider');
    
    slider.style.transform = `translateX(-${currentTestimonialSlide * 100}%)`;
    
    document.querySelectorAll('#testimonialDots .slider-dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentTestimonialSlide);
    });
}

// Auto-slide testimonials
let testimonialAutoSlide = setInterval(() => slideTestimonials('next'), 6000);

document.querySelector('.testimonials-slider-container')?.addEventListener('mouseenter', () => {
    clearInterval(testimonialAutoSlide);
});

document.querySelector('.testimonials-slider-container')?.addEventListener('mouseleave', () => {
    testimonialAutoSlide = setInterval(() => slideTestimonials('next'), 6000);
});

// ==========================================
// PORTFOLIO
// ==========================================
let portfolioData = [];

const defaultPortfolio = [
    {
        id: 1,
        title: 'Modern Villa',
        category: 'residential',
        image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80'
    },
    {
        id: 2,
        title: 'Corporate Tower',
        category: 'commercial',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80'
    },
    {
        id: 3,
        title: 'Manufacturing Plant',
        category: 'industrial',
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80'
    },
    {
        id: 4,
        title: 'Luxury Apartment',
        category: 'residential',
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80'
    },
    {
        id: 5,
        title: 'Shopping Mall',
        category: 'commercial',
        image: 'https://images.unsplash.com/photo-1567449303078-57ad995bd329?w=600&q=80'
    },
    {
        id: 6,
        title: 'Warehouse Complex',
        category: 'industrial',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80'
    }
];

function loadPortfolio() {
    fetch('api/get_portfolio.php')
        .then(response => response.json())
        .then(data => {
            portfolioData = data.length > 0 ? data : defaultPortfolio;
            renderPortfolio('all');
        })
        .catch(error => {
            console.error('Error loading portfolio:', error);
            portfolioData = defaultPortfolio;
            renderPortfolio('all');
        });
}

function renderPortfolio(filter) {
    const grid = document.getElementById('portfolioGrid');
    const filteredData = filter === 'all' 
        ? portfolioData 
        : portfolioData.filter(item => item.category === filter);
    
    grid.innerHTML = filteredData.slice(0, 6).map(item => `
        <div class="portfolio-item" data-category="${item.category}">
            <img src="${item.image}" alt="${item.title}">
            <div class="portfolio-overlay">
                <h4>${item.title}</h4>
                <span>${item.category.charAt(0).toUpperCase() + item.category.slice(1)}</span>
            </div>
        </div>
    `).join('');
}

// Portfolio filters
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderPortfolio(btn.dataset.filter);
    });
});

// ==========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==========================================
// ACTIVE NAV LINK ON SCROLL
// ==========================================
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ==========================================
// WINDOW RESIZE HANDLER
// ==========================================
window.addEventListener('resize', () => {
    renderServices();
    renderTestimonials();
    currentServiceSlide = 0;
    currentTestimonialSlide = 0;
    updateServiceSlider();
    updateTestimonialSlider();
});

// ==========================================
// INITIALIZE
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    loadServices();
    loadTestimonials();
    loadPortfolio();
});
