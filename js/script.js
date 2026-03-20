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
const carouselTrack = document.getElementById('carouselTrack');

// ============================================
// Carregar Imagens do Carrossel
// ============================================
function loadCarouselImages() {
  // Array de imagens que existem na pasta assets
  const images = [
    { name: 'foto1.jpeg', label: 'Mirante Vista' },
    { name: 'foto2.jpeg', label: 'Ambiente' },
    { name: 'foto3.jpeg', label: 'Gastronomia' },
    { name: 'foto4.jpeg', label: 'Drinks' },
    { name: 'foto5.jpeg', label: 'Hospedagem' },
    { name: 'foto6.jpeg', label: 'Eventos' },
    { name: 'foto7.jpeg', label: 'Piscina' },
    { name: 'foto8.jpeg', label: 'Suites' },
    { name: 'foto9.jpeg', label: 'Gastronomia' },
    { name: 'foto10.jpeg', label: 'Mirante' }
  ];

  // Limpar carrossel
  carouselTrack.innerHTML = '';

  // Adicionar imagens ao carrossel
  images.forEach((image) => {
    const carouselItem = document.createElement('div');
    carouselItem.className = 'carousel-item';
    carouselItem.innerHTML = `
      <img src="assets/${image.name}" alt="${image.label}" onerror="this.src='https://via.placeholder.com/1200x800?text=${image.label}'">
      <p>${image.label}</p>
    `;
    carouselTrack.appendChild(carouselItem);
  });

  // Duplicar as imagens para criar efeito contínuo
  const items = carouselTrack.querySelectorAll('.carousel-item');
  items.forEach((item) => {
    const clone = item.cloneNode(true);
    carouselTrack.appendChild(clone);
  });
}

// Carregar imagens ao iniciar
loadCarouselImages();

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
    popupImg.onerror = function() {
      this.src = 'https://via.placeholder.com/500x400?text=' + title;
    };
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
}, { passive: true });

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
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(function() {
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
        link.style.color = 'var(--primary)';
      } else {
        link.style.color = 'var(--text-secondary)';
      }
    });
  }, 100);
}, { passive: true });

// ============================================
// Header Scroll Effect
// ============================================
const header = document.querySelector('.header');
let lastScrollTop = 0;
let scrollTimeout;

window.addEventListener('scroll', function() {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 100) {
      header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
      header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }, 100);
}, { passive: true });

// ============================================
// Image Lazy Loading
// ============================================
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
        }
        img.classList.add('loaded');
        imageObserver.unobserve(img);
      }
    });
  }, { rootMargin: '50px' });

  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

// ============================================
// Remover comportamentos que causam carregamento infinito
// ============================================
// Desabilitar qualquer listener que possa causar loops infinitos
window.addEventListener('load', function() {
  console.log('✨ Mirante de Laranjeiras - Site Carregado com Sucesso!');
  console.log('📁 Pasta assets pronta para receber imagens');
  // Remover qualquer indicador de carregamento
  const loader = document.querySelector('.loader');
  if (loader) loader.remove();
}, { once: true });
