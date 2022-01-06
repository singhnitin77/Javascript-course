```Javascript
let age = 30;
let oldAge = age;
age = 31;
console.log(age);       //31
console.log(oldAge);    //30
```
```Javascript
const me = {
    name: 'Jonas',
    age: 30
};

const friend = me;
friend.age = 27;
console.log("Friend: ",friend);
//{name: 'Jonas',age: 27}

console.log("Me",me);               
//{name: 'Jonas',age: 27}
```

## Difference between the way primitive types and objects are stored and memory.

### JavaScripts primitive data types, 

* ### Numbers
* ### Strings
* ### Boolean's
* ### Undefined
* ### Null
* ### Symbol
* ### BigInt

### Then everything else are basically objects.
* ### Objects created with the object literal, arrays and even functions are all objects.
* ### Now, when we're talking about memory management, it's usual to call primitives, primitive types and objects reference types because of the different way in which they are stored in memory.

* ### JavaScript engine has two components, the call stack, where functions are executed and to heap where objects are stored in memory.

* ### All of objects or reference types will get stored right in the memory heap.

* ### Primitives or primitive types are stored in the call stack. 
---
## Primitive values example.
```Javascript
let age = 30;
let oldAge = age;
age = 31;
console.log(age);       //31
console.log(oldAge);    //30
```
* ### when we declare a variable like age equals 30, Well, first JavaScript will create a so-called unique identifier with the variable name.

* ### Then a piece of memory will be allocated with a certain address, so 0001 in this example, and finally the value would be stored in memory at the specified address.

* ### So in this case, the value 30 will be specified at memory address 0001.

* ### This all happens in a call stack where primitive values are stored.

* ### Identifier actually points to the address and not to the value itself.

* ### So we would say that the age variable is equal to 30, but in fact, age is equal to the memory address 0001, which holds the value of 30.

* ### Now, in the next line, we declare old age to be equal to age.

* ### A variable actually holds a memory address, It will simply point to the same memory address as the age variable. So it will look like old age, is simply 30 as well. but now in the next line, we set eight to 31.

* ### The value at address 0001 will certainly not become 31 because that would change old age as well, since they both point to the same address.

* ### Also the value at a certain memory address is immutable, or in other words, it cannot be changed.

* ### So instead what's going to happen here is that a new piece of memory is allocated.

* ### So it's created and the age identifier now simply points to the new address, which is holding the new value of 31,

---
```Javascript
const me = {
    name: 'Jonas',
    age: 30
};

const friend = me;
friend.age = 27;
console.log("Friend: ",friend);
//{name: 'Jonas',age: 27}

console.log("Me",me);               
//{name: 'Jonas',age: 27}
```
* ### Now with reference values, things work a bit differently,

* ### When a new object is created such as this Me object, it is stored in the heap.

* ### Now in the case of reference values like this Me object the Me identifier does actually not point directly to this newly created memory address in the heap.

* ### So in this example, D30F, instead, it will point to a new piece of memory that's created in the stack.

* ### this new piece of memory will then point to the object that's in the heap by using the memory address as its value.
* ### In other words, the piece of memory in the call stack has a reference to the piece of memory in the heap, which holds or Me object.
---


