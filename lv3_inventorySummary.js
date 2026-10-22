// 1. Build an inventory summary
// Given an array of product objects, calculate the total inventory value using price x stock. Also
// return the names of products with stock below 5

const products = [
  { name: "laptop", price: 1000, stock: 10},
  { name: "keyboard", price: 500, stock: 4},
  { name: "mouse", price: 250, stock: 2}
];

const getInventorySummary = (items) => {
  const totalValue = items.reduce((sum, item) => sum + (item.price * item.stock), 0);
  const lowStock = items.filter(item => item.stock < 5).map(item => item.name);
  return {totalValue, lowStock};
};

console.log(getInventorySummary(products))