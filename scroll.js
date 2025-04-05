// Intersection Observer for fade-in animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1 // Trigger when at least 10% of the element is visible
});

// Observe all sections that should animate
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.content-section, .features, .newsletter');
    sections.forEach(section => observer.observe(section));

    // Handle gradient parallax effect
    const gradient = document.querySelector('.gradient-sphere');
    let scrollPosition = 0;

    window.addEventListener('scroll', () => {
        scrollPosition = window.pageYOffset;
        
        // Adjust gradient opacity and position based on scroll
        if (gradient) {
            const opacity = Math.max(0.9 - (scrollPosition / 1000), 0.3);
            const yOffset = scrollPosition * 0.5;
            
            gradient.style.opacity = opacity;
            gradient.style.transform = `translateY(${yOffset}px) scale(${1 + scrollPosition/2000})`;
        }
    });
}); 