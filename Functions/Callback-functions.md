```Javascript
const oneWord = function(str) {
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function(str) {
    const [first,...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function(str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);
}

transformer("Javascript is the best!", upperFirstWord);

// Original string: Javascript is the best!
// Transformed string: JAVASCRIPT is the best!
// Transformed by: upperFirstWord

transformer("Javascript is the best!", oneWord);

// Original string: Javascript is the best!
// Transformed string: Javascriptisthebest!
// Transformed by: oneWord
```


```Javascript
// JS uses callbacks all the time

const high5 = function() {
    console.log("😁");
}
document.body.addEventListener("click",high5);

["Jonas","Martha","Adam"].forEach(high5);
```