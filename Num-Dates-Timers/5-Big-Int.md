### Working with BigInt

Special type of integers that was introduced in year 2020

So we learned in the first lecture of the section that numbers are represented internally as 64 bits.

And that means that there are exactly 64 ones or zeros to represent any given number.

Now of these 64 bits only 53 are used to actually store the digits themselves. The rest are for storing the position of the decimal point and the sign.

Now, if there are only 53 bits to store the number, that means that there is a limit of how big numbers can be, and we can calculate that number.

It's even stored into the number namespace as MAX_SAFE_INTEGER.

In some situations we might need really, really big numbers.

for example, for database IDs or when interacting with real 60 bit numbers and these numbers are actually used in other languages.

```javascript
// Working with BigInt

console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);
console.log(4838430248342043823408394839483204n);
console.log(BigInt(48384302));
```

n, this will be a BigInt.

And so this n here basically transforms a regular number, into a BigInt number.

So this is a really really huge number, but now JavaScript has a way of finally displaying this number here accurately.

We can also create BigInt by using the BigInt function.

Multiply them so huge times num then we would get this error cannot mix BigInt and other types.

we then would have to convert this number here to a BigInt.
And this is where the constructor function

However, there are two exceptions to this which are the comparison operators and the plus operator when working with strings.

```javascript
// Operations

console.log(10000n + 10000n);
console.log(36286372637263726376237263726372632n * 10000000n);
// console.log(Math.sqrt(16n));
const huge = 20289830237283728378237n;
const num = 23;
console.log(huge * BigInt(num));
```

20n equal, equal, equal 20, we will get false.
But that makes sense because JavaScript when we use the triple operator does not do type coercion.

And in fact, these two values here, they have a different primitive type. This is a regular number, and this is a BigInt.

But however, if we do the regular equality operator, so the lose one, then this should still be true.

Right. Because then JavaScript does the type coercion. And so then it will coerce this one to a regular number, and then they're both the same.

So just like, so it would even work like this

This is one exception that's right out here. So logical operators are one exception.

And the other exception is when we do string concatenations.

```javascript
// Exceptions

console.log(20n > 15);
console.log(20n === 20);
console.log(typeof 20n);
console.log(20n == "20");
console.log(huge + " is REALLY big!!!");
```

The number isn't actually converted to a string. So even the BigInt number.

BigInt is indeed an integer.

10 divided by three n and we know that with normal numbers, this would not be an integer.

So 10 divided by three is 3.33 until infinity.

So here, but with BigInt, it will simply then return the closest BigInt.

```javascript
// Divisions

console.log(11n / 3n);
console.log(10 / 3);
```
