## Arrow Functions

- ### Arrow function is simply a special form of function expression.

```Javascript
//Defining
const calcAge3 = birthYear => 2037 - birthYear;
```

```Javascript
//Calling
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);
```

```Javascript
const yearUntilRetirement = birthYear => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return retirement;
}

console.log(yearsUntilRetirement(1991));
```

```Javascript
const yearUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991,'Nitin'));
console.log(yearsUntilRetirement(1991,'John'));
```

- ### One liner arrow functions are lot easier and faster to write. We don't need need curly braces & return happens implicitly.

---

---

## Functions Calling Other Functions

```Javascript
function cutFruitPieces(fruit) {
    return fruit * 4;
}
```

```Javascript
function fruitProcessor(apples,oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
fruitProcessor(2,3);
console.log(fruitProcessor(2,3));
```

## Reviewing Functions

```Javascript
const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
}

const yearsUntilRetirement = function (birthYeah, firstName) {
  const age = calcAge(birthYeah);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));
```

---

---

# Arrays

```Javascript
const friend1 = 'Nitin';
const friend2 = 'Kyle';
const friend3 = 'John';
```

```javascript
const friends = ["Nitin", "Kyle", "Peter"];
console.log(friends);
console.log(friends[0]); //Nitin
console.log(friends[1]); //Kyle
console.log(friends[2]); //John

console.log(friends.length);
console.log(friends[friends.length - 1]); //John

friends[2] = "Jay";
console.log(friends);
```

- ### Only Primitive values are immutable, but array is not primitive so we can always change it.
- ### Thus we can actually mutate arrays even though they are declared with const, but we can't replace the entire array.
- ### An array can actually hold values with different types all at a same time.

```javascript
const firstName = "Nitin";
const Nitin = ["Nitin", "Singh", 2037 - 1991, "Student", friends];
console.log(Nitin);
```

```javascript
const years = new Array(2000, 2001, 2002, 2003);
```

```Javascript
const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);
```

---

## Basic Array Operations

Push method - adds elements to the end of an array.

Push is essentially a function and we can see that by these parenthesis.

```javascript
// Basic Array Operations (Methods)

const friends = ["Michael", "Steven", "Peter"];

// Push is a method which technically is a function and we call that function directly on the friends array.
```

So it's a function that we call and we call that function really attached to the friends array itself. And that's what this dot here stands for.

Since push is a function here, it can also return something.

The push function does return a value and the value that it returns is the length of the new array. So if we want to capture that data or that value, we can create a new variable for that.

```javascript
// Add elements

const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);
```

There's also methods to add elements to the beginning of the array so that is the unshift method.

The unshift method also returns the length of the new array.

```javascript
friends.unshift("John");
console.log(friends);
```

Pop method which is basically the opposite of the push method. So this means that pop will remove the last element of the array.

Pop method also returns something, but this one doesn't return the length of the new array but instead, it returns the removed element.

```javascript
// Remove elements

friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);
```

IndexOf

Very useful method that tells us in which position a certain element is in the array.

Returns the index at which this element is located.

```javascript
console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));
```

Includes

An ES6 method and it's called includes. So includes, instead of returning the index of the element will simply return true if the element is in the array and false if it's not.

This method actually uses strict equalityfor this check. So if we added 23 and then if we checked for 23 to string it would not work, so it would say false.

That's because it is testing with strict equality which means that it does not do type coercion. And since 23 to string is different from 23 to number, it gives us false, but if I test it directly for the number then it should be true and yes, it is.

This returns a Boolean

```javascript
friends.push(23);
console.log(friends.includes("Steven")); //True
console.log(friends.includes("Bob")); //False
console.log(friends.includes(23));

if (friends.includes("Steven")) {
  console.log("You have a friend called Steven");
}
```

---

## Introduction to Objects

```javascript
const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};
```

Objects are the most fundamental concept in the whole of JavaScript language.

There are many ways of creating objects.

And simply writing an object in the code like this is probably the simplest way of creating an object. So here with the curly braces.

There are multiple ways of creating objects.

But again, using the curly braces like this is the easiest one, and it's called the object literal Syntax because we are literally writing down the entire object content.

So to recap, just like arrays, we use objects to essentially group together different variables that really belong together such as the properties of Jonas that we've been working with.

The big difference between objects and arrays, is that in objects, the order of these values does not matter at all when we want to retrieve them.

And that's important to keep in mind.

So in arrays, the order in which we specify the elements matters a lot because that's how we access these elements, right.

So we can only access array elements using their order number.

This means that we should use arrays for more order data, and objects for more unstructured data.

---

## Dot vs Bracket Notation

The first way of getting a property from an object is by using the dot notation and that is very straight forward.

```javascript
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};

console.log(jonas);

console.log(jonas.lastName); //Schmedtmann
console.log(jonas["lastName"]); //Schmedtmann
```

Now we can do the exact same thing using the brackets notation.

Here we need to specify a string with the property name. So with the key, so let's do my name again, or actually a last name.

