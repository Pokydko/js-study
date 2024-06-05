'use strict';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import imageErrUrl from '../img/err.svg';
import imageOkUrl from '../img/ok.svg';

const form = document.querySelector('form');

form.addEventListener('submit', event => {
  event.preventDefault();

  makePromise(form.state.value === 'fulfilled', form.delay.value)
    .then(delay =>
      iziToast.success({
        title: 'OK',
        position: 'topRight',
        theme: 'dark',
        iconUrl: imageOkUrl,
        color: '#59a10d',
        message: `Fulfilled promise in ${delay}ms`,
      })
    )
    .catch(delay => {
      iziToast.error({
        position: 'topRight',
        theme: 'dark',
        messageColor: 'white',
        iconUrl: imageErrUrl,
        color: '#ef4040',
        message: `Rejected promise in ${delay}ms`,
      });
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
