// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require('fs');

const filePath = "Files/a.txt"; 

const addContent = "My Name is Kushal"

fs.readFile(filePath, "utf-8", (err, data) => {
    if(err) {
        console.error("Error while reading file", err);
        return;
    }
    cleanedData = data.replace(/\s+/g, ' ').trim();

    const newData = addContent + '\n'  + cleanedData;

    fs.writeFile(filePath, newData, "utf-8", (err) => {
        if(err) {
            console.error("Error while Writing", err);
        }
        console.log("File Updated Sucessfully");
    })
});

console.log("File Preprocessing Started");