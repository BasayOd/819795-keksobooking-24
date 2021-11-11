import {icon} from './pins.js';
import {createNewObjectDiv} from './generate.js';
import {showNewErrorServer} from './alerts.js';


const getDataFromServer = (map) => {
  fetch('https://24.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((data) => {
      data.forEach((value) => {
        L.marker([value.location.lat, value.location.lng], {icon: icon}).addTo(map).bindPopup(createNewObjectDiv(value));
      });
    }).catch(() => {
      showNewErrorServer();
    });
};


export {getDataFromServer};
