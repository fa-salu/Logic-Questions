//number pattern

let num = 1;
let sum = '';

for (var i = 1; i <= 3; i++) {
    for (var j = 3; j > i; j--) {
        sum += ' ';
    }
    for (k = 0; k < (2 * i - 1); k++) {
        sum += num;
        num++;
    }
    sum += '\n';
}
console.log(sum);