const track = document.querySelector('.carousel-track');
const nextBtn = document.querySelector('.carousel-btn.next');
const prevBtn = document.querySelector('.carousel-btn.prev');

let index = 0;
const slides = document.querySelectorAll('.carousel-track img');
const total = slides.length;

function updateCarousel() {
  track.style.transform = `translateX(-${index * 100}%)`;
}

nextBtn.addEventListener('click', () => {
  index = (index + 1) % total;
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  index = (index - 1 + total) % total;
  updateCarousel();
});
