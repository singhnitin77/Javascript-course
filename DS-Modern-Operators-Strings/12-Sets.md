### Sets

A set is just a collection of unique values means that a set can never have any duplicates.

And that property makes them useful in certain situations.

Pass in an iterable, the most common iterable here is an array.

There could be different data types in here. So set can of course hold mixed data types.

Only values that are in there are pasta, pizza and risotto.
All the duplicates are actually gone.

Now, also we can see that a set kind of looks similar to an array, So there are no key value pairs, it's just a bunch of values grouped together, in this case into a set.

Like arrays, sets are also iterables.

A set is still very different from an array. So first, because its elements are unique. And second, because the order of elements in the set is irrelevant.

In sets there are actually no indexes, there is no way of getting values out of a set. There's really no need for getting data out of a set. That's because if all values are unique, and if their order does not matter, then there is no point of retrieving values out of a set.

All we need to know is whether a certain value is in the set or not.

If your goal is to actually store values in order and then retrieve it, then the best use case, is to just use an array.

The size of a set, orderSet.size.
delete elements. orderSet.delete.

In a normal code base, the main use case of sets is actually to remove duplicate values of arrays.

```javascript
const ordersSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);

console.log(ordersSet);
console.log(new Set("Jonas"));
console.log(ordersSet.size);
console.log(ordersSet.has("Pizza"));
console.log(ordersSet.has("Bread"));

ordersSet.add("Garlic Bread");
ordersSet.add("Garlic Bread");
ordersSet.delete("Risotto");

// ordersSet.clear();

console.log(ordersSet);

for (const order of ordersSet) console.log(order);
```

```javascript
// Example

const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];

const staffUnique = new Set(staff);
//We actually want this to be an array.
```

The conversion from a set to an array is pretty easy, because they're both iterables. Spread operator works on all iterables. So that includes sets.

And so we can now create an array around this basically And then we can unpack this entire set here using the spread operator, and then these elements will be put into the newly constructed array.

It works really exactly the same. So it takes all the elements out of the iterable and essentially writes them here, like comma separated, right.

Now, if we only wanted to know how many different positions there are, then the size property is very useful.

```javascript
const staffUnique = [...new Set(staff)];

console.log(staffUnique);

console.log(
  new Set(["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"]).size
);

console.log(new Set("jonasschmedtmann").size);
```
