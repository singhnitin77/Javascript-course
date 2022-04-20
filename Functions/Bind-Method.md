## Bind Method

Like the call method, bind also allows us to manually set this keywords for any function call.

Now, the difference is that bind does not immediately call the function. Instead it returns a new function where this keyword is bound.

```javascript
// book.call(eurowings, 23, 'Sarah Williams');

const bookEW = book.bind(eurowings);

bookEW(23, 'Steven Williams');
```

This now looks like the normal book function call again.

And that's because this function here already has the this keyword set in stone basically.

And so here, of course, we no longer need to specify to these keywords again.

So the signature here, so the name of the parameters is back to being simply the flight number and the passenger name.
And so now again, we see that Steven booked a seat on Eurowings flight EW23.

---
Creating one booking function for each of the airlines.

And this then makes it a little bit easier to book a flight for each of the airlines, if we have to do it multiple times.

So instead of having to use a call all the time, we can just do bind once.





```javascript
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');
```
---

Specifying parts of the argument beforehand, is actually a common pattern called partial application.

So essentially, partial application means that a part of the arguments of the original function are already applied, so which means, already set.

And so that's exactly what the bookEW23 function is.

It's essentially the book function but with 23 already predefined.


```javascript
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmedtmann');
bookEW23('Martha Cooper');
```
---

There are also other situations in which we can use the bind method and where it is very useful.

And one example of that is when we use objects together with event listeners.

```javascript
// With Event Listeners

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

// lufthansa.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane);   // NAN

/* 
Well, we need to pass in a function here and not to call it.

And so we already know that the call method calls the function. Therefore, we use bind.
*/

ocument
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));
```
So this .Planes is now not a number. And the reason for that is that this keyword is this button element.

We learned that in an event handler function, that this keyword always points to the element on which that handler is attached to.

So, this is the handler function,  And so it is attached to this element, so to this button. And therefore, inside of the handler function or the event listener, it doesn't really matter.

But inside of this function, this keyword will point to the button element.

And so that's why this keyword here returns this button.

---

Partial application

This is another big use case for the bind method.

In the case of partial application, many times we are not even interested in this keywords, but we still use bind for this.

Remember that partial application means that we can preset parameters.

```javascript
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));
const addVAT = addTax.bind(null, 0.23);

// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

// CHALLENGE

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
```