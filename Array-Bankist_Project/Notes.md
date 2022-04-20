Why Arrays have methods ?

- Methods are simply functions that we can call on objects. They are functions attached to objects.

- If we have array methods, that means that arrays themselves are also objects.

- So these array methods are simply functions that are attached to all arrays that we create in javascript.

**SLICE METHOD**

- With the slice method we can extract part of any array without changing the array.

- We can also define the end parameter, end parameter is not included in the output.

```javascript
let arr = ['a', 'b', 'c', 'd', 'e'];

arr.slice(2); //This will return a new array
console.log(arr.slice(2)); //This does not mutate the orginal array

console.log(arr.slice(2, 4));
console.log(arr.slice(-2)); //Last elements of array - d e
console.log(arr.slice(-1)); // e
console.log(arr.slice(1, -2)); // b c
```

We can use slice method to create a shallow copy of any array

```javascript
console.log(arr.slice()); // ['a', 'b', 'c', 'd', 'e']
console.log(...arr); // ['a', 'b', 'c', 'd', 'e']
```

**SPLICE METHOD**

Works almost the same way as slice but the fundamental difference is that it does actaully change the original array i.e mutate the array.

```javascript
console.log(arr.splice(2)); //['c', 'd', 'e']
console.log(arr); //['a', 'b']

// The extracted elements are actually gone from the array. Splice Deleted them.
```

One common usecase of splice is to remove the last element from the array.

```javascript
arr.splice(-1);
console.log(arr); // ['a', 'b', 'c', 'd']

arr.splice(1, 2);
//2nd parameter is no of elements we want to delete
console.log(arr);
```

**REVERSE METHOD**

Reverse method mutates the original array.

```javascript
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);
```

**CONCAT METHOD**

```javascript
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);
```

**JOIN METHOD**

```javascript
console.log(letters.join(' - '));
```

---

---

### The new at Method

- ES 2022 - at Method

- Replacing traditional bracked notation with the more Modern looking at method.

```javascript
const arr = [23, 11, 64];
console.log(arr[0]); //23

// With at Method
console.log(arr.at(0)); //23
```

Getting the last element.

```javascript
console.log(arr[arr.length - 1]); //64
console.log(arr.slice(-1)); //64
```

The new at method makes it even more easier.

```javascript
console.log(arr.at(-1)); //64
console.log(arr.at(-2)); //11
```

At method also works on strings.

```javascript
console.log('nitin'.at(0));
console.log('nitin'.at(-1));
```

---

---

### forEach Method

```javascript
for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdraw ${Math.abs(movement)}`);
  }
}
```

- forEach is a higher-order function thus requires a callback function.

- Each time this callback is called, in each iteration it will receive the current element of the array as an argument.

- forEach method will allow us to loop over the array and in each iterationm, it execute the callback function thus pass-in current element of the array as a argument.

```javascript
console.log('---- FOREACH ----');

movements.forEach(function (movement) {
  if (mov > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
});

// 0: function(200)
// 1: function(450)
// 2: function(400)
/* 
We tell forEach that in each iteration it should log on of these two strings.
*/
```

---

```javascript
/* 
1st value - index
2nd value - current array element
*/

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}
```

We need to understand that it is the forEach method who calls this callback function in each iteration and as it calls this function it also passes in the current element of the array.

forEach passes in the current element, the index and the entire array that we are looping.

Order matters here in forEach - 1st parameter needs to be the current element, 2nd current index, 3rd entire array.

```javascript
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});

/* 
1st value - current element
2nd value - index 
*/
```

One fundamental difference between both of them is that we cant break out of a forEach loop, So the contiue and break statement do not work in a forEach loop at all.

Thus, forEach will always loop over the entire array.

But if we need to break out of the loop, then we have to keep using for of loop.

---

---

### forEach with Maps and Sets

```javascript
// MAP

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// SET

const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});
```

A set does not have keys and it doesn't have index either, key here does not make sense.

---

---

### DATA TRANSFORMATION: MAP, FILTER, REDUCE

**MAP METHOD**

These are methods that we use to create new arrays based on transformig data from other arrays.

Map is similar to forEach method but with the difference that map creates a brand new array based on original array.

Map takes an array loops over that array in each iteration, it applies a callback function to the current array element.

We say that it maps the values of the original array to a new array and that's why this method is called map.

And it is extremely useful. Usually way more useful than in forEach method because forEach simply allows us to do some work with each array element.

But map on the other hand, builds us a brand new array containing the results of applying an operation to the original array.

**FILTER METHOD**

It is used to filter for elements in the original array which satisfy a certain condition.

All the elements that pass the test that we specified will make it into a new filtered array.

Or in other words elements for which the condition is true will be included in a new array that the filter method returns.

All other elements will get filtered out so they will not be included in the new array.

**REDUCE METHOD**

We use to boil down all the elements of the original array into one single value.

An example of this can be to add all the elements of an array together.

---

---

**MAP METHOD**

Unlike foreach, the map method will give us a brand new array and this new array will contain in each position the results of applying a callback function to the original array elements.

```javascript
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

const movementsUSD = movements.map(function (mov) {
  return mov * eurToUsd;
});

console.log(movements);
console.log(movementsUSD);
```

We could have returned something else also.

```javascript
const movementsUSD = movements.map(function (mov) {
  // return mov * eurToUsd;
  return 23;
});

console.log(movements);
console.log(movementsUSD);

/* 
Now each of the position contains 23 because that what we returned from the callback function.
*/
```

```javascript
const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

