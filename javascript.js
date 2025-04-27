
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById('themeToggle');
  const body = document.body;

  // Load last theme from localStorage if available
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
    toggle.checked = true;
  }

  toggle.addEventListener('change', function () {
    body.classList.toggle('dark');
    localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById('themeToggle');
  const body = document.body;

  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
    toggle.checked = true;
  }

  toggle.addEventListener('change', function () {
    body.classList.add('fade-transition');
    setTimeout(() => {
      body.classList.toggle('dark');
      localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
      setTimeout(() => body.classList.remove('fade-transition'), 600);
    }, 10);
  });
});
  //Zoom-in scroll animation for gallery images
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".gallery img");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal");
      }
    });
  }, { threshold: 0.1 });

  images.forEach(img => observer.observe(img));
});

window.addEventListener("load", () => {
  const images = document.querySelectorAll(".gallery img");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal");
      }
    });
  }, { threshold: 0.1 });

  images.forEach(img => observer.observe(img));
});

window.addEventListener("load", () => {
  const images = document.querySelectorAll(".gallery img");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal");
      }
    });
  }, { threshold: 0.1 });

  images.forEach(img => observer.observe(img));
});