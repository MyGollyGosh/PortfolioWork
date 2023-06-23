function reverseArray (array) {
  let newArray = [];
  for (let i = array.length-1; i >= 0; i--) {
    newArray.push(array[i]);
  };
  return newArray;
};
/* This function take in an array (array) and loops through its length from the end, adding the value of each loop (array[i])
    to newArray and finally returning newArray with the value of the original array in reverse. */
