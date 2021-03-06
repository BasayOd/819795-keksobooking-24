import {showError} from './alerts.js';
import {mainMarker} from './pins.js';
import {URL, roomsObj, TYPES, MAP_START_POSITION} from './data.js';


const form = document.querySelector('.notice');

const address = form.querySelector('#address');

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


const inputs = form.querySelectorAll('input');

const getMinPrice = (key) => TYPES[key].price;

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
  map.closePopup();
  mapFilter.reset();
  inputs.forEach((value) => {
    value.value = '';
  });
  address.value = `${String(MAP_START_POSITION.lng)}, ${String(MAP_START_POSITION.lat)}`;
};


const setUserFormSubmit = (onSuccess, map) => {
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

export { onFormChange, form, setNonActive, setActive, setUserFormSubmit, resetAll };

