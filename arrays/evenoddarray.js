//program to find even and odd numbers in an array
var arr=[10,21,30,45,50];
var evenArray=[];
var oddArray=[];
for(item of arr){
    if(item%2==0){
        evenArray.push(item);
    }
else{
    oddArray.push(item);
}
}
console.log("Array: "+arr);
console.log("even numbers: "+evenArray);
console.log("odd numbers:  "+oddArray);