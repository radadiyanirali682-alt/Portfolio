// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Scroll to Top Button
const scrollTop = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTop.classList.add('active');
    } else {
        scrollTop.classList.remove('active');
    }
});

scrollTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Progress Bar
const progressBar = document.getElementById('progressBar');

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.pageYOffset / windowHeight) * 100;
    progressBar.style.width = scrolled + '%';
});

// Create Bubble Background Animation
function createBubbleEffect() {
    const bubbleBg = document.getElementById('bubbleBg');
    const bubbleCount = 50;
    
    for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        
        // Random size
        const size = Math.random() * 30 + 10;
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        
        // Random position
        bubble.style.left = `${Math.random() * 100}%`;
        bubble.style.top = `${Math.random() * 100}%`;
        
        // Random animation duration
        const duration = Math.random() * 20 + 10;
        bubble.style.animationDuration = `${duration}s`;
        
        // Random animation delay
        const delay = Math.random() * 15;
        bubble.style.animationDelay = `${delay}s`;
        
        // Random opacity
        bubble.style.opacity = Math.random() * 0.4 + 0.2;
        
        // Random color
        const colors = ['#2563EB', '#7C3AED', '#06B6D4', '#10B981', '#F59E0B'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        bubble.style.background = `radial-gradient(circle, ${randomColor}20 0%, transparent 70%)`;
        
        bubbleBg.appendChild(bubble);
    }
}

// Create Smoke Effect
function createSmokeEffect() {
    const smokeContainer = document.getElementById('smokeContainer');
    const smokeCount = 15;
    
    for (let i = 0; i < smokeCount; i++) {
        const smoke = document.createElement('div');
        smoke.classList.add('smoke');
        
        // Random size
        const size = Math.random() * 300 + 150;
        smoke.style.width = `${size}px`;
        smoke.style.height = `${size}px`;
        
        // Random position
        smoke.style.left = `${Math.random() * 100}%`;
        smoke.style.top = `${Math.random() * 100}%`;
        
        // Random animation duration
        const duration = Math.random() * 60 + 30;
        smoke.style.animationDuration = `${duration}s`;
        
        // Random animation delay
        const delay = Math.random() * 20;
        smoke.style.animationDelay = `${delay}s`;
        
        // Random opacity
        smoke.style.opacity = Math.random() * 0.1 + 0.05;
        
        smokeContainer.appendChild(smoke);
    }
}

// Form submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Here you would normally send data to a server
    console.log('Form submitted:', data);
    
    // Show success message
    alert('Thank you for your message, Nirali! I will get back to you soon.');
    
    // Reset form
    contactForm.reset();
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Header background on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(2, 6, 23, 0.98)';
        header.style.backdropFilter = 'blur(20px)';
    } else {
        header.style.background = 'rgba(15, 23, 42, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    }
});

// Scroll Animation Observer
function initScrollAnimations() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });
    
    elements.forEach(element => {
        observer.observe(element);
    });
}

// Initialize everything when page loads
window.addEventListener('load', () => {
    // Create bubble effect
    createBubbleEffect();
    
    // Create smoke effect
    createSmokeEffect();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Add hover effect to all cards
    const cards = document.querySelectorAll('.card, .skill-item, .highlight-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            if(card.classList.contains('card')) {
                card.style.transform = 'translateY(-8px)';
            } else {
                card.style.transform = 'translateY(-5px)';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
    
    // Typing animation for hero text
    const heroText = document.querySelector('.hero p');
    const originalText = heroText.textContent;
    heroText.textContent = '';
    
    let i = 0;
    function typeWriter() {
        if (i < originalText.length) {
            heroText.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 30);
        }
    }
    
    // Start typing after 1 second
    setTimeout(typeWriter, 1000);
    
    // Animate sections on initial load
    setTimeout(() => {
        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight * 0.8) {
                el.classList.add('animated');
            }
        });
    }, 500);
});