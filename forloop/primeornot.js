//program to check whether  number is prime or not
var num = Number(prompt("Enter a number"));
var flag=0;
for(let i=2;i<num;i++){
    if((num%i)==0){
        flag=1;
        break;
    }
}
if(flag==1){
    console.log("Number is not prime");
}
else{
    console.log("Number is prime")
}