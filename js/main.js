
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

const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const marker = L.marker(
  {
    lat: 35.652832,
    lng: 139.839478,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

marker.on('moveend', (evt) => {
  form.querySelector('#address').value = `${evt.target.getLatLng().lat.toFixed(5)}, ${evt.target.getLatLng().lng.toFixed(5)}`;
});


marker.addTo(map);

const  createIcon = L.Icon.extend({
  options: {
    iconUrl: 'img/pin.svg',
    iconSize:     [40, 40],
    iconAnchor:   [20, 40],
  },
});
const icon = new createIcon();


const array1 = Array.from({length:OBJECTS}, createObject);

console.log (array1);


array1.forEach((value)=> {
  L.marker([value.location.lat, value.location.lng], {icon: icon}).addTo(map).bindPopup(createNewObjectDiv(value));
});

form.addEventListener('change', onFormChange);

