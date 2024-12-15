const currentPath = window.location.pathname;

const menuItems = document.querySelectorAll('nav ul li a');

menuItems.forEach(item => {
    if (item.getAttribute('href') === currentPath && item.textContent != "Contact") {
        item.classList.add('active');
    }
})

