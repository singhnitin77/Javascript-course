### Rest Patterna and Parameters.

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
        console.log(`Order recieved! ${this.starterMenu[starterIndex]} and
        ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
        );
  },

  orderPasta: function(ing1, ing2, ing3) {
      console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`)
  }
};
```

Rest patterns looks exactly like spread operator, but it actually does the opposite of spread operator.

Rest pattern uses the exact same syntax as spread operator however, to collect multiple elements and condense them into an array.

Spread operator is to unpack an array while rest is to pack elements into an array.

```javascript
// Spread because on right side of the operator, however we can also use it on the LHS side of the assignment operator
// with destructuring

// 1) Destructuring

const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);
// 1 2 [3,4,5]

/* 
The first and second elements become this first and second variables. Rest pattern will take rest of the elements, 

remaining elements of the array and then put them into a new array
*/
```

The rest pattern basically collects the elements that are unused in the destructuring assignment.

We can actually use the three dots on both sides of the assignment operator.

```javascript
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, otherFood);
```

ww get the string pizza the string risotto and then all the rest of the elements that we didn't select previously into their own variables and note here that the rest syntax collects all the array after the last variable.

So in this case here risotto so it does not include any skipped elements so it's really just the rest of the elements

It does not include any skipped elements and so for that reason, the rest pattern always must be the lest in the destructuring assignment because otherwise how will JavaScript know until when it should collect the rest of the array,

Rest pattern works to collect elements in a destructuring assignment

There can only ever be one rest in any destructuring assignment.

OBJECTS

It also works in objects.

```javascript
// OBJECTS

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);
```

```javascript
// FUNCTIONS

const add = function (...numbers) {
  console.log(numbers);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);
```

```javascript
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);
```

The rest syntax is taking multiple numbers or multiple values and then packs them all into one array.

So, Once more it is doing the opposite of the spread operator so with the spread operator we expand with the rest syntax we compress so here it's called rest arguments.

Let's create yet another array let's just call it X

```javascript
const x = [23, 5, 7];
add(...x);

restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");
restaurant.orderPizza("mushrooms");
```

If we wanted to take these values here and call the add function
with these three values, how would we do that?

We simply use the spread operator and that's it

So we're taking all the numbers of the array and spreading them here and so this would be the same as writing manually 23, five and seven and so this is a good example of showing how spread is the opposite of rest.

because after these numbers being spread here they will then enter this add function here and then they will immediately be collected into this numbers array by the rest parameters.

So here we unpacked the values and here pack them back again into an array.

the take away from this example is that once again the rest parameters serves to collect all of the remaining basically unused parameters that were not used in this parameter.

So, the spread and rests syntax both look exactly the same but they work in opposite ways depending on where they are used.

So the spread operator is used where we would otherwise write values, separated by a comma.

On the other hand the rest pattern is basically used where we would otherwise write variable names separated by commas.

So, again the rest pattern can be used where we would write variable names, separated by commas and not values separated by commas.

So it's a subtle distinction, but this is how you know when and where to use spread and rest.
