//  Dates

let myDate = new Date();
// console.log(myDate)


// date => String

// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())

// Date is object, months starts from 0-11
// console.log(typeof myDate)

// let myCreatedDate = new Date(2024,0,23)
// console.log(myCreatedDate.toDateString())

// let myCreatedDate = new Date(2024,0,23,7,8)
// console.log(myCreatedDate.toLocaleString())

let myCreatedDate = new Date("2024-01-21")
// console.log(myCreatedDate.toLocaleString())

let timeStamp = Date.now()

// console.log(timeStamp)
// console.log(myCreatedDate.getTime()); //miliseconds

// console.log(Math.floor(Date.now()/1000)); // seconds


let newDate = new Date();
// console.log(newDate)
// console.log(newDate.getMonth())
// console.log(newDate.getDate())
// console.log(newDate.getDay())
// console.log(newDate.getHours())
// console.log(newDate.getFullYear())
// console.log(newDate.getTime())

newDate.toLocaleString('default',{
    weekday : "long"
})
