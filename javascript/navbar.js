
document.addEventListener('DOMContentLoaded', () => {
    const hamburguesaBtn = document.querySelector('.hamburguesa-btn');
    const menuHamburguesaResponsive = document.querySelector('.menu-hamburguesa-responsive');
    const menuItems = document.querySelectorAll('.menu-vertical-responsive > li');
    const menuVertical = document.querySelector(".menu-vertical-responsive");
    
    hamburguesaBtn.addEventListener('click', (event) => {
        event.stopPropagation(); // Evitar que el evento de clic en el botón cierre el menú inmediatamente
        menuHamburguesaResponsive.classList.toggle('show');
        hamburguesaBtn.classList.toggle('active');
        menuVertical.classList.toggle("show");
    });

    const menuItems2 = document.querySelectorAll('.menu-vertical-mobile li.has-submenu');

    menuItems2.forEach(item => {
        item.addEventListener('click', (event) => {
            event.stopPropagation(); // Detiene la propagación del evento clic

            const submenu = item.querySelector('.submenu-segundo');

            // Cerrar todos los submenús segundos
            document.querySelectorAll('.submenu-segundo').forEach(s => {
                if (s !== submenu && s.classList.contains('open')) {
                    s.classList.remove('open');
                }
            });

            // Alternar la clase para mostrar u ocultar el submenú
            submenu.classList.toggle('open');
        });
    });

    // Mostrar y ocultar submenús
    menuItems.forEach(item => {
        item.addEventListener('click', (event) => {
            const submenu = item.querySelector('.menu-vertical-mobile');
            
            // Cerrar todos los submenus antes de abrir el seleccionado
            document.querySelectorAll('.menu-vertical-mobile').forEach(s => {
                if (s !== submenu && s.classList.contains('open')) {
                    s.classList.remove('open');
                }
            });
            
            if (submenu) {
                submenu.classList.toggle('open');
            }
        });
    });

    // Cerrar el menú al hacer clic fuera de él
    document.addEventListener('click', (event) => {
        if (!menuHamburguesaResponsive.contains(event.target) && 
            !hamburguesaBtn.contains(event.target) && 
            menuHamburguesaResponsive.classList.contains('show')) {
            menuHamburguesaResponsive.classList.remove('show');
            hamburguesaBtn.classList.remove('active');
            menuVertical.classList.remove("show");
            
            // Cerrar todos los submenus al cerrar el menú
            document.querySelectorAll('.menu-vertical-mobile').forEach(s => {
                if (s.classList.contains('open')) {
                    s.classList.remove('open');
                }
            });
        }
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
});
