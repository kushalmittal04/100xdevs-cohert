const express = require('express');

function calculateSum (n) {
    let ans = 0;
    for(let i=1 ; i<=n ; i++) {
        ans = ans + i;
    }
    return ans;
}

function sumOfTwoNums(a,b) {
    return a+b;
}

const app = express();

// http://localhost:3000/?n=30
app.get('/', (req, res) => {
    const n = req.query.n;
    const ans = calculateSum(n);
    res.send(ans.toString());
})

// http://localhost:3000/sum?a=10&b=5
app.get('/sum', (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const ans = sumOfTwoNums(a,b);
    res.send(ans.toString());
})

app.listen(3000);