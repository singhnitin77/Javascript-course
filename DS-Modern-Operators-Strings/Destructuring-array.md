```Javascript
'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function(starterIndex, mainIndex) {
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  }
};
```
```Javascript
const = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x,y,z] = arr; 
console.log(x,y,z); // 2 3 4

// The original array is not affected
console.log(arr); // [2,3,4]

const [first, second] = restaurant.categories;
console.log(first.second);
// Italian Pizzeria

const [first, ,second] = restaurant.categories;
console.log(first.second);
// Italian Vegetarian

let const [main, ,secondary] = restaurant.categories;
console.log(main,secondary);

// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main,secondary);
// Vegetarian Italian
```
In order to switch two variables using destructing, Start by creating a new array with two variables inverted.
```Javascript
[main, secondary] = [secondary, main];
console.log(main, secondary);
// Vegetarian Italian
```
```Javascript
console.log(restaurant.order(2,0));
// ["Garlic Bread", "Pizza"]

// Recieve 2 return values from a function
const [starter,mainCourse] = restaurant.order(2,0);
console.log(starter, mainCourse);
// Garlic Bread Pizza
```
```Javascript
// Nested destructuring
const nested = [2,4, [5,6]];
const [i, ,j] = nested;
console.log(i,j);
// 2 [5,6]

const[i, , [j,k]] = nested;
console.log(i,j,k);
// 2 5 6
```
We can also set the default values for the variables when we are extracting them.
```Javascript
// Default values
const [p, q, r] = [8,9];
console.log(p,q,r);
// 8 9 undefined

const [p=1, q=1, r=1] = [8,9];
console.log(p,q,r);
// 8 9 1

const [p=1, q=1, r=1] = [8];
console.log(p,q,r);
// 8 1 1
```
