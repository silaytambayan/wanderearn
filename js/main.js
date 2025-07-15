// main.js - Core JavaScript for your blog

// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle (will appear on small screens)
    const menuToggle = document.createElement('button');
    menuToggle.className = 'mobile-menu-toggle';
    menuToggle.innerHTML = '☰ Menu';
    document.querySelector('nav').prepend(menuToggle);
    
    menuToggle.addEventListener('click', function() {
        const navList = document.querySelector('nav ul');
        navList.style.display = navList.style.display === 'flex' ? 'none' : 'flex';
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add current year to footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
});
