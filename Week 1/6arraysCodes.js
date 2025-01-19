let initialArray = [1,2,3,4,5];
initialArray.push(6);
console.log(initialArray);
initialArray.pop();
console.log(initialArray);
initialArray.shift();
console.log(initialArray);
initialArray.unshift(0);
console.log(initialArray);

let firstArray = [1,2,3];
let secondArray = [4,5,6];
console.log(firstArray.concat(secondArray));
console.log(firstArray);
console.log(secondArray);

function logThing(str) {
    console.log(str);
}
initialArray.forEach(logThing);

