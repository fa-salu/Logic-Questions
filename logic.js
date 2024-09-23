<<<<<<< HEAD
// Que - 1
// find large even number from array

const largestEven = (arr) => Math.max(...arr.filter((num) => num % 2 === 0));

console.log(largestEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); //output - 10

// Que - 2
// find Greaterthan or equal four letter words

function fourLetter(name) {
  return name.filter((name) => name.length >= 4);
}

console.log(fourLetter(["Tomato", "Pair", "Air"])); // output - ['Tomato', 'Pair']

//Que - 3
// find legs of 2 chicken, 3 cow and 5 pigs

function animalsLegs(chickens, cow, pigs) {
  return chickens * 2 + cow * 4 + pigs * 4;
}

console.log(animalsLegs(2, 3, 5)); // output - 36

//Que - 4
//check two numbers and return true if the number is 100 or if the sum of the two numbers is 100

const isEqualTo100 = (a, b) => a === 100 || b === 100 || a + b === 100;
console.log(isEqualTo100(100, 0)); //true
console.log(isEqualTo100(50, 30)); //false
console.log(isEqualTo100(80, 20)); //true

// Que - 5
// First letter Change to UpperCase

function names(nam) {
  let word = nam.split(" ");
  for (i = 0; i < word.length; i++) {
    word[i] = word[i][0].toUpperCase() + word[i].slice(1).toLowerCase();
  }
  res = word.join(" ");
  return res;
}

console.log(names("my name is fazal")); // My Name Is Fazal


// Que -6
// input = 'abc'
// output = [a,b,c,ab,bc,abc]

const input = "abc";

function val(input) {
  const arr = [];

  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j <= input.length; j++) {
      const values = input.slice(i, j);
      // console.log(values);

      arr.push(values);
    }
  }

  arr.sort((a, b) => a.length - b.length);
  return arr;
}

const result = val(input);
console.log(result);


//  Find the First Non-Repeating Character in a String
function notRepeatChar(str) {
  charCount = {}
  for (let char of str) {
      charCount[char] = (charCount[char] || 0) + 1
  }
  
  for (let char of str) {
      if (charCount[char] === 1) {
          return char
      }
  }
}

console.log(notRepeatChar('hhello'))
=======
// Que - 1
// find large even number from array

const largestEven = (arr) => Math.max(...arr.filter((num) => num % 2 === 0));

console.log(largestEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); //output - 10

// Que - 2
// find Greaterthan or equal four letter words

function fourLetter(name) {
  return name.filter((name) => name.length >= 4);
}

console.log(fourLetter(["Tomato", "Pair", "Air"])); // output - ['Tomato', 'Pair']

//Que - 3
// find legs of 2 chicken, 3 cow and 5 pigs

function animalsLegs(chickens, cow, pigs) {
  return chickens * 2 + cow * 4 + pigs * 4;
}

console.log(animalsLegs(2, 3, 5)); // output - 36

//Que - 4
//check two numbers and return true if the number is 100 or if the sum of the two numbers is 100

const isEqualTo100 = (a, b) => a === 100 || b === 100 || a + b === 100;
console.log(isEqualTo100(100, 0)); //true
console.log(isEqualTo100(50, 30)); //false
console.log(isEqualTo100(80, 20)); //true

// Que - 5
// First letter Change to UpperCase

function names(nam) {
  let word = nam.split(" ");
  for (i = 0; i < word.length; i++) {
    word[i] = word[i][0].toUpperCase() + word[i].slice(1).toLowerCase();
  }
  res = word.join(" ");
  return res;
}

console.log(names("my name is fazal")); // My Name Is Fazal


// Que -6
// input = 'abc'
// output = [a,b,c,ab,bc,abc]

const input = "abc";

function val(input) {
  const arr = [];

  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j <= input.length; j++) {
      const values = input.slice(i, j);
      // console.log(values);

      arr.push(values);
    }
  }

  arr.sort((a, b) => a.length - b.length);
  return arr;
}

const result = val(input);
console.log(result);
>>>>>>> 94e01afbe52ea4c6d539f991102e1b366900f97f
