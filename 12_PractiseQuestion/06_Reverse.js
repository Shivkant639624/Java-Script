// Write a JavaScript function that reverse a number
// function revNum(num){
//     let revNum = 0
//     while(num>0)
//     {
//         let rem = num%10
//         revNum = revNum *10 + rem
//         num = Math.floor(num/10)
        
//     }
//     return revNum
// }
// console.log(revNum(123))
function revNum(num){    
    return Number(num.toString().split("").reverse().join(""))     
}
console.log(revNum(123))

