### Looping Objects

```javascript
for (const day of Object.keys(openingHours)) {
  console.log(day);
  // thu
  // fri
  // sat
}
```

```javascript
// Property NAMES

const properties = Object.keys(openingHours);
console.log(properties); // ["thu","fri","sat"]

let openStr = `We are open on ${properties.length} days: `;
// We are open on 3 days
```

```javascript
let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}

console.log(openStr);
```

---

```javascript
// Property VALUES

const values = Object.values(openingHours);
console.log(values);
```

---

```javascript
// Entire object

const entries = Object.entries(openingHours);
// console.log(entries);

for (const x of entries) {
  console.log(x);
}

// [key, value]
for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}
```
