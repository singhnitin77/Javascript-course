### Short Circuiting (&& and ||)

```javascript
//console.log('---- OR ----');
```

```javascript
console.log(3 || "Jonas");
// 3
```

The results of the OR operator doesn't always have to be a Boolean.

There are three properties about logical operators.

- They can use any data type.
- They can return any data type and
- They do something called short circuiting. or as we also call it short circuit evaluation.

About short circuiting, in the case of the OR operator, short circuiting means that if the first value is a truthy value, it will immediately return that first value. So that's exactly what we see here with the three which is a truthy value.

If the first operand is truthy here in the OR operator, then the other operand will not even be evaluated. So JavaScript will not even take a look at it. And so that's what we mean with short circuiting.

```javascript
console.log("" || "Jonas");
console.log(true || 0);
console.log(undefined || null);
// 3
```

```javascript
console.log("" || "Jonas"); //Jonas
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
console.log(undefined || 0 || "" || "Hello" || 23 || null);
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
console.log("---- AND ----");
console.log(0 && "Jonas"); //0
console.log(7 && "Jonas"); //Jonas
```

```javascript
console.log("Hello" && 23 && null && "jonas");
```

```javascript
// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza("mushrooms", "spinach");
}
restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");
```

So the OR operator will return the first truthy value of all the operands, or simply the last value if all of them are falsy.

On the other hand, the AND operator will return the first falsy value or the last value if all of them are truthy.

And as for practical applications, we can use the OR operator to set default values, and we can use the AND operator to execute code in the second operand if the first one is true. So play around some more with this maybe,
