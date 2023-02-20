// your code here
const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const yearInput = document.querySelector('#year');
const button = document.querySelector('#button');
const url = document.querySelector('#url');

button.addEventListener('click', (e) => {
  e.preventDefault();
  if (nameInput.value.trim() === '') {
    alert('Please enter name');
    return;
  }
  const params = new URLSearchParams({
    name: nameInput.value,
    year: yearInput.value
  });
  const queryString = params.toString();
  url.textContent = `https://localhost:8080/?${queryString}`;
  form.reset();
});

