// Select all flame elements
const flames = document.querySelectorAll('.flame');

// Add a click event listener to each flame
let i=0;
flames.forEach((flame) => {
    flame.addEventListener('click', () => {
        i++;
        flame.style.animation = 'none'; // Stop flicker animation
        flame.style.transition = 'opacity 0.5s ease'; // Add smooth fade-out
        flame.style.opacity = '0'; // Fade out the flame
        if(i>=3){
            audio.play();
        }
    });
});