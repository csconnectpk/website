// Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', () => {
    const themeSwitch = document.querySelector('#checkbox');
    const body = document.querySelector('body');
    
    // Check if user has a saved preference
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        body.classList.remove('dark-theme');
        body.classList.add(currentTheme);
        
        if (currentTheme === 'light-theme') {
            themeSwitch.checked = true;
        }
    }
    
    // Theme switch event listener
    themeSwitch.addEventListener('change', function() {
        if (this.checked) {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
            localStorage.setItem('theme', 'light-theme');
        } else {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark-theme');
        }
    });
});

// Smooth scrolling for navigation links
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