/ 4-maps.js
import { Map } from 'immutable';

// Create and export the first constant 'map'
export const map = Map({
  1: 'Liam',
  2: 'Noah',
  3: 'Elijah',
  4: 'Oliver',
  5: 'Jacob',
  6: 'Lucas',
});

export const map2 = map
  .set(2, 'Benjamin') // Modify the value for index 2
  .set(4, 'Oliver');   // Modify the value for index 4


