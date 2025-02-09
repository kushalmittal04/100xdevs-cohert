// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?
// Can you make it so that it updates every second, and shows time in the9 following formats - 
//  - HH:MM::SS (Eg. 13:45:23)
//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

// `1-counter.md`
setInterval( () => {
    let cdt = new Date();
    let hours = cdt.getHours();
    let minutes = cdt.getMinutes();
    let seconds = cdt.getSeconds();
    
    // Format to HH:MM:SS (24-hour format)
    const time24 = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    // Convert to 12-hour format with AM/PM
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    const time12 = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")} ${ampm}`;

    console.clear(); // Clears the console every second
    console.log(`24-hour format: ${time24}`);
    console.log(`12-hour format: ${time12}`);

}, 1000)
