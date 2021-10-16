import {
  createAuthor,
  createLocation,
  createOffer
} from './utils.js';


const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];

const TIMES = ['12:00', '13:00', '14:00'];

const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const MAXROOMS = 4;

const MAXPRICE = 10000;

const MAXGUESTS = 10;

const MINLAT = 35.65000 ;

const MAXLAT = 35.70000;

const MINLNG = 139.70000;

const MAXLNG = 139.80000;

const ACCURACYFORDOT = 5;

const OBJECTS = 10;

const MAXAVATARS = 10;


const PHOTOURL = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg.',
];
const createObject = () => {
  const location = createLocation();
  return {
    author: createAuthor(),
    offer: createOffer(location),
    location,
  };
};

export { TYPES, TIMES, FEATURES, MAXROOMS, MAXPRICE, MAXGUESTS, MINLAT, MINLNG, MAXLAT, MAXLNG, ACCURACYFORDOT, OBJECTS, MAXAVATARS, PHOTOURL, createObject };
