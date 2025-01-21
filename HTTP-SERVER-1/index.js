const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

// http://localhost:3000
app.get('/', (req, res) => {
    res.send("Hello World!")
})

// http://localhost:3000/queryparameter?message=123
app.get('/queryparameter', (req, res) => {
    const message = req.query.message; 
    console.log(message);
    res.status(401).send("404 Error")
})

// to access the body data
app.use(bodyParser.json())

// http://localhost:3000/data
app.post('/data', (req, res) => {
    console.log(req.headers)
    console.log(req.headers["authorization"])
    console.log(req.body)
    res.send({
        firstName: "Kushal",
        lastName: "Mittal",
        age: 20,
        gender: "Male",
        msg: "2+2=4"
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })