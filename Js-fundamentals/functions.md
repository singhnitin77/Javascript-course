## Arrow Functions

* ### Arrow function is simply a special form of function expression.
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

* ### One liner arrow functions are lot easier and faster to write. We don't need need curly braces & return happens implicitly.

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
const friends = ['Nitin','Kyle','Peter'];
console.log(friends);
console.log(friends[0]);    //Nitin
console.log(friends[1]);    //Kyle
console.log(friends[2]);    //John

console.log(friends.length);
console.log(friends[friends.length-1]);     //John

friends[2] = 'Jay';
console.log(friends);
```
* ### Only Primitive values are immutable, but array is not primitive so we can always change it.
* ### Thus we can actually mutate arrays even though they are declared with const, but we can't replace the entire array.
* ### An array can actually hold values with different types all at a same time.
```javascript
const firstName = 'Nitin';
const Nitin = ['Nitin','Singh',2037-1991,'Student',friends];
console.log(Nitin);
```

```javascript
const years = new Array(2000,2001,2002,2003);
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