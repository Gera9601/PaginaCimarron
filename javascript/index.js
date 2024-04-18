function toggleMenu() {
    const navbarLinks = document.querySelector('.navbar-links');
    navbarLinks.classList.toggle('active');
}

let index = 0;
const sliderInner = document.querySelector(".slider-inner");
const slides = sliderInner.querySelectorAll(".slide");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const sliderDots = document.querySelector(".slider-dots");

function showSlide() {
    let percentage = index * -100;
    sliderInner.style.transform = "translateX(" + percentage + "%)";
    
    sliderDots.querySelectorAll(".dot").forEach(dot => {
        dot.classList.remove("active");
    });
    sliderDots.querySelector(`.dot[data-index="${index}"]`).classList.add("active");
}

function nextSlide() {
    index++;
    if (index === slides.length) {
        index = 0;
    }
    showSlide();
}

function prevSlide() {
    index--;
    if (index < 0) {
        index = slides.length - 1;
    }
    showSlide();
}

slides.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dot.setAttribute("data-index", i);
    sliderDots.appendChild(dot);
});

showSlide();

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

sliderDots.addEventListener("click", (e) => {
    if (e.target.classList.contains("dot")) {
        index = parseInt(e.target.getAttribute("data-index"));
        showSlide();
    }
});


let isScrolling = false;

const contenedorNoticias = document.getElementById('noticias-secundarias-ppal');

contenedorNoticias.addEventListener('wheel', (event) => {
  // Ajusta la posición de desplazamiento según el desplazamiento de la rueda del ratón
  contenedorNoticias.scrollBy({
    top: event.deltaY,
    behavior: 'smooth'
  });
  isScrolling = true;
  
  // Detiene el desplazamiento suave cuando se mueve el ratón
  clearTimeout(contenedorNoticias.data);
  contenedorNoticias.data = setTimeout(() => {
    isScrolling = false;
  }, 100);
  
  event.preventDefault();
});

contenedorNoticias.addEventListener('scroll', () => {
  if (!isScrolling) {
    clearTimeout(contenedorNoticias.data);
  }
});

contenedorNoticias.addEventListener('wheel', (event) => {
  contenedorNoticias.scrollTop += event.deltaY;
  event.preventDefault();
});


const fecha = new Date();
const añoActual = fecha.getFullYear();

document.getElementById("año").textContent = añoActual;


let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function() {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scroll hacia abajo
        navbar.style.top = "-100px";
    } else {
        // Scroll hacia arriba
        navbar.style.top = "0";
    }

    lastScrollTop = scrollTop;
});
window.addEventListener("touchend", function(event) {
  lastScrollTop = parseInt(navbar.style.top) || 0;
});