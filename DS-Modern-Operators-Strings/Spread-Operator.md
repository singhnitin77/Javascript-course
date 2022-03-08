We use spread operator to expand an array into all its elements. i.e unpacking all the array elements at one.

```javascript
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

  orderPasta: function(ing1, ing2, ing3) {
      console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`)
  }
};
```

```javascript
// Without Spread Operator

const arr = [7, 8, 9];
const badNewArr = [1,2 arr[0], arr[1], arr[2]];
console.log(badNewArr);
// [1,2,7,8,9]
```

```javascript
//  Spread Operator
const arr = [7, 8, 9];
// const newArr = [1,2, arr]
const newArr = [1, 2, ...arr];
console.log(newArr);
// [1,2,7,8,9] - just one value which is the array.

// Spread Operator takes all the values out of this arr array & then write them individually as if we wrote 7,8,9 manually.

// If we use spread operator to expand the new array, it logged the individual elements of the array
console.log(...newArr); //1,2,7,8,9]
console.log(1, 2, 7, 8, 9); //1,2,7,8,9]
```

Whenever we need the elements of an array individually, then we can use the Spread Operator

Spread operator is bit similar to destructuring because it also helps us get elements out of arrays, Big difference is that the spread operator takes all the elements from the array and it also doesn't create new variables

As a consequence, we can only use it in places where we would otherwise write values separated by commas.

```javascript
const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);
```

### Two Important use cases of Spread Operator

1. To create shallow copies of arrays.
2. To merge two arrays together.

```javascript
// copy array

const mainMenuCopy = [...restaurant.mainMenu];

// Here we created shallow copy of this array
```

```javascript
// Join 2 arrays

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// With this spread operator, we took all the elements out of the starter menu and wrote them into new array
```

---

### Spread Operator works on all iterables.

There are different iterables in Javascript. For now iterables are things like arrays, strings, maps, or sets but not objects.

Most of the built-in Data structures in Javascript are iterables except objects.

### Spread Operator on strings

```javascript
const str = "Jonas";
const letters = [...str, " ", "S."];
console.log(letters);

// Output
// ['J', 'o', 'n', 'a', 's', ' ', 'S.']

console.log(...str);
// J o n a s
```

Keep in mind we can still only use the spread operator when building an array or when we pass values into a function

```javascript
console.log(`${..str} Nitin`)

// This not gonna work because this is not a place that expects multiple values separated by a comma.

// Multiple values separated by a comma are usually only expected when we pass arguments into a function or when we building a new array
```

---

```javascript
const ingredients = [
  prompt("Let's make pasta! Ingredient 1?"),
  prompt("Ingredient 2?"),
  prompt("Ingredient 3"),
];

console.log(ingredients);
// ["a", "b", "c"]

// Real world example
// Without Spread Operator
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

// With Spread Operator - Better Solution
restaurant.orderPasta(...ingredients);
```

ES 2018 Spread operator also works on objects although they are not iterables.

```javascript
// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Guiseppe" };
console.log(newRestaurant);

// Shallow copies of objects
const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Ristorante Roma";
console.log(restaurantCopy.name);
console.log(restaurant.name);
```
