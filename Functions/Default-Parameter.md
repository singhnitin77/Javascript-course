## Default parameters

* ### Sometimes it's useful to have functions where some parameters are set by default, so that we then do not have to pass them in manually if we don't want to change the default.


## Old way of setting default parameters
```javascript
//ES5 Syntax
numPassengers = numPassengers || 1;
price = price || 199;
```
---

```Javascript
'use strict';

const bookings = [];

const createBooking = function(flightNum,numPassengers,price) {

    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    bookings.push(booking);
}

createBooking("LH123");
```
---
```Javascript
'use strict';

const bookings = [];

const createBooking = function(flightNum,numPassengers = 1,price = 199) {
    
    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    bookings.push(booking);
}

createBooking("LH123");
```
---
```Javascript
'use strict';

const bookings = [];

const createBooking = function(flightNum,numPassengers = 1,price = 199 * numPassengers) {
    //ES5 Syntax
    //numPassengers = numPassengers || 1;
    //price = price || 199;
    
    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    bookings.push(booking);
}

createBooking("LH123");
createBooking("LH123",2,800);
createBooking("LH123",2);
createBooking("LH123",undefined,1000);
```
---
