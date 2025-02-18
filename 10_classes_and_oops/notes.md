# javacript and classes

# 'this' 
    for brower : in browser it have the global execution context because it hold 'window'
    for node.js (node envirn ment) : {}

# OOP - everything is object in js included function also

## Object
- collection of proerties and methods
- toLowerCase

Here's what happens behind the scenes when the new keyword is used:
A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined I
on the constructor's prototype.

The constructor is called: The constructor function is
called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor JavaScript assumes this , the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

## why use OOP

## parts of OOP
Object literal

- # 1. Constructor function - 'new' is a constructor
    function User(username, loginCount, isLoogedIn){
        this.username = username
        this.loginCount = loginCount
        this.isLoogedIn = isLoogedIn
        return this
    }

    // const userOne  = User("Shivkant","5",true)
    // const userTwo = User("Umesh","16",false) // userTwo will override to userOne so use new keyword
    // console.log(userOne)

    const userOne  = new User("Shivkant","5",true)
    const userTwo = new User("Umesh","16",false) // userTwo will override to userOne so use new keyword
    console.log(userOne)
    console.log(userTwo)


- # 2. Prototypes
        A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined I
        on the constructor's prototype.

        
        let myHero = ["thor","spiderman"]

        let heroPower = {
            thor : "Hammer",
            spiderman : "sling",

            getSpidermanPower : function(){
                console.log(`Spidy power is ${this.spiderman}`)
            }
        }

        Object.prototype.Shivkant = function(){
            console.log(`Shivkant is present in all Objects`)
        }

        Array.prototype.HeyShiv = function(){
            console.log("Shivkant says you hello")
        }
        // heroPower.Shivkant()
        // myHero.Shivkant()

        myHero.HeyShiv() 
        // heroPower.HeyShiv() // Error because heyPower is not a array


    # ******** Inheritance **********

        const User = {
            name : "Shivkant",
            email : "shiv@gmail.com"
        }

        const Teacher  = {
            makeVideo : true
        }

        const TeachingSupport  = {
            isAvailable : false
        }

        const TASupport  = {
            makeAssignment : 'JS assignment',
            fulltime : true,
            __proto__:TeachingSupport
        }

        Teacher.__proto__ = User //Prototyple inheritance

        //      ******** Modern Syntax *****
        Object.setPrototypeOf(TeachingSupport, Teacher)


        ************* Solve the problem ****************

    # Problem : - Make a single function that can work for all string that can remove the all the widespaces and can return the length of a string

        let anotherUsername  = "ChaiAurCode     "
        let myName = "Shivkant     "
        let myChannel = "ACT_Shivkant_Gaming     "


        String.prototype.trueLength = function(){
            console.log(`${this}`)
            // console.log(`${this.name}`)
            console.log(`True length is : ${this.trim().length}`);
        }

        anotherUsername.trueLength()
        myChannel.trueLength()
        myName.trueLength()



- # 3. classes
    class User{
        constructor(username, email, password){
            this.username = username
            this.email = email
            this.password = password
        }

        encryptPassword(){
            return `${this.password}abc`
        }

        changeUsername(){
            return `${this.username.toUpperCase()}`
        }

    }

    const obj  = new User("Shivkant","shivkant639624@gmail.com", "10025")
    console.log(obj.encryptPassword());
    console.log(obj.changeUsername());


    # behind the scene

        function User(username, email, password){
            this.username = username
            this.email = email
            this.password = password
        }

        User.prototype.encryptPassword = function(){
            return `${this.password}abc`
        }

        User.prototype.changeUsername = function(){
            return `${this.username.toUpperCase()}`
        }

const obj = new User("Shivkant","shivkant639624@gmail.com", "10025")
console.log(obj.encryptPassword())
console.log(obj.changeUsername())
- # 4. Instances (new, this)
    'new' : use for create a new object
    'this' : it has the access of all the member of the current execution context

## call - it gives current execution context passes to another function     

    function setUsername(username){
        // complex DB calls
        this.username = username
        console.log("Called")
    }

    function createUser(username, email, password){
        // setUsername(username) // calling but not setting the username
        setUsername.call(this,username) // now it will take cretUser username

        this.email = email
        this.password = password
        
    }

    const obj1  = new createUser("Shiv","shivkant@gmail.com", 12345)
    console.log(obj1)


# 4 piller
- Abstraction
- Encapsulation
- ## Inheritance

    class User{
        constructor(username){
            this.username = username
        }

        logMe(){
            console.log(`Username : ${this.username}`)
        }
    }

    class teacher extends User{
        constructor(username, email, password){
            super(username);
            this.email = email
            this.password = password
        }
        addCourse(){
            console.log(`A new course was added by ${this.username}`);
        }

    }

    const objOFteacher= new teacher("shiv","shiv@gmail.com","123")
    objOFteacher.addCourse()
    objOFteacher.logMe()

    const objOFUser = new User("Umesh")
    objOFUser.logMe()
    // objOFUser.addCourse() // not accesible



- # Polymorphism

## Lexical scoping - Lexical scope defines the accessibility of variables and functions depending on their location in the source code. Variables and functions have different levels of scope:

    Global Scope: Variables defined outside any function or block, accessible anywhere in the program.

    Local Scope: Variables defined inside a function or block, accessible only within that specific function or block.

    Nested Scope: Inner functions have access to variables in their parent functions.

    Block Scope: Variables defined with let and const are limited to the block they are declared in, like loops or conditionals.

    function outer(){
        let username = "Shivkant"
        function inner(){
            console.log("Inner One : "+username);
        }
        function innerTwo(){
            console.log("Inner Two : "+username);
        }
        inner();
        innerTwo();
    }
    outer()
    console.log(username); // can not be access

# clouser
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Clouser</title>
    </head>
    <body style="background-color: #313131;">    
        <button id="orange">Orange</button>
        <button id="green">Green</button>
    </body>
    <script>

        // in clouser, lexical scope of function is returned, that's why the varibale can be stored 
        function MakeFun(){
            let name = "Moziila";
            function displayName(){
                console.log(name)
            }
            return displayName;
        }
        const myFunc = MakeFun();
        myFunc();
        


    </script>
    <script>
        // document.getElementById('orange').onclick = function (){
        //     document.body.style.backgroundColor = "orange"
        // }
        // document.querySelector('#green').addEventListener('click', function(){
        //     document.body.style.backgroundColor = "green"
        // })

        function clickHandler(color){
            // document.body.style.backgroundColor = `${color}` 
            return function(){
                document.body.style.backgroundColor = `${color}` 
            }       
        }
        document.getElementById('orange').onclick = clickHandler("orange")
        document.getElementById('green').onclick = clickHandler("green")
    </script>
    </html>