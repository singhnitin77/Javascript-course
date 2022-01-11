```Javascript
const secureBooking = function () {
    let passengerCount = 0;
    return function() {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    };
};

const booker = secureBooking();

booker();   // 1 Passengers
booker();   // 2 Passengers
booker();   // 3 Passengers
```


* ### Start by creating a new function here called secure booking, It is this function that will create the closure.

* ### Closure is not a feature that we explicitly use, So we don't create closures manually, like we create a new array or a new function.

* ### So a closure simply happens automatically in certain situations, we just need to recognize those situations.

* ### PassengerCount will start at zero, but we will be able to manipulate it.

* ### Calling this function here,secure booking because this passengerCount variable cannot be manipulated and accessed from the outside.

* ### Special about this function is that it will return a new function. we update the passengerCount variable.


* ### So we have one function here that we call and this function will return this new function. And so as we call secure booking, it will return exactly this function and it will then be stored inside this Booker.

* ### Our code is running in the global execution context.And in there, we currently only have this secure booking function.

* ### We can also say that the global scope now contains secure booking.
* ### Then when secure booking is actually executed,a new execution context is puton top of the execution stack.

* ### Now, remember, each execution context has a variable environment, which contains all its local variables.

* ### In this case, it only contains the passengerCountset to zero.

* ### This variable environment is also the scope of this function.

* ### So passengerCount is in the local scope, but of course this scope also gets access to all variables of the parent's scopes & in this case, just a global scope.

* ### In the next line of the secure booking function, a new function is returned and it will be stored in the Booker variable. So the global context now also contains the Booker variable.

* ### Its execution context pops off the stack and disappears. So the secure booking function has done its job and has now finished execution.

* ### It really is gone now and that's important to be aware of and to keep in mind.

* ### All we did was to analyze the call stack and the scope chain as we call the secure booking function.

* ### So as of yet, we didn't see the closure yet.

* ### So let's now go back to our code to actually use the Booker function, and then finally see the closure in action.

* ### So now that we understand how the Booker function was created, let's now actually call it here.

* ### So calling it a couple of times here, and as we can see, it doesn't need any arguments. There's no list of parameters.

* ### So let's call it here three times And indeed we get one, two, three passengers. And so what this means is that the Booker function was in fact able to increment the passengerCount to one, then to two and then to three.

* ### But now if we think about this, then how is this even possible? How can the Booker function update this passengerCount variable that's defined in a secure booking function that actually has already finished executing.

* ### This function has already finished its execution. It is gone. So its execution context is no longer on the stack, but still this inner function here, which is the Booker function, is still able to access the passengerCount variable that's inside of the Booker function that should no longer exist. what makes this possible is a closure, And so that's exactly what the closure does.

* ### So we can say that a closure makes a function remember all the variables that existed at the function's birthplace essentially, So we can imagine the secure booking as being the birthplace of this function.

* ### And the most important thing to notice here is that the execution context of secure booking is no longer on call stack, because again, this function has finished execution long ago.

* ### The secret is basically this.Any function always has access to the variable environment of the execution context in which the function was created. Now, in the case of Booker, this function was created.

* ### So, therefore the Booker function will get access to this variable environment, which contains the passengerCount variable. And this is how the function will be able to read and manipulate the passengerCount variable.

* ### And so it's this connection that we call closure. So a function always has access to the variable environment of the execution context in which it was created,
---
```Javascript
function a() {
    let grandpa = "grandpa";
    return function b() {
        let father = "father";
        return function c() {
            let son = "son";
            return `${grandpa} > ${father} > ${son}`;
        }
    }
}

a();        // [function: b]
/* It will return function b() */

a()();      // [function: c]
/* It will return function c() */

a()()();    // grandpa > father > son

const one = a();
b();
```