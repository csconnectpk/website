// Initialize Lucide icons
lucide.createIcons();

// Mobile menu functionality
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !mobileMenuButton.contains(e.target)) {
        mobileMenu.classList.add('hidden');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

// Parallax effect for hero section
const heroBg = document.getElementById('hero-bg');
window.addEventListener('scroll', () => {
    const scroll = window.pageYOffset;
    heroBg.style.transform = `translateY(${scroll * 0.5}px)`;
});

// Add floating animation to feature cards
document.querySelectorAll('.feature-card').forEach(card => {
    card.classList.add('animate-float');
});

// Add scroll animations to sections
document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
});

// Add staggered animations to feature cards
document.querySelectorAll('.feature-card').forEach((card, index) => {
    card.classList.add('fade-in');
    card.style.transitionDelay = `${index * 100}ms`;
    observer.observe(card);
});

// Add hover effect to social links
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.transform = 'scale(1.05)';
    });
    link.addEventListener('mouseleave', () => {
        link.style.transform = 'scale(1)';
    });
});

// Contact form handling
const contactForm = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Here you would typically send the data to a server
    // For now, we'll just show the success message
    console.log('Form submitted:', data);
    
    // Show success message
    successMessage.classList.remove('hidden');
    successMessage.classList.add('show');
    
    // Reset form
    contactForm.reset();
    
    // Hide success message after 3 seconds
    setTimeout(() => {
        successMessage.classList.remove('show');
        setTimeout(() => {
            successMessage.classList.add('hidden');
        }, 500);
    }, 3000);
}); 