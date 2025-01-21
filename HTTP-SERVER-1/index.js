const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.use(bodyParser.json())

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