const express = require('express');
const fs = require('fs');
const app = express();


// /files/:fileName means files/1 or files/a.txt or anything followed by files/____ (all with  come to the given request only)
app.get("/files/:fileName", function(req, res) {
    // Code
    const name = req.params.fileName;
    console.log(name);
    fs.readFile(name, "utf-8", function (err, data) {
        res.json({
            data
        });
    })
    // res.json({});
})

app.listen(3000);
