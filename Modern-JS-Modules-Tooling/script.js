// Importing modules
/* import { addToCart, totalPrice, totalQuantity } from './shoppingCart.js';
addToCart('bread', 5);
console.log('price, tq');
 */

console.log('Importing modules');

/* import * as ShoppingCart from './shoppingCart.js';
ShoppingCart.addToCart('bread', 5);
console.log('ShoppingCart.totalPrice'); */

// Default Import
/* import add from './shoppingCart.js';
add('pizza', 2); */

///////////////////////// TOP LEVEL AWAIT

/* const res = await fetch('https://jsonplaceholder.typicode.com/posts');
const data = await res.json();
console.log(data); */

/* const getLastPost = async function() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    console.log(data); 
};

getLastPost(); */

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return {
    title: data.at(-1).title,
    text: data.at(-1).body,
  };
};

const lastPost = getLastPost();
console.log(lastPost);

// Not very clean
// lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);

/*------------ MODULE PATTERN ------------ */

const ShoppingCart2 = (function () {
  const card = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };

  const orderStock = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost); //undefined

/*------------ COMMON JS MODULES ------------ */
// Export
exportaddToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

// Import
const { addToCart } = require('./shoppingCart.js');
