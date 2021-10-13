

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

getRndInteger(9, 10);

getRandom(3,6, 1);

let authNumb = 0;

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

const OBJECTS = 10;


const PHOTOURL = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg.',
];

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


const createAuthor = () =>{
  const avatarPic = `img/avatars/user${authNumb.toString().padStart(2,'0')}.png`;
  authNumb++;
  return {
    avatar: avatarPic,
  };
};


const createLocation = () =>({
  lat: getRandom(MINLAT, MAXLAT, 5),
  lng: getRandom(MINLNG, MAXLNG, 5),
});


const createOffer = () => {
  const loc = createLocation();
  return {
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
  };
};

const createObject = () => ({
  author : createAuthor(),
  offer : createOffer(),
  location : createLocation(),
});
Array.from({length:OBJECTS}, createObject);

