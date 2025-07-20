const clickMeBtn = document.querySelector('.click-to-open');
const menuOverlay = document.getElementById('menuOverlay');
const spaceContainer = document.getElementById('spaceContainer');

clickMeBtn.addEventListener('click', () => {
  // Zoom in
  spaceContainer.style.transform = 'scale(3)';
  spaceContainer.style.transformOrigin = 'center center';

  // After zoom, show menu
  setTimeout(() => {
    menuOverlay.classList.remove('hidden');
  }, 2000);
});
