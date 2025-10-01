const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power laces", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

const params = new URLSearchParams(window.location.search);
const resultsList = document.getElementById("results");

params.forEach((value, key) => {
  const li = document.createElement("li");

  if (key === "productName") {
    const product = products.find(p => p.id === value);
    li.textContent = `${key}: ${product ? product.name : value}`;
  } else {
    li.textContent = `${key}: ${value}`;
  }

  resultsList.appendChild(li);
});

let count = localStorage.getItem("reviewCount") || 0;
count++;
localStorage.setItem("reviewCount", count);
document.getElementById("reviewCount").textContent = `You have submitted ${count} review(s).`;

// Last modified date
document.getElementById("lastModified").textContent = document.lastModified;

// Current year
const today = new Date();
document.getElementById("currentyear").textContent = today.getFullYear();
