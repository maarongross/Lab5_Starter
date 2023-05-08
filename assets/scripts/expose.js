// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const selectHorn = document.getElementById('horn-select');
  console.log(selectHorn);

  const hornImage = document.querySelector('img');
  console.log(hornImage);

  const audioFile = document.querySelector('audio');
  console.log(audioFile);

  const volumeSlider = document.getElementById('volume-controls');
  console.log(volumeSlider);
  console.log(volumeSlider.children);

  const soundButton = document.querySelector('button');
  console.log(soundButton);

  const jsConfetti = new JSConfetti();
  console.log(jsConfetti);

  soundButton.addEventListener("click", (event) => {
    audioFile.play();
    if(selectHorn.selectedIndex == 3) {
      jsConfetti.addConfetti();
    }
  });

  selectHorn.addEventListener("change", (event) => {
    if(selectHorn.selectedIndex == 1) {
      hornImage.src = "assets/images/air-horn.svg"; // Set source path
      audioFile.src = "assets/audio/air-horn.mp3";
    }
    else if(selectHorn.selectedIndex == 2) {
      hornImage.src = "assets/images/car-horn.svg";
      audioFile.src = "assets/audio/car-horn.mp3";
    }
    else if(selectHorn.selectedIndex == 3) {
      hornImage.src = "assets/images/party-horn.svg";
      audioFile.src = "assets/audio/party-horn.mp3";
    }
  });

  volumeSlider.addEventListener("change", (event) => {
    audioFile.volume = volumeSlider.children[0].value / 100;
    if(volumeSlider.children[0].value == 0) {
      volumeSlider.children[1].src = "assets/icons/volume-level-0.svg";
    }
    else if(volumeSlider.children[0].value < 33) {
      volumeSlider.children[1].src = "assets/icons/volume-level-1.svg";
    }
    else if(volumeSlider.children[0].value < 67) {
      volumeSlider.children[1].src = "assets/icons/volume-level-2.svg";
    }
    else {
      volumeSlider.children[1].src = "assets/icons/volume-level-3.svg";
    }
  });
}