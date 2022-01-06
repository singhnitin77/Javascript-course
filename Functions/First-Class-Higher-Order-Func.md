## First-class Function

* ### A programming language is said to have First-class functions when functions in that language are treated like any other variable. 
* ### For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.

* ### fundamental property of the JavaScript language,first class functions.

* ### This enables us to write higher order functions.

* ### We can Store functions in Variables
```javascript
const add = (a,b) => a + b;

const counter = {
    value: 23,
    inc: function() {
        this.value++;
    }
}
```

* ### We can Pass functions as arguments to other functions.

```Javascript
const greet = () => console.log("Hey Jonas");
btnClose.addEventListener("Click",greet)
```

* ### We can return a function from another function.

* ### Functions are objects & many types of objects in JavaScript have methods,like array methods, for example.
* ### There are also function methods.

----
## Higher-Order Function

* ### A function that returns a function is called a Higher-Order Function.

* ### Either a function that receives another function as an argument, or a function that returns a new function.

* ### Functions that receive another function.

```Javascript
const greet = () => console.log("Hey Jonas");
btnClose.addEventListener("Click",greet)
```

* ### It receives another function as an input. In this case, the greet function.
* ### We usually say that the function that is passed in is a callback function.

* ### That's because the callback function will be called later by the higher order function.

* ### In this case, add event listener will call the greet callback later as soon as the click event happens.

* ### It's like the greet function saying, "Hey there, don't greet me yet, but call me back once you're ready." And this works, not only in the context of the add event listener function, but in many other use cases as well.

* ### Functions that returns another function.
```Javascript
function count() {
    let counter = 0;
    return function() {
        counter++;
    }
}
```
---

* ### first-class functions and higher order functions are different things.
* ### Some people think that they are the same thing. But actually they mean different things. 
* ### So, first class functions is just a feature that a programming language either has or does not have.
---