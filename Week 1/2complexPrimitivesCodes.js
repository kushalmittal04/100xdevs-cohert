// 1. Write a program prints all the even numbers in an array
const arr = [21,22,24,25,26,27,28,29,30];
for(let i=0 ; i<arr.length ; i++) {
    if(arr[i]%2 == 0) {
        console.log(arr[i]);
    }
}

// 2. Write a program to print the biggest number in an array
// const arr = [];
// if(arr.length == 0) {
//     largest = undefined;
// }
let largest = arr[0];
for(let i=1 ; i<arr.length ; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }
}
console.log(largest);

// 3. Write a program that prints all the male people’s first name given a complex object
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
for(let i=0 ; i<users.length ; i++) {
    if(users[i]["gender"] == "Male") {
        console.log(users[i]["firstName"]);
    }
}

// 4. Write a program that reverses all the elements of an array
let array=[];
for(let i=arr.length-1,j=0; i>-1 ; i--,j++) {
    array[j] = arr[i];
}
console.log(array[4]);