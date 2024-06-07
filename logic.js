// Que - 1
// find large even number from array

const largestEven = (arr) => Math.max(...arr.filter((num) => num % 2 === 0));

console.log(largestEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));  //output - 10

// Que - 2
// find Greaterthan or equal four letter words

function fourLetter(name) {
  return name.filter((name) => name.length >= 4);
}

console.log(fourLetter(["Tomato", "Pair", "Air"]));  // output - ['Tomato', 'Pair']

//Que - 3
// find legs of 2 chicken, 3 cow and 5 pigs

function animalsLegs(chickens, cow, pigs) {
  return chickens * 2 + cow * 4 + pigs * 4;
}

console.log(animalsLegs(2, 3, 5));  // output - 36
