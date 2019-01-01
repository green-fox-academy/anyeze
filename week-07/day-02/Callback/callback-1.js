'use strict';
// // Exercise 1:
const mapWith = (array, callback) => {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    output[i] = callback(array[i]);
  };
  return output;
}
const addOne = (number) => {
  return number + 1;
}
console.log(mapWith([1, 2, 3], addOne));

// // Exercise 2:
const removeSecondLetter = (text) => {
  let output = '';
  for (let i = 0; i < text.length; i++) {
    if (i % 2 === 0) {
      output += text.charAt(i);
    }
  }
  return output;
}
const words = ['map', 'reduce', 'filter'];

console.log(mapWith(words, removeSecondLetter));
