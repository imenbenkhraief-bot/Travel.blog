document.addEventListener('DOMContentLoaded', function() {
    
    // ===== AUTO-DETECT THEME BASED ON PAGE TITLE OR URL =====
    function autoDetectTheme() {
        // Get the page title or URL to determine destination
        const pageTitle = document.title.toLowerCase();
        const pageURL = window.location.pathname.toLowerCase();
        const pageContent = pageTitle + ' ' + pageURL;

        // Beach destinations
        const beachDestinations = ['bali', 'bora bora', 'maldives', 'miami', 'hawaii'];
        
        // City/Urban destinations
        const cityDestinations = ['new york', 'london', 'tokyo', 'dubai', 'barcelona', 'venice', 'seoul'];
        
        // Mountain/Nature destinations
        const mountainDestinations = ['swiss alps', 'iceland', 'banff', 'new zealand'];

        // Check which theme matches
        for (let destination of beachDestinations) {
            if (pageContent.includes(destination)) {
                return 'beach';
            }
        }

        for (let destination of cityDestinations) {
            if (pageContent.includes(destination)) {
                return 'city';
            }
        }

        for (let destination of mountainDestinations) {
            if (pageContent.includes(destination)) {
                return 'mountain';
            }
        }

        // Default to beach if no match
        return 'beach';
    }

    // Set theme automatically
    const detectedTheme = autoDetectTheme();
    document.body.setAttribute('data-theme', detectedTheme);
    console.log('Theme detected:', detectedTheme);

    // ===== ANIMATED BACKGROUND SYSTEM =====
    function createAnimatedBackground() {
        const theme = document.body.getAttribute('data-theme');
        
        if (!theme) {
            console.log('No theme set.');
            return;
        }

        // Create container for animated elements
        let bgContainer = document.querySelector('.animated-bg');
        if (!bgContainer) {
            bgContainer = document.createElement('div');
            bgContainer.className = 'animated-bg';
            document.body.insertBefore(bgContainer, document.body.firstChild);
        }

        // Clear existing elements
        bgContainer.innerHTML = '';

        // Create elements based on theme
        switch(theme) {
            case 'beach':
                createBeachBubbles(bgContainer);
                break;
            case 'mountain':
                createSnowflakes(bgContainer);
                break;
            case 'city':
                createCityStars(bgContainer);
                break;
        }
    }

    // Beach theme - Floating bubbles
    function createBeachBubbles(container) {
        for (let i = 0; i < 20; i++) {
            const bubble = document.createElement('div');
            bubble.className = 'bubble';
            const size = Math.random() * 80 + 30;
            bubble.style.width = size + 'px';
            bubble.style.height = size + 'px';
            bubble.style.left = Math.random() * 100 + '%';
            bubble.style.animationDuration = (Math.random() * 10 + 12) + 's';
            bubble.style.animationDelay = Math.random() * 8 + 's';
            container.appendChild(bubble);
        }
    }

    // Mountain theme - Snowflakes
    function createSnowflakes(container) {
        const snowflakeChars = ['❄', '❅', '❆', '✻', '✼'];
        for (let i = 0; i < 25; i++) {
            const snowflake = document.createElement('div');
            snowflake.className = 'snowflake';
            snowflake.textContent = snowflakeChars[Math.floor(Math.random() * snowflakeChars.length)];
            snowflake.style.left = Math.random() * 100 + '%';
            snowflake.style.fontSize = (Math.random() * 1.8 + 0.8) + 'rem';
            snowflake.style.animationDuration = (Math.random() * 10 + 12) + 's';
            snowflake.style.animationDelay = Math.random() * 8 + 's';
            container.appendChild(snowflake);
        }
    }

    // City theme - Elegant subtle stars
    function createCityStars(container) {
        // Create fewer, more elegant stars
        for (let i = 0; i < 40; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            
            // Varied star sizes for depth - smaller and more subtle
            const sizes = [1, 1.5, 2, 2.5];
            const size = sizes[Math.floor(Math.random() * sizes.length)];
            star.style.width = size + 'px';
            star.style.height = size + 'px';
            
            // Random positioning
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            
            // Varied animation durations and delays for natural twinkling
            star.style.animationDuration = (Math.random() * 4 + 3) + 's';
            star.style.animationDelay = Math.random() * 5 + 's';
            
            // Some stars start with different opacity
            star.style.opacity = Math.random() * 0.5 + 0.3;
            
            container.appendChild(star);
        }
        
        // Add a few shooting stars occasionally
        setInterval(() => {
            if (Math.random() > 0.7) {
                createShootingStar(container);
            }
        }, 8000);
    }

    // Create shooting star effect
    function createShootingStar(container) {
        const shootingStar = document.createElement('div');
        shootingStar.style.position = 'absolute';
        shootingStar.style.width = '2px';
        shootingStar.style.height = '2px';
        shootingStar.style.background = 'white';
        shootingStar.style.borderRadius = '50%';
        shootingStar.style.boxShadow = '0 0 10px 2px rgba(255,255,255,0.8)';
        shootingStar.style.left = Math.random() * 50 + '%';
        shootingStar.style.top = Math.random() * 30 + '%';
        
        // Create tail effect
        shootingStar.style.setProperty('--tail-length', Math.random() * 60 + 40 + 'px');
        shootingStar.style.background = 'linear-gradient(to right, white, transparent)';
        shootingStar.style.width = 'var(--tail-length)';
        shootingStar.style.height = '1px';
        shootingStar.style.transform = 'rotate(45deg)';
        
        container.appendChild(shootingStar);
        
        // Animate shooting star
        const duration = Math.random() * 1000 + 800;
        const distance = Math.random() * 200 + 100;
        
        shootingStar.animate([
            { 
                opacity: 0,
                transform: 'rotate(45deg) translateX(0) translateY(0)'
            },
            { 
                opacity: 1,
                transform: `rotate(45deg) translateX(${distance}px) translateY(${distance}px)`
            },
            { 
                opacity: 0,
                transform: `rotate(45deg) translateX(${distance * 2}px) translateY(${distance * 2}px)`
            }
        ], {
            duration: duration,
            easing: 'ease-out'
        }).onfinish = () => {
            shootingStar.remove();
        };
    }

    // Initialize animated background
    createAnimatedBackground();
    // ===== END ANIMATED BACKGROUND SYSTEM =====

    
    let currentSlide = 0;
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.dot');
    const totalSlides = slides.length;

    // Safety check - make sure elements exist
    if (slides.length === 0 || dots.length === 0) {
        console.error('Slider elements not found');
        return;
    }

    function showSlide(index) {
        // Remove active class from all slides and dots
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Calculate the correct slide index
        currentSlide = (index + totalSlides) % totalSlides;
        
        // Add active class to current slide and dot
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    // Auto-advance every 4 seconds
    let autoSlide = setInterval(nextSlide, 4000);

    // Manual control with dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            clearInterval(autoSlide);
            showSlide(index);
            autoSlide = setInterval(nextSlide, 4000);
        });
    });

    // Pause on hover
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        heroSection.addEventListener('mouseenter', () => {
            clearInterval(autoSlide);
        });
        heroSection.addEventListener('mouseleave', () => {
            autoSlide = setInterval(nextSlide, 4000);
        });
    }

    // Scroll animations for info cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.info-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });

});

/* ===== Logo Animation (Universal) ===== */
const logo = document.querySelector('.logo-img');

if (logo) {
  window.addEventListener('load', () => {
    logo.classList.add('bounce-in');
  });

  logo.addEventListener('mouseenter', () => {
    console.log('Mouse entered - adding hover-forward');
    logo.classList.add('hover-forward');
  });

  logo.addEventListener('mouseleave', () => {
    console.log('Mouse left - removing hover-forward');
    logo.classList.remove('hover-forward');
  });
}  