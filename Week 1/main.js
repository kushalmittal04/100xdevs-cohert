console.log("Hello World!");

console.log(-4.5);
console.log(true);
console.log(false);

let a=10;
a=20;
console.log(a);

var b=1;
b=2;
console.log(a);

const d=1;
console.log(d);

let firstName="Kushal";
console.log(firstName);

let age=21;
console.log(age);

console.log("The person name is " + firstName + " and his age is " + age);

// If Else Statement
let isMarried = false;

if (isMarried) {        // (isMarried == true)
    // Code
    console.log(firstName + " is Married.");
} else {
    // Code
    console.log(firstName + " is not Married.");
}

let time = 24;
if (time < 10) {
greeting = "Good morning";
} else if (time < 20) {
greeting = "Good day";
} else {
greeting = "Good evening";
}
console.log(greeting);

// for loop
for(let i=0 ; i<10 ; ++i) {
    console.log(i);
}

const person1 = "Kushal";
const gender1 = "Male";
const age1 = 21;
const person2 = "Kushagra";
const gender2 = "Male";
const age2 = 24;

// arrays
const personArray = ["Kushal", "Kushagra", "Isha", "Ayan"];
console.log(personArray[0]);
console.log(personArray[1]);
console.log(personArray[2]);
console.log(personArray[3]);
console.log(personArray[4]);
console.log(personArray[-1]);

const genderArray = ["Male", "Male", "Female", "Male"];
const ageArray = [21,24,23,25];

for(let i=0 ; i<personArray.length ; i++) {
    if(genderArray[i] == "Female") {
        console.log(ageArray[i]);
    }
}

let arrays = ["Kushal", "Male", 21];
for(let i=0 ; i<arrays.length ; ++i) {
    console.log(arrays[i]);
}

// objects
const user1 = {
    firstName: "Kushal",
    gender: "Male",
    age: 21
}
console.log(user1["firstName"]);
// user1["firstName"] is same as user1.firstName
console.log(user1["gender"]);
console.log(user1.gender);
console.log(user1["age"]);


// Best thing which is array of objects
const users = [
    {
        firstName: "Kushal",
        gender: "Male",
        age: 21
    },
    {
        firstName: "Kushagra",
        gender: "Male",
        age: 24
    },
    {
        firstName: "Isha",
        gender: "Female",
        age: 23
    },
    {
        firstName: "Ayan",
        gender: "Male",
        age: 25
    }
]
console.log(users[0]["age"]);
console.log(users[0].age);


// Callback function
function greet(name) {
    console.log("Hello " + name);
}
setTimeout(greet, 2*1000, "Kushal");
setTimeout(greet, 2*1000, "Kushagra");
setTimeout(greet, 3*1000, "Mittal");
setTimeout(greet, 1*1000, "Mittal");

myInterval = setInterval(greet, 1*1000, "Bro");
console.log(myInterval);
console.log(myInterval);
clearInterval(myInterval);