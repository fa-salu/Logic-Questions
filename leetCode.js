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



// 2619 - Array Prototype Last
Array.prototype.last = function() {
    if (this.length === 0) {
        return -1;
    } else {
        return this[this.length - 1]
    }
};

// 4. Median of Two Sorted Arrays
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


// 26. Remove Duplicates from Sorted Array
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


// array que - 66

var plusOne = function(digits) {
    let res = BigInt(digits.join(''))
    let inc = String(BigInt(res) + 1n)
    return inc.toString().split('').map(Number)
};


// string 20. Valid Parentheses

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
