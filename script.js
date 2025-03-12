document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const dropdownMenu = document.getElementById("dropdown-menu");
    const closeMenu = document.getElementById("close-menu");

    menuToggle.addEventListener("click", function() {
        dropdownMenu.classList.add("active");
    });

    closeMenu.addEventListener("click", function() {
        dropdownMenu.classList.remove("active");
    });

    // Close menu when clicking outside
    document.addEventListener("click", function(event) {
        if (!dropdownMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            dropdownMenu.classList.remove("active");
        }
    });
});