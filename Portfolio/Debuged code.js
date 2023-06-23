/* This is a piece of code given by codecdemy that requires debugging

const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = arr => {
      let results = [];
      // The 'outer' for loop - loops through each element in the array
      for (let i = 0; i < arr.length; i++) {
            number = arr[i];

            // The 'inner' while loop - searches for smallest power of 2 greater than the given number
            i = 1;
            while (i < number) {
                  i = i * 2;
            }
            results.push(i);
      }
      return results
}

console.log(smallestPowerOfTwo(numbers)) 
// Should print the returned array [ 8, 4, 16, 32 ] instead prints the returned array [8]

*/
//This is the debugged code

const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = arr => {
      let results = [];
      // The 'outer' for loop - loops through each element in the array
      for (let i = 0; i < arr.length; i++) {
            let number = arr[i];
            // The 'inner' while loop - searches for smallest power of 2 greater than the given number
            j = 1;
            while (j < number) {
                  j = j * 2;
            }
            results.push(j);
      }
      return results
}

console.log(smallestPowerOfTwo(numbers)) 

/* In the debugged code I reassigned the inner iterator (previously i) in the 'while' loop to j as this was
    causing the outter 'for' loop to stop early as the stop condition of i being less than arr's length was being met
    when i was being multiplied in the outter loop.
    Also added the let declaration to the number variable to change the scope to be within the functions scope only
    and not in the global scope to make more manageable code if this was used in a larger code base that may want to 
    use a variable called number elsewhere */