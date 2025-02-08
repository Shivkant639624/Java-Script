const mail = "shiv@gmail.com"

// if(mail)
// {
//     console.log("Got the mail")
// }
// else{
//     console.log("Don't have user mail")
// }




// Falsy values => false, 0 , BigInt - 0n, "", null, undefined, NaN

// Truthy value => "0", 'false', " ", [],{}, function(){}

// const emptyObj = {}
// if(Object.keys(emptyObj).length === 0)
// {
//     console.log("Object is empty")
// }


//Nullish Coalescing Operator (??): null underfined

// let val1;
// val1 = 5 ?? 10
// console.log(val1)

// val1 = null ?? 10
// console.log(val1)

// val1 = undefined ?? 10
// console.log(val1)

//Ternary Operator => condition ? true : false
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")  