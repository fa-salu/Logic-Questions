// Check if a string contains another string
// input mainStr = "hello world", subStr = "world"
// output = true

function ContainAnotherString(mainStr, subStr) {
    let isInclude = false
    if (mainStr.includes(subStr)) {
        isInclude = true
    }
    return isInclude
}


console.log(ContainAnotherString("hello world", "world"));
console.log(ContainAnotherString("javascript", "python"));
