const express = require("express");
const { initInventory } = require("./inventory.js");

const app = express();

const inventory = initInventory();

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