And so these results should be exactly the same here.

Now, the big difference between these two here is that in the bracket notation here, we can actually put any expression that we'd like,

So we don't have to explicitly write the string here, but instead we can compute it from some operation because remember that an operation is basically an expression.

So something that produces a value and so we can put that here, inside the brackets.

So let's create a string first and concatenate it with name key.

What will happen here is that as JavaScript sees this line of code, it will start by executing this plus operation and so it will create a string first name.

And then it will go to the Jonas object and retrieve that property at the same for the last name here and the second line of code. And so that's how we get Jonas and Schmedtman.

```javascript
const nameKey = "Name";

console.log(jonas["first" + nameKey]); //Jonas
console.log(jonas["last" + nameKey]); //Schmedtmann
```

Now the same thing would not work with the dot operator or the dot notation. So we cannot write Jonas dot and then this here, for example, this would not work at all, so and unexpected string.

And so that's the reason why we need the brackets notation and dot notation.

When we need to first compute the property name, like we did here with the first and last name, then of course we have to use the bracket notation

In any other case, just use the dot notation, which looks a lot cleaner and it's also easier to use.

```javascript
// console.log(jonas.'last' + nameKey)
```

Prompt is yet another built in function that is built into JavaScript and that we can use in any script.

So here we can write a string and then this will create a popup window with an input field.

```javascript
const interestedIn = prompt(
  "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends"
);

console.log(interestedIn);
console.log(jonas.interestedIn); // undefined

/* 
We get undefined, undefined is what we get when we try to access a property on an object that does not exist.

So Jonas does not have a property called 'interested in'

And so therefore the result of trying to access 'interested in' on Jonas is undefined. Now, what we need to do here is instead of the dot notation, use the brackets notation, because then we can put any expression here, which in this case will be interested in.
*/

console.log(jonas[interestedIn]);

/* JavaScript will replace 'interested in' with the actual value of the variable and then that's the one that will be looked up on the Jonas object. */
```

```javascript
if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job, and friends"
  );
}
```

```javascript
jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtman";
console.log(jonas);

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"

console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
);
```

---

## Object Methods

Functions are just another type of value. And if a function is just a value then that means that we can create a key value pair in which the value is a function.

The difference is just in the syntax because now calcAge is not a regular variable like here, but it's a property of the Jonas object.

And so therefore we use the colon here but the rest here is exactly the same.

And so that's why it was very important that we understood what a function expression actually is because here we need to function expression to create this method.

Any function that is attached to an object is called a method.

Just like we can access any other property, we can also access the calcAge property or method.

```javascript
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYeah: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  calcAge: function (birthYeah) {
    return 2037 - birthYeah;
  },
};

console.log(jonas.calcAge(1991)); //46
console.log(jonas["calcAge"](1991)); //46
```

So jonas.calcAge and so calcAge is now the function value, and just like any other function in order to call it, we use the parenthesis.

The first thing that happens here, is that jonas.calcAge is computed. And so this here will become the function value. And then with the parenthesis,

We call that function value here and passed in 1991. And the same thing here, so here we access the property calcAge using the brackets and then this here will basically be replaced with the function, and then we call the function right here, just like before.

We might have noticed that the birth year 1991, that we passed here as an argument to the method is actually already defined in the Jonas object itself up here.

So we already have this information in the Jonas object. And so writing the same number here and here is not ideal because we might make a mistake and pass in the wrong year.

We're violating the don't repeat yourself principle.

So what if we could actually access this birth year property directly from the Jonas object instead of having to pass it in?

JavaScript gives us access to a special variable called this.

We can read the birth year directly from this object itself without having to pass it in as a parameter here into this function.

Now we no longer need this parameter and we will read the birth year directly from the object.

The this key word or the this variable is basically equal to the object on which the method is called, or in other words, it is equal to the object calling the method.

It's always a good idea to reference the object itself and not hard-code the name of the object.

```javascript
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYeah: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,

  calcAge: function (birthYeah) {
     return 2037 - birthYeah;
  }

  calcAge: function () {
    // console.log(this);
    return 2037 - this.birthYeah;
  }

};

console.log(jonas.calcAge());

// Whatever appears before the dot is the one that is calling the method, here jonas is calling the method. Therefore in the method this points to jonas now. then this.birthYear corresponds to 1991

// console.log(jonas['calcAge'](1991))
```

```javascript

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYeah: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,

  calcAge: function (birthYeah) {
    return 2037 - birthYeah;
  }

  calcAge: function () {
    // console.log(this);
    return 2037 - this.birthYeah;
  }

  calcAge: function () {
    this.age = 2037 - this.birthYeah;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
  }
};

console.log(jonas.calcAge()); //46
console.log(jonas.age);       //46
console.log(jonas.age);       //46
console.log(jonas.age);       //46

// Challenge
// "Jonas is a 46-year old teacher, and he has a driver's license"
console.log(jonas.getSummary());
```
