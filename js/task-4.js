"use strict";

const form = document.querySelector("form.login-form");
const lastInputElementIndex = form.querySelectorAll("input").length - 1;
form
  .querySelectorAll("input")
  .forEach((input, index) =>
    index < lastInputElementIndex
      ? (input.style.margin = "8px 0")
      : (input.style.margin = "8px 0 16px")
  );
form.querySelector("button").textContent = "Log in"; // layout has space between "Log"&"in"

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = event.target.elements.email.value.trim();
  const password = event.target.elements.password.value.trim();
  if (email && password) {
    console.log({ email, password });
    form.reset();
  } else {
    alert("All form fields must be filled in");
  }
});
