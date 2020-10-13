//program to print reverse of a number
var num = Number(prompt("Enter a number"));
var rev = 0;
while (num != 0) {
    var rem = num % 10;
    rev = (rev * 10) + rem;
    num = parseInt(num / 10);
}
console.log("Reverse: " + rev);