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
});

nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
});

