document.addEventListener('DOMContentLoaded', () => {
  const clickMe = document.getElementById('clickMe');
  const floatingMenu = document.getElementById('floatingMenu');
  const closeBtn = document.getElementById('closeMenu');

  const slides = document.querySelectorAll('.slide');
  let currentIndex = 0;

  const scrollToSlide = (index) => {
    if (index >= 0 && index < slides.length) {
      slides[index].scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Show floating menu and hide button
  clickMe.addEventListener('click', () => {
    floatingMenu.style.display = 'flex';
    clickMe.style.display = 'none';
  });

  // Close menu and reset scroll to first section
  closeBtn.addEventListener('click', () => {
    floatingMenu.style.display = 'none';
    clickMe.style.display = 'flex';
    currentIndex = 0;
    scrollToSlide(currentIndex);
  });

  // Arrow navigation
  document.querySelector('.arrow.right').addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
      currentIndex++;
      scrollToSlide(currentIndex);
    }
  });

  document.querySelector('.arrow.left').addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      scrollToSlide(currentIndex);
    }
  });
});
