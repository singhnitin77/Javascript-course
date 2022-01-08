## Immediately Invoked Function Expressions

* ### Function that is only executed once & then never again is called the Immediately Invoked Function Expression Or IIFE

* ### Immediately Invoked Function Expression, also work for an arrow function.

```Javascript
const runOnce = function() {
    console.log("This will never run again");
};

runOnce();

/* function () {
    console.log("This will never run again");
} 
This will not run - error
*/ 

/* (function () {
    console.log("This will never run again");
}) */

// Wrap this into parentheses.

// IIFE
(function () {
    console.log("This will never run again");
    const isPrivate = 23;
})();

console.log(isPrivate);     //Reference error

// Same for arrow functions
() => console.log("This will also never run again")();

(() => console.log("This will also never run again"))();
```

```Javascript
{
    const isPrivate = 23;
    var notPrivate = 46;
}

console.log(isPrivate);     //Reference error
console.log(notPrivate);    //46
```
---
## Why was this pattern actually invented?

* ### Functions create scopes,one scope does not have access to variables from an inner scope

* ### For example, right here in this global scope. We do not have access to any variables that are defined in the scope of any of these functions here, So the inner scope would have access to anything defined outside, here in the global scope.

* ### But the other way around, the global scope does not have access to anything, that is inside of a scope.

* ### Data encapsulation and data privacy are extremely important concepts in programming.


