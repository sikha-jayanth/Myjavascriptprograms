//program to find the sum of numbers upto a given limit
var limit = Number(prompt("Enter a limit"));
var sum = 0;
var i = 1;
while (i <= limit) {
    sum = sum + i;
    i++;
}
console.log("sum :"+sum);
