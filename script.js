/* ---------------------------
   DESTINATIONS data + renderer
   --------------------------- */

const DESTINATIONS = {
  beach: [
    { slug: "borabora", name: "Bora Bora", thumbs: [
        "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&q=80&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=1200&q=80&auto=format&fit=crop"
      ], page: "destinations/borabora.html" },
    { slug: "maldives", name: "Maldives", thumbs: [
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=80&auto=format&fit=crop"
      ], page: "destinations/maldives.html" },
    { slug: "seychelles", name: "Seychelles", thumbs: [
        "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&q=80&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1511735643442-503bb3bd348a?w=1200&q=80&auto=format&fit=crop"
      ], page: "destinations/seychelles.html" },
    { slug: "barcelone", name: "Barcelona", thumbs: [
        "https://images.unsplash.com/photo-1511735643442-503bb3bd348a?w=1200&q=80&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1503264116251-35a269479413?w=1200&q=80&auto=format&fit=crop"
      ], page: "destinations/barcelone.html" }
  ],
  nature: [
    { slug: "bali", name: "Bali", thumbs: [
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1508261303786-0f45ae639b47?w=1200&q=80&auto=format&fit=crop"
      ], page: "destinations/bali.html" },
    { slug: "banff", name: "Banff", thumbs: [
        "https://images.unsplash.com/photo-1500048993959-dc1e71e65f19?w=1200&q=80&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1508261303786-0f45ae639b47?w=1200&q=80&auto=format&fit=crop"
      ], page: "destinations/banff.html" },
    { slug: "swissalps", name: "Swiss Alps", thumbs: [
        "https://images.unsplash.com/photo-1500048993959-dc1e71e65f19?w=1200&q=80&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?w=1200&q=80&auto=format&fit=crop"
      ], page: "destinations/swissalps.html" }
  ],
  urban: [
    { slug: "dubai", name: "Dubai", thumbs: [
        "https://images.unsplash.com/photo-1505765056813-2a3a87a6e6c8?w=1200&q=80&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1541830955-6f2a1b77a3a8?w=1200&q=80&auto=format&fit=crop"
      ], page: "destinations/dubai.html" },
    { slug: "newyork", name: "New York", thumbs: [
        "https://images.unsplash.com/photo-1533106418989-88406c7cc8e0?w=1200&q=80&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&q=80&auto=format&fit=crop"
      ], page: "destinations/newyork.html" },
    { slug: "paris", name: "Paris", thumbs: [
        "https://images.unsplash.com/photo-1522098543979-ffc7f79d6e29?w=1200&q=80&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=1200&q=80&auto=format&fit=crop"
      ], page: "destinations/paris.html" },
    { slug: "tokyo", name: "Tokyo", thumbs: [
        "https://images.unsplash.com/photo-1505069442587-67f1df7a4ce3?w=1200&q=80&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80&auto=format&fit=crop"
      ], page: "destinations/tokyo.html" },
    { slug: "venice", name: "Venice", thumbs: [
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=80&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80&auto=format&fit=crop"
      ], page: "destinations/venice.html" }
  ]
};

/* Render functions */
function createDestinationCard(dest) {
  const col = document.createElement("div");
  col.className = "col-md-6 col-lg-4";
  col.innerHTML = `
    <div class="card destination-tile h-100 shadow-sm">
      <div class="row g-0">
        <div class="col-6 thumb-row pe-1">
          <img src="${dest.thumbs[0]}" alt="${dest.name} photo 1" class="img-fluid rounded-start">
        </div>
        <div class="col-6 thumb-row ps-1">
          <img src="${dest.thumbs[1]}" alt="${dest.name} photo 2" class="img-fluid rounded-end">
        </div>
      </div>
      <div class="card-body text-center">
        <h5 class="card-title">${dest.name}</h5>
        <a href="${dest.page}" class="btn btn-primary btn-sm dest-btn mt-2">Voir détails</a>
      </div>
    </div>`;
  return col;
}

function renderTheme(themeKey) {
  const container = document.getElementById("theme-destinations");
  const heading = document.getElementById("destinations-heading");
  container.innerHTML = "";
  const list = DESTINATIONS[themeKey] || [];
  heading.textContent = list.length ? `Destinations — ${themeKey.toUpperCase()}` : "Destinations";
  if (!list.length) {
    container.innerHTML = `<div class="col-12"><p class="text-center">Aucune destination pour cette thématique.</p></div>`;
    return;
  }
  list.forEach(d => container.appendChild(createDestinationCard(d)));
}

