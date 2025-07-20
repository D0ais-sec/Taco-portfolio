document.addEventListener('DOMContentLoaded', () => {
  const clickMeBtn = document.getElementById('clickMe');
  const floatingMenu = document.getElementById('floatingMenu');
  const closeBtn = document.getElementById('closeMenu');

  // Ensure menu is hidden on page load (optional safety)
  floatingMenu.style.display = 'none';

  clickMeBtn.addEventListener('click', () => {
    floatingMenu.style.display = 'flex';
    clickMeBtn.style.display = 'none';
  });

  closeBtn.addEventListener('click', () => {
    floatingMenu.style.display = 'none';
    clickMeBtn.style.display = 'block';
  });
});
