
const TYPES = [['bungalow', 'Бунгало', 0], ['flat', 'Квартира', 1000], ['hotel', 'Отель', 3000],  ['house', 'Дом', 5000], ['palace', 'Дворец', 10000 ]];


const roomsObj = {'1' : '1', '2' : '2', '3' : '3', '100' : '0'}; // rooms : max guests


const form = document.querySelector('.notice');

const type =form.querySelector('#type');

const price = form.querySelector('#price');

const room = form.querySelector('#room_number');

const guests = form.querySelector('#capacity');

const getMinPrice = (key) => TYPES[key][2];

const setDisabledGuests = (key) => {
  const guestOptions = guests.querySelectorAll('option');
  if (guestOptions) {
    guestOptions.forEach((guest) => {
      guest.setAttribute('disabled', 'disabled');
    });
  }
  guestOptions.forEach((guest) => {
    if (guest.value < roomsObj[key] && guest.value !== '0' ) {
      guest.removeAttribute('disabled');
    }
  });
  if (roomsObj[key] === '0'){
    guests.querySelector('option[value="0"]').removeAttribute('disabled');
  }
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

