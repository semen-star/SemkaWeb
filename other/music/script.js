// script.js
window.addEventListener("DOMContentLoaded", () => {
    const audios = document.querySelectorAll("audio");
    const body = document.body;
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    audios.forEach(audio => {
        const source = audioContext.createMediaElementSource(audio);
        const analyser = audioContext.createAnalyser();
        source.connect(analyser);
        analyser.connect(audioContext.destination);
        analyser.fftSize = 128;
        
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        function animateBackground() {
            analyser.getByteFrequencyData(dataArray);
            let sum = dataArray.reduce((a, b) => a + b, 0);
            let average = sum / bufferLength;
            let intensity = Math.min(average / 128, 1);

            let r = Math.floor(255 * intensity);
            let g = Math.floor(50 + 100 * intensity);
            let b = Math.floor(150 + 100 * (1 - intensity));

            body.style.background = `radial-gradient(circle, rgb(${r}, ${g}, ${b}), rgb(${50 - r / 2}, ${0 + g / 2}, ${100 - b / 2}))`;
            requestAnimationFrame(animateBackground);
        }
        
        audio.addEventListener("play", () => {
            if (audioContext.state === "suspended") {
                audioContext.resume();
            }
            animateBackground();
        });
    });
});