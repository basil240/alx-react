// 1-map.js

const { Map } = require('immutable');

function getImmutableObject(object) {
  // Convert the input object into an immutable Map
  const immutableMap = Map(object);
  return immutableMap;
}


const immutableResult = getImmutableObject(inputObject);
console.log(immutableResult);
