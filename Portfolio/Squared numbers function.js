const numbers = [2, 7, 9, 171, 52, 33, 14]

const toSquare = num => num * num

// Write your code here:
function squareNums (arr) {
  return arr.map(toSquare);
};
console.log(squareNums(numbers));
//This function intakes an array (arr) of numbers and returns a new array with the array of numbers squared. This is then called to the console.