"use strict";

document.querySelector("h1").classList.add("input-task-title");

const textInput = document.querySelector("input#name-input");
const output = document.querySelector("span#name-output");

textInput.addEventListener("input", (event) => {
  const textInInput = event.currentTarget.value.trim(); // "очищене від пробілів по краях", але як лишити пробіли "в   середині"?
  output.textContent = textInInput === "" ? "Anonymous" : textInInput;
});
