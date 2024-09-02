// Example of what might be in script.js
document.addEventListener('DOMContentLoaded', () => {
    // Typed.js initialization
    var typed = new Typed('.multiple-text', {
        strings: ["Front-End Developer", "IOT & AI Enthusiast", "Programmer"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });

    // ScrollReveal.js initialization
    ScrollReveal().reveal('.home-content', { delay: 500 });
    ScrollReveal().reveal('.about-img', { delay: 500 });
    ScrollReveal().reveal('.services-container', { delay: 500 });
});
