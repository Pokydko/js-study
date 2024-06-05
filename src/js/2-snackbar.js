'use strict';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import imageErrUrl from '../img/err.svg';
import imageOkUrl from '../img/ok.svg';

const form = document.querySelector('form');
const message = {
  position: 'topRight',
  theme: 'dark',
  iconUrl: imageOkUrl,
  color: '#59a10d',
};

form.addEventListener('submit', event => {
  event.preventDefault();

  if (form.state.value === 'rejected') {
    message.iconUrl = imageErrUrl;
    message.color = '#ef4040';
  }

  makePromise(form.state.value === 'fulfilled', form.delay.value)
    .then(delay => {
      message.message = `Fulfilled promise in ${delay}ms`;
      iziToast.success(message);
    })
    .catch(delay => {
      message.message = `Rejected promise in ${delay}ms`;
      iziToast.error(message);
    });

  form.reset();
});

function makePromise(shouldResolve, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}
