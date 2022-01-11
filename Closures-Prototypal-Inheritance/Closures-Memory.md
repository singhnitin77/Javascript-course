Closures has two very important benefits.
1. Memory efficient
2. Encapsulation
These two things are coolest part about the closures 

<!-- Memory Efficient -->
Accessing index of array

```Javascript
function heavyDuty(index) {
    const bigArray = new Array(7000).fill("😊")
    return bigArray[index]
}

heavyDuty(688)
```
Let's say this index 688 maybe a database or just an array that gets accessed a lot 

```Javascript
function heavyDuty(index) {
    const bigArray = new Array(7000).fill("😊")
    console.log("created");
    return bigArray[index]
}

heavyDuty(688)
heavyDuty(688)
heavyDuty(688)
heavyDuty(688)
```
---
```Javascript
function heavyDuty(index) {
    const bigArray = new Array(7000).fill("😊")
    console.log("created");
    return bigArray[index]
}

heavyDuty(688)
heavyDuty(688)
heavyDuty(688)
const getHeavyDuty = heavyDuty2();
/* We are able to use heavyDuty2() up here because of hoisting, function declaration gets hoisted to the top*/
getHeavyDuty(688)
getHeavyDuty(700)
getHeavyDuty(800)

function heavyDuty2() {
    const bigArray = new Array(7000).fill("😊")
    console.log("created Again!");
    return function(index) {
        return bigArray(index) {
            return bigArray[index];
        }
    }
}

/* First heavyDuty() was created 3 times versus heavyDuty2() where we used closures we are able to create big array ones we just maintained closure scope & able to call over & over without doing all creation, destruction work*/

```
---
---

## Encapsulation

```Javascript
const makeNuclearButton = () => {
    let timeWithoutDestruction = 0;
    const passTime = () => timeWithoutDestruction++;
    const totalPeaceTime = () => timeWithoutDestruction;
    const launch = () => {
        timeWithoutDestruction = -1;
        return "💣";
    }
    setInterval(passTime,1000)
    return {
        launch: launch,
        totalPeaceTime: totalPeaceTime
    }
}

const ohno = makeNuclearButton();
ohno.totalPeaceTime()

// Use Developer Tools
```