/* Wire Home Page Theme Clicks */
document.addEventListener("DOMContentLoaded", () => {

  // Home page: save selected theme and redirect
  document.querySelectorAll(".theme-card, .select-theme, .theme-link").forEach(el => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const theme = el.dataset.theme;
      if (!theme) return;

      sessionStorage.setItem("selectedTheme", theme);

      const overlay = document.createElement('div');
      overlay.className = `theme-overlay bg-${theme}`;
      document.body.appendChild(overlay);

      setTimeout(() => {
        document.body.removeChild(overlay);
        window.location.href = "destination.html";
      }, 600);
    });
  });

  // Destination page: render theme from sessionStorage
  const container = document.getElementById("theme-destinations");
  if (container) {
    const savedTheme = sessionStorage.getItem("selectedTheme") || "beach";
    renderTheme(savedTheme);
    sessionStorage.removeItem("selectedTheme");
  }

});

/* Wire UI (cards + buttons + dropdowns) */
document.addEventListener("DOMContentLoaded", () => {
  // theme card / button clicks
  document.querySelectorAll(".theme-card, .select-theme, .theme-link").forEach(el => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const theme = el.getAttribute("data-theme") || el.dataset.theme;
      if (!theme) return;
      renderTheme(theme);
      // scroll to list
      const list = document.getElementById("theme-destinations");
      if (list) list.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  // default: show beach
  renderTheme("beach");
});
/* ==============================
   Theme click animation & background
============================== */

function themeClickAnimation(themeKey) {
  // create overlay
  const overlay = document.createElement('div');
  overlay.className = `theme-overlay bg-${themeKey}`;
  document.body.appendChild(overlay);

  // remove overlay after animation then redirect
  setTimeout(() => {
    document.body.removeChild(overlay);
    // redirect to the theme page
    if(themeKey === 'beach') window.location.href = 'themes/beach.html';
    if(themeKey === 'nature') window.location.href = 'themes/mountain.html';
    if(themeKey === 'urban') window.location.href = 'themes/urban.html';
  }, 600); // 0.6s animation
}

/* Wire all theme cards/buttons for overlay animation */
document.querySelectorAll(".theme-card, .select-theme, .theme-link").forEach(el => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    const theme = el.getAttribute("data-theme") || el.dataset.theme;
    if (!theme) return;
    themeClickAnimation(theme);
  });
});
document.querySelectorAll(".theme-card").forEach(el => {
  el.addEventListener("click", (e) => {
    const theme = el.dataset.theme;
    if (!theme) return;

    // create overlay with theme color
    const overlay = document.createElement('div');
    overlay.className = `theme-overlay bg-${theme}`;
    document.body.appendChild(overlay);

    setTimeout(() => {
      document.body.removeChild(overlay);
      // redirect to theme page
      if(theme === 'beach') window.location.href = 'themes/beach.html';
      if(theme === 'nature') window.location.href = 'themes/mountain.html';
      if(theme === 'urban') window.location.href = 'themes/urban.html';
    }, 600);
  });
});
function openPlace(placeName) {
    window.location.href = "destinations/" + placeName + ".html";
}
// Bali Hero Carousel Automatic Slide
const baliCarouselElement = document.querySelector('#carouselBali');
const baliCarousel = new bootstrap.Carousel(baliCarouselElement, {
  interval: 3000,  // 3 seconds
  wrap: true,
  pause: 'hover'
});

// Ensure the first image is visible immediately
document.querySelectorAll('#carouselBali .carousel-item').forEach((item, index) => {
    if(index === 0){
        item.classList.add('active');
    } else {
        item.classList.remove('active');
    }
});

// Optional: click anywhere on carousel to go to next
baliCarouselElement.addEventListener('click', () => {
  baliCarousel.next();
});

// Activity fade-in animation on scroll
const activities = document.querySelectorAll('.activity-photo');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('fade-in');
    }
  });
}, { threshold: 0.2 });

activities.forEach(img => observer.observe(img));
// ===== BALI.JS - Auto-Sliding Hero Images =====

let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    currentSlide = (index + totalSlides) % totalSlides;
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
heroSection.addEventListener('mouseenter', () => {
    clearInterval(autoSlide);
});

heroSection.addEventListener('mouseleave', () => {
    autoSlide = setInterval(nextSlide, 4000);
});

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
