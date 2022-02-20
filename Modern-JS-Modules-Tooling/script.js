// Importing modules
/* import { addToCart, totalPrice, totalQuantity } from './shoppingCart.js';
addToCart('bread', 5);
console.log('price, tq');
 */

console.log('Importing modules');

import * as ShoppingCart from './shoppingCart.js';
ShoppingCart.addToCart('bread', 5);
console.log('ShoppingCart.totalPrice');
