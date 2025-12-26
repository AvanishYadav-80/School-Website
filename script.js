// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');

if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Gallery Slider Functionality
document.addEventListener('DOMContentLoaded', function () {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const indicators = document.querySelectorAll('.indicator');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentSlide = 3; // Start with center image
    let isAnimating = false;

    // Update the updateGallery function to add center-image class
    function updateGallery(centerIndex) {
        if (isAnimating) return;
        isAnimating = true;

        galleryItems.forEach((item, index) => {
            item.classList.remove('active', 'center-image');

            // Calculate relative position from center
            const relativePos = index - centerIndex;

            // Reset all transforms
            item.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';

            if (relativePos === 0) {
                // Center image
                item.classList.add('active', 'center-image');
                item.style.left = '50%';
                item.style.right = 'auto';
                item.style.transform = 'translateX(-50%) scale(1)';
                item.style.zIndex = '10';
                item.style.opacity = '1';
                item.style.width = '550px';
                item.style.height = '400px';
            } else if (relativePos === -3) {
                // Far left
                item.style.left = '-200px';
                item.style.right = 'auto';
                item.style.transform = 'scale(0.75)';
                item.style.zIndex = '1';
                item.style.opacity = '0.6';
                item.style.width = '280px';
                item.style.height = '210px';
            } else if (relativePos === -2) {
                // Mid left
                item.style.left = '-120px';
                item.style.right = 'auto';
                item.style.transform = 'scale(0.8)';
                item.style.zIndex = '2';
                item.style.opacity = '0.7';
                item.style.width = '320px';
                item.style.height = '240px';
            } else if (relativePos === -1) {
                // Near left
                item.style.left = '-40px';
                item.style.right = 'auto';
                item.style.transform = 'scale(0.85)';
                item.style.zIndex = '3';
                item.style.opacity = '0.8';
                item.style.width = '360px';
                item.style.height = '270px';
            } else if (relativePos === 1) {
                // Near right
                item.style.left = 'auto';
                item.style.right = '-40px';
                item.style.transform = 'scale(0.85)';
                item.style.zIndex = '3';
                item.style.opacity = '0.8';
                item.style.width = '360px';
                item.style.height = '270px';
            } else if (relativePos === 2) {
                // Mid right
                item.style.left = 'auto';
                item.style.right = '-120px';
                item.style.transform = 'scale(0.8)';
                item.style.zIndex = '2';
                item.style.opacity = '0.7';
                item.style.width = '320px';
                item.style.height = '240px';
            } else if (relativePos === 3) {
                // Far right
                item.style.left = 'auto';
                item.style.right = '-200px';
                item.style.transform = 'scale(0.75)';
                item.style.zIndex = '1';
                item.style.opacity = '0.6';
                item.style.width = '280px';
                item.style.height = '210px';
            } else {
                // Hidden items
                item.style.opacity = '0';
                item.style.zIndex = '0';
            }
        });

        // Update indicators
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === centerIndex);
        });

        setTimeout(() => {
            isAnimating = false;
        }, 500);
    }
    // Next button
    nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % galleryItems.length;
        updateGallery(currentSlide);
    });

    // Previous button
    prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + galleryItems.length) % galleryItems.length;
        updateGallery(currentSlide);
    });

    // Indicator clicks
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentSlide = index;
            updateGallery(currentSlide);
        });
    });

    // Gallery item clicks
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            if (index !== currentSlide) {
                currentSlide = index;
                updateGallery(currentSlide);
            }
        });
    });

    // Auto-play (optional - uncomment to enable)
    // setInterval(() => {
    //     currentSlide = (currentSlide + 1) % galleryItems.length;
    //     updateGallery(currentSlide);
    // }, 4000);

    // Initialize gallery
    updateGallery(currentSlide);
});
// Contact Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);

        // Show success message
        alert('Thank you! Your message has been sent successfully. We will contact you soon.');

        // Reset form
        this.reset();
    });
}

// Add scroll effect to header
window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(102, 126, 234, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        header.style.backdropFilter = 'none';
    }
});

// Animate elements on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.facility-card, .about-text, .about-image');

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize animations
document.addEventListener('DOMContentLoaded', function () {
    // Set initial state for animated elements
    const elements = document.querySelectorAll('.facility-card, .about-text, .about-image');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s ease';
    });

    // Run animation check on scroll
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
});

// Add parallax effect to hero section
window.addEventListener('scroll', function () {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const rate = scrolled * -0.5;

    if (hero) {
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Auto-play gallery slider: removed broken thumbnail-based autoplay.
// To enable autoplay, uncomment the setInterval call inside the gallery initializer above.