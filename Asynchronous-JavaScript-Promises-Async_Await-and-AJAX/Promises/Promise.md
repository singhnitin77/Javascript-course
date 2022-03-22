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

### Chaining Promises

2nd AJAX call depends on the data from the first call, so it needs to be done in sequence.

As soon as we get the data, we need to get the neighbour country and do AJAX call for that one as well.

Then method always returns a promise no matter if we actually return anything or not.

But we return a value, then that value will become a fulfillment value of the return promise.

```javascript
const getCountryData = function (country) {
  // Country 1
  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then((response) => response.json())
    .then((data) => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];

      if (!neighbour) return;

      // Country 2
      return fetch(`https://restcountries.eu/rest/v2/name/${neighbour}`);
      // return 23;
    })
    // .then(data => alert(23));
    .then((response) => response.json())
    .then((data) => renderCountry(data, "neighbour"));
};
getCountryData("portugal");
```

Here without callback hell we have a flat chain of promises, very easy to understand and read.

Promises are incredibly powerful and elegant solution to handle asynchronous code.

We should chain then method directly to a new nested promise.

---

---

### Handling rejected promises

The only way in which fetch promises are rejected is when the user loses it's internet connection.

For the 1st time the promise that's returned from the fetch function was actually rejected.

There are two ways of handling rejections.

1. Pass a callback function into then method - first callback function is gonna be called for fulfilled promise so for a successful one.

2nd callback function will be called for rejected promise

Handling the error also called catching the error.

```javascript
fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(
  (response) => response.json(),
  (err) => alert(err)
);
```

What if there was actually no error in 1st fetch promise, but the 2nd one was rejected then we have to catch error there also.

```javascript
.then((response) => response.json(),
err => alert(err)
)
    .then((data) => renderCountry(data, "neighbour"));
```

There is better way to handle errors globally, in the end by adding a catch method

```javascript
const getCountryData = function (country) {
  // Country 1
  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(
      (response) => response.json(),
      (err) => alert(err)
    )
    .then((data) => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];

      if (!neighbour) return;

      // Country 2
      return fetch(`https://restcountries.eu/rest/v2/name/${neighbour}`);
      // return 23;
    })
    // .then(data => alert(23));
    .then((response) => response.json())
    .then((data) => renderCountry(data, "neighbour"))
    // .catch(err => alert(err))
    .catch((err) => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
    });
};
```

Catch method at the end of the chain will catch any error that occurs in any place in the whole promise chain.

Errors basically propagate down the chain until they are caught.

```javascript
const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
  countriesContainer.style.opacity = 1;
};
```

Function that will also render some kind of error message

```javascript
.finally(()=> {
  countriesContainer.style.opacity = 1;
})
};
```

finally method will always be called whatever happens with the promise no matter if the promise is fulfilled or rejected.

This Callback function Gonna be called always

### Throws Errors Manually

```javascript
getCountryData("sddsfdsf");
```

During the fetch there was a 404 error, the fetch function still didn't reject in this case. Many people, and that includes myself think that in this case, the promise should actually be rejected right away,

But again, it just doesn't, and so we will have to do it manually.

```javascript
fetch(`https://restcountries.eu/rest/v2/name/${country}`).then((response) => {
  console.log(response);
  if (!response.ok) throw new Error(`Country not found (${response.status})`);
  return response.json();
});
```

We create a new error using a constructor function basically and we pass in a message, which is error message. then we use the throw keyword here, which will immediately terminate the current function just like return does it.

The effect of creating, and throwing an error in any of these then methods is that the promise will immediately reject.

The promise returned by this then handler here will be a rejected promise. And that rejection will then propagate all the way down to the catch handler, which we already have set up here.

Handling these errors is the only way in which we can actually display an error message like this on the screen for the user,

It's just a really bad practice to leave these rejected promises, hanging around without handling them.

---

### Asynchronous Behind the Scenes - The Event Loop

JavaScript runtime is basically a container which includes all the different pieces that are necessary to execute JavaScript code.

The heart of every JavaScript runtime is the engine. So, this is where code is actually executed and where objects are stored in memory.

So, these two things happen in the call stack and in the heap.

JavaScript has only one threat of execution. And so it can only do one thing at a time. There is absolutely no multitasking happening in JavaScript itself.

Next we have the Web APIs environment. These are some APIs provided to the engine, but which are actually not part of the JavaScript language itself. So, that's things like the DOM timers the fetch API, the geolocation API, and so on and so forth.

There is the callback queue and this is a data structure that holds all the ready to be executed callback functions that are attached to some event that has occurred.

Finally, whenever the call stack is empty the event loop takes callbacks from the callback queue and puts them into call stack so that they can be executed.

So the event loop is the essential piece that makes asynchronous behavior possible in JavaScript.

A concurrency model is simply how a language handles multiple things happening at the same time.

The essential parts of the runtime here. that's the call stack, the event loop the web APIs and callback queue. But if there was only one thread of execution in the engine then how can asynchronous code be executed in a non blocking way?

```javascript
el = document.querySelector('img');
el,src = 'dog.jpg';
el.addEventListener('load', () => {
  el.classList.add('fadeIn')
})

