import {TYPES} from './data.js';

const createNewObjectDiv  = (object) => {
  const template = document.querySelector('#card').content.querySelector('.popup');
  const card = template.cloneNode(true);

  const createFeatures = () => {
    const featureContainer = card.querySelector('.popup__features');
    const featureList = featureContainer.querySelectorAll('.popup__feature');
    if (object.offer.features) {
      const modifiers = object.offer.features.map((feature) => `popup__feature--${feature}`);
      featureList.forEach((featureListItem) => {
        const modifier = featureListItem.classList[1];

        if (!modifiers.includes(modifier)) {
          featureListItem.remove();
        }
      });
    } else {
      featureContainer.remove();
    }
  };

  const createPhotoCards = () => {
    const photoCards = card.querySelector('.popup__photos');
    const photoCard = card.querySelector('.popup__photo');
    photoCard.remove();
    if (object.offer.photos) {
      object.offer.photos.forEach((photo)=>{
        photoCard.src = photo;
        photoCards.appendChild(photoCard.cloneNode(true));
      });}
  };

  const createTitle = () => {
    if (object.offer.title) {
      card.querySelector('.popup__title').textContent = object.offer.title;
    } else {
      card.querySelector('.popup__title').remove();
    }
  };

  const createAddress = () => {
    if (object.offer.address) {
      card.querySelector('.popup__text--address').textContent = object.offer.address;
    } else {
      card.querySelector('.popup__text--address').remove();
    }
  };

  const createPrice = () => {
    if (object.offer.price ) {
      card.querySelector('.popup__text--price').textContent = `${object.offer.price} ₽/ночь`;
    } else {
      card.querySelector('.popup__text--price').remove();
    }
  };

  const filterByType = (type) => {
    const obj = TYPES.filter((value) => value.type === type);
    return obj[0].onrus;
  };

  const createType = () => {
    if (object.offer.type) {
      card.querySelector('.popup__type').textContent = filterByType(object.offer.type);
    } else {
      card.querySelector('.popup__type').remove();
    }
  };

  const createRooms = () => {
    if (object.offer.rooms && object.offer.guests) {
      card.querySelector('.popup__text--capacity').textContent = `${object.offer.rooms } комнаты для ${  object.offer.guests  } гостей`;
    } else if (!object.offer.rooms && object.offer.guests) {
      card.querySelector('.popup__text--capacity').textContent = `Для ${  object.offer.guests  } гостей`;
    } else if (object.offer.rooms && !object.offer.guests) {
      card.querySelector('.popup__text--capacity').textContent = `${object.offer.rooms } комнаты`;
    } else {
      card.querySelector('.popup__text--capacity').remove();
    }
  };

  const createTime = () => {
    if (object.offer.checkin && object.offer.checkout) {
      card.querySelector('.popup__text--time').textContent = `Заезд после ${object.offer.checkin }, выезд до  ${  object.offer.checkout  }`;
    } else if (!object.offer.checkin && object.offer.checkout) {
      card.querySelector('.popup__text--time').textContent = `Выезд до ${  object.offer.checkout  }`;
    } else if (object.offer.checkin && !object.offer.checkout) {
      card.querySelector('.popup__text--time').textContent = `Заезд после ${object.offer.checkin }`;
    } else {
      card.querySelector('.popup__text--capacity').remove();
    }
  };

  const createDescription = () => {
    if (object.offer.description) {
      card.querySelector('.popup__description').textContent = object.offer.description;
    } else {
      card.querySelector('.popup__description').remove();
    }
  };

  const createAvatar = () => {
    if (object.author) {
      card.querySelector('.popup__avatar').src = object.author.avatar;
    } else {
      card.querySelector('.popup__avatar').remove();
    }
  };
  createTitle();
  createAddress();
  createPrice();
  createType();
  createRooms();
  createTime();
  createDescription();
  createAvatar();
  createPhotoCards();
  createFeatures();
  return card;
};
export { createNewObjectDiv };
