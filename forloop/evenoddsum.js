//program to calculate sum of even numbers and odd numbers upto a limit
var limit = Number(prompt("Enter a limit "));
var evenSum = 0;
var oddSum = 0;
for (let i = 1; i <= limit; i++) {
    if (i % 2 == 0) {
        evenSum = evenSum + i;
    }
    else {
        oddSum = oddSum + i;
    }
}
console.log("Sum of even numbers: " + evenSum);
console.log("sum of odd number: " + oddSum);