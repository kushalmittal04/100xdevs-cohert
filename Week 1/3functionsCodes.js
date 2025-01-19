// 1. Write a function that adds the sum of two numbers
function addnums(a,b) {
    return a+b;
}
console.log(addnums(2,3));
console.log(addnums(45,57));

// 2. Write another function that displays this result in a pretty format
// 3. Write another function that takes this sum and prints it in passive tense

function sum(num1, num2) {
    let result = num1 + num2;
    return result;
}

function displayResult(data) {
    console.log("Result of the sum is: " + data);
}

function displayResultPassive(data) {
    console.log("Sum's result is: " + data);
}

displayResult(sum(2,5));
displayResultPassive(sum(7,8));

// You are only allow to call one function after this
// How you will display result of the sum??
// Using Callback Functions
function doAndDisplaySum(num1, num2, funToCall) {
    let result = num1 + num2;
    return funToCall(result);
}

doAndDisplaySum(10,8,displayResult);
doAndDisplaySum(12,13,displayResultPassive);