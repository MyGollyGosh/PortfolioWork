// Write function below
function subLength (string1, string2) {
    let index1 = -1;
    let index2 = -1;
        for (let i = 0; i < string1.length; i++) {
        if (string1[i] === string2) {
            if (index1 === -1) {
                index1 = i;
            } else if (index2 === -1) {
                index2 = i;
            }else {
                return 0;
            };
        }
    };
    if (index1 === -1 || index2 === -1) {
        return 0
    } else {
        return index2-index1+1;
    };
};
  
  console.log(subLength('Saturday', 'a')); // returns 6
  console.log(subLength('summer', 'm')); // returns 2
  console.log(subLength('digitize', 'i')); // returns 0
  console.log(subLength('cheesecake', 'k')); // returns 0