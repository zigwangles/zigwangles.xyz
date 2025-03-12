document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector("nav");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            nav.style.background = "rgba(255, 255, 255, 0.2)";
        } else {
            nav.style.background = "rgba(255, 255, 255, 0.1)";
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: 'smooth'
                });
            }
        });
    });
});