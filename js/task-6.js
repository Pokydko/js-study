"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bigBox = document.querySelector("div#controls");
const entryNumber = bigBox.querySelector("input");
entryNumber.style.width = "150px";
bigBox.children[1].style.width = "120px";
bigBox.children[2].classList.add("btn-red");
const boxesPlace = document.querySelector("div#boxes");

bigBox.addEventListener("click", (event) => {
  if (event.target.dataset.create === "") createBoxes(entryNumber.value);
  if (event.target.dataset.destroy === "") destroyBoxes();
});

function createBoxes(amount) {
  if (amount > 100 || amount < 1) return;
  boxesPlace.textContent = "";
  let boxesCode = "";
  for (let i = 0; i < amount; i++) {
    boxesCode += `<div style="width:${30 + i * 10}px; height:${
      30 + i * 10
    }px; background-color:${getRandomHexColor()};"></div>`;
  }
  boxesPlace.insertAdjacentHTML("beforeend", boxesCode);
  entryNumber.value = "";
}

function destroyBoxes() {
  boxesPlace.textContent = "";
}