fetch(`https://someurl.com/api')
  .then(res => console.log(res));
```

Let's start by selecting this image element. And then in the next line we set the source attribute of that image to dog.jpg.

And as we learned before this will now start to load this image asynchronously in the background.

But this time we can actually understand what that mysterious background actually is.

So, as we already know everything related to the DOM is not really part of JavaScript, but of the web APIs. And so it's in a web APIs environment where the asynchronous tasks related to the DOM will run.

And in fact, the same is true for timers AJAX calls and really all other asynchronous tasks.

Thus these asynchronous tasks will all run in the web API environment of the browser.

Now, if the image would be loading in a synchronous way it would be doing so right in the call stack blocking the execution of the rest of the code.

But, as we already learned, that would be terrible. And that's why loading images in JavaScript is asynchronous. So it does not happen in the call stack. So, not in the main thread of execution, but really in the web APIs environment listen to the load event. And so that's exactly what we do in the next line of code.

So, here we attach an event listener to the load event of that image and pass an a callback function as always.

In practice, this means to register this callback in the web APIs environment, exactly where the image is loading.

And to callback will stay there until the load event is emitted.

So, we're handling asynchronous behavior here with a callback just as we learned before,

In the next line, we make an AJAX call using the fetch API.

And as always the asynchronous fetch operation will happen in the web APIs environment. And again, that's because otherwise we would be blocking the call stack and create a huge lag in our application.

Finally, we use the then method on the promise returned by the fetch function. And this will also register a callback in the web API environment so that we can react to the future resolved value of the promise.

So this callback is associated with a promise that is fetching the data from the API. And that's gonna be important later on. So, with this, we have now executed all the top level of code.

So, all the code that is not inside any callback function in asynchronous way.

We also have the image loading in the background and some data being fetched from an API.

And so now it's time for this to get really interesting.

Let's say the image has finished loading and therefore the load event is emitted on that image. What happens next, is that the callback for this event is put into callback queue.

The callback queue is basically an ordered list of all the callback functions that are in line to be executed.

We can think of this callback queue, as a to do list that you would write for yourself with all the tasks that you have to complete. So, the callback queue is also a to do list of a kind, but with tasks that the call stack will eventually have to complete.

Now, in this example, there are no other callbacks in the queue yet, but there could be of course. So, if there were already other callbacks waiting in line, then this new callback would of course go straight to the end of the queue.

And there it would sit patiently for its turn to finally run & this actually has big implications. So, imagine that you set a timer for five seconds. And so after five seconds that timer's callback will be put on the callback queue, right.

And let's say there were already other callbacks awaiting. And let's also say that it took one second to run all of those callbacks.

Then, in that case, your timers callback would only run after six seconds and not after five.

So, these six seconds are the five seconds that passed for the timer, plus the one second that it took to run all the other callbacks that were already waiting in line in front of your timer.

So, what this means is that the timers duration that you define is not a guarantee.

The only guarantee is that the timers callback will not run before five seconds, but it might very well run after five seconds have passed. So, it all depends on the state of the callback queue. And also another queue that we're gonna learn about.

Now, another thing that's important to mention here is that the callback queue also contains callbacks coming from DOM events like clicks or key presses or whatever.

Now, we learned before that DOM events are not really asynchronous behavior, but they still use the callback queue to run their attached callbacks. So, if a click happens on a button with addEventListener

It's time to finally learn about the event loop.

It looks into the call stack and determines whether it's empty or not.

Except of course for the global context, then if the stack is indeed empty which means that there's currently no code being executed then it will take the first callback from the callback queue and put it on the call stack two will be executed. And this is called an event loop tick.

So each time the event loop takes a callback from the callback queue. We say that there was an event loop tick. So, as we can see here the event loop has the extremely important task of doing coordination between the call stack and to callbacks in the callback queue.

So, the event loop is basically who decides exactly when each callback is executed. We can also say that the event loop does the orchestration of this entire JavaScript runtime.

Another thing that becomes clear from this whole explanation is that the JavaScript language itself has actually no sense of time.

That's because everything that is asynchronous does not happen in the engine.

It's the runtime who manages all the asynchronous behavior. And it's the event loop who decides which code will be executed next. But the engine itself simply executes whatever code it has given.

Okay, so, this is of course, a lot to take in.

So let's try to recap what's happened here.

**Summary**

The image started loading asynchronously in the web APIs environment and not in the call stack, right.

We then used addEventListener to attach a callback function to the image load event. And this callback is basically or asynchronous code it's code that we deferred into the future because we only want to execute it once the image has loaded.

In the meantime, the rest of the code kept running.

Now addEventListener did not put the callback directly in the callback queue. It simply registered the callback, which then kept waiting in the web APIs environment until the load event was fired off.

Only then the environment put the call back into queue. Then while in the queue the callback kept waiting for the event loop to pick it up and put it on the call stack.

And this happened as soon as the callback was first in line and the call stack was empty. And, that's it actually. So, all this happened so that the image did not have to load in the call stack, but in the background in a non blocking way.

So, in a nutshell, the web APIs environment, the callback queue and the event loop, all together, make it possible that asynchronous code can be executed in a non blocking way even with only one thread of execution in the engine.

Wow, that was already a lot to understand,

but we're not done yet.

We still have to fetch function getting data from the AJAX call in the background. And this is basically happening with a promise.

Let's say that the data has now finally arrived & So the fetch is done.

Now, callbacks related to promises like this one that we registered with the promises then method.

Do actually not go into the callback queue. So, again this callback did we still have here, which is coming from a promise will not be moved into the callback queue.

Instead, callbacks of promises have a special queue for themselves, which is the so called microtasks queue.

Now, what is special about the microtasks queue is that it basically has priority over the callback queue. So, at the end of an event loop tick, so after a callback has been taken from the callback queue, the event loop will check if there are any callbacks in the microtasks queue.

And if there are, it will run all of them before it will run any more callbacks from the regular callback queue. And, by the way, we call these callbacks from promises microtasks. And therefore the name microtasks queue.

And there are actually other microtasks but that's not relevant here. So going back to our example, currently, we actually do have a microtask sitting in a microtasks queue, the call stack is also empty.

And therefore the event loop will now take this callback and put it in the call stack just like it does with callbacks from the callback queue.

And it doesn't matter if the callback queue is empty or not.

So, this would have worked the exact same way even if there were some callbacks in the callback queue.

And again, that's because microtasks always have priority. In practice, this means that microtasks can basically cut in line before all other regular callbacks.

Now, if one microtask adds a new microtask then that new microtask is also executed before any callbacks from the callback queue.

And this means that the microtasks queue can essentially starve the callback queue.

Because if we keep adding more and more microtasks, then callbacks in the callback queue can never execute.

Now, this is usually never a problem but I just wanted to mention this possibility here anyways, who knows maybe this will be an interview question for you someday.

As we can hopefully see the ideaof running asynchronous code with regular callbacks and with microtasks coming from promises is very similar.

The only difference is that they go into different queues and that the event loop gives microtasks priority over regular callbacks.

---

### Event Loop in Practise

```javascript
console.log("Test started");
setTimeout(() => console.log("0 sec timer"), 0);
// After 0 sec, this callback will be put in the callback queue.

Promise.resolve("Resolved promise 1").then((res) => console.log(res));
console.log("Test end");
```

Promise that resolves immediately. Promise.resolve() allows us to create a promise that is immediately resolved, one that immediately has success value.

The timer appears first in the code and so it kind of finished first.

And so it's callback, will be put on the callback queue first, but does that mean that this call back here will be executed first ?

Well, actually, no, it doesn't. And that's because of the micro-tasks queue, remember?

So the callback of the resolved promise here, So this one will be put on the micro-tasks queue and this micro-tasks queue, priority over the callback queue.

And so after this whole code runs, we will have one callback in a callback queue and one in a micro-tasks queue.

And therefore the one from the micro tests queue should be executed first.

And so therefore the callback from the micro-tasks queue should be executed first.

And so that's this one here and there for the first message to appear of these two, should be resolved Promise one.

Remember that the implication of the fact that micro-tasks have priority over regular callbacks, is that if one of the micro-tasks takes a long time to run, then the timer will actually be delayed and not run after the zero seconds that we specified here, right?

So instead it will run a little bit later just after the micro-task is actually done with its work.

---

```javascript
console.log("Test started");
setTimeout(() => console.log("0 sec timer"), 0);

Promise.resolve("Resolved promise 1").then((res) => console.log(res));
Promise.resolve("Resolved promise 2").then((res) => {
  for (let i = 0; i < 100000000; i++) {}
  console.log(res);
});

console.log("Test end");
```

We you cannot really do high precision things using JavaScript timers.

So just keep that in mind, whenever you are working with promises. So basically with micro-tasks, and with timers at the same time.

---

---

### BUILDING A SIMPLE PROMISE

```javascript
const lotteryPromise = new Promise(function (resolve, reject) {
  if (Math.random() >= 0.5) {
    resolve("You WIN");
  } else {
    reject("You lost your money");
  }
});

lotteryPromise.then((res) => console.log(res)).catch((err) => console.log(err));
```

In this example, a fulfilled promise means to win the lottery while a rejected promise means to lose.

Create a new promise using the promise constructor.

This means is that promises are essentially just a special kind of object in JavaScript.

Now the promise constructor takes exactly one argument and that is the so-called executor function. So we need to pass in a function here. And so again, this one is called executor.

Now, as soon as the promise constructor runs, it will automatically execute this executor function that we pass in. And as it executes this function here, it will do so by passing in two other arguments. And those arguments are the resolve and reject functions.

All of this here we'll create a new promise that we're gonna store into this variable. So it's just like, for example, the fetch function, which also creates a new promise.

Now this executor function that we specified here is the function which will contain the asynchronous behavior that we're trying to handle with the promise.

Executor function should eventually produce a result value. the value that's basically gonna be the future value of the promise.

Into the resolved function here we pass the fulfilled value of the promise so that it can later be consumed with the den method.

So of course we are going to handle the results of this promise just like we handled any other promise with the then method.

whatever value we pass into the resolve function here is gonna be the result of the promise that will be available in the then handler.

So just to quickly recap, before we consume this promise here, we created an executor function which is gonna be called by this promise constructor as soon as it runs, so basically immediately.

Then the promise calls this function and passes in the resolve and the reject functions so that we can then use them to mark the promise as either resolved so as fulfilled or as to rejected.

This promise is eventually going to move to either the fulfilled state or the rejected state.

We always need to make sure that the promise ends up in one of these two states.

```javascript
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log("Lottery draw is happening 🔮");
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve("You WIN 💰");
    } else {
      reject(new Error("You lost your money 💩"));
    }
  }, 2000);
});

lotteryPromise
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
```

Let's actually simulate this lottery draw by adding a simple timer. And so this timer will then simulate the time data is passed between buying the lottery ticket and actually getting the result.

We did actually encapsulate some asynchronous behavior into this promise. that's the whole point of promises in the first place.

Now, in practice, most of the time all we actually do is to consume promises.

And we usually only built promises to basically wrap old callback based functions into promises.

And this is a process that we call promisifying.

So basically promisifying means to convert callback based asynchronous behavior to promise based.

---

```javascript
// Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(1)
  .then(() => {
    console.log("1 second passed");
    return wait(1);
  })
  .then(() => {
    console.log("2 second passed");
    return wait(1);
  })
  .then(() => {
    console.log("3 second passed");
    return wait(1);
  })
  .then(() => console.log("4 second passed"));
```

Promisify the set timeout function and create a wait function.

Let's create a function called wait and this function is going to take in a number of seconds.

And so now inside of this function we will actually create and return the promise.

That's always what we do. So creating a function and then from there returning a promise.

And so this will then encapsulate the asynchronous operation even further.

So essentially that's also what the fetch function does. It's a function that returns a promise, and so that is exactly what we will do here with this wait function. So in a sense this here is a more real world example. So promisifying set timeout.

In this case, we actually don't even need the reject function.

And that's because it's actually impossible for the timer to fail. And so therefore, We will never mark this promise as rejected.

And so here we don't even need to specify debt reject parameter.

It's just like the array methods like map which always receive three arguments but most of the time we just use one or two of them.

```javascript
// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 seconds passed');
//     setTimeout(() => {
//       console.log('3 second passed');
//       setTimeout(() => {
//         console.log('4 second passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

Promise.resolve("abc").then((x) => console.log(x));
Promise.reject(new Error("Problem!")).catch((x) => console.error(x));
```

---

---

### CONSUMING PROMISES WITH ASYNC / AWAIT

```javascript
const whereAmI = async function (country) {
  const res = await fetch(`https://restcountries.eu/rest/v2/name/${country}`);
  console.log(res);
};

