### Math and Rounding

The square root is part of the math namespace.

Math.sqrt, so this stands for square root.

The same could be achieved using the exponentiation operator as well.

However, it does not parsing.

So if we try 23 pixels for example, it will then result in not a number.

there are also constants on the math object or on the math namespace.

```javascript
// Math and Rounding

console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));
console.log(Math.max(5, 18, 23, 11, 2));
console.log(Math.max(5, 18, "23", 11, 2));
console.log(Math.max(5, 18, "23px", 11, 2));
console.log(Math.min(5, 18, 23, 11, 2));
```

If we wanted to calculate the radius of a circle with 10 pixels, we could do that. So for that, we use Math.PI.

Now another thing that is on the math object is the random function

Math.random - this will give us a number between zero and one.

So as I reload, you see, I get different values. Then we multiply this by a six. And then we removed basically the decimal part by doing Math.trunc on like this, okay?

Now the problem with this was that then the highest number could be five. And so we simply edit plus one to offset that truncation here.

so that cutting off of the decimal part. And so now we're gonna get values here between really one and six.

let's create randomInt and we want to pass in a minimum and a maximum, and then we want to return that number.

So as always, we need to start by removing any decimal parts of the result of Math.random.

And then we will multiply this Math.random by max minus min.

```javascript
console.log(Math.PI * Number.parseFloat("10px") ** 2);
console.log(Math.trunc(Math.random() * 6) + 1);
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;

// 0...1 -> 0...(max - min) -> min...max
// console.log(randomInt(10, 20));
```

#### Rounding integers.

We have also other ways. So we also have round, so math.round. And so this one will always round to the nearest integer.

Now you might think that floor and trunc are very similar. Let me just put this one down here. And indeed they do the same when we are dealing with positive numbers.

So basically floor and trunc, both cut off the decimal part when we are dealing with positive numbers.

However, for negative numbers, it doesn't work this way.

floor now gets rounded to minus 24.

Because with negative numbers, rounding works the other way around.

And so actually a floor is a little bit better than trunc because it works in all situations, no matter if we're dealing with positiv or negative numbers.

This randomInt function should work in all situations even if we give it a negative inputs here.

```javascript
// Rounding integers

console.log(Math.round(23.3)); //23
console.log(Math.round(23.9)); //24

console.log(Math.ceil(23.3)); //24
console.log(Math.ceil(23.9)); //24

console.log(Math.floor(23.3)); //23
console.log(Math.floor("23.9")); //23

console.log(Math.trunc(23.3)); //23

console.log(Math.trunc(-23.3)); //-23
console.log(Math.floor(-23.3)); //-24
```

floating point numbers

In decimals, we have to specify the number like this in parenthesis.

but this three is a white here while these other ones are pink or purple. And so this means that is actually a string, right?

So toFixed will always return a string and not a number.
And that's important to keep in mind.

that this here converts a string to a number. And indeed now it is purple again.

So with decimals it works differently than with integers and debts.

```javascript
// Rounding decimals

console.log((2.7).toFixed(0)); //3 - white
console.log((2.7).toFixed(3)); //2.700 - white
console.log((2.345).toFixed(2)); //2.35 - white
console.log(+(2.345).toFixed(2)); //2.35 - pink
```
