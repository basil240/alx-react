// 3-list.js
import { List } from 'immutable';

export function getListObject(array) {
  // Convert the input array into an immutable List
  const immutableList = List(array);
  return immutableList;
}

export function addElementToList(list, element) {
  // Append the element to the list and return the updated list
  const updatedList = list.push(element);
  return updatedList;
}


const updatedList = addElementToList(immutableList, 4);
console.log(updatedList);
