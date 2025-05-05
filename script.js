// Smooth Scroll for nav links
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', function(e) {
    if (this.hash !== '') {
      e.preventDefault();
      const target = document.querySelector(this.hash);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// Alert fallback for consultation button
const consultationBtn = document.querySelector('.hero-content button');
if (consultationBtn) {
  consultationBtn.addEventListener('click', () => {
    document.getElementById('consultation').scrollIntoView({ behavior: 'smooth' });
  });
}

// Basic form validation before submission
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', function(e) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const topic = document.getElementById('topic').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !topic || !message) {
      e.preventDefault();
      alert('Please fill in all fields before submitting.');
    }
  });
}

// Scroll animation effect
window.addEventListener('scroll', () => {
  const elements = document.querySelectorAll('.service-card, .testimonial');
  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }
  });
});

// Initial hidden effect
document.querySelectorAll('.service-card, .testimonial').forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(40px)';
  el.style.transition = 'all 0.6s ease-out';
});
