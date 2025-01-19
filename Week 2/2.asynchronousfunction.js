setTimeout (function(){
    console.log("Hi there");    
},3000)

let myInterval = setInterval(function(){
    console.log("Hello");
},1000)

setTimeout (function(){
    clearInterval(myInterval);    
},5000)

const fs = require('fs');
// M1
fs.readFile("a.txt","utf-8", function(err,data) {
    onDone(data);
})
console.log("Line after first way to read file");
// M2
fs.readFile("a.txt","utf-8", (err,data) => {
    onDone(data);
})
console.log("Line after second way to read file");
function onDone(data) {
    console.log(data);
}
console.log("Last Line");
