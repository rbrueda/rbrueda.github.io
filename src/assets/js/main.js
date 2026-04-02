import 'flowbite';
import { initFlowbite } from 'flowbite';

// Wait for the HTML to fully load before running ANY logic
document.addEventListener('DOMContentLoaded', () => {
    
    // Initialize Flowbite
    initFlowbite();

    // Mobile Menu Toggle Logic
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    const icon = btn ? btn.querySelector('i') : null;
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (btn && menu && icon) {
        // Toggle menu open/close
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
            menu.classList.toggle('flex');
            
            // Rotate animation
            if (menu.classList.contains('hidden')) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                icon.style.transform = "rotate(0deg)";
            } else {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
                icon.style.transform = "rotate(180deg)";
            }
        });

        // Close menu when a user clicks a link
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.add('hidden');
                menu.classList.remove('flex');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                icon.style.transform = "rotate(0deg)";
            });
        });
    }

    // Smooth Scrolling Logic
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            // Added a tiny safety check just in case an href is only "#"
            if (targetId === '#') return; 
            
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Scroll Reveal Animation Logic
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Triggers when 15% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Stops observing once revealed
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

});