const R = require("ramda");

function initRecipe() {
  return require("./data/recipe.json");
}

function arrayToObjectKey(array) {
  return array.join(".");
}

function isRecipeValid(recipes, ingredients) {
  return R.pipe(
    R.values,
    R.find(x => R.equals(x.sort(), ingredients.sort())),
    Boolean
  )(recipes);
}

function getPotion(recipes, ingredients) {
  return R.pipe(
    R.keys,
    R.find(potion => R.equals(recipes[potion].sort(), ingredients.sort()))
  )(recipes);
}

module.exports = { arrayToObjectKey, isRecipeValid, getPotion };
