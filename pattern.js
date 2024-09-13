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



//pattern pyramid

for (var i = 1; i <= 5; i++) {
    let pattern = '';
    for (var j = 1; j <= 5 - i; j++) {
        pattern += '  ';
    }
    for (var k = 1; k <= 2 * i - 1; k++) {
        pattern += '* ';
    }
    console.log(pattern);
}



//butterfly

for (var i=1; i<=5; i++){
    let star = '';
    for (j=1; j<=5; j++) {
        if(j==1||j==5 || i+j==6||i==j) {
            star += '* ';
        } else {
            star +='  ';
        }
    }
    console.log(star);
}