// ===========================
// Navigation Toggle (Mobile Improved)
// ===========================
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const navbar = document.getElementById('navbar');

function closeMenu() {
    if (navMenu && navToggle) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
}

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
}

// Close menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});

// ===========================
// Navbar Scroll Effect
// ===========================
window.addEventListener('scroll', () => {
    if (!navbar) return;

    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===========================
// Smooth Scroll (Dynamic Offset Fix)
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (!targetId || targetId === "#") return;

        const target = document.querySelector(targetId);
        if (!target) return;

        e.preventDefault();

        const navbarHeight = navbar ? navbar.offsetHeight : 0;

        const targetPosition =
            target.getBoundingClientRect().top +
            window.pageYOffset -
            navbarHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});

// ===========================
// Active Navigation Link
// ===========================
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    if (!navbar) return;

    const scrollY = window.pageYOffset;
    const navbarHeight = navbar.offsetHeight;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - navbarHeight - 20;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (!navLink) return;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            navLink.classList.add('active');
        } else {
            navLink.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', scrollActive);

// ===========================
// Scroll to Top Button
// ===========================
const scrollTopBtn = document.getElementById('scroll-top');

if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===========================
// Intersection Observer for Animations
// ===========================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

const animateElements = document.querySelectorAll(
    '.timeline-item, .project-card, .skill-category, .education-card'
);

animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===========================
// Contact Form Handling
// ===========================
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');

        const mailtoLink =
            `mailto:gawandedakash95@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
                `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
            )}`;

        window.location.href = mailtoLink;

        showNotification(
            'Message prepared! Your email client should open shortly.',
            'success'
        );

        contactForm.reset();
    });
}

// ===========================
// Notification System
// ===========================
function showNotification(message, type = 'info') {
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) existingNotification.remove();

    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        z-index: 1000;
        animation: slideIn 0.3s ease;
        max-width: 300px;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

const styleSheet = document.createElement('style');
styleSheet.textContent = `
@keyframes slideIn {
    from { transform: translateX(400px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
}

@keyframes slideOut {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(400px); opacity: 0; }
}

.nav-link.active {
    color: var(--primary-color);
}

.nav-link.active::after {
    width: 100%;
}
`;
document.head.appendChild(styleSheet);

// ===========================
// Typing Effect
// ===========================
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

window.addEventListener('load', () => {
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (!heroSubtitle) return;

    const originalText = heroSubtitle.textContent;
    typeWriter(heroSubtitle, originalText, 50);
});

// ===========================
// Skill Hover Effect
// ===========================
document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-3px) scale(1.05)';
    });

    tag.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ===========================
// Project Icon Gradients
// ===========================
const gradients = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
];

document.querySelectorAll('.project-icon').forEach((icon, index) => {
    icon.style.background = gradients[index % gradients.length];
});

// ===========================
// Counter Animation
// ===========================
function animateCounter(element, target, duration = 2000) {
    const increment = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + '+';
        }
    }, 16);
}

const highlightObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.dataset.animated) {
                const h3 = entry.target.querySelector('h3');
                const number = parseInt(h3.textContent);

                if (!isNaN(number)) {
                    entry.target.dataset.animated = 'true';
                    animateCounter(h3, number);
                }
            }
        });
    },
    { threshold: 0.5 }
);

document.querySelectorAll('.highlight-item').forEach(item => {
    highlightObserver.observe(item);
});

// ===========================
// Dark Mode
// ===========================
function initDarkMode() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');

    if (!darkModeToggle) return;

    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem(
            'darkMode',
            document.body.classList.contains('dark-mode')
        );
    });

    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
    }
}

initDarkMode();

// ===========================
// iOS Touch Fix
// ===========================
document.addEventListener('touchstart', () => {}, { passive: true });

// ===========================
// Performance Optimization
// ===========================
function debounce(func, wait = 10) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
}

window.addEventListener('scroll', debounce(scrollActive));

console.log('Portfolio website loaded successfully! 🚀');
console.log('Mobile navigation & scrolling fixed ✅');
