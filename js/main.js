import {
  OBJECTS
} from './data.js';

import {
  createAuthor,
  createLocation,
  createOffer
} from './utils.js';

const createObject = () => {
  const location = createLocation();
  return {
    author: createAuthor(),
    offer: createOffer(location),
    location,
  };
};

Array.from({length:OBJECTS}, createObject);

