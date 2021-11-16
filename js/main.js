import {
  form,
  onFormChange,
  setNonActive,
  setUserFormSubmit,
  resetAll
} from './form.js';

import {
  getDataFromServer,
  createMap
} from './map.js';

import { showSuccess} from './alerts.js';

import {removeMarkers} from './pins.js';
import {debounce} from './utils/debounce.js';

debounce();


setNonActive();

const map = createMap();

getDataFromServer(map);


form.addEventListener('change', onFormChange);

const sort = document.querySelector('.map__filters');

const sorts = sort.querySelectorAll('select');

const filters = sort.querySelectorAll('input');

const setListerForFilters = (div) => {
  div.forEach((value)=>{
    value.addEventListener('change',() => {
      removeMarkers();
      getDataFromServer(map);
    });
  });
};

sorts.forEach((value)=>{
  value.addEventListener('change',() => {
    removeMarkers();
    getDataFromServer(map);
  });
});

filters.forEach((value)=>{
  value.addEventListener('change',() => {
    removeMarkers();
    getDataFromServer(map);
  });
});

form.querySelector('.ad-form__reset').addEventListener('click', () => {
  removeMarkers();
  resetAll(map);
  getDataFromServer(map);
});


setUserFormSubmit(showSuccess, map);


