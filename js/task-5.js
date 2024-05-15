"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorsSwitchingButton = document.querySelector("button.change-color");
const spanColor = document.querySelector("span.color");

colorsSwitchingButton.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  spanColor.textContent = randomColor; // or in rgb(,,) - document.body.style.backgroundColor
});
