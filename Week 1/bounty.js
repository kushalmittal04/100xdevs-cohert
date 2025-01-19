let sum=0;
for(let i=0 ; i<10000000000 ; i++) {
    sum = sum + i;
}
console.log(sum);

// Basically this program takes lots of time
// As JS is single threaded so when we run this code the one of the core(utilization of a small CPU) of PC should ideally go to the 100% usuage. 
// Core are small small CPU's in the Device.