
function getRndInteger(min, max) {
  if (min<0||max<=min){
    throw new Error('Диапазон неверен');
  }
  return Math.floor(Math.random() * (max - min) ) + min;
}

function getRandom(min, max, num) {
  if (min<0||max<=min){
    throw new Error('Диапазон неверен');
  }
  const RAND =  Math.random() * (max - min) + min;
  return Number(RAND.toFixed(num));
}

getRndInteger(9, 10);

getRandom(3,6, 1);
