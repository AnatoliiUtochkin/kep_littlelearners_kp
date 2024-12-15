document.addEventListener("DOMContentLoaded", function() {
    const burgerMenu = document.querySelector(".burger-menu");
    const offScreenMenu = document.querySelector(".off-screen-menu");
    const menuOverlay = document.querySelector(".menu-overlay");

    function openMenu() {
        menuOverlay.classList.remove("hidden");
        menuOverlay.classList.add("active");
        offScreenMenu.classList.add("active");
    }

    function closeMenu() {
        menuOverlay.classList.remove("active");
        offScreenMenu.classList.remove("active");
    }

    burgerMenu.addEventListener("click", openMenu);
    menuOverlay.addEventListener("click", closeMenu);
});
