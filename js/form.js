import {showError} from './alerts.js';
import {mainMarker, MAP_START_POSITION} from './pins.js';
import {URL} from './data.js';


const TYPES = [['bungalow', 'Бунгало', 0], ['flat', 'Квартира', 1000], ['hotel', 'Отель', 3000],  ['house', 'Дом', 5000], ['palace', 'Дворец', 10000 ]];


const roomsObj = {'1' : '1', '2' : '2', '3' : '3', '100' : '0'}; // rooms : max guests


const form = document.querySelector('.notice');

const type =form.querySelector('#type');

const price = form.querySelector('#price');

const room = form.querySelector('#room_number');

const guests = form.querySelector('#capacity');

const timeIn = form.querySelector('#timein');

const timeOut = form.querySelector('#timeout');

const fieldSets = form.querySelectorAll('fieldset');

const addForm = form.querySelector('.ad-form');

const mapFilter = document.querySelector('.map__filters');

const mapFilters = mapFilter.querySelectorAll('.map__filter');

const resForm = form.querySelector('.ad-form__reset');

const getMinPrice = (key) => TYPES[key][2];

const setDisabledGuests = (key) => {
  const guestOptions = guests.querySelectorAll('option');
  if (guestOptions) {
    guestOptions.forEach((guest) => {
      guest.disabled=true;
    });
  }
  guestOptions.forEach((guest) => {
    if (guest.value <= roomsObj[key] && guest.value !== '0' ) {
      guest.disabled=false;
    }
  });
  if (roomsObj[key] === '0'){
    guests.querySelector('option[value="0"]').disabled=false;
  }
};


const onFormChange = (evt)  => {
  if (evt.target.matches('#type')) {
    const value = getMinPrice(type.selectedIndex);
    price.placeholder = value;
    price.min = value;
  } else if (evt.target.matches('#room_number')) {
    setDisabledGuests(room.value);
  } else if (evt.target.matches('#timein')) {
    timeOut.querySelector('option[selected]').selected = false;
    timeOut.querySelector(`option[value="${timeIn.value}"]`).selected = 'selected';
  } else if (evt.target.matches('#timeout')) {
    timeIn.querySelector('option[selected]').selected = false;
    timeIn.querySelector(`option[value="${timeOut.value}"]`).selected = 'selected';
  }
};

const setNonActive = () => {
  addForm.classList.add('ad-form--disabled');
  mapFilter.classList.add('ad-form--disabled');
  mapFilters.forEach((fieldSet) => {
    fieldSet.disabled = true;
  });
  fieldSets.forEach((fieldSet) => {
    fieldSet.disabled = true;
  });
};

const setActive = () => {
  addForm.classList.remove('ad-form--disabled');
  mapFilter.classList.remove('ad-form--disabled');
  mapFilters.forEach((fieldSet) => {
    fieldSet.disabled = false;
  });
  fieldSets.forEach((fieldSet) => {
    fieldSet.disabled = false;
  });
};


const resetAll = (map) => {
  mainMarker.setLatLng({lng: MAP_START_POSITION.lng, lat: MAP_START_POSITION.lat});
  mapFilter.reset();
  map.closePopup();
};

const setUserFormReset = (map) => {
  resForm.addEventListener('click', () => {
    resetAll(map);
  });
};

const setUserFormSubmit = (onSuccess,  map) => {
  addForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);

    fetch(
      URL,
      {
        method: 'POST',
        body: formData,
      },
    )
      .then((response) => {
        if (response.ok) {
          onSuccess();
        } else {
          showError();
        }
      })
      .then(() => {
        resetAll(map);
      })
      .catch(() => {
        showError();
      });
  });
};

export { onFormChange, form, setNonActive, setActive, setUserFormSubmit, setUserFormReset, resetAll };

