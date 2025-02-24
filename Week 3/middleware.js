const express = require("express");
const app = express();

function ticketChecker(req, res, next) {
  const ticket = req.query.ticket;
  if (ticket === "free") {
    next();
  } else {
    res.status(403).send({ msg: "Access denied" });
  }
}

app.use(ticketChecker);

app.get("/ride1", ticketChecker, (req, res) => {
  res.json({
    msg: "You ride the first ride!",
  });
});

app.get("/ride2", ticketChecker, (req, res) => {
  res.json({
    msg: "You ride the second ride!",
  });
});

app.get("/ride3", ticketChecker, (req, res) => {
  res.json({
    msg: "You ride the third ride!",
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
