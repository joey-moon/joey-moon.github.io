const audio = document.getElementById('background-music');
const muteButton = document.getElementById('mute-btn');

// Initial state: audio is playing, button shows speaker icon
let isMuted = false;

// Toggle mute/unmute when the button is clicked
muteButton.addEventListener('click', () => {
    if (isMuted) {
        audio.play();  // Play audio if muted
        muteButton.innerHTML = '&#x1F50A;';  // Speaker icon
    } else {
        audio.pause();  // Pause audio if playing
        muteButton.innerHTML = '&#x1F507;';  // Mute icon
    }
    isMuted = !isMuted;  // Toggle the mute state
});

const images = ["images/photo.png", "images/photo1.png", "images/photo2.png"];
let currentIndex = 0;

const slideshowImage = document.getElementById("slideshow-image");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

function updateImage() {
    slideshowImage.src = images[currentIndex];
}

prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
    if (!isMuted) {
        audio.play();  // Play audio if muted
        muteButton.innerHTML = '&#x1F50A;';  // Speaker icon
    }
});

nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
    if (!isMuted) {
        audio.play();  // Play audio if muted
        muteButton.innerHTML = '&#x1F50A;';  // Speaker icon
    }
});

setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}, 5000);

