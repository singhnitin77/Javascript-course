## Object Destructuring

To Destructure Object we use {} braces because this also how we create objects.

Then we provide the variable names that exactly matches the property name that we want to retrieve from the object.

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
};

```

Since in an object the order of elements does not matter we don't need to manually skip elements. like we did in array.

When we deal with result of an API call, data usually comes in form of objects then these structuring is life saver.

```Javascript
const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

// Variable names to be different from the property names
const {
    name: restaurantName,
    openingHours: hours,
    categories: tags
} = restaurant;
console.log(restaurantName, hours, tags);

// Default value
const { menu = [], starterMenu: starter = [] } = restaurant;
console.log(menu,starters);


```

```javascript
// Mutating variables while destructing objects
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
// Now we want to destructure this array

/* 
const {a.b} - we can't do this as they are already declared
Also can't do let {a,b} - that would create new variables
*/

// {a,b} = obj; Syntax error To solve this wrap into (), reason for that when we start with {} line js expects a codeblock, since we can't assign anything to a code block

({ a, b } = obj);
console.log(a, b);
```

```javascript
/* 
When wanted to create 2 variables open and close, which should contain the open and close hours for friday.
OpeningHours is an object in that object we have another object
*/

// Nested Objects
const { fri } = openingHours;
console.log(fri);
// { open: 11,close: 23,}

// We can further destructure the object

const {
  fri: { open, close },
} = openingHours;
console.log(open, close);
// 11 23

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
```

---

---

Many times in js we have functions with lot of parameters then it might be difficult to remember the order of parameters.

So Instead of defining the parameters manually, we can just pass an object into the function as an argument.
then function will immediately destructure that object.

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

    orderDelivery: function (obj) {
        console.log(obj);
    }

    orderDelivery: function ({starterIndex = 1, mainIndex = 0,time = '20:00',address}) {
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

restaurant.orderDelivery({
    address: 'Via del Sole,21',
    starterIndex: 1
});

/*
In the function argument we can do destructuring right away
*/
```
