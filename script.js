// Page Transitions
document.addEventListener("DOMContentLoaded", () => {
    // Add fade-in class to main content
    document.body.classList.add("page-transition");
    requestAnimationFrame(() => {
        document.body.classList.add("fade-in");
    });

    // Handle link clicks for smooth page transitions
    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", e => {
            // Only handle internal links
            if (link.href && link.href.startsWith(window.location.origin)) {
                e.preventDefault();
                document.body.classList.remove("fade-in");
                
                setTimeout(() => {
                    window.location.href = link.href;
                }, 600); // Match this with CSS transition duration
            }
        });
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.2,
    rootMargin: "50px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = "running";
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements with animations
document.addEventListener("DOMContentLoaded", () => {
    const animatedElements = document.querySelectorAll('.feature-card, .blog-card');
    animatedElements.forEach(el => {
        el.style.animationPlayState = "paused";
        observer.observe(el);
    });
});

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Newsletter Form
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]').value;
        console.log('Newsletter subscription:', email);
        newsletterForm.reset();
        alert('Thank you for subscribing!');
    });
}

// Challenge timer
const updateChallengeTimer = () => {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    
    const timeLeft = tomorrow - now;
    const hours = Math.floor(timeLeft / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
    const timerElement = document.querySelector('.challenge-timer');
    if (timerElement) {
        timerElement.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
};

// Update timer every second
setInterval(updateChallengeTimer, 1000);

// Initialize challenge timer
updateChallengeTimer();

// Add smooth scroll to top button
const scrollToTop = () => {
    const scrollButton = document.createElement('button');
    scrollButton.innerHTML = '↑';
    scrollButton.className = 'scroll-to-top';
    document.body.appendChild(scrollButton);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollButton.classList.add('show');
        } else {
            scrollButton.classList.remove('show');
        }
    });

    scrollButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
};

// Initialize scroll to top button
scrollToTop(); 