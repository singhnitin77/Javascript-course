### Looping Arrays

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

How to loop over this array with a regular for loop, right?

Go through all the steps of setting up a counter, a condition and also update the counter. And that's a lot of work.

And so that's why we got the for-of loop now in which you don't need any of that.

```javascript
// The for-of Loop

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);
```

This loop will automatically loop over the entire array and in each iteration, it will give us access to the current array element, which we can specify here.

So in this case it's called the item, but of course we could call it anything that we want.

The item variable is always the current element in each iteration.

With the for-of loop, is that we can still use the continue and break keywords.

But now what if we also wanted the current index and not just the current element?

It's actually a bit of a pain when we need that index, because originally the for-of loop was really just meant to give you the current element.

```javascript
for (const item of menu.entries()) {
  console.log(item);
}
```

Each of the item is now actually an array with the index in the array element itself.

menu dot entries, and so here we get this weird array iterator.

```javascript
// console.log(menu.entries());
// console.log([...menu.entries()]);
```

Expand this here, using the spread operator and then create a new array based out of that.

```javascript
for (const item of menu.entries()) {
  console.log(`${item[0] + 1} ${item[1]}`);
}
```

```javascript
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
```
