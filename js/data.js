import {
  createRandArray,
  createRandArrayFromUniq,
  getRandom,
  getRndInteger
} from './utils.js';

let avatars;

const TYPES = [['bungalow', 'Бунгало', 0], ['flat', 'Квартира', 1000], ['hotel', 'Отель', 3000],  ['house', 'Дом', 5000], ['palace', 'Дворец', 10000 ]];

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
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const createArrayAvatars = (length) => {
  avatars = [];
  for ( let num=0; num<=length-1; num++) {
    avatars[num] = `img/avatars/user${(num+1).toString().padStart(2, '0')}.png`;
  }
  return avatars;
};

const createAuthor = () =>{
  if (!avatars || avatars.length===0){
    createArrayAvatars(MAXAVATARS);
    return avatars.splice(getRndInteger(0, avatars.length-1), 1).toString();
  } else {
    return avatars.splice(getRndInteger(0, avatars.length-1), 1).toString();
  }
};


const createLocation = () =>({
  lat: getRandom(MINLAT, MAXLAT, ACCURACYFORDOT),
  lng: getRandom(MINLNG, MAXLNG, ACCURACYFORDOT),
});


const createOffer = (loc) => ({
  title : 'Сдам квартиру',
  address : `${String(loc.lat) }, ${ String(loc.lng)}`,
  price : getRndInteger(1, MAXPRICE),
  type : TYPES [getRndInteger(0, TYPES.length-1)],
  rooms : getRndInteger(1, MAXROOMS),
  guests : getRndInteger(1, MAXGUESTS),
  checkin : TIMES [getRndInteger(0, TIMES.length-1)],
  checkout : TIMES [getRndInteger(0, TIMES.length-1)],
  features : createRandArrayFromUniq(FEATURES),
  description : 'Пушка, лучше не бывает',
  photos : createRandArray(PHOTOURL),
});


const createObject = () => {
  const location = createLocation();
  return {
    author: createAuthor(),
    offer: createOffer(location),
    location,
  };
};


export { OBJECTS, createObject,  TYPES };