whereAmI("portugal");
console.log("FIRST");
```

Async - Function that will basically keep running in the background while performing the code that inside of it. When the function is done, it automatically returns a promise.

Inside async function, we can have one or more await statements.

We can use the await keyword to await for the result of the promise.

Await will stop the code execution at this point of the function until the promise is fulfilled, until the data has been fetched.

We might think isn't stopping the code, blocking the execution?

The answer is actually no, in this case, because stopping execution in an async function, which is what we have here is actually not a problem because this function is running asynchronously in the background. And so therefore it is not blocking the main threat of execution.

So it's not blocking the call stack. And in fact, that's, what's so special about a single wait.

So it's the fact that it makes our code look like regular synchronous code while behind the scenes. Everything is in fact asynchronous.

As soon as this premise here is resolved, then the value of this whole await expression that we have here is going to be the resolved value of the premise. And so we can simply store that into a variable.

We see here that by using async await or asynchronous code here, really looks and feels like synchronous code.

We can simply await until the value of the premise is returned basically. And then just assign that value to a variable meant that is something that was impossible before.

Before we had to mess with callback functions and dead was true in callback hell, but also by consuming premises with the then method. But now with a sync await, that is just completely gone, this looks now like normal synchronous code where we simply assign values to a variable, and that makes it so much easier and more clean.

We need to first understand that async await is in fact, simply syntactic sugar over the then method in premises. So of course behind the scenes, we are still using promises.

We are simply using a different way of consuming them here in this case, but what we have here.

So this is essentially exactly the same as doing it the old way.
Using then and then res and then console dot log res like we did here.

```javascript
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(res => console.log(res))

