document.addEventListener('DOMContentLoaded', function() {
    // Variables
    const header = document.getElementById('header');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    const cards = document.querySelectorAll('.card');
    const currentYearSpan = document.getElementById('current-year');
    
    // Set current year in footer
    currentYearSpan.textContent = new Date().getFullYear();
    
    // Header scroll effect
    function handleScroll() {
        if (window.scrollY > 10) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Check for cards in viewport
        checkCardsInView();
    }
    
    // Mobile menu toggle
    function toggleMobileMenu() {
        mobileMenu.classList.toggle('active');
        
        // Change menu icon based on state
        const svg = mobileMenuBtn.querySelector('svg');
        if (mobileMenu.classList.contains('active')) {
            svg.innerHTML = `
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            `;
        } else {
            svg.innerHTML = `
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
            `;
        }
    }
    
    // Close mobile menu when clicking a link
    function closeMobileMenu() {
        mobileMenu.classList.remove('active');
        const svg = mobileMenuBtn.querySelector('svg');
        svg.innerHTML = `
            <line x1="4" x2="20" y1="12" y2="12"></line>
            <line x1="4" x2="20" y1="6" y2="6"></line>
            <line x1="4" x2="20" y1="18" y2="18"></line>
        `;
    }
    
    // Check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 &&
            rect.bottom >= 0
        );
    }
    
    // Check which cards are in viewport and animate them
    function checkCardsInView() {
        cards.forEach(card => {
            if (isInViewport(card)) {
                card.classList.add('visible');
            }
        });
    }
    
    // Smooth scroll for anchor links
    function smoothScroll(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
            
            window.scrollTo({
                top: offsetTop - 70, // Adjust for header height
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            closeMobileMenu();
        }
    }
    
    // Event listeners
    window.addEventListener('scroll', handleScroll);
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    
    // Add smooth scroll to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', smoothScroll);
    });
    
    // Close mobile menu when clicking mobile nav links
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
    
    // Initial check for cards in viewport
    checkCardsInView();
    
    // Initial header state check
    handleScroll();
});