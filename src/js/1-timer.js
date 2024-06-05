'use strict';

import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import imageErrUrl from '../img/err.svg';

const inputDate = document.querySelector('#datetime-picker');
const outputFields = document.querySelectorAll('.timer .field .value');
// or each field separeted: // const daysField = document.querySelector('[data-days]');
const startTimerBtn = document.querySelector('button');
// startTimerBtn.disabled = true; - but it's better to disable btn in html

let intervalId = null;
let userSelectedDate;
let timeLeft;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    if (userSelectedDate - Date.now() > 0) {
      startTimerBtn.disabled = false;
    } else {
      startTimerBtn.disabled = true;
      iziToast.error({
        position: 'topRight',
        theme: 'dark',
        messageColor: 'white',
        iconUrl: imageErrUrl,
        color: '#ef4040',
        message: 'Please choose a date in the future',
      });
    }
  },
};
flatpickr(inputDate, options);

startTimerBtn.addEventListener('click', () => {
  intervalId = setInterval(() => {
    setTimeIntoFields();
  }, 1000);
  startTimerBtn.disabled = true;
  inputDate.disabled = true;
});

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor((ms % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((ms % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function setTimeIntoFields() {
  timeLeft = userSelectedDate - Date.now();
  if (timeLeft > 1) {
    timeLeft = convertMs(timeLeft);
    outputFields.forEach(field => {
      field.innerHTML = `${addLeadingZero(
        timeLeft[Object.getOwnPropertyNames(field.dataset)]
      )}`;
    });
    // if each field    // daysField.innerHTML = `${addLeadingZero(timeLeft.days)}`;
  } else {
    clearInterval(intervalId);
    inputDate.disabled = false;
  }
}
