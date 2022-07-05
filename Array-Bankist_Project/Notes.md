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
All we did was to build a brand new array.

---

---

### Filter Method

Filter Method used to filter for elements that satisfy a certain condition. We use a callback function again.

Create an array of the deposits.

Deposits are only the movements that are above zero. We want to filter out these negative values. And so that condition is so that only the values that has the condition will then make it into the new array. And passing that condition means that it's true.

The trick is that we return a Boolean value.

If the current movement is greater than zero, then we want to push the current element into a new array.

```javascript
const deposits = movements.filter(function (mov, i, arr) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);
```

Create that here deposits for and start again with an empty array.

```javascript
const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);
```

```javascript
const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);
```

Why not just use the four loop for everything.
The reason for that is again the push that exists in JavaScript for using more functional code, like this.

But there's also a more practical implication here. And that's because we can actually chain all of these methods together.

So, basically use them all one after another to build a big final result.

---

---

### Reduce Method

Reduce method is to essentially boil down all the elements in an array to one single value.

Example of adding up all the numbers in one array.

Calling it on the movements array. The results of the reduce method will be, the global balance of the account.

Call the result, balance. And remember that in this case, this balance will be simply one value and not an entire array.

The reduce function also gets a callback function, but this one is a little bit different from the other ones, like the one in map or for each.

In these other callbacks, the first parameter is always the current element of the array. The second one is the current index and the third one is the entire array.

But here in the callback function of the reduce method, the first parameter is actually something called the accumulator.

And this accumulator is essentially like a snowball that keeps accumulating the value that we ultimately want to return.

So in the case of adding all the elements or all the numbers of an array together, that will be the sum.

This callback function here will be called in each iteration of a looping over the array. So reduce also loops over the array and calls this callback in each iteration.

Since the accumulator is the value that we will keep adding to what we're gonna do here is to add the current value to the accumulator.
the accumulator plus the current value.

In each loop iteration, we return the updated accumulator so the current one, plus the new current value.

This callback function is the first argument of the reduce method, but the reduce method actually has a another, so a second parameter, and that is the initial value of the accumulator.

Value that we specify here, which in this case is gonna be zero is the initial value of the accumulator in the first loop iteration.

In the end, that value is essentially the accumulator.

```javascript
console.log(movements);

//accumulator -> SNOWBALL

const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
}, 0);

// Using arrow function

const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);

// Using For Loop
let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);
```

Balance two starts at zero, essentially this is, or initial accumulator value just like this zero and then sum plus equal the current movement.

Common pattern that we always need an external variable whenever we want to use a for loop.

And that's fine if you only need one loop, but it starts to become really cumbersome and unpractical when we use many loops for doing many operations.

Understanding how the reduce method works is something really important, but it's also way more confusing than the other ones,

```javascript
// Maximum value

const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);
```

---

---

### Magic of Chaining Methods

Let's say that we wanted to take all the movement deposits then convert them from euros to dollars and finally add them all up, so that we know exactly how much was deposited into the account in US dollars.

Now we could of course, do each of these operations individually and store each result in a new variable.

However, we can also do it all in one go.

Start here with the filter method. We want to take all of the deposits. So we get the movement here and then we filter only for movements that are positive. And so only these are the deposits. And so the result of this operation here will be in our array.

Now we can call map on that array. So here again, we then get a movement and now we can convert that movement to US dollars.

movements times Euro to USD. And so with this we converted all of the deposits to US dollars, but now we can take this even further and on this result, we can also call a reduce.

Accumulator and then the current movement, and we just need to return accumulator plus the current movement. So that's movement and zero. Store all of this into total deposits in US dollar.

Three data transformations here all in one go.

filter returns a new array.

We can imagine all of this as a sort of pipeline that processes our data. So we put data in at the beginning, which is here, and then it goes through all these steps.

So in this case, these three steps here and then in the end our input data comes out processed on the other side of the pipeline.

Check out the array in each of these different steps.

We can do that by using the array parameter that we get access to in this callback function.

The current element, the index, and the entire array.

if we want to see that result of only this operation, we can check out the current array and the next array method that has chained on that filter. And so in this case, it's the map.

And so this is one of the great use cases of having access to this current array.

this array has to be the result of the previous operation. So of this filter. It is not this initial movement array because that's not what we called the map method on,

The map method was called on the result of movements, that filter, and therefore that is the value here of this array.

```javascript
// The Magic of Chaining Methods

const eurToUsd = 1.1;
console.log(movements);

// PIPELINE

const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map((mov, i, arr) => {
    // console.log(arr);
    return mov * eurToUsd;
  })
  // .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);
```

---

---

### The Find Method

```javascript
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);
```

---

---

### Some and Every

let's look back at the includes method

We can use the includes method to test if an array includes a certain value.

Now, however, we can only really test for equality.

Includes, here, returns true, if any value in the array is exactly equal to minus 130, This is essentially testing for equality.
But what if we wanted to test for a condition.

