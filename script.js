

function toggleMenu() {
    const menu = document.querySelector(".menu");
    const toggleButton = document.querySelector(".menu-toggle");

    menu.classList.toggle("show");
    toggleButton.classList.toggle("active");
}