const whereAmI = async function () {
  // Geolocation
  const pos = await getPosition();
  const { latitude: lat, longitude: lng } = pos.coords;

  // Reverse geocoding
  const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
  const dataGeo = await resGeo.json();
  console.log(dataGeo);

  // Country data

  const res = await fetch(
    `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
  );
  const data = await res.json();
  console.log(data);
  renderCountry(data[0]);
};
whereAmI();
console.log("FIRST");
```

We are awaiting 5 promises here, in a very easy way. Code that actually looks and feels like normal synchronous code.

### ERROR HANDLING WITH TRY / CATCH

With a async/await, we can't use the catch method that we use before, because we can really attach it anywhere. So instead, we use try catch statement.

The try catch statement is actually used in regular JavaScript as well, So try catch has nothing to do with a sinc/await. But we can still use it to catch errors in async functions.

```javascript
// try {
//   let y = 1;
//   const x = 2;
//   x = 3;
// } catch(err) {
//   alert(err.message);
// }

// Now the error is no longer in the console.
```

```javascript
// fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(res => console.log(res))

const whereAmI = async function () {
  try {
    // Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;
    // Reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resGeo.ok) throw new Error("Problem getting location data");
    const dataGeo = await resGeo.json();
    console.log(dataGeo);
    // Country data
    const res = await fetch(
      `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
    );

    // BUG in video:
    // if (!resGeo.ok) throw new Error('Problem getting country');

    // FIX:
    if (!res.ok) throw new Error("Problem getting country");
    const data = await res.json();
    console.log(data);
    renderCountry(data[0]);
  } catch (err) {
    console.error(`${err} 💥`);
    renderError(`💥 ${err.message}`);
  }
};
whereAmI();
whereAmI();
whereAmI();
console.log("FIRST");
```

The fetch promise does not reject on a 404 error, or on a 403 error.

---

### RETURNING VALUES FROM ASYNC FUNCTIONS

```javascript
console.log("1: Will get location");
whereAmI();
console.log("2: Finished getting location");

