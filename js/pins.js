import {form} from './form.js';
import {createNewObjectDiv} from './generate.js';
import {sortData} from './sort.js';
import {MAP_START_POSITION} from './data.js';

const arrayForPins = [];


const mainPinIcon = L.icon({           //основная иконка (красная)
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});
const mainMarker = L.marker(
  {
    lat: MAP_START_POSITION.lat,
    lng: MAP_START_POSITION.lng,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainMarker.on('moveend', (evt) => {
  form.querySelector('#address').value = `${evt.target.getLatLng().lat.toFixed(5)}, ${evt.target.getLatLng().lng.toFixed(5)}`;
});

const  pinIcon = L.Icon.extend({          //иконки объектов (синие)
  options: {
    iconUrl: 'img/pin.svg',
    iconSize:     [40, 40],
    iconAnchor:   [20, 40],
  },
});
const icon = new pinIcon();

const removeMarkers = () => {
  arrayForPins.forEach((marker)=>{
    marker.remove();
  });
};


const setPins = (map, data, objectsCount) => {
  const sorted = sortData(data);
  sorted.slice(0, objectsCount).forEach((value) => {
    arrayForPins.push(L.marker([value.location.lat, value.location.lng], {icon: icon}));
    arrayForPins[arrayForPins.length-1].addTo(map).bindPopup(createNewObjectDiv(value));
  });
};

export {mainMarker, icon, MAP_START_POSITION, setPins, removeMarkers};
