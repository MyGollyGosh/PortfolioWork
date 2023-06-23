function isTheDinnerVegan (arr) {
    return arr.every(obj => obj.hasOwnProperty('source') && obj['source'] === 'plant');
  };

  //function that checks if an array of objects all have the property 'source' and if source is = to 'plant'. Returns true or false.