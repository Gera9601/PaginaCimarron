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

const fecha = new Date();
const añoActual = fecha.getFullYear();

document.getElementById("año").textContent = añoActual;