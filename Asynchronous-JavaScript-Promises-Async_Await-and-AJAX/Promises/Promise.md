Modern way of making AJAX calls & that is by using the Fetch API.

```Javascript
// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
// request.send();

const request = fetch('https://restcountries.eu/rest/v2/name/${country}');
console.log(request);
```
Call fetch with our URL.
The fetch function immediately returned a promise.

We immediately got the promise here.

We actually have a promise, so this promise is right now stored in request variable.


So the formal definition of a promise - placeholder for the future result of an asynchronous operation.

we can also say that a promise is like a container for an asynchronously delivered value
 
A promise is a container for a future value.

So a container or a placeholder for a future value, and the perfect example of a future value is the response coming from an AJAX call.

So when we start the AJAX call, there is no value yet, but we know that there will be some value in the future.

And so we can use a promise to handle this future value.

## Advantage of using promises

By using promises, we no longer need to rely on events and callback functions to handle asynchronous results, events and callback functions can sometimes cause unpredictable results.

Instead of nesting callbacks, we can chain promises for a
sequence of asynchronous operations: escaping callback hell
instead of nesting like we did

Promises are an ES6 feature. So they became available in JavaScript in 2015.

## Promise Lifecycle

Since promises work with asynchronous operations, they are time sensitive. So they change over time.

And so promises can be in different states and this is what they call the cycle of a promise.

So in the very beginning, we say that a promise is pending.

And so this is before any value resulting from the asynchronous task is available.

Now, during this time, the asynchronous task is still doing its work in the background.

Then when the task finally finishes, we say that the promise is settled and there are two different types of settled promises and

That's fulfilled promises and rejected promises.

So a fulfilled promise is a promise that has

successfully resulted in a value just as we expect it.

For example, when we use the promise to fetch data from an API, a fulfilled promise successfully guts that data, and it's now available to being used.

On the other hand, a rejected promise means that there has been an error during the asynchronous task. And the example of fetching data from an API, an error would be for example, when the user is offline and can't connect to the API server.

Now these different states are very important to understand because when we use promises in our code,we will be able to handle these different states in order to do something as a result of either a successful promise or a rejected one.

Another important thing about promises is that a promise is only settled once.

So the promise was either fulfilled or rejected, but it's impossible to change that state.

---
---
# Consuming Promises

```Javascript
const getCountryData = function (country) {
    fetch(`https://restcountries.eu/rest/v2/name/${country}`)

};
```
Calling the fetch function like this, will then immediately return a promise.

Aas soon as we start the request and in the beginning,this promise is still pending because the asynchronous task of getting the data, is still running in the background. 
at a certain point the promise will then be settled and either in a fulfilled or in a rejected state, but for now let's assume success



So assume that the promise will be fulfilled and that we have a value available to work with And so to handle this fulfilled state, we can use the then method on all promises, we can call the then method.
```Javascript
const getCountryData = function (country) {
       fetch(`https://restcountries.eu/rest/v2/name/${country}`)
         .then(function (response) {
           console.log(response);
         })
    });
};
```
Now into the then method, we need to pass a callback function that we want to be executed as soon as the promise is actually fulfilled.

So as soon as the result is available, a function and then this function will actually receive one argument once it's called by JavaScript and that argument is the resulting value of the fulfilled promise.


In order to be able to actually read this data from the body, we need to call the json method on the response.
json is a method that is available on all responses of the fetch method.


```Javascript
const getCountryData = function (country) {
       fetch(`https://restcountries.eu/rest/v2/name/${country}`)
         .then(function (response) {
           console.log(response);
            return response.json();
         })
          .then(function (data) {
            console.log(data);
       renderCountry(data[0]);
     });
};
getCountryData('portugal')
```
The problem here is that this json function itself, is actually also an asynchronous function.
It will also return a new promise. return this promise from here.

Here will be a new promise, now we need to handle that promise as well and so the way we do that is to then call another then So we need another callback function

---
---
