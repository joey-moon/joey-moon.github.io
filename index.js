// Select all flame elements
const flames = document.querySelectorAll('.flame');

// Add a click event listener to each flame
let blownOutCount = 0;
flames.forEach((flame) => {
    flame.addEventListener('click', () => {
        if (flame.style.opacity !== '0') {
            blownOutCount++;
            flame.style.animation = 'none'; // Stop flicker animation
            flame.style.transition = 'opacity 0.5s ease'; // Add smooth fade-out
            flame.style.opacity = '0'; // Fade out the flame
            if(blownOutCount===flames.length){
                audio.play();
                muteButton.innerHTML = '&#x1F50A;';
            }
        }
    });
});