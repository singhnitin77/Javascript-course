```Javascript
let f;

const g = function() {
    const a = 23;
    f = function() {
        console.log(a*2);
    }
}

g();
f();
// 46
```

* ### Both of these examples are gonna demonstrate that we don't need to return if function from another function in order to create a closure.

* ### Start by defining an empty variable called f and then a function expression g.

* ### So let's try to call g the result of this function is that a will be 23 and that f variable that we have out here will become this function.

* ### And so after g we can then call f & we get 46 

* ### This f function really does close over any variables of the execution context in which it was defined & that is true even when the variable itself. So f here was technically not even defined inside of this variable environment here, right.

* ### So this f variable was defined outside here in the global scope, it was created here but then as we assigned it a function here in this the g function,

* ### And therefore it is able to access this a variable here even after the g function here at this point has of course already finished its execution, right.

* ### So at this point of the execution, the variable environment of g is no longer there, right. But f, so this function here closed over that variable environment and therefore it is able to access the a variable.

```Javascript
// Example 1
let f;

const g = function() {
    const a = 23;
    f = function() {
        console.log(a*2);
    }
}

const h = function() {
    const b = 777;
    f = function() {
        console.log(b*2);
    }
    
}

g();
f();
console.dir(f);

// Re-assigning f function
h();
f();
// 777*2
// 1554
console.dir(f);
```

```Javascript
// Example 2
const boardPassengers = function(n,wait) {
    const perGroup = n/3;

    setTimeout(function() {
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`);
    },wait = 1000);

    console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers(100,3);
```