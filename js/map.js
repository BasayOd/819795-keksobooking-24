import {setActive} from './form.js';
import {mainMarker, MAP_START_POSITION} from './pins.js';


const createMap = () => {
  const map = L.map('map-canvas')
    .on('load', () => {
      setActive();
    })
    .setView({
      lat: MAP_START_POSITION.lat,
      lng: MAP_START_POSITION.lng,
    }, 10);


  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  mainMarker.addTo(map);

  return map;
};
export {createMap};
