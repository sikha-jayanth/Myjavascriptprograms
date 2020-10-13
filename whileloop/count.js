//program to count the number of digits
var num = Number(prompt("Enter a number"));
count=0
while(num!=0){
    num=parseInt(num/10);
    count++;
}
console.log(count);