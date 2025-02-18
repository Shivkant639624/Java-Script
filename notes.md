# JavaScript Basics

## 1. What is JavaScript?
JavaScript is a high-level, dynamically typed programming language used for web development to create interactive web pages.

## 2. Data Types in JavaScript
- **Primitive**: String, Number, Boolean, Undefined, Null, Symbol, BigInt  
- **Non-Primitive**: Object, Array, Function  

## 3. Null vs Undefined
```js
let a = null; // Explicitly assigned null
let b; // Undefined
```

## 4. Ways to Declare a Variable
```js
var x = 5; // Function-scoped
let y = 10; // Block-scoped
const z = 15; // Block-scoped, cannot be reassigned
```

## 5. == vs ===
```js
console.log('5' == 5); // true (checks value)
console.log('5' === 5); // false (checks value & type)
```

## 6. Array and map, filter Methods
```js
let arr = [1, 2, 3];
console.log(arr.map(x => x * 2)); // [2, 4, 6]
console.log(arr.filter(x => x > 1)); // [2, 3]
```

## 7. Functions & Types
```js
function greet() { return "Hello"; } // Function Declaration
let greetExp = function() { return "Hi"; }; // Function Expression
const greetArrow = () => "Hey"; // Arrow Function
```

## 8. Closure & Lexical Scope
```js
function outer() {
  let x = 10;
  return function inner() { console.log(x); };
}
let fn = outer();
fn(); // 10
```

## 9. Hoisting
```js
console.log(a); // undefined
var a = 5;
```

## 10. Creating and Accessing Objects
```js
let obj = { name: "John", age: 30 };
console.log(obj.name); // John
console.log(obj["age"]); // 30
```

## 11. Prototype
```js
function Person(name) { this.name = name; }
Person.prototype.greet = function() { console.log("Hello " + this.name); };
```

## 12. Callback Function
```js
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}
greet("Alice", () => console.log("Callback executed"));
```

## 13. Higher-Order Function
```js
function operate(fn) { return fn(5); }
console.log(operate(x => x * 2)); // 10
```

## 14. Array Destructuring
```js
let [a, b] = [1, 2];
console.log(a, b); // 1, 2
```

## 15. Callback Hell
```js
async1(() => { async2(() => { async3(() => { console.log("Done"); }); }); });
```

## 16. Rest Operator
```js
function sum(...nums) { return nums.reduce((a, b) => a + b); }
console.log(sum(1, 2, 3)); // 6
```

## 17. Short-Circuiting
```js
console.log(0 || "Hello"); // "Hello"
console.log(0 && "Hello"); // 0
```

## 18. Synchronous vs Asynchronous
```js
console.log("Start");
setTimeout(() => console.log("Async"), 1000);
console.log("End");
```

## 19. setTimeout & setInterval
```js
setTimeout(() => console.log("Executed after 2 sec"), 2000);
setInterval(() => console.log("Runs every 1 sec"), 1000);
```

## 20. Deep Copy vs Shallow Copy
```js
let obj1 = { a: 1, b: { c: 2 } };
let shallowCopy = Object.assign({}, obj1);
let deepCopy = JSON.parse(JSON.stringify(obj1));
```

## 21. Promises
```js
let promise = new Promise((resolve, reject) => resolve("Success"));
promise.then(res => console.log(res));
```

## 22. Async/Await
```js
async function fetchData() {
  let data = await fetch("url");
  console.log(data);
}
```

## 23. Event Loop
```js
console.log("Start");
setTimeout(() => console.log("Inside Timeout"), 0);
console.log("End");
```

## 24. Error Handling
```js
try { throw new Error("Oops"); } catch (e) { console.log(e.message); }
```

## 25. Event Handling
```js
document.getElementById("btn").addEventListener("click", () => console.log("Clicked"));
```

## 26. First-Class Functions
```js
const execute = (fn) => fn();
execute(() => console.log("Executed"));
```

## 27. Pure vs Impure Functions
```js
function pure(x) { return x * 2; } // Pure
let y = 10;
function impure(x) { y++; return x * y; } // Impure
```

## 28. Function Currying
```js
const add = a => b => a + b;
console.log(add(2)(3)); // 5
```

## 29. Call, Apply, Bind
```js
function greet(name) { console.log("Hello " + name); }
greet.call(null, "John");
greet.apply(null, ["John"]);
let boundGreet = greet.bind(null, "John");
boundGreet();
```

## 30. Selecting DOM Elements
```js
document.querySelector(".class");
document.getElementById("id");
```

## 31. Creating & Appending Elements
```js
let div = document.createElement("div");
document.body.appendChild(div);
```