// Output Order
// 1: Will get location
// 2: Finished getting location
// whereAmI()
```

We get the first log then the second one and of course only after that we get all the logs coming from the async function.

So again, that's because this is an async function that runs in the background. So JavaScript immediately moves on to the next line here.

Now, if this was indeed a regular function and there would be a console.log in that regular function, then of course, that would appear here between one and two.

---

```javascript
const whereAmI = async function () {
  try {
    // Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;
    // Reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resGeo.ok) throw new Error("Problem getting location data");
    const dataGeo = await resGeo.json();
    // Country data
    const res = await fetch(
      `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
    );
    if (!resGeo.ok) throw new Error("Problem getting country");
    const data = await res.json();
    renderCountry(data[0]);

    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (err) {
    console.error(`${err} 💥`);
    renderError(`💥 ${err.message}`);
  }
};

console.log("1: Will get location");
const city = whereAmI(); // Promise {<pending>}
console.log(city);
console.log("3: Finished getting location");
```

An async function always returns a promise, it actually makes sense that here we get a promise and not the value that we would like to get.

So the string here, `You are in ${dataGeo.city}, ${dataGeo.country}`

The reason for that is that at this point of the code, JavaScript has simply no way of knowing yet there's a string here that we want because the function is still running, but it is also not blocking the code out here. And so therefore again, at this point, JavaScript has no way of knowing what will be returned from this function.

And so therefore all that this function does return is a promise. Now the value that we return from an async function, so again, that's this string here will become the fulfilled value of the promise that is returned by the function.

And so that's important to understand. So again, this promise that we see down here, the fulfilled value of that promise is going to be this string here, because that is the value that we return from the async function while at least if there is no error here happening in the function.

---

```javascript
const whereAmI = async function () {
  try {
    // Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;
    // Reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resGeo.ok) throw new Error("Problem getting location data");
    const dataGeo = await resGeo.json();
    // Country data
    const res = await fetch(
      `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
    );
    if (!resGeo.ok) throw new Error("Problem getting country");
    const data = await res.json();
    renderCountry(data[0]);

    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (err) {
    console.error(`${err} 💥`);
    renderError(`💥 ${err.message}`);
  }
};

console.log("1: Will get location");
// const city = whereAmI();
// console.log(city);
whereAmI().then((city) => console.log(city));
console.log("3: Finished getting location");
```

then method to get the fulfilled value of the promise.

---

Let's think about errors

```javascript
const whereAmI = async function () {
  try {
    // Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;
    // Reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resGeo.ok) throw new Error("Problem getting location data");
    const dataGeo = await resGeo.json();
    // Country data
    const res = await fetch(
      `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
    );
    if (!resGeo.ok) throw new Error("Problem getting country");
    const data = await res.json();
    renderCountry(data[0]);

    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (err) {
    console.error(`${err} 💥`);
    renderError(`💥 ${err.message}`);

    // Reject promise returned from async function
    throw err;
  }
};

console.log("1: Will get location");
// const city = whereAmI();
// console.log(city);

whereAmI()
  .then(city => console.log(`2: ${city}`));
  .catch(err => console.error(`2: ${err.message}`))
  .finally(() => console.log("3: Finished getting location"))

console.log("3: Finished getting location");
```

```javascript
console.log("1: Will get location");
// const city = whereAmI();
// console.log(city);

whereAmI()
  .then(city => console.log(`2: ${city}`));
  .catch(err => console.error(`2: ${err.message}`))
  .finally(() => console.log("3: Finished getting location"))

/*
There's still a problem here. And that problem is the fact that doing this here kind of makes this the philosophy of async/await with handling promises using then and catch, So we are mixing the old and the new way of working with promises here, all in the same code.
*/
```

Convert this to async/await as well.

We can treat the promise here that has returned just like any other promise. And so of course we are able to handle it using async/await.

It would be great if we could simply use await without the async function, but that doesn't really work, at least for now, because there is actually a proposal in the works to make this happen, but for now, await can only be used inside an async function.

IIFE

```javascript
(async function () {
  try {
    const city = await whereAmI();
    console.log(`2: ${city}`);
  } catch (err) {
    console.error(`2: ${err.message} 💥`);
  }
  console.log("3: Finished getting location");
})();
```
