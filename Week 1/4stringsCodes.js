//  String related functions
//  String Manipulation 

let firstName = "Kushal";
let lastName = "Mittal";

// variableName.length => to get length of the string
function getLength(str) {
    console.log("Original String: " + str);
    console.log("Length: " + str.length);
}
getLength("Hello! How are you ?");
getLength(firstName);
getLength(firstName + " " +lastName);
console.log("\n");

// variableName.indexOf(targetValue) =>to find the index of first position where the targetValue has been found
function findIndexOf(str, target) {
    console.log("Original String: " + str);
    console.log("Target String: " + target);
    console.log("Index: " + str.indexOf(target));
}
findIndexOf(firstName,"l");
findIndexOf(firstName,"L");
findIndexOf(firstName,"us");
findIndexOf(firstName,"hu");
findIndexOf(firstName,"al");
findIndexOf(lastName,"t");
findIndexOf(lastName,"k");
console.log("\n");

// variableName.lastIndexOf(targetValue) => to find the starting index of the last place where the targetValue is found
function findLastIndexOf(str, target) {
    console.log("Original String:", str);
    console.log("Target String: " + target);
    console.log("Index:", str.lastIndexOf(target));
}
findLastIndexOf("Hello World World", "World");
findLastIndexOf("Hello World World World World", "World");

console.log("\nslice, substr, substring")
//slice => variable.slice(startIndex, endIndex)
// endIndex element is not included
console.log("Kushal Mittal".slice(1,4));
//substr => variable.substr(startIndex, Length)
// substr has been removed in latest version
console.log("Kushal Mittal".substr(1,4));
// substring is same as slice
console.log("Kushal Mittal".substring(1,4));

console.log("\nreplace, replaceAll")
// replace => variable.replace(target,replacement)      First found will be replaced
let temp = "Hello World";
console.log(temp.replace("World","JavaScript"));
// replaceAll => variable.replaceAll(target,replacement)      All targets will be replaced by thereplacement once
temp = "Hello World World World World";
console.log(temp.replaceAll("World","JavaScript"));
console.log(temp);

console.log("\n");
// split => variable.split(separator)
// split helps in creating an array based on the variable wich divides based on the separator we pass.
//  split your string based upon the delimeter
temp = "I am Kushal Mittal. I am currently preparing for Full Stack Development";
let words = temp.split(" ");
console.log(words);
function splitString(str, separator) {
    console.log("Original String:", str);
    console.log("After split:", str.split(separator));
}
splitString("Hello World", " ");
splitString("Hello World", "");
  
// trim
function trimString(str) {
    console.log("Original String:", str);
    console.log("After trim:", str.trim());
}
trimString(" Hello World ");

console.log("\n");
temp = "Hello Ji. How are You?";
// toUpperCase => variable.toUpperCase()
function toUpper(str) {
    console.log("Original String:", str);
    console.log("After toUpperCase:", str.toUpperCase());
}
toUpper("Hello World");
toUpper(temp);
console.log(temp);

// toLowerCase => variable.toLowerCase()
function toLower(str) {
    console.log("Original String:", str);
    console.log("After toLowerCase:", str.toLowerCase());
}
toLower("Hello World");
toLower(temp);
console.log(temp);
  