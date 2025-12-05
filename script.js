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

if (revealElements.length > 0) {
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();
}

/* ===== Lightbox for Gallery Images ===== */
const images = document.querySelectorAll('.lightbox-trigger'); // match your HTML
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const lightboxCaption = document.querySelector('.lightbox-caption');
const lightboxClose = document.querySelector('.lightbox-close');

images.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
    lightboxCaption.textContent = img.parentElement.querySelector('.photo-caption').textContent;
  });
});

// Close lightbox when clicking the X
lightboxClose.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// Close if clicking outside the image
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});

/* ===== Smooth Scroll ===== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

/* ===== Filter Destinations ===== */
const filterButtons = document.querySelectorAll('.filter-btn');
const destinationSections = document.querySelectorAll('.destination-section');

if (filterButtons.length > 0 && destinationSections.length > 0) {
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

    // Show all if 'all' button exists
    const allBtn = document.querySelector('.filter-btn.all');
    if (allBtn) {
      allBtn.addEventListener('click', () => {
        destinationSections.forEach(section => section.style.display = 'block');
      });
    }
  });
}

/* ===== FAQ Toggle (Contact Page) ===== */
const faqQuestions = document.querySelectorAll('.faq-question');

if (faqQuestions.length > 0) {
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const faqItem = question.parentElement;
      faqItem.classList.toggle('active');
    });
  });
}

/* ===== Contact Form (Optional) ===== */
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    console.log({ name, email, phone, subject, message });
    alert('Thank you! Your message has been received.');
    contactForm.reset();
  });
}

/* ===== Logo Animation (Universal) ===== */
const logo = document.querySelector('.logo-img');

if (logo) {
  window.addEventListener('load', () => {
    logo.classList.add('bounce-in');
  });

  logo.addEventListener('mouseenter', () => {
    logo.classList.add('hover-forward');
  });

  logo.addEventListener('mouseleave', () => {
    logo.classList.remove('hover-forward');
  });
}
