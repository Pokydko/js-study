'use strict';
import validator from 'validator';

const form = document.querySelector('form.feedback-form');
let formData;
try {
  formData = JSON.parse(localStorage.getItem('feedback-form-state'));
  formData.email = formData.email ?? '';
  form.email.value = formData.email;
  formData.message = formData.message ?? '';
  form.message.value = formData.message;
} catch (e) {
  localStorage.removeItem('feedback-form-state');
  formData = { email: '', message: '' };
}

form.addEventListener('input', ({ target }) => {
  formData[target.name] = target.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();
  if (!validator.isEmail(formData.email)) {
    alert('Email is incorrect');
    return;
  }
  if (formData.email && formData.message) {
    console.log(formData);

    formData = { email: '', message: '' };
    localStorage.removeItem('feedback-form-state');
    form.reset();
  } else {
    alert('Fill please all fields');
  }
});
