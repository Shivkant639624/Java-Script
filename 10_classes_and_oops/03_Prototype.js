
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


//  ********Inheritance*********

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


//  ************* Solve the problem ****************
// Make a single function that can work for all string that can remove the all the widespaces and can return the length of a string



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

