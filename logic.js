// Combined or merged version of both changes
// (Assuming you wanted to keep both sets of changes)

// Que - 1
// find large even number from array
const largestEven = (arr) => Math.max(...arr.filter((num) => num % 2 === 0));
console.log(largestEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); //output - 10

// Que - 2
// find Greater than or equal four letter words
function fourLetter(name) {
  return name.filter((name) => name.length >= 4);
}
console.log(fourLetter(["Tomato", "Pair", "Air"])); // output - ['Tomato', 'Pair']

// Que - 3
// find legs of 2 chicken, 3 cows, and 5 pigs
function animalsLegs(chickens, cows, pigs) {
  return chickens * 2 + cows * 4 + pigs * 4;
}
console.log(animalsLegs(2, 3, 5)); // output - 36

// Que - 4
// check two numbers and return true if the number is 100 or if the sum of the two numbers is 100
const isEqualTo100 = (a, b) => a === 100 || b === 100 || a + b === 100;
console.log(isEqualTo100(100, 0)); // true
console.log(isEqualTo100(50, 30)); // false
console.log(isEqualTo100(80, 20)); // true

// Que - 5
// First letter Change to UpperCase
function names(nam) {
  let word = nam.split(" ");
  for (i = 0; i < word.length; i++) {
    word[i] = word[i][0].toUpperCase() + word[i].slice(1).toLowerCase();
  }
  return word.join(" ");
}
console.log(names("my name is fazal")); // My Name Is Fazal

// Que - 6
// input = 'abc'
// output = [a,b,c,ab,bc,abc]
const input = "abc";
function val(input) {
  const arr = [];
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j <= input.length; j++) {
      arr.push(input.slice(i, j));
    }
  }
  arr.sort((a, b) => a.length - b.length);
  return arr;
}
console.log(val(input));


// Qes - 7
// Find the First Non-Repeating Character in a String
function notRepeatChar(str) {
  const charCount = {};
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }
  return null;
}
console.log(notRepeatChar('hhello')); // output: 'e'


// Que - 8
// two array concat, sort and merge
// output = [ 1, 2, 3, 4, 5, 6 ]

function sortedArr(arr1, arr2) {
  const arr = arr1.concat(arr2)
  return arr.sort((a,b) => a - b)
}

console.log(sortedArr([1,3,5],[2,4,6]))


// another without sort and merge method
function sortedArr (arr1, arr2) {
  const newArr = []
  for(let i = 0; i <arr1.length; i++) {
          newArr.push(arr1[i])
          newArr.push(arr2[i])
  }
  return newArr
}

console.log(sortedArr([1,3,5],[2,4,6]))


//Que - 9
// Find Duplicate Numbers from array

function findDuplicates(arr) {
  let count = {}
  let duplicate = []
  for (let i = 0; i < arr.length; i++) {
      count[arr[i]] = (count[arr[i]] || 0) + 1
  }
  
 for (let key in count) {
     if (count[key] > 1) {
         duplicate.push(Number(key))
     }
 }
  return duplicate
}

console.log(findDuplicates([1, 2, 3, 4, 5, 6, 3, 2, 7, 8]));  