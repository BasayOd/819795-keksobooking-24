
import {
  createNewObjectDiv
} from './generate.js';

import {
  form,
  onFormChange,
  setNonActive,
  setActive
} from './form.js';


const newObject = createNewObjectDiv();

document.querySelector('#map-canvas').appendChild(newObject);


form.addEventListener('change', onFormChange);

setNonActive();

setActive();
