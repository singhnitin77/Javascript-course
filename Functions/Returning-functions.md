## Function returning another function
* ### greet function will return a new function.
* ### New function that we return will also have a parameter so it will be able to receive arguments. 
* ### Now, the greeting is still coming from this greet function here.
* ### This all actually works,because of closure.

* ### Our first function a greet returned a new function that we stored into this variable & so this variable is now just a function that we can call as we did here again sing the parenthesis syntax.

```Javascript
const greet = function(greeting) {
    return function(name) {
        console.log(`${greeting} ${name}`);
    }
}

// greet("Hey")
// what will be the result of this function call?
// Result of this function call will be the function that we have defined inside greet function.

const greeterHey = greet("Hey");
greeterHey("Jonas");    // Hey Jonas
greeterHey("Steven");   // Hey Steven

greet("Hello")("Nitin");    // Hello Jonas

// Defining above code using arrow function only
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

/* An arrow function and so another arrow here, and then simply this

it's also simply one arrow function returning another arrow function. */

greetArr("Hello")("Nitin"); 
```
---
## What's the point of having functions returning other functions?

* ### Well, this will actually become extremely useful in some situations & especially if we're using a really important programming paradigm called functional programming.
---

