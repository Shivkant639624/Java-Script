const user = {
    username: "Shivkant",
    price : 999,
    welcomeMessge : function()
    {
        console.log(`${this.username}, welcome to website`)
        // console.log(this);

    }
}
// // console.log(user.welcomeMessge())
// user.username = "Rohit"
// // console.log(user.welcomeMessge())
// console.log(this) //browser => window


// function chai()
// {
//     let username = "Shivkant"
//     console.log(this)
//     console.log(this.username)
// }
// chai()

// const chai=  function()
// {
//     let username = "Shivkant"
//     // console.log(this)
//     console.log(this.username)
// }
// chai()


// ******Arrow Function *******
// const chai = () =>
// {
//     let username = "Shivkant"
//     console.log(this)
    
// }
// chai()


// const addTwo = (num1, num2) =>
// {
//     return num1+num2
// }
// console.log(addTwo(2,3))

// implicit return 
// const addTwo = (num1, num2) => num1+num2    
// const addTwo = (num1, num2) => (num1+num2)    
const addTwo = (num1, num2) => ({username :"Shiv"})    
console.log(addTwo(2,3))

