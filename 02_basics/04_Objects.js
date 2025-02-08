// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Shiv Kant"
tinderUser.LoggedIn  = false

// console.log(tinderUser)

const regularUser = {
    email : "Shiv@gmail.com",
    fullName : {
        userFullName : {
            firstName : "Shivkant",
            lastName : "Pal"
        }

    }

}

// console.log(regularUser.fullName.userFullName.firstName)
//  Object.assign({}, obj1,obj2,......)
const obj1 = {1:"A", 2:"B"}
const obj2 = {3:"A", 4:"B"}
// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2)

// spread operator
const obj3 = {...obj1, ...obj2}
// console.log(obj3)

// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))

// hasOwnProperty("")
// console.log(tinderUser.hasOwnProperty("isLogged"))

const course = {
    cName : "js",
    price : "1000",
    cInstructor: "Shivkant"
}

//  extract varibale from ann object "Destruct ing"
 const {cInstructor:instruct} = course

 console.log(instruct)
 console.log(course)
 