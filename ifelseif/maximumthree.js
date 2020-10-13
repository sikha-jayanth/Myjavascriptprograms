//program to find the maximum among three numbers

var num1 = Number(prompt("Enter number 1:"));
var num2 = Number(prompt("Enter number 2:"));
var num3 = Number(prompt("Enter number 3:"));
var largest = 0;
if ((num1 >= num2) && (num1 >= num3)) {
    largest = num1;
}
else if ((num2 >= num1) && (num2 >= num3)) {
    largest = num2;
}
else {
    largest = num3;
}
console.log(largest + " is the greatest");
