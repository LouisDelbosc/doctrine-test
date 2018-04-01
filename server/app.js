const express = require("express");
const bodyParser = require("body-parser");
const { initAlchemyFromJSON } = require("./alchemy.js");

const app = express();

const alchemy = initAlchemyFromJSON(
  "./data/inventory.json",
  "./data/recipe.json"
);

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.get("/api/hello", (req, res) => {
  res.send({ express: "Hello From Express" });
});

app.get("/inventory", (req, res) => {
  res.send({
    inventory: alchemy.inventory
  });
});

app.post("/mix", (req, res) => {
  const potion = alchemy.mixPotion(req.body);
  res.send({ potion });
});

module.exports = app;
