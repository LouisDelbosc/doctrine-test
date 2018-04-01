const { arrayToObjectKey, isRecipeValid, getPotion } = require("../recipe.js");

describe("recipe", () => {
  describe("isRecipeValid()", () => {
    it("should return true if the recipe is a value", () => {
      const recipes = {
        potion: ["item1", "item2", "item3"]
      };
      expect(isRecipeValid(recipes, ["item1", "item2", "item3"])).toBe(true);
    });

    it("should return true if the recipe is a value not sorted", () => {
      const recipes = {
        potion: ["item1", "item2", "item3"]
      };
      expect(isRecipeValid(recipes, ["item3", "item1", "item2"])).toBe(true);
    });

    it("should return false if the recipe does not exist", () => {
      const recipes = {
        potion: ["item1", "item2", "item3"]
      };
      expect(isRecipeValid(recipes, ["item1", "item2", "nothing"])).toBe(false);
    });
  });

  describe("getPotion()", () => {
    it("should return the key corresponding to the value passed", () => {
      const recipes = {
        potion: ["item1", "item2", "item3"]
      };
      expect(getPotion(recipes, ["item1", "item2", "item3"])).toBe("potion");
    });

    it("should return the key corresponding to the value passed not sorted", () => {
      const recipes = {
        potion: ["item1", "item2", "item3"]
      };
      expect(getPotion(recipes, ["item3", "item1", "item2"])).toBe("potion");
    });
  });
});
