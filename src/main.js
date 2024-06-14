'use strict';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import pixabayApi from './js/pixabay-api';
import render from './js/render-functions';
import decor from './js/decor';

import iconErr from './img/err.svg';

const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.getElementById('loadMore');

let searchrequest;
let pageNumber;
const onEachPage = 15;

loadMoreBtn.addEventListener('click', e => {
  pageNumber++;
  request();
  setTimeout(() => {
    const card = document.querySelector('li.gallery-item');
    window.scrollBy(0, 2 * card.getBoundingClientRect().height);
  }, 1000);
});

document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();
  pageNumber = 1;
  searchrequest = event.target.searchrequest.value;
  gallery.innerHTML = '';
  request();
  event.target.reset();
});

async function request() {
  loadMoreBtn.textContent = '';
  loadMoreBtn.classList.remove('blue-btn');
  loadMoreBtn.classList.add('loader');
  await pixabayApi(searchrequest, pageNumber, onEachPage)
    .then(({ data }) => {
      if (data.hits.length === 0) {
        iziToast.error(errMessage);
        return;
      } else render(data.hits, gallery);
      if (data.totalHits > pageNumber * onEachPage) {
        loadMoreBtn.classList.add('blue-btn');
        loadMoreBtn.textContent = 'Load more';
      } else {
        loadMoreBtn.classList.remove('blue-btn');
        if (pageNumber > 1)
          iziToast.info({
            position: 'topRight',
            message:
              "We're sorry, but you've reached the end of search results.",
          });
      }
    })
    .catch(error => {
      gallery.innerHTML =
        'Something went wrong. <br/>Please, check your connection and try again.';
      console.error(error);
      loadMoreBtn.classList.add('blue-btn');
      loadMoreBtn.innerHTML = '<a href="/">Refreash page</a>';
    });
  loadMoreBtn.classList.remove('loader');
}

const errMessage = {
  position: 'topRight',
  theme: 'dark',
  iconUrl: iconErr,
  color: '#ef4040',
  message:
    'Sorry, there are no images matching <br/>your search query. Please try again!',
};

decor(document.querySelector('.slide'));
