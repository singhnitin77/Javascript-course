## Object Destructuring
To Destructure Object we use {} braces.
```Javascript
'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    }
    /* orderDelivery: function (obj) {
        console.log(obj);
    } */
    
    orderDelivery: function ({starterIndex, mainIndex,time,address}) {
        console.log(`Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
        );
  },
};

restaurant.orderDelivery({
    time: '22:30',
    address: 'Via del Sole,21',
    mainIndex: 2,
    starterIndex: 2,
});

```
When we deal with result of an API call, data usually comes in form of objects then these structuring is life saver.

```Javascript
const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

const {
    name: restaurantName, 
    openingHours: hours, 
    categories: tags
} = restaurant;
console.log(restaurantName, hours, tags);

// Default value
const { menu = [], starterMenu: starter = [] } = restaurant;
console.log(menu,starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = {a:23,b:7,c:14};

// {a,b} = obj; Syntax error To solve this wrap into ()
({a,b} = obj);
console.log(a,b);

// Nested Objects
const {fri} = openingHours;
console.log(fri);

const {fri: {open,close}} = openingHours;
console.log(open,close);

const {fri: {open: o,close: c}} = openingHours;
console.log(o,c);
```
Many times in js we have functions with lot of parameters then it might be difficult to remember the order of parameters