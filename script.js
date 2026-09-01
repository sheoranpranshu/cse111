// ------------------------------
// Mobile Navigation
// ------------------------------

const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");

    menuBtn.textContent =
        nav.classList.contains("active") ? "✕" : "☰";
});


// Close mobile menu after clicking a link

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

        menuBtn.textContent = "☰";

    });

});


// ------------------------------
// Current Year
// ------------------------------

document.getElementById("year").textContent =
    new Date().getFullYear();


// ------------------------------
// Reveal Animation
// ------------------------------

const revealElements = document.querySelectorAll(
    ".section, .project-card, .skill-card"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.1
    }
);

revealElements.forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});


// ------------------------------
// Smooth Active Navigation
// ------------------------------

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }

    });

});