## 32. textContent vs innerHTML
```js
document.getElementById("demo").textContent = "<b>Hello</b>"; // Displays as text
document.getElementById("demo").innerHTML = "<b>Hello</b>"; // Renders as bold text
```

# JavaScript and Classes

## `this` Keyword
- **For Browser:** In the browser, the global execution context is the `window` object.
- **For Node.js:** In Node.js, the global execution context is `{}` (an empty object).

## Object-Oriented Programming (OOP) in JavaScript
- Everything in JavaScript is an object, including functions.

### Object
- Collection of properties and methods.
- Example: `toLowerCase()` is a method of a string object.

## How `new` Works
Here's what happens behind the scenes when the `new` keyword is used:
1. **A new object is created.**
2. **A prototype is linked** to the constructor function.
3. **The constructor function is called**, and `this` is bound to the new object.
4. **If no explicit return value is provided,** the new object is returned.

## Why Use OOP?
- Reusability
- Scalability
- Code organization
- Encapsulation

## Parts of OOP
### 1. Constructor Function
```javascript
function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
}

const userOne = new User("Shivkant", 5, true);
const userTwo = new User("Umesh", 16, false);

console.log(userOne);
console.log(userTwo);
```

### 2. Prototypes
```javascript
let myHero = ["thor", "spiderman"];

let heroPower = {
    thor: "Hammer",
    spiderman: "Web Sling",
    getSpidermanPower: function () {
        console.log(`Spidy power is ${this.spiderman}`);
    }
};

Object.prototype.Shivkant = function () {
    console.log("Shivkant is present in all Objects");
};

Array.prototype.HeyShiv = function () {
    console.log("Shivkant says you hello");
};

myHero.HeyShiv(); // Works
// heroPower.HeyShiv(); // Error: not an array
```

### 3. Inheritance
```javascript
const User = {
    name: "Shivkant",
    email: "shiv@gmail.com"
};

const Teacher = {
    makeVideo: true
};

const TeachingSupport = {
    isAvailable: false
};

const TASupport = {
    makeAssignment: "JS assignment",
    fulltime: true,
    __proto__: TeachingSupport
};

Teacher.__proto__ = User; // Prototype inheritance

// Modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);
```

#### Problem: Remove Whitespace and Get Length
```javascript
String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
};

"ChaiAurCode     ".trueLength();
"ACT_Shivkant_Gaming     ".trueLength();
```

### 4. Classes
```javascript
class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
    encryptPassword() {
        return `${this.password}abc`;
    }
    changeUsername() {
        return `${this.username.toUpperCase()}`;
    }
}

const obj = new User("Shivkant", "shivkant639624@gmail.com", "10025");
console.log(obj.encryptPassword());
console.log(obj.changeUsername());
```

### 5. Instances (`new`, `this`)
- **`new`**: Creates a new object.
- **`this`**: Refers to the current execution context.

## Call Method (`call`)
```javascript
function setUsername(username) {
    this.username = username;
    console.log("Called");
}

function createUser(username, email, password) {
    setUsername.call(this, username);
    this.email = email;
    this.password = password;
}

const obj1 = new createUser("Shiv", "shivkant@gmail.com", 12345);
console.log(obj1);
```

## Four Pillars of OOP
- **Abstraction**
- **Encapsulation**
- **Inheritance**
- **Polymorphism**

### Inheritance Example
```javascript
class User {
    constructor(username) {
        this.username = username;
    }
    logMe() {
        console.log(`Username: ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username);
        this.email = email;
        this.password = password;
    }
    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}

const teacherObj = new Teacher("Shiv", "shiv@gmail.com", "123");
teacherObj.addCourse();
teacherObj.logMe();
```

## Lexical Scoping
```javascript
function outer() {
    let username = "Shivkant";
    function inner() {
        console.log("Inner One: " + username);
    }
    function innerTwo() {
        console.log("Inner Two: " + username);
    }
    inner();
    innerTwo();
}
outer();
// console.log(username); // Cannot access
```

## Closures
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Closure</title>
</head>
<body style="background-color: #313131;">
    <button id="orange">Orange</button>
    <button id="green">Green</button>
</body>
<script>
    function MakeFun() {
        let name = "Mozilla";
        function displayName() {
            console.log(name);
        }
        return displayName;
    }
    const myFunc = MakeFun();
    myFunc();
</script>
<script>
    function clickHandler(color) {
        return function () {
            document.body.style.backgroundColor = color;
        };
    }
    document.getElementById('orange').onclick = clickHandler("orange");
    document.getElementById('green').onclick = clickHandler("green");
</script>
</html>
```

