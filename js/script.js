// ============================================
// Antônio Restaurante - Script Principal
// ============================================

// DOM Elements
const popup = document.getElementById('popup');
const popupImg = document.getElementById('popup-img');
const popupTitle = document.getElementById('popup-title');
const popupDesc = document.getElementById('popup-desc');
const popupClose = document.querySelector('.popup-close');
const menuItems = document.querySelectorAll('.menu-item');

// ============================================
// Menu Item Click Handler
// ============================================
menuItems.forEach(item => {
  item.addEventListener('click', function() {
    const title = this.getAttribute('data-title');
    const desc = this.getAttribute('data-desc');
    const img = this.getAttribute('data-img');

    popupTitle.textContent = title;
    popupDesc.textContent = desc;
    popupImg.src = img;
    popup.classList.add('active');

    // Prevent scroll
    document.body.style.overflow = 'hidden';
  });
});

// ============================================
// Close Popup
// ============================================
function closePopup() {
  popup.classList.remove('active');
  document.body.style.overflow = 'auto';
}

popupClose.addEventListener('click', closePopup);

// Close popup when clicking outside
popup.addEventListener('click', function(e) {
  if (e.target === popup) {
    closePopup();
  }
});

// Close popup with Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && popup.classList.contains('active')) {
    closePopup();
  }
});

// ============================================
// Smooth Scroll Navigation
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    
    // Skip if it's just "#"
    if (href === '#') return;

    e.preventDefault();
    
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ============================================
// Scroll Animation - Fade In Elements
// ============================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Apply observer to feature cards and menu items
document.querySelectorAll('.feature-card, .menu-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// ============================================
// Active Navigation Link
// ============================================
window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('.header a');

  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === current) {
      link.style.color = 'var(--warm-gold)';
    } else {
      link.style.color = 'var(--charcoal)';
    }
  });
});

// ============================================
// Header Scroll Effect
// ============================================
const header = document.querySelector('.header');
let lastScrollTop = 0;

window.addEventListener('scroll', function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > 100) {
    header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
  } else {
    header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// ============================================
// Image Lazy Loading
// ============================================
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src || img.src;
        img.classList.add('loaded');
        imageObserver.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

// ============================================
// Initialization
// ============================================
console.log('✨ Antônio Restaurante - Site Carregado com Sucesso!');
