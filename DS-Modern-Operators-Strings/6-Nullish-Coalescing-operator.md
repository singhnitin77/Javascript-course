### Nullish Operator ??

It's an operator that was introduced in ES2020,

It works almost the same way as the OR operator, really almost the same, but it will fix or error here.

Nullish coalescing operator works with the idea or with the concept of nullish values instead of falsy values.

Nullish values are null and undefined. It does not include a zero or the empty string.

For the nullish coalescing operator, it is as if the zero and the empty string were not falsy values and were instead truthy values as well.

Only if this was null or undefined, only then the second operand here would be executed and returned.

```javascript
//restaurant.numGuests = 0;

const guests = restaurant.numGuests || 10;
console.log(guests); //10

// Nullish: null and undefined (NOT 0 or '')

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect); //10
```

```javascript
restaurant.numGuests = 0;

const guests = restaurant.numGuests || 10;
console.log(guests); //10

// Nullish: null and undefined (NOT 0 or '')

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect); //0
```
