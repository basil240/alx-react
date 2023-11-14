import { List, Map } from 'immutable';

function mergeDeeplyElements(page1, page2) {

  const map1 = Map.fromJS(page1);
  const map2 = Map.fromJS(page2);

  const mergedMap = map1.mergeDeep(map2);

  return List.fromSeq(mergedMap.values());
}

const objectPage1 = { a: { b: 1, c: 2 }, d: 3 };
const objectPage2 = { a: { c: 3, e: 4 }, d: 5 };
const mergedDeeply = mergeDeeplyElements(objectPage1, objectPage2);
console.log('Merged Deeply Object:', mergedDeeply);