const groceries1 = [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}];
// returns 'Carrots, Hummus, Pesto and Rigatoni'
 
const groceries2 = [{item: 'Bread'}, {item: 'Butter'}];
// returns 'Bread and Butter'
 
const groceries3 = [{item: 'Cheese Balls'}];
// returns 'Cheese Balls'

function groceries (obj) {
    let grocString = obj.map(item => item.item);
    let grocStringLast = undefined;
    if (grocString.length > 1) {
        grocStringLast = grocString.slice(grocString.length);

    }
};  
console.log(groceries(groceries1));
console.log(groceries(groceries2));
console.log(groceries(groceries3));

/* Need to seperate last index of obj into seperate variable and concat both variable together*/