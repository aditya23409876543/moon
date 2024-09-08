// script.js

const logo = document.querySelector('.logo');
const container = document.querySelector('.logo-container');

// Adjust rotation based on cursor movement
container.addEventListener('mousemove', (e) => {
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    // Calculate mouse position relative to the container
    const mouseX = e.clientX - container.offsetLeft;
    const mouseY = e.clientY - container.offsetTop;

    // Calculate the rotation angles (map mouse position to degrees)
    const rotateX = ((mouseY / containerHeight) - 0.5) * 60; // Vertical tilt
    const rotateY = ((mouseX / containerWidth) - 0.5) * -60; // Horizontal tilt

    // Apply rotation
    logo.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

// Reset rotation when the mouse leaves
container.addEventListener('mouseleave', () => {
    logo.style.transform = 'rotateX(0deg) rotateY(0deg)';
});
