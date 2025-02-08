// if(2 == "2")
// {
//     console.log("executed");
// }


// if(2 === "2")
// {
//     console.log("executed");
// }
// else
// {
//     console.log("Variable type missmatch");
// }

// const temprature = 40

// if(temprature < 50)
// {
//     console.log("temprature is less than 50");
// }
// else
// {
//     console.log("temprature is Greater than 50");
// }


const userLoggedIn = true
const debitCard  = true
if(userLoggedIn && debitCard){
    console.log("Allow to buy the course")
}


const logInFromGoogle = false
const logInFromEmail = true
if(logInFromEmail || logInFromGoogle)
{
    console.log("User logged in")
}