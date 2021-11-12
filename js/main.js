
import {
  form,
  onFormChange, setNonActive, setUserFormSubmit,setUserFormReset
} from './form.js';

import {
  getDataFromServer
} from './data.js';

import {createMap} from './map.js';
import { showSuccess} from './alerts.js';

const OBJECT_COUNT = 10;

setNonActive();

const map = createMap();

getDataFromServer(map, OBJECT_COUNT);

form.addEventListener('change', onFormChange);

setUserFormSubmit(showSuccess, map);

setUserFormReset(map);


