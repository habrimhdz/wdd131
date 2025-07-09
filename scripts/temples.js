document.getElementById("lastModified").textContent = document.lastModified

const today = new Date();
document.getElementById("currentyear").textContent = today.getFullYear();
const currentyear = today.getFullYear();

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburger.textContent = hamburger.textContent === "☰" ? "✖" : "☰";
});