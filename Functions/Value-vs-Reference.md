```Javascript
const flight = "LH234";
const jonas = {
    name: "Jonas Schmedtmann",
    passport: 24454345211
}

const checkIn = function(flightNum, passenger) {
    flightNum = "LH999";
    passenger.name = "Mr. " + passenger.name;

    if(passenger.passport === 24454345211) {
        alert("Checked In")
    } else {
        alert("Wrong Passport!")
    }

}

checkIn(flight,jonas);
console.log(flight);    //LH234 
console.log(jonas);     //{name: "Mr. Jonas Schmedtmann", passport: 24454345211}

//We get checkIn 
// Flight number remains same LH234
// Mr. Jonas Schmedtmann", passport: 24454345211

// Is the same as doing
const flightNum = flight;
const passenger = jonas;


const newPassport = function(person) {
    person.passport = Math.trunc(Math.random() * 1000000000)
}

newPassport(jonas);
checkIn(flight,jonas);
//
```

* ### Primitive parameters (such as a number) are passed to functions by value; the value is passed to the function, but if the function changes the value of the parameter, this change is not reflected globally or in the calling function.

* ### If you pass an object (i.e., a non-primitive value, such as Array or a user-defined object) as a parameter and the function changes the object's properties, that change is visible outside the function, as shown in the following example:

