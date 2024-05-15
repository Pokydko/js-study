"use strict";

const categoriesList = document.querySelectorAll("li.item");
console.log(`Number of categories: ${categoriesList.length}`);

for (const category of categoriesList) {
  const title = category.querySelector("h2");
  console.log(`Category: ${title.textContent}`);
  title.classList.add("title-of-category");

  const elementsInCategory = category.querySelectorAll("li");
  console.log(`Elements: ${elementsInCategory.length}`);
  for (const element of elementsInCategory)
    element.classList.add("element-of-category");
}
