### Creating a Date

There are exactly four ways of creating dates in JavaScript.

They all use the new date constructor function, but they can accept different parameters.

The first way is simply to use the new date constructor like this, and then we can assign this to a variable

The second way is to parse the date from a date string. We use new date and then we can pass in the string.

JavaScript is pretty smart in parsing out the string that we write here.

this Z here means the UTC. So that's the Coordinated Universal Time, which is basically the time without any time zone in London and also without daylight savings.

The month here in JavaScript is zero based.

Cool about this is that JavaScript actually autocorrects the day.

Try November 31st, but we know that November only has 30 days, right? it will then autocorrect right to the next day. So that's going to be December 1st and we can even try November 33rd, which should then be a December 3rd, okay.

Finally, we can also pass into the date constructor function, the amount of milliseconds passed since the beginning of the Unix time, which is January 1, 1970,

So again, new date and if we pass in zero, so zero milliseconds after that initial Unix time, then indeed we get January 1st, 1970.

Let's now create a date that is three days after this. And so that is essentially three times, which is three days.

And one day is made out of 24 hours, which is made out of 60 minutes, which is made out of 60 minutes, which is made out of 1000 milliseconds. And so this is how we convert from days to milliseconds.

So three days times 24 hours, which is the number of hours in one day, times 60, which is the number of minutes in one hour, then times 60, which is the number of seconds in one minute, and then times 1000 to convert two milliseconds.

And so now we get January 4th, so that's exactly three days later.

This number that we calculated here, So this is the timestamp.

So we call this year a timestamp of the day number three, essentially.

And we will see why does this useful a little bit later.

Now these dates that we just created here are in fact, just another special type of object. And so therefore they have their own methods, And so we can use these methods to get, or to set components of a date, all right.

```javascript
// Create a date

const now = new Date();
console.log(now);

console.log(new Date("Aug 02 2020 18:05:41"));
console.log(new Date("December 24, 2015"));

console.log(new Date(account1.movementsDates[0]));

console.log(new Date(2037, 10, 19, 15, 23, 5));
console.log(new Date(2037, 10, 31));

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));
```

The ISO string, which follows some kind of international standard.

that's one of the very useful cases is when you want to convert a particular date object into a string that you can then store somewhere.

Finally, we can also get the timestamp for the date. And remember that the timestamp is the milliseconds, which have passed since January 1, 1970, so get time.

And so we see that this huge amount has passed well, since that date.

And now we can take this number and reverse this.

If we wanted we could now create a new date only based on these milliseconds. And it will then give us exactly that same time.

Simply based on the milliseconds that have passed since January 1, 1970. And timestamps are actually so important that there is a special method that we can use to get the timestamp for right now.

Finally, there are also the set versions of all of these methods.

```javascript
// Working with dates

const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());

console.log(new Date(2142256980000));

console.log(Date.now());

future.setFullYear(2040);
console.log(future);
```
