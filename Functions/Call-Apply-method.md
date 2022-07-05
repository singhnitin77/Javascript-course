## The call and apply Methods

```javascript
const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],

  // book: function() {}

  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, "Jonas Schmedtmann");
lufthansa.book(635, "John Smith");
console.log(lufthansa);
```

```javascript
const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;

// Does NOT work
book(23, "Sarah Williams"); // Error
```

Now we get cannot read property airline of undefined.

Well, it's because this function here, the book function is now just a regular function call and so as we learned in one of the previous sections, in a regular function call,

the this keyword points to undefined, at least in strict mode.

So once more, this book function is no longer this method.

It is now this separate function here. It's a copy of this one but it's not a method anymore, it's now a function. And so here it's a regular function call.

And so therefore, the this keyword inside of it will now point to undefined.

this keyword depends on how the function is actually called.

How do we tell JavaScript that we want to create a booking on the new Eurowings airline.

We need to tell JavaScript explicitly what the this keyword here should be like.

So if we want to book a Lufthansa flight, the this keyword should point to Lufthansa but if we want to book a Eurowings flight, then the this keyword should point to Eurowings.

There are three function methods to do that and they are call, apply and bind.

```javascript
const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;

// Does NOT work
// book(23, 'Sarah Williams');

// Call method
book.call(eurowings, 23, "Sarah Williams");
console.log(eurowings);
```

We did not call the book function ourselves.

Instead, we called the call method and it's then this call method, which will call the book function with the this keyword set to eurowings.

So whatever we pass has the first argument of the call method.

And so this allows us to manually and explicitly set the this keyword of any function that we want to call.

Then all the arguments after the first one are simply the arguments of the original function.

And so in the case of the book function, of course, that's the flight number and the passenger name.

And of course, now we can do the same also for Lufthansa.

So book.call, this time with lufthansa and let's book someone else on flight 239.

```javascript
const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};
const book = lufthansa.book;

// Does NOT work
// book(23, 'Sarah Williams');

// Call method

book.call(eurowings, 23, "Sarah Williams");
console.log(eurowings);

book.call(lufthansa, 239, "Mary Cooper");
console.log(lufthansa);
```

```javascript
const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "LX",
  bookings: [],
};
book.call(swiss, 583, "Mary Cooper");
```

Apply method

There is a similar method to the call method, which is called the apply method.

And the apply method does basically exactly the same thing.

The only difference is that apply does not receive a list of arguments after the this keyword, so it doesn't receive this list here but instead, it's gonna take an array of the arguments, And so it will then take the elements from that array and pass it into the function.

```javascript
const flightData = [583, "George Cooper"];
book.apply(swiss, flightData);
console.log(swiss);
```

This apply method is not that used anymore in modern JavaScript because now, we actually have a better way of doing the exact same thing.

```javascript
book.call(swiss, ...flightData);
```
