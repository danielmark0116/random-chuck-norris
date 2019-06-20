'use strict';

function randomJoke() {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.icndb.com/jokes/random');

  xhr.onreadystatechange = function() {
    if (this.readyState === 4) {
      if (this.status === 200) {
        let res = JSON.parse(xhr.response);
        document.querySelector('#result').innerHTML = res.value.joke;
      } else {
        console.error('Error: could not fetch the data');
        document.querySelector('#result').innerHTML = '';
        document.querySelector('#result').insertAdjacentHTML(
          'afterbegin',
          `
            <p class="text-secondary">
              Could not get a joke, sorry :C
            </p>
          `
        );
      }
    }
  };

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
