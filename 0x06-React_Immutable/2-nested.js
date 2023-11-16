export default function accessImmutableObject(object, array) {
  let currentObject = object;

  for (const key of array) {
    // Check if the current level is a Map (Immutable.js)
    if (currentObject instanceof Map) {
      currentObject = currentObject.get(key);
    } else if (typeof currentObject === 'object' && currentObject !== null) {
      // Check if the current level is a plain object
      currentObject = currentObject[key];
    } else {
      // If the current level is neither a Map nor a plain object, return undefined
      return undefined;
    }
  }

  return currentObject;
}


const result = accessImmutableObject(exampleObject, ['name', 'first']);
console.log(result); // Output: Guillaume
