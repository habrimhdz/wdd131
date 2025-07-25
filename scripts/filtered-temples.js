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

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  //My added temples:
  {
    templeName: "Colonia Juarez Mexico",
    location: "Chihuahua, Mexico",
    dedicated: "1999, March, 6",
    area: 6800,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/colonia-juarez-chihuahua-mexico/400x250/colonia-juarez-mexico-temple-lds-1039762-wallpaper.jpg"
  },
  {
    templeName: "Monterrey Mexico",
    location: "Monterrey, Mexico",
    dedicated: "2002, April, 28",
    area: 16498,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/monterrey-mexico/400x250/monterrey-mexico-temple-lds-645907-wallpaper.jpg"
  },
  {
    templeName: "Freiberg Germany",
    location: "Freiberg, Germany",
    dedicated: "1985, June, 29",
    area: 21529,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/freiberg-germany-temple/freiberg-germany-temple-4062.jpg"
  },
];

function clearTemples() {
  document.querySelector("#temple-cards").innerHTML = "";
}

function renderTemples(filteredTemples) {
  clearTemples();
  filteredTemples.forEach((temple) => {
    const card = document.createElement("section");

    const name = document.createElement("h2");
    name.textContent = temple.templeName;

    const location = document.createElement("p");
    location.textContent = `Location: ${temple.location}`;

    const dedicated = document.createElement("p");
    dedicated.textContent = `Dedicated: ${temple.dedicated}`;

    const area = document.createElement("p");
    area.textContent = `Size: ${temple.area} sq ft`;

    const image = document.createElement("img");
    image.setAttribute("src", temple.imageUrl);
    image.setAttribute("alt", temple.templeName);
    image.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);
    card.appendChild(image);

    document.querySelector("#temple-cards").appendChild(card);
  });
}

// This is the filtering part
function getYear(temple) {
  return parseInt(temple.dedicated.split(",")[0]);
}

document.querySelector("#home").addEventListener("click", () => {
  renderTemples(temples);
});

document.querySelector("#old").addEventListener("click", () => {
  const oldTemples = temples.filter(t => getYear(t) < 2000);
  renderTemples(oldTemples);
});

document.querySelector("#new").addEventListener("click", () => {
  const newTemples = temples.filter(t => getYear(t) > 1999);
  renderTemples(newTemples);
});

document.querySelector("#large").addEventListener("click", () => {
  const largeTemples = temples.filter(t => t.area > 9999);
  renderTemples(largeTemples);
});

document.querySelector("#small").addEventListener("click", () => {
  const smallTemples = temples.filter(t => t.area < 10000);
  renderTemples(smallTemples);
});

renderTemples(temples);