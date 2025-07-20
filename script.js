// script.js
document.querySelector('.click-to-open').addEventListener('click', () => {
  alert('Launching Project: @OC-UDI!');
});

// Add smooth scrolling for contact link
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});