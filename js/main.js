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

import {setListenersForSort} from './sort.js';


setNonActive();

const map = createMap();

getDataFromServer(map);


form.addEventListener('change', onFormChange);

setListenersForSort(map);

form.querySelector('.ad-form__reset').addEventListener('click', () => {
  removeMarkers();
  resetAll(map);
  getDataFromServer(map);
});


setUserFormSubmit(showSuccess, map);


