import {form} from './form.js';

const MAP_START_POSITION = {
  lat: 35.652832,
  lng: 139.839478,
};


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


export {mainMarker, icon, MAP_START_POSITION};
