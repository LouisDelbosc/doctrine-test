const {
  isItemAvailable,
  areItemsAvailable,
  subItem,
  subItems
} = require("../inventory.js");

describe("inventory", () => {
  describe("isItemAvailable()", () => {
    it("should be true if item is in inventory with value > 0", () => {
      expect(isItemAvailable({ item: 1 }, "item")).toBe(true);
    });

    it("should be false if item is in inventory with value <= 0", () => {
      expect(isItemAvailable({ item: 0 }, "item")).toBe(false);
    });

    it("should throw an error when the item is not in the inventory", () => {
      expect(() => isItemAvailable({ item: 0 }, "notHere")).toThrow();
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

  describe("subItem()", () => {
    it("should substract one quantity of a item in the inventory", () => {
      expect(subItem({ item: 1 }, "item")).toEqual({ item: 0 });
    });

    it("should throw an error if item quantity is 0", () => {
      expect(() => subItem({ item: 0 }, "item")).toThrow();
    });

    it("should throw an error if item is not in the inventory", () => {
      expect(() => subItem({ item: 0 }, "notHere")).toThrow();
    });
  });

  describe("subItems()", () => {
    it("should substract one quantity of a item in the inventory", () => {
      const inventory = { item1: 1, item2: 2, item3: 3 };
      expect(subItems(inventory, ["item1", "item2", "item3"])).toEqual({
        item1: 0,
        item2: 1,
        item3: 2
      });
    });

    it("should throw an error if item quantity is 0", () => {
      const inventory = { item1: 1, item2: 2, item3: 0 };
      expect(() => subItems(inventory, ["item1", "item2", "item3"])).toThrow();
    });

    it("should throw an error if item is not in the inventory", () => {
      const inventory = { item1: 1, item2: 2, item3: 0 };
      expect(() =>
        subItems(inventory, ["item1", "item2", "notHere"])
      ).toThrow();
    });
  });
});
