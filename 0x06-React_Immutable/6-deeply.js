// 6-merge-deep.js
import { Map } from 'immutable';

export function mergeDeeplyElements(page1, page2) {
  // Convert objects to Maps and merge them deeply
  const map1 = Map(page1);
  const map2 = Map(page2);
  const mergedMap = map1.mergeDeep(map2);
  return List(mergedMap.values());
}

const page1 = {
  'user-1': {
    id: 1,
    name: 'test',
    likes: {
      1: {
        uid: 1234,
      }
    }
  },
};

const page2 = {
  'user-1': {
    likes: {
      2: {
        uid: 134,
      }
    }
  },
};

const mergedResult = mergeDeeplyElements(page1, page2).toJS();
console.log(mergedResult);
