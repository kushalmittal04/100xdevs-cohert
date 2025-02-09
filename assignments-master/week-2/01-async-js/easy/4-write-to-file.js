// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs');

const content = "Hello ji! I am adding this line into the fie.";

fs.writeFile("Files//a.txt", content, "utf-8", (err) => {
    if(err) {
        console.error("Error Writing File:", err);
        return;
    }
    console.log("File written Sucessfully!");
});

console.log("Writing to file is started..");