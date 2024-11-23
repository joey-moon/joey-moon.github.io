// Select all flame elements
const flames = document.querySelectorAll('.flame');
const container = document.querySelector('.container');

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
                container.classList.add('fade-in');
                setTimeout(launchConfetti, 500);  // Confetti starts immediately
                setTimeout(launchFireworks, 1000); 
            }
        }
    });
});

function launchConfetti() {
    confetti({
        particleCount: 500, // Number of confetti particles
        spread: 70,         // Spread angle
        origin: { x: 0.5, y: 0.5 } // Confetti starts from center
    });
}

function launchFireworks() {
    const overlay = document.getElementById('fireworks-overlay'); // Get the overlay
    const fireworks = new Fireworks(overlay, {
        rocketsPoint: 50, // Control spread of rockets
        hue: { min: 0, max: 360 }, // Color range
        speed: 2, // Animation speed
        acceleration: 1.05, // Speeding up effect
    });

    fireworks.start();
    // setTimeout(() => fireworks.stop(), 5000); // Stop after 5 seconds
}
