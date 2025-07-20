document.addEventListener('DOMContentLoaded', () => {
  const clickMe = document.getElementById('clickMe');
  const floatingMenu = document.getElementById('floatingMenu');
  const closeBtn = document.getElementById('closeMenu');

  clickMe.addEventListener('click', () => {
    floatingMenu.style.display = 'flex';
    clickMe.style.display = 'none';
  });

  closeBtn.addEventListener('click', () => {
    floatingMenu.style.display = 'none';
    clickMe.style.display = 'block';
  });
});
