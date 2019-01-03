'use strict';

const form = document.querySelector('form');
const email = document.querySelector('#email');
const name = document.querySelector('#name');

form.addEventListener('submit', (event) => {

  event.preventDefault();
  const xhr = new XMLHttpRequest();
  xhr.open('POST', '/signup');
  const body = {
    'name': name.value,
    'email': email.value
  }
  
  xhr.onload = () => {
    if (xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
     form.innerHTML = response;
    }
  }
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify(body));
});