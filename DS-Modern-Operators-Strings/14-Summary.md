### Summary

The data can be written within the program source code itself like status messages that will be displayed on a webpage based on user actions.

Second, data can come from the user interface. So from the webpage, it can either be data that the user inputs into some form or data test already written somehow in the DOM.

For example, this can be the users tasks in a todo app or expenses in a budget app or anything like that.

Finally, data can come from external sources which is usually a web API.

Now what is a web API?

Well, API stands for Application Programming Interface and we can basically use a web API to get data from other web applications.

There are four built-in data structures in JavaScript. And so now we need a way of deciding between them, but it's not that hard.

the big difference here is that with a key value pair we have a way of describing the values, so by using the key.

On the other hand, in a list like an array or a set, we simply have the values without any description,

Data from a web API because in modern JavaScript applications that's usually the most common source of data. So data from web APIs usually comes in a special data format called JSON which looks like this example here.

So JSON is essentially just text so a long string, but it can easily be converted to JavaScript objects because it uses the same formatting as JavaScript objects and arrays.

So here we have three objects that describe recipes.
We have the values in green, like the title and a publisher.

key value pairs are essential here and that's why this data is stored in an object, not an array.

Now, each of these recipe objects in itself can be seen as a value.
And since we have many of them, it means that we have again a collection of data and therefore we need a data structure to store them.

Compare array, sets, objects and maps, there are also Weaksets and WeakMaps data structures in JavaScript.

Also, there are even more data structures that are used in programming, but which are not built into JavaScript.

these can be stacks, queues, linked lists, trees, or hash tables.

arrays versus sets, We should use them for simple lists of values when we do not need to describe the values.

Now you should use arrays whenever you need to store values in order and when these values might contain duplicates.

Also you should always use arrays when you need to manipulate data because there are a ton of useful array methods.

Now sets on the other hand should only be used when you are working with unique values, besides that you can also use sets in situations when high performance is really important because operations like searching for an item or deleting an item from a set can be up to 10 times faster in sets than in arrays.

Now one great use case for sets is to remove duplicate values from an array.

So sets are really not meant to replace arrays but rather to compliment them whenever we are dealing with unique values.

Objects versus maps

When to use objects and when to use maps.

Objects have been the traditional key value data structure simply because we didn't have maps before ES6, but using objects simply as key value stores has a couple of technical disadvantages.

Now maps on the other hand are way better suited for simple key value stores because they offer better performance in fact.

Also map keys can have any data type and they're also easy to iterate and it's easy to compute the size of a map.

However, the biggest advantage of objects is probably how easy it is to write them and to access data by simply using the dot or the brackets operator.

Anyway, as a conclusion you should use maps when you simply need to map keys to values and also when you need keys that are not strings because as we saw in the last video, that can be very powerful sometimes.

Now, if you need functions as values then you should absolutely use an object for that. So in objects, these functions are then called methods and you can use the this keyword to access properties of the same object, which is impossible in maps.
