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

// Find the first occurence of a charecter
// input str= "mississippi", char = "p"
// output = 8

function FirstChar (str, char) {
    str.split(',')
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return i
        }
    }
    return -1

    // single line code 
    // retrun str.indexOf(char)
}

console.log(FirstChar("mississipp", "p")
console.log(FirstChar("Hello", "p")


// Check if a string starts with another string
// input =  str1 = "morning glory", str2 = "morning"
// output = true // if not false

function StartAnotherString (str1, str2) {
    return str1.startsWith(str2)
}

console.log(StartAnotherString("morning glory", "morning"))
console.log(StartAnotherString("morning glory", "good"))
