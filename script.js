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

    // Skill Bar Animation
    const progressBars = document.querySelectorAll(".progress-bar");

    function animateBars() {
        progressBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = "0%";
            setTimeout(() => {
                bar.style.width = width;
            }, 300);
        });
    }

    animateBars();
});