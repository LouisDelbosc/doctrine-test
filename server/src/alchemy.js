const { areItemsAvailable, subItems } = require("./inventory.js");
const { getPotion, isRecipeValid } = require("./recipe.js");

function initAlchemyFromJSON(inventoryJSON, recipesJSON) {
  const inventory = require(inventoryJSON);
  const recipes = require(recipesJSON);
  return Alchemy(inventory, recipes);
}

function Alchemy(inventory, recipes) {
  return {
    inventory,
    recipes,
    mixPotion: function(ingredients) {
      if (
        areItemsAvailable(inventory, ingredients) &&
        isRecipeValid(recipes, ingredients)
      ) {
        subItems(inventory, ingredients);
        return getPotion(recipes, ingredients);
      }
      throw Error("Recette incorrecte");
    }
  };
}

module.exports = {
  initAlchemyFromJSON,
  Alchemy
};
