```Javascript
const p = document.querySelector('.p');
p.textContent = 'My name is Jonas!'
alert('Text set!');
p.style.color = 'red';
```
Synchronous is opposite of Asynchronous.

Most of the code is Synchronous i.e executed line by line in the exact order of execution that we define.

Each line of code always waits for the previous line to finish execution.

Long-running operations block code execution.

Now this can create problems when one line of code takes a long time to run.

For example, an alert statement, which creates alert window will block the code execution.

So nothing will happen on the page until we click that OK Button.

And only then, the code can continue executing.

Alert statement is a perfect example of a long running operation, which blocks execution of the code.

---

```Javascript
const p = document.querySelector('.p');
setTimeout(function() {
    p.textContent = 'My name is Jonas!';
}, 5000);
p.style.color = 'red';
```
Asynchronous code is executed after a task that runs in the “background” finishes

Asynchronous code is non-blocking

Execution doesn’t wait for an asynchronous task to finish its work

Callback functions alone do NOT make code asynchronous!

Set timeout function, start a timer in an asynchronous way.
this means that the timer will run in the background without preventing the main code from executing.

We also register a callback function, which will not be executed now,but only after the timer has finished running.

Now this callback function is asynchronous because it's only going to be executed after a task that is running in the background finishes execution.

Main code is not being blocked and execution does not wait for the asynchronous timer to finish its work.

That's the big difference between synchronous and asynchronous code.

Previously we had to wait for the user to click on the alert window to continue execution because alert is blocking synchronous code, but now with this timer,
the callback is actually asynchronous.

And so it's only going to be executed after the timer has finished, therefore we say, that it's non-blocking
because in the meantime, the rest of the code can keep running normally.

Summary, asynchronous programming is all about coordinating
the behavior of our program over a certain period of time.

So asynchronous literally means not occurring at the same time.

---
```Javascript
const img = docuemnt.querySelector('.dog');
img.src = 'dog.jpg';
img.addEventListener('load', function() {
    img.classList.add('fadeIn');
});
p.style.width = '300px';
```
This example is about loading an image.

first two lines run in a synchronous way, one after the other.

In the second line,we set the source attribute of the image
that we selected in the first line & this operation is actually asynchronous.

Setting the source attribute of any image is essentially loading an image in the background while the rest of the code can keep running.

That's why setting the source attribute was implemented in JavaScript in an asynchronous way.

Once the image has finished loading,a load event will automatically be emitted by JavaScript.

Listening for the load event is exactly what we do here
in the next line as well.

So here we use add event listener and to register a callback function for the load event.

So just like in the previous example,we provide a callback function that will be executed once the image has been loaded and not right away, because again, all this code is non-blocking.

So instead of blocking, execution moves on right to the next line immediately.

Then once the image is completely loaded,it's displayed on the webpage

Our callback function is finally executed.

We deferred an action into the future making the code asynchronous and non-blocking.

Event listeners alone do not make code asynchronous, just like callback functions alone, do also not make code asynchronous.

For example, an event listener listening for a click on a button is not doing any work in the background.

It's simply waiting for a click to happen, but it's not doing anything, So there is no asynchronous behavior involved at all.

Now what makes this code example asynchronous is simply the fact that the image is loading asynchronously in the background, but not the fact that we are listening for the load events to happen.

There are more examples of asynchronous behavior in JavaScript like the Geolocation API that we used before, or Ajax calls.

Ajax calls are probably the most important use case of asynchronous JavaScript.

## AJAX

Ajax stands for asynchronous JavaScript and XML.
it allows us to communicate with remote web servers in an asynchronous way.

we make Ajax calls in our code in order to request some data from a web server dynamically.

So without reloading the page so that we can use that data in our application dynamically.

For now, let's quickly understand how Ajax works.

So let's say that we have our JavaScript application
running in the browser, which is also called the Client.
And we want the application to get some data from a web server.

And let's say the data about countries, With Ajax,
we can do an HTTP request to the server,which has this data.

And the server will then set back a response containing that data that we requested.

And this back and forth between Client and server all happens asynchronously in the background,

There can even be different types of requests,like get requests to receive data or post requests to send data to a server.

When we're asking a server to send us some data, this server usually contains a web API. this API is the one that has the data that we're asking for.