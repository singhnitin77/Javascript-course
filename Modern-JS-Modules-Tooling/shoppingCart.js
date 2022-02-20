// Exporting modules

console.log('Exporting modules');

const shoppingCost = 10;
const cart = [];

/* const addToCart = function (product, quantity) {
    cart.push({product, quantity});
    console.log(`${quantity} ${product} added to cart`);
};
 */

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

/* 
In ES MODULES, there are two types of exports Named exports and Default exports. 
*/

const totalPrice = 237;
const totalQuantity = 23;

// export { totalPrice, totalQuantity };
export { totalPrice, totalQuantity as tq };

//////////////////// Default Export
/* 
We use default exports, when we only want to export one thing per module that's why they are called default exports.

Imports are not copies of the export. They are instead like a live connection i.e they point to the same place in memory.
*/

export default addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};
