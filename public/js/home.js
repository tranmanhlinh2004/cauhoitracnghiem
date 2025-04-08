let audio = document.getElementById("background-music");
        let isPlaying = false;
        audio.volume = 0.6;
        
        function toggleMusic() {
            if (isPlaying) {
                audio.pause();
            } else {
                audio.play().catch(error => console.log("Autoplay blocked: ", error));
            }
            isPlaying = !isPlaying;
        }