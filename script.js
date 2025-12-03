<<<<<<< Updated upstream
/* ===== Scroll Reveal Animation ===== */
const revealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 150) {
      el.classList.add('show');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

/* ===== Lightbox for Gallery Images ===== */
const lightbox = document.createElement('div');
lightbox.id = "lightbox";
document.body.appendChild(lightbox);

const images = document.querySelectorAll('.gallery img');

images.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.classList.add('active');
    const newImg = document.createElement('img');
    newImg.src = img.src;

    lightbox.innerHTML = '';
    lightbox.appendChild(newImg);
  });
});

// Close l
=======
// =============================
// JavaScript for Travel Blog
// =============================

// Smooth scroll to section when clicking theme or filter buttons
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Optional: Filter destinations dynamically (show/hide by theme)
const filterButtons = document.querySelectorAll('.filter-btn');
const destinationSections = document.querySelectorAll('.destination-section');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const theme = btn.textContent.toLowerCase();
        destinationSections.forEach(section => {
            if (section.id === theme) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    });
});

// Optional: Show all sections if a specific 'all' button is added
const allBtn = document.querySelector('.filter-btn.all');
if (allBtn) {
    allBtn.addEventListener('click', () => {
        destinationSections.forEach(section => section.style.display = 'block');
    });
}
>>>>>>> Stashed changes
