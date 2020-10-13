//program to find factorial of a number usig function
function fact(num) {
    var factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial = factorial * i;
    }
    console.log("Factorial :" + factorial);
}

var num = Number(prompt("Enter a number"));
fact(num);