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