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

module.exports = {
  initInventory,
  isItemAvailable,
  areItemsAvailable
};
