import { is, Map } from 'immutable';

function areMapsEqual(map1, map2) {
    
  return is(map1, map2);
}

// Example usage:
const mapA = Map({ a: 1, b: 2, c: 3 });
const mapB = Map({ a: 1, b: 2, c: 3 });
const mapC = Map({ a: 1, b: 2, c: 4 });

console.log(areMapsEqual(mapA, mapB)); // Should return true
console.log(areMapsEqual(mapA, mapC)); // Should return false