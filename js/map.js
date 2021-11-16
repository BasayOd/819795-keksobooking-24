import {setActive} from './form.js';
import { mainMarker, MAP_START_POSITION, setPins} from './pins.js';
import {showNewErrorServer} from './alerts.js';
import { URL_DATA, OBJECT_COUNT} from './data.js';


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


const getDataFromServer = (map) => {
  fetch(URL_DATA)
    .then((response) => response.json())
    .then((data) => {
      setPins(map, data, OBJECT_COUNT);
      console.log(data);
    })
    .catch(() => {
      showNewErrorServer();
    });
};


export { getDataFromServer, createMap};
