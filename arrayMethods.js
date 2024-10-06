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
