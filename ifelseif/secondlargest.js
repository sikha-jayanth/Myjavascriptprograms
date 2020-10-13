//program to find the second largest out of the three numbers

var num1 = Number(prompt("Enter number 1:"));
var num2 = Number(prompt("Enter number 2:"));
var num3 = Number(prompt("Enter number 3:"));
var secondLargest = 0;
if ((num1 >num2) && (num1 >num3)) {
    if (num2 >num3) {
        secondLargest = num2;
    }
    else {
        secondLargest = num3;
    }
}
else if ((num2 >num1) && (num2 >num3)) {
    if (num1 >num3) {
        secondLargest = num1;
    }
    else {
        secondLargest = num3;
    }
}
else if ((num3 >num1) && (num3 >num2)) {
    if (num1 > num2) {
        secondLargest = num1;
    }
    else {
        secondLargest = num3;
    }
}
console.log(secondLargest+" is the second largest");