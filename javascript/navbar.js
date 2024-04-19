document.addEventListener('DOMContentLoaded', () => {
    const hamburguesaBtn = document.querySelector('.hamburguesa-btn');
    const menuHamburguesaResponsive = document.querySelector('.menu-hamburguesa-responsive');
    const menuItems = document.querySelectorAll('.menu-vertical-responsive li');
    const menuVertical = document.querySelector(".menu-vertical-responsive");
    hamburguesaBtn.addEventListener('click', () => {
        menuHamburguesaResponsive.classList.toggle('show');
        hamburguesaBtn.classList.toggle('active');
        menuVertical.classList.toggle("show");
    });

    // Cerrar el menú al hacer clic fuera de él
    document.addEventListener('click', (event) => {
        if (!menuHamburguesaResponsive.contains(event.target) && 
            !hamburguesaBtn.contains(event.target) && 
            menuHamburguesaResponsive.classList.contains('show')) {
            menuHamburguesaResponsive.classList.remove('show');
            hamburguesaBtn.classList.remove('active');
            menuVertical.classList.remove("show");
        }
    });

    // Evitar que el evento de clic en el botón cierre el menú inmediatamente
    hamburguesaBtn.addEventListener('click', (event) => {
        event.stopPropagation();
    });
});

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



