let level = 1;
let clickCount = 0;
let timeoutDelay = 500; 

const gameButton = document.getElementById('gameButton');

function repositionButton() {
  const randomLeft = Math.random() * 300 + "px";
  const randomTop = Math.random() * 300 + "px";
  gameButton.style.marginLeft = randomLeft;
  gameButton.style.marginTop = randomTop;
}

gameButton.addEventListener('mouseover', () => {
  setTimeout(repositionButton, timeoutDelay);
});

gameButton.addEventListener('click', () => {
  clickCount++;
  if (clickCount >= 3) {
    alert(`Level ${level} complete!`);
    clickCount = 0;
    level++;

    timeoutDelay = Math.max(0, 500 - (level - 1) * 100);

  }
});