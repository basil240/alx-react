import { List, Map } from 'immutable';

function concatElements(page1, page2) {

  return List(page1).concat(page2);
}

function mergeElements(page1, page2) {

  const mergedMap = Map(page1).merge(page2);

  return List.fromSeq(mergedMap.values());
}

const arrayPage1 = [1, 2, 3];
const arrayPage2 = [4, 5, 6];
const mergedArray = concatElements(arrayPage1, arrayPage2);
console.log('Merged Array:', mergedArray);

const objectPage1 = { a: 'apple', b: 'banana' };
const objectPage2 = { b: 'blueberry', c: 'cherry' };
const mergedObject = mergeElements(objectPage1, objectPage2);
console.log('Merged Object:', mergedObject);