// Current year
const today = new Date();
document.getElementById("currentyear").textContent = today.getFullYear();

// Dark Mode 
const button = document.getElementById("toggleDark");
const body = document.body;

if (button) {
  button.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
  });
}

// Hamburger 
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    hamburger.textContent = hamburger.textContent === "☰" ? "✖" : "☰";
  });
}

// Fade up thingy
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll('.fade-up');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');  
      } else {
        entry.target.classList.remove('visible'); 
      }
    });
  }, {
    threshold: 0.4
  });

  elements.forEach(el => observer.observe(el));
});
