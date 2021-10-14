import {
  OBJECTS
} from './data.js';

import {
  createObject
} from './utils.js';

Array.from({length:OBJECTS}, createObject);

