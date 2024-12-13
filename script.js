// alert('hello world');
const navbarNav = document.getElementById('navbar');
const hamburgerMenu = document.getElementById('hamburger-menu');

// saat klik hamburger menu
hamburgerMenu.addEventListener('click', () => {
  navbarNav.classList.toggle('active');
});

// saat klik di luar navbar
document.addEventListener('click', (e) => {
  if (!navbarNav.contains(e.target) && !hamburgerMenu.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});

// typed js
var typed = new Typed('.type-text', {
  strings: ['Frontend Developer Aamiin'],
  startDelay: 100,
  typeSpeed: 100,
  loop: true,
  fadeOut: true,
});

// Slider
// script.js
const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

// Fungsi untuk berpindah slide
function updateSlide() {
  const slideWidth = slide[0].clientWidth;
  slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// Tombol "Next"
nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slide.length; // Loop ke awal jika sudah di akhir
  updateSlide();
});

// Tombol "Prev"
prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slide.length) % slide.length; // Loop ke akhir jika di awal
  updateSlide();
});
