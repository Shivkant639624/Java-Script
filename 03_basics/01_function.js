function greet()
{
    console.log("goodmorning shiv")
}
// greet()


// function addTwoNum(num1, num2)
// {
//     console.log(num1+num2)
// }
// const res = addTwoNum(2,7)
// console.log("Result : ",res)

function addTwoNum(num1, num2)
{
    let result = num1+num2
    console.log("Shiv Kant")
    return result
}
// addTwoNum(2,7)

// const result = addTwoNum(2,7)
// console.log("Result : ",result)


// function loginUserMessage(username)
// {
//     return `${username} is just logged  in`
// }
// // console.log(loginUserMessage("Shivkant"))
// // console.log(loginUserMessage())


function loginUserMessage(username="Shiv")
{
    if(username === undefined)
    {
        console.log("Please enter your username")
        return
    }
    return `${username} is just logged  in`
}
// console.log(loginUserMessage("Shivkant"))
// console.log(loginUserMessage())

// When no. of parameter not defined
// function calculatePrice(...num1)
// {
//     return(num1)
// }

// console.log(calculatePrice(200,499,788))

function calculatePrice(val1,val2, ...num1)
{
    return(num1)
}

// console.log(calculatePrice(200,499,788,647))

const  user = {
    username:"Shivkant",
    price : 199
}

function handleObject(anyobject)
{
    console.log(`Username is ${anyobject.username} and price is  ${anyobject.price}`)
}
// handleObject(user)

const arr = [20,34,56,1,2,0]
function return2Value(getArr)
{
    return getArr[1]
}
// console.log(return2Value(arr))
console.log(return2Value([200,344,55,134,45,2]))
