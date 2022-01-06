```Javascript
const myName = 'Jonas';

if (myName == "Jonas") {
    console.log(`Jonas is a ${job}`);
    const age = 2037 - 1989;
    console.log(age);
    const job = "teacher";
    console.log(x);
}
```

## Hoisting


* ### Hoisting basically make some types of variables accessible,or let's say usable in the code before they are actually declared in the code.

* ### Many people simply define hoisting by saying that variables are magically lifted or moved to the top of their scope

* ### for example, to the top of a function. And that is actually what hoisting looks like on the surface.

* ### Hoisting does not work the same for all variable types.
---
## How hosting works for function declarations, variables defined with var, let or const and function expressions, and also arrow functions.

## Function declarations
* ### function declarations are hoisted and the initial value in the variable environment is set to the actual function.

* ### This means is that we can use function declarations before they are actually declared in the code,

* ### function declarations are block scoped, Just keep in mind that this is only true for strict mode.
---
## Variables declared with var

* ### Var variables are also hoisted, but hoisting works in a different way here.

* ### When we try to access a var variable before it's declared in a code, we get undefined.
---
## Let and const variables

* ### let and const variables are not hoisted. 

* ### Technically they are actually hoisted but their value is basically set to an initialized. So there is no value to work with at all.

* ### Instead, we say that these variables are placed in a so-called Temporal Dead Zone or TDZ which makes it so that we can't access the variables between the beginning of the scope and to place where the variables are declared.

* ### So as a consequence, if we attempt to use a let or const variable before it's declared, we get an error.
---
## Function expressions

* ### Here Hoisting depends if they were created using var or const or let.

* ### Because these functions are simply variables. And so they behave the exact same way as variables in regard to hoisting.

* ### This means that a function expression or arrow function created with var is hoisted to undefined.

* ### But if created with let or const, it's not usable before it's declared in a code because of the Temporal Dead Zone

* ### This is the reason why we cannot use function expressions before we write them in the code, unlike function declarations.
---
## Temporal Dead Zone.
```Javascript
const myName = 'Jonas';

if (myName == "Jonas") {
    console.log(`Jonas is a ${job}`);
    const age = 2037 - 1989;
    console.log(age);
    const job = "teacher";
    console.log(x);
}
```
* ### Job variable is a const so it's scoped only to this if block and it's gonna be accessible starting from the line where it's defined.

* ### Well, because there is this Temporal Dead Zone for the job variable.

* ### It's basically the region of the scope in which the variable is defined, but can't be used in any way.

* ### Now, if we still tried to access the variable while in the TDZ like we actually do in the first line of this if block, then we get a reference error

* ### However, if we tried to access a variable that was actually never even created, like in the last line here where we want to log x, then we get a different error message saying that x is not defined at all.

* ### So to recap, basically each and every let and const variable get their own Temporal Dead Zone that starts at the beginning of the scope until the line where it is defined.
* ### And the variable is only safe to use after the TDZ, so the Temporal Dead Zone.
---
##  What is actually the need for JavaScript to have a Temporal Dead Zone?

* ### Main reason that the TDZ was introduced in ES6 is that the behavior we described before makes it way easier to avoid and catch errors.

* ### Because using a variable that is set to undefined before it's actually declared can cause serious bugs which might be hard to find.

* ### So accessing variables before declaration is bad practice and should be avoided.

* ### A second and smaller reason why the TDZ exists is to make const variables actually work the way they are supposed to.
---
## If hoisting creates so many problems, why does it exist in the first place?

* ### Creator of JavaScript basically implemented hoisting so that we can use function declarations before we use them. Because this is essential for some programming techniques, such as mutual recursion.

* ### Some people also think that it makes code a lot more readable.

* ### Now, the fact that it also works for var declarations is because that was the only way hoisting could be implemented at the time.

* ### So the hoisting of var variables is basically just a byproduct of hoisting functions.
---