// let a =10
// const b = 20
// var c = 30

// console.log(a)
// console.log(b)
// console.log(c)

// let a =20
// if(true)
// {
//     let a =10
//     const b = 20
//     var c = 30 // it is accesible
// }

// console.log(a)
// // console.log(b)
// console.log(c)

function one()
{
    const username = "Shivkant"

    function two()
    {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()

if(true)
{
    const username = "Shivkant"
    if(username == "Shivkant")
    {
        const website = " Youtube"
        // console.log(username+website)
    }
    // console.log(website);
}

// console.log(username)

console.log(addOne(2))
function addOne(num)
{
    return num+1
}

// console.log(username) //not possible
const addTwo = function(num)
{
    return num+1
}