
import {
  form,
  onFormChange,
  setNonActive,
  setActive
} from './form.js';

import {
  createObject,
  OBJECTS
} from './data.js';

import {
  createNewObjectDiv
} from './generate.js';

import {
  mainMarker,
  icon
} from './pins.js';

setNonActive();

const map = L.map('map-canvas')
  .on('load', () => {
    setActive();
  } )
  .setView({
    lat: 35.652832,
    lng: 139.839478,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

mainMarker.addTo(map);


const array1 = Array.from({length:OBJECTS}, createObject);

array1.forEach((value)=> {
  L.marker([value.location.lat, value.location.lng], {icon: icon}).addTo(map).bindPopup(createNewObjectDiv(value));
});

form.addEventListener('change', onFormChange);

