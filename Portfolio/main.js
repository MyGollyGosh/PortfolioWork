//All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

//An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


function validateCred(arr) {
  let doubledArr = [];
  let otherArr = [];
  for (let i = arr.length - 2; i >= 0; i -= 2) {
    let doubledDigit = arr[i] * 2;
    if (doubledDigit > 9) {
      doubledArr.push(doubledDigit - 9);
    } else {
      doubledArr.push(doubledDigit);
    };
  };
  let doubledSum = doubledArr.reduce((accumulator, currentValue) => accumulator + currentValue);
  for (let i = arr.length -1; i >= 0; i -= 2) {
    otherArr.push(arr[i]);
  };
  let otherSum = otherArr.reduce((accumulator, currentValue) => accumulator + currentValue);
  let validCheck = doubledSum + otherSum;
  if (validCheck % 10 === 0) {
    return true;
  } else {
    return false;
  };
};
/* validateCred is a function that will take in an array and run it through the Luhn Algorithm to check if it's a valid card number
number or not. It will return true if it is, or false if it isn't.*/

let invalidCards = []
function findInvalidCards (arr) {
    for (let i = 0; i < arr.length; i++) {
        validateCred(arr[i]);
        if (validateCred(arr[i]) === false) {
            invalidCards.push(arr[i]);
        };
      };
      return invalidCards;
};
findInvalidCards(batch);
/* findInvalidCards calls validateCred and creates a nested array stored in invalidCards of all of the invalid cards (the cards
that returned false). invalidCards sits in the global scope so it can be called in the next function. */

function idInvalidCardCompanies (arr) {
    const amex = 3;
    const visa = 4;
    const mastercard = 5;
    const discover = 6;
    let companies = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] === 3 && companies.includes(`American Express`) === false) {
            companies.push(`American Express`);
        } else if (arr[i][0] === 4 && companies.includes(`Visa`) === false) {
            companies.push(`Visa`);
        } else if (arr[i][0] === 5 && companies.includes(`Mastercard`) === false) {
            companies.push(`Mastercard`);
        } else if (arr[i][0] === 6 && companies.includes(`Discover`) === false) {
            companies.push(`Discover`);
        } else {
            console.log(`Company not found with ${arr[i]}`)
        };
    };
    return companies;
};
console.log(idInvalidCardCompanies(invalidCards));

/* Finally we create a handy list of all the companies who have issued faulty card numbers and also log to the console any card
numbers that do not come from any known company with a loop to iterate over the list of invalid cards provided as the parameter and 
some if statements to check if the company is already on the list, not adding it twice.*/