
function getRndInteger(min, max) {
  if (min<0||max<=min){
    return false;
  }
  return Math.floor(Math.random() * (max - min) ) + min;
}

function getRandom(min, max) {
  if (min<0||max<=min){
    return false;
  }
  return Math.random() * (max - min) + min;
}

getRndInteger(10, 10);

getRandom(3,6);


