// document.getElementById("playAudioButton").addEventListener("click", function() {
//     var audio = document.getElementById("audioMessage");
    
//     // Toggle audio play/pause
//     if (audio.paused) {
//         audio.play();
//     } else {
//         audio.pause();
//     }
// });

document.getElementById("playAudioButton").addEventListener("click", function() {
    var audio = document.getElementById("audioMessage");
    const playIcon = document.getElementById("play-icon");
    const pauseIcon = document.getElementById("pause-icon");
    
    // Toggle audio play/pause
    if (audio.paused) {
        audio.play();
        playIcon.style.display = "none";
        pauseIcon.style.display = "inline";
    } else {
        audio.pause();
        pauseIcon.style.display = "none";
        playIcon.style.display = "inline";
    }
});