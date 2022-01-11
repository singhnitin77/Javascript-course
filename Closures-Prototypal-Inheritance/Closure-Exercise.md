```Javascript
// Exercise
function callMeMaybe() {
    const callMe = "Hi! I am now here!";
    setTimeout(function(){
        console.log(callMe);
    },4000)
}

callMeMaybe();  //  Hi! I am now here!
```
When we run callMeMaybe function we get "Hi! I am now here!" after 4 seconds.

SetTimeout gets sent to the Web API to start a timer for 4 seconds, Once that timer is gone we send this piece of code
```Javascript
    function() {
        console.log(callMe);
    }
```
to the callback Queue & callback Queue is gonna wait there until the call stack is empty
Also, Event loop is going to push this function onto the stack and run it

Variable callMe should have been gone, when callMeMaybe gets popped off the stack by the time this line gets run but because of closures we are able to remember this variable.

---
```Javascript
function callMeMaybe() {
    
    setTimeout(function(){
        console.log(callMe);
    },4000);
    const callMe = "Hi! I am now here!";
}

callMeMaybe();  //  Hi! I am now here!
```
Still runs because it does n't matter where we define this variable even if it's const that doesn't get hoisted, we don't care about hoisting here
this piece of code goes into the Web API & gets put on the callback queue, eventloop pushes it back into the stack but by that time we already ran this function i.e callMeMaybe() & const callMe is already created & assigned
```Javascript
    function() {
        console.log(callMe);
    }
```