```Javascript
let view;
function initialize() {
    view = "🏡";
    console.log("View has been set!");
}

intialize();
intialize();
intialize();
console.log(view)

/* 
 View has been set!
 View has been set!
 View has been set!
 🏡
*/
```
## Using Closures turn this function into a function that will be called only once even though somebody run it a bunch of times!

<!-- Naive Approach -->
```Javascript
let view;
function initialize() {
    let called = 0;
    return function() {
        if(called > 0) {
            return;
        } else {
            view = "🏡";
            called++;
            console.log("View has been set!")
        }
    }
}

const startOnce = initialize();
startOnce();
startOnce();
startOnce();
console.log(view);

/* 
 View has been set!
 🏡
*/


```