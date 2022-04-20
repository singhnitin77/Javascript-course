### SetTimeout

Set timeout timer runs just once, after a defined time, while the set interval timer keeps running basically forever, until we stop it.

We can use set timeout to execute some code at some point in the future.

Callback function here is the first argument of the set timeout function. We do not call this function ourselves, we simply pass in this function as an argument to set timeout.

The second argument, amount of milliseconds, that will pass until this function is called.

```javascript
setTimeout(() => console.log(`Here is your pizza 🍕`), 3000);
Console.log("Waiting...");
```

Passing arguments into this function.

All the arguments here that we pass after the delay will be arguments to the function.

Third argument that we passed in, did not become the first argument, or the first parameter of our function here.

The fourth argument became this second one. And if we passed an even more, we could then get access to them here in this callback function.

```javascript
setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`),
  3000,
  "olives",
  "spinach"
);
console.log("Waiting...");
```

We can actually cancel the timer, at least until the delay has actually passed.

Before these three seconds here have passed, we can cancel the timeout.

If the ingredients include spinach, then, clear timeout.

We need to pass in the name of the timer.

```javascript
const ingredients = ["olives", "spinach"];

const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`),
  3000,
  ...ingredients
);
console.log("Waiting...");

if (ingredients.includes("spinach")) clearTimeout(pizzaTimer);
```

---

### SetInterval

Set timeout simply schedules a function to run after a certain amount of time, but the callback function is only executed once.

Now, what if we wanted to run a function over and over again, like every five seconds, or every 10 minutes ?

After each second here, we get the current time displayed to the console. So what's happening here is that this callback function is now executing every second.

Every second, a new date is created here, and is then logged to the console.

```javascript
setInterval(function () {
  const now = new Date();
  console.log(now);
}, 1000);
```