And so that's where the some method comes into play.

we would like to know if there has been any deposits on this account.

In other words, we want to know if there is any positive movement in this array.

The same callback function which has to return either true or false.

```javascript
// Some
console.log(movements);

// EQUALITY
console.log(movements.includes(-130));
```

```javascript
// SOME: CONDITION

console.log(movements.some(mov => mov === -130));

const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);
```

### Every Method

The close cousin of the some method, which is the every method.

The every method is pretty similar to the some method, but as you might guess, the difference between them, is that every only returns true if all of the elements in the array satisfy the condition that we pass in.

So in other words, if every element passes the test, in our callback function, only then, the every method returns true.

And that's why the method is called every in the first place.

Check if all of our movements here are deposits. And well, indeed, they are not. And that's why we get false.

However, we do have one account, which only has positive movements.

That's account four. So account four, all the movements are positive.

So account four and then the same condition, and every is not a function, and that's of course, because we are still missing the movements array.

And so that indeed proves that the every returns true, if all the elements in the array satisfy this condition. Because in this movements array, all of the values are in fact, above zero.

So that's how the every method works.

```javascript
// EVERY

console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));
```

We have always written the callback function directly as an argument into our array methods.

However, we could also write this function separately, and then pass the function as a callback.

```javascript
// Separate callback

const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
```

---

---

### flat and flatMap

What if we wanted to take all these elements in the sub array and put all of these together in just one big array, which contains all the numbers here from one to eight.

Well, that's pretty simple using the new flat method.

And new because flat and also flat map were introduced in ES 2019, so they are pretty recent.

They will then not work in super old browsers.

So no callback function, just like this, and we get indeed or full array from one to eight. So just removed the nested arrays and flattened the array, which is why the method is called flat.

We have an array, which is even deeper nested, so let's call it arrDeep.

So now we have an array inside and array inside an array.

Result, still contains the two inner arrays.

This means that the flat method only goes one level deep when flattening the array. So this three here was inside the first level of nesting, and so therefore it was taken out,

We can fortunately fix that by using the death argument. So right now basically flat is running with the one here as the depth.

And so if we run it with one, which is the default, then we get this, but we can go two levels deep. And so now we get the same result as before.

And that's because it now goes even into the second level of nesting and also takes the element out of that array.

```javascript
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));
```

Calculate the overall balance of all the movements of all the accounts.

We have all these movements stored in arrays and these arrays are inside the objects in the accounts array.

So in this array that we have been using, so accounts, so that's the one.

the first thing to do is to take them out of here and put them all into one array.

Create a variable here called accountMovements.

and then what we want to create is the new array, but with the same length, which only contains these movements array.

We can use the map method. So in each account take the account.movements and so return that value into the new array.

All right, and so now we have this array, which then in turn contains the arrays of all the movements.

```javascript
const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);

const allMovements = accountMovements.flat();
console.log(allMovements);

const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);
```

```javascript
// flat

const overalBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);
```

It turns out that using a map first and then flattening the result is a pretty common operation.

So that's exactly what we have here. So first we map and then we flat that result.

There is another method that was also introduced at the same time, which is flat map.

flat map essentially combines a map and a flat method into just one method, which is better for performance.

And since flat map also does mapping, it needs to receive exactly the same callback as a map method.

So this is essentially a map method that all it does is in the end, it then flattens the result. The result is the same.

Flat map here only goes one level deep and we cannot change it.

So if you do need to go deeper than just one level, you still need to use the flat method.

```javascript
// flatMap

const overalBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance2);
```

---

---

### Sorting Arrays

Start here with an array of strings and let's call it owners.

Our array here, nicely sorted. alphabetically from A to Z.

This actually mutates the original array. We have to be very careful with this method. this is with strings.

```javascript
// Strings

const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());
console.log(owners);
```

With numbers

These numbers are not at all ordered in any way.

And the reason for this, is that the sort method does the sorting based on strings.

So that might sound weird, but that is just how it works by default.

So basically what it does is to convert everything to strings, and then it does the sorting itself. And if we look at the results as if they were strings, then the result actually makes sense.

first we have all the minuses here.

And so that's basically alphabetically, the first string that occurs.

These three are alphabetically ordered if they were strings, at the same here.

So you have one first, then two, then three, then four,

and then seven.

If they were strings, then this result would make sense, but they are not strings. And so we have to fix this. And in fact, we can fix this by passing in a compare or callback function, into the sort method.

```javascript
// Numbers

console.log(movements);
console.log(movements.sort());
```

```javascript
// return < 0, A, B (keep order)
// return > 0, B, A (switch order)

movements.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
});

console.log(movements);
```

Another way for Ascending

```javascript
movements.sort((a, b) => a - b);
console.log(movements);
```

```javascript
// Descending;
movements.sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
});

console.log(movements);
```

Another way for Descending

```javascript
movements.sort((a, b) => b - a);
console.log(movements);
```
