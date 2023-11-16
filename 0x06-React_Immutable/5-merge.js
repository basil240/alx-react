// 5-functions.js
import { List, Map } from 'immutable';

export function concatElements(page1, page2) {
  // Convert arrays to Lists and concatenate them
  const list1 = List(page1);
  const list2 = List(page2);
  const concatenatedList = list1.concat(list2);
  return concatenatedList;
}

export function mergeElements(page1, page2) {
  // Convert objects to Maps and merge them
  const map1 = Map(page1);
  const map2 = Map(page2);
  const mergedMap = map1.merge(map2);
  return List(mergedMap.values());
}

// Example usage:
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const object1 = { a: 'apple', b: 'banana' };
const object2 = { b: 'blueberry', c: 'cherry' };

const resultConcat = concatElements(array1, array2);
console.log(resultConcat);

const resultMerge = mergeElements(object1, object2);
console.log(resultMerge);
