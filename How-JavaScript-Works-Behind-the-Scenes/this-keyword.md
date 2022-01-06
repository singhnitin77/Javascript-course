## This keyword in Js

* ### This keyword or this variable is a special variable that is created for every execution context (any function).

* ### This keyword, takes the value of (points to) the “owner” of the function in which the this keyword is used.

* ### We can also say, that it points to the owner of that function.

* ### The value of the this keyword is not static. So it's not always the same.

* ### It depends on how the function is actually called. and its value is only assigned when the function is actually called.
---

## **Four different ways to Call a function**

## As a method.

* ### When we call a method, the this keyword, points to the object that is calling the method.

```Javascript
const Jonas = {
    name: "Jonas",
    year: 1989,
    calcAge: function () {
        return 2037 - this.year;
    }
};

Jonas.calcAge();    //48
```
* ### calcAge is the method here, because it's a function attached to the Jonas object. 
* ### In the last line here, we then call the method, We used the this keyword.

* ### It should be Jonas, because that is the object that is calling the method down there in the last line.
 
* ### On Jonas, we can access all the properties that it has. So, this.year will become 1989, because that's Jonas.year as well.

* ### Writing 'Jonas.year' would have the exact same effect as 'this.year'.

---

## Simply calling functions as normal functions.

* ### In this case, the this keyword, will simply be undefined.
* ### However, that is only valid for strict mode.
* ### So if we're not in strict mode, this will actually point to the global object, which in case of the browser is the window object.
---
## Arrow functions

* ### Arrow functions do not get their own 'this keyword'.
* ### Instead, if we use 'the this variable' in an arrow function,

* ### It will simply be the this keyword of the surrounding function.
---
## As an event listener

* ### This keyword will always point to the DOM element that the handler function is attached to.
---
## What the, this keyword is not.

* ### This will never point to the function in which we are using it.

* ### Also, the this keyword will never point to the variable environment of the function.
---