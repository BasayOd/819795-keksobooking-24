import {icon} from './pins.js';
import {createNewObjectDiv} from './generate.js';
import {showNewErrorServer} from './alerts.js';

const URL_DATA = 'https://24.javascript.pages.academy/keksobooking/data';

const URL = 'https://24.javascript.pages.academy/keksobooking';

const getDataFromServer = (map, objectsCount) => {
  fetch(URL_DATA)
    .then((response) => response.json())
    .then((data) => {
      data.slice(0, objectsCount).forEach((value) => {
        L.marker([value.location.lat, value.location.lng], {icon: icon}).addTo(map).bindPopup(createNewObjectDiv(value));
      });
    }).catch(() => {
      showNewErrorServer();
    });
};


export {getDataFromServer, URL};
