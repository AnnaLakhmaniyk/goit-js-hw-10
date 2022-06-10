import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';
import './css/styles.css';
import { feachCountry } from './js/feachCountry';
import { renderMarkup } from './js/macupAllCountries';
import { renderOneMarkup } from './js/marcupOneCountry';
import { getRefs } from './js/getRefs';

const { inputEl, listEl, infoCountry } = getRefs();
const DEBOUNCE_DELAY = 300;

inputEl.addEventListener('input', debounce(onSearchCountry, DEBOUNCE_DELAY));

function onSearchCountry(event) {
  const inputValue = event.target.value.trim();
  console.log(inputValue);
  if (!inputValue) {
    cleanAll();
    return;
  }
  feachCountry(inputValue)
    .then(data => {
      if (data.length > 10) {
        Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
        cleanAll();
      } else if (data.length <= 10 && data.length > 1) {
        renderMarkup(data, listEl);
        cleanRenderOneMarkup();
      } else if (data.length === 1) {
        renderOneMarkup(data, infoCountry);
        cleanRenderMarkup();
      }
    })
    .catch(error => {
      Notify.failure('Oops, there is no country with that name');
    });
  cleanAll();
}

//ф-ції для очищення
function cleanRenderMarkup() {
  listEl.innerHTML = '';
}
function cleanRenderOneMarkup() {
  infoCountry.innerHTML = '';
}

function cleanAll() {
  listEl.innerHTML = '';
  infoCountry.innerHTML = '';
}
