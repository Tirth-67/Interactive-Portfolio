// Project Data
const projectsData = [
    {
        title: 'Space Explorer',
        description: 'An interactive space exploration platform featuring real-time data visualization, 3D planet rendering, and live astronomy updates. Built with Canvas API for smooth animations and WebGL for advanced graphics rendering.',
        technologies: ['JavaScript', 'Canvas API', 'WebGL', 'Three.js']
    },
    {
        title: 'Music Mixer',
        description: 'Professional-grade audio mixing interface with real-time waveform display, frequency analysis, and multi-track recording capabilities. Features advanced signal processing and equalizer controls.',
        technologies: ['Web Audio API', 'React', 'D3.js', 'FFT Algorithm']
    },
    {
        title: 'Design System',
        description: 'Comprehensive component library with beautiful animations and smooth interactions. Includes reusable components, theming system, and extensive documentation for seamless integration.',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'Storybook']
    },
    {
        title: 'Game Platform',
        description: 'Multiplayer gaming platform with smooth animations and real-time updates. Features matchmaking, leaderboards, chat system, and support for multiple concurrent games.',
        technologies: ['JavaScript', 'WebSocket', 'Node.js', 'MongoDB']
    },
    {
        title: 'E-Commerce Hub',
        description: 'Full-featured online store with integrated payment processing, inventory management, and order tracking. Includes admin dashboard, product recommendations, and customer analytics.',
        technologies: ['Node.js', 'MongoDB', 'Express.js', 'Stripe API']
    },
    {
        title: 'Analytics Dashboard',
        description: 'Real-time data analytics platform with interactive charts, insights visualization, and customizable reports. Features data export, predictive analytics, and real-time alerts.',
        technologies: ['Chart.js', 'Vue.js', 'D3.js', 'Python']
    }
];

// Open Modal
function openModal(index) {
    const modal = document.getElementById('projectModal');
    const project = projectsData[index];
    
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalDescription').textContent = project.description;
    
    const tagsContainer = document.getElementById('modalTags');
    tagsContainer.innerHTML = '';
    project.technologies.forEach(tech => {
        const tag = document.createElement('span');
        tag.className = 'tag';
        tag.textContent = tech;
        tagsContainer.appendChild(tag);
    });
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close Modal
function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close Modal When Clicking Outside
window.addEventListener('click', (event) => {
    const modal = document.getElementById('projectModal');
    if (event.target === modal) {
        closeModal();
    }
});

// Smooth Scroll to Section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

// Navigation Links Active State
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute('href').substring(1);
        scrollToSection(sectionId);
    });
});

// Scroll Animation for Cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all project cards
document.querySelectorAll('.project-card').forEach(card => {
    observer.observe(card);
});

// Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Show success message
    const form = document.getElementById('contactForm');
    const submitBtn = form.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = '✓ Message Sent!';
    submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
    
    // Reset form
    form.reset();
    
    // Reset button after 3 seconds
    setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.style.background = '';
    }, 3000);
});

// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
});

// Close mobile menu when link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu.style.display === 'flex') {
            navMenu.style.display = 'none';
        }
    });
});

// Parallax Effect on Scroll
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const stars = document.querySelector('.stars');
    if (stars) {
        stars.style.transform = `translateY(${scrollY * 0.5}px)`;
    }
});

// Add animation delays to project cards
document.querySelectorAll('.project-card').forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
});

// Skill bars animation on scroll
const skillBars = document.querySelectorAll('.skill-progress');
const skillsSection = document.querySelector('.skills');

const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            skillBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
            skillsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

if (skillsSection) {
    skillsObserver.observe(skillsSection);
}

// Keyboard Navigation for Modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

console.log('🚀 Creative Portfolio Loaded Successfully!');
