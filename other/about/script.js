// script.js
document.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = "1";
});

// Добавление стиля для плавного появления
document.documentElement.style.cssText = `
    body {
        opacity: 0;
        transition: opacity 1s ease-in-out;
    }
`;
