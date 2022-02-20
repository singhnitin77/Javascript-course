```Javascript
const array = [1,2,3,4];
for(var i=0;i<array.length;i++) {
    setTimeout(function() {
        console.log("I am at index "+ i);
    }, 3000)
}

/* Output
I am at index 4
I am at index 4
I am at index 4
I am at index 4
*/
```

There are 2 ways of solving this problem, It is one of the most commonly asked interview questions for JS Developers
We have an array here, an loop over the array & running setTimeout, so we're calling Web API & have a callback that will be called in 3 seconds.

## Fix this so that i logs 1 2 3 4