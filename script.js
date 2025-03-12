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

    // Progress Bar Animation on Scroll
    const progressBars = document.querySelectorAll(".progress-bar");
    
    function animateBars() {
        progressBars.forEach(bar => {
            const width = bar.getAttribute("data-width"); // Get width from data attribute
            bar.style.width = "0%"; // Reset before animation
            setTimeout(() => {
                bar.style.width = width; // Animate to the final width
            }, 300);
        });
    }

    function checkScroll() {
        const skillsSection = document.querySelector(".skills-container");
        const sectionPos = skillsSection.getBoundingClientRect().top;
        const screenPos = window.innerHeight / 1.3;

        if (sectionPos < screenPos) {
            animateBars();
            window.removeEventListener("scroll", checkScroll); // Run animation only once
        }
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Check if already in view on page load
});