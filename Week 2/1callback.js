// Callback
function square (a) {
    return a*a;
}
function cube (a) {
    return a*a*a;
}
function quad (a) {
    return a*a*a*a;
}
function sumOfSomething (a,b, callbackfn) {
    let a1 = callbackfn(a);
    let a2 = callbackfn(b);
    return a1+a2;
}

let a = sumOfSomething(1,2,square);
console.log(a);
a = sumOfSomething(1,2,cube);
console.log(a);
a = sumOfSomething(1,2,quad);
console.log(a);