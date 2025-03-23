let arr = [10,52,41,96,12,9]

let sorted = arr.sort((a,b) => a - b)

console.log(sorted)

let arr = [10,52,41,96,12,9]

let sorted = arr.sort((a,b) => a - b)

console.log(sorted)


// sum of array

const numbers = [1,2,3,4,5];

function sumOfArray(numbers) {
    return numbers.reduce((acc, num) => acc + num, 0)
}

console.log(sumOfArray(numbers))

//Remove duplicate from an array using (Set)

const arrs = [1,2,2,3,4,4,5]

function removeDupicate(arrs) {
    return [...new Set(arrs)];
}

const newArr = removeDupicate(arrs)

console.log(newArr);


//Remove duplicate from an array normal

function removeDp(arrs) {
    return arrs.filter((num, index) => arr.indexOf(num) === index)
}

const newA = removeDp(arrs)
console.log(newA);
//using Set method
function removeDup(arr) {
    return [...new Set(arr)]
}


// Find the Intersection of Two Arrays

function findIntersection(arr1, arr2) {
    return arr1.filter(value => arr2.includes(value));
}

console.log(findIntersection([1, 2, 3, 4], [3, 4, 5, 6])); // Output: [3, 4]


// Find second largest number in array without sorting 
function pr(nums) {
    let l = -1, s = -1
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > l)  {
         s = l
         l = nums[i]
        } else if (nums[i] < l && nums[i] > s) {
            s = nums[i]
        } 
   }
   return  s
}

// var titleToNumber = function(columnTitle) {
    let result = 0;
    
    for (let i = 0; i < columnTitle.length; i++) {
        let charValue = columnTitle.charCodeAt(i) - 'A'.charCodeAt(0) + 1;
        result = result * 26 + charValue;
    }
    
    return result;
};
