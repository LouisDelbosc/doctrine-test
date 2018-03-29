const express = require("express");

const app = express();
const port = process.env.PORT || 5000;

app.get("/api/hello", (req, res) => {
  res.send({ express: "Hello From Express" });
});

app.get("/inventory", (req, res) => {
  res.send({
    inventory: {
      A1: 1,
      B1: 2,
      C1: 3,
      D1: 4,
      E1: 0,
      F1: 1
    }
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
