'use strict';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import pixabayApi from './js/pixabay-api';
import render from './js/render-functions';

const gallery = document.querySelector('.gallery');

document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();
  gallery.classList.add('loader');
  gallery.innerHTML = '';

  pixabayApi(event.target.searchrequest.value)
    .then(({ hits }) => {
      if (hits.length === 0) iziToast.error(errMessage);
      else render(hits, gallery);
      gallery.classList.remove('loader');
    })
    .catch(error => {
      gallery.classList.remove('loader');
      gallery.innerHTML =
        'Something went wrong. <br/>Please, check your connection and try again.';
      console.error(error);
    });

  event.target.reset();
});

const errMessage = {
  position: 'topRight',
  theme: 'dark',
  iconUrl: './img/err.svg',
  color: '#ef4040',
  message:
    'Sorry, there are no images matching <br/>your search query. Please try again!',
};

document.getElementById('slide').addEventListener('click', () => {
  document.body.classList.toggle('black');
  document.body.firstElementChild.classList.toggle('black');
  document.getElementById('searchrequest').classList.toggle('black');
});
