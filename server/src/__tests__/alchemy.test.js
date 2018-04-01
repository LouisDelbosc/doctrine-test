const { Alchemy } = require("../alchemy.js");

describe("alchemy", () => {
  it("should mix the potion and modify the inventory", () => {
    const inventory = { item1: 1, item2: 1, item3: 1 };
    const recipes = { potion: ["item1", "item2", "item3"] };
    const alchemy = Alchemy(inventory, recipes);
    expect(alchemy.mixPotion(["item1", "item2", "item3"])).toBe("potion");
    expect(alchemy.inventory).toEqual({
      item1: 0,
      item2: 0,
      item3: 0
    });
  });

  it("throw an exception if ingredient does not exist", () => {
    const inventory = { item1: 1, item2: 1, item3: 1 };
    const recipes = { potion: ["item1", "item2", "item3"] };
    const alchemy = Alchemy(inventory, recipes);
    expect(() => alchemy.mixPotion(["item1", "item2", "item"])).toThrowError(
      "Item does not exist in the inventory"
    );
    expect(alchemy.inventory).toEqual({
      item1: 1,
      item2: 1,
      item3: 1
    });
  });

  it("throw an exception if no recipes", () => {
    const inventory = { item1: 1, item2: 1, item3: 1 };
    const alchemy = Alchemy(inventory, {});
    expect(() =>
      Alchemy(inventory, {}).mixPotion(["item1", "item2", "item3"])
    ).toThrowError("Recette incorrecte");
  });
});
