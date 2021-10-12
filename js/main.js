

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
  return result.toFixed(digits);
}

getRndInteger(9, 10);

getRandom(3,6, 1);

let authNumb = 0;

const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];

const TIMES = ['12:00', '13:00', '14:00'];

const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];


const PHOTOURL = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg.',
];

const createRandArrayFromUniq = (array) =>{
  const arr = array.slice();
  const newArray = Array.from({length: getRndInteger(1, array.length+1)},
    () => arr.splice(getRndInteger(0, arr.length), 1).toString());
  return newArray;
};

const createRandArray = (array) =>{
  const newArray = Array.from({length: getRndInteger(1, 10)},
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
  lat: getRandomPositiveFloat(35.65000, 35.70000, 5),
  lng: getRandom(139.70000, 139.80000, 5),
});


const createOffer = () => {
  const loc = createLocation();
  return {
    title : 'Сдам квартиру',
    address : `${String(loc.lat) }, ${ String(loc.lng)}`,
    price : getRndInteger(1, 10000),
    type : TYPES [getRndInteger(0, TYPES.length-1)],
    rooms : getRndInteger(1, 4),
    guests : getRndInteger(1, 10),
    checkin : TIMES [getRndInteger(0, TIMES.length-1)],
    checkout : TIMES [getRndInteger(0, TIMES.length-1)],
    features : createRandArrayFromUniq(FEATURES),
    description : 'Пушка, лучше не бывает',
    photos : createRandArray(PHOTOURL),
  };
};


const offers = Array.from({length:10}, createOffer);
const locations = Array.from({length:10}, createLocation);
const authors = Array.from({length:10}, createAuthor);

console.log(offers);
console.log(locations);
console.log(authors);
