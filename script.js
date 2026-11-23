
// ====================================
// SCROLL REVEAL ANIMATIONS
// ====================================

// Select the elements to animate
const revealElements = document.querySelectorAll(`
    .about h2,
    .about h3,
    .projects h2,
    .projects > h3,
    .project-cards .card,
    .skills h2,
    .skills > h3,
    .skills-cards .card,
    .contact h2,
    .contact > h3,
    .social-links a
`);

// Add animation classes
revealElements.forEach((element, index) => {
    element.classList.add("reveal");

    // Give selected elements different entrance directions
    if (element.matches(".project-cards .card")) {
        element.classList.add("reveal-scale");
    } else if (index % 2 === 0) {
        element.classList.add("reveal-left");
    } else {
        element.classList.add("reveal-right");
    }
});

// Detect when elements enter and leave the viewport
const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            // Show element when it enters the viewport
            entry.target.classList.add("visible");

        } else {

            // Hide element when it leaves the viewport
            entry.target.classList.remove("visible");

        }

    });

}, {
    threshold: 0.15
});

// Observe every selected element
revealElements.forEach((element) => {
    observer.observe(element);
});


// ====================================
// HAMBURGER MENU
// ====================================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("navs");

// Check that both elements exist
if (menuToggle && navLinks) {

    // Toggle menu when hamburger is clicked
    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        const icon = menuToggle.querySelector("i");

        if (navLinks.classList.contains("active")) {
            icon.classList.replace("fa-bars", "fa-xmark");
        } else {
            icon.classList.replace("fa-xmark", "fa-bars");
        }

    });

    // Close menu after clicking a navigation link
    document.querySelectorAll(".navs a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            const icon = menuToggle.querySelector("i");

            icon.classList.replace("fa-xmark", "fa-bars");

        });

    });

}
