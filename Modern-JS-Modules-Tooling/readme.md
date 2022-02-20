### MODERN JAVASCRIPT DEVELOPMENT

- Initially, We used to write all our codes into one big script or maybe multiple scripts.

- Nowadays, We divide our projects into multiple modules and these modules can share data between them and make our code more organized and maintainable.

- Great thing about modules is that we can also include 3rd-party modules into our own code.

- there are thousands of open source modules, which we also call packages, that developers share on the NPM repository.

- We can then use these packages for free in our own code. For example, the popular React framework or jQuery, or even the Leaflet library, that we used our Mapty project.

- All of these packages are available through NPM.

### OVERVIEW

**BUNDLING** - Joining all modules into one file

- Build process, where one big final JavaScript bundle is built and that's the final file, which we will deploy to our web server for production.

- So basically it's the JavaScript file, that will be sent to browsers in production.

- Production simply means that the application is being used by real users in the real world.

- We'll bundle all our modules together into one big file.

- This is a pretty complex process which can eliminate unused code and compress or code as well.

- Now this step is super important for two big reasons.

First, older browsers don't support modules at all. And so code that's in a module could not be executed by any older browser.

And second, it's also better for performance to send less files to the browser, and it's also beneficial that the bundling step compresses our code.

**TRANSPILING/POLYFILING**

- We do something called **transpiling** and **polyfilling**, which is basically to convert all modern JavaScript syntax and features back to old ES5 syntax, so that even older browsers can understand our code without breaking.

- And this is usually done using a tool called Babel.

- So these are the two steps of our build process, and after these two steps, we end up with that final JavaScript bundle, ready to be deployed on a server for production.

- We don't perform these steps ourselves. Instead, we use a special tool to implement this build process for us. And the most common build tools available, are probably webpack and Parcel.

- And these are called JavaScript bundlers because well, as the name says they take our raw code and transform it into a JavaScript bundle.

- Now Webpack is the more popular one, but it can be really hard and confusing to set it up.

- So that's because there's a lot of stuff that we need to configure manually, in order to make it work properly.

- Parcel, on the other hand is a zero configuration bundler, which simply works out of the box. And so in this bundler, we don't have to write any set up code, which is really amazing.

- these development tools are actually also available on NPM.

- So just like packages that we include in our code, we will download and manage tools using NPM as well.

- And these tools include the live-server that we've been using all along,the Parcel bundler that we just talked about or Babel to transpile code back to ES5.

---

---

### MODULES IN JAVASCRIPT

**MODULE**

A module is a reusable piece of code that encapsulates implementation details of a certain part of our project.

Now that sounds a bit like a function or even a class, but the difference is that a module is usually a standalone file.

A module always contains some code but it can also have imports and exports.

So with exports, we can export values out of a module, for example, simple values or even entire functions. And whatever we export from a module is called the public API.

In the case of modules, this public API is actually consumed by importing values into a module.

We can also import values from other modules. these other modules from which we import are then called dependencies of the importing module

**WHY MODULE**

**Compose software** - The first one is that modules make it really easy to compose software. So we can think of modules as small building blocks that we can then put together in order to build really complex applications.

**Isolating components** - is another huge advantage of using modules. Isolating components essentially means that each module can be developed in isolation without the developer having to think about the entire code base.

**Abstract code** - Modules make it very easy to abstract or code. we can use modules to implement low level code then other modules, which don't really care about these low level details can import these abstractions and use them.

**Organized code** - Modules also naturally lead to a more organized code base. Because when we break up our code into separate isolated and obstructed modules, this will automatically organize our code and make it easier to understand. And so this alone is a huge benefit of modules.

**Reused Code** - Modules allow us to easily reuse the same code in a project and even across multiple projects.

---

---
