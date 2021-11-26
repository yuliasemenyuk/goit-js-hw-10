import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const input = document.querySelector('#search-box');
const countryInfoCard = document.querySelector('.country-info');
const countryList = document.querySelector('.country-list');

const DEBOUNCE_DELAY = 300;

input.addEventListener('input', debounce(searchCountry, DEBOUNCE_DELAY));

function searchCountry () {
    countryInfoCard.innerHTML = '';
    countryList.innerHTML = '';
    const name = input.value.trim();
    console.log(name);
    if (name) {
        fetchCountries(name).then(    

    )
    .catch(
        showError()
    )
}

// function showCountryCard() {
  
// }

// function showListOfCountries() {
    
// }

// function showError() {

// }