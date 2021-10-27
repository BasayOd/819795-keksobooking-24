
const TYPES = [['bungalow', 'Бунгало', 0], ['flat', 'Квартира', 1000], ['hotel', 'Отель', 3000],  ['house', 'Дом', 5000], ['palace', 'Дворец', 10000 ]];

const rooms = [{'guestMax' : '1', 'rooms' : '1' },
  {'guestMax' : '2', 'rooms' : '2'},
  {'guestMax' : '3', 'rooms' : '3'},
  {'guestMax' : '0', 'rooms' : '100'}];


const form = document.querySelector('.notice');

const type =form.querySelector('#type');

const price = form.querySelector('#price');

const room = form.querySelector('#room_number');

const guests = form.querySelector('#capacity');

const getMinPrice = (key) => TYPES[key][2];

const setDisabledGuests = (key) => {
  for (let i = 0; i<rooms.length; i++ ) {
    guests.querySelector(`option[value="${i}"]`).setAttribute('disabled', 'disabled');
  }
  rooms.forEach( (obj)=> {
    if ( obj.rooms === key){
      for (let i = obj.guestMax; i>0; i-- ) {
        guests.querySelector(`option[value="${i}"]`).removeAttribute('disabled');
      }
    }
    if (obj.rooms === key && obj.guestMax === '0'){
      guests.querySelector('option[value="0"]').removeAttribute('disabled');
    }
  });
};


function onFormChange (evt) {
  if (evt.target.matches('#type'))
  {
    const value = getMinPrice(type.selectedIndex);
    price.placeholder = value;
    price.min = value;
  }
  else if (evt.target.matches('#room_number'))
  {
    setDisabledGuests(room.value);
  }
}

export { onFormChange, form};

