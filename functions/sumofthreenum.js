function sumofThree(num1, num2, num3) {
    return (num1 + num2 + num3);
}

var num1 = Number(prompt("Enter a number1 :"));
var num2 = Number(prompt("Enter a number2 :"));
var num3 = Number(prompt("Enter a number3 :"));
var sum = sumofThree(num1, num2, num3);
console.log("Sum :" + sum);