const { isItemAvailable, areItemsAvailable } = require("../inventory.js");

describe("inventory", () => {
  describe("isItemAvailable()", () => {
    it("should be true if item is in inventory with value > 0", () => {
      expect(isItemAvailable({ item: 1 }, "item")).toBe(true);
    });

    it("should be false if item is in inventory with value <= 0", () => {
      expect(isItemAvailable({ item: 0 }, "item")).toBe(false);
    });

    it("should throw an error when the item is not in the inventory", () => {
      expect(() => isItemAvailable({ item: 0 }, "NoHere")).toThrow();
    });
  });

  describe("areItemsAvailable()", () => {
    it("should be true if items are in inventory with values > 0", () => {
      const inventory = { item1: 1, item2: 2, item3: 3 };
      expect(areItemsAvailable(inventory, ["item1", "item2", "item3"])).toBe(
        true
      );
    });

    it("should be false if there is an items in inventory with values > 0", () => {
      const inventory = { item1: 1, item2: 2, item3: 0 };
      expect(areItemsAvailable(inventory, ["item1", "item2", "item3"])).toBe(
        false
      );
    });

    it("should be false if there is an items in inventory with values > 0", () => {
      const inventory = { item1: 1, item2: 2, item3: 0 };
      expect(() =>
        areItemsAvailable(inventory, ["item1", "item2", "item4"])
      ).toThrow();
    });
  });
});
