const URL_DATA = 'https://24.javascript.pages.academy/keksobooking/data';

const URL = 'https://24.javascript.pages.academy/keksobooking';

const TYPES = [{type: 'bungalow', onrus: 'Бунгало', price : 0},
  {type: 'flat', onrus:'Квартира', price : 1000},
  {type: 'hotel', onrus:'Отель', price : 3000},
  {type: 'house', onrus:'Дом', price: 5000},
  {type: 'palace', onrus:'Дворец', price: 10000 }];

const OBJECT_COUNT = 10;

const roomsObj = {'1' : '1', '2' : '2', '3' : '3', '100' : '0'};

const TIMEOUT = 500;

const MAP_START_POSITION = {
  lat: 35.652832,
  lng: 139.839478,
};


export {URL, URL_DATA, OBJECT_COUNT, TYPES, roomsObj, TIMEOUT, MAP_START_POSITION};

