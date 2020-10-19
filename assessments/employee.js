let employee = [

    { eid: 100, name: "ajay", desig: "devop", join: 1981, resign: 2003 },
    { eid: 101, name: "vijay", desig: "devop", join: 1992, resign: 2008 },
    { eid: 102, name: "bijoy", desig: "ba", join: 1999, resign: 2007 },
    { eid: 103, name: "jhon", desig: "ba", join: 1989, resign: 2010 },
    { eid: 104, name: "danie", desig: "qa", join: 2009, resign: 2014 },
    { eid: 105, name: "lari", desig: "qa", join: 1987, resign: 2010 },
]


//print all employee name and designation only

var nameDesg = employee.map(emp => [emp.name, emp.desig]);

console.log("All employee names and their designations :");
console.log(nameDesg);

//print all employee details whose desig equals devop

var edetails_devop = employee.filter(emp => emp.desig == "devop");

console.log("employee details where designation=devop");
console.log(edetails_devop);


//print all employee details those who are woking in 80s  [*(>1980 & <1190)]

var edetails_eighties = employee.filter(emp => (emp.join > 1980) && (emp.join < 1990));

console.log("employee details of those who where working in the 80s");
console.log(edetails_eighties);

//print all employee details those who have experience >9 years

var edetails_experience = employee.filter(emp => (emp.resign - emp.join) > 9);

console.log("employee details of those who have experience >9 years");
console.log(edetails_experience);

//sort all employees based on theire joining year

var edetails_sorted = employee.sort((emp1, emp2) => emp1.join - emp2.join);

console.log("employee details sorted on the basis of their joining year");
console.log(edetails_sorted);


