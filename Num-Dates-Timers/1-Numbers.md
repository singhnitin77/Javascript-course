### Converting and Checking Numbers

All numbers are presented internally as floating point numbers. So basically, always as decimals, No matter if we actually write them as integers or as decimals.

23 is the same as 23.0.

that's the reason why we only have one data type for all numbers.

Numbers are represented internally in a 64 base 2 format that means that numbers are always stored in a binary format. They're only composed of zeros and ones.

There are certain numbers that are very difficult to represent in base 2.

And one example of that is the fraction 0.1.

And that then results in very weird results like this.

So in base 10, 1/10 is simply 0.1. And so that's very easy to represent.

But, for example, if we were trying to do 3/10, then that is also impossible to represent for us. It would be this number here and three until infinity.

```javascript
// Converting and Checking Numbers

console.log(23 === 23.0);
// Base 10 - 0 to 9. 1/10 = 0.1. 3/10 = 3.3333333
// Binary base 2 - 0 1

console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);
/* 
This should be true but well, this is simply an error in JavaScript that we have to accept */

// Conversion
console.log(Number("23"));
console.log(+"23");
```

We can parse a number from a string.

On the Number object, which is kind of this function here, but it's also an object in the end.

Remember because every function is also an object. And this number object here has some methods to do parsing.

And so here we get 30. And this is actually a number. It's not a string.

Now, in order to make this work, the string needs to start with a number.

So this is a little bit like type coercion but even more advanced it tries to get rid of unnecessary symbols that are not numbers.

And this can be very useful, for example, in this situation where we get some kind of unit from CSS and then need to get rid of that unit.

Now, the parseInt function actually accepts a second argument, which is the so-called regex.

The regex is the base of the numeral system that we are using.

So here we are simply using base 10 numbers. So numbers from zero to nine.

```javascript
// Parsing

console.log(Number.parseInt("30px", 10));
console.log(Number.parseInt("e23", 10));
console.log(Number.parseInt("  2.5rem  "));
console.log(Number.parseFloat("  2.5rem  "));
// console.log(parseFloat('  2.5rem  '));
```

```javascript
// Check if value is NaN

console.log(Number.isNaN(20));
console.log(Number.isNaN("20"));
console.log(Number.isNaN(+"20X"));
console.log(Number.isNaN(23 / 0));
```

```javascript
// Checking if value is number

console.log(Number.isFinite(20));
console.log(Number.isFinite("20"));
console.log(Number.isFinite(+"20X"));
console.log(Number.isFinite(23 / 0));
console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23 / 0));
```

the isFinite method is indeed the best way of checking if a value is a number.

this method is the ultimate method that you should use to check if any value is a number, at least when you're working with floating point numbers.

So if you are sure that you just need to check for an integer, then you can use isInteger as well.
