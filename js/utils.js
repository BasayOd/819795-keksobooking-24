import {
  ACCURACYFORDOT,
  FEATURES,
  MAXAVATARS,
  MAXGUESTS,
  MAXLAT,
  MAXLNG,
  MAXPRICE,
  MAXROOMS,
  MINLAT,
  MINLNG, PHOTOURL,
  TIMES,
  TYPES
} from './data.js';

let avatars;

function getRndInteger(first, second) {
  const lower = Math.ceil(Math.min(Math.abs(first), Math.abs(second)));
  const upper = Math.floor(Math.max(Math.abs(first), Math.abs(second)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function getRandom(first, second, digits) {
  const lower = Math.min(Math.abs(first), Math.abs(second));
  const upper = Math.max(Math.abs(first), Math.abs(second));
  const result = Math.random() * (upper - lower) + lower;
  return Number(result.toFixed(digits));
}

const createRandArrayFromUniq = (array) =>{
  const arr = array.slice();
  const newArray = Array.from({length: getRndInteger(1, array.length)},
    () => arr.splice(getRndInteger(0, arr.length-1), 1).toString());
  return newArray;
};

const createRandArray = (array) =>{
  const newArray = Array.from({length: getRndInteger(1, array.length)},
    () => array[getRndInteger(0, array.length)]);
  return newArray;
};

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

export { createObject };
