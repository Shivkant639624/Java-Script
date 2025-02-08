// Object Literals
const mySymbol = Symbol("key1")
const jsUser = {
    name : "Shiv Kant",
    "full name" : "Shivkant Pal",
    [mySymbol] : "myKey1", //symbol syntax use []
    age : 18,
    location : "Noida",
    email : "Shiv@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]

}

// console.log(jsUser.email)
// console.log(jsUser["email"])

// console.log(jsUser.full name) // not accesible 
// console.log(jsUser["full name"]) // use this syntex
// console.log(jsUser[mySymbol])

jsUser.email = "Rohit@gmail.com"
// Object.freeze(jsUser) // Can not modify but it will not give any error
// console.log(jsUser)

jsUser.email = "shiv@gmail.com"
// console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello js user")
}
jsUser.greeting2 = function(){
    console.log(`Hello js user, ${this.name}`)
}

console.log(jsUser.greeting())
console.log(jsUser.greeting2())
