// Find Unique Number
function findOne(nums) {
  let unique = 0;
  for (let num of nums) {
    unique ^= num;
  }
  return unique;
}
console.log(findOne([4, 1, 2, 1, 2])); // output: 4

// Missing Number in Array
function missingNumber(nums) {
  let n = nums.length;
  let xor = 0;

  for (let i = 0; i <= n; i++) {
    xor ^= i;
  }
  for (let num of nums) {
    xor ^= num;
  }

  return xor;
}

console.log(missingNumber([0, 1, 3])); // Output: 2

// Swapping Two Number without using third variable

function swap(a, b) {
  a = a ^ b;
  b = a ^ b;
  a = a ^ b;

  return [a, b];
}

console.log(swap(5, 3)); // output: [3, 5]

// Check if Two Numbers Are Opposite Signs

function oppositeSign(a, b) {
  return (a ^ b) < 0;
}

console.log(oppositeSign(5, -3)); // output: true

// Determine if Two Strings Are Anagrams Using XOR

function areAnagrams(str1, str2) {
  if (str1.length !== str2.length) return false;
  let xorResult = 0;

  for (let char of str1) {
    xorResult ^= char.charCodeAt(0);
  }
  for (let char of str2) {
    xorResult ^= char.charCodeAt(0);
  }

  return xorResult === 0;
}

console.log(areAnagrams("listen", "silend")); // Output: true
