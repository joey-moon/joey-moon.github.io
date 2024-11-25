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
const captions = ["This is the first caption",
    "This is the second caption the same caption",
    "This is the third caption"
]
let currentIndex = 0;
let cardsRead = Array(captions.length).fill(false);

const slideshowImage = document.getElementById("slideshow-image");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const captionElement = document.querySelector('.caption'); // The caption container

slideshowImage.addEventListener('click', () => {
    updateCaption();
    captionElement.style.opacity = caption.style.opacity === '1' ? '0' : '1'; // Toggle visibility
    if(caption.style.opacity === '1')cardsRead[currentIndex]=true;
    makeNextBtnVisible();
    if (!isMuted) {
        audio.play();  // Play audio if muted
        muteButton.innerHTML = '&#x1F50A;';  // Speaker icon
    }
});

captionElement.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
});

function updateCaption(){
    captionElement.textContent = captions[currentIndex];
    // captionElement.style.width = `${images[currentIndex].clientWidth}px`
}


function updateImage() {
    slideshowImage.src = images[currentIndex];
    captionElement.style.opacity = '0'; // Toggle visibility
}

// prevButton.addEventListener("click", () => {
//     currentIndex = (currentIndex - 1 + images.length) % images.length;
//     updateImage();
//     if (!isMuted) {
//         audio.play();  // Play audio if muted
//         muteButton.innerHTML = '&#x1F50A;';  // Speaker icon
//     }
// });

// nextButton.addEventListener("click", () => {
//     currentIndex = (currentIndex + 1) % images.length;
//     updateImage();
//     if (!isMuted) {
//         audio.play();  // Play audio if muted
//         muteButton.innerHTML = '&#x1F50A;';  // Speaker icon
//     }
// });

// setInterval(() => {
//     currentIndex = (currentIndex + 1) % images.length;
//     updateImage();
// }, 10000);

function makeNextBtnVisible(){
    if(currentIndex === images.length-1 && cardsRead.every(element => element === true) ){
        document.getElementById("nextPageButton").style.display = "block";
    }
}

