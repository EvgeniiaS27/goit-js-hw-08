import throttle from 'lodash.throttle';

const feedbackFormRef = document.querySelector('.feedback-form');
const inputUserImailRef = document.querySelector('.feedback-form input');
const inputUserMessageRef = document.querySelector('.feedback-form textarea');

const formData = {};
const STORAGE_KEY = 'feedback-form-state';

feedbackFormRef.addEventListener('submit', onFeedbackFormSubmit);
feedbackFormRef.addEventListener('input', throttle(onFeedbackFormInput, 500));

populatForm();

function onFeedbackFormInput() {
  formData.email = inputUserImailRef.value;
  formData.message = inputUserMessageRef.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populatForm() {
  const savedInputForm = localStorage.getItem(STORAGE_KEY);

  if (savedInputForm) {
    const parseLocalStorage = JSON.parse(savedInputForm);
    inputUserImailRef.value = parseLocalStorage.email;
    inputUserMessageRef.value = parseLocalStorage.message;
  }
}

function onFeedbackFormSubmit(e) {
  e.preventDefault();

  formData.email = inputUserImailRef.value;
  formData.message = inputUserMessageRef.value;

  console.log(formData);

  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}
