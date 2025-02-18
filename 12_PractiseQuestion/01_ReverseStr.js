// 1 Given a string, reverse each word in the sentence
let str = "Saare Jahan se aacha hindustan hamara"

// const savedStr = str.split(" ").map(function (word){
//     return word.split("").reverse().join("")
// })
// console.log(savedStr.join(" "))
console.log(str)
const revStr = str.split("").reverse().join("").split(" ").reverse().join(" ")
console.log(revStr)

