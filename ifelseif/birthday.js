//program to calculate age of a person

var bday = Number(prompt("Enter birth day"));
var bmonth = Number(prompt("Enter birth month"));
var byear = Number(prompt("enter birth year"));

var cday = Number(prompt("Enter current day"));
var cmonth = Number(prompt("Enter current month"));
var cyear = Number(prompt("enter current year"));
var age = cyear - byear;
if (cmonth < bmonth) {
    age = age - 1;
}
else if (cmonth == bmonth) {
    if (cday < bday) {
        age = age - 1;
    }
}
console.log("you are " + age + " years old");