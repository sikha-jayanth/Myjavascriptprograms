//program to find pair sum

var arr = [1, 2, 3, 4];
var sum = Number(prompt("enter sum "));
arr.sort();
// console.log(arr)
var low = 0;
var upp = arr.length - 1;
var flag = 0;
while (low <= upp) {
    var data = arr[low] + arr[upp];
    if (data == sum) {
        console.log("pair: " + arr[low] + "," + arr[upp]);
        flag = 1;
        break;

    }

    else if (data > sum) {
        upp = upp - 1;
    }

    else {
        low = low + 1
    }
}
if (flag == 0) {
    console.log("pair not found");
}




