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
                launchleftConfetti();  // Confetti starts immediately
                launchrightConfetti();  // Confetti starts immediately
                continuousHorizontalConfetti();
                setTimeout(launchFireworks, 1000); 
            }
        }
    });
});

function launchleftConfetti() {
    confetti({
        particleCount: 500, // Number of confetti particles
        spread: 90,         // Spread angle
        angle: 60,      // Launch angle
        startVelocity: 80,
        gravity: 1,
        origin: { x: 0, y: 1 }, // Confetti starts from center
    });
}

function launchrightConfetti() {
    confetti({
        particleCount: 500, // Number of confetti particles
        spread: 90,         // Spread angle
        angle: 120,
        startVelocity: 80,
        gravity: 1,
        origin: { x: 1, y: 1 }, // Confetti starts from center
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
    // setTimeout(() => fireworks.stop(), 20000); // Stop after 20 seconds
}

function continuousHorizontalConfetti(duration = 20000) {
    // const endTime = Date.now() + duration;
    const interval = setInterval(() => {
        launchleftConfetti();
        launchrightConfetti();
        // if (Date.now() > endTime) {
        //     clearInterval(interval); // Stop after the duration
        //     return;
        // }
    }, 5000); // Launch every 3000ms
}
