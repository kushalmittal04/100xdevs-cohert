// Wrapping another async fn
function myOwnSetTimeout (fn, duration) {
    setTimeout(fn, duration);
}
myOwnSetTimeout(() => {
    console.log("Hi there");
    myOwnSetTimeout(() => {
        console.log("Hi there");
        myOwnSetTimeout(() => {
            console.log("Hi there");
        }, 3000)
    }, 2000)
}, 1000)


// promisfy the async function
function myOwnFunction (duration) {
    let c = new Promise((resolve) => {
            setTimeout(() => {
                resolve();
        },duration);
    });
    return c;
}

let v = myOwnFunction(3050);
console.log(v);
v.then (function() {
    console.log("log the first thing");
});
