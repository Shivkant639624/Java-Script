const myNum = [1,2,3,4,5,6,7,8,9,10]

// map return values automatically
// const newMyNum = myNum.map((num)=> num+10)
// console.log(newMyNum)

// If scope uses with arrow function then return
// const newMyNum = myNum.map((num) => { return num*10})
// console.log(newMyNum)

// Chaining => if more than one method is used in a single statement
// map 1=> multiply by 10 | map 2=> add 1
const newMyNum = myNum
                .map((num)=> num*10)
                .map((num) => num+1)
                .filter((num) => num >= 40)
console.log(newMyNum)


