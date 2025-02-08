const score = 400
// console.log(score)

const balance = new Number(100)
// console.log(balance)
// console.log(balance.toString().length)

// ******* toFixed() ******
// To show how many number of decimal, you want to show 
// console.log(balance.toFixed(3))

// ******* toPrecision() ******
const otherNum  = 102.886
// console.log(balance.toPrecision(3))

const hundreds = 100000000

// US standared
// console.log(hundreds.toLocaleString())

//  india standard
// console.log(hundreds.toLocaleString('en-IN'))

//  +++++++++ Maths ++++++++

// console.log(Math)
// console.log(Math.abs(-4))      // make postive to the number
// console.log(Math.round(4.52)) // round up the numbers
// console.log(Math.ceil(4.52)) // if decial number pressent then it will gave the next number
// console.log(Math.floor(4.52)) // It will remove all the decimal number
// console.log(Math.min(4,56,1,23,0,455))
// console.log(Math.max(4,56,1,23,0,455))

// console.log(Math.random()) // 0-1
// console.log(Math.random()*10)  // 0-10
// console.log((Math.random()*10)+1) //1-10

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1))+min) // get into the range