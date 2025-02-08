// ****** Primitive *******
// 7 type : String, Number, Boolean, nill, undefined, Symbol, BigInt 



const score = 100
const scoreVal = 100.3

const isLoggedIn  = false
const outsideTemp  = null
let userMail

const id = Symbol("123")
const anotherId = Symbol("123")
// console.log(id === anotherId)
// console.log(anotherId)
// console.log(id)

// ****** Refrence(Non-Primitive) *******
// Array, Object, Function

// Array
const Arr = ["shiv","Rohit","Umesh","saurabh"]

// Object
let myObj = {
    name : "Shivkant",
    age  : 24
}


// Function
const myFun = function()
{
    console.log("This is function")
}

// Stcak(Primitive), Heap (Non-Primitive)
// Stcak(Primitive) - gets copy of var
// Changes will reflect in the varibale you have assign a variable if we will change the assigned varibale

let myYTubeName = "ACT Gaming"
let anotherName = "Shiv Kant"
anotherName  = "Umesh"

// console.log(myYTubeName)
// console.log(anotherName)

// Heap (Non-Primitive) - gets refrence of var
// Changes will **not** reflect in the varibale you have assign a variable if we will change the assigned varibale

let user1 = {
    email:"shiv@gmail.com",
    upi: "user&ybl"
}
let user2 = user1

user2.email = "r@gmail.com"

console.log(user1.email)
console.log(user2.email)