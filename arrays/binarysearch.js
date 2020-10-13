//program to implement binary search

var arr = [10, 20, 15, 25, 50];
var searchItem = Number(prompt("enter a number to be searched "));
arr.sort();
console.log(arr)
var low = 0;
var upp = arr.length - 1;
var mid = parseInt((low + upp) / 2);
var flag = 0;
// console.log(arr[mid]);
while (low <= upp) {
    mid = parseInt((low + upp) / 2);
    if (searchItem < arr[mid]) {
        upp = mid - 1;
    }
    else if (searchItem > arr[mid]) {
        low = mid + 1;
    }
    else {
        console.log("Item found at position " + (mid + 1));
        flag = 1;
        break;
    }
}
if (flag == 0) {
    console.log("not found");
}
