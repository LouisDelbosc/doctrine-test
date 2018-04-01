const express = require("express");

const app = express();

const inventory = require("./data/inventory.json");

app.get("/api/hello", (req, res) => {
  res.send({ express: "Hello From Express" });
});

app.get("/inventory", (req, res) => {
  res.send({
    inventory
  });
});

app.post("/mix", (req, res) => {
  res.send({ mix: "potion d'invisibilite" });
});

module.exports = app;
