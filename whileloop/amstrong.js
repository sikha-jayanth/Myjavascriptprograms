//program to check whether a number is amstrong number
var num = Number(prompt("Enter a number"));
var sum = 0;
var temp=num;
while (num != 0) {
    var rem = num % 10;
    sum = (rem**3) +sum;
    num = parseInt(num / 10);
}
// console.log(sum);
if(sum==temp){
    console.log("Given number is Amstrong number");
}
else{
    console.log("Not an Amstrong number");
}