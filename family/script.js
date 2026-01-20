document.addEventListener('DOMContentLoaded', () => {
    // Add animation classes to elements
    const animatedElements = document.querySelectorAll('.animate-on-load');
    animatedElements.forEach((el, index) => {
        el.classList.add('animate-fade-in', `delay-${(index + 1) * 100}`);
    });
    
    // Add hover effect to all buttons
    const buttons = document.querySelectorAll('button, .btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.classList.add('transform', 'scale-105');
        });
        button.addEventListener('mouseleave', () => {
            button.classList.remove('transform', 'scale-105');
        });
    });
});