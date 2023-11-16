// 0-fromjs.js

const Immutable = require('immutable');

function getImmutableObject(object) {
  // Convert the input object into an immutable Map using fromJS
  const immutableMap = Immutable.fromJS(object);
  return immutableMap;
}


const immutableResult = getImmutableObject(inputObject);
console.log(immutableResult);
