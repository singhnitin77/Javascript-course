One cool thing that we can do with dates is to do calculations with them.

For example, we can subtract one date from another date, in order to calculate how many days have passed between the two dates.

And this works, because whenever we attempt to convert a date to a number, then the result is going to be the timestamp in milliseconds.

And with these milliseconds, we can then perform calculations.

So again, the timestamps are going to be really helpful here in this situation.

We can now do operations with it. So if we subtract one date from another, the result is going to be a number like this.

This gives us these milliseconds. And so now we just need to convert them.

We want to divide by 1000. And so this converts milliseconds to seconds, then that times 60, to convert it to minutes, then times 60 to convert it to hours, and then times 24, which converts it to days. And again, that's because there are 24 hours in a day.
There are 60 minutes in one hour, 60 seconds in one minute, and 1000 milliseconds in one second.

We get 10 days. And that makes sense.

So from April 24 to April 14, we have exactly 10 days.

If we need really pretty sighs calculations, for example, including time changes due to daylight saving changes, and other weird edge cases like that, then you should use a date library like moment dot js.

And that's a library that's available for free for all JavaScript developers.

```javascript
const future = new Date(2037, 10, 19, 15, 23);
console.log(+future);

const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));

console.log(days1);
```
