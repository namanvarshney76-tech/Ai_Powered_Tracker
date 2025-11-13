
const CARD_TL = {
    paused: true,
    onStart: () => {
        document.body.classList.add('theme-transition');
    },
    onComplete: () => {
        document.body.classList.remove('theme-transition');
    }
};

document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle functionality
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            CARD_TL.onStart();
            document.body.classList.toggle('dark');
            
            // Save preference to localStorage
            const isDark = document.body.classList.contains('dark');
            localStorage.setItem('darkMode', isDark);
            
            // Play animation timeline
            setTimeout(() => {
                CARD_TL.onComplete();
            }, 300);
        });

        // Check for saved theme preference
        if (localStorage.getItem('darkMode') === 'true') {
            document.body.classList.add('dark');
        }
    }
// Custom cursor
    const cursor = document.createElement('div');
    cursor.classList.add('cursor');
    document.body.appendChild(cursor);

    const heroTitle = document.querySelector('section.text-center h1');
    const cursorWidth = 25;
    const cursorHeight = 25;
    const cursorRightMove = 10;
    const cursorLeftMove = 12;

    document.addEventListener('mousemove', (e) => {
        let x = e.clientX;
        let y = e.clientY;

        if (heroTitle) {
            const rect = heroTitle.getBoundingClientRect();
            if (x > rect.left && x < rect.right && y > rect.top && y < rect.bottom) {
                cursor.style.top = (y - cursorRightMove / 2) + "px";
                cursor.style.left = (x - cursorLeftMove / 2) + "px";
                cursor.style.width = cursorRightMove + "px";
                cursor.style.height = cursorRightMove + "px";
                cursor.style.opacity = "1";
            } else {
                cursor.style.top = (y - cursorHeight / 2) + "px";
                cursor.style.left = (x - cursorWidth / 2) + "px";
                cursor.style.width = cursorWidth + "px";
                cursor.style.height = cursorHeight + "px";
                cursor.style.opacity = "1";
            }
        }
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

    // Animate elements when they come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.observe-me').forEach(el => {
        observer.observe(el);
    });
// Form submission handling
    const contactForm = document.querySelector('form');
if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would typically send the form data to your server
            alert('Thank you for your interest! We will contact you shortly.');
            this.reset();
        });
    }
});