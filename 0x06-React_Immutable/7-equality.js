import { Map, is } from 'immutable';

export function areMapsEqual(map1, map2) {
  // Use is method to check if the Maps are equal
  return is(map1, map2);
}

const map1 = new Map({
  firstName: 'Guillaume',
  lastName: 'Salva',
});

const map2 = new Map({
  firstName: 'Guillaume',
  lastName: 'Salva',
});

const result = areMapsEqual(map1, map2);
console.log(result); // Output: true
