'use strict';

function slugify(title) {
  return title.toLowerCase().split(' ').join('-');
}

console.log(slugify('Arrays for begginers')); // "arrays-for-begginers" <br>
console.log(slugify('English for developer')); // "english-for-developer" <br>
console.log(slugify('Ten secrets of JavaScript')); // "ten-secrets-of-javascript" <br>
console.log(slugify('How to become a JUNIOR developer in TWO WEEKS')); //
('how-to-become-a-junior-developer-in-two-weeks');