/* 
Here in map method, we use a function to solve the problem of creating a new array
*/
```

```javascript
const movementsUSD = movements.map(function (mov) {
  return mov * eurToUsd;
});

// Arrow function

const movementsUSD = movements.map(mov =>
  mov * eurToUsd;
);
```

Just like to for each method, the math method also has access to the exact same three parameters.

Let's now use the map method to loop again over the movements array.

```javascript
const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

const movementsDescriptions = movements.map((mov, i, arr) => {
  if (mov > 0) {
    return `Movement ${i + 1}: You deposited ${mov}`;
  } else {
    return `Movement ${i + 1}: You withdrew ${Maths.abs(mov)}`;
  }
});

console.log(movementsDescriptions);

// Below also works the same

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
```

It is completely acceptable to have 2 return statements or more in the same function as long as one of them executed.

It's a good idea to keep in mind why we actually get access to these two parameters here.

So one more time, all we do here is to pass this callback function into the map method, But we do not call this function by ourselves.

It is the map method who we'll call this function foreach of the array elements in the movement array.

For each method creates side effects. But now here with this map method, all we did was to return each of the strings from the callback.

And so basically they got added into a new array. And then finally we logged that entire array to the console and not the elements one by one. And so here in this map method

we did not create a side effect in each of the iteration.
All we did was to build a brand new array

---
---

### Rest Patterns & Parameters 

Rest patterns looks exactly like spread operator, but it actually does the opposite of spread operator. 

Rest pattern uses the exact same syntax as spread operator however, to collect multiple elements and condense them into an array.

Spread operator is to unpack an array while rest is to pack elements into an array. 

```javascript

// Spread because on right side of the operator, however we can also use it on the LHS side of the assignment operator with destructuring

// 1) Destructuring

const arr = [1,2, ...[3,4]];

// REST, because on LEFT side =
const [a,b, ...others] = [1,2,3,4,5];
console.log(a,b, others);
// 1 2 [3,4,5]
/* 
The first and second elements become this first and second variables. Rest pattern will take rest of the elements, remaining elements of the array and then put them into a new array
*/
```
The rest pattern basically collects the elements that are unused in the destructuring assignment.

We can actually use the three dots on both sides of the assignment operator.


```javascript
const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu,
];

console.log(pizza,risotto,otherFood);
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

const {sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);
```

```javascript
// FUNCTIONS

const add = function (...numbers) {
  console.log(numbers);
};

add(2,3);
add(5,3,7,2);
add(8,2,5,3,2,1,4);
```

```javascript
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2,3);
add(5,3,7,2);
add(8,2,5,3,2,1,4);
```
The rest syntax is taking multiple numbers or multiple values and then packs them all into one array.

So, Once more it is doing the opposite of the spread operator so with the spread operator we expand with the rest syntax we compress so here it's called rest arguments.


Let's create yet another array let's just call it X

```javascript
const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');
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

---
---

### // Short Circuiting (&& and ||)

```javascript
//console.log('---- OR ----');
```

```javascript
console.log(3 || 'Jonas');
// 3
```
The results of the OR operator doesn't always have to be a Boolean.

There are three properties about logical operators.

* They can use any data type.
* They can return any data type and 
* They do something called short circuiting. or as we also call it short circuit evaluation.


About short circuiting, in the case of the OR operator, short circuiting means that if the first value is a truthy value, it will immediately return that first value. So that's exactly what we see here with the three which is a truthy value.

If the first operand is truthy here in the OR operator, then the other operand will not even be evaluated. So JavaScript will not even take a look at it. And so that's what we mean with short circuiting.

```javascript
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);
// 3
```

```javascript
console.log('' || 'Jonas'); //Jonas
```
The first result of this one here is Jonas. And so that's because this here is a falsy value. And so then, the second operand will actually also be evaluated, and that's Jonas and it will then be returned.

And so here we see again that the result of the OR operator doesn't have to be a Boolean. It will simply return the truthy value here.

```javascript
console.log(true || 0); //true
```
we have true or zero. And so this first value here is truthy, and in fact, it's even true, and so therefore that will simply be the result of the operator.


```javascript
console.log(undefined || null); //null
```
Here we have undefined or null, and as you already know, undefined is a falsy value, and so we then go to the second operand, so there is no short-circuiting,

and so that's then the one that's gonna be returned. So here we see null, and that happens even though null is also a falsy value.

```javascript
console.log(undefined || 0 || '' || 'Hello' || 23 || null);
```

It is hello. And that's essentially because hello here, is the first truthy value in this chain of OR operations.

So we start with this one, so undefined is falsy.

And so then we go to the next one, which is also falsy.
And so then to the next one, which is also falsy, and then we get hello and hello is truthy and so therefore it will short circuit the entire evaluation and it will be the returned value.

Because in the OR operation, the result is true, if at least one operand is true.

```javascript
restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);
```

```javascript
const guests2 = restaurant.numGuests || 10;
console.log(guests2); //23
```

```javascript
console.log('---- AND ----');
console.log(0 && 'Jonas'); //0
console.log(7 && 'Jonas'); //Jonas
```

```javascript
console.log('Hello' && 23 && null && 'jonas');
```

```javascript
// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
```

So the OR operator will return the first truthy value of all the operands, or simply the last value if all of them are falsy.

On the other hand, the AND operator will return the first falsy value or the last value if all of them are truthy.

And as for practical applications, we can use the OR operator to set default values, and we can use the AND operator to execute code in the second operand if the first one is true. So play around some more with this maybe,

---
---

### The Nullish Coalescing Operator

