### Maps

A map is a data structure, that we can use to map values to keys.

Like an object, data is stored in key value pairs in maps.

Now the big difference between objects and maps, is that in maps, the keys can have any type. And this can be huge.

So in objects, the keys are basically always strings. But in maps, we can have any type of key. It could even be objects or arrays or other map.

Easiest way to create a map, is to actually create an empty map just like this, without passing anything in.

We can use, any data type that we want.

```javascript
const rest = new Map();

rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");

// Calling the set method like this, does return the new set.
console.log(rest.set(2, "Lisbon, Portugal"));
```

Fact that the set method, returns the new set, allows us to chain the set method like this.

Calling the set method will return the new set. So all of this here is now the new set.

In order to read data from a map, we use the get method.

Get method is available on all the maps. Pass in the name of the key.

```javascript
rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open :D")
  .set(false, "We are closed :(");

console.log(rest.get("name"));
console.log(rest.get(true));
console.log(rest.get(1));
```

---

We can have Boolean keys. So this true and false here.

We also have the open and the close time.

When we pass in true, then we will get, we are open.
when we pass in false, we will get, we are closed.

In order to get the correct string here, according to the time, all we need to do is to compare the current time with these two open and close.

We can say, or we can ask is the time, so the current time greater than rest dot get open, and at the same time, is it below rest dot get close?

So basically here we are asking, if the current time is between 23 and 11. And so this here is a true false value, and this is a true false value.

So Boolean, and so the results of this end operation, will be either true or false. And then true or false will map to one of these values.

```javascript
const time = 8;

console.log(rest.get(time > rest.get("open") && time < rest.get("close")));
```

---

We can also check if a map contains a certain key.
So let's log to the console the result of calling the has method.

So categories and so this should be true and it is indeed true.
Then we can also delete elements from the map, and again, that happens based on the key. So rest dot delete.

Now comparing this to objects,

we can actually also delete properties from objects, using something called a delete operator

```javascript
console.log(rest.has("categories"));
rest.delete(2);
// rest.clear();
```

---

We can in fact, use arrays or objects as map keys.

```javascript
rest.set([1, 2], "Test");
console.log(rest);
console.log(rest.size);
console.log(rest.get([1, 2]));
```

These two arrays are actually not the same object.

So this array and this one, even though we wrote them in the same way. And so they have the same elements, they are not the same object in the heap.

the key here is exactly this object, this object in memory and not this one. And so this cannot work, in order to make it work.
We would have to do this.

These two refer to the same place in memory.

With this, we proved that we can indeed, use objects as map keys.

And this can be very useful with elements. Which in fact are also nothing more, than just a special type of object.

```javascript
const arr = [1, 2];

rest.set(arr, "Test");
rest.set(document.querySelector("h1"), "Heading");
console.log(rest);
console.log(rest.size);
console.log(rest.get(arr));
```

---

---

### Part - 2

We created an empty map and then edit elements to it by using the set method.

However, there is actually another way of populating a new map without having to use the set method.

set method is a bit cumbersome when there are a lot of values to set.

Here we can pass in an array and this array itself will contain multiple arrays. And in each of these arrays, the first position is gonna be the key.

And the second position is gonna be the value.

```javascript
const question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct 🎉"],
  [false, "Try again!"],
]);

console.log(question);
```

```javascript
// Convert object to map

console.log(Object.entries(openingHours));

const hoursMap = new Map(Object.entries(openingHours));

console.log(hoursMap);
```

---

Iteration is possible on maps because as we already know, maps are also iterables.

This is exactly the same as we did when we looped over the object.

The only difference is that for the object, we needed object dot entries right here.

And that's just because the object is not an alterable, but then we converted it to an alterable using object dot entries.

We only want to print these three. We only want to print an element if the key is a number.

### Iteration

```javascript
// Quiz app
console.log(question.get("question"));

for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);
console.log(question.get(question.get("correct") === answer));
```

```javascript
// Convert map to array

console.log([...question]);
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);
```
