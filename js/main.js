
import {
  form,
  onFormChange, setNonActive, setUserFormSubmit,setUserFormReset
} from './form.js';

import {
  getDataFromServer
} from './data.js';

import {createMap} from './map.js';
import { showSuccess} from './alerts.js';


setNonActive();

const map = createMap();

getDataFromServer(map);

form.addEventListener('change', onFormChange);

setUserFormSubmit(showSuccess);


setUserFormReset();

map.closePopup();


