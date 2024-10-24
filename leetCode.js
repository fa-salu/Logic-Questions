// 2677 - Chunk Array
// input = chunk([1, 2, 3, 4, 5, 6, 7], 3)  // size divide the array
// output = [[1, 2, 3], [4, 5, 6], [7]]

var chunk = function(arr, size) {
    const chunkarry = []
    for (let i = 0; i < arr.length; i += size) {
        chunkarry.push(arr.slice(i, i + size))
    }
    return chunkarry
};



// (array)  2619 - Array Prototype Last
Array.prototype.last = function() {
    if (this.length === 0) {
        return -1;
    } else {
        return this[this.length - 1]
    }
};

// (array)  4. Median of Two Sorted Arrays
var findMedianSortedArrays = function(nums1, nums2) {
    let newArr = nums1.concat(nums2);
    newArr.sort((a, b) => a - b);
    
    let n = newArr.length;
    
    if (n % 2 === 1) {
        return newArr[Math.floor(n / 2)];
    }
    else {
        let middle1 = newArr[Math.floor((n - 1) / 2)];
        let middle2 = newArr[Math.floor(n / 2)];
        return (middle1 + middle2) / 2;
    }
};


//(array)  26. Remove Duplicates from Sorted Array
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;
    
    let i = 0;
    
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    
    return i + 1;
};


// (array) que - 66

var plusOne = function(digits) {
    let res = BigInt(digits.join(''))
    let inc = String(BigInt(res) + 1n)
    return inc.toString().split('').map(Number)
};


// (string) 20. Valid Parentheses

var isValid = function(s) {   
    const stack = [];
    
    for (let i = 0 ; i < s.length ; i++) {
        let c = s.charAt(i);
        switch(c) {
            case '(': stack.push(')')
            break;
            case '[': stack.push(']')
                break;
            case '{': stack.push('}')
                break;
            default:
                if (c !== stack.pop()) {
                    return false
                }
        }
    }
    
    return stack.length === 0
};


// (string )14. Longest Common Prefix

var longestCommonPrefix = function (strs) {
  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix === "") {
        return "";
      }
    }
  }
  return prefix;
};



// (string)  58. Length of Last Word

var lengthOfLastWord = function(s) {
    let word = s.trim().split(' ')
    return word[word.length -1].length

};



// (string)  709. To Lower Case

var toLowerCase = function(s) {
    return s.toLowerCase()
};


// (string) 2129. Capitalize the Title

var capitalizeTitle = function(title) {
    let word = title.toLowerCase().split(" ")
    for(let i = 0; i < word.length; i++) {
        if (word[i].length <= 2) {
            word[i] = word[i].toLowerCase()
        } else {
            word[i] = word[i][0].toUpperCase() + word[i].slice(1)
        }
    } 
    return word.join(' ')
};


// (array)  217. Contains Duplicate

var containsDuplicate = function(nums) {
    nums.sort((a,b) => a - b)
    for (let i = 0; i < nums.length; i++ ) {
        if (nums[i] === nums[i + 1]) {
            return true
        }
    }
    return false
};



// (string) 125. Valid Palindrome

var isPalindrome = function(s) {
    let pal = s.toLowerCase().replace(/[^a-z0-9]/g, '')
    if (pal === pal.split('').reverse().join('')) {
        return true
    }
    return false
};


// (string) 168. Excel Sheet Column Title

var convertToTitle = function(columnNumber) {
    let res = ''
    while(columnNumber > 0) {
        columnNumber--
        let remain = columnNumber % 26
        res = String.fromCharCode(65 + remain) + res
        columnNumber = Math.floor(columnNumber / 26)
    }
    return res
};
