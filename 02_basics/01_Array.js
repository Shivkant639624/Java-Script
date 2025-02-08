const arr1 = [0,1,2,3,4,5]
const arr2 = ["Shivkant", "Saurabh","Rohit","Lakshmi","Meera"]
// console.log(arr1[0])

//  ***** Array Methods *****

// arr1.push(8)
// arr1.push(10)

// Remove last value
// arr1.pop()
// arr1.push(10)

// add element from strat index
arr1.unshift(9)

// delete from start
// arr1.shift()
// console.log(`Array : ${arr1}`)

// console.log(`Is 9 exist : ${arr1.includes(9)}`)
// console.log(`Indexof 5 : ${arr1.indexOf(4)}`)
// console.log(arr1)

//  Array into string  => string, seprated by ,
const newArr = arr1.join()
// console.log(arr1)
// console.log(newArr)

// console.log("A",arr1);

//   ******* slice *******
// last value of of interval ""not included**

const mynewARR = [1,2,3,45,67,7,8,988,34]
const newArr1 = mynewARR.slice(1,3)
console.log(`slice(1,3) :   ${newArr1}`)
console.log(`Original Array : ${mynewARR}`)

// ******* splice *******
// last value of of interval ""included**
const newArr2 = mynewARR.splice(1,3)
console.log(`splice(1,3) :   ${newArr2}`)
console.log(`Original Array : ${mynewARR}`)