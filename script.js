// Script for Landing Page

document.addEventListener("DOMContentLoaded", () => {
    // Initialize AOS Animation Library
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 50
        });
    }

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(255, 255, 255, 0.98)';
                navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.85)';
                navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.05)';
            }
        });
        // trigger once
        window.dispatchEvent(new Event('scroll'));
    }

    // Smooth scroll for anchor links
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // compensate for navbar height
                    behavior: 'smooth'
                });
                
                // Update active explicitly on click
                navLinks.forEach(link => link.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });

    // Scrollspy for active nav links
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Optional: add a tiny animation for the mock dashboard numbers (simulate live process)
    const mockChart = document.querySelector('.mock-chart');
    if(mockChart) {
        setInterval(() => {
            const randomWidth1 = 30 + Math.random() * 40;
            const randomWidth2 = 30 + Math.random() * 40;
            mockChart.style.background = `linear-gradient(90deg, rgba(16, 185, 129, 0.2) ${randomWidth1}%, rgba(59, 130, 246, 0.2) ${randomWidth2}%)`;
        }, 3000);
    }
});
