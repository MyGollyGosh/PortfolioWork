// Arrays of different message components
const beginnings = [
    "Believe in yourself",
    "Dream big",
    "Stay positive",
    "Embrace challenges",
    "Find your passion",
];
  
const middles = [
    "and work hard",
    "with determination",
    "while staying focused",
    "and never give up",
    "with a positive mindset",
];
  
const endings = [
    "to achieve greatness",
    "to make a difference",
    "to create your own success",
    "to reach your goals",
    "to inspire others",
];
  
// Function to generate a random index
function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
};
  
// Function to generate an inspirational message
function generateInspirationalMessage() {
    const beginning = beginnings[getRandomIndex(beginnings)];
    const middle = middles[getRandomIndex(middles)];
    const ending = endings[getRandomIndex(endings)];
  
    return `${beginning} ${middle} ${ending}`;
};
console.log(generateInspirationalMessage());
  