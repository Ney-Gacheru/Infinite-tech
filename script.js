document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');

  toggle.addEventListener('click', () => {
    links.classList.toggle('active');
  });

  // Example: fade-up effect on scroll
  const fadeElems = document.querySelectorAll('.section');
  window.addEventListener('scroll', () => {
    fadeElems.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add('fade-in');
      }
    });
  });
});

// Get modal elements
const modal = document.getElementById('consultationModal');
const btn = document.getElementById('consultationBtn');
const closeBtn = document.querySelector('.close-btn');

// Open modal when hero button is clicked
btn.addEventListener('click', (e) => {
  e.preventDefault();
  modal.style.display = 'block';
});

// Close modal on X button
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close modal when clicking outside content
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Loader fade out when page is ready
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  loader.style.opacity = '0';
  setTimeout(() => {
    loader.style.display = 'none';
  }, 500);
});

// Scroll animations
const sections = document.querySelectorAll('.section, .card, .product');

window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const boxTop = section.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      section.classList.add('animate-up');
    }
  });
});

