function convertToBaby (array) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
      newArray.push(`baby ${array[i]}`);
    };
    return newArray;
  }
  /* This function take an array (array) as a parameter and adds the word 'baby' to the start of the element (array[i])
    and returns the mutated array (newArray) */