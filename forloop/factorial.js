//program to find factorial of a number
var num = Number(prompt("Enter a number"));
var fact=1;
for(let i=1;i<=num;i++){
    fact=fact*i;
}
console.log("Factorial :"+fact);