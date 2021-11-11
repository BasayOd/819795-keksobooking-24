

function getRndInteger(first, second) {
  const lower = Math.ceil(Math.min(Math.abs(first), Math.abs(second)));
  const upper = Math.floor(Math.max(Math.abs(first), Math.abs(second)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

const isEscapeKey = (evt) => evt.keyCode === 27;

const isEnterKey = (evt) => evt.key === 'Enter';


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
    () => array[getRndInteger(0, array.length-1)]);
  return newArray;
};


export { getRndInteger, getRandom, createRandArray, createRandArrayFromUniq, isEnterKey, isEscapeKey };
