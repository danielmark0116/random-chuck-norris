'use strict';

function randomJoke() {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://api.icndb.com/jokes/random');
  xhr.addEventListener('load', function() {
    let res = JSON.parse(xhr.response);
    document.querySelector('#result').innerHTML = res.value.joke;
  });
  document.querySelector('#result').innerHTML = '';
  document.querySelector('#result').insertAdjacentHTML(
    'afterbegin',
    `<div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
    </div>`
  );
  xhr.send();
}

randomJoke();
document.querySelector('#get-joke').addEventListener('click', function() {
  document.querySelector('#result').innerHTML = '';
  document.querySelector('#result').insertAdjacentHTML(
    'afterbegin',
    `<div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
    </div>`
  );
  randomJoke();
});
