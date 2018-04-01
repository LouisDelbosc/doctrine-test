function initInventory() {
  return require("./data/inventory.json");
}

function isItemAvailable(inventory, item) {
  if (inventory[item] === undefined)
    throw Error("Item does not exist in the inventory");
  return Boolean(inventory[item]);
}

function areItemsAvailable(inventory, items) {
  return items
    .map(item => isItemAvailable(inventory, item))
    .reduce((acc, value) => acc && value, true);
}

function subItem(inventory, item) {
  if (!inventory[item])
    throw Error("Cannot substract the item to the inventory");
  inventory[item] -= 1;
  return inventory;
}

function subItems(inventory, items) {
  return items.reduce((acc, item) => subItem(acc, item), inventory);
}

module.exports = {
  initInventory,
  isItemAvailable,
  areItemsAvailable,
  subItem,
  subItems
};
