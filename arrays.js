var chocolateBars = ["snickers", "hundred grand", "kit kat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  return [...array, element];
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.unshift(array)
}




// function addElementToBeginningOfArray(array, element) {
//   return [element, ...array]
// }
//
// function destructivelyAddElementToBeginningOfArray(array, element) {
//   array.unshift(element);
//   return array
// }
//
// function addElementToEndOfArray(array, element) {
//   return [...array, element]
//
// }
//
// function destructivelyAddElementToEndOfArray(array, element) {
//   array.push(element)
//   return array
// }
//
// function destructivelyRemoveElementFromBeginningOfArray(array, element) {
//   array.shift(element)
//   return array
// }
//
// function removeElementFromBeginningOfArray(array, element) {
//   array.slice(1)
//   array = array.slice(1)
//   return array
// }
//
// function destructivelyRemoveElementFromEndOfArray(array, element) {
//   array.pop(element)
//   return array
// }
//
// function removeElementFromEndOfArray(array, element) {
//   array.slice(0, array.length - 1)
//   array = array.slice(0, array.length - 1)
//   return array
// }
//
// function accessElementInArray(array, index) {
//   return array[index]
// }
//
// var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
