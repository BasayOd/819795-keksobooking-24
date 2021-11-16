import {removeMarkers} from './pins.js';
import {debounce} from './utils/debounce.js';

import {getDataFromServer} from './map.js';
import {TIMEOUT} from './data.js';

const sort = document.querySelector('.map__filters');

const sorts = sort.querySelectorAll('select');

const filters = sort.querySelectorAll('input');

const setListerForElement = (div, map) => {
  div.forEach((value)=>{
    value.addEventListener('change', debounce(() => {
      removeMarkers();
      getDataFromServer(map);
    }, TIMEOUT));
  });
};

const setListenersForSort = (map) =>{
  setListerForElement(sorts, map);
  setListerForElement(filters, map);
};


const checkPrice = (price, priceStr) => {
  if (priceStr==='high'){
    return  price>50000;
  } else if (priceStr==='middle'){
    return  10000<=price && price<=50000;
  }else if (priceStr==='low'){
    return  price<10000;
  }
};

const checkFeatures = (array, str) => {
  if(array.features){
    return array.features.includes(str);
  }
  return false;
};

const filterData = (checkbox, data) =>{
  if (checkbox.checked) {
    return data.filter((value) => checkFeatures(value.offer, checkbox.value));
  }
  return data;
};

const sortByFeatures = (a, b) => {
  if (!a.offer.features){
    return 1;
  }
  if (!b.offer.features){
    return -1;
  }
  return b.offer.features.length - a.offer.features.length;
};


const sortData = (data) => {
  let dataSort = data.slice();
  const type = document.querySelector('[name="housing-type"]').value;
  const price = document.querySelector('[name="housing-price"]').value;
  const rooms = document.querySelector('[name="housing-rooms"]').value;
  const guests = document.querySelector('[name="housing-guests"]').value;
  const wifi = document.querySelector('#filter-wifi');
  const dishwasher = document.querySelector('#filter-dishwasher');
  const parking = document.querySelector('#filter-parking');
  const washer = document.querySelector('#filter-washer');
  const elevator = document.querySelector('#filter-elevator');
  const conditioner = document.querySelector('#filter-conditioner');

  dataSort = dataSort.filter((value)=>type==='any'|| value.offer.type === type);
  dataSort = dataSort.filter((value)=>rooms==='any'|| value.offer.rooms >= Number(rooms));
  dataSort = dataSort.filter((value)=>guests==='any'|| value.offer.guests >= Number(guests));
  dataSort = dataSort.filter((value)=>price==='any'|| checkPrice(value.offer.price, price));
  dataSort = filterData(wifi, dataSort);
  dataSort = filterData(dishwasher, dataSort);
  dataSort = filterData(parking, dataSort);
  dataSort = filterData(washer, dataSort);
  dataSort = filterData(elevator, dataSort);
  dataSort = filterData(conditioner, dataSort);

  dataSort.sort(sortByFeatures);

  return dataSort;
};

export {sortData, setListenersForSort};
